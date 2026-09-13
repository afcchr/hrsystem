-- =============================================================================
-- Clear all sample/demo data from the HRMS database.
-- Run once in Supabase Dashboard > SQL Editor. This does NOT touch your
-- login (profiles / auth.users) — only the HR records themselves.
-- Irreversible — there is no undo once this runs.
-- =============================================================================
truncate table
  public.employees,
  public.applicants,
  public.invitations,
  public.leave_requests,
  public.performance_reviews,
  public.trainings,
  public.training_sessions,
  public.cases,
  public.movements,
  public.offboarding,
  public.onboarding,
  public.notifications,
  public.audit_log,
  public.corrections,
  public.attendance_overrides,
  public.doc_overrides,
  public.shift_overrides;
