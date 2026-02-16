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
} from "react-icons/si";

const CaseStudyAVLCoPilot = () => {
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
        title="Case Study: AVL-CoPilot - Tech Emulsion"
        description="AVL-CoPilot is an advanced AI-powered conversational assistant solution built to transform customer engagement and automate intelligent interactions. Tech Emulsion developed a sophisticated AI platform with natural language processing, context awareness, and seamless integration capabilities."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/avl-copilot"
        portfolioData={{
          title: "AVL-CoPilot – Intelligent Conversational AI Platform",
          description:
            "An advanced AI-powered conversational assistant solution designed to transform customer engagement through intelligent automation, natural language processing, and context-aware interactions.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/New/ai-chatbot-avl-case-study.png",
          url: "https://techemulsion.com/portfolio/avl-copilot",
          genre: "AI Solution, Conversational AI, Assistant Platform",
          keywords: [
            "AVL-CoPilot",
            "conversational AI",
            "natural language processing",
            "intelligent automation",
            "customer engagement",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "AVL-CoPilot",
              url: "https://techemulsion.com/portfolio/avl-copilot",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is AVL-CoPilot?",
              answer:
                "AVL-CoPilot is an advanced conversational AI platform designed to transform customer engagement through intelligent automation, natural language processing, and context-aware interactions.",
            },
            {
              question: "What problems does AVL-CoPilot solve?",
              answer:
                "The platform addresses customer service scalability, 24/7 availability, response time optimization, multilingual support, and intelligent query handling without human intervention.",
            },
            {
              question: "What technologies power AVL-CoPilot?",
              answer:
                "The solution leverages advanced AI/ML frameworks, natural language processing engines, modern web technologies, and robust backend infrastructure for seamless integration and scalability.",
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
            src="/assets/portfolio/New/ai-chatbot-avl-case-study.png"
            alt="AVL-CoPilot"
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
                AVL-CoPilot
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
                AI SOLUTION
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                color="white">
                AVL-CoPilot
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="rgba(255,255,255,0.9)"
                lineHeight="1.6"
                fontWeight="300">
                Transforming Customer Engagement Through Intelligent Conversational AI
              </Text>
              <Text
                fontSize="lg"
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="2xl">
                An advanced AI-powered conversational platform that delivers intelligent,
                context-aware interactions 24/7. Built with cutting-edge natural language
                processing and machine learning to provide seamless customer experiences
                and automate complex workflows.
              </Text>

              {/* Key Metrics */}
              <SimpleGrid columns={3} spacing={6} w="full" mt={4}>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    24/7
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Availability
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    95%+
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Accuracy Rate
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <Text fontSize="4xl" color="brand.400" fontWeight="bold">
                    &lt;1s
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                    Response Time
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
                src="/assets/portfolio/New/ai-chatbot-avl-case-study.png"
                alt="AVL-CoPilot Dashboard"
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
                <Icon as={FaComments} boxSize={8} color="brand.500" mb={3} />
                <StatNumber fontSize="4xl" color="brand.500" fontWeight="bold">
                  Intelligent
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Natural Conversations
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Context-aware responses
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaClock} boxSize={8} color="green.500" mb={3} />
                <StatNumber fontSize="4xl" color="green.500" fontWeight="bold">
                  Instant
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Response Time
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Sub-second response delivery
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaBrain} boxSize={8} color="orange.500" mb={3} />
                <StatNumber fontSize="4xl" color="orange.500" fontWeight="bold">
                  Adaptive
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Learning Capability
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Continuous improvement
                </StatHelpText>
              </Stat>
              <Stat textAlign="center" bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <Icon as={FaUserCheck} boxSize={8} color="purple.500" mb={3} />
                <StatNumber fontSize="4xl" color="purple.500" fontWeight="bold">
                  Scalable
                </StatNumber>
                <StatLabel fontSize="md" mt={2} fontWeight="semibold">
                  Multi-Channel Support
                </StatLabel>
                <StatHelpText fontSize="sm" color={textColor}>
                  Web, mobile, and API ready
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
                  AVL-CoPilot represents a cutting-edge conversational AI platform
                  designed to revolutionize customer engagement and automate intelligent interactions.
                  The platform leverages advanced natural language processing, machine learning,
                  and context-aware algorithms to deliver human-like conversations at scale.
                </Text>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={useColorModeValue("gray.700", "gray.200")}
                  lineHeight="1.8">
                  Built with modern AI frameworks and robust infrastructure, the solution provides
                  seamless integration capabilities, multilingual support, and continuous learning
                  mechanisms to improve response accuracy and user satisfaction over time.
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
                Meeting Modern Customer Expectations
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.100")}
                maxW="2xl"
                mx="auto">
                Businesses today face increasing pressure to provide instant, accurate, and
                personalized customer support while managing costs and scaling operations efficiently.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              {[
                {
                  icon: FaClock,
                  color: "red.500",
                  title: "24/7 Support Demand",
                  description:
                    "Customers expect round-the-clock availability, but maintaining human support teams 24/7 is cost-prohibitive and resource-intensive.",
                },
                {
                  icon: FaExclamationTriangle,
                  color: "orange.500",
                  title: "Response Time Pressure",
                  description:
                    "Modern customers demand instant responses. Delayed support leads to frustration, lost sales, and damaged brand reputation.",
                },
                {
                  icon: FaCog,
                  color: "yellow.500",
                  title: "Scalability Challenges",
                  description:
                    "Handling peak traffic volumes and seasonal spikes requires flexible infrastructure that can scale dynamically without compromising performance.",
                },
                {
                  icon: FaDollarSign,
                  color: "purple.500",
                  title: "Cost Management",
                  description:
                    "Balancing quality customer service with operational costs requires intelligent automation that reduces overhead while maintaining service quality.",
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
              Intelligent Conversational AI Platform
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.100")}
              maxW="2xl"
              mx="auto">
              We developed AVL-CoPilot, a comprehensive AI assistant solution that combines advanced natural
              language processing, machine learning, and seamless integration capabilities.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {[
              {
                number: "1",
                icon: FaBrain,
                title: "Advanced NLP Engine",
                description:
                  "Sophisticated natural language processing capabilities that understand context, intent, and sentiment to deliver accurate, relevant responses.",
                color: "blue",
              },
              {
                number: "2",
                icon: FaSync,
                title: "Context-Aware Conversations",
                description:
                  "Maintains conversation context across multiple interactions, enabling natural, flowing dialogues that feel human-like and intuitive.",
                color: "green",
              },
              {
                number: "3",
                icon: FaRobot,
                title: "Machine Learning Integration",
                description:
                  "Continuous learning from interactions to improve accuracy, personalize responses, and adapt to evolving user needs and preferences.",
                color: "orange",
              },
              {
                number: "4",
                icon: FaGlobe,
                title: "Multi-Channel Deployment",
                description:
                  "Seamless integration across web, mobile apps, messaging platforms, and APIs for consistent experiences wherever customers engage.",
                color: "purple",
              },
              {
                number: "5",
                icon: FaShieldAlt,
                title: "Enterprise-Grade Security",
                description:
                  "Robust security measures including data encryption, compliance with privacy regulations, and secure API integrations.",
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
                Built for Performance, Scale & Intelligence
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={6} w="full">
              {[
                {
                  icon: SiReact,
                  name: "React",
                  category: "Frontend",
                  color: "blue",
                  description: "Modern, responsive user interface",
                },
                {
                  icon: SiPython,
                  name: "Python",
                  category: "Backend",
                  color: "yellow",
                  description: "Robust backend processing",
                },
                {
                  icon: SiFastapi,
                  name: "FastAPI",
                  category: "API",
                  color: "green",
                  description: "High-performance API framework",
                },
                {
                  icon: SiOpenai,
                  name: "AI/ML",
                  category: "AI Engine",
                  color: "purple",
                  description: "Advanced AI capabilities",
                },
                {
                  icon: SiPostgresql,
                  name: "PostgreSQL",
                  category: "Database",
                  color: "blue",
                  description: "Reliable data storage",
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
              Transforming Customer Engagement
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            {[
              {
                icon: FaCheckCircle,
                title: "24/7 Availability",
                description:
                  "Round-the-clock customer support without additional staffing costs, ensuring customers always have access to assistance.",
                color: "green",
              },
              {
                icon: FaChartLine,
                title: "Improved Response Times",
                description:
                  "Sub-second response times dramatically improve customer satisfaction and reduce wait times.",
                color: "blue",
              },
              {
                icon: FaUserCheck,
                title: "Enhanced User Experience",
                description:
                  "Natural, context-aware conversations that feel human-like, improving engagement and satisfaction rates.",
                color: "orange",
              },
              {
                icon: FaDollarSign,
                title: "Cost Optimization",
                description:
                  "Significant reduction in support costs while maintaining or improving service quality and availability.",
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
              Ready to Transform Your Customer Engagement?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" opacity={0.9}>
              Discover how AVL-CoPilot can revolutionize your customer
              interactions, reduce costs, and scale your support operations. Let&apos;s
              discuss your specific needs and build a solution tailored to your business.
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

export default CaseStudyAVLCoPilot;
