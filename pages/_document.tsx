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

          {/* DNS prefetch for external resources */}
          <link rel="dns-prefetch" href="//www.googletagmanager.com" />
          <link rel="dns-prefetch" href="//assets.calendly.com" />

          {/* Structured Data for Search Engines */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Tech Emulsion",
                url: "https://techemulsion.com",
                logo: "https://techemulsion.com/static/favicons/android-chrome-512x512.png",
                description:
                  "Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business",
                foundingDate: "2023",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "Pakistan",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "English",
                },
                sameAs: [
                  "https://linkedin.com/company/tech-emulsion",
                  "https://twitter.com/techemulsion",
                ],
                serviceArea: {
                  "@type": "GeoCircle",
                  geoMidpoint: {
                    "@type": "GeoCoordinates",
                    latitude: 33.6844,
                    longitude: 73.0479,
                  },
                  geoRadius: "50000",
                },
              }),
            }}
          />
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
