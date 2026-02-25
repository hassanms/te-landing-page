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
  Icon,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { ButtonLink } from "components/button-link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const CaseStudyAlifa = () => {
  const { colorMode } = useColorMode();
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
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <EnhancedSEO
        title="Case Study: Alifa - Tech Emulsion"
        description="Alifa is a client engagement and AI-driven sales SaaS platform that streamlines client interactions through advanced AI capabilities, automated tasks, and personalized engagement tools."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/alifa"
        portfolioData={{
          title: "Alifa – AI-Driven Sales SaaS Platform",
          description:
            "Tech Emulsion developed Alifa, a comprehensive client engagement and AI-driven sales SaaS platform that streamlines client interactions through advanced AI capabilities, multi-agent architectures, and seamless integrations.",
          dateCreated: "2023",
          image: "https://techemulsion.com/assets/portfolio/file.jpg",
          url: "https://techemulsion.com/portfolio/alifa",
          genre: "AI SaaS, Sales Automation",
          keywords: [
            "AI SaaS",
            "sales automation",
            "client engagement",
            "LangGraph",
            "multi-agent",
            "Tech Emulsion",
            "Alifa",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            { name: "Alifa", url: "https://techemulsion.com/portfolio/alifa" },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is Alifa and what does it do?",
              answer:
                "Alifa is a client engagement and AI-driven sales SaaS platform designed to empower sales representatives by streamlining client interactions. By integrating advanced artificial intelligence capabilities, Alifa enhances productivity, automates repetitive tasks, and facilitates personalized client engagement. The platform leverages LangGraph for multi-agent architectures and includes features like real-time analytics, AI-driven tools for web scraping and business information retrieval, and seamless integrations with Zoom and Google Calendar.",
            },
            {
              question: "How does Alifa use AI to automate sales processes?",
              answer:
                "Alifa leverages cutting-edge AI technologies including LangGraph for implementing multi-agent architectures, RAG (Retrieval-Augmented Generation) for automated client chats using company knowledge bases, AI agents for web monitoring and data extraction, intelligent web search capabilities, and automated subscription management. This enables parallel execution of thousands of agents simultaneously, each maintaining independent states for enhanced scalability and responsiveness.",
            },
            {
              question: "What are the main features of the Alifa platform?",
              answer:
                "Alifa offers comprehensive features including real-time analytics dashboards for performance metrics and team productivity, multi-agent parallelism for handling thousands of simultaneous interactions, AI-driven tools with Google search integration and web scraping capabilities, seamless user experiences for admins and sales representatives, AI integration with RAG technology, Zoom and Google Calendar integrations for meeting scheduling, multi-language and multi-currency support, and automated subscription management with real-time analytics.",
            },
          ],
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF"></Script>
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
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}>
          <Image
            src="/assets/portfolio/file.jpg"
            alt="Alifa - AI-Driven Sales SaaS Platform"
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
              sx={{
                bg: "none",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
              }}>
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: "white",
                  p: 0,
                  "&:hover": { bg: "none", color: "white" },
                }}
              >
                Home
              </ButtonLink>
              <Icon as={FaChevronRight} color="white" boxSize={4} />
              <ButtonLink
                href="/portfolio"
                size="lg"
                sx={{
                  bg: "none",
                  color: "white",
                  p: 0,
                  "&:hover": { bg: "none", color: "white" },
                }}
              >
                Portfolio
              </ButtonLink>
              <Icon as={FaChevronRight} color="white" boxSize={4} />
              <Text as="span" ml="2" color="white">
                Alifa
              </Text>
            </ButtonGroup>
          </Box>

          <Flex
            align={{ base: "flex-start", lg: "center" }}
            justify="space-between"
            gap={{ base: 10, lg: 12 }}
            flexDir={{ base: "column", lg: "row" }}
            w="full">
            <VStack align="start" spacing={6} flex={1} maxW="4xl">
              <Heading
                as="h1"
                fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                color="white">
                Alifa
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="300"
                lineHeight="1.3"
                color="rgba(255,255,255,0.9)">
                AI-Driven Sales SaaS Platform
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="3xl">
                A comprehensive client engagement and AI-driven sales SaaS platform that empowers sales representatives by streamlining client interactions through advanced AI capabilities and multi-agent architectures.
              </Text>
            </VStack>
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
                  AI SaaS / Sales Automation
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Client
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  Alifa
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Engagement
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  End-to-end AI sales platform
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Outcome
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  Streamlined client engagement
                </Text>
              </Box>
            </SimpleGrid>
            <Box pt={4} borderTop="1px solid" borderColor={dividerColor}>
              <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                Tech Stack
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.6">
                LangGraph, AI Agents, RAG, Web Scraping, Google Search Integration
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
      {/* The Challenge */}
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
            <VStack align="start" spacing={6}>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1">
                The Challenge
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Traditional sales platforms lacked the AI capabilities needed to manage client interactions at scale and support multiple agents in dynamic, real-time environments.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                Alifa required a robust SaaS solution capable of advanced multi-agent architectures, seamless tool integrations, and state management for contextual awareness across conversations.
              </Text>
            </VStack>

            <VStack align="start" spacing={0} pt={2}>
              {[
                "Advanced multi-agent architectures for parallel execution",
                "Integration with diverse tools and APIs for sales automation",
                "State management for contextual awareness across conversations",
                "Scalable infrastructure supporting thousands of simultaneous agents",
              ].map((item, i) => (
                <Box key={i} w="full">
                  <HStack spacing={5} py={5} align="flex-start">
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                      {String(i + 1).padStart(2, "0")}.
                    </Text>
                    <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
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
                Tech Emulsion partnered with Alifa to develop a comprehensive SaaS platform leveraging LangGraph for advanced multi-agent architectures.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                We designed a feature-rich platform with real-time analytics, AI-driven automation tools, and seamless integrations to transform sales processes and enhance client engagement.
              </Text>
            </VStack>

            <VStack align="start" spacing={0} pt={2}>
              {[
                "Implement LangGraph for multi-agent architectures and parallel execution",
                "Develop real-time analytics dashboard for performance metrics",
                "Integrate AI-driven tools for web scraping and business intelligence",
                "Create seamless user experiences for admins and sales representatives",
                "Build scalable infrastructure supporting thousands of simultaneous agents",
              ].map((item, i) => (
                <Box key={i} w="full">
                  <HStack spacing={5} py={5} align="flex-start">
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                      {String(i + 1).padStart(2, "0")}.
                    </Text>
                    <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
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
      {/* The Solution: Technical Architecture & Key Features */}
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
              The Solution: Technical Architecture & Key Features
            </Heading>

            <VStack align="start" spacing={8} maxW="4xl" w="full">
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>LangGraph Multi-Agent Architecture:</Text> Implemented LangGraph framework enabling thousands of agents to operate simultaneously with independent states, ensuring scalability and responsiveness in handling complex sales interactions.
                </Text>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Real-Time Analytics Dashboard:</Text> Centralized dashboard providing admins and sales representatives with comprehensive insights into performance metrics, customer engagement, and team productivity across all operations.
                </Text>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>AI-Driven Automation Tools:</Text> Integrated Google search, web scraping, and business information retrieval capabilities to automate repetitive tasks and gather relevant intelligence for sales teams.
                </Text>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>RAG-Based Intelligent Chat:</Text> Implemented Retrieval-Augmented Generation technology for automated client chats that can answer questions using company knowledge bases with contextual awareness.
                </Text>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Seamless Integrations:</Text> Built-in integrations with Zoom and Google Calendar for meeting scheduling, plus support for multi-language and multi-currency operations to expand global reach.
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>
      {/* Client Review */}
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
          <VStack align="start" spacing={10} w="full" maxW="3xl">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1">
              Client Review
            </Heading>
            <Box position="relative" w="full">
              <Box
                position="absolute"
                top={-2}
                left={0}
                color={accentColor}
                opacity={0.15}
                lineHeight={0}>
                <FaQuoteLeft size={72} />
              </Box>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color={textColor}
                lineHeight="1.8"
                fontStyle="italic"
                pl={{ base: 20, md: 24 }}
                pt={2}>
                Tech Emulsion transformed Alifa's vision into an intuitive, scalable platform that addresses modern sales challenges. With advanced AI features and a user-friendly design, Alifa is well-positioned to lead in client engagement and sales analytics.
              </Text>
              <HStack
                mt={8}
                pl={{ base: 20, md: 24 }}
                spacing={3}
                align="center">
                <Box w={12} h="1px" bg={accentColor} opacity={0.6} />
                <Text
                  fontSize="sm"
                  color={headingColor}
                  fontWeight="semibold"
                  letterSpacing="wide">
                  Suliman, CEO of Alifa
                </Text>
              </HStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Impact & Results */}
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
            <VStack align="start" spacing={6}>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1">
                Impact & Results
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                The platform revolutionized client engagement by leveraging AI-driven agents to streamline sales processes and enhance team productivity.
              </Text>
            </VStack>

            <VStack align="start" spacing={0} pt={2}>
              {[
                "Boosted team productivity through advanced analytics and performance tracking",
                "Enabled seamless scaling to handle thousands of interactions simultaneously",
                "Expanded global reach with multi-language and multi-currency support",
                "Optimized operational efficiency through automated subscription management",
              ].map((item, i) => (
                <Box key={i} w="full">
                  <HStack spacing={5} py={5} align="flex-start">
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={numberColor} lineHeight="1.2" minW="60px">
                      {String(i + 1).padStart(2, "0")}.
                    </Text>
                    <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.5">
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
      <Box
        bg={bgColor}
        py={{ base: 20, md: 24 }}
        position="relative">
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={12} maxW="4xl">
            <VStack align="start" spacing={6}>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1">
                Why This Matters
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                Tech Emulsion transformed Alifa's vision into a comprehensive SaaS platform that merges advanced AI capabilities with seamless user experiences—enabling sales teams to scale operations and enhance client engagement through intelligent automation.
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
              Ready to Transform Your Sales Platform?
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
                _hover={{ bg: "whiteAlpha.200" }}
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

export default CaseStudyAlifa;
