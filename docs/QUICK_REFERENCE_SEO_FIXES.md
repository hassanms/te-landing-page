# Quick Reference: SEO, GEO, AEO Fixes Needed

## 🔴 CRITICAL - Fix Immediately

### 1. Homepage Duplicate Meta Tags
**File**: `pages/index.tsx`
**Issue**: Lines 94-123 have duplicate Head tags
**Fix**: Remove lines 94-123, keep only EnhancedSEO (line 145+)

### 2. Portfolio Pages Missing EnhancedSEO (12 pages)
**Files**: 
- `pages/portfolio/farmin.tsx`
- `pages/portfolio/bipcards.tsx`
- `pages/portfolio/genai.tsx` (also has empty meta description!)
- `pages/portfolio/jarvisreach.tsx`
- `pages/portfolio/contentcompass.tsx`
- `pages/portfolio/levellup.tsx`
- `pages/portfolio/podcastbeacon.tsx`
- `pages/portfolio/popcard.tsx`
- `pages/portfolio/rackroom.tsx`
- `pages/portfolio/superheart.tsx`
- `pages/portfolio/moodtube.tsx`
- `pages/portfolio/artis.tsx`

**Fix**: Replace `<Head>` tags with `EnhancedSEO` component like in `atarim.tsx`

### 3. Empty Meta Description
**File**: `pages/portfolio/genai.tsx` line 14
**Issue**: `<meta name="description" />` is empty
**Fix**: Add proper description

---

## 🟡 HIGH PRIORITY - Fix This Week

### 4. Create OG Images
- Create 1200x630px images for each page type
- Store in `/public/og-images/`
- Update EnhancedSEO component

### 5. Add FAQs to Portfolio Pages
- Add 3-5 FAQs to each portfolio page
- Use natural language questions
- Provide comprehensive answers (100+ words)

### 6. Add Missing Structured Data
- Review schema for testimonials
- Article schema for blog posts
- LocalBusiness schema for contact page

---

## 🟢 MEDIUM PRIORITY - Fix This Month

### 7. Sitemap Improvements
- Dynamic generation with real lastmod dates
- Include blog posts dynamically

### 8. Content Quality
- Replace Lorem Ipsum in our-story page
- Enhance descriptions with semantic keywords

### 9. Performance & Security
- Add image optimization to next.config
- Add security headers

---

## ✅ Already Good

- Homepage SEO (just needs duplicate tag cleanup)
- Services page SEO
- Contact page SEO
- Portfolio main page SEO
- Our Story page SEO (needs real content though)
- Blog page SEO (needs Article schema)
- Atarim portfolio page SEO
- Alifa portfolio page SEO

---

## Quick Win Template for Portfolio Pages

Replace this:
```tsx
<Head>
  <title>Case Study: [Name] - Tech Emulsion</title>
  <meta name="description" content="..." />
</Head>
```

With this:
```tsx
<EnhancedSEO
  title="Case Study: [Name] - Tech Emulsion"
  description="[Comprehensive 150-160 char description]"
  pageType="portfolio"
  canonicalUrl={`https://techemulsion.com/portfolio/[slug]`}
  portfolioData={{
    title: "[Project Name]",
    description: "[Detailed description]",
    dateCreated: "[Year]",
    image: "https://techemulsion.com/assets/portfolio/[image]",
    url: "https://techemulsion.com/portfolio/[slug]",
    genre: "[Category]",
    keywords: ["keyword1", "keyword2", "keyword3"],
  }}
  breadcrumbData={{
    items: [
      { name: "Home", url: "https://techemulsion.com" },
      { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
      { name: "[Project Name]", url: "https://techemulsion.com/portfolio/[slug]" },
    ],
  }}
  faqData={{
    questions: [
      {
        question: "[Natural language question]",
        answer: "[Comprehensive 100+ word answer]",
      },
      // Add 3-5 FAQs
    ],
  }}
/>
```

---

## Estimated Time

- **Critical fixes**: 10-12 hours
- **High priority**: 8-10 hours
- **Medium priority**: 6-8 hours
- **Total**: 24-30 hours

---

## Expected Results

- 30-50% increase in organic traffic
- Better AI search visibility
- More rich snippets in search results
- Improved social media sharing

