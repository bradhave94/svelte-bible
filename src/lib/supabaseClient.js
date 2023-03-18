import { createClient } from '@supabase/supabase-js'

export const URL = import.meta.env.VITE_SUPABASE_URL;
export const KEY = import.meta.env.VITE_SUPABASE_KEY;

import { SUPABASE_URL, SUPABASE_KEY } from '$env/static/private'


export const supabase = createClient(`https://${SUPABASE_URL}.supabase.co`, SUPABASE_KEY)
