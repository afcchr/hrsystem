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
    -- Table-level GRANTs are a separate layer from RLS policies below — a
    -- role needs both, or every query on the table is refused outright with
    -- "permission denied for table ..." before RLS even runs.
    execute format('grant select, insert, update, delete on public.%I to authenticated;', t);
    execute format('grant select on public.%I to anon;', t);
  end loop;
end $$;

grant usage on schema public to anon, authenticated;

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
grant select, update on public.profiles to authenticated;

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
--    - Any signed-in HR staff (authenticated) can fully manage every table.
--    - The public applicant portal (#/apply/<id>, no login) needs narrow
--      anonymous access: read + update an invitation, and submit an
--      application. NOTE: because RLS can't restrict "select by id only",
--      the anon key can technically list every row in `invitations`.
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
    execute format('drop policy if exists "staff full access" on public.%I;', t);
    execute format($f$
      create policy "staff full access" on public.%I
      for all to authenticated
      using (true) with check (true);
    $f$, t);
  end loop;
end $$;

grant update on public.invitations to anon;
grant insert on public.applicants to anon;

drop policy if exists "public can view invitations" on public.invitations;
create policy "public can view invitations" on public.invitations
  for select to anon using (true);

drop policy if exists "public can update invitations" on public.invitations;
create policy "public can update invitations" on public.invitations
  for update to anon using (true) with check (true);

drop policy if exists "public can submit applications" on public.applicants;
create policy "public can submit applications" on public.applicants
  for insert to anon with check (true);

-- Employee self-service form (#/onboard) — a single shared link, no invitation
-- token, so anon only ever gets INSERT here, never SELECT/UPDATE/DELETE.
grant insert on public.employees to anon;
drop policy if exists "public can submit employee info" on public.employees;
create policy "public can submit employee info" on public.employees
  for insert to anon with check (true);

drop policy if exists "user can view own profile" on public.profiles;
create policy "user can view own profile" on public.profiles
  for select to authenticated using (auth.uid() = id);

drop policy if exists "user can update own profile" on public.profiles;
create policy "user can update own profile" on public.profiles
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- ---------------------------------------------------------------------------
-- 4. No longer used — drop the narrower portal_* RPC functions from a
--    previous version of this file (superseded by the anon policies above).
-- ---------------------------------------------------------------------------
drop function if exists public.portal_get_invitation(text);
drop function if exists public.portal_open_invitation(text);
drop function if exists public.portal_submit_application(text, jsonb);

-- Done. Next: create HR staff logins yourself under Authentication > Users
-- (email + password) — there is no self-service sign-up in the app.
