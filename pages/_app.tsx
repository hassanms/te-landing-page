import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";

import { AuthProvider as SaasAuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";
import { AuthProvider } from "contexts/auth-context";
import { ColorModeInit } from "components/color-mode-init";
import { AnalyticsProvider } from "components/analytics/analytics-provider";

import theme from "../theme";
import { Toaster } from "components/Toaster";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps;
  const router = useRouter();
  
  // Check if current page is an admin page
  const isAdminPage = router.pathname.startsWith("/admin");

  return (
    <SaasProvider theme={theme}>
      <SaasAuthProvider>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
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
            address: {
              "@type": "PostalAddress",
              streetAddress: "1021 E Lincolnway, Unit #1373",
              addressLocality: "Cheyenne",
              addressRegion: "WY",
              postalCode: "82001",
              addressCountry: "US",
            },
            location: [
              {
                "@type": "Place",
                name: "Tech Emulsion — US Office",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "1021 E Lincolnway, Unit #1373",
                  addressLocality: "Cheyenne",
                  addressRegion: "WY",
                  postalCode: "82001",
                  addressCountry: "US",
                },
              },
              {
                "@type": "Place",
                name: "Tech Emulsion — Pakistan Office",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Third Floor, Afzal Tower, University Rd, near BRT Station, University Town",
                  addressLocality: "Peshawar",
                  addressRegion: "Khyber Pakhtunkhwa",
                  postalCode: "25000",
                  addressCountry: "PK",
                },
              },
            ],
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Pakistan" },
              { "@type": "AdministrativeArea", name: "Worldwide" },
            ],
            sameAs: [
              "https://www.linkedin.com/company/tech-emulsion/",
              "https://www.upwork.com/agencies/techemulsion/",
              "https://www.youtube.com/@TechEmulsion",
              "https://github.com/Tech-Emulsion",
              "https://www.facebook.com/profile.php?id=100092936174663"
            ],
          })}
        </Script>
        <ColorModeInit />
        {isAdminPage ? (
            // Admin pages use Supabase auth and their own layout
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          ) : (
            // Regular pages: analytics + main layout
            <AnalyticsProvider>
              <Layout
                announcementProps={announcement}
                headerProps={header}
                footerProps={footer}
              >
                <Component {...pageProps} />
              </Layout>
            </AnalyticsProvider>
          )}
        <Toaster />
      </SaasAuthProvider>
    </SaasProvider>
  );
}

export default MyApp;
