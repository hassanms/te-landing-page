# SEO & Indexing Fixes Applied

Summary of changes made to address Google Search Console indexing issues (not indexed, redirects, canonicals, 404/401).

---

## 1. Canonical fixes

- **`pages/portfolio/dadssalesreborn.tsx`** (page since removed; sitemap and homepage references updated accordingly.)

- **`pages/portfolio/avl-copilot.tsx`**
  Canonical was `avl-copilot-v3` (page is served at `/portfolio/avl-copilot`). Updated to `https://techemulsion.com/portfolio/avl-copilot`.

---

## 2. robots.txt

- Removed trailing space from `Allow: /blog `.
- Removed `Crawl-delay` (not supported by Googlebot).
- Consolidated rules: single `User-agent: *` block with clear Allow/Disallow.
- Explicit `Disallow: /admin` (and `/admin/`) so the root admin path is not crawled.
- Duplicated Disallow for admin/api for AI crawler blocks.

---

## 3. Next.js redirects (`next.config.mjs`)

- **www → non-www:** All requests to `www.techemulsion.com` 301 redirect to `https://techemulsion.com/:path*` so the canonical host is non-www.
- **Trailing slash:** Paths with a trailing slash (e.g. `/blog/`) 301 redirect to the same path without trailing slash to avoid duplicate URLs.

---

## 4. Sitemap (`pages/sitemap.xml.tsx`)

- Added missing portfolio entries: `autosync-intelligence`, `avl-copilot`, `packassist`, `staffup`, `meatery`.
- Added `/engagement-models` index URL.
- Comment noting that only published content is included to reduce 404/401 from the sitemap.

---

## 5. Privacy & terms pages

- **`pages/privacy-policy.tsx`** and **`pages/terms-of-service.tsx`**:  
  Added `<link rel="canonical" href="...">`, `meta name="robots" content="index, follow"`, and updated meta descriptions to be page-specific.

---

## 6. Middleware (`middleware.ts`) – noindex for admin/API

- New middleware runs for `/admin`, `/admin/:path*`, and `/api/:path*`.
- Sets response header `X-Robots-Tag: noindex, nofollow` so search engines do not index these routes even if they crawl them.

---

## What you should do next (Google Search Console)

1. **Request indexing** for the fixed URLs (e.g. `/portfolio/avl-copilot`) via URL Inspection → “Request indexing”.
2. **Validate “Page with redirect”** in the “Why pages aren’t indexed” report after the www and trailing-slash redirects are live.
3. **Fix remaining 404s:** In GSC, open the “Not found (404)” report, note the two URLs, then either remove them from the sitemap/internal links or restore the pages.
4. **401:** Confirm the URL that returns 401; ensure it’s not in the sitemap and that it’s behind auth (middleware now sends noindex for `/admin` and `/api`).
5. **Re-submit sitemap:** In GSC, Sitemaps, submit `https://techemulsion.com/sitemap.xml` (or re-submit if already added) so the updated URLs are picked up.
6. **Allow time:** “Discovered - currently not indexed” and “Crawled - currently not indexed” can improve over 1–4 weeks as Google recrawls; keep content and internal links strong.

---

## Files touched

| File | Change |
|------|--------|
| `pages/portfolio/dadssalesreborn.tsx` | (Removed; sitemap/homepage updated.) |
| `pages/portfolio/avl-copilot.tsx` | Canonical |
| `public/robots.txt` | Rewritten (no trailing space, no Crawl-delay, clear rules) |
| `next.config.mjs` | `redirects()` for www and trailing slash |
| `pages/sitemap.xml.tsx` | New portfolio + engagement-models, comment |
| `pages/privacy-policy.tsx` | Canonical, robots, description |
| `pages/terms-of-service.tsx` | Canonical, robots, description |
| `middleware.ts` | New: X-Robots-Tag for /admin and /api |
