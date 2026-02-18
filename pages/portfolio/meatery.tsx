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
  FaPhone,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiShopify,
} from "react-icons/si";

const CaseStudyMeatery = () => {
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
        title="Case Study: The Meatery (Premium Design) - Tech Emulsion"
        description="The Meatery is an AI-Driven Voice CRM and e-commerce platform for a premium meat distributor. Tech Emulsion scaled it into a Multi-Tenant Agency with DNC Gatekeeper, Shopify integration, n8n AI Judge, and real-time draft orders."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/meatery"
        portfolioData={{
          title:
            "The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency",
          description:
            "Proprietary e-commerce CRM and Voice AI platform for a premium meat distributor. Multi-Tenant Agency Model with human-like voice agents, DNC Gatekeeper, Shopify integration, n8n AI Judge, and real-time draft orders.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/New/The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency.jpg",
          url: "https://techemulsion.com/portfolio/meatery",
          genre: "Voice AI, CRM, E-commerce, Multi-Tenant",
          keywords: [
            "The Meatery",
            "Voice AI",
            "CRM",
            "Shopify",
            "Retell AI",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "The Meatery",
              url: "https://techemulsion.com/portfolio/meatery",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is The Meatery?",
              answer:
                "The Meatery is a proprietary e-commerce CRM and Voice AI platform designed to automate high-ticket customer interactions for a premium meat distributor. It uses human-like voice agents for inbound support and outbound sales campaigns, including abandoned checkout recovery and cold outreach.",
            },
            {
              question: "How did Tech Emulsion address DNC compliance for The Meatery?",
              answer:
                "We built a centralized PostgreSQL DNC Gatekeeper that checks every phone number against both Global and Client-Specific Do Not Call tables before any call is triggered, allowing the client to run automation flows with confidence and reactivate revenue drivers like Abandoned Checkout recovery.",
            },
            {
              question: "What tech stack powers The Meatery?",
              answer:
                "Voice AI: Retell AI (LLM + Voice). Backend: Node.js (Express) with Shopify API. Automation: n8n for orchestration. Database: PostgreSQL (Railway) refactored for multi-tenancy. Frontend: React Admin Dashboard for call logs and sentiment analysis.",
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
            src="/assets/portfolio/New/The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency.jpg"
            alt="The Meatery"
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
                The Meatery
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
                VOICE AI CRM
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                color="white">
                The Meatery
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="rgba(255,255,255,0.9)"
                lineHeight="1.6"
                fontWeight="300">
                Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency
              </Text>
              <Text
                fontSize="lg"
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="2xl">
                A proprietary e-commerce CRM and Voice AI platform for a premium meat
                distributor. Human-like voice agents, DNC Gatekeeper compliance, Shopify
                integration, and real-time draft orders for abandoned checkout recovery
                and inventory campaigns.
              </Text>

              {/* Key Metrics */}
              <SimpleGrid columns={3} spacing={6} w="full" mt={4}>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    Multi
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Tenant Ready
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    DNC
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Compliant
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    Real-Time
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Order Creation
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
                src="/assets/portfolio/New/The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency.jpg"
                alt="The Meatery Dashboard"
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
                <Icon as={FaUsers} boxSize={8} color="brand.500" mb={3} />
                <StatNumber fontSize="4xl" color="brand.500" fontWeight="bold">
                  Multi-Tenant
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Agency MVP
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Enables external client onboarding
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaShieldAlt} boxSize={8} color="green.500" mb={3} />
                <StatNumber fontSize="4xl" color="green.500" fontWeight="bold">
                  DNC
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Gatekeeper
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Reactivated revenue drivers safely
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaShoppingCart} boxSize={8} color="orange.500" mb={3} />
                <StatNumber fontSize="4xl" color="orange.500" fontWeight="bold">
                  Real-Time
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Draft Orders
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Instant checkout link generation
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaChartLine} boxSize={8} color="purple.500" mb={3} />
                <StatNumber fontSize="4xl" color="purple.500" fontWeight="bold">
                  Enhanced
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Sales Agility
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Rapid-fire AI voice campaigns
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
                  The Meatery is a proprietary e-commerce CRM and Voice AI platform
                  designed to automate high-ticket customer interactions. Initially
                  developed as an internal tool for a premium meat distributor, the
                  project focused on evolving the platform into a Multi-Tenant
                  Agency Model.
                </Text>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={useColorModeValue("gray.700", "gray.200")}
                  lineHeight="1.8">
                  The system utilizes human-like voice agents to manage inbound support
                  and outbound sales campaigns, such as abandoned checkout recovery and
                  cold outreach. It features DNC Gatekeeper compliance, Shopify integration,
                  n8n AI Judge for prompt iteration, and real-time draft orders.
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
                From Internal Tool to Scalable Agency Solution
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.100")}
                maxW="2xl"
                mx="auto">
                The transition from an internal tool to a scalable agency
                solution presented several technical and operational hurdles.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              {[
                {
                  icon: FaShieldAlt,
                  color: "red.500",
                  title: "Compliance Risks",
                  description:
                    "A \"DNC (Do Not Call) Fear\" prevented the reactivation of high-revenue automation flows like Abandoned Checkout recovery, limiting revenue potential.",
                },
                {
                  icon: FaDatabase,
                  color: "orange.500",
                  title: "Data Reliability",
                  description:
                    "Unreliable webhooks led to missing call logs and inaccurate CRM attribution, making it impossible to bill future agency clients accurately.",
                },
                {
                  icon: FaRobot,
                  color: "yellow.500",
                  title: "Lack of Personalization",
                  description:
                    "Early AI iterations often sounded \"robotic\" and lacked deep customer context (e.g., VIP status or purchase history) needed for effective sales.",
                },
                {
                  icon: FaCog,
                  color: "purple.500",
                  title: "Operational Friction",
                  description:
                    "Launching new inventory-specific campaigns (like a surplus sale) took days of manual intervention instead of minutes, reducing agility.",
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
              Infrastructure Overhaul: Compliance, Intelligence & Scalability
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.100")}
              maxW="2xl"
              mx="auto">
              We implemented a robust infrastructure overhaul focused on
              compliance, intelligence, and multi-tenant scalability.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {[
              {
                number: "1",
                icon: FaShieldAlt,
                title: "DNC \"Gatekeeper\" Architecture",
                description:
                  "Built a centralized PostgreSQL exclusion list that checks every phone number against both Global and Client-Specific DNC tables before a call is ever triggered, allowing the client to run automation flows with total confidence.",
                color: "blue",
              },
              {
                number: "2",
                icon: FaShoppingCart,
                title: "Smart Agent Context & Shopify Integration",
                description:
                  "Transformed the AI from a generic caller into a savvy sales agent by injecting Shopify Data (Order Count, LTV, Subscription Status) directly into the AI's dynamic variables, enabling personalized discounts and add-ons.",
                color: "green",
              },
              {
                number: "3",
                icon: FaRobot,
                title: "\"Prompt Ops\" Feedback Loop",
                description:
                  "Developed an n8n-based AI Judge that automatically ingests call recordings, grades conversations based on rebuttal handling and tone, and aggregates data for rapid prompt iteration, eliminating \"robotic\" behavior.",
                color: "orange",
              },
              {
                number: "4",
                icon: FaSync,
                title: "Campaign Injection System",
                description:
                  "Streamlined inventory liquidation by creating a flexible CSV upload tool. Admins can now map specific customer lists (e.g., \"Prime Rib Buyers\") to specific agents and scripts instantly, reducing production time from days to minutes.",
                color: "purple",
              },
              {
                number: "5",
                icon: FaShoppingCart,
                title: "Real-Time Sales Execution",
                description:
                  "Empowered agents with the ability to programmatically create discounted \"Draft Orders\" in Shopify and text the checkout link to the customer immediately during the call, enabling instant conversion.",
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
                Built for Low Latency & High Reliability
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
              {[
                {
                  icon: SiReact,
                  name: "React",
                  category: "Frontend",
                  color: "blue",
                  description: "Admin Dashboard for call logs",
                },
                {
                  icon: SiNodedotjs,
                  name: "Node.js",
                  category: "Backend",
                  color: "green",
                  description: "Express with Shopify API",
                },
                {
                  icon: SiShopify,
                  name: "Shopify",
                  category: "E-commerce",
                  color: "green",
                  description: "Order & inventory management",
                },
                {
                  icon: SiPostgresql,
                  name: "PostgreSQL",
                  category: "Database",
                  color: "blue",
                  description: "Multi-tenant data architecture",
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
              From Single-Tenant Tool to Multi-Tenant Agency
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            {[
              {
                icon: FaCheckCircle,
                title: "Multi-Tenant Agency MVP",
                description:
                  "Transitioned from a single-tenant tool to a Multi-Tenant Agency MVP, enabling the onboarding of external clients and scaling the business model.",
                color: "green",
              },
              {
                icon: FaShieldAlt,
                title: "Reactivated Revenue Drivers",
                description:
                  "Reactivated the primary revenue driver (Abandoned Checkout flows) by securing the system with a hardened DNC Gatekeeper, enabling confident automation.",
                color: "blue",
              },
              {
                icon: FaDatabase,
                title: "Improved Data Integrity",
                description:
                  "Improved data integrity by refactoring webhooks to ensure 100% of call outcomes and CRM attributions are captured, enabling accurate billing.",
                color: "orange",
              },
              {
                icon: FaChartLine,
                title: "Enhanced Sales Agility",
                description:
                  "Enhanced sales agility, allowing the client to liquidate surplus stock through rapid-fire AI voice campaigns, reducing campaign launch time from days to minutes.",
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
              Ready to Scale Your Voice AI and CRM?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" opacity={0.9}>
              Transform your voice AI and CRM into a multi-tenant agency. Let&apos;s
              discuss compliance-safe, intelligent automation for your business.
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

export default CaseStudyMeatery;
