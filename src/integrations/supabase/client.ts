// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dxhdxweardljhgewmals.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4aGR4d2VhcmRsamhnZXdtYWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MDAwOTQsImV4cCI6MjA1MDQ3NjA5NH0.FjpenQ7WXTmKYU_Xc20eQVETsR6UUIINgeOJrRycc-g";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);