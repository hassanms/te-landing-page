import { NextApiRequest, NextApiResponse } from "next";
import { GetServerSidePropsContext } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Parse cookies from cookie header string
 */
function parseCookies(cookieHeader: string): Record<string, string> {
  const cookies: Record<string, string> = {};
  if (!cookieHeader) return cookies;
  
  cookieHeader.split(";").forEach((cookie) => {
    const [name, ...valueParts] = cookie.trim().split("=");
    if (name && valueParts.length > 0) {
      cookies[name] = decodeURIComponent(valueParts.join("="));
    }
  });
  return cookies;
}

/**
 * Extract Supabase project reference from URL
 */
function getProjectRef(): string {
  try {
    const url = new URL(supabaseUrl);
    return url.hostname.split(".")[0];
  } catch {
    return "";
  }
}

/**
 * Extract access token from Supabase cookies
 */
function extractTokenFromCookies(cookies: Record<string, string>): string | null {
  const projectRef = getProjectRef();
  
  // Supabase stores session in cookie: sb-<project-ref>-auth-token
  const cookieName = projectRef ? `sb-${projectRef}-auth-token` : null;
  
  if (cookieName && cookies[cookieName]) {
    try {
      const sessionData = JSON.parse(cookies[cookieName]);
      // Session data structure: { access_token, refresh_token, expires_at, etc. }
      return sessionData?.access_token || null;
    } catch {
      // If parsing fails, try as direct token
      return cookies[cookieName];
    }
  }
  
  // Fallback: search for any auth-token cookie
  for (const [key, value] of Object.entries(cookies)) {
    if (key.includes("auth-token")) {
      try {
        const parsed = JSON.parse(value);
        return parsed.access_token || parsed || null;
      } catch {
        return value;
      }
    }
  }
  
  return null;
}

/**
 * Get Supabase client with user session from cookies (for getServerSideProps)
 */
export function getSupabaseClient(context: GetServerSidePropsContext) {
  const cookies = parseCookies(context.req.headers.cookie || "");
  const accessToken = extractTokenFromCookies(cookies);
  
  if (!accessToken) {
    // Return client without auth
    return createClient(supabaseUrl, supabaseAnonKey);
  }

  // Create client with access token
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });
}

/**
 * Get authenticated user from API request (for API routes)
 */
export async function getAuthUserFromRequest(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Get the access token from Authorization header
  const authHeader = req.headers.authorization;
  const accessToken = authHeader?.replace("Bearer ", "");
  
  if (!accessToken) {
    // Try to get from cookies
    const cookieHeader = req.headers.cookie;
    if (cookieHeader) {
      const cookies = parseCookies(cookieHeader);
      const tokenFromCookie = extractTokenFromCookies(cookies);
      
      if (tokenFromCookie) {
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        const { data: { user }, error } = await supabase.auth.getUser(tokenFromCookie);
        if (!error && user) {
          return { user, error: null };
        }
      }
    }
    
    return { user: null, error: "No authentication token provided" };
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { data: { user }, error } = await supabase.auth.getUser(accessToken);
  
  if (error || !user) {
    return { user: null, error: error?.message || "Invalid authentication token" };
  }

  return { user, error: null };
}

/**
 * Get authenticated user from server-side context (for getServerSideProps)
 */
export async function getAuthUser(context: GetServerSidePropsContext) {
  try {
    const supabase = getSupabaseClient(context);
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error || !user) {
      return { user: null, error: error?.message || "Not authenticated" };
    }

    return { user, error: null };
  } catch (error: any) {
    return { user: null, error: error?.message || "Authentication error" };
  }
}
