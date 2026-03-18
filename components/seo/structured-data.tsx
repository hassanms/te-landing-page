import React from "react";
import Script from "next/script";

interface StructuredDataProps {
  type:
    | "organization"
    | "faq"
    | "service"
    | "portfolio"
    | "howto"
    | "breadcrumb"
    | "review"
    | "website"
    | "article";
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
          logo: {
            "@type": "ImageObject",
            url: "https://techemulsion.com/assets/logo/logo-light.png",
            width: 256,
            height: 64,
          },
          description:
            "Tech Emulsion is a generative AI development company that builds AI agents, SaaS platforms, and custom software from MVP to enterprise. 50+ projects shipped.",
          foundingDate: "2021",
          numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: 20,
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "3rd Floor, Afzal Towers, University Road",
            addressLocality: "Peshawar",
            addressCountry: "PK",
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+1-850-930-7798",
              contactType: "customer service",
              areaServed: "US",
              availableLanguage: "English",
            },
            {
              "@type": "ContactPoint",
              telephone: "+92-334-555-9140",
              contactType: "customer service",
              areaServed: "PK",
              availableLanguage: ["English", "Urdu"],
            },
          ],
          email: "contact@techemulsion.com",
          areaServed: ["United States", "Pakistan", "Worldwide"],
          sameAs: [
            "https://www.linkedin.com/company/tech-emulsion/",
            "https://www.upwork.com/agencies/techemulsion/",
            "https://www.youtube.com/@TechEmulsion",
            "https://github.com/Tech-Emulsion",
            "https://www.facebook.com/profile.php?id=100092936174663",
          ],
          knowsAbout: [
            "Generative AI Development",
            "SaaS Development",
            "AI Agent Engineering",
            "DevOps",
            "QA Automation",
            "Next.js Development",
            "Workflow Automation",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Software Development Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Agentic AI Engineering" },
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "SaaS Development" },
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Website Development" },
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "DevOps Solutions" },
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Generative AI Integration" },
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "QA Testing & Automation" },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Chrome Extension Development",
                },
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Workflow Automation" },
              },
            ],
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
      case "service": {
        const baseUrl = "https://techemulsion.com";
        const imageUrl = data.image
          ? data.image.startsWith("http")
            ? data.image
            : `${baseUrl}${data.image}`
          : undefined;
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name,
          description: data.description,
          url: data.url || undefined,
          image: imageUrl,
          dateModified: data.dateModified || undefined,
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
      }
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
      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data.title,
          description: data.description,
          image: data.image,
          author: {
            "@type": "Person",
            name: data.authorName || "Tech Emulsion",
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          mainEntityOfPage: data.url
            ? {
                "@type": "WebPage",
                "@id": data.url,
              }
            : undefined,
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
