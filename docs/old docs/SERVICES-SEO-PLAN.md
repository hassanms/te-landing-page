# Services Pages SEO Plan

## Scope
- **Main page:** `/services` (services listing)
- **Subpages:** 8 service detail pages under `/services/[slug]`

## Keyword-to-Service Mapping

| Service (slug) | Assigned SEO keywords |
|----------------|------------------------|
| **agentic-ai-engineering** | generative ai development company, ai agent development services, agentic ai web development, developing an agentic ai system, generative ai development services, generative ai development company |
| **next-gen-saas** | saas development services, saas application development services, saas product development services, custom saas development |
| **website-development** | custom website development company, custom ecommerce website development, next.js website development agency, next js website development agency |
| **chrome-extensions** | develop chrome extension, how to develop chrome extension |
| **devops-solutions** | devops as a service, devops managed services |
| **generative-ai-integration** | ai visibility solutions with best generative engine optimization, best rated ai generative expand solutions, generative ai integration services, ai and gpt integration services |
| **qa-testing-automation** | qa and testing services, qa automation testing services |
| **automation-solutions** | business automation solutions, workflow automation services, automated customer service workflows utilizing process builder, ai automation service |

## Implementation Summary

1. **Data layer** – Add `seoKeywords: string[]` to each service in `data/services.ts` with the keywords above.
2. **SEO component** – Add optional `keywords` prop to `EnhancedSEO` and output `<meta name="keywords" content="...">`.
3. **Service subpages** – Pass `service.seoKeywords` to `EnhancedSEO`, use `service.image` as `ogImage` for social sharing.
4. **Main services page** – Keep keyword-rich meta description; add optional keywords meta from primary service terms.
5. **Titles** – Subpage titles remain `{service.title} - Tech Emulsion`; primary keywords are in meta description and keywords meta.

## Current Implementation Notes (No Changes Required)

- **Static generation:** Service subpages use `getStaticPaths` + `getStaticProps` — good for SEO.
- **Structured data:** FAQPage + Service + Breadcrumb schema already on subpages.
- **Canonical:** Each subpage sets canonical to `https://techemulsion.com/services/{slug}`.
- **Sitemap:** All service URLs included with priority 0.8, changefreq monthly.
- **Main services page:** Client component but content is in initial HTML; meta and schema are server-rendered via EnhancedSEO.

## Implemented (March 2026)

- Service-specific OG images using `service.image`.
- Per-service “What is [Service]?” and “In short” (key takeaways) for GEO/AEO.
- Related services internal linking; Service schema with image, url, dateModified.
- Primary keywords “generative ai development services” and “generative ai development company” prioritized on main services page and agentic/generative AI service pages.
- Sitemap uses `getAllServiceSlugs()` from data; meta description length capped for subpages.
- All long-tail keywords assigned to specific service pages; extra FAQs added for AEO.
