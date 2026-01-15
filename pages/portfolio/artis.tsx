import { Box, Container, Text, useColorMode } from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";

const CaseStudyArtis = () => {
  const { colorMode } = useColorMode();
  return (
    <Box id="services">
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <EnhancedSEO
        title="Case Study: Artis - Tech Emulsion"
        description="Artis is an AI-driven platform that analyzes an artist's style to provide tailored advice and marketing strategies, while using blockchain to protect ownership with tamper-proof digital certificates and unique fingerprints for each creation."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/artis"
        portfolioData={{
          title:
            "Artis – Blockchain-Powered SaaS to Help Artists Copyright Their Work",
          description:
            "Artis is an AI-driven platform that acts as a personalized creative support team, analyzing an artist's style to offer tailored advice and marketing strategies while using blockchain to protect ownership with tamper-proof certificates and unique fingerprints for each creation.",
          dateCreated: "2023",
          image: "https://techemulsion.com/assets/portfolio/Artis.png",
          url: "https://techemulsion.com/portfolio/artis",
          genre: "AI, Blockchain, Creator Tools",
          keywords: [
            "blockchain",
            "copyright",
            "artists",
            "AI platform",
            "Artis",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "Artis",
              url: "https://techemulsion.com/portfolio/artis",
            },
          ],
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF"></Script>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          Calendly.initBadgeWidget({
            url: "https://calendly.com/hassanms/discovery-call",
            text: "Talk to Sales",
            color: "#004c4c",
            textColor: "#ffffff",
          });
        }}
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DJFC9CERLF')`}
      </Script>
      <Container maxW="container.xl" py={{ base: "2", lg: "10" }}>
        <BackgroundGradient height="100%" zIndex="-1" />
        <Box
          display={{ base: "block", md: "flex" }}
          px="15"
          mt={10}
          justifyContent={"space-between"}
          mb={10}>
          <Box
            sx={{
              width: "100%",
              backgroundImage:
                colorMode === "dark"
                  ? "url('/assets/background/pattern.jpg')"
                  : "url('/assets/background/light-pattern.jpg')",
              height: "350px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              py: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              h: "100%",
              textAlign: "center",
            }}>
            <Box>
              <Image
                src="/assets/portfolio/Artis.png"
                alt="Artis"
                width={502}
                height={300}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                  marginTop: 25,
                }}
              />
            </Box>
            <Text
              color={
                colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
              }
              fontSize="3xl"
              fontWeight={"500"}
              mt="4"
              width={"100%"}
              align={"center"}>
              Artis – Case Study
            </Text>
            <Text
              color={
                colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
              }
              fontSize="xl"
              mt="4"
              width={["auto", null, "60%"]}>
              Artis is an AI-driven platform that functions as a personalised
              creative support team, analysing an artist's style and preferences
              to offer tailored advice, marketing strategies, and suggestions
              for showcasing and selling their work. Utilising blockchain
              technology, Artis ensures ownership protection by creating
              tamper-proof digital certificates and unique fingerprints for each
              creation, safeguarding intellectual property while simplifying
              copyright and patent processes. The platform also boosts creators'
              reach and revenue by connecting them with audiences, facilitating
              secure sales, and enhancing their personal brand. Artis caters to
              artists, musicians, writers, inventors, collectors, and
              businesses, aiming to make creativity secure, accessible, and
              profitable.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CaseStudyArtis;
