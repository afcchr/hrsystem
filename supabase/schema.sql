-- =============================================================================
-- Art Fresh Chicken Corp. HRMS — Supabase schema
-- Run this once in Supabase Dashboard > SQL Editor (paste all, then Run).
-- Safe to re-run: uses IF NOT EXISTS / CREATE OR REPLACE everywhere.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. Generic document-style tables.
--    Each row is one record from the app; `data` holds the full JSON object
--    exactly as the app already uses it (no reshaping needed on the client).
-- ---------------------------------------------------------------------------
do $$
declare
  t text;
begin
  foreach t in array array[
    'employees','applicants','invitations','leave_requests','performance_reviews',
    'trainings','training_sessions','cases','movements','offboarding','onboarding',
    'notifications','audit_log','corrections','attendance_overrides',
    'doc_overrides','shift_overrides'
  ]
  loop
    execute format($f$
      create table if not exists public.%I (
        id text primary key,
        data jsonb not null default '{}'::jsonb,
        updated_at timestamptz not null default now()
      );
    $f$, t);
    execute format('alter table public.%I enable row level security;', t);
  end loop;
end $$;

-- ---------------------------------------------------------------------------
-- 2. Profiles (one row per logged-in HR staff account).
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  name text,
  role text default 'HRMGR',
  role_name text default 'HR Manager',
  initials text,
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

-- auto-create a profile row whenever the administrator adds a new HR user
-- (Authentication > Users > Add user) — there is no public sign-up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, name, initials)
  values (
    new.id,
    new.email,
    initcap(split_part(new.email, '@', 1)),
    upper(left(split_part(new.email, '@', 1), 2))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- 3. Row Level Security policies
--    Only signed-in HR staff (authenticated) can read or write ANY table —
--    including invitations and applicants. The anonymous/public key gets no
--    table access at all. The public applicant portal never talks to these
--    tables directly; it only calls the three narrow functions in section 4
--    below, so a stranger holding the public anon key can never list or
--    browse invitations, applicants, or anything else.
-- ---------------------------------------------------------------------------
do $$
declare
  t text;
begin
  foreach t in array array[
    'employees','applicants','invitations','leave_requests','performance_reviews',
    'trainings','training_sessions','cases','movements','offboarding','onboarding',
    'notifications','audit_log','corrections','attendance_overrides',
    'doc_overrides','shift_overrides'
  ]
  loop
    -- remove any older, looser anon policies from a previous version of this file
    execute format('drop policy if exists "public can view invitations" on public.%I;', t);
    execute format('drop policy if exists "public can update invitations" on public.%I;', t);
    execute format('drop policy if exists "public can submit applications" on public.%I;', t);
    execute format('drop policy if exists "staff full access" on public.%I;', t);
    execute format($f$
      create policy "staff full access" on public.%I
      for all to authenticated
      using (true) with check (true);
    $f$, t);
  end loop;
end $$;

drop policy if exists "user can view own profile" on public.profiles;
create policy "user can view own profile" on public.profiles
  for select to authenticated using (auth.uid() = id);

drop policy if exists "user can update own profile" on public.profiles;
create policy "user can update own profile" on public.profiles
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- ---------------------------------------------------------------------------
-- 4. Public applicant portal (#/apply/<invitation-id>, no login).
--    Each function runs with elevated privilege (SECURITY DEFINER) and only
--    ever touches the ONE invitation identified by p_id — never a listing,
--    never another applicant's data. This is the only door anon gets.
-- ---------------------------------------------------------------------------
create or replace function public.portal_get_invitation(p_id text)
returns jsonb
language plpgsql
security definer set search_path = public
as $$
declare v jsonb;
begin
  select data into v from public.invitations where lower(id) = lower(p_id);
  return v;
end;
$$;
revoke all on function public.portal_get_invitation(text) from public;
grant execute on function public.portal_get_invitation(text) to anon, authenticated;

create or replace function public.portal_open_invitation(p_id text)
returns jsonb
language plpgsql
security definer set search_path = public
as $$
declare v jsonb;
begin
  select data into v from public.invitations where lower(id) = lower(p_id);
  if v is null then return null; end if;
  if v->>'status' = 'Unused' then
    v := v || jsonb_build_object('status','Opened','openedOn', to_char(now(),'YYYY-MM-DD'));
    update public.invitations set data = v, updated_at = now() where lower(id) = lower(p_id);
  end if;
  return v;
end;
$$;
revoke all on function public.portal_open_invitation(text) from public;
grant execute on function public.portal_open_invitation(text) to anon, authenticated;

-- p_applicant is the full applicant record the client already built (same
-- shape the app has always used). This function is the one-time-use gate:
-- an invitation that is already Submitted or Revoked is rejected server-side,
-- which is the one check that must never be trusted to the client alone.
create or replace function public.portal_submit_application(p_id text, p_applicant jsonb)
returns jsonb
language plpgsql
security definer set search_path = public
as $$
declare inv jsonb;
begin
  select data into inv from public.invitations where lower(id) = lower(p_id);
  if inv is null then return jsonb_build_object('ok', false, 'error', 'Invitation not found.'); end if;
  if inv->>'status' = 'Submitted' then return jsonb_build_object('ok', false, 'error', 'already-used'); end if;
  if inv->>'status' = 'Revoked' then return jsonb_build_object('ok', false, 'error', 'revoked'); end if;

  insert into public.applicants (id, data) values (p_applicant->>'id', p_applicant)
  on conflict (id) do nothing;

  inv := inv || jsonb_build_object(
    'status','Submitted',
    'submittedOn', p_applicant->>'applied',
    'submittedTime', p_applicant->>'submittedTime',
    'applicationId', p_applicant->>'id'
  );
  if inv->>'openedOn' is null then inv := inv || jsonb_build_object('openedOn', p_applicant->>'applied'); end if;
  update public.invitations set data = inv, updated_at = now() where lower(id) = lower(p_id);

  return jsonb_build_object('ok', true);
end;
$$;
revoke all on function public.portal_submit_application(text, jsonb) from public;
grant execute on function public.portal_submit_application(text, jsonb) to anon, authenticated;

-- Done. Next: create HR staff logins yourself under Authentication > Users
-- (email + password) — there is no self-service sign-up in the app.
