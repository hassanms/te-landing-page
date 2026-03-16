# Tech Emulsion — Overall Web Analysis

**Date:** March 16, 2026  
**Scope:** Full codebase and site structure vs. SEO Audit 13-03-2026

---

## 1. Tech Stack & Project Structure

| Layer | Technology |
|-------|------------|
| Framework | **Next.js 16** (React 18) |
| UI | **Chakra UI** v2, Framer Motion |
| SEO | **next-seo**, custom `EnhancedSEO` + `StructuredData` |
| Data | **Supabase** (blog, jobs, applications, analytics) |
| Forms / Auth | react-hook-form, @saas-ui/auth, Supabase auth (admin) |
| Other | Calendly (badge + popup), Lottie, recharts (admin), nodemailer |

**Key directories:**
- `pages/` — All routes (index, services, services/[slug], portfolio, portfolio/[slug], blog, blog/[slug], contact, careers, engagement-models, our-story, admin, api)
- `components/` — Layout (header, footer, navigation), hero, SEO, testimonials, services, FAQ, Contact, etc.
- `data/` — config, services, testimonials, faq, jobs
- `lib/` — Supabase client, analytics
- `theme/` — Chakra foundations (colors, typography)

**Routing overview:**
- **Home:** `/` (single long page, ~3.4k lines)
- **Services:** `/services` (list), `/services/[slug]` (e.g. ai-engineering, saas-development)
- **Portfolio:** `/portfolio` (list), many `/portfolio/[slug]` case studies
- **Blog:** `/blog`, `/blog/[slug]` (Supabase-driven)
- **Other:** `/contact`, `/careers`, `/careers/[jobId]/apply`, `/engagement-models`, `/engagement-models/[slug]`, `/our-story`, `/terms-of-service`, `/privacy-policy`
- **Admin:** `/admin/*` (applications, blog, jobs, visitor-analytics) — separate layout, Supabase auth

---

## 2. SEO & Meta Implementation (Where Things Stand)

### 2.1 Duplicate and conflicting meta

- **`_document.tsx`** sets static meta in `<Head>`:
  - `name="description"` and `name="keywords"` — "Imagineer breakthrough SaaS..."
  - `og:title`, `og:description`, `twitter:title`, `twitter:description` — same copy, long title
- **`pages/index.tsx`** uses **`EnhancedSEO`** (next-seo) with:
  - `title="Tech Emulsion | Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business"` (~70+ chars; audit: keep ≤60)
  - `description` — long, keyword-stuffed paragraph (~300+ chars; audit: 150–160)
- **Result:** Two sources of truth. NextSeo typically overrides document meta when present, but having both is fragile and the values themselves fail the audit (length, clarity).

### 2.2 Meta length vs audit

| Item | Current | Audit target |
|------|--------|----------------|
| Meta title | ~70+ chars (with "Imagineer...") | ≤60 chars |
| Meta description | 300+ chars (index) + keyword stuffing | 150–160 chars |

### 2.3 Schema / structured data

- **Organization:** In `_app.tsx` (inline JSON-LD) and again in `StructuredData` (organization + website). Good; audit said “present”.
- **FAQ:** `EnhancedSEO` accepts `faqData` and outputs FAQ schema; index passes FAQ data → FAQ schema is present. Audit: “Needs FAQ schema” may have been from an older snapshot; code supports it.
- **Service:** Supported in `EnhancedSEO` + `StructuredData`; used on service subpages. Homepage does not pass `serviceData` to EnhancedSEO (no Service schema on home).
- **Canonical:** Set via next-seo (e.g. `canonicalUrl="https://techemulsion.com"` on index). Audit: “Present. Good.”

### 2.4 Config and defaults

- `data/config.tsx`: `seo.title` = "Tech Emulsion", `seo.description` = "Imagineering digital transformation for your business". No `titleTemplate` or `openGraph` in config; EnhancedSEO spreads `siteConfig.seo.openGraph` and `titleTemplate` — so these may be undefined unless extended elsewhere.

---

## 3. Headings (H1 / H2 / H3) — Audit: “11 H1s, broken hierarchy”

### 3.1 Hero (actual H1 source)

- **`components/hero/hero.tsx`** renders `title` with `<Text as="h1">` — so the **hero is the only component that semantically outputs an H1**.
- On **index**, the hero `title` is:  
  **"Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business"** (with line breaks and emphasis).

### 3.2 Multiple H1s on homepage

- **`pages/index.tsx`** also uses `<Heading as="h1">` in many sections. Grep shows **at least 8–9** such headings, e.g.:
  - About: “Impactful Product Design, Memorable Experience”
  - “Connect With Us”
  - What We Do: “We design, build, and scale AI-driven software systems…”
  - Blog: “Software Development Insights from Our Team”
  - Plus more in other sections.
- So the page has **one H1 from the Hero component** plus **multiple H1s from inline Headings** → effectively **many H1s per page**, which matches the audit’s “11 H1 tags” and “flat and broken” hierarchy.

### 3.3 Hierarchy

- Some sections use `Heading as="h2"` for the small label (e.g. “About us”, “What We Do”) and then `Heading as="h1"` for the main line — which inverts best practice (one H1, then H2/H3).
- **Fix:** Keep a single H1 (hero). Change all other section “main” headings to `as="h2"` and subsections to `as="h3"` where appropriate.

---

## 4. CTAs — Audit: “Four different CTAs, confusing”

| Location | Current label | Action |
|---------|----------------|--------|
| **Nav (config)** | “Get a Quote” | Links to `/contact` |
| **Calendly badge (Script)** | “Talk to Us” | Opens Calendly popup (discovery call) |
| **Hero + repeat on page** | “Book a Discovery Call” | Same Calendly popup |
| **Contact form submit** | “Send Message” | Submits contact form |

So there are **four different wordings** for conversion actions. Audit recommendation: unify to one primary CTA, e.g. “Get a Free Estimate,” and use it in nav, hero, and contact (with “Send Message” optionally as secondary or same intent).

---

## 5. Copy & Messaging — Audit: “We-focused, buzzwords, keyword-stuffed”

- **Hero:** “Imagineer breakthrough… for your business” — audit: “Imagineer” is not a real word; feature-focused; “for your business” is filler.
- **Subhead:** “Tech Emulsion designs, builds, and scales…” — still company-first.
- **Meta description (index):** Long list of services/keywords (“generative AI development services, AI agent development…”) — keyword-stuffed, >155 chars.
- **Data/services.ts:** Benefits use phrases like “cutting-edge solutions,” “innovative practices,” “Transformative Innovation” — audit: buzzword-heavy.
- **FAQ (index):** First FAQ answer uses “imagineering digital transformation” and “cutting-edge technologies” — same tone.
- **Testimonials data:** Many entries have empty `company`, `description`, `avatar` — weak trust signals even though there are many quotes.

---

## 6. Social Proof & Testimonials — Audit: “One testimonial, weak”

- **Data:** `data/testimonials.tsx` has a long list of testimonials (30+), with names and quotes; only some have `company` and `avatar`.
- **Homepage:** A single **TestimonialsSection** that shows **one testimonial at a time** (carousel, 6s interval). So users see only one visible testimonial; the audit’s “one testimonial” is accurate from a UX perspective.
- **Gaps:** Few headshots, many missing company/role; no link to Clutch/Upwork/JSS; “100% satisfaction” appears in copy but is unverifiable; portfolio items don’t show quantified results in the audit’s terms.

---

## 7. Images & Performance — Audit: “76 images, 0 missing alt, but heavy”

- **index.tsx:** Roughly ~100 references to `Image` or `src=` (many are client logos, portfolio, icons). Audit’s “76 images” is in the same ballpark.
- **Alt text:** Audit states 0 missing alt — consistent with using Chakra/Next Image and explicit props.
- **Issues:** No lazy loading or WebP/compression mentioned in the audit; 76 images on one page is heavy for LCP and general load. Code uses some `dynamic()` for heavy components (e.g. AnimatedMeshBackground, FloatingUICards) but not for images per se.

---

## 8. Content & Information Architecture

### 8.1 Service pages

- **Dedicated service pages exist:** `pages/services/[slug].tsx` with content from `data/services.ts` (e.g. ai-engineering, saas-development). Each has full description, value props, FAQs, related services, SEO (EnhancedSEO with serviceData → Service schema).
- **Homepage:** Also lists the same services in a grid (ServiceCard) with short descriptions. So there is some **keyword overlap** between home and service pages (cannibalization risk), though service pages are the intended deep targets.
- **Audit:** “No dedicated service pages” may refer to the fact that the *homepage* crams a lot of service copy; in code, dedicated pages do exist. The recommendation for “1,500+ words each” and clear internal linking is still valid.

### 8.2 Blog

- **Blog list:** `/blog` — Supabase-backed, categories, featured post.
- **Blog post:** `/blog/[slug]` — dynamic; Article schema and SEO supported.
- **Volume:** Audit says “only 4 blog posts, all from January 2026” — content/strategy issue, not structure. Code supports more.

### 8.3 Sitemap

- `pages/sitemap.xml.tsx` includes service slugs and other paths — good for discovery.

---

## 9. Summary: Audit vs Code Reality

| Audit finding | In codebase |
|---------------|-------------|
| H1: “Imagineer…” vague, not search-friendly | Hero title in `index` + `Hero` component; also in `_document` and `EnhancedSEO` meta. |
| 11 H1s on one page | Confirmed: Hero uses `<Text as="h1">`, plus many `<Heading as="h1">` in index sections. |
| Meta title too long | Index EnhancedSEO title ~70+ chars; document meta similar. |
| Meta description keyword-stuffed, 300+ | Index passes long description; getEnhancedDescription() can extend further. |
| Four different CTAs | Nav “Get a Quote”, Calendly “Talk to Us”, hero “Book a Discovery Call”, form “Send Message”. |
| One testimonial (weak) | One visible at a time in carousel; data has many but lots missing company/avatar/role. |
| Schema: Organization present, need FAQ + Service | FAQ schema present when faqData passed; Service schema on service pages, not on home. |
| 76 images, heavy page | Many images on index; no lazy load/WebP/compression in audit scope. |
| No dedicated service pages | Service pages exist at `/services/[slug]`; homepage also has service copy (cannibalization). |
| Only 4 blog posts | Content/editorial; app supports blog list + post pages. |

---

## 10. What “Analyzing the Whole” Shows

1. **Single page weight:** The homepage (`index.tsx`) is one very long page (~3.4k lines) with hero, multiple sections, services grid, testimonials carousel, blog preview, FAQ, contact. That matches “everything on one page” and supports the audit’s concerns (many H1s, heavy images, mixed intents).
2. **SEO is split:** Default/static meta in `_document.tsx`, page-level SEO in `EnhancedSEO` and next-seo. Title/description need to be fixed in both places (and ideally one source of truth) and brought to ≤60 / 150–160 chars.
3. **Headings are fixable in one file:** All extra H1s are in `pages/index.tsx`; changing them to H2/H3 and keeping the hero as the only H1 is straightforward.
4. **CTAs are in multiple places:** config (nav), index (hero + second “Book a Discovery Call”), Calendly init (“Talk to Us”), Contact component (“Send Message”). Unifying to “Get a Free Estimate” (or similar) requires edits in config, index, Contact, and possibly Calendly badge text.
5. **Testimonials:** Data exists; UX shows one at a time. Strengthening means both content (company, role, headshots, verifiable metrics) and UI (e.g. show 5–8 in a grid or list, or keep carousel but add Clutch/Upwork links).
6. **Copy:** “Imagineer” and “we”-heavy copy live in index hero, meta, FAQ answers, and data files (services, config). A pass to “you”-focused, outcome-focused, and non–keyword-stuffed copy will touch index, config, _document, data/services, and FAQ data.
7. **Technical SEO:** Schema and canonical are in good shape. Remaining work: consistent meta lengths, optional Service schema on home if you want, image optimization (lazy load, WebP, compression), and performance (Core Web Vitals).

This document should be read together with **`docs/SEO-10-10-IMPLEMENTATION-PLAN.md`**, which turns the audit into a phased task list. The codebase is capable of reaching the audit’s targets; the main work is content/copy, one H1 per page, one primary CTA, stronger social proof, and performance tuning.
