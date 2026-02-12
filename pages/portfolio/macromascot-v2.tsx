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
  FaMobileAlt,
  FaRobot,
  FaGamepad,
  FaUsers,
  FaDollarSign,
  FaCamera,
  FaHeart,
  FaFire,
  FaTrophy,
} from "react-icons/fa";
import {
  SiReact,
  SiSupabase,
  SiPostgresql,
  SiOpenai,
  SiExpo,
} from "react-icons/si";

const CaseStudyMacromascotV2 = () => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "lightGrey.400");

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
        description="Macromascot is a comprehensive mobile health application that transforms weight management by merging rigorous utility with gamification. Using AI-powered meal logging and a Tamagotchi-style avatar system."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/macromascot-v2"
        portfolioData={{
          title: "Macromascot – Gamifying Health Consistency with AI and Digital Companions",
          description:
            "A comprehensive mobile health application designed to transform weight management by merging rigorous utility with gamification. Features AI-powered meal logging, gamified avatar system, intermittent fasting module, social interactions, and agile monetization infrastructure.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/New/Health_app.jpg",
          url: "https://techemulsion.com/portfolio/macromascot-v2",
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
              url: "https://techemulsion.com/portfolio/macromascot-v2",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is Macromascot?",
              answer:
                "Macromascot is a comprehensive mobile health application designed to transform weight management by merging rigorous utility with gamification. It uses an AI-powered meal logging system and a Tamagotchi-style avatar system to drive user retention.",
            },
            {
              question: "How does Macromascot solve manual data entry fatigue?",
              answer:
                "Macromascot integrates OpenAI (GPT-4o) to create a nutrition scanner. Users can capture food images via their camera, which are then analyzed to return structured nutritional data including macros and calories.",
            },
            {
              question: "What technologies power Macromascot?",
              answer:
                "Mobile Framework: React Native (Expo SDK 53) with Development Builds. Animations: Reanimated + Skia. Backend: Supabase (PostgreSQL) with Row Level Security and Edge Functions. State Management: Zustand.",
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

      {/* Premium Hero Section with Background Image */}
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
            alt="Macromascot Health App"
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
                  <Text fontSize="2xl" color="brand.400" fontWeight="bold">
                    AI-Powered
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Meal Logging
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="2xl" color="brand.400" fontWeight="bold">
                    Gamified
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Avatar System
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="2xl" color="brand.400" fontWeight="bold">
                    Native-First
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Performance
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
                alt="Macromascot Health App Interface"
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
                Transforming Health Tracking into Daily Habits
              </Heading>
            </Box>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaCamera} boxSize={8} color="brand.500" mb={3} />
                <StatNumber fontSize="4xl" color="brand.500" fontWeight="bold">
                  Instant
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  AI Meal Logging
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Photo-to-nutrition in seconds
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaGamepad} boxSize={8} color="green.500" mb={3} />
                <StatNumber fontSize="4xl" color="green.500" fontWeight="bold">
                  Gamified
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Avatar System
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Emotional investment drives retention
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaFire} boxSize={8} color="orange.500" mb={3} />
                <StatNumber fontSize="4xl" color="orange.500" fontWeight="bold">
                  High-Performance
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Native Animations
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Reanimated + Skia for smooth gameplay
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaDollarSign} boxSize={8} color="purple.500" mb={3} />
                <StatNumber fontSize="4xl" color="purple.500" fontWeight="bold">
                  Agile
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Monetization
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Superwall for instant A/B testing
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
                  AI-powered meal logging system and an engaging{" "}
                  <Text as="span" fontWeight="bold" color="brand.500">
                    &quot;Tamagotchi-style&quot; avatar system
                  </Text>{" "}
                  to drive user retention. By linking health consistency (such as logging
                  and fasting streaks) directly to the evolution of a digital companion,
                  the app turns a routine chore into an emotional investment.
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
                Common Fitness App Pitfalls
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.300")}
                maxW="2xl"
                mx="auto">
                The project addressed several critical hurdles common in the fitness app
                industry that prevent long-term user engagement.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              {[
                {
                  icon: FaExclamationTriangle,
                  color: "red.500",
                  title: "Manual Data Entry Fatigue",
                  description:
                    "The #1 factor for user churn in fitness apps is the friction of manual logging. Users abandon apps when logging becomes tedious.",
                },
                {
                  icon: FaHeart,
                  color: "pink.500",
                  title: "Low Long-Term Retention",
                  description:
                    "Many health apps lack the &quot;emotional hook&quot; necessary to sustain daily active usage (DAU). Without emotional investment, users lose motivation.",
                },
                {
                  icon: FaMobileAlt,
                  color: "blue.500",
                  title: "Performance Bottlenecks",
                  description:
                    "Delivering a &quot;Native-First&quot; experience with high-performance animations for game-like elements on mobile devices is challenging.",
                },
                {
                  icon: FaDollarSign,
                  color: "green.500",
                  title: "Monetization Flexibility",
                  description:
                    "The need to rapidly test and deploy different subscription models without constant code releases limits marketing agility.",
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
                      color={useColorModeValue("gray.600", "gray.300")}
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
              Native-First Mobile Experience
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.300")}
              maxW="2xl"
              mx="auto">
              We developed a &quot;Native-First&quot; mobile experience built on a
              robust, scalable backend architecture.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {[
              {
                number: "1",
                icon: FaCamera,
                title: "AI-Powered &quot;Instant Logging&quot;",
                description:
                  "Integrated OpenAI (GPT-4o) to create a nutrition scanner. Users capture food images via camera, which are analyzed to return structured nutritional data including macros and calories, eliminating user friction.",
                color: "blue",
              },
              {
                number: "2",
                icon: FaGamepad,
                title: "Gamified Avatar & Economy Engine",
                description:
                  "Dynamic state management system where user health actions earn &quot;Coins&quot;. These coins allow users to purchase backgrounds and clothing to customize and evolve their character sprites, creating a &quot;sunk cost&quot; investment.",
                color: "green",
              },
              {
                number: "3",
                icon: FaClock,
                title: "Multi-Utility Intermittent Fasting Module",
                description:
                  "Configurable fasting timer (e.g., 16:8 or 18:6) with real-time countdowns, &quot;Fat Burning&quot; phase tracking, and automatic notification triggers to keep users accountable.",
                color: "orange",
              },
              {
                number: "4",
                icon: FaUsers,
                title: "Social &quot;Vibe&quot; System",
                description:
                  "Social graph allowing users to add friends and view profiles. &quot;Vibe&quot; interaction system where users send interactions based on shared achievements, creating viral loops and lowering user acquisition costs.",
                color: "purple",
              },
              {
                number: "5",
                icon: FaDollarSign,
                title: "Agile Monetization Infrastructure",
                description:
                  "Integrated Superwall to decouple paywall UI from core app code. Enables marketing team to manage subscription tiers and conduct A/B testing on pricing models instantly without requiring new engineering releases.",
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
                    color={useColorModeValue("gray.600", "gray.300")}
                    lineHeight="1.7">
                    {solution.description}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Technical Excellence */}
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
                Cutting-Edge High-Performance Tech Stack
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
              {[
                {
                  icon: SiReact,
                  name: "React Native",
                  category: "Mobile Framework",
                  color: "blue",
                  description: "Expo SDK 53 with Development Builds for complex native modules",
                },
                {
                  icon: SiExpo,
                  name: "Expo",
                  category: "Development",
                  color: "cyan",
                  description: "Development Builds supporting complex native modules",
                },
                {
                  icon: SiOpenai,
                  name: "OpenAI GPT-4o",
                  category: "AI",
                  color: "green",
                  description: "Nutrition scanner for instant meal logging from photos",
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
                  description: "Structured relational data with user privacy",
                },
                {
                  icon: FaRobot,
                  name: "Reanimated + Skia",
                  category: "Animations",
                  color: "purple",
                  description: "High-performance sprite rendering for game-like feel",
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
                    {tech.icon ? (
                      <Icon
                        as={tech.icon}
                        boxSize={10}
                        color={`${tech.color}.500`}
                        mb={4}
                      />
                    ) : (
                      <Icon
                        as={FaRobot}
                        boxSize={10}
                        color={`${tech.color}.500`}
                        mb={4}
                      />
                    )}
                    <Badge
                      colorScheme={tech.color}
                      mb={2}
                      fontSize="xs"
                      borderRadius="full">
                      {tech.category}
                    </Badge>
                    <Heading size="md" mb={2} color={useColorModeValue("gray.900", "white")}>
                      {tech.name}
                    </Heading>
                    <Text
                      fontSize="sm"
                      color={useColorModeValue("gray.600", "gray.400")}
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
                  State Management
                </Heading>
                <Text
                  fontSize="md"
                  color={useColorModeValue("gray.600", "gray.300")}
                  lineHeight="1.7">
                  Zustand for lightweight, boilerplate-free management of complex
                  client-side states like coin balances and streaks. This ensures smooth
                  performance and easy state updates across the app.
                </Text>
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
              From Friction to Engagement
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            {[
              {
                icon: FaCheckCircle,
                title: "Reduced User Friction",
                description:
                  "The AI scanner successfully addressed the primary cause of fitness app churn by eliminating manual data entry.",
                color: "green",
              },
              {
                icon: FaTrophy,
                title: "Increased User Retention",
                description:
                  "Emotional engagement through the avatar engine turned health tracking into a daily habit.",
                color: "blue",
              },
              {
                icon: FaChartLine,
                title: "Scalable Architecture",
                description:
                  "Multi-tenant-ready backend that handles social interactions and complex gamification logic with ease.",
                color: "purple",
              },
              {
                icon: FaDollarSign,
                title: "Immediate Revenue Readiness",
                description:
                  "Fully integrated monetization pipeline ready for immediate market testing and scaling.",
                color: "orange",
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
                    color={useColorModeValue("gray.600", "gray.300")}
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
              Ready to Build Your Health App?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" opacity={0.9}>
              Transform your health tracking vision into an engaging, gamified
              mobile experience. Let&apos;s discuss how we can help you achieve
              your business goals with AI-powered features and native
              performance.
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

export default CaseStudyMacromascotV2;
