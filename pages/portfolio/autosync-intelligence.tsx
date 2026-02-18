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
  CardHeader,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Tag,
  Wrap,
  WrapItem,
  Icon,
  Divider,
  Button,
  ButtonGroup,
  Flex,
  Badge,
  useColorModeValue,
  Progress,
  AspectRatio,
} from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { ButtonLink } from "components/button-link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import {
  FaAsterisk,
  FaCheckCircle,
  FaExclamationTriangle,
  FaChartLine,
  FaClock,
  FaGlobe,
  FaChevronRight,
  FaChevronDown,
  FaDatabase,
  FaShieldAlt,
  FaSync,
  FaEye,
  FaDollarSign,
  FaMapMarkerAlt,
  FaCog,
  FaRobot,
} from "react-icons/fa";
import {
  SiReact,
  SiSupabase,
  SiPostgresql,
  SiGooglechrome,
} from "react-icons/si";

const CaseStudyAutoSyncIntelligence = () => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.100");

  return (
    <Box id="services">
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <EnhancedSEO
        title="Case Study: AutoSync Intelligence (Premium Design) - Tech Emulsion"
        description="AutoSync Intelligence is a centralized operational intelligence platform built for a multi-location automotive repair business. Tech Emulsion rebuilt an unreliable prototype into a scalable data aggregation and analytics system."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/autosync-intelligence"
        portfolioData={{
          title: "AutoSync Intelligence – Rebuilding Multi-Location Automotive Intelligence from Broken SaaS Data",
          description:
            "A centralized operational intelligence platform for multi-location automotive repair businesses. Rebuilt from unreliable prototype into scalable data aggregation system with multi-shop aggregation, hardened sales calculations, aging WIP intelligence, and AI-ready architecture.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/New/DADS_Sales_Reborn.jpg",
          url: "https://techemulsion.com/portfolio/autosync-intelligence",
          genre: "Data Analytics, Automotive Intelligence, Operational Control System",
          keywords: [
            "AutoSync Intelligence",
            "automotive intelligence",
            "data aggregation",
            "multi-location business",
            "operational control",
            "Tekmetric",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "AutoSync Intelligence",
              url: "https://techemulsion.com/portfolio/autosync-intelligence",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is AutoSync Intelligence?",
              answer:
                "AutoSync Intelligence is a centralized operational intelligence platform built for multi-location automotive repair businesses. It consolidates sales, repair orders, inspections, work-in-progress, and profitability signals into one executive dashboard.",
            },
            {
              question: "What problems does AutoSync Intelligence solve?",
              answer:
                "The platform addresses fragmented visibility across multiple shops, inaccurate and incomplete data from unreliable APIs, operational risk blind spots, and the lack of automation or intelligence for proactive warnings.",
            },
            {
              question: "What technologies power AutoSync Intelligence?",
              answer:
                "Frontend: React-based dashboard. Backend: Supabase (PostgreSQL) with Edge Functions. Data Sources: Tekmetric API, with planned Chrome extension ingestion and future integrations.",
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

      {/* Premium Hero Section with Gradient Overlay */}
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
            src="/assets/portfolio/New/DADS_Sales_Reborn.jpg"
            alt="AutoSync Intelligence"
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
          {/* Breadcrumb - white in light mode for visibility on dark hero */}
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
                AutoSync Intelligence
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
                bg="brand.500"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="wide">
                OPERATIONAL INTELLIGENCE PLATFORM
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                color="white">
                AutoSync Intelligence
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="rgba(255,255,255,0.9)"
                lineHeight="1.6"
                fontWeight="300">
                Rebuilding Multi-Location Automotive Intelligence from Broken SaaS
                Data
              </Text>
              <Text
                fontSize="lg"
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="2xl">
                A centralized operational intelligence platform that gives owners a
                single, trustworthy source of truth across all shops without logging
                into multiple systems. This is not a reporting toy—it&apos;s an
                operational control system.
              </Text>

              {/* Key Metrics */}
              <SimpleGrid columns={3} spacing={6} w="full" mt={4}>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    9+
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Automotive Shops
                  </Text>
                </VStack>
                {/* <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    3
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    US States
                  </Text>
                </VStack> */}
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    100%
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Single Source of Truth
                  </Text>
                </VStack>
              </SimpleGrid>

            </VStack>

            {/* Right Side - Visual Element */}
            <Box position="relative" h={{ base: "400px", lg: "500px" }}>
              <Box
                position="absolute"
                inset={0}
                bgGradient="radial(circle, brand.500 0%, transparent 70%)"
                opacity={0.2}
                borderRadius="full"
                filter="blur(60px)"
              />
              <Image
                src="/assets/portfolio/New/DADS_Sales_Reborn.jpg"
                alt="AutoSync Intelligence Dashboard"
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

      {/* Impact Stats Section */}
      <Box bg={bgColor} py={16} position="relative">
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Box textAlign="center" maxW="3xl">
              <Badge colorScheme="teal" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
                IMPACT METRICS
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                mb={4}
                color={useColorModeValue("gray.900", "white")}>
                Real Results, Real Impact
              </Heading>
            </Box>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaEye} boxSize={8} color="brand.500" mb={3} />
                <StatNumber fontSize="4xl" color="brand.500" fontWeight="bold">
                  Unified
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Multi-Location Visibility
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Single dashboard replaces 10+ systems
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaChartLine} boxSize={8} color="green.500" mb={3} />
                <StatNumber fontSize="4xl" color="green.500" fontWeight="bold">
                  Reliable
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Data Accuracy
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Deterministic calculations eliminate errors
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaShieldAlt} boxSize={8} color="orange.500" mb={3} />
                <StatNumber fontSize="4xl" color="orange.500" fontWeight="bold">
                  Protected
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Risk Visibility
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Aging WIP & unprotected orders tracked
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaRobot} boxSize={8} color="purple.500" mb={3} />
                <StatNumber fontSize="4xl" color="purple.500" fontWeight="bold">
                  AI-Ready
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Future-Proof Architecture
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Built for automation & intelligence
                </StatHelpText>
              </Stat>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Project Overview */}
      <Container maxW="container.xl" py={20}>
        <VStack align="start" spacing={8}>
          <Box w="full">
            <Badge colorScheme="blue" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
              OVERVIEW
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              mb={6}
              color={useColorModeValue("gray.900", "white")}>
              Project Overview
            </Heading>
            <Card bg={cardBg} borderRadius="xl" boxShadow="lg" p={8} borderLeft="4px solid" borderColor="brand.500">
              <VStack align="start" spacing={4}>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={useColorModeValue("gray.700", "gray.200")}
                  lineHeight="1.8">
                  AutoSync Intelligence is a centralized operational intelligence platform
                  built for a multi-location automotive repair business operating across
                  multiple US states. The goal was simple but brutal to execute:{" "}
                  <Text as="span" fontWeight="bold" color="brand.500">
                    give the owner a single, trustworthy source of truth across all shops
                    without logging into Tekmetric, QuickBooks, banks, or third-party
                    tools.
                  </Text>
                </Text>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={useColorModeValue("gray.700", "gray.200")}
                  lineHeight="1.8">
                  The project focuses on rebuilding an unreliable prototype into a
                  scalable data aggregation and analytics system, capable of handling
                  incomplete APIs, inconsistent data, and real-world automotive edge
                  cases. The system consolidates sales, repair orders, inspections,
                  work-in-progress, and profitability signals into one executive
                  dashboard, with AI-driven automation planned as a second phase.
                </Text>
                {/* <Box
                  mt={4}
                  p={4}
                  bg={useColorModeValue("brand.50", "brand.800")}
                  borderRadius="md"
                  borderLeft="3px solid"
                  borderColor="brand.500">
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color={useColorModeValue("gray.900", "white")}
                    fontStyle="italic">
                    &quot;This is not a reporting toy. It&apos;s an operational control
                    system.&quot;
                  </Text>
                </Box> */}
              </VStack>
            </Card>
          </Box>
        </VStack>
      </Container>

      {/* Challenge Section */}
      <Box bg={bgColor} py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Box textAlign="center" maxW="3xl">
              <Badge colorScheme="red" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
                THE CHALLENGE
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                mb={4}
                color={useColorModeValue("gray.900", "white")}>
                When Data Chaos Meets Business Reality
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.100")}
                maxW="2xl"
                mx="auto">
                The client owned 9 automotive shops (growing to 10+) across Georgia,
                Texas, and North Carolina. Their Shop Management System (Tekmetric)
                exposed a limited and inconsistent API, forcing manual workflows and
                unreliable dashboards.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              {[
                {
                  icon: FaExclamationTriangle,
                  color: "red.500",
                  title: "Fragmented Visibility",
                  description:
                    "Tekmetric required logging into each shop individually. No reliable way to view company-wide performance, trends, or risk exposure in one place.",
                },
                {
                  icon: FaDatabase,
                  color: "orange.500",
                  title: "Inaccurate & Incomplete Data",
                  description:
                    "API data often lagged or returned partial results. Critical metrics like inspections, approvals, and aging WIP were missing entirely. Some values were flat-out wrong.",
                },
                {
                  icon: FaDollarSign,
                  color: "yellow.500",
                  title: "Operational Risk Blind Spots",
                  description:
                    "High-dollar repair orders sat open without deposits. Managers could approve $10k engine jobs on cars worth $5k, creating serious financial risk with no automated alerts.",
                },
                {
                  icon: FaCog,
                  color: "purple.500",
                  title: "No Automation or Intelligence",
                  description:
                    "Everything relied on manual oversight. No proactive warnings. No anomaly detection. No way to enforce business rules at scale.",
                },
              ].map((challenge, index) => (
                <Card
                  key={index}
                  bg={cardBg}
                  borderRadius="xl"
                  boxShadow="lg"
                  borderTop="4px solid"
                  borderColor={challenge.color}
                  p={6}
                  _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
                  transition="all 0.3s">
                  <CardBody>
                    <HStack mb={4}>
                      <Icon as={challenge.icon} boxSize={6} color={challenge.color} />
                      <Heading size="md" color={useColorModeValue("gray.900", "white")}>
                        {challenge.title}
                      </Heading>
                    </HStack>
                    <Text
                      fontSize="md"
                      color={useColorModeValue("gray.600", "gray.100")}
                      lineHeight="1.7">
                      {challenge.description}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>

            <Box
              mt={8}
              p={6}
              bg={useColorModeValue("teal.50", "teal.900")}
              borderRadius="xl"
              borderLeft="4px solid"
              borderColor="teal.500"
              maxW="3xl"
              w="full">
              <Text
                fontSize="lg"
                fontWeight="semibold"
                color={useColorModeValue("gray.900", "white")}
                fontStyle="italic"
                textAlign="center">
                In short: data existed, but it was unusable for decision-making.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Solution Section */}
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
              color={useColorModeValue("gray.900", "white")}>
              Data-First Architecture Built to Survive Bad APIs
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.100")}
              maxW="2xl"
              mx="auto">
              We rebuilt the system around a data-first, aggregation-driven
              architecture, designed to survive bad APIs and still produce reliable
              insights.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {[
              {
                number: "1",
                icon: FaGlobe,
                title: "Centralized Multi-Shop Aggregation Engine",
                description:
                  "Unified aggregation layer that pulls data shop-by-shop via Tekmetric's API, normalizes inconsistent fields and structures, and stores historical snapshots for month-over-month and year-over-year comparison.",
                color: "blue",
              },
              {
                number: "2",
                icon: FaChartLine,
                title: "Hardened Sales & Profit Calculations",
                description:
                  "Deterministic aggregation logic for labor, parts, and sublet sales; authorized vs unauthorized sublets; Repair Order counts and averages; and gross vs profit comparisons across months and years.",
                color: "green",
              },
              {
                number: "3",
                icon: FaClock,
                title: "Aging Work-In-Progress Intelligence",
                description:
                  "Tracks approved repair orders across all shops, flags high-dollar jobs with no deposits, shows vehicle age, RO age, and exposure risk. Enables drill-down from company → shop → repair order.",
                color: "orange",
              },
              {
                number: "4",
                icon: FaSync,
                title: "Inspection & Compliance Tracking",
                description:
                  "Hybrid data strategy: API data where available, Chrome extension–based extraction for non-API reports, normalized inspection metrics stored centrally for performance analysis.",
                color: "purple",
              },
              {
                number: "5",
                icon: FaRobot,
                title: "AI-Ready Architecture",
                description:
                  "Intentionally built to support AI agents without retrofitting: clear event boundaries, deterministic business rules first, AI second. Planned agents for monitoring deposits, WIP aging, and anomalies.",
                color: "pink",
              },
            ].map((solution, index) => (
              <Card
                key={index}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="lg"
                p={6}
                borderLeft="4px solid"
                borderColor={`${solution.color}.500`}
                _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
                transition="all 0.3s"
                position="relative"
                overflow="hidden">
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  fontSize="6xl"
                  fontWeight="bold"
                  color={`${solution.color}.100`}
                  opacity={0.3}
                  lineHeight="1">
                  {solution.number}
                </Box>
                <CardBody position="relative">
                  <HStack mb={4}>
                    <Icon
                      as={solution.icon}
                      boxSize={8}
                      color={`${solution.color}.500`}
                    />
                    <Heading size="lg" color={useColorModeValue("gray.900", "white")}>
                      {solution.title}
                    </Heading>
                  </HStack>
                  <Text
                    fontSize="md"
                    color={useColorModeValue("gray.600", "gray.100")}
                    lineHeight="1.7">
                    {solution.description}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Technical Architecture */}
      <Box bg={bgColor} py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Box textAlign="center" maxW="3xl">
              <Badge colorScheme="purple" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
                TECHNICAL EXCELLENCE
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                mb={4}
                color={useColorModeValue("gray.900", "white")}>
                Built for Control, Scalability & Long-Term Maintainability
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
              {[
                {
                  icon: SiReact,
                  name: "React",
                  category: "Frontend",
                  color: "blue",
                  description: "React-based dashboard with Lovable for rapid UI iteration",
                },
                {
                  icon: SiSupabase,
                  name: "Supabase",
                  category: "Backend",
                  color: "green",
                  description: "PostgreSQL with Row Level Security and Edge Functions",
                },
                {
                  icon: SiPostgresql,
                  name: "PostgreSQL",
                  category: "Database",
                  color: "blue",
                  description: "Structured relational data with historical snapshots",
                },
                {
                  icon: SiGooglechrome,
                  name: "Chrome Extension",
                  category: "Data Ingestion",
                  color: "yellow",
                  description: "Hybrid strategy for non-API report extraction",
                },
              ].map((tech, index) => (
                <Card
                  key={index}
                  bg={cardBg}
                  borderRadius="xl"
                  boxShadow="md"
                  p={6}
                  textAlign="center"
                  _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
                  transition="all 0.3s">
                  <CardBody>
                    <Box display="flex" justifyContent="center" mb={4}>
                      <Icon
                        as={tech.icon}
                        boxSize={10}
                        color={`${tech.color}.500`}
                      />
                    </Box>
                    <Box display="flex" justifyContent="center" mb={2}>
                      <Badge
                        colorScheme={tech.color}
                        fontSize="xs"
                        borderRadius="full">
                        {tech.category}
                      </Badge>
                    </Box>
                    <Heading size="md" mb={2} color={useColorModeValue("gray.900", "white")}>
                      {tech.name}
                    </Heading>
                    <Text
                      fontSize="sm"
                      color={useColorModeValue("gray.600", "gray.200")}
                      lineHeight="1.6">
                      {tech.description}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>

            <Card bg={cardBg} borderRadius="xl" boxShadow="lg" p={8} w="full" maxW="4xl">
              <VStack align="start" spacing={4}>
                <Heading size="lg" color={useColorModeValue("gray.900", "white")}>
                  Design Principles
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} w="full">
                  <Box
                    p={4}
                    bg={useColorModeValue("blue.50", "blue.900")}
                    borderRadius="md">
                    <Text fontWeight="bold" mb={2} fontSize="sm" color={useColorModeValue("gray.900", "white")}>
                      Never Trust Upstream Aggregates
                    </Text>
                    <Text fontSize="xs" color={useColorModeValue("gray.600", "gray.200")}>
                      Calculate everything ourselves
                    </Text>
                  </Box>
                  <Box
                    p={4}
                    bg={useColorModeValue("green.50", "green.900")}
                    borderRadius="md">
                    <Text fontWeight="bold" mb={2} fontSize="sm" color={useColorModeValue("gray.900", "white")}>
                      Store Raw + Derived Separately
                    </Text>
                    <Text fontSize="xs" color={useColorModeValue("gray.600", "gray.200")}>
                      Historical analysis enabled
                    </Text>
                  </Box>
                  <Box
                    p={4}
                    bg={useColorModeValue("purple.50", "purple.900")}
                    borderRadius="md">
                    <Text fontWeight="bold" mb={2} fontSize="sm" color={useColorModeValue("gray.900", "white")}>
                      Optimize for Historical Analysis
                    </Text>
                    <Text fontSize="xs" color={useColorModeValue("gray.600", "gray.200")}>
                      Not just current state
                    </Text>
                  </Box>
                </SimpleGrid>
              </VStack>
            </Card>
          </VStack>
        </Container>
      </Box>

      {/* Results Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <Box textAlign="center" maxW="3xl">
            <Badge colorScheme="green" mb={4} px={4} py={2} borderRadius="full" fontSize="sm">
              THE RESULTS
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              mb={4}
              color={useColorModeValue("gray.900", "white")}>
              From Chaos to Control
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            {[
              {
                icon: FaCheckCircle,
                title: "Unified Inventory Management",
                description:
                  "A single source of truth for all AU and NZ advertising assets.",
                color: "green",
              },
              {
                icon: FaChartLine,
                title: "Reliable Comparisons",
                description:
                  "Month-over-month and year-over-year comparisons you can trust.",
                color: "blue",
              },
              {
                icon: FaShieldAlt,
                title: "Financial Risk Visibility",
                description:
                  "Visibility into financial risk from aging WIP and unprotected repair orders.",
                color: "orange",
              },
              {
                icon: FaRobot,
                title: "AI-Ready Foundation",
                description:
                  "A foundation ready for AI-driven automation without rework.",
                color: "purple",
              },
            ].map((result, index) => (
              <Card
                key={index}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="lg"
                p={6}
                borderTop="4px solid"
                borderColor={`${result.color}.500`}
                _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
                transition="all 0.3s">
                <CardBody>
                  <HStack mb={4}>
                    <Icon as={result.icon} boxSize={6} color={`${result.color}.500`} />
                    <Heading size="md" color={useColorModeValue("gray.900", "white")}>
                      {result.title}
                    </Heading>
                  </HStack>
                  <Text
                    fontSize="md"
                    color={useColorModeValue("gray.600", "gray.100")}
                    lineHeight="1.7">
                    {result.description}
                  </Text>
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
            ? "linear(to-r, brand.600, brand.800)"
            : "linear(to-r, brand.500, brand.600)"
        }
        py={20}
        color={colorMode === "dark" ? "white" : "black"}>
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
              Ready to Build Your Operational Intelligence Platform?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" opacity={0.9}>
              Transform fragmented data into a unified operational intelligence
              platform. Let&apos;s discuss how we can turn your multi-location
              challenges into scalable, reliable insights.
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                as="a"
                href="https://calendly.com/hassanms/discovery-call"
                target="_blank"
                size="lg"
                bg="teal.500"
                color="white"
                _hover={{ bg: "teal.600", transform: "translateY(-2px)" }}
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
                borderColor="teal.500"
                borderWidth="2px"
                color="teal.500"
                _hover={{
                  bg: colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.100",
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

export default CaseStudyAutoSyncIntelligence;
