import type { AppProps } from "next/app";
import { useRouter } from "next/router";

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
