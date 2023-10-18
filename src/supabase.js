
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://fjxnnopgilidkuddwsnz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeG5ub3BnaWxpZGt1ZGR3c256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1MzM2NTYsImV4cCI6MjAxMzEwOTY1Nn0.YX-XfU4PxnWCMMvrx7nZ5PMK9ujGgF-lBk1dBdVaKh0"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;