import {
  Box,
  Container,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorMode,
  Heading,
  HStack,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
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
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaChartLine,
  FaClock,
  FaShieldAlt,
  FaSync,
  FaEye,
  FaCog,
  FaRobot,
  FaBrain,
  FaDatabase,
  FaSearch,
  FaCloud,
  FaChevronRight,
} from "react-icons/fa";
import {
  SiReact,
  SiPython,
  SiOpenai,
  SiPostgresql,
  SiFastapi,
  SiSupabase,
  SiGooglecloud,
} from "react-icons/si";

const CaseStudyAVLCoPilot = () => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("teal.500", "pearlAqua.500");

  return (
    <Box id="services">
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
        canonicalUrl="https://techemulsion.com/portfolio/avl-copilot"
        portfolioData={{
          title: "AVL Copilot – AI-Powered RAG SaaS for the Professional AV Industry",
          description:
            "Built a production-grade AI SaaS for the Professional AV industry using FastAPI, OpenAI, LangGraph, and Pinecone. Designed a scalable RAG architecture with vector search, intent routing, real-time manual ingestion, and multimodal image analysis. Reduced troubleshooting time by 40–60% and deployed a multi-tenant platform with billing, guardrails, cost controls, and cloud infrastructure on Google Cloud.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/New/AVL-CoPilot-hero.png",
          url: "https://techemulsion.com/portfolio/avl-copilot",
          genre: "AI Solution, RAG SaaS, Professional AV Industry",
          keywords: [
            "AVL Copilot",
            "AI-powered RAG",
            "Professional AV",
            "troubleshooting AI",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "AVL Copilot",
              url: "https://techemulsion.com/portfolio/avl-copilot",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is AVL Copilot?",
              answer:
                "AVL Copilot is an AI-powered RAG SaaS platform designed specifically for the Professional Audiovisual industry. It provides domain-restricted AI assistance that functions like a senior systems engineer on demand, helping technicians troubleshoot equipment issues in high-pressure live environments.",
            },
            {
              question: "What problems does AVL Copilot solve?",
              answer:
                "The platform addresses fragmented technical documentation across thousands of PDF manuals, time-critical equipment failures during live shows, complex signal chains, safety-sensitive configurations, and inconsistent documentation across manufacturers.",
            },
            {
              question: "What technologies power AVL Copilot?",
              answer:
                "The solution is built with Python, FastAPI, React, LangGraph, Pinecone, OpenAI, Supabase, and Google Cloud. It features intelligent intent routing, deep RAG, visual equipment intelligence, real-time web validation, and production-grade infrastructure.",
            },
          ],
        }}
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
        pt={{ base: 8, md: 20 }}
        pb={{ base: 12, md: 24 }}
        overflow="hidden"
        minH={{ base: "600px", md: "700px" }}>
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
                color: colorMode === "light" ? "white" : "muted",
                display: "flex",
                alignItems: "center",
              }}>
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: colorMode === "light" ? "white" : "muted",
                  padding: "0",
                  "&:hover": {
                    bg: "none",
                  },
                }}>
                Home
              </ButtonLink>
              <FaChevronRight size={15} style={{ color: "inherit" }} />
              <ButtonLink
                href="/portfolio"
                size="lg"
                sx={{
                  bg: "none",
                  color: colorMode === "light" ? "white" : "muted",
                  padding: "0",
                  "&:hover": {
                    bg: "none",
                  },
                }}>
                Portfolio
              </ButtonLink>
              <FaChevronRight size={15} style={{ color: "inherit" }} />
              <Text
                as="span"
                ml="2"
                sx={{
                  color: "white",
                }}>
                AVL Copilot
              </Text>
            </ButtonGroup>
          </Box>

          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 12 }}
            alignItems="center">
            {/* Left Side - Content */}
            <VStack align="start" spacing={6}>
              <Badge
                bg={accentColor}
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="wide">
                AI SOLUTION
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                color="white">
                AVL Copilot
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="rgba(255,255,255,0.9)"
                lineHeight="1.6"
                fontWeight="300">
                AI-Powered RAG SaaS for the Professional AV Industry
              </Text>
              <Text
                fontSize="lg"
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="2xl">
                Built a production-grade AI SaaS for the Professional AV industry using FastAPI, OpenAI, LangGraph, and Pinecone. Designed a scalable RAG architecture with vector search, intent routing, real-time manual ingestion, and multimodal image analysis. Reduced troubleshooting time by 40–60% and deployed a multi-tenant platform with billing, guardrails, cost controls, and cloud infrastructure on Google Cloud.
              </Text>

              {/* Key Metrics */}
              <SimpleGrid columns={3} spacing={6} w="full" mt={4}>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color={accentColor} fontWeight="bold">
                    40-60%
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Time Reduction
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color={accentColor} fontWeight="bold">
                    Expert
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    AI System
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color={accentColor} fontWeight="bold">
                    Production
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Grade SaaS
                  </Text>
                </VStack>
              </SimpleGrid>
            </VStack>

            {/* Right Side - Visual Element */}
            <Box position="relative" h={{ base: "400px", lg: "500px" }}>
              <Box
                position="absolute"
                inset={0}
                bgGradient={`radial(circle, ${accentColor} 0%, transparent 70%)`}
                opacity={0.2}
                borderRadius="full"
                filter="blur(60px)"
              />
              <Image
                src="/assets/portfolio/New/AVL-CoPilot-hero.png"
                alt="AVL Copilot Platform"
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
                }}
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Executive Snapshot */}
      <Box bg={bgColor} py={16} position="relative">
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Box textAlign="center" maxW="3xl">
              <Badge colorScheme="teal" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
                EXECUTIVE SNAPSHOT
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                mb={4}
                color={headingColor}>
                Industry-Leading AI Solution
              </Heading>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
              <Card bg={cardBg} borderRadius="xl" boxShadow="md" p={6}>
                <CardBody>
                  <Text fontSize="sm" color={textColor} mb={2} fontWeight="semibold">
                    Industry
                  </Text>
                  <Text fontSize="lg" color={headingColor} fontWeight="bold">
                    Professional Audiovisual (Pro AV)
                  </Text>
                </CardBody>
              </Card>
              <Card bg={cardBg} borderRadius="xl" boxShadow="md" p={6}>
                <CardBody>
                  <Text fontSize="sm" color={textColor} mb={2} fontWeight="semibold">
                    Engagement
                  </Text>
                  <Text fontSize="lg" color={headingColor} fontWeight="bold">
                    End-to-end AI Architecture & Production Deployment
                  </Text>
                </CardBody>
              </Card>
              <Card bg={cardBg} borderRadius="xl" boxShadow="md" p={6}>
                <CardBody>
                  <Text fontSize="sm" color={textColor} mb={2} fontWeight="semibold">
                    Outcome
                  </Text>
                  <Text fontSize="lg" color={headingColor} fontWeight="bold">
                    40-60% Reduction in Troubleshooting Time
                  </Text>
                </CardBody>
              </Card>
              <Card bg={cardBg} borderRadius="xl" boxShadow="md" p={6}>
                <CardBody>
                  <Text fontSize="sm" color={textColor} mb={2} fontWeight="semibold">
                    Tech Stack
                  </Text>
                  <Text fontSize="lg" color={headingColor} fontWeight="bold">
                    Python, FastAPI, React, LangGraph, Pinecone, OpenAI, Supabase, Google Cloud
                  </Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* The Business Problem */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <Box textAlign="center" maxW="3xl">
            <Badge colorScheme="red" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
              THE BUSINESS PROBLEM
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              mb={4}
              color={headingColor}>
              High-Pressure Environments Where Failure Is Not an Option
            </Heading>
            <Text
              fontSize="lg"
              color={textColor}
              maxW="2xl"
              mx="auto">
              The AVL industry operates in live environments where technicians face critical challenges during concerts, conferences, stadiums, and broadcast events.
            </Text>
          </Box>

          <Card bg={cardBg} borderRadius="xl" boxShadow="lg" p={8} borderLeft="4px solid" borderColor={accentColor}>
            <VStack align="start" spacing={4}>
              <List spacing={3} w="full">
                {[
                  "Thousands of scattered PDF manuals across different manufacturers",
                  "Time-critical equipment failures during live shows with no room for error",
                  "Complex signal chains and hardware dependencies requiring expert knowledge",
                  "Safety-sensitive rigging and electrical configurations where incorrect guidance can cause real harm",
                  "Inconsistent documentation across manufacturers making troubleshooting inefficient",
                ].map((item, index) => (
                  <ListItem key={index} display="flex" alignItems="start">
                    <ListIcon as={FaExclamationTriangle} color={accentColor} mt={1} />
                    <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8">
                      {item}
                    </Text>
                  </ListItem>
                ))}
              </List>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={headingColor}
                fontWeight="semibold"
                mt={4}
                lineHeight="1.8">
                The client needed more than a chatbot. They needed a domain-restricted AI system that could function like a senior systems engineer on demand.
              </Text>
            </VStack>
          </Card>
        </VStack>
      </Container>

      {/* Our Approach */}
      <Box bg={bgColor} py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Box textAlign="center" maxW="3xl">
              <Badge colorScheme="teal" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
                OUR APPROACH
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                mb={4}
                color={headingColor}>
                AI Systems as Production Infrastructure
              </Heading>
              <Text
                fontSize="lg"
                color={textColor}
                maxW="2xl"
                mx="auto">
                At Tech Emulsion, we architect AI systems as production infrastructure, not experiments.
              </Text>
            </Box>

            <Card bg={cardBg} borderRadius="xl" boxShadow="lg" p={8}>
              <VStack align="start" spacing={6}>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={headingColor}
                  fontWeight="semibold"
                  lineHeight="1.8">
                  We designed a multi-agent, guardrailed AI platform that could:
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                  {[
                    "Understand technician intent",
                    "Route queries intelligently",
                    "Retrieve manufacturer-grade documentation",
                    "Perform real-time web validation",
                    "Analyze equipment visually",
                    "Enforce safety boundaries",
                  ].map((capability, index) => (
                    <HStack key={index} align="start">
                      <Icon as={FaCheckCircle} color={accentColor} mt={1} />
                      <Text fontSize="md" color={textColor} lineHeight="1.7">
                        {capability}
                      </Text>
                    </HStack>
                  ))}
                </SimpleGrid>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={textColor}
                  lineHeight="1.8"
                  mt={4}>
                  The goal was clear: build an Expert-in-the-Loop AI that prioritizes accuracy, speed, and operational reliability.
                </Text>
              </VStack>
            </Card>
          </VStack>
        </Container>
      </Box>

      {/* The Solution */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <Box textAlign="center" maxW="3xl">
            <Badge colorScheme="green" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
              THE SOLUTION
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              mb={4}
              color={headingColor}>
              AVL Support AI: Intelligent & Guardrailed
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {[
              {
                icon: FaBrain,
                title: "Intelligent Intent Routing",
                description:
                  "Hybrid intent classification using local BERT models combined with GPT reasoning. Detects context and routes queries into specialized workflows: troubleshooting diagnostics, manual deep-search mode, firmware support, and educational explanation mode.",
              },
              {
                icon: FaSearch,
                title: "Deep Retrieval-Augmented Generation",
                description:
                  "Dynamic RAG engine powered by Pinecone and OpenAI embeddings. Technical manuals are semantically indexed for fast retrieval of exact sections from complex PDFs. If a manual doesn't exist, the AI can autonomously locate, download, index, and use it in real time.",
              },
              {
                icon: FaEye,
                title: "Visual Equipment Intelligence",
                description:
                  "Multimodal reasoning allows technicians to upload images of equipment setups. The AI can identify specific models, detect visible cabling errors, assess device state, and generate structured inventory outputs—bridging digital AI intelligence with real-world field environments.",
              },
              {
                icon: FaSync,
                title: "Real-Time Web Validation",
                description:
                  "When internal data is insufficient, a controlled search agent retrieves live firmware versions, manufacturer bulletins, and verified sources. This prevents stale knowledge and keeps responses current with the latest information.",
              },
            ].map((solution, index) => (
              <Card
                key={index}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="lg"
                p={6}
                borderLeft="4px solid"
                borderColor={accentColor}>
                <CardBody>
                  <HStack mb={4}>
                    <Icon as={solution.icon} boxSize={8} color={accentColor} />
                    <Heading size="lg" color={headingColor}>
                      {solution.title}
                    </Heading>
                  </HStack>
                  <Text fontSize="md" color={textColor} lineHeight="1.7">
                    {solution.description}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Architecture Overview */}
      <Box bg={bgColor} py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Box textAlign="center" maxW="3xl">
              <Badge colorScheme="purple" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
                ARCHITECTURE OVERVIEW
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                mb={4}
                color={headingColor}>
                Modular Microservices Built for Scale
              </Heading>
              <Text
                fontSize="lg"
                color={textColor}
                maxW="2xl"
                mx="auto">
                Production-grade infrastructure designed for scalability and resilience.
              </Text>
            </Box>

            <Card bg={cardBg} borderRadius="xl" boxShadow="lg" p={8}>
              <VStack align="start" spacing={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                  {[
                    "Backend built with FastAPI for async performance",
                    "LangGraph for stateful agent orchestration",
                    "Supabase for authentication and user state",
                    "Pinecone for high-speed semantic search",
                    "React frontend with streaming responses",
                    "Dockerized containers deployed on Google Cloud",
                  ].map((item, index) => (
                    <HStack key={index} align="start">
                      <Icon as={FaCheckCircle} color={accentColor} mt={1} />
                      <Text fontSize="md" color={textColor} lineHeight="1.7">
                        {item}
                      </Text>
                    </HStack>
                  ))}
                </SimpleGrid>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={textColor}
                  lineHeight="1.8"
                  mt={4}>
                  The orchestration layer allows cyclic reasoning workflows where the AI can plan, execute, verify, and refine responses before presenting them to the user. This dramatically reduces hallucination risk.
                </Text>
              </VStack>
            </Card>

            {/* Tech Stack Icons */}
            <SimpleGrid columns={{ base: 2, md: 4, lg: 8 }} spacing={6} w="full" mt={8}>
              {[
                { icon: SiPython, name: "Python", color: accentColor },
                { icon: SiFastapi, name: "FastAPI", color: accentColor },
                { icon: SiReact, name: "React", color: accentColor },
                { icon: SiOpenai, name: "OpenAI", color: accentColor },
                { icon: FaDatabase, name: "Pinecone", color: accentColor },
                { icon: SiSupabase, name: "Supabase", color: accentColor },
                { icon: SiGooglecloud, name: "GCP", color: accentColor },
                { icon: SiPostgresql, name: "PostgreSQL", color: accentColor },
              ].map((tech, index) => (
                <Card
                  key={index}
                  bg={cardBg}
                  borderRadius="xl"
                  boxShadow="md"
                  p={4}
                  textAlign="center">
                  <CardBody>
                    <Box display="flex" justifyContent="center" mb={3}>
                      <Icon as={tech.icon} boxSize={8} color={tech.color} />
                    </Box>
                    <Text fontSize="sm" color={headingColor} fontWeight="medium">
                      {tech.name}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Safety & Guardrails */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <Box textAlign="center" maxW="3xl">
            <Badge colorScheme="red" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
              SAFETY & GUARDRAILS
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              mb={4}
              color={headingColor}>
              Safety Designed from Day One
            </Heading>
            <Text
              fontSize="lg"
              color={textColor}
              maxW="2xl"
              mx="auto">
              In an industry involving electrical loads and rigging structures, incorrect data can cause real harm.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            {[
              {
                icon: FaShieldAlt,
                title: "Strict Prompt Guardrails",
                description:
                  "Preventing speculative voltage or load calculations that could lead to equipment damage or safety hazards.",
              },
              {
                icon: FaExclamationTriangle,
                title: "Hazard Detection Triggers",
                description:
                  "Automated detection of electrical or rigging risks before answers are delivered to technicians.",
              },
              {
                icon: FaCheckCircle,
                title: "Confidence Thresholds",
                description:
                  "Answers are only delivered when the system reaches a minimum confidence level, preventing low-certainty outputs.",
              },
              {
                icon: FaDatabase,
                title: "Structured Logging",
                description:
                  "Comprehensive observability and logging to track system behavior and ensure accountability.",
              },
            ].map((safety, index) => (
              <Card
                key={index}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="lg"
                p={6}
                borderTop="4px solid"
                borderColor={accentColor}>
                <CardBody>
                  <HStack mb={4}>
                    <Icon as={safety.icon} boxSize={6} color={accentColor} />
                    <Heading size="md" color={headingColor}>
                      {safety.title}
                    </Heading>
                  </HStack>
                  <Text fontSize="md" color={textColor} lineHeight="1.7">
                    {safety.description}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Production Infrastructure */}
      <Box bg={bgColor} py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Box textAlign="center" maxW="3xl">
              <Badge colorScheme="teal" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
                PRODUCTION INFRASTRUCTURE
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                mb={4}
                color={headingColor}>
                Built for Scale, Not Demos
              </Heading>
              <Text
                fontSize="lg"
                color={textColor}
                maxW="2xl"
                mx="auto">
                Unlike demo AI tools, this system was built for production scale with cost control and observability.
              </Text>
            </Box>

            <Card bg={cardBg} borderRadius="xl" boxShadow="lg" p={8}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                {[
                  "Usage tracking and quota enforcement",
                  "Token cost monitoring and optimization",
                  "Dual-layer caching to reduce inference overhead",
                  "Structured logging for observability",
                  "Stripe-powered subscription tiers",
                  "Handles thousands of concurrent sessions",
                ].map((feature, index) => (
                  <HStack key={index} align="start">
                    <Icon as={FaCheckCircle} color={accentColor} mt={1} />
                    <Text fontSize="md" color={textColor} lineHeight="1.7">
                      {feature}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </Card>
          </VStack>
        </Container>
      </Box>

      {/* Business Impact */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <Box textAlign="center" maxW="3xl">
            <Badge colorScheme="green" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
              BUSINESS IMPACT
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              mb={4}
              color={headingColor}>
              Measurable Results
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
            <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
              <Icon as={FaChartLine} boxSize={8} color={accentColor} mb={3} />
              <StatNumber fontSize="4xl" color={accentColor} fontWeight="bold">
                40-60%
              </StatNumber>
              <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                Reduction in Troubleshooting Time
              </StatLabel>
            </Stat>
            <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
              <Icon as={FaDatabase} boxSize={8} color={accentColor} mb={3} />
              <StatNumber fontSize="4xl" color={accentColor} fontWeight="bold">
                Unified
              </StatNumber>
              <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                Consolidated Documentation
              </StatLabel>
            </Stat>
            <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
              <Icon as={FaCloud} boxSize={8} color={accentColor} mb={3} />
              <StatNumber fontSize="4xl" color={accentColor} fontWeight="bold">
                Scalable
              </StatNumber>
              <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                Subscription SaaS Architecture
              </StatLabel>
            </Stat>
            <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
              <Icon as={FaRobot} boxSize={8} color={accentColor} mb={3} />
              <StatNumber fontSize="4xl" color={accentColor} fontWeight="bold">
                Production
              </StatNumber>
              <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                Enterprise-Ready Platform
              </StatLabel>
            </Stat>
          </SimpleGrid>

          <Card bg={cardBg} borderRadius="xl" boxShadow="lg" p={8} borderLeft="4px solid" borderColor={accentColor}>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={textColor}
              lineHeight="1.8"
              textAlign="center">
              The client transitioned from a concept idea to a production-grade AI SaaS with billing, monitoring, and structured safety enforcement. Foundation established for multi-tenant enterprise expansion.
            </Text>
          </Card>
        </VStack>
      </Container>

      {/* Why This Matters */}
      <Box bg={bgColor} py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <Box textAlign="center" maxW="3xl">
              <Badge colorScheme="purple" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
                WHY THIS MATTERS
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                mb={4}
                color={headingColor}>
                Beyond Experimentation
              </Heading>
            </Box>

            <Card bg={cardBg} borderRadius="xl" boxShadow="lg" p={8}>
              <VStack align="start" spacing={4}>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={headingColor}
                  fontWeight="semibold"
                  lineHeight="1.8">
                  Most AI implementations fail because they stop at prompts.
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color={textColor}
                  lineHeight="1.8">
                  This project required domain-specific guardrails, multimodal reasoning, stateful orchestration, real-time ingestion, and scalable SaaS architecture. Tech Emulsion delivered a hardened AI infrastructure tailored for a safety-sensitive technical industry.
                </Text>
              </VStack>
            </Card>
          </VStack>
        </Container>
      </Box>

      {/* What's Next */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <Box textAlign="center" maxW="3xl">
            <Badge colorScheme="teal" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
              WHAT'S NEXT
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              mb={4}
              color={headingColor}>
              Future Roadmap
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
            {[
              "Offline mode for remote venues",
              "Schematic and CAD diagram interpretation",
              "Voice interface for hands-free field use",
              "Workspace-based multi-tenant deployments",
            ].map((item, index) => (
              <Card
                key={index}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="md"
                p={6}
                borderLeft="4px solid"
                borderColor={accentColor}>
                <CardBody>
                  <HStack>
                    <Icon as={FaCheckCircle} color={accentColor} />
                    <Text fontSize="md" color={headingColor} fontWeight="medium">
                      {item}
                    </Text>
                  </HStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* CTA Section */}
      <Box
        bgGradient={
          colorMode === "dark"
            ? "linear(to-r, teal.600, teal.800)"
            : "linear(to-r, teal.500, teal.600)"
        }
        py={20}
        color="white">
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
              Looking to Build Domain-Specific AI?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" opacity={0.9}>
              If your industry requires accuracy, compliance, and operational reliability, we design AI systems that go beyond experimentation and into production.
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" opacity={0.9} fontWeight="semibold">
              Let's build it properly.
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                as="a"
                href="https://calendly.com/hassanms/discovery-call"
                target="_blank"
                size="lg"
                bg="white"
                color={accentColor}
                _hover={{ bg: "whiteAlpha.900", transform: "translateY(-2px)" }}
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
                  transform: "translateY(-2px)",
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

export default CaseStudyAVLCoPilot;
