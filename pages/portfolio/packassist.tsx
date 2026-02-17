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
  FaComments,
  FaBrain,
  FaUserCheck,
} from "react-icons/fa";
import {
  SiReact,
  SiPython,
  SiOpenai,
  SiPostgresql,
  SiFastapi,
  SiMongodb,
} from "react-icons/si";

const CaseStudyPackAssist = () => {
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
        title="Case Study: Pack Assist (Premium Design) - Tech Emulsion"
        description="Pack Assist is an AI-Assisted Sales Qualification Chatbot for the packaging industry. Tech Emulsion delivered a cost-optimized hybrid architecture, Zendesk-style agent dashboard, RAG-based fact-checking, and weekend automation in 8 weeks."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/packassist"
        portfolioData={{
          title: "Pack Assist – Revolutionizing Packaging Sales with a Cost-Optimized AI Agent",
          description:
            "Advanced AI-Assisted Sales Qualification Chatbot for the packaging industry. Python FastAPI backend, hybrid cost-saving architecture, Zendesk-style agent dashboard, RAG to eliminate AI hallucinations, weekend automation.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/New/Pack Assist – Revolutionizing Packaging Sales with a Cost-Optimized AI Agent.jpg",
          url: "https://techemulsion.com/portfolio/packassist",
          genre: "AI, Sales Automation, Packaging Industry",
          keywords: [
            "Pack Assist",
            "AI chatbot",
            "packaging sales",
            "FastAPI",
            "RAG",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "Pack Assist",
              url: "https://techemulsion.com/portfolio/packassist",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is Pack Assist?",
              answer:
                "Pack Assist is an advanced AI-Assisted Sales Qualification Chatbot designed for the packaging industry. It helps qualify leads through a hybrid flow: static questions first (Name, Email, Product), then paid AI logic only for qualified visitors, reducing costs and improving accuracy.",
            },
            {
              question: "How did Tech Emulsion reduce AI costs for Pack Assist?",
              answer:
                "We built a Hybrid Init workflow. The first 3–4 questions (Name, Email, Product) are static system questions. Paid AI is triggered only after these qualifications are met, filtering out casual browsers before incurring token costs.",
            },
            {
              question: "What technical stack powers Pack Assist?",
              answer:
                "Frontend: React, Tailwind CSS, Socket.io Client. Backend: Python, FastAPI, Socket.io Server. AI: OpenAI (GPT-4o-mini & GPT-4.1), LangChain, Pinecone for memory. Database: MongoDB for chat logs.",
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
            src="/assets/portfolio/New/Pack Assist – Revolutionizing Packaging Sales with a Cost-Optimized AI Agent.jpg"
            alt="Pack Assist"
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
                Pack Assist
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
                AI SALES AUTOMATION
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                color="white">
                Pack Assist
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="rgba(255,255,255,0.9)"
                lineHeight="1.6"
                fontWeight="300">
                Revolutionizing Packaging Sales with a Cost-Optimized AI Agent
              </Text>
              <Text
                fontSize="lg"
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="2xl">
                An advanced AI-Assisted Sales Qualification Chatbot for the packaging
                industry. Python FastAPI backend, hybrid qualification flow,
                Zendesk-style agent dashboard, and RAG to eliminate AI hallucinations—delivered
                in 8 weeks.
              </Text>

              {/* Key Metrics */}
              <SimpleGrid columns={3} spacing={6} w="full" mt={4}>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    8
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Weeks Delivery
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    Cost
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Optimized
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    30+
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Concurrent Chats
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
                src="/assets/portfolio/New/Pack Assist – Revolutionizing Packaging Sales with a Cost-Optimized AI Agent.jpg"
                alt="Pack Assist Dashboard"
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
                <Icon as={FaDollarSign} boxSize={8} color="brand.500" mb={3} />
                <StatNumber fontSize="4xl" color="brand.500" fontWeight="bold">
                  Reduced
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  AI Costs
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Hybrid architecture filters casual browsers
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaUserCheck} boxSize={8} color="green.500" mb={3} />
                <StatNumber fontSize="4xl" color="green.500" fontWeight="bold">
                  Accurate
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Data Quality
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  RAG eliminates AI hallucinations
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaComments} boxSize={8} color="orange.500" mb={3} />
                <StatNumber fontSize="4xl" color="orange.500" fontWeight="bold">
                  High-Density
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Agent Dashboard
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Zendesk-style interface
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaClock} boxSize={8} color="purple.500" mb={3} />
                <StatNumber fontSize="4xl" color="purple.500" fontWeight="bold">
                  24/7
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Weekend Coverage
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Automated weekend mode
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
                  Pack Assist is an advanced AI-Assisted Sales Qualification
                  Chatbot specifically designed for the packaging industry. The
                  project focused on upgrading an existing system to a robust
                  Python FastAPI backend, implementing advanced AI logic, and
                  delivering a high-density agent dashboard to streamline sales
                  operations.
                </Text>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={useColorModeValue("gray.700", "gray.200")}
                  lineHeight="1.8">
                  Delivered in an 8-week timeframe, the project emphasizes
                  operational stability and significant cost control. The system
                  features a hybrid qualification flow, Zendesk-style agent
                  dashboard, RAG-based fact-checking, and weekend automation.
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
                Critical Operational Hurdles
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.100")}
                maxW="2xl"
                mx="auto">
                Before the upgrade, the client faced several critical operational
                hurdles that threatened efficiency and accuracy.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              {[
                {
                  icon: FaDollarSign,
                  color: "red.500",
                  title: "High AI Operational Costs",
                  description:
                    "Every interaction triggered paid AI tokens, even for \"window shoppers\", leading to unnecessary expenses for casual browsers.",
                },
                {
                  icon: FaExclamationTriangle,
                  color: "orange.500",
                  title: "AI Hallucinations",
                  description:
                    "The chatbot frequently \"invented\" details, such as incorrect shipping locations or non-existent business rules, damaging credibility.",
                },
                {
                  icon: FaCog,
                  color: "yellow.500",
                  title: "Inefficient Management",
                  description:
                    "Agents lacked the tools to manage high volumes of chats effectively, needing a more professional, high-density interface.",
                },
                {
                  icon: FaClock,
                  color: "purple.500",
                  title: "Coverage Gaps",
                  description:
                    "The system lacked a reliable automated strategy for weekend inquiries, missing potential leads during off-hours.",
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
              Hybrid Architecture & Modern Tech Stack
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.100")}
              maxW="2xl"
              mx="auto">
              We implemented a \"Hybrid\" architecture and migrated the system to a modern
              tech stack to enhance control and scalability.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {[
              {
                number: "1",
                icon: FaDollarSign,
                title: "Cost-Saving Hybrid Architecture",
                description:
                  "Built a \"Hybrid Init\" workflow where the first 3–4 questions (requesting Name, Email, and Product) are static system questions. Paid AI logic is only triggered after these initial qualifications are met, effectively filtering out casual browsers before incurring costs.",
                color: "blue",
              },
              {
                number: "2",
                icon: FaUserCheck,
                title: "Zendesk-Style Agent Dashboard",
                description:
                  "Redesigned the agent interface to match Zendesk standards, creating a high-density view that allows a single agent to manage 30+ simultaneous chats with features like ghost typing, visitor path tracking, manual AI toggle, and rich media support.",
                color: "green",
              },
              {
                number: "3",
                icon: FaBrain,
                title: "Eliminating AI Hallucinations",
                description:
                  "Using RAG (Retrieval-Augmented Generation) fact-checking, we enforced strict business rules. The AI was programmed to stop inventing shipping locations and to adhere to industry-specific standards, with localization logic for US vs. UK IPs.",
                color: "orange",
              },
              {
                number: "4",
                icon: FaClock,
                title: "Weekend Automation Strategy",
                description:
                  "The system now features a \"Weekend Mode.\" While the bot acts as a support tool for \"manned\" hours during the week, it transitions into a full AI safety net on Saturdays and Sundays, ensuring no lead is missed.",
                color: "purple",
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
                Built for High Performance & Real-Time Responsiveness
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={6} w="full">
              {[
                {
                  icon: SiReact,
                  name: "React",
                  category: "Frontend",
                  color: "blue",
                  description: "Modern UI with Tailwind CSS",
                },
                {
                  icon: SiPython,
                  name: "Python",
                  category: "Backend",
                  color: "yellow",
                  description: "FastAPI for high performance",
                },
                {
                  icon: SiFastapi,
                  name: "FastAPI",
                  category: "API Framework",
                  color: "green",
                  description: "High-performance API",
                },
                {
                  icon: SiOpenai,
                  name: "OpenAI",
                  category: "AI Engine",
                  color: "purple",
                  description: "GPT-4o-mini & GPT-4.1",
                },
                {
                  icon: SiMongodb,
                  name: "MongoDB",
                  category: "Database",
                  color: "green",
                  description: "Secure chat logs",
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
              From Cost Concerns to Operational Excellence
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            {[
              {
                icon: FaCheckCircle,
                title: "Fully Functional V2 Platform",
                description:
                  "A fully functional V2 platform with a modernized Python backend, delivering enhanced performance and scalability.",
                color: "green",
              },
              {
                icon: FaDollarSign,
                title: "Significant Cost Reduction",
                description:
                  "Significant reduction in AI overhead through the hybrid static-question model, filtering out casual browsers before incurring token costs.",
                color: "blue",
              },
              {
                icon: FaBrain,
                title: "Improved Data Accuracy",
                description:
                  "Improved data accuracy via RAG-enforced business rules and the elimination of AI hallucinations, ensuring reliable information delivery.",
                color: "orange",
              },
              {
                icon: FaChartLine,
                title: "Enhanced Marketing Insights",
                description:
                  "Enhanced marketing insights through a new analytics report comparing website visitors vs. chatbot engagement, enabling data-driven decisions.",
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
              Ready to Elevate Your Business with Cost-Optimized AI?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" opacity={0.9}>
              Transform your sales and support challenges into scalable, accurate
              experiences. Let&apos;s discuss how we can build a cost-optimized AI
              solution tailored to your industry needs.
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

export default CaseStudyPackAssist;
