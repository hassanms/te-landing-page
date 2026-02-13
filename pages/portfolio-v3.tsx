import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Icon,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import Head from "next/head";
import Script from "next/script";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const MotionBox = motion(Box);
const MotionCard = motion(Box);

const PortfolioV3 = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "gray.300");
  const bgColor = useColorModeValue("white", "gray.900");

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

  // Featured projects - image-focused, minimal text
  const featuredProjects = [
    {
      title: "Campaign OS",
      category: "SaaS Platform",
      image: "/assets/portfolio/New/Campaign_Porfolio.jpg",
      alt: "Campaign OS",
      href: "/portfolio/campaignos",
    },
    {
      title: "Macromascot",
      category: "Mobile App",
      image: "/assets/portfolio/New/Health_app.jpg",
      alt: "Macromascot",
      href: "/portfolio/macromascot-v2",
    },
    {
      title: "AutoSync Intelligence",
      category: "Enterprise SaaS",
      image: "/assets/portfolio/New/DADS_Sales_Reborn.jpg",
      alt: "AutoSync Intelligence",
      href: "/portfolio/autosync-intelligence",
    },
    {
      title: "Pack Assist",
      category: "AI Solution",
      image: "/assets/portfolio/New/Pack Assist – Revolutionizing Packaging Sales with a Cost-Optimized AI Agent.jpg",
      alt: "Pack Assist",
      href: "/portfolio/packassist",
    },
  ];

  // All portfolio items - minimal data
  const allProjects = [
    {
      title: "The Meatery",
      category: "AI Solution",
      image: "/assets/portfolio/New/The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency.jpg",
      alt: "The Meatery",
      href: "/portfolio/meatery",
    },
    {
      title: "Podcast Beacon",
      category: "SaaS Platform",
      image: "/assets/portfolio/mic.jpg",
      alt: "Podcast Beacon",
      href: "/portfolio/podcastbeacon",
    },
    {
      title: "Rack Room",
      category: "Enterprise SaaS",
      image: "/assets/portfolio/download.jpg",
      alt: "Rack Room",
      href: "/portfolio/rackroom",
    },
    {
      title: "Content Compass",
      category: "AI Solution",
      image: "/assets/portfolio/linkedin.jpg",
      alt: "Content Compass",
      href: "/portfolio/contentcompass",
    },
    {
      title: "SuperHeart",
      category: "Mobile App",
      image: "/assets/portfolio/food.webp",
      alt: "SuperHeart",
      href: "/portfolio/superheart",
    },
    {
      title: "Atarim",
      category: "SaaS Platform",
      image: "/assets/portfolio/atarim.png",
      alt: "Atarim",
      href: "/portfolio/atarim",
    },
    {
      title: "JarvisReach",
      category: "SaaS Platform",
      image: "/assets/portfolio/jarvis.png",
      alt: "JarvisReach",
      href: "/portfolio/jarvisreach",
    },
    {
      title: "Levellup",
      category: "AI Solution",
      image: "/assets/portfolio/level.png",
      alt: "Levellup",
      href: "/portfolio/levellup",
    },
    {
      title: "Farmin",
      category: "AI Solution",
      image: "/assets/portfolio/farmin.avif",
      alt: "Farmin",
      href: "/portfolio/farmin",
    },
    {
      title: "Bipcards",
      category: "SaaS Platform",
      image: "/assets/portfolio/bipcards.png",
      alt: "Bipcards",
      href: "/portfolio/bipcards",
    },
    {
      title: "Popcard",
      category: "SaaS Platform",
      image: "/assets/portfolio/popcard.png",
      alt: "Popcard",
      href: "/portfolio/popcard",
    },
    {
      title: "Artis",
      category: "Blockchain",
      image: "/assets/portfolio/Artis.png",
      alt: "Artis",
      href: "/portfolio/artis",
    },
    {
      title: "Alifa App",
      category: "AI Solution",
      image: "/assets/portfolio/file.jpg",
      alt: "Alifa App",
      href: "/portfolio/alifa",
    },
    {
      title: "MoodTube",
      category: "AI Solution",
      image: "/assets/portfolio/moodtube.png",
      alt: "MoodTube",
      href: "/portfolio/moodtube",
    },
    {
      title: "RAG ChatBot",
      category: "AI Solution",
      image: "/assets/portfolio/raggenai.png",
      alt: "RAG ChatBot",
      href: "/portfolio/genai",
    },
  ];

  return (
    <Box bg={bgColor}>
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
        canonicalUrl="https://techemulsion.com/portfolio-v3"
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

      {/* Minimal Hero Section */}
      <Box
        position="relative"
        py={{ base: 20, md: 28 }}
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
          <Box mb={12} display="flex" justifyContent="flex-end">
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
                  color: "white !important",
                }}>
                Portfolio
              </Text>
            </ButtonGroup>
          </Box>

          <VStack spacing={12} textAlign="center" maxW="4xl" mx="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <Heading
                fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                mb={6}
                color="white">
                Our{" "}
                <Text
                  as="span"
                  color="pearlAqua.500">
                  Portfolio
                </Text>
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="whiteAlpha.900"
                maxW="2xl"
                lineHeight="1.8"
                fontWeight="300">
                Showcasing innovative solutions that transform businesses
              </Text>
            </MotionBox>

            {/* Minimal Stats */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              w="full"
              mt={4}>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
                <Stat>
                  <StatLabel color="whiteAlpha.800" fontSize="sm" fontWeight="normal">
                    Projects
                  </StatLabel>
                  <StatNumber
                    fontSize={{ base: "3xl", md: "4xl" }}
                    color="pearlAqua.500"
                    fontWeight="bold">
                    <AnimatedCounter end={20} />
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel color="whiteAlpha.800" fontSize="sm" fontWeight="normal">
                    Technologies
                  </StatLabel>
                  <StatNumber
                    fontSize={{ base: "3xl", md: "4xl" }}
                    color="pearlAqua.500"
                    fontWeight="bold">
                    <AnimatedCounter end={15} />
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel color="whiteAlpha.800" fontSize="sm" fontWeight="normal">
                    Clients
                  </StatLabel>
                  <StatNumber
                    fontSize={{ base: "3xl", md: "4xl" }}
                    color="pearlAqua.500"
                    fontWeight="bold">
                    <AnimatedCounter end={50} />
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel color="whiteAlpha.800" fontSize="sm" fontWeight="normal">
                    Years
                  </StatLabel>
                  <StatNumber
                    fontSize={{ base: "3xl", md: "4xl" }}
                    color="pearlAqua.500"
                    fontWeight="bold">
                    <AnimatedCounter end={5} />
                  </StatNumber>
                </Stat>
              </SimpleGrid>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Featured Projects - Large Image Cards */}
      <Box bg={bgColor} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            <Box textAlign="center">
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color={useColorModeValue("pearlAqua.600", "pearlAqua.400")}
                letterSpacing="wide"
                textTransform="uppercase"
                mb={2}>
                Featured Work
              </Text>
              <Heading fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" mb={4}>
                Our Latest Innovations
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
              {featuredProjects.map((project, index) => (
                <MotionCard
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  as={Link}
                  href={project.href}
                  position="relative"
                  h={{ base: "400px", md: "500px", lg: "600px" }}
                  borderRadius="2xl"
                  overflow="hidden"
                  cursor="pointer"
                  sx={{
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    _hover: {
                      transform: "translateY(-8px)",
                      "& .project-image": {
                        transform: "scale(1.08)",
                        filter: "grayscale(0%) brightness(1.05) !important",
                      },
                      "& .project-overlay": {
                        opacity: 0.95,
                      },
                      "& .project-content": {
                        transform: "translateY(0)",
                      },
                    },
                  }}
                  boxShadow="xl">
                  {/* Background Image */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    zIndex={0}
                    className="project-image"
                    sx={{
                      filter: "grayscale(40%) brightness(0.8)",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      "& img": {
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      },
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

                  {/* Gradient Overlay */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgGradient="linear(to-t, blackAlpha.900, blackAlpha.700, blackAlpha.500, transparent)"
                    opacity={0.7}
                    className="project-overlay"
                    transition="opacity 0.5s"
                    zIndex={1}
                  />

                  {/* Content - Minimal, appears on hover */}
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p={{ base: 6, md: 8 }}
                    zIndex={2}
                    className="project-content"
                    transform="translateY(20px)"
                    transition="transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)">
                    <Badge
                      bg="whiteAlpha.200"
                      backdropFilter="blur(10px)"
                      color="white"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="semibold"
                      mb={3}
                      borderWidth="1px"
                      borderColor="whiteAlpha.300">
                      {project.category}
                    </Badge>
                    <Heading
                      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                      color="white"
                      fontWeight="bold"
                      mb={2}
                      textShadow="0 2px 12px rgba(0,0,0,0.5)">
                      {project.title}
                    </Heading>
                    <HStack
                      color="white"
                      fontSize="sm"
                      fontWeight="medium"
                      spacing={2}
                      opacity={0.9}
                      mt={4}>
                      <Text>View Project</Text>
                      <Icon as={FaChevronRight} />
                    </HStack>
                  </Box>
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* All Projects Grid - Clean Image Cards */}
      <Box bg={useColorModeValue("gray.50", "gray.800")} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            <Box textAlign="center">
              <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" mb={4}>
                All Projects
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="xl" mx="auto">
                Explore our complete collection of innovative solutions
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={6}>
              {allProjects.map((project, index) => (
                <MotionCard
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  as={Link}
                  href={project.href}
                  position="relative"
                  aspectRatio="4/3"
                  borderRadius="xl"
                  overflow="hidden"
                  cursor="pointer"
                  sx={{
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    _hover: {
                      transform: "translateY(-6px)",
                      boxShadow: "2xl",
                      "& .project-image-small": {
                        transform: "scale(1.1)",
                        filter: "grayscale(0%) brightness(1.1) !important",
                      },
                      "& .project-overlay-small": {
                        opacity: 0.9,
                      },
                      "& .project-title-small": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                  boxShadow="lg">
                  {/* Background Image */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    zIndex={0}
                    className="project-image-small"
                    sx={{
                      filter: "grayscale(100%) brightness(0.7)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "& img": {
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      },
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

                  {/* Gradient Overlay */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgGradient="linear(to-t, blackAlpha.800, blackAlpha.600, transparent)"
                    opacity={0.6}
                    className="project-overlay-small"
                    transition="opacity 0.4s"
                    zIndex={1}
                  />

                  {/* Minimal Content */}
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p={4}
                    zIndex={2}
                    className="project-title-small"
                    opacity={0.8}
                    transform="translateY(10px)"
                    transition="all 0.4s">
                    <Badge
                      bg="whiteAlpha.200"
                      backdropFilter="blur(8px)"
                      color="white"
                      px={2}
                      py={1}
                      borderRadius="md"
                      fontSize="xs"
                      fontWeight="medium"
                      mb={2}
                      borderWidth="1px"
                      borderColor="whiteAlpha.300">
                      {project.category}
                    </Badge>
                    <Heading
                      fontSize={{ base: "lg", md: "xl" }}
                      color="white"
                      fontWeight="bold"
                      textShadow="0 2px 8px rgba(0,0,0,0.5)"
                      noOfLines={1}>
                      {project.title}
                    </Heading>
                  </Box>
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default PortfolioV3;
