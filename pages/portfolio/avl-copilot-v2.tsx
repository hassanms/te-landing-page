import {
  Box,
  Container,
  Text,
  useColorMode,
  Heading,
  HStack,
  VStack,
  SimpleGrid,
  Divider,
  Button,
  ButtonGroup,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { ButtonLink } from "components/button-link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const CaseStudyAVLCoPilotV2 = () => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "charcoal.800");
  const sectionBg = useColorModeValue("gray.50", "charcoal.900");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("gray.900", "white");
  const accentColor = useColorModeValue("teal.500", "pearlAqua.500");
  const dividerColor = useColorModeValue("gray.200", "gray.700");
  const numberColor = accentColor;
  
  // Subtle background pattern
  const subtlePattern = useColorModeValue(
    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)",
    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)"
  );

  return (
    <Box bg={bgColor}>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <EnhancedSEO
        title="Case Study: AVL Copilot - AI-Powered RAG SaaS for Professional AV Industry - Tech Emulsion"
        description="Built a production-grade AI SaaS for the Professional AV industry using FastAPI, OpenAI, LangGraph, and Pinecone. Designed a scalable RAG architecture with vector search, intent routing, real-time manual ingestion, and multimodal image analysis. Reduced troubleshooting time by 40–60% and deployed a multi-tenant platform with billing, guardrails, cost controls, and cloud infrastructure on Google Cloud."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/avl-copilot-v2"
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF"
      />
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

      {/* Hero Section */}
      <Box
        position="relative"
        color="white"
        pt={{ base: 20, md: 32 }}
        pb={{ base: 16, md: 24 }}
        overflow="hidden"
        minH={{ base: "500px", md: "600px" }}>
        {/* Background Image with Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}>
          <Image
            src="/assets/portfolio/New/AVL-CoPilot-hero.png"
            alt="AVL Copilot - Professional AV Industry AI Platform"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient={
              colorMode === "dark"
                ? "linear(to-b, rgba(0,0,0,0.7), rgba(0,0,0,0.9))"
                : "linear(to-b, rgba(0,0,0,0.6), rgba(0,0,0,0.85))"
            }
          />
        </Box>

        <Container maxW="container.xl" position="relative" zIndex={1}>
          {/* Breadcrumb */}
          <Box mb={8} display="flex" justifyContent="flex-end">
            <ButtonGroup
              style={{
                backgroundColor: "none",
                fontSize: "1rem",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}>
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: "white",
                  padding: "0",
                  "&:hover": {
                    bg: "none",
                  },
                }}>
                Home
              </ButtonLink>
              <FaChevronRight size={15} style={{ color: "white" }} />
              <ButtonLink
                href="/portfolio"
                size="lg"
                sx={{
                  bg: "none",
                  color: "white",
                  padding: "0",
                  "&:hover": {
                    bg: "none",
                  },
                }}>
                Portfolio
              </ButtonLink>
              <FaChevronRight size={15} style={{ color: "white" }} />
              <Text as="span" ml="2" color="white">
                AVL Copilot
              </Text>
            </ButtonGroup>
          </Box>

          <VStack align="start" spacing={6} maxW="4xl">
            <Badge
              bg={accentColor}
              color="white"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="bold">
              AI SOLUTION
            </Badge>
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
              fontWeight="bold"
              lineHeight="1.1"
              color="white">
              AVL Copilot
            </Heading>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="300"
              lineHeight="1.3"
              color="rgba(255,255,255,0.9)">
              AI-Powered RAG SaaS for the Professional AV Industry
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="rgba(255,255,255,0.8)"
              lineHeight="1.7"
              maxW="3xl">
              Built a production-grade AI SaaS for the Professional AV industry using FastAPI, OpenAI, LangGraph, and Pinecone. Designed a scalable RAG architecture with vector search, intent routing, real-time manual ingestion, and multimodal image analysis. Reduced troubleshooting time by 40–60% and deployed a multi-tenant platform with billing, guardrails, cost controls, and cloud infrastructure on Google Cloud.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Executive Snapshot */}
      <Box 
        bg={bgColor} 
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`,
          opacity: 0.2,
        }}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={subtlePattern}
          backgroundSize="20px 20px"
          opacity={0.5}
          pointerEvents="none"
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack spacing={10} align="stretch">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Industry
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  Professional Audiovisual (Pro AV)
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Client
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  Global AVL Industry Leader
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Engagement
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  End-to-end AI Architecture & Production Deployment
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Outcome
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  Reduced troubleshooting time by 40–60%
                </Text>
              </Box>
            </SimpleGrid>
            <Box pt={4} borderTop="1px solid" borderColor={dividerColor}>
              <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                Tech Stack
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.6">
                Python, FastAPI, React, LangGraph, Pinecone, OpenAI, Supabase, Google Cloud
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* The Business Problem */}
      <Box 
        bg={sectionBg} 
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`,
          opacity: 0.2,
        }}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={subtlePattern}
          backgroundSize="20px 20px"
          opacity={0.3}
          pointerEvents="none"
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={10} maxW="4xl">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1">
              The Business Problem
            </Heading>
            <VStack align="start" spacing={6}>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                The AVL industry operates in high-pressure, live environments where failure is not an option.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Technicians working concerts, conferences, stadiums, and broadcast events face:
              </Text>
              <VStack align="start" spacing={3} pl={4}>
                <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8">
                  • Thousands of scattered PDF manuals
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8">
                  • Time-critical equipment failures during live shows
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8">
                  • Complex signal chains and hardware dependencies
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8">
                  • Safety-sensitive rigging and electrical configurations
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8">
                  • Inconsistent documentation across manufacturers
                </Text>
              </VStack>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Incorrect troubleshooting guidance can damage equipment, delay events, or create safety hazards.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                The client needed more than a chatbot.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                They needed a domain-restricted AI system that could function like a senior systems engineer on demand.
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Our Approach */}
      <Box 
        bg={bgColor} 
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`,
          opacity: 0.2,
        }}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={subtlePattern}
          backgroundSize="20px 20px"
          opacity={0.5}
          pointerEvents="none"
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }} alignItems="start">
            {/* Left Column - Text */}
            <VStack align="start" spacing={6}>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1">
                Our Approach
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                At Tech Emulsion, we architect AI systems as production infrastructure, not experiments.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                We designed a multi-agent, guardrailed AI platform that could understand technician intent, route queries intelligently, retrieve manufacturer-grade documentation, perform real-time web validation, analyze equipment visually, and enforce safety boundaries.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                The goal was clear: build an Expert-in-the-Loop AI that prioritizes accuracy, speed, and operational reliability.
              </Text>
            </VStack>

            {/* Right Column - Numbered List */}
            <VStack align="start" spacing={0} pt={2}>
              <Box w="full">
                <HStack spacing={5} py={5} align="flex-start">
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                    01.
                  </Text>
                  <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
                    Understand technician intent
                  </Text>
                </HStack>
                <Divider borderColor={dividerColor} opacity={0.5} />
              </Box>
              <Box w="full">
                <HStack spacing={5} py={5} align="flex-start">
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                    02.
                  </Text>
                  <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
                    Route queries intelligently
                  </Text>
                </HStack>
                <Divider borderColor={dividerColor} opacity={0.5} />
              </Box>
              <Box w="full">
                <HStack spacing={5} py={5} align="flex-start">
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                    03.
                  </Text>
                  <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
                    Retrieve manufacturer-grade documentation
                  </Text>
                </HStack>
                <Divider borderColor={dividerColor} opacity={0.5} />
              </Box>
              <Box w="full">
                <HStack spacing={5} py={5} align="flex-start">
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                    04.
                  </Text>
                  <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
                    Perform real-time web validation
                  </Text>
                </HStack>
                <Divider borderColor={dividerColor} opacity={0.5} />
              </Box>
              <Box w="full">
                <HStack spacing={5} py={5} align="flex-start">
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                    05.
                  </Text>
                  <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
                    Analyze equipment visually
                  </Text>
                </HStack>
                <Divider borderColor={dividerColor} opacity={0.5} />
              </Box>
              <Box w="full">
                <HStack spacing={5} py={5} align="flex-start">
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                    06.
                  </Text>
                  <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
                    Enforce safety boundaries
                  </Text>
                </HStack>
              </Box>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* The Solution Sections */}
      <Box 
        bg={sectionBg} 
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`,
          opacity: 0.2,
        }}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={subtlePattern}
          backgroundSize="20px 20px"
          opacity={0.3}
          pointerEvents="none"
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={12} w="full">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1">
              The Solution: AVL Support AI
            </Heading>

            {/* Main Screen */}
            <Box w="full" borderRadius="xl" overflow="hidden" boxShadow="xl">
              <Image
                src="/assets/portfolio/New/AVL-Copilot/Main Screen.png"
                alt="AVL Copilot Main Screen"
                width={1200}
                height={675}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </Box>

            <VStack align="start" spacing={8} maxW="4xl" w="full">
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={4}>
                  <Text as="span" fontWeight="semibold" color={headingColor}>Intelligent Intent Routing:</Text> We implemented a hybrid intent classification layer using local BERT models combined with GPT reasoning. Instead of responding generically, the system detects the context of the request and routes it into specialized workflows such as troubleshooting diagnostics, manual deep-search mode, firmware and driver support, and educational explanation mode. This ensures technicians receive structured, context-aware responses rather than probabilistic guesses.
                </Text>
                <Box borderRadius="xl" overflow="hidden" boxShadow="lg" maxW="3xl">
                  <Image
                    src="/assets/portfolio/New/AVL-Copilot/Chat Interface.png"
                    alt="AVL Copilot Chat Interface"
                    width={1000}
                    height={563}
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  />
                </Box>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={4}>
                  <Text as="span" fontWeight="semibold" color={headingColor}>Deep Retrieval-Augmented Generation:</Text> We built a dynamic RAG engine powered by Pinecone and OpenAI embeddings. Technical manuals are semantically indexed, allowing fast retrieval of exact sections from complex PDFs, structured synthesis instead of surface-level answers, and confidence scoring to prevent low-certainty outputs. If a manual does not exist in the system, the AI can autonomously locate, download, index, and use it in real time. This prevents knowledge gaps and eliminates outdated responses.
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} maxW="4xl">
                  <Box borderRadius="xl" overflow="hidden" boxShadow="lg">
                    <Image
                      src="/assets/portfolio/New/AVL-Copilot/Streaming Response.png"
                      alt="AVL Copilot streaming response"
                      width={600}
                      height={338}
                      style={{ width: "100%", height: "auto", objectFit: "contain" }}
                    />
                  </Box>
                  <Box borderRadius="xl" overflow="hidden" boxShadow="lg">
                    <Image
                      src="/assets/portfolio/New/AVL-Copilot/Web Search.png"
                      alt="AVL Copilot PDF manual retrieval"
                      width={600}
                      height={338}
                      style={{ width: "100%", height: "auto", objectFit: "contain" }}
                    />
                  </Box>
                </SimpleGrid>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={4}>
                  <Text as="span" fontWeight="semibold" color={headingColor}>Visual Equipment Intelligence:</Text> AVL is physical. Technicians work with racks, cables, consoles, and lighting fixtures. We integrated multimodal reasoning so users can upload images of equipment setups. The AI can identify specific models, detect visible cabling errors, assess device state, and generate structured inventory outputs. This bridges digital AI intelligence with real-world field environments.
                </Text>
                <Box borderRadius="xl" overflow="hidden" boxShadow="lg" maxW="3xl">
                  <Image
                    src="/assets/portfolio/New/AVL-Copilot/Image Analysis.png"
                    alt="AVL Copilot multimodal image analysis"
                    width={1000}
                    height={563}
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  />
                </Box>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={4}>
                  <Text as="span" fontWeight="semibold" color={headingColor}>Real-Time Web Validation:</Text> When internal data is insufficient, a controlled search agent retrieves live firmware versions, manufacturer bulletins, and verified sources. This prevents stale knowledge and keeps responses current.
                </Text>
                <Box borderRadius="xl" overflow="hidden" boxShadow="lg" maxW="3xl">
                  <Image
                    src="/assets/portfolio/New/AVL-Copilot/Live Google Maps Finder.png"
                    alt="AVL Copilot real-time web search and maps"
                    width={1000}
                    height={563}
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  />
                </Box>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Architecture Overview */}
      <Box 
        bg={bgColor} 
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`,
          opacity: 0.2,
        }}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={subtlePattern}
          backgroundSize="20px 20px"
          opacity={0.5}
          pointerEvents="none"
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={10} maxW="4xl">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1">
              Architecture Overview
            </Heading>
            <VStack align="start" spacing={6}>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                We implemented a modular microservices architecture built for scalability and resilience. Backend built with FastAPI for async performance, LangGraph for stateful agent orchestration, Supabase for authentication and user state, Pinecone for high-speed semantic search, React frontend with streaming responses and structured rendering, and Dockerized containers deployed on Google Cloud.
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full" maxW="4xl">
                <Box borderRadius="xl" overflow="hidden" boxShadow="lg">
                  <Image
                    src="/assets/portfolio/New/AVL-Copilot/Sign In.png"
                    alt="AVL Copilot Sign In - Supabase authentication"
                    width={600}
                    height={400}
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  />
                </Box>
                <Box borderRadius="xl" overflow="hidden" boxShadow="lg">
                  <Image
                    src="/assets/portfolio/New/AVL-Copilot/User Profile.png"
                    alt="AVL Copilot User Profile"
                    width={600}
                    height={400}
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  />
                </Box>
              </SimpleGrid>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                The orchestration layer allows cyclic reasoning workflows where the AI can plan, execute, verify, and refine responses before presenting them to the user. This dramatically reduces hallucination risk.
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Safety & Guardrails */}
      <Box 
        bg={sectionBg} 
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`,
          opacity: 0.2,
        }}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={subtlePattern}
          backgroundSize="20px 20px"
          opacity={0.3}
          pointerEvents="none"
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={10} maxW="4xl">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1">
              Safety & Guardrails
            </Heading>
            <VStack align="start" spacing={6}>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                In an industry involving electrical loads and rigging structures, incorrect data can cause real harm. We implemented strict prompt guardrails preventing speculative voltage or load calculations, hazard detection triggers for electrical or rigging risks, confidence thresholds before answer delivery, and structured logging and observability.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                Safety was designed into the system from day one.
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Production Infrastructure */}
      <Box 
        bg={bgColor} 
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`,
          opacity: 0.2,
        }}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={subtlePattern}
          backgroundSize="20px 20px"
          opacity={0.5}
          pointerEvents="none"
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={10} maxW="4xl">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1">
              Production Infrastructure & Cost Control
            </Heading>
            <VStack align="start" spacing={6}>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Unlike demo AI tools, this system was built for scale. We implemented usage tracking and quota enforcement, token cost monitoring, dual-layer caching to reduce inference overhead, structured logging for observability, and Stripe-powered subscription tiers.
              </Text>
              <Box borderRadius="xl" overflow="hidden" boxShadow="lg" maxW="md" w="full">
                <Image
                  src="/assets/portfolio/New/AVL-Copilot/Total Usage.png"
                  alt="AVL Copilot usage tracking and quota enforcement"
                  width={500}
                  height={350}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </Box>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                The platform can handle thousands of concurrent sessions without performance degradation.
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Business Impact */}
      <Box 
        bg={sectionBg} 
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`,
          opacity: 0.2,
        }}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={subtlePattern}
          backgroundSize="20px 20px"
          opacity={0.3}
          pointerEvents="none"
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }} alignItems="start">
            {/* Left Column - Text */}
            <VStack align="start" spacing={6}>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1">
                Business Impact
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Troubleshooting time reduced by 40–60 percent. Fragmented documentation consolidated into one intelligent interface. Scalable subscription SaaS architecture deployed. Foundation established for multi-tenant enterprise expansion.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                The client transitioned from a concept idea to a production-grade AI SaaS with billing, monitoring, and structured safety enforcement.
              </Text>
            </VStack>

            {/* Right Column - Numbered List */}
            <VStack align="start" spacing={0} pt={2}>
              <Box w="full">
                <HStack spacing={5} py={5} align="flex-start">
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                    01.
                  </Text>
                  <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
                    Troubleshooting time reduced by 40–60 percent
                  </Text>
                </HStack>
                <Divider borderColor={dividerColor} opacity={0.5} />
              </Box>
              <Box w="full">
                <HStack spacing={5} py={5} align="flex-start">
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                    02.
                  </Text>
                  <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
                    Fragmented documentation consolidated into one intelligent interface
                  </Text>
                </HStack>
                <Divider borderColor={dividerColor} opacity={0.5} />
              </Box>
              <Box w="full">
                <HStack spacing={5} py={5} align="flex-start">
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                    03.
                  </Text>
                  <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
                    Scalable subscription SaaS architecture deployed
                  </Text>
                </HStack>
                <Divider borderColor={dividerColor} opacity={0.5} />
              </Box>
              <Box w="full">
                <HStack spacing={5} py={5} align="flex-start">
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                    04.
                  </Text>
                  <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
                    Foundation established for multi-tenant enterprise expansion
                  </Text>
                </HStack>
              </Box>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Why This Matters */}
      <Box 
        bg={bgColor} 
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`,
          opacity: 0.2,
        }}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={subtlePattern}
          backgroundSize="20px 20px"
          opacity={0.5}
          pointerEvents="none"
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={10} maxW="4xl">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1">
              Why This Matters
            </Heading>
            <VStack align="start" spacing={6}>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                Most AI implementations fail because they stop at prompts.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                This project required domain-specific guardrails, multimodal reasoning, stateful orchestration, real-time ingestion, and scalable SaaS architecture. Tech Emulsion delivered a hardened AI infrastructure tailored for a safety-sensitive technical industry.
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* What's Next */}
      <Box 
        bg={sectionBg} 
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`,
          opacity: 0.2,
        }}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={subtlePattern}
          backgroundSize="20px 20px"
          opacity={0.3}
          pointerEvents="none"
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={10} maxW="4xl">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1">
              What's Next
            </Heading>
            <VStack align="start" spacing={6}>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Planned roadmap includes offline mode for remote venues, schematic and CAD diagram interpretation, voice interface for hands-free field use, and workspace-based multi-tenant deployments.
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        bgGradient={
          colorMode === "dark"
            ? "linear(to-r, teal.600, teal.800)"
            : "linear(to-r, teal.500, teal.600)"
        }
        py={{ base: 16, md: 20 }}
        color="white">
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center" maxW="3xl" mx="auto">
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold">
              Looking to Build Domain-Specific AI?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} opacity={0.9} lineHeight="1.8">
              If your industry requires accuracy, compliance, and operational reliability, we design AI systems that go beyond experimentation and into production.
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold" opacity={0.9}>
              Let's build it properly.
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center" pt={4}>
              <Button
                as="a"
                href="https://calendly.com/hassanms/discovery-call"
                target="_blank"
                size="lg"
                bg="white"
                color={accentColor}
                _hover={{ bg: "whiteAlpha.900" }}
                rightIcon={<FaChevronRight />}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                boxShadow="xl">
                Schedule a Call
              </Button>
              <Button
                as="a"
                href="/portfolio"
                size="lg"
                variant="outline"
                borderColor="white"
                borderWidth="2px"
                color="white"
                _hover={{
                  bg: "whiteAlpha.200",
                }}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold">
                View More Case Studies
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default CaseStudyAVLCoPilotV2;
