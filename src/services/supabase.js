import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://hpdzplrfbxebonqqcvdc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwZHpwbHJmYnhlYm9ucXFjdmRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODM5MzcsImV4cCI6MjA2OTY1OTkzN30.royVzo3IfhhjFK6EPpm_3Pu7elO69EmhJYHbBKTjpSg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
