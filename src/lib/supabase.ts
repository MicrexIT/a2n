import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = "https://mpytemfbpkrgsikwydxv.supabase.co"
const SUPABASE_PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1weXRlbWZicGtyZ3Npa3d5ZHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1NDg0MDIsImV4cCI6MTk2NjEyNDQwMn0.K5pjQ8_3mWZFM7ZderuGuXXqLgqQUMmiF90SUcyNNhs"

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY)
export default supabase
