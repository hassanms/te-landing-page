import { Box, Container, Text, useColorMode } from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";

const CaseStudyRagGenai = () => {
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
        title="Case Study: RAG Based Customized ChatBot - Tech Emulsion"
        description="An AI-powered Retrieval-Augmented Generation (RAG) application that allows users to upload PDFs, ask questions, and receive accurate, context-aware answers using OpenAI language models, embeddings, and a vector database for efficient document retrieval."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/genai"
        portfolioData={{
          title: "RAG Based Customized ChatBot – AI-Powered Document Querying",
          description:
            "This end-to-end RAG application lets users upload PDF documents and ask natural language questions. It uses OpenAI LLMs, embeddings, and a vector database to retrieve relevant content and generate accurate, context-aware answers, including support for graphical content.",
          dateCreated: "2023",
          image: "https://techemulsion.com/assets/portfolio/raggenai.png",
          url: "https://techemulsion.com/portfolio/genai",
          genre: "AI, RAG, Document Intelligence",
          keywords: [
            "RAG",
            "AI chatbot",
            "document querying",
            "OpenAI",
            "vector database",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "RAG ChatBot",
              url: "https://techemulsion.com/portfolio/genai",
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
                src="/assets/portfolio/raggenai.png"
                alt="RAG Based Customized ChatBot"
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
              RAG Based Customized ChatBot – Case Study
            </Text>
            <Text
              color={
                colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
              }
              fontSize="xl"
              mt="4"
              width={["auto", null, "60%"]}>
              The project is an AI-powered Retrieval-Augmented Generation (RAG)
              application that allows users to upload PDF documents, ask
              questions about their content, and receive accurate, context-aware
              answers by utilizing OpenAI's language models, embeddings, and a
              vector database for efficient document retrieval.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CaseStudyRagGenai;
