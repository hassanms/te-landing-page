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
  const headingColor = useColorModeValue("gray.800", "white");
  const statLabelColor = useColorModeValue("gray.600", "whiteAlpha.800");
  const accentColor = useColorModeValue("teal.500", "pearlAqua.500");
  const heroOverlayGradient = useColorModeValue(
    "linear(to-b, blackAlpha.700 0%, blackAlpha.600 25%, blackAlpha.500 55%, blackAlpha.300 85%, blackAlpha.200 100%)",
    "linear(to-b, blackAlpha.700 0%, blackAlpha.600 50%, gray.900 100%)"
  );
  const heroTextShadow = useColorModeValue(
    "0 1px 2px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)",
    "0 1px 3px rgba(0,0,0,0.5)"
  );
  const heroStatLabelColor = useColorModeValue("whiteAlpha.900", "whiteAlpha.900");
  const heroStatNumberColor = useColorModeValue("white", "pearlAqua.400");
  const sectionDividerGradient = useColorModeValue(
    "linear(to-r, transparent, teal.500, transparent)",
    "linear(to-r, transparent, pearlAqua.500, transparent)"
  );
  // Card image: brighter in light mode, stronger brighten on hover
  const cardImageFilter = useColorModeValue(
    "grayscale(15%) brightness(0.95)",
    "grayscale(40%) brightness(0.85)"
  );
  const cardImageFilterHover = useColorModeValue(
    "grayscale(0%) brightness(1.12)",
    "grayscale(0%) brightness(1.05)"
  );
  const cardOverlayOpacity = useColorModeValue(0.45, 0.55);

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

  // All portfolio items (case studies) - minimal data
  const allProjects = [
    {
      title: "Campaign Management System",
      category: "SaaS Platform",
      image: "/assets/portfolio/New/Campaign_Porfolio.jpg",
      alt: "Campaign Management System",
      href: "/portfolio/campaignos",
    },
    {
      title: "Macromascot",
      category: "Mobile App",
      image: "/assets/portfolio/New/Health_app.jpg",
      alt: "Macromascot",
      href: "/portfolio/macromascot",
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
    {
      title: "AVL-CoPilot",
      category: "AI Solution",
      image: "/assets/portfolio/New/ai-chatbot-avl-case-study.png",
      alt: "AVL-CoPilot",
      href: "/portfolio/avl-copilot",
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

      {/* Hero Section - blends into content below */}
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
        {/* Overlay: adapts to color mode */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient={heroOverlayGradient}
          zIndex={0}
        />
        <BackgroundGradient height="100%" zIndex={0} opacity={colorMode === "light" ? 0.15 : 0.3} />
        <Container maxW="container.xl" position="relative" zIndex={1}>
          {/* Breadcrumb - high contrast on hero */}
          <Box mb={12} display="flex" justifyContent="flex-end" sx={{ textShadow: heroTextShadow }}>
            <ButtonGroup
              style={{
                backgroundColor: "none",
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
                  padding: "0",
                  textShadow: heroTextShadow,
                  "&:hover": {
                    bg: "none",
                    color: "whiteAlpha.900",
                  },
                }}>
                Home
              </ButtonLink>
              <Icon as={FaChevronRight} color="white" boxSize={4} />
              <Text as="span" ml="2" color="white" fontWeight="500">
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
                color="white"
                textShadow={heroTextShadow}>
                Our{" "}
                <Text
                  as="span"
                  color="white"
                  textShadow={heroTextShadow}>
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
                color="white"
                maxW="2xl"
                lineHeight="1.8"
                fontWeight="400"
                textShadow={heroTextShadow}>
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
                  <StatLabel color={heroStatLabelColor} fontSize="sm" fontWeight="medium" textShadow={heroTextShadow}>
                    Projects
                  </StatLabel>
                  <StatNumber
                    fontSize={{ base: "3xl", md: "4xl" }}
                    color={heroStatNumberColor}
                    fontWeight="bold"
                    textShadow={heroTextShadow}>
                    <AnimatedCounter end={20} />
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel color={heroStatLabelColor} fontSize="sm" fontWeight="medium" textShadow={heroTextShadow}>
                    Technologies
                  </StatLabel>
                  <StatNumber
                    fontSize={{ base: "3xl", md: "4xl" }}
                    color={heroStatNumberColor}
                    fontWeight="bold"
                    textShadow={heroTextShadow}>
                    <AnimatedCounter end={15} />
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel color={heroStatLabelColor} fontSize="sm" fontWeight="medium" textShadow={heroTextShadow}>
                    Clients
                  </StatLabel>
                  <StatNumber
                    fontSize={{ base: "3xl", md: "4xl" }}
                    color={heroStatNumberColor}
                    fontWeight="bold"
                    textShadow={heroTextShadow}>
                    <AnimatedCounter end={50} />
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel color={heroStatLabelColor} fontSize="sm" fontWeight="medium" textShadow={heroTextShadow}>
                    Years
                  </StatLabel>
                  <StatNumber
                    fontSize={{ base: "3xl", md: "4xl" }}
                    color={heroStatNumberColor}
                    fontWeight="bold"
                    textShadow={heroTextShadow}>
                    <AnimatedCounter end={5} />
                  </StatNumber>
                </Stat>
              </SimpleGrid>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* All Projects - same dark base, accent aligned with hero */}
      <Box
        bg={bgColor}
        py={{ base: 16, md: 24 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgGradient: sectionDividerGradient,
          opacity: 0.4,
        }}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            <Box textAlign="center">
              <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" mb={4} color={headingColor}>
                All{" "}
                <Text as="span" color={accentColor}>
                  Projects
                </Text>
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
                      boxShadow: "xl",
                      "& .project-image-small": {
                        transform: "scale(1.08)",
                        filter: `${cardImageFilterHover} !important`,
                      },
                      "& .project-overlay-small": {
                        opacity: 0.85,
                      },
                      "& .project-title-small": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                  boxShadow="lg">
                  {/* Background Image - subtle grayscale so section feels aligned with hero */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    zIndex={0}
                    className="project-image-small"
                    sx={{
                      filter: cardImageFilter,
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
                        objectPosition: "right",
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
                    bgGradient="linear(to-t, blackAlpha.800, blackAlpha.500, transparent)"
                    opacity={cardOverlayOpacity}
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
