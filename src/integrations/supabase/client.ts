import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = 'https://pfysoixizwxkucwfeyqk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmeXNvaXhpend4a3Vjd2ZleXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MzQ0NzAsImV4cCI6MjAyNTQxMDQ3MH0.vxJO0eGBOYUZZKyLHoRHwVe7Ug_xFOHXGJZrHXS_Ics';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);