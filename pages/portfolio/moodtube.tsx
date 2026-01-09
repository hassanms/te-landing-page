import { Box, Container, Text, useColorMode } from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";

const CaseStudyMoodtube = () => {
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
        title="Case Study: MoodTube - Tech Emulsion"
        description="MoodTube is a browser extension that lets users search YouTube videos based on specific moods like Happy, Relaxed, or Motivated, using AI tools such as LangChain and vector embeddings to perform semantic search over video transcripts."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/moodtube"
        portfolioData={{
          title: "MoodTube – AI-Powered YouTube Video Search by Mood",
          description:
            "MoodTube allows users to search YouTube videos by mood using AI tools like LangChain and vector embeddings. It extracts YouTube transcripts, converts them into embeddings, and uses semantic search to recommend videos that match the selected mood.",
          dateCreated: "2023",
          image: "https://techemulsion.com/assets/portfolio/moodtube.png",
          url: "https://techemulsion.com/portfolio/moodtube",
          genre: "AI, Browser Extension",
          keywords: [
            "YouTube",
            "browser extension",
            "semantic search",
            "LangChain",
            "MoodTube",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "MoodTube",
              url: "https://techemulsion.com/portfolio/moodtube",
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
                src="/assets/portfolio/moodtube.png"
                alt="Moodtube"
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
              fontSize="4xl"
              fontWeight={"500"}
              mt="4"
              width={"100%"}
              align={"center"}>
              Moodtube – Case Study
            </Text>
            <Text
              color={
                colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
              }
              fontSize="xl"
              mt="4"
              width={["auto", null, "60%"]}>
              MoodTube is a browser extension that allows users to search for
              YouTube videos based on specific moods, such as "Happy,"
              "Relaxed," or "Motivated." It leverages AI tools like LangChain,
              vector embeddings, and vector databases to analyze and recommend
              videos that match the selected mood, providing a dynamic and
              personalized video experience.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CaseStudyMoodtube;
