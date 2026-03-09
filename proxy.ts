import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * SEO: Prevent search engines from indexing admin and API routes.
 * Sends X-Robots-Tag so crawlers that reach these paths (e.g. via old links) do not index them.
 */
const NOINDEX_PATHS = ["/admin", "/api"];
const NOINDEX_PREFIXES = ["/admin/", "/api/"];

function shouldNoIndex(pathname: string): boolean {
  if (NOINDEX_PATHS.some((p) => pathname === p)) return true;
  return NOINDEX_PREFIXES.some((p) => pathname.startsWith(p));
}

export function proxy(request: NextRequest) {
  const res = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  if (shouldNoIndex(pathname)) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return res;
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/:path*"],
};
