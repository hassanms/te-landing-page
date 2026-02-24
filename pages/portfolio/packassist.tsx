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
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { ButtonLink } from "components/button-link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const PACK_ASSIST_CASE_STUDY_IMAGES = [
  {
    src: "/assets/portfolio/New/Pack Assist Case Study Gallery/Main Page.png",
    alt: "Pack Assist - Main Chatbot Page",
    isPortrait: false,
  },
  {
    src: "/assets/portfolio/New/Pack Assist Case Study Gallery/Websites Allow List.png",
    alt: "Pack Assist - Websites Allow List Configuration",
    isPortrait: false,
  },
  {
    src: "/assets/portfolio/New/Pack Assist Case Study Gallery/Knowledgebase.png",
    alt: "Pack Assist - Knowledgebase Management",
    isPortrait: false,
  },
  {
    src: "/assets/portfolio/New/Pack Assist Case Study Gallery/CSR Management.PNG",
    alt: "Pack Assist - CSR Management Dashboard",
    isPortrait: false,
  },
  {
    src: "/assets/portfolio/New/Pack Assist Case Study Gallery/Human in Loop.PNG",
    alt: "Pack Assist - Human in the Loop Controls",
    isPortrait: false,
  },
  {
    src: "/assets/portfolio/New/Pack Assist Case Study Gallery/Visitor - CSR Flow (1).PNG",
    alt: "Pack Assist - Visitor to CSR Flow",
    isPortrait: false,
  },
];

const scrollRightToLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const CaseStudyPackAssist = () => {
  const { colorMode } = useColorMode();
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const bgColor = useColorModeValue("white", "charcoal.800");
  const sectionBg = useColorModeValue("gray.50", "charcoal.900");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const headingColor = useColorModeValue("gray.900", "white");
  const accentColor = useColorModeValue("teal.500", "pearlAqua.500");
  const dividerColor = useColorModeValue("gray.200", "gray.700");
  const numberColor = accentColor;

  const subtlePattern = useColorModeValue(
    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)",
    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)"
  );

  return (
    <Box bg={bgColor}>
      <Head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </Head>
      <EnhancedSEO
        title="Case Study: Pack Assist - Cost-Optimized AI Sales Agent for Packaging - Tech Emulsion"
        description="Pack Assist is an AI-Assisted Sales Qualification Chatbot for the packaging industry. Tech Emulsion delivered a cost-optimized hybrid architecture, Zendesk-style agent dashboard, RAG-based fact-checking, and weekend automation in 8 weeks."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/packassist"
      />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF" />
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
        minH={{ base: "500px", md: "600px" }}
      >
        <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
          <Image
            src="/assets/portfolio/New/List Images/PackAssist.jpg"
            alt="Pack Assist - AI Sales Qualification Platform"
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
          <Box mb={8} display="flex" justifyContent="flex-end" w="full">
            <ButtonGroup
              style={{
                backgroundColor: "none",
                fontSize: "1rem",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
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
                }}
              >
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
                }}
              >
                Portfolio
              </ButtonLink>
              <FaChevronRight size={15} style={{ color: "white" }} />
              <Text as="span" ml="2" color="white">
                Pack Assist
              </Text>
            </ButtonGroup>
          </Box>

          <Flex
            align={{ base: "flex-start", lg: "center" }}
            justify="space-between"
            gap={{ base: 10, lg: 12 }}
            flexDir={{ base: "column", lg: "row" }}
            w="full"
          >
            <VStack align="start" spacing={6} flex={1} minW={0} maxW="4xl">
              <Heading
                as="h1"
                fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                color="white"
              >
                Pack Assist
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="300"
                lineHeight="1.3"
                color="rgba(255,255,255,0.9)"
              >
                Revolutionizing Packaging Sales with a Cost-Optimized AI Agent
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="3xl"
              >
                An advanced AI-Assisted Sales Qualification Chatbot for the packaging industry. Python FastAPI backend, hybrid
                qualification flow, Zendesk-style agent dashboard, and RAG to eliminate AI hallucinations—delivered in 8 weeks.
              </Text>
            </VStack>
            <Box
              flexShrink={0}
              w={{ base: "100%", lg: "45%" }}
              maxW={{ lg: "500px" }}
              position="relative"
              alignSelf={{ base: "center", lg: "flex-end" }}
            >
              <Image
                src="/assets/portfolio/New/Pack Assist Case Study Gallery/Pack Assist Show Case Screen Image.png"
                alt="Pack Assist - Dashboard Showcase"
                width={500}
                height={400}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </Box>
          </Flex>
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
        }}
      >
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
                <Text
                  fontSize="xs"
                  color={textColor}
                  mb={3}
                  fontWeight="medium"
                  letterSpacing="wide"
                  textTransform="uppercase"
                >
                  Industry
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color={headingColor}
                  fontWeight="semibold"
                  lineHeight="1.5"
                >
                  Packaging & Manufacturing
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="xs"
                  color={textColor}
                  mb={3}
                  fontWeight="medium"
                  letterSpacing="wide"
                  textTransform="uppercase"
                >
                  Client
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color={headingColor}
                  fontWeight="semibold"
                  lineHeight="1.5"
                >
                  B2B Packaging Supplier
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="xs"
                  color={textColor}
                  mb={3}
                  fontWeight="medium"
                  letterSpacing="wide"
                  textTransform="uppercase"
                >
                  Engagement
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color={headingColor}
                  fontWeight="semibold"
                  lineHeight="1.5"
                >
                  End-to-end AI Sales Qualification Platform
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="xs"
                  color={textColor}
                  mb={3}
                  fontWeight="medium"
                  letterSpacing="wide"
                  textTransform="uppercase"
                >
                  Outcome
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color={headingColor}
                  fontWeight="semibold"
                  lineHeight="1.5"
                >
                  Reduced AI costs with accurate, 24/7 coverage
                </Text>
              </Box>
            </SimpleGrid>
            <Box pt={4} borderTop="1px solid" borderColor={dividerColor}>
              <Text
                fontSize="xs"
                color={textColor}
                mb={3}
                fontWeight="medium"
                letterSpacing="wide"
                textTransform="uppercase"
              >
                Tech Stack
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={headingColor}
                fontWeight="semibold"
                lineHeight="1.6"
              >
                React, Tailwind CSS, Socket.io, Python, FastAPI, OpenAI (GPT-4o-mini & GPT-4.1), LangChain, Pinecone, MongoDB
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Case Study Image Gallery Section */}
      <Box
        position="relative"
        py={{ base: 6, md: 10 }}
        overflow="hidden"
        minH={{ base: "340px", md: "400px" }}
        onMouseEnter={() => setIsGalleryPaused(true)}
        onMouseLeave={() => setIsGalleryPaused(false)}
      >
        <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
          <Image
            src="/assets/portfolio/New/banner of case studies.webp"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.6"
            _dark={{ bg: "blackAlpha.5" }}
          />
        </Box>
        <Box position="relative" zIndex={1} overflow="hidden" w="100%" py={4}>
          <Box
            display="flex"
            alignItems="flex-start"
            width="max-content"
            animation={`${scrollRightToLeft} 45s linear infinite`}
            sx={{ animationPlayState: isGalleryPaused ? "paused" : "running" }}
          >
            {[...PACK_ASSIST_CASE_STUDY_IMAGES, ...PACK_ASSIST_CASE_STUDY_IMAGES].map((img, idx) => (
              <Box
                key={idx}
                as="figure"
                flexShrink={0}
                mr={{ base: 6, md: 8 }}
                overflow="hidden"
                borderRadius={img.isPortrait ? "2xl" : "0"}
                border="5px solid"
                borderColor="gray.500"
                _dark={{ borderColor: "whiteAlpha.150" }}
                boxShadow="0 4px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)"
                lineHeight={0}
                m={0}
                h={{ base: "300px", md: "360px" }}
                cursor="pointer"
                onClick={() => setSelectedImage(img)}
                _hover={{
                  opacity: 0.95,
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
                transition="all 0.25s ease"
                sx={{
                  "& img": {
                    display: "block",
                    width: "auto",
                    height: "100%",
                    objectFit: "contain",
                  },
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} size="6xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(4px)" />
        <ModalContent bg="transparent" boxShadow="none" maxW="90vw" maxH="90vh">
          <ModalCloseButton
            color="white"
            bg="transparent"
            border="none"
            top={4}
            right={4}
            zIndex={10}
            fontSize="2xl"
            sx={{
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.9)) drop-shadow(0 0 4px rgba(0,0,0,0.6))",
            }}
            _hover={{ bg: "transparent", color: "white", opacity: 0.9 }}
            _focus={{ boxShadow: "none" }}
          />
          <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
            {selectedImage && (
              <Box maxW="100%" maxH="90vh">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "90vh",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

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
        }}
      >
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
            <VStack align="start" spacing={6}>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1"
              >
                The Business Problem
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Before the upgrade, every interaction triggered paid AI tokens—even for window shoppers—driving up costs. At the
                same time, hallucinated answers, limited agent tooling, and weekend coverage gaps hurt trust and conversion.
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={headingColor}
                fontWeight="semibold"
                lineHeight="1.8"
              >
                The client needed a cost-optimized AI assistant that could qualify leads accurately, empower human agents, and
                provide 24/7 support without sacrificing control.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "High AI operational costs from triggering LLM calls for every visitor",
                "AI hallucinations inventing shipping locations and business rules",
                "Agents lacked a high-density interface for managing concurrent chats",
                "No reliable weekend strategy, leading to missed leads after hours",
              ].map((item, i) => (
                <Box key={i} w="full">
                  <HStack spacing={5} py={5} align="flex-start">
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="bold"
                      color={numberColor}
                      lineHeight="1.2"
                      minW="60px"
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </Text>
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      color={headingColor}
                      fontWeight="medium"
                      lineHeight="1.5"
                    >
                      {item}
                    </Text>
                  </HStack>
                  <Divider borderColor={dividerColor} opacity={0.5} />
                </Box>
              ))}
            </VStack>
          </SimpleGrid>
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
        }}
      >
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
            <VStack align="start" spacing={6}>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1"
              >
                Our Approach
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                We treated the chatbot as production infrastructure—not a demo. That meant cost-aware architecture, strong guardrails
                against hallucinations, and a human-first control layer for sales teams.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                The focus was on building a hybrid AI workflow, a high-density agent dashboard, and intelligent retrieval that only
                answers from verified business knowledge.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "Design a hybrid flow that filters out casual visitors before using paid AI",
                "Wrap the LLM with RAG and strict business rules",
                "Give agents Zendesk-style tools to manage 30+ chats",
                "Introduce a weekend automation mode without losing safety",
              ].map((item, i) => (
                <Box key={i} w="full">
                  <HStack spacing={5} py={5} align="flex-start">
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="bold"
                      color={numberColor}
                      lineHeight="1.2"
                      minW="60px"
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </Text>
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      color={headingColor}
                      fontWeight="medium"
                      lineHeight="1.5"
                    >
                      {item}
                    </Text>
                  </HStack>
                  <Divider borderColor={dividerColor} opacity={0.5} />
                </Box>
              ))}
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* The Solution */}
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
        }}
      >
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
              lineHeight="1.1"
            >
              The Solution: Pack Assist Platform
            </Heading>
            <VStack align="start" spacing={8} maxW="4xl" w="full">
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>
                    Cost-Saving Hybrid Architecture:
                  </Text>{" "}
                  Implemented a hybrid init workflow where the first 3–4 questions (Name, Email, Product) are static. Paid AI only
                  runs once visitors are qualified, filtering out casual browsers before incurring token costs.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>
                    Zendesk-Style Agent Dashboard:
                  </Text>{" "}
                  Built a high-density interface so a single agent can manage 30+ concurrent chats, with ghost typing, visitor path
                  tracking, manual AI toggle, and rich context.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>
                    RAG to Eliminate Hallucinations:
                  </Text>{" "}
                  Wrapped the LLM with Retrieval-Augmented Generation and strict policies so the bot only answers from verified
                  knowledgebase content and location rules.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>
                    Weekend Automation Strategy:
                  </Text>{" "}
                  Introduced a safe weekend mode—during the week, the bot supports human-led chats; on weekends, it becomes a
                  full AI safety net to capture leads while the team is offline.
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Technical Architecture */}
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
        }}
      >
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
              lineHeight="1.1"
            >
              Technical Architecture
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
              React + Tailwind on the frontend, Python FastAPI and Socket.io on the backend, OpenAI GPT models orchestrated via
              LangChain and Pinecone for memory, with MongoDB capturing full chat logs for analysis and compliance.
            </Text>
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
        }}
      >
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
            <VStack align="start" spacing={6}>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1"
              >
                Business Impact
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Pack Assist evolved from a cost concern into a reliable, production-grade AI assistant—controlling spend while
                unlocking 24/7 lead capture and richer insight into visitor behavior.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "Significant reduction in AI overhead via hybrid static-question model",
                "RAG-enforced rules eliminated damaging hallucinations",
                "Agents manage 30+ concurrent chats from a single dashboard",
                "Weekend mode ensures no inbound lead is missed outside business hours",
              ].map((item, i) => (
                <Box key={i} w="full">
                  <HStack spacing={5} py={5} align="flex-start">
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="bold"
                      color={numberColor}
                      lineHeight="1.2"
                      minW="60px"
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </Text>
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      color={headingColor}
                      fontWeight="medium"
                      lineHeight="1.5"
                    >
                      {item}
                    </Text>
                  </HStack>
                  <Divider borderColor={dividerColor} opacity={0.5} />
                </Box>
              ))}
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Why This Matters */}
      <Box bg={bgColor} py={{ base: 20, md: 24 }} position="relative">
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={12} maxW="4xl">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1"
            >
              Why This Matters
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
              Pack Assist shows how to turn an AI chatbot from an experimental widget into core sales infrastructure—balancing
              cost, control, and customer experience. At Tech Emulsion, we design AI systems that behave like reliable teammates,
              not unpredictable black boxes.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        bgGradient={
          colorMode === "dark" ? "linear(to-r, teal.600, teal.800)" : "linear(to-r, teal.500, teal.600)"
        }
        py={{ base: 16, md: 20 }}
        color="white"
      >
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center" maxW="3xl" mx="auto">
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold">
              Building Cost-Optimized AI for Sales?
            </Heading>
            <HStack spacing={4} flexWrap="wrap" justify="center" pt={4}>
              <Button
                as="a"
                href="https://calendly.com/hassanms/discovery-call"
                target="_blank"
                size="lg"
                bg="white"
                color="teal.500"
                _hover={{ bg: "whiteAlpha.900" }}
                rightIcon={<FaChevronRight />}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                boxShadow="xl"
              >
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
                _hover={{ bg: "whiteAlpha.200" }}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
              >
                View More Case Studies
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default CaseStudyPackAssist;

