import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import { StructuredData } from "./structured-data";
import siteConfig from "data/config";

export interface EnhancedSEOProps extends NextSeoProps {
  pageType?: "home" | "services" | "portfolio" | "about" | "contact" | "blog";
  faqData?: { questions: Array<{ question: string; answer: string }> };
  serviceData?: {
    name: string;
    description: string;
    serviceType: string;
    areaServed?: string;
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
  reviewData?: {
    author?: string;
    rating: number;
    bestRating?: number;
    reviewBody: string;
    datePublished?: string;
  };
  canonicalUrl?: string;
  ogImage?: string;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  pageType = "home",
  faqData,
  serviceData,
  portfolioData,
  howToData,
  breadcrumbData,
  reviewData,
  canonicalUrl,
  ogImage,
  ...props
}) => {
  // Enhanced description with semantic keywords for AI engines
  const getEnhancedDescription = () => {
    const baseDescription = description || siteConfig.seo.description;

    // Add semantic context for AI engines
    const semanticKeywords = [
      "digital transformation",
      "AI solutions",
      "custom software development",
      "SaaS platforms",
      "machine learning",
      "artificial intelligence",
      "web development",
      "mobile apps",
      "blockchain solutions",
    ];

    return `${baseDescription} We specialize in ${semanticKeywords
      .slice(0, 3)
      .join(", ")} and more.`;
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

  // Get OG Image
  const getOGImage = () => {
    if (ogImage) {
      return {
        url: ogImage.startsWith("http") ? ogImage : `https://techemulsion.com${ogImage}`,
        width: 1200,
        height: 630,
        alt: title || "Tech Emulsion",
      };
    }
    return {
      url: "https://techemulsion.com/static/favicons/android-chrome-512x512.png",
      width: 512,
      height: 512,
      alt: "Tech Emulsion Logo",
    };
  };

  return (
    <>
      <NextSeo
        title={title}
        description={getEnhancedDescription()}
        canonical={canonicalUrl || getCanonicalUrl()}
        openGraph={{
          ...siteConfig.seo.openGraph,
          title,
          description: getEnhancedDescription(),
          type: "website",
          site_name: "Tech Emulsion",
          url: getCanonicalUrl(),
          images: [getOGImage()],
        }}
        titleTemplate={siteConfig.seo.titleTemplate}
        twitter={{
          ...siteConfig.seo.twitter,
          cardType: "summary_large_image",
          site: "@techemulsion",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "digital transformation, AI solutions, custom software development, SaaS platforms, machine learning, artificial intelligence, web development, mobile apps, blockchain solutions, Tech Emulsion",
          },
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

      {/* Review Schema - Conditional */}
      {reviewData && (
        <StructuredData type="review" data={reviewData} />
      )}
    </>
  );
};
