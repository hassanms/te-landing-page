import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Standard favicon for all browsers */}
          <link rel="icon" href="/static/favicons/favicon.ico" />

          {/* Apple Touch Icon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />

          {/* Standard favicon sizes */}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />

          {/* Android Chrome icons */}
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/favicons/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/static/favicons/android-chrome-512x512.png"
          />

          {/* Web App Manifest */}
          <link rel="manifest" href="/static/favicons/manifest.json" />
          <link
            rel="stylesheet"
            href="https://assets.calendly.com/assets/external/widget.css"
          />

          {/* GEO/AEO Optimization Meta Tags */}
          <meta name="application-name" content="Tech Emulsion" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Tech Emulsion" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/static/favicons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#004c4c" />
          <meta name="msapplication-tap-highlight" content="no" />

          {/* Additional SEO and Social Media Meta Tags */}
          <meta name="theme-color" content="#004c4c" />
          <meta name="msapplication-TileColor" content="#004c4c" />
          <meta
            name="msapplication-TileImage"
            content="/static/favicons/mstile-150x150.png"
          />

          {/* Open Graph Meta Tags for Social Media */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Tech Emulsion" />
          <meta
            property="og:image"
            content="/static/favicons/android-chrome-512x512.png"
          />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/favicons/android-chrome-512x512.png"
          />

          {/* Preconnect for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://www.googletagmanager.com" />

          {/* DNS prefetch for external resources */}
          <link rel="dns-prefetch" href="//www.googletagmanager.com" />
          <link rel="dns-prefetch" href="//assets.calendly.com" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
