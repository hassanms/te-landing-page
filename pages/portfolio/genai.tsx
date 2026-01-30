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
        faqData={{
          questions: [
            {
              question: "What is a RAG-based chatbot and how does it work?",
              answer:
                "A RAG (Retrieval-Augmented Generation) chatbot is an AI-powered application that allows users to interact with documents by uploading PDFs and asking natural language questions. The system uses advanced AI techniques including OpenAI's large language models (LLMs), vector embeddings for semantic search, and pgvector for similarity matching to extract, understand, and answer queries with remarkable accuracy. It also includes image recognition capabilities for graphical content, making it an intelligent and intuitive document querying experience.",
            },
            {
              question: "What technologies power this RAG chatbot?",
              answer:
                "This RAG chatbot is built using cutting-edge technologies including OpenAI's language models for natural language understanding and generation, pgvector for efficient vector similarity search, advanced embedding models to convert text into searchable vectors, image recognition systems for processing graphical content in documents, and a robust database architecture that enables fast retrieval of relevant information from uploaded documents.",
            },
            {
              question: "What are the main use cases for this RAG chatbot?",
              answer:
                "This RAG chatbot is ideal for various use cases including document Q&A where users can ask questions about uploaded PDF documents, knowledge base querying for organizations with large document repositories, research assistance to quickly find information within documents, customer support automation to answer questions based on documentation, and educational purposes where students or professionals need to extract information from technical documents efficiently.",
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
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "gray.700"
                }
              fontSize="3xl"
              fontWeight={"500"}
              mt="4"
              width={"100%"}
              align={"center"}>
              RAG Based Customized ChatBot – Case Study
            </Text>
            <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "gray.700"
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
