import {
  Box,
  ButtonGroup,
  Container,
  Grid,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
  HStack,
  SimpleGrid,
  Card,
  CardBody,
  Badge,
  Button,
  Icon,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  AspectRatio,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import Head from "next/head";
import Script from "next/script";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { FaChevronRight, FaRocket, FaUsers, FaCode, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const PortfolioV2 = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "gray.300");
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const bgColor = useColorModeValue("gray.50", "gray.900");

  // Featured projects (top 4)
  const featuredProjects = [
    {
      title: "Campaign OS – A Precision-Engineered Management Ecosystem",
      shortDescription: "End-to-end management platform for Out-of-Home advertising industry",
      description:
        "Campaign OS is a comprehensive, end-to-end management platform designed specifically for the Out-of-Home (OOH) advertising industry. Built with React and Supabase, it handles the entire campaign lifecycle from initial briefing and inventory site selection to real-time availability tracking and multi-format financial reporting.",
      image: "/assets/portfolio/New/Campaign_Porfolio.jpg",
      alt: "Campaign OS",
      href: "/portfolio/campaignos",
      category: "SaaS Platform",
      badge: "Featured",
      stats: { clients: "50+", uptime: "99.9%" },
    },
    {
      title: "Macromascot – Gamifying Health Consistency with AI",
      shortDescription: "Mobile health app with AI-powered meal logging and digital companions",
      description:
        "Macromascot is a comprehensive mobile health application designed to transform weight management by merging rigorous utility with gamification. Unlike traditional trackers, the platform utilizes an AI-powered meal logging system and an engaging Tamagotchi-style avatar system to drive user retention.",
      image: "/assets/portfolio/New/Health_app.jpg",
      alt: "Macromascot",
      href: "/portfolio/macromascot-v2",
      category: "Mobile App",
      badge: "Featured",
      stats: { users: "10K+", rating: "4.8" },
    },
    {
      title: "DADS Sales Reborn – Multi-Location Automotive Intelligence",
      shortDescription: "Centralized operational intelligence platform for automotive repair business",
      description:
        "DADS Sales Reborn is a centralized operational intelligence platform built for a multi-location automotive repair business operating across multiple US states. We rebuilt an unreliable prototype into a scalable data aggregation and analytics system, capable of handling incomplete APIs, inconsistent data, and real-world automotive edge cases.",
      image: "/assets/portfolio/New/DADS_Sales_Reborn.jpg",
      alt: "DADS Sales Reborn",
      href: "/portfolio/dadssalesreborn-v2",
      category: "Enterprise SaaS",
      badge: "Featured",
      stats: { locations: "15+", efficiency: "40%" },
    },
    {
      title: "Pack Assist – Cost-Optimized AI Agent",
      shortDescription: "AI-Assisted Sales Qualification Chatbot for the packaging industry",
      description:
        "Pack Assist is an advanced AI-Assisted Sales Qualification Chatbot for the packaging industry. We upgraded the system to a Python FastAPI backend, implemented a cost-saving hybrid architecture (static qualification before AI), a Zendesk-style agent dashboard, RAG-based fact-checking to eliminate AI hallucinations, and weekend automation—delivered in 8 weeks.",
      image: "/assets/portfolio/New/Pack Assist – Revolutionizing Packaging Sales with a Cost-Optimized AI Agent.jpg",
      alt: "Pack Assist",
      href: "/portfolio/packassist",
      category: "AI Solution",
      badge: "Featured",
      stats: { cost: "60%", response: "<2s" },
    },
  ];

  // All portfolio items
  const allProjects = [
    {
      title: "The Meatery – Scaling an AI-Driven Voice CRM",
      description:
        "The Meatery is a proprietary e-commerce CRM and Voice AI platform for a premium meat distributor. We evolved it into a Multi-Tenant Agency Model with human-like voice agents, DNC Gatekeeper compliance, Shopify integration for smart agent context, n8n-based AI Judge for prompt iteration, and real-time draft orders.",
      image: "/assets/portfolio/New/The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency.jpg",
      alt: "The Meatery",
      href: "/portfolio/meatery",
      category: "AI Solution",
    },
    {
      title: "Podcast Beacon – Link-in-Bio SaaS Hub",
      description:
        "Tech Emulsion built Podcast Beacon to let podcasters gather every important link on one branded page. Users launch multiple landing pages, showcase episodes, merch, and services, and accept payments through the built-in checkout.",
      image: "/assets/portfolio/mic.jpg",
      alt: "Podcast Beacon",
      href: "/portfolio/podcastbeacon",
      category: "SaaS Platform",
    },
    {
      title: "Rack Room – Business Resource Management",
      description:
        "Rackroom is a tailored, secure, and scalable application built for a single owner to manage their business's resources. It supports booking management with complex date/time calculations, client and engineer tracking, financial calculations, and automated SMS notifications via Twilio.",
      image: "/assets/portfolio/download.jpg",
      alt: "Rack Room",
      href: "/portfolio/rackroom",
      category: "Enterprise SaaS",
    },
    {
      title: "Content Compass – LinkedIn Content Analysis Tool",
      description:
        "This tool helps users get inspired by top LinkedIn creators and level up their own content game. Users can create a personalized dashboard by entering the LinkedIn profiles they want to follow. The system scrapes those profiles every 3 days and analyzes posts using OpenAI's LLM.",
      image: "/assets/portfolio/linkedin.jpg",
      alt: "Content Compass",
      href: "/portfolio/contentcompass",
      category: "AI Solution",
    },
    {
      title: "SuperHeart – AI-Powered Nutrition Tracking",
      description:
        "SuperHeart is a food coach in your pocket. It helps you choose meals that keep your heart happy. You can log meals by photo, words, or search. The app uses AI to guess food details and shows calories and macros right away.",
      image: "/assets/portfolio/food.webp",
      alt: "SuperHeart",
      href: "/portfolio/superheart",
      category: "Mobile App",
    },
    {
      title: "Atarim – Visual Collaboration & Project Management",
      description:
        "Tech Emulsion transformed WPFeedback into Atarim, a scalable SaaS platform for visual collaboration on any website. With new features, a Chrome extension, custom scraping, AWS scaling, and performance optimizations, we helped Atarim secure $500K funding.",
      image: "/assets/portfolio/atarim.png",
      alt: "Atarim",
      href: "/portfolio/atarim",
      category: "SaaS Platform",
    },
    {
      title: "JarvisReach – LinkedIn Prospecting SaaS",
      description:
        "Tech Emulsion developed JarvisReach, a SaaS for LinkedIn prospecting, enabling efficient data extraction, filtering, and automated email outreach. With subscription flexibility, team leaderboards, and admin analytics, JarvisReach streamlines lead management.",
      image: "/assets/portfolio/jarvis.png",
      alt: "JarvisReach",
      href: "/portfolio/jarvisreach",
      category: "SaaS Platform",
    },
    {
      title: "Levellup – AI-Driven Sales Training Simulator",
      description:
        "LevellUp is an AI-powered sales-training platform purpose-built for SaaS and other B2B revenue teams. Reps drop into on-demand, voice-enabled role-plays against lifelike AI buyer personas that adapt in real time—mirroring the questions, objections, and pushback they'll face on live calls.",
      image: "/assets/portfolio/level.png",
      alt: "Levellup",
      href: "/portfolio/levellup",
      category: "AI Solution",
    },
    {
      title: "Farmin – AI-Powered Satellite Image Detection",
      description:
        "Tech Emulsion built Farmin, an AI-powered SaaS for satellite image analysis. Using Mapbox, YOLO models, and OpenCV, it detects objects like cars, ships, and oil spills. We added change detection, a data annotation tool, and deployed it on AWS.",
      image: "/assets/portfolio/farmin.avif",
      alt: "Farmin",
      href: "/portfolio/farmin",
      category: "AI Solution",
    },
    {
      title: "Bipcards – Elevate Online Presence with Reviews",
      description:
        "Tech Emulsion developed a SaaS platform for Bipcards.com, enabling businesses to collect customer reviews via programmable NFC cards and QR codes. Customers benefit from a flexible subscription model, real-time analytics, and easy card programming.",
      image: "/assets/portfolio/bipcards.png",
      alt: "Bipcards",
      href: "/portfolio/bipcards",
      category: "SaaS Platform",
    },
    {
      title: "Popcard – SaaS for Managing Review Cards",
      description:
        "Tech Emulsion developed a SaaS for PopCard.io, enabling businesses to manage locations, teams, and customer reviews via NFC cards and QR codes. Features included secure authentication with social logins, analytics, leaderboards, and Stripe subscriptions.",
      image: "/assets/portfolio/popcard.png",
      alt: "Popcard",
      href: "/portfolio/popcard",
      category: "SaaS Platform",
    },
    {
      title: "Artis – Blockchain Powered Copyright SaaS",
      description:
        "Artis is an AI-driven platform that analyzes an artist's style to provide tailored advice and marketing strategies. It leverages blockchain for secure ownership protection and copyright management. It connects artists with audiences, enabling secure sales.",
      image: "/assets/portfolio/Artis.png",
      alt: "Artis",
      href: "/portfolio/artis",
      category: "Blockchain",
    },
    {
      title: "Alifa App – AI-Driven Sales SaaS",
      description:
        "Tech Emulsion developed Alifa App to help sales reps manage client interactions with ease. It enables Zoom meeting creation, dynamic proposal sharing with hyperlinks, and automated client chats using RAG. With AI agents for web monitoring, data extraction, and web searches.",
      image: "/assets/portfolio/file.jpg",
      alt: "Alifa App",
      href: "/portfolio/alifa",
      category: "AI Solution",
    },
    {
      title: "MoodTube Extension – AI-Powered Video Search by Mood",
      description:
        "MoodTube allows users to search YouTube videos by mood (e.g., Happy, Relaxed, Motivated) using AI tools like LangChain and vector embeddings. The extension extracts YouTube transcripts, converts them into embeddings, and stores them in PGVector.",
      image: "/assets/portfolio/moodtube.png",
      alt: "MoodTube",
      href: "/portfolio/moodtube",
      category: "AI Solution",
    },
    {
      title: "RAG Based Customized ChatBot",
      description:
        "This end-to-end RAG application allows users to interact with documents by uploading PDFs and asking questions. It uses advanced AI techniques to extract, understand, and answer queries with remarkable accuracy. The system leverages OpenAI's LLMs, pgvector for similarity search.",
      image: "/assets/portfolio/raggenai.png",
      alt: "RAG ChatBot",
      href: "/portfolio/genai",
      category: "AI Solution",
    },
  ];

  // Animated counter component
  const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration]);

    return <>{count}+</>;
  };

  return (
    <Box>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <EnhancedSEO
        title="Our Portfolio - Tech Emulsion"
        description="Explore Tech Emulsion's diverse portfolio of successful projects including AI-powered tools, SaaS platforms, mobile apps, blockchain solutions, and custom software development for global clients."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio-v2"
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
            color: "#008080",
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
        py={{ base: 16, md: 24 }}
        overflow="hidden"
        sx={{
          backgroundImage: "url('/assets/portfolio/porfolio_bg_image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        {/* Dark overlay for text readability */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient={
            colorMode === "dark"
              ? "linear(to-b, blackAlpha.700, blackAlpha.600)"
              : "linear(to-b, blackAlpha.700, blackAlpha.600)"
          }
          zIndex={0}
        />
        <BackgroundGradient height="100%" zIndex={0} opacity={colorMode === "dark" ? 0.3 : 0.1} />
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
              <Text
                as="span"
                ml="2"
                sx={{
                  color: "white",
                }}>
                Portfolio
              </Text>
            </ButtonGroup>
          </Box>

          <VStack spacing={8} textAlign="center" maxW="4xl" mx="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <Badge
                bg="whiteAlpha.200"
                color="white"
                backdropFilter="blur(10px)"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                mb={4}
                borderWidth="1px"
                borderColor="whiteAlpha.300">
                Our Work
              </Badge>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              <Heading
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="1.2"
                mb={4}
                color="white">
                Transforming Ideas into{" "}
                <Text
                  as="span"
                  color="pearlAqua.500">
                  Digital Excellence
                </Text>
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="whiteAlpha.900"
                maxW="2xl"
                lineHeight="1.8">
                Explore our portfolio of innovative solutions that have transformed
                businesses across industries. From AI-powered platforms to scalable
                SaaS applications, discover how we turn vision into reality.
              </Text>
            </MotionBox>

            {/* Stats Bar */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              w="full"
              mt={8}>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
                <Stat>
                  <StatLabel color="whiteAlpha.800" fontSize="sm">
                    Projects Completed
                  </StatLabel>
                  <StatNumber
                    fontSize={{ base: "2xl", md: "3xl" }}
                    color="pearlAqua.500">
                    <AnimatedCounter end={20} />
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel color="whiteAlpha.800" fontSize="sm">
                    Technologies
                  </StatLabel>
                  <StatNumber
                    fontSize={{ base: "2xl", md: "3xl" }}
                    color="pearlAqua.500">
                    <AnimatedCounter end={15} />
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel color="whiteAlpha.800" fontSize="sm">
                    Happy Clients
                  </StatLabel>
                  <StatNumber
                    fontSize={{ base: "2xl", md: "3xl" }}
                    color="pearlAqua.500">
                    <AnimatedCounter end={50} />
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel color="whiteAlpha.800" fontSize="sm">
                    Years Experience
                  </StatLabel>
                  <StatNumber
                    fontSize={{ base: "2xl", md: "3xl" }}
                    color="pearlAqua.500">
                    <AnimatedCounter end={5} />
                  </StatNumber>
                </Stat>
              </SimpleGrid>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Box bg={bgColor} py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            <Box textAlign="center">
              <Badge colorScheme="teal" px={4} py={2} borderRadius="full" fontSize="sm" mb={4}>
                Featured Projects
              </Badge>
              <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" mb={4}>
                Our Latest Innovations
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="2xl" mx="auto">
                Discover our most impactful projects that showcase cutting-edge
                technology and exceptional results.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {featuredProjects.map((project, index) => (
                <MotionCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  borderRadius="2xl"
                  overflow="hidden"
                  borderWidth="0px"
                  boxShadow="xl"
                  data-group
                  _hover={{
                    transform: "translateY(-12px)",
                    boxShadow: "2xl",
                    "& .featured-image": {
                      transform: "scale(1.1)",
                      filter: "grayscale(0%) brightness(1.1)",
                    },
                    "& .featured-overlay": {
                      opacity: 0.85,
                    },
                    "& .cta-arrow": {
                      opacity: 1,
                      transform: "translateX(4px)",
                    },
                  }}
                  cursor="pointer"
                  as={Link}
                  href={project.href}
                  position="relative"
                  h={{ base: "500px", md: "600px" }}>
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    zIndex={0}>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      style={{
                        objectFit: "cover",
                        filter: "grayscale(30%) brightness(0.7)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      className="featured-image"
                    />
                  </Box>

                  {/* Gradient Overlay */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgGradient="linear(to-t, blackAlpha.900, blackAlpha.700, blackAlpha.500, transparent)"
                    opacity={0.75}
                    className="featured-overlay"
                    transition="opacity 0.4s"
                    zIndex={1}
                  />

                  {/* Content Container */}
                  <Box
                    position="relative"
                    zIndex={2}
                    h="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    p={{ base: 6, md: 8 }}>
                    {/* Top Section - Badges */}
                    <Flex justify="space-between" align="flex-start" mb="auto">
                      <Badge
                        bg="blackAlpha.800"
                        color="white"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="bold"
                        backdropFilter="blur(10px)"
                        borderWidth="1px"
                        borderColor="whiteAlpha.300">
                        {project.category}
                      </Badge>
                      <Badge
                        bgGradient="linear(to-r, teal.500, pearlAqua.500)"
                        color="white"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="bold"
                        boxShadow="lg">
                        {project.badge}
                      </Badge>
                    </Flex>

                    {/* Bottom Section - Title, Description, Stats */}
                    <VStack align="flex-start" spacing={4} w="full">
                      {/* Title */}
                      <Heading
                        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                        color="white"
                        fontWeight="bold"
                        lineHeight="1.2"
                        textShadow="0 2px 8px rgba(0,0,0,0.5)">
                        {project.title}
                      </Heading>

                      {/* Description */}
                      <Text
                        fontSize={{ base: "md", md: "lg" }}
                        color="white"
                        lineHeight="1.7"
                        noOfLines={3}
                        textShadow="0 1px 4px rgba(0,0,0,0.5)">
                        {project.description}
                      </Text>

                      {/* CTA Arrow */}
                      <HStack
                        className="cta-arrow"
                        mt={4}
                        color="white"
                        fontSize="sm"
                        fontWeight="semibold"
                        spacing={2}
                        opacity={0.9}
                        transition="all 0.3s">
                        <Text>View Case Study</Text>
                        <Icon as={FaChevronRight} />
                      </HStack>
                    </VStack>
                  </Box>
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* All Projects Grid */}
      <Box bg={useColorModeValue("white", "gray.800")} py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            <Box textAlign="center">
              <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" mb={4}>
                All Projects
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="2xl" mx="auto">
                Browse through our complete collection of successful projects and
                innovative solutions.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {allProjects.map((project, index) => (
                <MotionCard
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  bg={cardBg}
                  borderRadius="xl"
                  overflow="hidden"
                  borderWidth="1px"
                  borderColor={borderColor}
                  _hover={{
                    "& > div:first-of-type": {
                      transform: "translateY(-4px)",
                      boxShadow: "xl",
                      "& > div": {
                        filter: "grayscale(0%)",
                      },
                    },
                  }}
                  cursor="pointer"
                  as={Link}
                  href={project.href}>
                  <Box
                    mb="4"
                    position="relative"
                    w="100%"
                    aspectRatio="16/9"
                    overflow="hidden"
                    bg="charcoal.700"
                    transition="all 0.3s">
                    <Box
                      w="100%"
                      h="100%"
                      position="relative"
                      sx={{
                        filter: "grayscale(100%)",
                        transition: "filter 0.3s ease",
                      }}>
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bgGradient="linear(to-t, blackAlpha.600, transparent)"
                      opacity={0.4}
                      zIndex={1}
                    />
                    <Badge
                      position="absolute"
                      top={2}
                      right={2}
                      bg="blackAlpha.700"
                      color="white"
                      px={2}
                      py={1}
                      borderRadius="md"
                      fontSize="xs"
                      backdropFilter="blur(10px)"
                      zIndex={2}>
                      {project.category}
                    </Badge>
                  </Box>
                  <CardBody p={5}>
                    <Heading fontSize="lg" mb={2} noOfLines={2}>
                      {project.title}
                    </Heading>
                    <Text color={textColor} fontSize="sm" noOfLines={3} mb={4}>
                      {project.description}
                    </Text>
                    <HStack>
                      <Text
                        fontSize="xs"
                        color={useColorModeValue("brand.600", "brand.400")}
                        fontWeight="semibold">
                        Learn More
                      </Text>
                      <Icon as={FaChevronRight} fontSize="xs" />
                    </HStack>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default PortfolioV2;
