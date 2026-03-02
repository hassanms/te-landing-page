# SEO, GEO & AEO Improvement Checklist

Short, actionable “should” points to improve **SEO** (search engines), **GEO** (generative/AI engines), and **AEO** (answer engines / featured snippets).

---

## SEO (Search Engine Optimization)

- **You should** keep one clear H1 per page and logical H2 → H3 hierarchy (already in place on service subpages).
- **You should** add `lastmod` in sitemap for service pages when you update content (sitemap already has `lastmod`; keep it accurate).
- **You should** add `image` (mainEntityOfPage or primary image) to Service schema so Google can use it in results.
- **You should** add `hasOfferCatalog` or `serviceType` array in Service schema for richer results.
- **You should** ensure every image has descriptive `alt` (e.g. hero and section images on service subpages).
- **You should** add internal links from home/services to each service subpage and between related services (e.g. “See also: Generative AI Integration”).
- **You should** add a `robots.txt` that references the sitemap URL if not already present.
- **You should** keep meta title length under ~60 chars and description ~150–160 for services (optional: add `titleTemplate` per section).
- **You should** consider adding `Article` or `WebPage` schema with `datePublished`/`dateModified` on key service pages for freshness signals.

---

## GEO (Generative Engine Optimization)

- **You should** add a short, scannable “What we do” / definition block at the top of each service page (e.g. “Agentic AI engineering is…”) so AI can extract a clear summary.
- **You should** keep entity-rich copy: company name, service name, location, and key terms in the first 1–2 paragraphs.
- **You should** add an optional `description` or “About this service” in Service schema that mirrors the on-page summary (helps AI cite you correctly).
- **You should** avoid hiding important, citable facts only in tabs/accordions; keep at least one clear paragraph in the main flow.
- **You should** add `author` and/or `publisher` and `dateModified` in schema where it makes sense so generative engines can attribute and date your content.
- **You should** use the same primary keyword and phrasing in meta description, H1, and first paragraph for clarity.
- **You should** consider a dedicated “For AI & search” block (visible or in a compact section) with 2–3 bullet facts per service (e.g. “We offer X, Y, Z; based in Peshawar; since 2020”).

---

## AEO (Answer Engine Optimization)

- **You should** phrase FAQ questions as real search questions (e.g. “What is agentic AI?” “How much does SaaS development cost?”) and keep answers concise (40–80 words for snippet potential).
- **You should** add more FAQ items per service where they map to “What is X?”, “How does X work?”, “Who needs X?” and use FAQPage schema (already in place).
- **You should** add a “Key takeaways” or “In short” list (3–5 bullets) at the top or bottom of each service page for snippet-style answers.
- **You should** add HowTo schema for services that have a clear process (e.g. “How we build a SaaS MVP” with steps).
- **You should** use tables or simple lists for comparisons (e.g. “What’s included”) so answer engines can surface them as direct answers.
- **You should** add a single, clear “What is [Service Name]?” paragraph with a one-sentence definition first, then 1–2 supporting sentences.
- **You should** consider `Speakable` schema for key Q&A or summary if you target voice/search assistants later.

---

## Cross-cutting (helps SEO + GEO + AEO)

- **You should** add `keywords` (or equivalent) into Service schema if you extend structured data (e.g. as `additionalProperty` or in a custom field) so engines get topic signals.
- **You should** use absolute URLs in structured data (already using techemulsion.com in schema).
- **You should** keep Core Web Vitals healthy (images optimized, minimal render-blocking) so all engines can crawl and index quickly.
- **You should** submit sitemap in Google Search Console and Bing Webmaster Tools and fix any coverage issues.
- **You should** add `dateModified` (and optionally `datePublished`) to important service pages in schema or meta so engines understand freshness.

---

## Quick wins (minimal code)

1. Add a 1–2 sentence “What is [Service]?” block and a 3–5 bullet “Key takeaways” on each service subpage.
2. Add `image` (and optional `url`) to Service structured data.
3. Add 1–2 internal links per service page to related services or main services list.
4. Ensure all service hero/section images have descriptive `alt` text.
5. Add 1–2 more FAQ questions per service phrased as “What is…?” / “How do you…?” and keep answers snippet-length.
