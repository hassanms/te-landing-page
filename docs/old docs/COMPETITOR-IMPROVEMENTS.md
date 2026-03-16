# Competitor & SEO Improvement Checklist

Based on review of **Akveo**, **RaftLabs**, **Apriorit**, **NextGen Invent**, and 2025 B2B SEO best practices.

---

## What We Already Do Well

- Primary keywords ("generative ai development services", "generative ai development company") in title, description, and content on main services and key subpages.
- Service schema with image, url, dateModified; FAQPage and Breadcrumb schema.
- "What is [Service]?" and "In short" (key takeaways) on every service page for GEO/AEO.
- Related services internal linking; sitemap driven by `getAllServiceSlugs()`.
- Meta keywords, canonical URLs, OG image per service.
- robots.txt with Sitemap and AI crawler allowances.

---

## Competitor Practices We Matched or Implemented

| Practice | Competitor example | Our implementation |
|----------|--------------------|---------------------|
| Clear value props | Akveo "Why You Need This?" | Value Proposition + How We Help |
| Service breakdowns | RaftLabs "What's included" lists | Offerings + Key takeaways |
| FAQ / problem–solution | Both | FAQ schema + 4+ FAQs per service |
| Strong H2/H3 structure | Both | What is, In short, Value Props, Deliverables, Industries, Why Choose Us, FAQ |
| CTA (consultation) | Both | Calendly + "Schedule a Call" |
| Cost/timeline in copy | Akveo (POC $15K, 6–10 weeks MVP) | Timeline in SaaS FAQ; can add generic timeline FAQ elsewhere |

---

## Improvements Implemented (This Pass)

1. **"See our work"** – Each service has `portfolioSlugs`; subpages show linked case studies (e.g. Pack Assist, Farmin, Content Compass for Agentic AI).
2. **"How to get started"** – 3-step process section on service subpages (Share your goal → We scope & plan → We deliver).
3. **Optional `seoTitle`** – Agentic AI and Generative AI Integration use a meta title that includes "Generative AI Development" for primary keyword in title tag.
4. **Timeline FAQ** – Added "What is the typical timeline?" (or similar) for Agentic AI and Generative AI with snippet-friendly answers.
5. **Config typo** – "Imageineering" → "Imagineering" in default SEO description.

---

## Further Improvements (Recommended)

### High impact

- **OG image dimensions** – Use 1200×630 px images for social sharing. Either add dedicated OG images per service or ensure hero images are at least 1200px wide and crop to 1.91:1 in meta. Currently we pass width/height 1200×630 in Open Graph; the actual file aspect ratio may differ.
- **Meta title length** – Keep titles to 50–60 characters where possible. Use `seoTitle` on any service where `${service.title} - Tech Emulsion` exceeds 60 characters.
- **Cost/timeline block (optional)** – Like Akveo, add a short "Typical timeline" or "Getting started" block with ranges (e.g. "MVP in 8–16 weeks; full solution 3–6 months depending on scope") where you’re comfortable. Can be generic to avoid over-promising.
- **HowTo schema** – Add HowTo structured data for the "How to get started" 3-step process to help answer engines and rich results.

### Medium impact

- **Portfolio → service mapping** – Ensure every portfolio piece has a clear "Related service" so service pages can show the most relevant 2–3 case studies (we use `portfolioSlugs` per service).
- **Blog links** – Link relevant blog posts (e.g. "How we build agentic AI") from the corresponding service page for depth and internal linking.
- **Review / AggregateRating schema** – If you add client ratings or testimonials with scores, add Review or AggregateRating schema for rich snippets.
- **Speakable schema** – For key FAQs or "In short" bullets, adding Speakable can help voice/search assistants.

### Lower priority

- **SoftwareApplication schema** – For product/offering pages (e.g. a specific productized solution), consider SoftwareApplication markup.
- **LocalBusiness / service area** – If you want to emphasize location (e.g. Pakistan / global), Organization schema already has address; optional LocalBusiness for local queries.
- **Dedicated 1200×630 OG images** – Create one per service for consistent social previews; hero images can stay as-is for the page.

---

## Meta & Open Graph Checklist (2025)

- **Title:** 50–60 chars; primary keyword in first ~30; brand at end with `|` or `-`.
- **Description:** 150–160 chars; primary keyword early; clear CTA or value.
- **og:image:** 1200×630 px (1.91:1); absolute URL; important content centered.
- **og:url:** Canonical URL.
- **Canonical:** One per page; we set this on all service pages.

---

## Competitor Page Structure (Summary)

**Akveo (Generative AI):**
- Hero + "Your Generative AI Project: Core Questions Answered" (What We Build, Cost, Timeline).
- "How to Start" 3 steps.
- "Why You Need This?" (cost reduction, revenue, industry leadership).
- "Why Akveo?" (expertise).
- "Our Work: Real-World Gen AI Solutions" (case studies with links).
- "What is Generative AI and Why Does it Matter?"
- "Our Generative AI Software Development Services" (subsections).
- FAQ / support.

**RaftLabs:**
- Hero with value props.
- "Our Generative AI Development Services" with "What's included" under each.
- "Core Features" section.
- CTAs and contact.

We align with this via: What is / In short, Value Props, Offerings, Industries, Benefits, FAQ, Related services, and now "See our work" and "How to get started."
