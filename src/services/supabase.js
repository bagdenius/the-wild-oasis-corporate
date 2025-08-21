import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://hpdzplrfbxebonqqcvdc.supabase.co';
const supabaseKey = 'sb_publishable_2u4ljJMdy3a4aWSPnaugeg_CXYdO2ak';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
