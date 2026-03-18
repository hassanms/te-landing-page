# Tech Emulsion — SEO 10/10 Gap Report (Code vs Plan)

**Source of truth plan:** `docs/SEO-10-10-IMPLEMENTATION-PLAN.md`  
**Scope of this report:** what is **missing / not aligned** in the current web codebase relative to the plan, plus a concrete file-by-file checklist to implement later.

---

## Key gaps (high impact)

- **Single H1 rule is broken on some pages**
  - Homepage (`pages/index.tsx`) appears to render **multiple** `h1` headings.
  - Several reusable section components output `h1`, which can create accidental multi-H1 pages.
- **Primary CTA is not unified**
  - CTA text varies across nav, floating Calendly badge, hero buttons, and forms (e.g. “Talk to Us”, “Get a Quote”, “Book a Discovery Call”, “Send Message”, “Get a Free Estimate”).
- **Testimonials exist but don’t meet the plan’s completeness requirements**
  - Many testimonials are missing **role/title**, **company**, and **headshot/logo** fields.
  - No surfaced **verifiable proof** (Clutch widget; Upwork JSS + review count UI).
- **Meta description length rule doesn’t match plan**
  - Plan requires **≤155 chars**; current SEO helper may extend up to **160** characters.
- **Service-page URL strategy and content requirements don’t fully match plan**
  - Plan prescribes specific `/services/...` slugs and 1,500+ word pages mapped to keyword clusters.
- **Image conversion/compression not completed**
  - Many large portfolio assets remain PNG/JPEG; plan calls for WebP + compression (esp. portfolio).

---

## Phase 1 (Week 1) — Critical

### 1.1 Single H1 + heading hierarchy (Plan: Phase 1.1 + 1.4)

**Plan requirement**
- Exactly **one** `<h1>` per page (hero only).
- All other headings use `h2/h3` in correct hierarchy; no skipped levels.

**Code gaps**
- Multiple occurrences of `as="h1"` exist in:
  - `pages/index.tsx` (at least two `h1` usages)
  - `components/testimonials/testimonials.tsx` (section component uses `h1`)
  - `components/services/trusted-by-strip.tsx` (section component uses `h1`)
  - `components/Contact.tsx` (section component uses `h1`)
  - `components/layout/logo.tsx` (fallback renders `Heading as="h1"` if logo is missing)

**What’s missing**
- Enforce **one H1 per page**, and ensure reusable section components never output `h1`.

---

### 1.2 Meta tags (Plan: Phase 1.2)

**Plan requirement**
- **Meta title ≤60 chars**
- **Meta description ≤155 chars**

**Code gaps**
- `components/seo/enhanced-seo.tsx` attempts to “enhance” description with a semantic suffix and allows up to **160** characters in some cases, not 155.
- `pages/_document.tsx` sets global description and OG/Twitter meta, while `EnhancedSEO` also sets per-page meta. This can lead to duplication/conflicts if not carefully managed.

**What’s missing**
- A consistent, enforced policy that keeps **description ≤155** across all key pages and avoids competing global vs page-level values.

---

### 1.3 CTA unification (Plan: Phase 1.3)

**Plan requirement**
- Replace all primary CTAs with **one** consistent label everywhere (example in plan: **“Get a Free Estimate”**).
- Update: nav CTA, floating badge, hero CTA, bottom CTA, and main form button.
- Make other CTAs secondary-styled or remove as primary actions.

**Code gaps (examples)**
- Floating Calendly badge uses **“Talk to Us”** on many pages (home/services/portfolio/etc.).
- `data/config.tsx` header/nav includes **“Get a Quote”**.
- Homepage contains **“Book a Discovery Call”** text.
- `components/Contact.tsx` uses **“Send Message”** for the primary form action.

**What’s missing**
- A single source of truth for CTA label, and a sweep to apply it everywhere.

---

## Phase 2 (Weeks 2–3) — Copy, Trust, Technical SEO

### 2.1 Supporting copy & messaging (Plan: Phase 2.1)

**Plan requirement**
- Rewrite copy to be **you-focused**, remove buzzwords, and add specifics (pricing ranges, timelines, pod size).
- Clean up keyword-stuffed lines; include priority keywords naturally.

**Code gaps**
- Several pages/sections still use “We…” language and buzzword-style phrasing (e.g. services landing page copy).

**What’s missing**
- A systematic copy audit + rewrite across hero/sections/services/contact/portfolio copy to align to the plan.

---

### 2.2 Social proof & trust (Plan: Phase 2.2)

**Plan requirement**
- **5–8** testimonials, each with: full name, role, company, headshot/logo.
- Verifiable metrics (Clutch/G2/Upwork, JSS, KPIs).
- Quantified portfolio results.

**Code gaps**
- Testimonials data exists (`data/testimonials.tsx`) but many items have empty:
  - `company`
  - `description` (role/title)
  - `avatar`
- Upwork link exists, but no UI shows **JSS + review count**.
- No Clutch widget embed found in the code (only referenced in docs).

**What’s missing**
- Curate 5–8 complete testimonials and surface verifiable external proof (Clutch widget; Upwork metrics).

---

### 2.3 Technical SEO (Plan: Phase 2.3)

**Plan requirement**
- Keep Organization schema; add **FAQ schema** to FAQ section; add **Service schema** for main offerings/pages.
- Canonicals correct.
- Images: alt text, lazy-load below the fold, WebP + compression.

**What’s already present**
- Canonical URL handling exists across many pages (via `EnhancedSEO` and some explicit canonicals).
- JSON-LD framework exists:
  - `components/seo/structured-data.tsx`
  - `components/seo/enhanced-seo.tsx` emits Organization + Website; conditionally FAQ and Service
- Service subpages (`pages/services/[slug].tsx`) pass `serviceData` and `faqData` (Service + FAQ schema).

**Code gaps**
- FAQ schema is only emitted when `faqData` is passed; ensure every page that renders FAQ UI also passes the data.
- Asset-level optimization is incomplete: many portfolio images remain PNG/JPEG in `public/assets/portfolio/...` and need conversion/compression per plan.

**What’s missing**
- Complete image conversion/compression and consistent below-the-fold lazy-load policy.

---

## Phase 3 (Weeks 4–8) — Content & Authority

### 3.1 Dedicated service pages (Plan: Phase 3.1)

**Plan requirement**
- Create dedicated service pages at (examples):
  - `/services/ai-engineering`
  - `/services/saas-development`
  - `/services/automation`
  - `/services/devops`
  - `/services/qa-testing`
  - `/services/chrome-extensions`
  - `/services/nextjs-web-development`
- Each page: **1,500+ words**, mapped to a keyword cluster; Service schema; single primary CTA; internal links.

**Code gaps**
- Your services are implemented via `pages/services/[slug].tsx` + `data/services.ts`, but the plan’s exact slugs don’t exist as-is.
- There is no hard guarantee each service page reaches 1,500+ words of rendered content.

**What’s missing**
- Align the slug architecture (add alias slugs/redirects or new entries) and ensure each page meets depth/word-count goals.

---

### 3.2 Blog + internal linking (Plan: Phase 3.2)

**Plan requirement**
- 2–4 posts/month; systematic internal linking blog ↔ service pages; topical authority.

**Current state**
- Blog routes exist (`pages/blog/index.tsx`, `pages/blog/[slug].tsx`) and sitemap includes blog posts.

**What’s missing**
- A consistent internal linking system and content workflow (part code, part editorial process).

---

### 3.3 Backlinks & authority (Plan: Phase 3.3)

**Plan requirement**
- Clutch/G2 listings; backlink plan; linkable assets.

**What’s missing**
- Mostly non-code work; code-side: embed Clutch widget once profile exists.

---

## File-by-file implementation checklist (do later)

### H1 cleanup
- `pages/index.tsx`
  - Ensure exactly one H1 renders (hero only). Convert extra H1(s) to `h2/h3`.
- `components/testimonials/testimonials.tsx`
  - Change section heading from `h1` → `h2` (or `h3` depending on hierarchy).
- `components/services/trusted-by-strip.tsx`
  - Change section heading from `h1` → `h2`.
- `components/Contact.tsx`
  - Replace any `h1` headings with `h2/h3` (section component must never output `h1`).
- `components/layout/logo.tsx`
  - Change fallback `Heading as="h1"` to a non-H1 element (prevents accidental extra H1).

### CTA unification
- Decide the exact primary CTA label (plan suggests **“Get a Free Estimate”**).
- `data/config.tsx`
  - Update nav CTA (“Get a Quote”) → unified CTA label.
- All pages using Calendly badge
  - Replace `Calendly.initBadgeWidget({ text: "Talk to Us" })` → unified CTA label.
- `pages/index.tsx`
  - Replace “Book a Discovery Call” primary CTA text with unified CTA label.
- `pages/engagement-models/[slug].tsx`
  - Replace “Get a Quote” with unified CTA label.
- `components/Contact.tsx`
  - Replace “Send Message” if it’s the primary CTA; otherwise style it secondary and introduce unified CTA as primary above.

### Meta limits
- `components/seo/enhanced-seo.tsx`
  - Enforce description limit at **155** (not 160); reconsider auto-suffix behavior.
- `pages/_document.tsx`
  - Reduce potential duplication/competition with page-level SEO (keep global meta minimal).

### Social proof completeness + external verification
- `data/testimonials.tsx`
  - Curate 5–8 “complete” testimonials: name + role + company + headshot/logo.
- Add UI blocks for:
  - Upwork **JSS + review count**
  - Clutch widget (once listing exists)

### Service page URL strategy + depth
- `data/services.ts` and/or routing strategy
  - Add alias slugs/redirects matching the plan’s `/services/...` targets.
  - Ensure each service page content meets the 1,500+ word requirement and includes internal links.

### Image optimization
- `public/assets/portfolio/...`
  - Convert heavy images to WebP where possible; compress originals; ensure lazy-load below the fold.

---

## Notes on what’s already in place (keep)

- **Sitemap + robots**
  - `pages/sitemap.xml.tsx` exists and includes services/engagement models/blog/careers.
  - `public/robots.txt` references `https://techemulsion.com/sitemap.xml`.
- **Canonicals + host normalization**
  - `next.config.mjs` contains redirects for `www` → non-`www` and trailing slash normalization.
- **Schema system**
  - `components/seo/structured-data.tsx` and `components/seo/enhanced-seo.tsx` already support Organization, Website, FAQ, Service, etc.

