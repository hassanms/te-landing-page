"use client";

import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import Head from "next/head";
import Script from "next/script";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { FaChevronRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const MotionBox = motion(Box);
const MotionCard = motion(Box);

// Design-accurate flip card - from portfolio-v2
function PortfolioCardV2({
  title,
  platform,
  industry,
  image,
  href,
}: {
  title: string;
  platform: string;
  industry: string;
  image: string;
  href: string;
}) {
  const { colorMode } = useColorMode();
  return (
    <Link
      as={NextLink}
      href={href}
      _hover={{ textDecoration: "none" }}
      display="block"
      h="450px"
      position="relative"
      role="group"
      sx={{
        perspective: "1000px",
      }}
    >
      <Box
        position="relative"
        w="100%"
        h="100%"
        transition="transform 0.7s ease"
        sx={{
          transformStyle: "preserve-3d",
          "&": { backfaceVisibility: "hidden" },
        }}
        _groupHover={{
          transform: "rotateY(180deg)",
        }}
      >
        {/* Front - Image */}
        <Box
          position="absolute"
          inset={0}
          w="100%"
          h="100%"
          overflow="hidden"
          boxShadow="2xl"
          sx={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Box
            position="relative"
            w="100%"
            h="100%"
            transition="transform 0.7s"
            _groupHover={{
              transform: "scale(1.1)",
            }}
          >
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Box>
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, blackAlpha.200, transparent)"
            opacity={0}
            transition="opacity 0.3s"
            _groupHover={{ opacity: 1 }}
          />
        </Box>

        {/* Back - Light mode: dark brand (evergreen like footer); Dark mode: teal gradient */}
        <Box
          position="absolute"
          inset={0}
          w="100%"
          h="100%"
          overflow="hidden"
          boxShadow="2xl"
          bg={colorMode === "light" ? "evergreen.500" : undefined}
          sx={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            ...(colorMode === "dark" && {
              background:
                "linear-gradient(135deg, #008080 0%, #00A39A 50%, #008080 100%)",
            }),
          }}
          p={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Box position="absolute" inset={0} opacity={colorMode === "light" ? 0.06 : 0.1}>
            <Box
              position="absolute"
              top={0}
              left={0}
              w="8rem"
              h="8rem"
              bg="white"
              borderRadius="full"
              filter="blur(48px)"
            />
            <Box
              position="absolute"
              bottom={0}
              right={0}
              w="10rem"
              h="10rem"
              bg="white"
              borderRadius="full"
              filter="blur(48px)"
            />
          </Box>

          <VStack
            spacing={6}
            position="relative"
            zIndex={1}
            maxW="xs"
          >
            <Heading
              as="h3"
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              lineHeight="tight"
              textShadow="0 2px 4px rgba(0,0,0,0.2)"
            >
              {title}
            </Heading>

            <HStack spacing={2} flexWrap="wrap" justify="center" gap={2}>
              <Badge
                px={4}
                py={2}
                bg="white"
                color={colorMode === "light" ? "evergreen.800" : "teal.800"}
                borderRadius="full"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="wide"
                textTransform="uppercase"
                borderWidth="1px"
                borderColor={colorMode === "light" ? "whiteAlpha.500" : "whiteAlpha.400"}
                boxShadow="sm"
              >
                {industry}
              </Badge>
              <Badge
                px={4}
                py={2}
                bg="white"
                color={colorMode === "light" ? "evergreen.800" : "teal.800"}
                borderRadius="full"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="wide"
                textTransform="uppercase"
                borderWidth="1px"
                borderColor={colorMode === "light" ? "whiteAlpha.500" : "whiteAlpha.400"}
                boxShadow="sm"
              >
                {platform}
              </Badge>
            </HStack>

            <Text
              color="white"
              fontSize="md"
              fontWeight="semibold"
              textShadow="0 1px 2px rgba(0,0,0,0.15)"
            >
              View full case study
            </Text>

            <HStack pt={2}>
              <Box
                w="14"
                h="14"
                borderRadius="full"
                bg="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="transform 0.3s"
                _groupHover={{ transform: "scale(1.1)" }}
                boxShadow="md"
              >
                <Icon as={FiArrowUpRight} w={6} h={6} color={colorMode === "light" ? "evergreen.500" : "teal.500"} />
              </Box>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Link>
  );
}

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

// Tech Emulsion portfolio data - platform + industry tags
const portfolioItems = [
  { id: 1, title: "AVL Copilot", platform: "AI Solution", industry: "Enterprise", image: "/assets/portfolio/New/AVL-CoPilot-hero.png", href: "/portfolio/avl-copilot" },
  { id: 2, title: "Campaign Management System", platform: "SaaS Platform", industry: "Advertising", image: "/assets/portfolio/New/Campaign_Porfolio.jpg", href: "/portfolio/campaignos" },
  { id: 3, title: "Macromascot", platform: "Mobile App", industry: "Healthcare", image: "/assets/portfolio/New/Health_app.jpg", href: "/portfolio/macromascot" },
  { id: 4, title: "AutoCar Intelligence", platform: "Enterprise SaaS", industry: "Automotive", image: "/assets/portfolio/New/DADS_Sales_Reborn.jpg", href: "/portfolio/autosync-intelligence" },
  { id: 5, title: "Pack Assist", platform: "AI Solution", industry: "Packaging", image: "/assets/portfolio/New/Pack Assist.png", href: "/portfolio/packassist" },
  { id: 6, title: "The Meatery", platform: "AI Solution", industry: "E-commerce", image: "/assets/portfolio/New/The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency.jpg", href: "/portfolio/meatery" },
  { id: 7, title: "Podcast Beacon", platform: "SaaS Platform", industry: "Media", image: "/assets/portfolio/mic.jpg", href: "/portfolio/podcastbeacon" },
  { id: 8, title: "Rack Room", platform: "Enterprise SaaS", industry: "Retail", image: "/assets/portfolio/download.jpg", href: "/portfolio/rackroom" },
  { id: 9, title: "Content Compass", platform: "AI Solution", industry: "Marketing", image: "/assets/portfolio/linkedin.jpg", href: "/portfolio/contentcompass" },
  { id: 10, title: "SuperHeart", platform: "Mobile App", industry: "Healthcare", image: "/assets/portfolio/food.webp", href: "/portfolio/superheart" },
  { id: 11, title: "Atarim", platform: "SaaS Platform", industry: "Design & Development", image: "/assets/portfolio/atarim.png", href: "/portfolio/atarim" },
  { id: 12, title: "JarvisReach", platform: "SaaS Platform", industry: "Sales & Marketing", image: "/assets/portfolio/jarvis.png", href: "/portfolio/jarvisreach" },
  { id: 13, title: "Levellup", platform: "AI Solution", industry: "Gaming", image: "/assets/portfolio/level.png", href: "/portfolio/levellup" },
  { id: 14, title: "Farmin", platform: "AI Solution", industry: "Agriculture", image: "/assets/portfolio/farmin.avif", href: "/portfolio/farmin" },
  { id: 15, title: "Bipcards", platform: "SaaS Platform", industry: "Business", image: "/assets/portfolio/bipcards.png", href: "/portfolio/bipcards" },
  { id: 16, title: "Popcard", platform: "SaaS Platform", industry: "Business", image: "/assets/portfolio/popcard.png", href: "/portfolio/popcard" },
  { id: 17, title: "Artis", platform: "Blockchain", industry: "NFT & Digital Art", image: "/assets/portfolio/Artis.png", href: "/portfolio/artis" },
  { id: 18, title: "Alifa App", platform: "AI Solution", industry: "AI & Automation", image: "/assets/portfolio/file.jpg", href: "/portfolio/alifa" },
  { id: 19, title: "MoodTube", platform: "AI Solution", industry: "Media & Entertainment", image: "/assets/portfolio/moodtube.png", href: "/portfolio/moodtube" },
  { id: 20, title: "RAG ChatBot", platform: "AI Solution", industry: "Enterprise", image: "/assets/portfolio/raggenai.png", href: "/portfolio/genai" },
];

export default function PortfolioV4() {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.900");
  const sectionBg = useColorModeValue("gray.50", "charcoal.900");

  // Hero overlay - light: teal-tinted so image shows through + brand alignment; dark: dark gradient
  const heroOverlayGradient = useColorModeValue(
    "linear(to-b, rgba(0,26,26,0.85) 0%, rgba(0,76,76,0.7) 30%, rgba(0,102,102,0.55) 60%, rgba(0,128,128,0.4) 100%)",
    "linear(to-b, blackAlpha.800 0%, blackAlpha.700 30%, charcoal.900 100%)"
  );
  const heroTextShadow = useColorModeValue(
    "0 1px 2px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.15)",
    "0 1px 3px rgba(0,0,0,0.5)"
  );
  const heroStatLabelColor = useColorModeValue("whiteAlpha.900", "whiteAlpha.900");
  const heroStatNumberColor = useColorModeValue("white", "pearlAqua.400");
  const heroBreadcrumbColor = useColorModeValue("white", "white");
  const sectionDividerGradient = useColorModeValue(
    "linear(to-r, transparent, teal.500, transparent)",
    "linear(to-r, transparent, pearlAqua.500, transparent)"
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
        title="Our Portfolio - Tech Emulsion"
        description="Explore Tech Emulsion's diverse portfolio of successful projects including AI-powered tools, SaaS platforms, mobile apps, blockchain solutions, and custom software development for global clients."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio-v4"
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

      {/* Hero Section - portfolio style, light mode uses brand teal overlay */}
      <Box
        position="relative"
        py={{ base: 20, md: 28 }}
        overflow="hidden"
        sx={{
          backgroundImage: "url('/assets/portfolio/porfolio_bg_image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay: light mode = brand teal gradient, dark mode = dark gradient */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient={heroOverlayGradient}
          zIndex={0}
        />
        <BackgroundGradient height="100%" zIndex={0} opacity={colorMode === "light" ? 0.05 : 0.25} />
        {/* Light mode: branded bottom transition - soft teal fade bridging hero to content */}
        {colorMode === "light" && (
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            h={{ base: "120px", md: "160px" }}
            zIndex={0}
            bgGradient="linear(to-b, transparent 0%, rgba(230,247,247,0.5) 50%, #E6F7F7 100%)"
            pointerEvents="none"
          />
        )}
        <Container maxW="container.xl" position="relative" zIndex={1}>
          {/* Breadcrumb */}
          <Box mb={12} display="flex" justifyContent="flex-end" sx={{ textShadow: heroTextShadow }}>
            <ButtonGroup
              style={{
                backgroundColor: "none",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: heroBreadcrumbColor,
                  padding: "0",
                  textShadow: heroTextShadow,
                  "&:hover": {
                    bg: "none",
                    color: "whiteAlpha.900",
                  },
                }}
              >
                Home
              </ButtonLink>
              <Icon as={FaChevronRight} color={heroBreadcrumbColor} boxSize={4} />
              <Text as="span" ml="2" color={heroBreadcrumbColor} fontWeight="500">
                Portfolio
              </Text>
            </ButtonGroup>
          </Box>

          <VStack spacing={8} textAlign="center" maxW="4xl" mx="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading
                fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                mb={1}
                color="white"
                textShadow={heroTextShadow}
              >
                Our{" "}
                <Text as="span" color="white" textShadow={heroTextShadow}>
                  Portfolio
                </Text>
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="white"
                maxW="2xl"
                lineHeight="1.5"
                fontWeight="400"
                textShadow={heroTextShadow}
              >
                Showcasing innovative solutions that transform businesses
              </Text>
            </MotionBox>

            {/* Stats */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              w="full"
              mt={12}
            >
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
                <Box textAlign="center">
                  <Text color={heroStatLabelColor} fontSize="sm" fontWeight="medium" textShadow={heroTextShadow}>
                    Projects
                  </Text>
                  <Heading fontSize={{ base: "3xl", md: "4xl" }} color={heroStatNumberColor} fontWeight="bold" textShadow={heroTextShadow}>
                    <AnimatedCounter end={20} />
                  </Heading>
                </Box>
                <Box textAlign="center">
                  <Text color={heroStatLabelColor} fontSize="sm" fontWeight="medium" textShadow={heroTextShadow}>
                    Technologies
                  </Text>
                  <Heading fontSize={{ base: "3xl", md: "4xl" }} color={heroStatNumberColor} fontWeight="bold" textShadow={heroTextShadow}>
                    <AnimatedCounter end={15} />
                  </Heading>
                </Box>
                <Box textAlign="center">
                  <Text color={heroStatLabelColor} fontSize="sm" fontWeight="medium" textShadow={heroTextShadow}>
                    Clients
                  </Text>
                  <Heading fontSize={{ base: "3xl", md: "4xl" }} color={heroStatNumberColor} fontWeight="bold" textShadow={heroTextShadow}>
                    <AnimatedCounter end={50} />
                  </Heading>
                </Box>
                <Box textAlign="center">
                  <Text color={heroStatLabelColor} fontSize="sm" fontWeight="medium" textShadow={heroTextShadow}>
                    Years
                  </Text>
                  <Heading fontSize={{ base: "3xl", md: "4xl" }} color={heroStatNumberColor} fontWeight="bold" textShadow={heroTextShadow}>
                    <AnimatedCounter end={5} />
                  </Heading>
                </Box>
              </SimpleGrid>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Cards Section - from portfolio-v2 */}
      <Box
        bg={sectionBg}
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
        }}
      >
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {portfolioItems.map((item) => (
                <MotionCard
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <PortfolioCardV2
                    title={item.title}
                    platform={item.platform}
                    industry={item.industry}
                    image={item.image}
                    href={item.href}
                  />
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
