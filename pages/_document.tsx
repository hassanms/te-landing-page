import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Standard favicon for all browsers */}
          <link rel="icon" type="image/png" href="/static/favicons/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/static/favicons/favicon.svg" />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />

          {/* Web App Manifest */}
          <link rel="manifest" href="/static/favicons/manifest.json" />
          <link
            rel="stylesheet"
            href="https://assets.calendly.com/assets/external/widget.css"
          />
          <style>{`
            /* Calendly Badge Widget Styling - Match Hero Button */
            .calendly-badge-widget,
            #calendly-badge-widget,
            .calendly-inline-widget,
            [class*="calendly-badge"],
            [id*="calendly-badge"] {
              border-radius: 0.375rem !important;
              padding: 0.75rem 1.5rem !important;
              font-size: 1rem !important;
              font-weight: 700 !important;
              line-height: 1.5 !important;
              min-height: 3rem !important;
              display: inline-flex !important;
              align-items: center !important;
              justify-content: center !important;
              box-shadow: none !important;
              border: none !important;
            }
          `}</style>

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
          <meta name="msapplication-TileColor" content="#008080" />
          <meta name="msapplication-tap-highlight" content="no" />

          {/* Additional SEO and Social Media Meta Tags */}
          <meta name="theme-color" content="#008080" />
          <meta name="msapplication-TileColor" content="#008080" />
          <meta
            name="msapplication-TileImage"
            content="/static/favicons/mstile-150x150.png"
          />

          {/* Standard Meta Tags for SEO */}
          <meta
            name="description"
            content="Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business"
          />
          <meta
            name="keywords"
            content="Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business"
          />
          <meta name="author" content="Tech Emulsion" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="distribution" content="global" />
          <meta name="rating" content="general" />

          {/* Open Graph Meta Tags for Social Media */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Tech Emulsion | Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business"
          />
          <meta
            property="og:description"
            content="Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business."
          />
          <meta property="og:url" content="https://techemulsion.com" />
          <meta property="og:site_name" content="Tech Emulsion" />
          <meta
            property="og:image"
            content="/static/favicons/android-chrome-512x512.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="Tech Emulsion | Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business"
          />
          <meta property="og:locale" content="en_US" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Tech Emulsion | Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business"
          />
          <meta
            name="twitter:description"
            content="Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business."
          />
          <meta name="twitter:site" content="@techemulsion" />
          <meta name="twitter:creator" content="@techemulsion" />
          <meta
            name="twitter:image"
            content="/static/favicons/android-chrome-512x512.png"
          />
          <meta
            name="twitter:image:alt"
            content="Tech Emulsion | Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business"
          />

          {/* Preconnect for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://www.googletagmanager.com" />

          {/* Montserrat Font Import (active - comment out and uncomment Inter below to switch back) */}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
          {/* Inter Font Import (commented out - uncomment this and comment out Montserrat above to switch back to Inter) */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
            rel="stylesheet"
          /> */}

          {/* DNS prefetch for external resources */}
          <link rel="dns-prefetch" href="//www.googletagmanager.com" />
          <link rel="dns-prefetch" href="//assets.calendly.com" />

          {/* Structured Data for Search Engines - Organization schema moved to page-level components */}
          <script
            id="vtag-ai-js"
            async
            src="https://r2.leadsy.ai/tag.js"
            data-pid="1ifXj2fdQwendXlL"
            data-version="062024"
          ></script>
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
