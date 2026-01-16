import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";

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
      <AuthProvider>
        {isAdminPage ? (
          // Admin pages use their own layout (AdminLayout)
          <Component {...pageProps} />
        ) : (
          // Regular pages use the main layout with header and footer
          <Layout
            announcementProps={announcement}
            headerProps={header}
            footerProps={footer}
          >
            <Component {...pageProps} />
          </Layout>
        )}
        <Toaster />
      </AuthProvider>
    </SaasProvider>
  );
}

export default MyApp;
