# Supabase Storage Migration — Images from Public to Storage

## STEP 1 — ANALYSIS SUMMARY

### Framework
- **Next.js Pages Router** (`pages/`, `next.config.mjs`).

### Image references found
- **Path pattern:** Images live under `public/assets/`, `public/static/` (no `/images/` top-level folder).
- **Code references:** `src="/assets/..."`, `src="/static/..."`, full URLs `https://techemulsion.com/assets/...`, `https://techemulsion.com/static/...`.
- **Next.js Image:** Used in many pages (portfolio, index, footer, logo, services, blog, 404, etc.).
- **Static imports:** `import animationData1 from "../public/assets/Animation/screen.json"` (JSON, not image — no change).
- **OG/Twitter metadata:** `enhanced-seo.tsx` (`getOGImageUrl`), `_document.tsx` (og:image, twitter:image), `index.tsx` (ogImage prop), `structured-data.tsx` (logo URL).
- **CSS/Chakra:** `backgroundImage: "url('/assets/background/pattern.jpg')"` in `genai.tsx`, `moodtube.tsx`; `bgImage="url(/assets/engagement-models/...)"` in `engagement-models/[slug].tsx`.
- **Data files:** `data/services.ts`, `data/engagement-models` (no images), `pages/portfolio.tsx` (portfolio list images), `pages/index.tsx` (client logos, tech stack, portfolio grid, blog post images), various portfolio pages.
- **Sitemap:** `sitemap.xml.tsx` does not reference image URLs (only page locs).
- **Blog:** `blog_posts.featured_image`, `blog_posts.og_image`, `blog_posts.author_avatar` can store URLs; admin upload already uses Supabase bucket `blog-images`. Existing posts may have paths like `/assets/...` or full URLs — SQL provided to migrate path-based URLs.

### Supabase client setup
- **Client (browser):** `lib/supabase/client.ts` — `createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)`.
- **Server (admin):** `lib/supabase/server.ts` — `getSupabaseAdmin()` uses `SUPABASE_SERVICE_ROLE_KEY` (for API routes, uploads).
- **Env vars:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`.

### Image file types in `public/`
- **Extensions:** `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`, `.ico` (including PascalCase variants).
- **Locations:** `assets/` (clients, portfolio, tech, engagement-models, blog, career, icons, logo, team, whatWeDo, background, etc.), `static/favicons`, `static/favicons old`, `static/favicons with plan backgorund`, `static/images`, `static/screenshots`.

### Database
- **blog_posts:** `featured_image`, `og_image`, `author_avatar` (TEXT). May contain relative paths or full URLs. Migration script does not modify DB; SQL provided to update path-based URLs to Supabase URLs after migration.

---

## STEP 2 — SUPABASE STORAGE SETUP

### 2.1 Create the bucket (Supabase Dashboard)

1. Open [Supabase Dashboard](https://app.supabase.com) → your project.
2. Go to **Storage** in the left sidebar.
3. Click **New bucket**.
4. **Name:** `public-assets` (or `site-assets` — must match `NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET` in `.env.local`).
5. **Public bucket:** turn **ON** (so `getPublicUrl()` works without signed URLs).
6. Optionally set **File size limit** and **Allowed MIME types** if you want to restrict (e.g. images only). For migration, you can leave defaults.
7. Click **Create bucket**.

### 2.2 RLS policies for public read

With a **public** bucket, Supabase allows public read by default. To be explicit (and if you create the bucket as private by mistake), add:

1. In Storage → **Policies** for bucket `public-assets` (or via SQL Editor):

```sql
-- Allow public read on the public-assets bucket
CREATE POLICY "Public read access for public-assets"
ON storage.objects
FOR SELECT
USING (bucket_id = 'public-assets');
```

- **Insert/Update/Delete:** Keep these restricted (no policy, or only for service role). The migration script uses the **service role key**, which bypasses RLS, so uploads work without a separate insert policy for anon users.

### 2.3 Environment variables

Add to `.env.local` (and to your deployment env, e.g. Vercel):

```env
# Existing
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# New — bucket for migrated public site assets (must match dashboard bucket name)
NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET=public-assets
```

- **Do not** commit `.env.local`. The migration script expects `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (and will use `NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET` if set, defaulting to `public-assets`).

---

## STEP 8 — VERIFY & CLEANUP

### Files modified (summary)

- **Config:** `next.config.mjs` (remotePatterns, redirects for `/assets/:path*`, `/static/:path*`)
- **Lib:** `lib/supabase-storage.ts` (new), `scripts/migrate-images-to-supabase.mjs` (new)
- **Docs:** `docs/SUPABASE_STORAGE_MIGRATION.md` (this file)
- **SEO / layout:** `components/seo/enhanced-seo.tsx`, `components/seo/structured-data.tsx`, `components/layout/footer.tsx`, `data/logo.tsx`, `pages/_document.tsx`, `pages/_app.tsx`
- **Pages:** `pages/index.tsx`, `pages/404.tsx`, `pages/our-story.tsx`, `pages/portfolio.tsx`, `pages/engagement-models/[slug].tsx`
- **Portfolio detail pages:** `pages/portfolio/billboardiq.tsx`, `rackroom.tsx`, `popcard.tsx`, `atarim.tsx`, `contentcompass.tsx`, `genai.tsx`, `moodtube.tsx`, `superheart.tsx`, `levellup.tsx`, `podcastbeacon.tsx`, `staffup.tsx`, `packassist.tsx`, `avl-copilot.tsx`, `autosync-intelligence.tsx`, `meatery.tsx`, `macromascot.tsx`, `bipcards.tsx`, `farmin.tsx`, `artis.tsx`, `alifa.tsx`, `jarvisreach.tsx`
- **Data:** `data/services.ts`, `data/testimonials.tsx`
- **Admin:** `components/admin/layout/admin-sidebar.tsx`

### Verification checklist

1. **No raw `/images/` or `/assets/` or `/static/` paths left**  
   All image references use `getImageUrl(...)` or are full URLs from the API (e.g. blog `featured_image`). The only remaining path strings are in comments or the migration doc.

2. **`<img>` vs `<Image />`**  
   Next.js `Image` is used wherever images are rendered in components; no raw `<img src="/assets/...">` remains. (Blog post content may still use `<img>` from CMS HTML; that’s expected.)

3. **Redirects**  
   Old URLs: `/assets/:path*` and `/static/:path*` 301 to Supabase Storage. Ensure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET` are set in the deployment environment so redirect destinations are correct.

---

## AFTER MIGRATION (run script, then verify)

1. **Run the migration script:**  
   `node scripts/migrate-images-to-supabase.mjs`  
   (from repo root `Web/`). Check logs for ✅/❌ per file.

2. **Verify in Supabase:** Storage → `public-assets` → confirm structure (e.g. `assets/`, `static/`).

3. **Test locally:** `npm run dev`, open homepage, portfolio, blog, engagement-models; check Network tab for image URLs (should point to Supabase).

4. **Database (optional):** If `blog_posts.featured_image` or `og_image` store paths like `/assets/...` or `/static/...`, run the SQL in this doc to update them to full Supabase URLs.

5. **When to delete from `public/`:** Only after you’ve verified production (and any crawlers/redirects) work. Keep the redirects in `next.config.mjs` so old `/assets/...` and `/static/...` URLs 301 to Supabase; then you can remove the image files from `public/` to avoid duplication.

---

## SQL: Update blog_posts image URLs to Supabase

Run in Supabase SQL Editor **after** migration and after setting `NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET` (e.g. `public-assets`). Replace `YOUR_SUPABASE_URL` with your actual `NEXT_PUBLIC_SUPABASE_URL` (e.g. `https://xxxxx.supabase.co`).

```sql
-- Update featured_image: path-only to full Supabase URL
UPDATE blog_posts
SET featured_image = CONCAT(
  'YOUR_SUPABASE_URL',
  '/storage/v1/object/public/public-assets/',
  TRIM(LEADING '/' FROM featured_image)
)
WHERE featured_image IS NOT NULL
  AND featured_image <> ''
  AND featured_image NOT LIKE 'http%';

-- Update og_image similarly
UPDATE blog_posts
SET og_image = CONCAT(
  'YOUR_SUPABASE_URL',
  '/storage/v1/object/public/public-assets/',
  TRIM(LEADING '/' FROM og_image)
)
WHERE og_image IS NOT NULL
  AND og_image <> ''
  AND og_image NOT LIKE 'http%';

-- Optional: author_avatar if you store paths
UPDATE blog_posts
SET author_avatar = CONCAT(
  'YOUR_SUPABASE_URL',
  '/storage/v1/object/public/public-assets/',
  TRIM(LEADING '/' FROM author_avatar)
)
WHERE author_avatar IS NOT NULL
  AND author_avatar <> ''
  AND author_avatar NOT LIKE 'http%';
```
