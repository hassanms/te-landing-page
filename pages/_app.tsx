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
            logo: "https://techemulsion.com/assets/logo/logo-light.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-850-930-7798",
              contactType: "customer service",
              email: "contact@techemulsion.com",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "3rd Floor, Afzal Towers, University Road",
              addressLocality: "Peshawar",
              addressCountry: "PK",
            },
            sameAs: [
              "https://www.linkedin.com/company/tech-emulsion/",
              "https://github.com/Tech-Emulsion",
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
