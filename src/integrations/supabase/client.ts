import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://clfftquiayfvqwsfwsxr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZmZ0cXVpYXlmdnF3c2Z3c3hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzODc3ODAsImV4cCI6MjA1MDk2Mzc4MH0.sbK6O1tGnKRtCO7LdyPapY-qNjEnvhOMWS_B4Oy6gBE";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);