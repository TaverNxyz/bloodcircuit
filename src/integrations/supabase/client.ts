import { createClient } from '@supabase/supabase-js';
import type { Database } from './types/database.types';

const supabaseUrl = 'https://pfysoixizwxkucwfeyqk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmeXNvaXhpend4a3Vjd2ZleXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NzY4MDAsImV4cCI6MjAyNTI1MjgwMH0.Uh_Kj4YxXzTp5DvYwEZNvhzVuQvn4sXz1-4FZV_nZQs';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);