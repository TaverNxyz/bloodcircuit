// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://clfftquiayfvqwsfwsxr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZmZ0cXVpYXlmdnF3c2Z3c3hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzODc3ODAsImV4cCI6MjA1MDk2Mzc4MH0.sbK6O1tGnKRtCO7LdyPapY-qNjEnvhOMWS_B4Oy6gBE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);