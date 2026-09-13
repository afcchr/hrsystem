/* =============================================================================
   Supabase connection — Art Fresh Chicken Corp. HRMS
   The anon/public key is safe to ship in the frontend; access is controlled
   by the Row Level Security policies in supabase/schema.sql.
   ============================================================================= */
"use strict";
const SUPABASE_URL = "https://lkznzviwewaoobucvsyb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrem56dml3ZXdhb29idWN2c3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyNzI1MDksImV4cCI6MjEwNDg0ODUwOX0.VFj9AqnnCr3FjbrkB1XEaIZbiexyL6eOGon1JCP68Q8";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true },
});
