import { createClient } from "@supabase/supabase-js"

REACT_SUPABASE_URL = "https://hndrfuguurdcrzkdhqvm.supabase.co"
REACT_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZHJmdWd1dXJkY3J6a2RocXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU4NjI3MTcsImV4cCI6MjAwMTQzODcxN30.hSSQj8ZkwJNTdWe95xT3ux8DOsnmmi8VHzz4rFPD63o"

export const supabase = createClient(REACT_SUPABASE_URL, REACT_SUPABASE_ANON_KEY)
