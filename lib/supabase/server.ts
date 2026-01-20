import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  // Don't crash the build if env vars are missing – fail fast only when an API actually runs.
  console.warn(
    "Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY) are not fully configured. " +
      "Admin APIs depending on Supabase will fail at runtime until these are set.",
  );
}

/**
 * Returns a Supabase admin client. This is called inside API handlers so that
 * missing environment variables don't break the build on platforms like Vercel.
 */
export const getSupabaseAdmin = () => {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      "Supabase environment variables are not configured. " +
        "Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your deployment environment.",
    );
  }

  // Server-side client with service role key (bypasses RLS)
  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};
