import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://arzabukpyygvubookcwj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyemFidWtweXlndnVib29rY3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyNDE3NzAsImV4cCI6MjA4NDgxNzc3MH0.B-UbznbnhGT9qkK_sn0OEG5_tlD1ohO1YTjdU065nQQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
