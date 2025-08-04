import React from "react";
import Script from "next/script";

interface StructuredDataProps {
  type: "organization" | "faq";
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
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "info@techemulsion.com",
          },
          sameAs: [
            "https://www.facebook.com/emulsiontech/",
            "https://www.linkedin.com/company/tech-emulsion/",
            "https://github.com/hassanms",
            "https://www.youtube.com/@TechEmulsion",
          ],
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
