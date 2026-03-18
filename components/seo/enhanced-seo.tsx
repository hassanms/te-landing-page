import React from "react";
import Head from "next/head";
import { NextSeo, NextSeoProps } from "next-seo";
import { StructuredData } from "./structured-data";
import siteConfig from "data/config";
import { getImageUrl } from "lib/supabase-storage";

export interface EnhancedSEOProps extends NextSeoProps {
  pageType?: "home" | "services" | "portfolio" | "about" | "contact" | "blog";
  /** Comma-separated or array of keywords for meta keywords tag (used on service/subpages for SEO). */
  keywords?: string[] | string;
  faqData?: { questions: Array<{ question: string; answer: string }> };
  serviceData?: {
    name: string;
    description: string;
    serviceType: string;
    areaServed?: string;
    /** Full URL for Service schema (e.g. canonical page URL). */
    url?: string;
    /** Image URL for Service schema (absolute). */
    image?: string;
    /** ISO date for dateModified in Service schema. */
    dateModified?: string;
  };
  portfolioData?: {
    title: string;
    description: string;
    dateCreated: string;
    image: string;
    url: string;
    genre: string;
    keywords: string[];
  };
  howToData?: {
    title: string;
    description: string;
    image?: string;
    totalTime?: string;
    cost?: number;
    supplies?: Array<{ name: string }>;
    tools?: Array<{ name: string }>;
    steps?: Array<{ name: string; text: string; image?: string }>;
  };
  breadcrumbData?: {
    items: Array<{ name: string; url: string }>;
  };
  articleData?: {
    title: string;
    description?: string;
    image?: string;
    authorName?: string;
    datePublished?: string;
    dateModified?: string;
    url?: string;
  };
  reviewData?: {
    author?: string;
    rating: number;
    bestRating?: number;
    reviewBody: string;
    datePublished?: string;
  };
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  pageType = "home",
  keywords,
  faqData,
  serviceData,
  portfolioData,
  howToData,
  breadcrumbData,
  articleData,
  reviewData,
  canonicalUrl,
  ogImage,
  ogType,
  twitterCard,
  ...props
}) => {
  const keywordsContent =
    keywords === undefined
      ? undefined
      : Array.isArray(keywords)
        ? keywords.join(", ")
        : keywords;
  // Enhanced description with semantic keywords for AI engines (keep meta description ~150–160 chars when possible)
  const getEnhancedDescription = () => {
    const baseDescription = description || siteConfig.seo.description || "";
    if (baseDescription.length >= 155) return baseDescription;

    const semanticKeywords = [
      "generative AI development services",
      "generative AI development company",
      "AI agent development services",
      "SaaS development services",
      "custom SaaS development",
      "workflow automation services",
      "DevOps services",
      "QA testing services",
      "Next.js website development",
      "AI automation services",
    ];
    const suffix = ` We specialize in ${semanticKeywords.slice(0, 4).join(", ")} and more.`;
    const combined = baseDescription + suffix;
    return combined.length <= 160 ? combined : baseDescription;
  };

  // Generate FAQ schema if FAQ data is provided
  const getFAQSchema = () => {
    if (!faqData || !faqData.questions || faqData.questions.length === 0)
      return null;

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.questions.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
  };

  // Generate service schema if service data is provided
  const getServiceSchema = () => {
    if (!serviceData) return null;

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceData.name,
      description: serviceData.description,
      provider: {
        "@type": "Organization",
        name: "Tech Emulsion",
        url: "https://techemulsion.com",
      },
      areaServed: "Worldwide",
      serviceType: serviceData.serviceType,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
    };
  };

  // Generate portfolio schema if portfolio data is provided
  const getPortfolioSchema = () => {
    if (!portfolioData) return null;

    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: portfolioData.title,
      description: portfolioData.description,
      creator: {
        "@type": "Organization",
        name: "Tech Emulsion",
      },
      dateCreated: portfolioData.dateCreated,
      image: portfolioData.image,
      url: portfolioData.url,
      genre: portfolioData.genre,
      keywords: portfolioData.keywords?.join(", "),
    };
  };

  // Get canonical URL
  const getCanonicalUrl = () => {
    if (canonicalUrl) return canonicalUrl;
    // Default canonical URLs based on page type
    const defaultCanonicals: Record<string, string> = {
      home: "https://techemulsion.com",
      services: "https://techemulsion.com/services",
      portfolio: "https://techemulsion.com/portfolio",
      about: "https://techemulsion.com/our-story",
      contact: "https://techemulsion.com/contact",
      blog: "https://techemulsion.com/blog",
    };
    return defaultCanonicals[pageType] || "https://techemulsion.com";
  };

  // Get OG Image URL (full URL string for meta tags)
  const getOGImageUrl = () => {
    if (ogImage) {
      return ogImage.startsWith("http")
        ? ogImage
        : `https://techemulsion.com${ogImage}`;
    }
    return getImageUrl("assets/og-default.png");
  };

  // Get OG Image (object for NextSeo)
  const getOGImage = () => {
    return {
      url: getOGImageUrl(),
      width: 1200,
      height: 630,
      alt: title || "Tech Emulsion",
    };
  };

  return (
    <>
      {/* TODO: Replace /assets/og-default.png with a real 1200x630 branded image showing Tech Emulsion logo + tagline on dark background */}
      <Head>
        {/* ── Open Graph ── */}
        <meta property="og:site_name" content="Tech Emulsion" />
        <meta property="og:type" content={ogType || "website"} />
        <meta
          property="og:title"
          content={title || "Tech Emulsion | Generative AI Development Company"}
        />
        {description && (
          <meta property="og:description" content={description} />
        )}
        {canonicalUrl && (
          <meta property="og:url" content={canonicalUrl} />
        )}
        <meta property="og:image" content={getOGImageUrl()} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title || "Tech Emulsion"} />

        {/* ── Twitter / X Card ── */}
        <meta
          name="twitter:card"
          content={twitterCard || "summary_large_image"}
        />
        <meta name="twitter:site" content="@TechEmulsion" />
        <meta
          name="twitter:title"
          content={title || "Tech Emulsion | Generative AI Development Company"}
        />
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        <meta name="twitter:image" content={getOGImageUrl()} />
        <meta name="twitter:image:alt" content={title || "Tech Emulsion"} />
      </Head>
      <NextSeo
        title={title}
        description={getEnhancedDescription()}
        canonical={canonicalUrl || getCanonicalUrl()}
        openGraph={{
          ...siteConfig.seo.openGraph,
          title,
          description: getEnhancedDescription(),
          type: (ogType as "website" | "article") || "website",
          site_name: "Tech Emulsion",
          url: getCanonicalUrl(),
          images: [getOGImage()],
        }}
        titleTemplate={siteConfig.seo.titleTemplate}
        twitter={{
          ...siteConfig.seo.twitter,
          cardType: (twitterCard as "summary_large_image") || "summary_large_image",
          site: "@TechEmulsion",
        }}
        additionalMetaTags={[
          {
            name: "author",
            content: "Tech Emulsion",
          },
          {
            name: "robots",
            content:
              "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
          {
            name: "googlebot",
            content:
              "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
          ...(keywordsContent
            ? [{ name: "keywords" as const, content: keywordsContent }]
            : []),
        ]}
        {...props}
      />

      {/* Organization Schema - Always present */}
      <StructuredData type="organization" data={{}} />

      {/* Website Schema - Always present */}
      <StructuredData type="website" data={{}} />

      {/* FAQ Schema - Conditional */}
      {faqData && faqData.questions && faqData.questions.length > 0 && (
        <StructuredData type="faq" data={faqData} />
      )}

      {/* Service Schema - Conditional */}
      {serviceData && (
        <StructuredData type="service" data={serviceData} />
      )}

      {/* Portfolio Schema - Conditional */}
      {portfolioData && (
        <StructuredData type="portfolio" data={portfolioData} />
      )}

      {/* HowTo Schema - Conditional */}
      {howToData && (
        <StructuredData type="howto" data={howToData} />
      )}

      {/* Breadcrumb Schema - Conditional */}
      {breadcrumbData && breadcrumbData.items && breadcrumbData.items.length > 0 && (
        <StructuredData type="breadcrumb" data={breadcrumbData} />
      )}

      {/* Article Schema - Conditional */}
      {articleData && (
        <StructuredData type="article" data={articleData} />
      )}

      {/* Review Schema - Conditional */}
      {reviewData && (
        <StructuredData type="review" data={reviewData} />
      )}
    </>
  );
};
