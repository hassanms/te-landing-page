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
  FaCamera,
  FaGamepad,
  FaUsers,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiReact,
  SiSupabase,
  SiPostgresql,
  SiOpenai,
  SiExpo,
} from "react-icons/si";

const CaseStudyMacromascot = () => {
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
        title="Case Study: Macromascot (Premium Design) - Tech Emulsion"
        description="Macromascot is a comprehensive mobile health application that transforms weight management by merging rigorous utility with gamification. Using AI-powered meal logging and a Tamagotchi-style avatar system, it drives user retention through emotional investment."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/macromascot"
        portfolioData={{
          title: "Macromascot – Gamifying Health Consistency with AI and Digital Companions",
          description:
            "A comprehensive mobile health application designed to transform weight management by merging rigorous utility with gamification. Features AI-powered meal logging, gamified avatar system, intermittent fasting module, social interactions, and agile monetization infrastructure.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/New/Health_app.jpg",
          url: "https://techemulsion.com/portfolio/macromascot",
          genre: "Mobile Health App, Gamification, AI-Powered Nutrition",
          keywords: [
            "Macromascot",
            "health app",
            "gamification",
            "AI meal logging",
            "mobile health",
            "weight management",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "Macromascot",
              url: "https://techemulsion.com/portfolio/macromascot",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is Macromascot?",
              answer:
                "Macromascot is a comprehensive mobile health application designed to transform weight management by merging rigorous utility with gamification. It uses an AI-powered meal logging system and a Tamagotchi-style avatar system to drive user retention through emotional investment.",
            },
            {
              question: "How does Macromascot solve manual data entry fatigue?",
              answer:
                "Macromascot integrates OpenAI (GPT-4o) to create a nutrition scanner. Users can capture food images via their camera, which are then analyzed to return structured nutritional data including macros and calories, eliminating the friction of manual logging.",
            },
            {
              question: "What technologies power Macromascot?",
              answer:
                "Mobile Framework: React Native (Expo SDK 53) with Development Builds. Animations: Reanimated + Skia for high-performance sprite rendering. Backend: Supabase (PostgreSQL) with Row Level Security and Edge Functions. State Management: Zustand for lightweight client-side state management.",
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
            src="/assets/portfolio/New/Health_app.jpg"
            alt="Macromascot"
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
                Macromascot
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
                MOBILE HEALTH APP
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                color="white">
                Macromascot
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="rgba(255,255,255,0.9)"
                lineHeight="1.6"
                fontWeight="300">
                Gamifying Health Consistency with AI and Digital Companions
              </Text>
              <Text
                fontSize="lg"
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="2xl">
                A comprehensive mobile health application that transforms weight
                management by merging rigorous utility with gamification. Turn routine
                tracking into an emotional investment through AI-powered meal logging and
                an engaging Tamagotchi-style avatar system.
              </Text>

              {/* Key Metrics */}
              <SimpleGrid columns={3} spacing={6} w="full" mt={4}>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    AI
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Powered Logging
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    Game
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Like Experience
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    Social
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Engagement
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
                src="/assets/portfolio/New/Health_app.jpg"
                alt="Macromascot Dashboard"
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
                <Icon as={FaCamera} boxSize={8} color="brand.500" mb={3} />
                <StatNumber fontSize="4xl" color="brand.500" fontWeight="bold">
                  Reduced
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  User Friction
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  AI scanner eliminates manual logging
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaGamepad} boxSize={8} color="green.500" mb={3} />
                <StatNumber fontSize="4xl" color="green.500" fontWeight="bold">
                  Increased
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  User Retention
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Emotional engagement through avatar
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaUsers} boxSize={8} color="orange.500" mb={3} />
                <StatNumber fontSize="4xl" color="orange.500" fontWeight="bold">
                  Scalable
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Architecture
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Multi-tenant ready backend
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaDollarSign} boxSize={8} color="purple.500" mb={3} />
                <StatNumber fontSize="4xl" color="purple.500" fontWeight="bold">
                  Ready
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Revenue Pipeline
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Integrated monetization infrastructure
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
                  Macromascot is a comprehensive mobile health application designed to
                  transform the weight management experience by merging rigorous utility
                  with gamification. Unlike traditional trackers, the platform utilizes an
                  AI-powered meal logging system and an engaging \"Tamagotchi-style\" avatar
                  system to drive user retention.
                </Text>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={useColorModeValue("gray.700", "gray.200")}
                  lineHeight="1.8">
                  By linking health consistency (such as logging and fasting streaks)
                  directly to the evolution of a digital companion, the app turns a routine
                  chore into an emotional investment. The platform features AI-powered meal
                  logging, gamified avatar system, intermittent fasting module, social
                  interactions, and agile monetization infrastructure.
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
                Common Fitness App Industry Hurdles
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.100")}
                maxW="2xl"
                mx="auto">
                The project addressed several critical hurdles common in the fitness app
                industry that prevent long-term user engagement and retention.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              {[
                {
                  icon: FaExclamationTriangle,
                  color: "red.500",
                  title: "Manual Data Entry Fatigue",
                  description:
                    "The #1 factor for user churn in fitness apps is the friction of manual logging. Users quickly abandon apps that require extensive data entry.",
                },
                {
                  icon: FaClock,
                  color: "orange.500",
                  title: "Low Long-Term Retention",
                  description:
                    "Many health apps lack the \"emotional hook\" necessary to sustain daily active usage (DAU). Users lose motivation without meaningful engagement.",
                },
                {
                  icon: FaCog,
                  color: "yellow.500",
                  title: "Performance Bottlenecks",
                  description:
                    "Delivering a \"Native-First\" experience with high-performance animations for game-like elements on mobile devices requires sophisticated optimization.",
                },
                {
                  icon: FaDollarSign,
                  color: "purple.500",
                  title: "Monetization Flexibility",
                  description:
                    "The need to rapidly test and deploy different subscription models without constant code releases requires decoupled monetization infrastructure.",
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
              Native-First Mobile Experience with Robust Backend
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.100")}
              maxW="2xl"
              mx="auto">
              We developed a \"Native-First\" mobile experience built on a robust,
              scalable backend architecture.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {[
              {
                number: "1",
                icon: FaCamera,
                title: "AI-Powered \"Instant Logging\"",
                description:
                  "Integrated OpenAI (GPT-4o) to create a nutrition scanner. Users can capture food images via their camera, which are then analyzed to return structured nutritional data including macros and calories, eliminating user friction.",
                color: "blue",
              },
              {
                number: "2",
                icon: FaGamepad,
                title: "Gamified Avatar & Economy Engine",
                description:
                  "Dynamic state management system where user health actions earn \"Coins\". These coins allow users to purchase backgrounds and clothing to customize and evolve their character sprites, creating a \"sunk cost\" investment that significantly boosts user retention.",
                color: "green",
              },
              {
                number: "3",
                icon: FaClock,
                title: "Multi-Utility Intermittent Fasting Module",
                description:
                  "Configurable fasting timer (e.g., 16:8 or 18:6) with real-time countdowns, \"Fat Burning\" phase tracking, and automatic notification triggers to keep users accountable.",
                color: "orange",
              },
              {
                number: "4",
                icon: FaUsers,
                title: "Social \"Vibe\" System",
                description:
                  "Social graph allowing users to add friends and view profiles. \"Vibe\" interaction system where users send interactions based on shared achievements, creating viral loops and lowering user acquisition costs.",
                color: "purple",
              },
              {
                number: "5",
                icon: FaDollarSign,
                title: "Agile Monetization Infrastructure",
                description:
                  "By integrating Superwall, we decoupled the paywall UI from the core app code. This enables the marketing team to manage subscription tiers and conduct A/B testing on pricing models instantly without requiring new engineering releases.",
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
                Built for High Performance & Scalability
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
              {[
                {
                  icon: SiReact,
                  name: "React Native",
                  category: "Mobile Framework",
                  color: "blue",
                  description: "Expo SDK 53 with Development Builds",
                },
                {
                  icon: SiOpenai,
                  name: "OpenAI",
                  category: "AI Engine",
                  color: "green",
                  description: "GPT-4o for nutrition scanning",
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
                  description: "Secure data storage with RLS",
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
              From Friction to Engagement
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            {[
              {
                icon: FaCheckCircle,
                title: "Reduced User Friction",
                description:
                  "The AI scanner successfully addressed the primary cause of fitness app churn, eliminating manual data entry fatigue and making meal logging effortless.",
                color: "green",
              },
              {
                icon: FaGamepad,
                title: "Increased User Retention",
                description:
                  "Emotional engagement through the avatar engine turned health tracking into a daily habit, significantly improving long-term retention rates.",
                color: "blue",
              },
              {
                icon: FaUsers,
                title: "Scalable Architecture",
                description:
                  "A multi-tenant-ready backend that handles social interactions and complex gamification logic with ease, supporting future growth.",
                color: "orange",
              },
              {
                icon: FaDollarSign,
                title: "Immediate Revenue Readiness",
                description:
                  "A fully integrated monetization pipeline ready for immediate market testing and scaling, enabling rapid iteration on pricing models.",
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
              Ready to Transform Your Health App?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" opacity={0.9}>
              Transform your health app with AI-powered features and gamification.
              Let&apos;s discuss how we can turn your vision into a scalable, engaging
              mobile experience.
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

export default CaseStudyMacromascot;
