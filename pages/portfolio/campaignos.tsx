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
  FaFileExport,
  FaUsers,
} from "react-icons/fa";
import {
  SiReact,
  SiSupabase,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const CaseStudyCampaignOS = () => {
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
        title="Case Study: BillboardIQ (Premium Design) - Tech Emulsion"
        description="BillboardIQ is a comprehensive, end-to-end management platform designed specifically for the Out-of-Home (OOH) advertising industry. Built with React and Supabase, it handles the entire campaign lifecycle from briefing to financial reporting."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/campaignos"
        portfolioData={{
          title: "BillboardIQ – A Precision-Engineered Management Ecosystem for Out-of-Home Advertising",
          description:
            "A comprehensive, end-to-end management platform for Out-of-Home advertising. Features intelligent inventory management, automated financial reconciliation, lunar-period availability tracking, multi-format exports, and role-based dashboards.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/New/Campaign_Porfolio.jpg",
          url: "https://techemulsion.com/portfolio/campaignos",
          genre: "SaaS Platform, Out-of-Home Advertising, Campaign Management",
          keywords: [
            "BillboardIQ",
            "OOH advertising",
            "campaign management",
            "inventory management",
            "advertising platform",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "BillboardIQ",
              url: "https://techemulsion.com/portfolio/campaignos",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is BillboardIQ?",
              answer:
                "BillboardIQ is a comprehensive, end-to-end management platform designed specifically for the Out-of-Home (OOH) advertising industry. It handles the entire lifecycle of an advertising campaign—from initial briefing and inventory site selection to real-time availability tracking and multi-format financial reporting.",
            },
            {
              question: "What problems does BillboardIQ solve?",
              answer:
                "BillboardIQ addresses inventory fragmentation across multiple countries, complex availability logic for lunar-period calculations, reporting bottlenecks through automated exports, and visibility control with role-based dashboards for management and sales teams.",
            },
            {
              question: "What technologies power BillboardIQ?",
              answer:
                "Frontend: React 18, TypeScript, and Vite. Styling: Tailwind CSS and Shadcn UI (Radix UI). Backend: Supabase (PostgreSQL) with Row Level Security and Edge Functions. Real-Time: Supabase Realtime for instant synchronization. Analytics: Recharts for financial data visualization.",
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
            src="/assets/portfolio/New/Campaign_Porfolio.jpg"
            alt="BillboardIQ"
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
                BillboardIQ
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
                OOH ADVERTISING PLATFORM
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                color="white">
                BillboardIQ
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="rgba(255,255,255,0.9)"
                lineHeight="1.6"
                fontWeight="300">
                A Precision-Engineered Management Ecosystem for Out-of-Home
                Advertising
              </Text>
              <Text
                fontSize="lg"
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="2xl">
                A comprehensive, end-to-end management platform that handles the
                entire campaign lifecycle—from initial briefing and inventory
                site selection to real-time availability tracking and
                multi-format financial reporting.
              </Text>

              {/* Key Metrics */}
              <SimpleGrid columns={3} spacing={6} w="full" mt={4}>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    2
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Countries
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    80%+
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Time Saved
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    13
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Lunar Periods
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
                src="/assets/portfolio/New/Campaign_Porfolio.jpg"
                alt="BillboardIQ Dashboard"
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
                <Icon as={FaGlobe} boxSize={8} color="brand.500" mb={3} />
                <StatNumber fontSize="4xl" color="brand.500" fontWeight="bold">
                  Unified
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Multi-Country Inventory
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Single source of truth for AU & NZ
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaFileExport} boxSize={8} color="green.500" mb={3} />
                <StatNumber fontSize="4xl" color="green.500" fontWeight="bold">
                  Automated
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Export Generation
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  80% reduction in reporting time
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaChartLine} boxSize={8} color="orange.500" mb={3} />
                <StatNumber fontSize="4xl" color="orange.500" fontWeight="bold">
                  Accurate
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Booking Management
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Zero booking overlaps
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaUsers} boxSize={8} color="purple.500" mb={3} />
                <StatNumber fontSize="4xl" color="purple.500" fontWeight="bold">
                  Role-Based
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Dashboard Views
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Tailored for management & sales
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
                  BillboardIQ is a comprehensive, end-to-end management platform
                  designed specifically for the Out-of-Home (OOH) advertising industry. The
                  project involved building a high-performance React and Supabase-powered
                  ecosystem to handle the entire lifecycle of an advertising campaign—from
                  initial briefing and inventory site selection to real-time availability
                  tracking and multi-format financial reporting.
                </Text>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={useColorModeValue("gray.700", "gray.200")}
                  lineHeight="1.8">
                  The platform emphasizes data accuracy, role-based visibility, and
                  high-fidelity automated exports. It manages thousands of advertising sites
                  across Australia and New Zealand, with sophisticated geo-logic and
                  lunar-period availability tracking.
                </Text>
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
                When Scale Meets Complexity
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.100")}
                maxW="2xl"
                mx="auto">
                Before the implementation of this system, the management of large-scale
                OOH inventory faced several critical operational bottlenecks that
                threatened efficiency and accuracy.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              {[
                {
                  icon: FaMapMarkerAlt,
                  color: "red.500",
                  title: "Inventory Fragmentation",
                  description:
                    "Managing thousands of advertising sites across different countries (Australia and New Zealand) with varying regional rules and timezone complexities.",
                },
                {
                  icon: FaClock,
                  color: "orange.500",
                  title: "Availability Logic Complexity",
                  description:
                    "Manually calculating \"slots\" for static and digital sites across 28-day \"lunar periods\" was prone to human error and booking overlaps.",
                },
                {
                  icon: FaFileExport,
                  color: "yellow.500",
                  title: "Reporting Bottlenecks",
                  description:
                    "Sales teams spent hours manually generating PDF contracts, Excel summaries, and PowerPoint proposals for clients.",
                },
                {
                  icon: FaEye,
                  color: "purple.500",
                  title: "Visibility Control",
                  description:
                    "Management lacked a real-time \"bird's-eye view\" of the sales pipeline, while sales teams needed a focused interface to manage their specific territories without data noise.",
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
              Cloud-Native Architecture for Precision & Scale
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.100")}
              maxW="2xl"
              mx="auto">
              We implemented a robust \"Cloud-Native\" architecture using a modern
              TypeScript stack to ensure precision and real-time responsiveness.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {[
              {
                number: "1",
                icon: FaGlobe,
                title: "Intelligent Inventory & Geo-Visualization",
                description:
                  "Sophisticated site management module that distinguishes between Australian and New Zealand inventory. Custom geo-logic automatically tags sites and visualizes revenue splits in the dashboard, providing immediate insights into international performance through distinct color-coded analytics.",
                color: "blue",
              },
              {
                number: "2",
                icon: FaDollarSign,
                title: "Automated Financial Reconciliation Engine",
                description:
                  "Logic layer that automatically calculates Gross Media, Net Media, and associated costs (Print, Install, De-install). Handles complex proportional distributions for campaigns spanning multiple months, ensuring \"Closed Won\" revenue is accurately tracked against annual targets.",
                color: "green",
              },
              {
                number: "3",
                icon: FaClock,
                title: "Lunar-Period Availability Tracking",
                description:
                  "Custom availability (Avails) engine operating on 13-period lunar cycles (28 days each), allowing for precise slot summation and conflict detection across thousands of digital and static faces.",
                color: "orange",
              },
              {
                number: "4",
                icon: FaFileExport,
                title: "Multi-Format Export Engine",
                description:
                  "High-fidelity export tools including Excel summaries with styled workbooks, automated PDF contracts with dynamic data insertion, and PowerPoint proposals that allow sales agents to export campaign site lists directly into branded presentation decks.",
                color: "purple",
              },
              {
                number: "5",
                icon: FaUsers,
                title: "Role-Based \"Command Center\" Dashboard",
                description:
                  "High-density dashboard featuring stacked performance charts visualizing Booked vs. Draft media against annual budgets, real-time status split showing sales pipeline breakdown, and tailored data visibility where Super Admins see global data while Sales Agents focus on individual performance metrics.",
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
                Built for Data Integrity & Performance
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={6} w="full">
              {[
                {
                  icon: SiReact,
                  name: "React 18",
                  category: "Frontend",
                  color: "blue",
                  description: "Lightning-fast UI with TypeScript",
                },
                {
                  icon: SiTypescript,
                  name: "TypeScript",
                  category: "Language",
                  color: "blue",
                  description: "Type-safe development",
                },
                {
                  icon: SiTailwindcss,
                  name: "Tailwind CSS",
                  category: "Styling",
                  color: "cyan",
                  description: "Professional, accessible interface",
                },
                {
                  icon: SiSupabase,
                  name: "Supabase",
                  category: "Backend",
                  color: "green",
                  description: "PostgreSQL with RLS & Edge Functions",
                },
                {
                  icon: SiPostgresql,
                  name: "PostgreSQL",
                  category: "Database",
                  color: "blue",
                  description: "Secure, scalable data storage",
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
              From Fragmentation to Unified Control
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            {[
              {
                icon: FaCheckCircle,
                title: "Unified Inventory Management",
                description:
                  "A single source of truth for all AU and NZ advertising assets, eliminating fragmentation and providing real-time visibility.",
                color: "green",
              },
              {
                icon: FaFileExport,
                title: "Administrative Efficiency",
                description:
                  "Reduced reporting time by over 80% through automated Excel and PPTX generation, freeing sales teams to focus on client relationships.",
                color: "blue",
              },
              {
                icon: FaChartLine,
                title: "Improved Sales Accuracy",
                description:
                  "Eliminated booking overlaps via the automated slot-summation logic in the Avails engine, ensuring precise availability tracking.",
                color: "orange",
              },
              {
                icon: FaGlobe,
                title: "Enhanced Strategic Insight",
                description:
                  "Real-time visibility into international revenue splits, allowing for data-driven expansion into the New Zealand market.",
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
              Ready to Build Your Precision-Engineered Management Platform?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" opacity={0.9}>
              Transform your operational challenges into scalable, automated solutions.
              Let&apos;s discuss how we can build a platform tailored to your industry
              needs.
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

export default CaseStudyCampaignOS;
