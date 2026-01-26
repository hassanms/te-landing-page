import React from "react";
import Script from "next/script";

interface StructuredDataProps {
  type: "organization" | "faq" | "service" | "portfolio" | "howto" | "breadcrumb" | "review" | "website" | "localbusiness" | "article";
  data: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  type,
  data,
}) => {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tech Emulsion",
          url: "https://techemulsion.com",
          logo: "https://techemulsion.com/static/favicons/android-chrome-192x192.png",
          description:
            "Tech Emulsion specializes in imagineering digital transformation for businesses through AI-powered solutions, custom software development, and innovative technology services.",
          foundingDate: "2020",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Peshawar",
            addressRegion: "Khyber Pakhtunkhwa",
            postalCode: "25120",
            addressCountry: "PK",
            streetAddress: "Arbab road, Peshawar",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 33.6844,
            longitude: 73.0479,
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "info@techemulsion.com",
            availableLanguage: "English",
          },
          sameAs: [
            "https://www.facebook.com/emulsiontech/",
            "https://www.linkedin.com/company/tech-emulsion/",
            "https://github.com/hassanms",
            "https://www.youtube.com/@TechEmulsion",
            "https://twitter.com/techemulsion",
          ],
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 33.6844,
              longitude: 73.0479,
            },
            geoRadius: {
              "@type": "Distance",
              value: 50000,
            },
          },
        };
      case "faq":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.questions.map((q: any) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })),
        };
      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: "Tech Emulsion",
            url: "https://techemulsion.com",
          },
          areaServed: data.areaServed || "Worldwide",
          serviceType: data.serviceType,
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
          },
        };
      case "portfolio":
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: data.title,
          description: data.description,
          creator: {
            "@type": "Organization",
            name: "Tech Emulsion",
            url: "https://techemulsion.com",
          },
          dateCreated: data.dateCreated,
          image: data.image,
          url: data.url,
          genre: data.genre,
          keywords: data.keywords?.join(", "),
        };
      case "howto":
        return {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: data.title,
          description: data.description,
          image: data.image,
          totalTime: data.totalTime,
          estimatedCost: data.cost
            ? {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: data.cost,
              }
            : undefined,
          supply: data.supplies?.map((s: any) => ({
            "@type": "HowToSupply",
            name: s.name,
          })),
          tool: data.tools?.map((t: any) => ({
            "@type": "HowToTool",
            name: t.name,
          })),
          step: data.steps?.map((s: any, index: number) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: s.name,
            text: s.text,
            image: s.image,
          })),
        };
      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };
      case "review":
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "Organization",
            name: "Tech Emulsion",
          },
          author: {
            "@type": "Person",
            name: data.author || "Client",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: data.rating,
            bestRating: data.bestRating || 5,
          },
          reviewBody: data.reviewBody,
          datePublished: data.datePublished,
        };
      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Tech Emulsion",
          url: "https://techemulsion.com",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://techemulsion.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        };
      case "localbusiness":
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://techemulsion.com",
          name: "Tech Emulsion",
          image: "https://techemulsion.com/static/favicons/android-chrome-512x512.png",
          url: "https://techemulsion.com",
          telephone: data.telephone,
          email: data.email || "info@techemulsion.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Peshawar",
            addressRegion: "Khyber Pakhtunkhwa",
            postalCode: "25120",
            addressCountry: "PK",
            streetAddress: "Arbab road, Peshawar",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 33.6844,
            longitude: 73.0479,
          },
          openingHoursSpecification: data.openingHours,
          priceRange: data.priceRange,
        };
      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data.headline || data.title,
          description: data.description,
          image: data.image ? (Array.isArray(data.image) ? data.image : [data.image]) : undefined,
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          author: {
            "@type": "Person",
            name: data.author || "Tech Emulsion",
          },
          publisher: {
            "@type": "Organization",
            name: "Tech Emulsion",
            logo: {
              "@type": "ImageObject",
              url: "https://techemulsion.com/static/favicons/android-chrome-192x192.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url,
          },
          articleSection: data.section || data.category,
          keywords: data.keywords || undefined,
        };
      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};
