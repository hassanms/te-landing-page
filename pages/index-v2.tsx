"use client";

import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Box,
  Stack,
  HStack,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  VStack,
  Divider,
  Avatar,
  Card,
  CardBody,
  SimpleGrid,
  Badge,
  Flex,
  useBreakpointValue,
  Tooltip,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { keyframes } from "@emotion/react";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { FallInPlace } from "components/motion/fall-in-place";
import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";
import { Faq } from "components/faq";
import { FiLinkedin, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from "@saas-ui/react";
import Contact from "components/Contact";
import OutsourceIcon from "components/icons/Outsource";
import StaffIcon from "components/icons/Staff";
import ContractorsIcon from "components/icons/Contractors";
import TeamsIcon from "components/icons/Teams";
import dynamic from "next/dynamic";
import animationData1 from "../public/assets/Animation/screen.json";
import animationData2 from "../public/assets/Animation/mobile.json";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Script from "next/script";
import faq from "data/faq";
import testimonials from "data/testimonials";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false },
);

const MotionBox = motion(Box);
const MotionCard = motion(Box);

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const glowAnimation = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

// Modern Theme - Using brand colors
const theme = {
  bg: "charcoal.800",
  bgSecondary: "charcoal.900",
  bgCard: "charcoal.700",
  text: "lightGrey.400",
  textLight: "white",
  textMuted: "lightGrey.500",
  accent: "pearlAqua.500",
  accentLight: "pearlAqua.400",
  accentDark: "pearlAqua.600",
  teal: "teal.500",
  border: "whiteAlpha.100",
  gradient: "linear(to-r, pearlAqua.600, pearlAqua.500, teal.500)",
  glass: "rgba(255, 255, 255, 0.05)",
};

const HomeV2: NextPage = () => {
  return (
    <Box bg={theme.bg} minH="100vh" color={theme.text} position="relative" overflow="hidden">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF"
      />
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
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

      <EnhancedSEO
        title="Tech Emulsion | Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business"
        description="Transform your business with cutting-edge SaaS platforms, mobile applications, and AI agents. Tech Emulsion specializes in SaaS development services, AI agent development, and custom software solutions."
        pageType="home"
        canonicalUrl="https://techemulsion.com"
      />

      {/* Animated background elements */}
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex={0}
        pointerEvents="none"
        overflow="hidden">
        <Box
          position="absolute"
          top="20%"
          left="10%"
          w="400px"
          h="400px"
          bg="pearlAqua.500"
          borderRadius="full"
          filter="blur(100px)"
          opacity={0.1}
          animation={`${floatAnimation} 8s ease-in-out infinite`}
        />
        <Box
          position="absolute"
          bottom="20%"
          right="10%"
          w="500px"
          h="500px"
          bg="teal.500"
          borderRadius="full"
          filter="blur(120px)"
          opacity={0.1}
          animation={`${floatAnimation} 10s ease-in-out infinite`}
          style={{ animationDelay: "2s" }}
        />
      </Box>

      <Box position="relative" zIndex={1}>
        <HeroSectionV2 />
        <ServicesSectionV2 />
        <PortfolioSectionV2 />
        <SocialProofSectionV2 />
        <TestimonialsSectionV2 />
        <TechnologySectionV2 />
        <BlogSectionV2 />
        <FaqSectionV2 />
        <Divider borderColor={theme.border} />
        <Contact />
      </Box>
    </Box>
  );
};

const HeroSectionV2: React.FC = () => {
  const [currentAnimation, setCurrentAnimation] = useState<any>(animationData1);
  const isSmall = useBreakpointValue({ base: true, md: true, lg: false });
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    if (isSmall) return;
    const interval = setInterval(() => {
      setCurrentAnimation((prev: any) =>
        prev === animationData1 ? (animationData2 as any) : (animationData1 as any)
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [isSmall]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch((err) => console.error("Video play error:", err));
  }, []);

  return (
    <Box
      ref={heroRef}
      position="relative"
      minH={{ base: "90vh", lg: "100vh" }}
      display="flex"
      alignItems="center"
      overflow="hidden"
      bg={theme.bg}>
      {/* Video background */}
      {!isSmall && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
          opacity={0.3}>
          <video
            ref={videoRef}
            src="/assets/Animation/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      )}

      {/* Gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-b, charcoal.900 0%, charcoal.800 50%, charcoal.800 100%)"
        zIndex={1}
        opacity={0.8}
      />

      <Container maxW="container.xl" position="relative" zIndex={2} py={{ base: 20, lg: 32 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }}
          gap={{ base: 12, lg: 16 }}
          alignItems="center">
          {/* Left Column - Content */}
          <MotionBox style={{ opacity, scale }}>
            <VStack align={{ base: "center", lg: "flex-start" }} spacing={8}>
              <Heading
                fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
                fontWeight="900"
                lineHeight="1.1"
                color={theme.textLight}
                textAlign={{ base: "center", lg: "left" }}>
                Build the Future of{" "}
                <Text
                  as="span"
                  bgGradient={theme.gradient}
                  bgClip="text"
                  color="transparent">
                  Digital Business
                </Text>
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={theme.text}
                maxW="2xl"
                textAlign={{ base: "center", lg: "left" }}
                lineHeight="1.8">
                We craft exceptional SaaS platforms, mobile experiences, and AI
                agents that transform businesses and delight users. From concept
                to scale, we're your partners in innovation.
              </Text>

              <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
                <Button
                  size="lg"
                  bg={theme.accent}
                  color="white"
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="bold"
                  borderRadius="xl"
                  _hover={{
                    bg: theme.accentLight,
                    transform: "translateY(-2px)",
                    boxShadow: `0 20px 40px -12px ${theme.accent}`,
                  }}
                  transition="all 0.3s"
                  onClick={() => {
                    // @ts-ignore
                    if (window.Calendly) {
                      // @ts-ignore
                      window.Calendly.initPopupWidget({
                        url: "https://calendly.com/hassanms/discovery-call",
                      });
                    }
                  }}>
                  Start Your Project
                  <Icon as={FiArrowRight} ml={2} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor={theme.border}
                  color={theme.textLight}
                  px={8}
                  py={6}
                  fontSize="lg"
                  borderRadius="xl"
                  _hover={{
                    borderColor: theme.accent,
                    color: theme.accent,
                    bg: theme.glass,
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s">
                  View Portfolio
                </Button>
              </HStack>

              {/* Trusted by */}
              <VStack spacing={4} align={{ base: "center", lg: "flex-start" }} mt={8}>
                <Text fontSize="sm" color={theme.textMuted} fontWeight="medium">
                  Trusted by industry leaders
                </Text>
                <HStack spacing={8} flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
                  {[
                    { src: "/assets/clients/Bubble.1.png", name: "Bubble" },
                    { src: "/assets/clients/Pensa-white.png", name: "Pensa" },
                    { src: "/assets/clients/atarim-white.svg", name: "Atarim" },
                    { src: "/assets/clients/nearshore.png", name: "NearShore" },
                  ].map((client, idx) => (
                    <Box
                      key={idx}
                      opacity={0.7}
                      _hover={{ opacity: 1, transform: "scale(1.1)" }}
                      transition="all 0.3s">
                      <Image
                        src={client.src}
                        alt={client.name}
                        width={100}
                        height={60}
                        style={{
                          objectFit: "contain",
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                    </Box>
                  ))}
                </HStack>
              </VStack>
            </VStack>
          </MotionBox>

          {/* Right Column - Animation */}
          {!isSmall && (
            <MotionBox
              style={{ opacity, scale }}
              display={{ base: "none", lg: "block" }}>
              <Box
                position="relative"
                w="100%"
                h="600px"
                borderRadius="3xl"
                overflow="hidden"
                bg={theme.bgCard}
                border="1px solid"
                borderColor={theme.border}
                boxShadow="2xl">
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="radial(circle at top right, pearlAqua.500, transparent)"
                  opacity={0.2}
                />
                <Box position="relative" w="100%" h="100%" p={8}>
                  <Player autoplay loop src={currentAnimation} style={{ width: "100%", height: "100%" }} />
                </Box>
              </Box>
            </MotionBox>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

const ServicesSectionV2: React.FC = () => {
  const services = [
    {
      title: "Software Outsourcing",
      description: "Complete ownership of your software development from start to finish.",
      icon: OutsourceIcon,
      gradient: "linear(to-br, pearlAqua.600, pearlAqua.500)",
    },
    {
      title: "Staff Augmentation",
      description: "Seamlessly expand your team with pre-vetted developers.",
      icon: StaffIcon,
      gradient: "linear(to-br, teal.600, teal.500)",
    },
    {
      title: "Dedicated Teams",
      description: "Integrate a fully functional team for faster project delivery.",
      icon: TeamsIcon,
      gradient: "linear(to-br, pearlAqua.500, teal.500)",
    },
    {
      title: "Offshore Contractors",
      description: "Leverage our global talent pool for cost-effective solutions.",
      icon: ContractorsIcon,
      gradient: "linear(to-br, teal.500, pearlAqua.600)",
    },
  ];

  return (
    <Box bg={theme.bg} py={{ base: 20, md: 32 }} id="services">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              bg={theme.glass}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor={theme.border}
              color={theme.accent}
              fontSize="sm"
              fontWeight="semibold"
              mb={4}>
              Our Services
            </Badge>
            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="900"
              color={theme.textLight}
              mb={6}>
              How We{" "}
              <Text as="span" bgGradient={theme.gradient} bgClip="text" color="transparent">
                Empower
              </Text>{" "}
              Your Business
            </Heading>
            <Text fontSize="xl" color={theme.text} lineHeight="1.8">
              Flexible engagement models tailored to your needs and goals
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            {services.map((service, idx) => (
              <MotionCard
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                as={Card}
                bg={theme.bgCard}
                border="1px solid"
                borderColor={theme.border}
                borderRadius="2xl"
                p={8}
                _hover={{
                  borderColor: theme.accent,
                  transform: "translateY(-8px)",
                  boxShadow: `0 25px 50px -12px ${theme.accent}40`,
                  transition: "all 0.4s",
                }}
                position="relative"
                overflow="hidden">
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  w="200px"
                  h="200px"
                  bgGradient={service.gradient}
                  borderRadius="full"
                  filter="blur(80px)"
                  opacity={0.2}
                />
                <VStack align="flex-start" spacing={4} position="relative" zIndex={1}>
                  <Box
                    p={4}
                    borderRadius="xl"
                    bgGradient={service.gradient}
                    boxShadow={`0 10px 30px -10px ${theme.accent}60`}>
                    <Icon as={service.icon} boxSize={8} color="white" />
                  </Box>
                  <Heading fontSize="2xl" fontWeight="bold" color={theme.textLight}>
                    {service.title}
                  </Heading>
                  <Text color={theme.text} lineHeight="1.8">
                    {service.description}
                  </Text>
                </VStack>
              </MotionCard>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

const PortfolioSectionV2: React.FC = () => {
  const portfolioItems = [
    {
      title: "Campaign Management System",
      category: "SaaS Platform",
      image: "/assets/portfolio/New/Campaign_Porfolio.jpg",
      href: "/portfolio/campaignos",
    },
    {
      title: "Macromascot",
      category: "Mobile App",
      image: "/assets/portfolio/New/Health_app.jpg",
      href: "/portfolio/macromascot-v2",
    },
    {
      title: "AutoSync Intelligence",
      category: "Enterprise SaaS",
      image: "/assets/portfolio/New/DADS_Sales_Reborn.jpg",
      href: "/portfolio/autosync-intelligence",
    },
    {
      title: "Pack Assist",
      category: "AI Solution",
      image: "/assets/portfolio/New/Pack Assist – Revolutionizing Packaging Sales with a Cost-Optimized AI Agent.jpg",
      href: "/portfolio/packassist",
    },
    {
      title: "The Meatery",
      category: "AI Solution",
      image: "/assets/portfolio/New/The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency.jpg",
      href: "/portfolio/meatery",
    },
    {
      title: "Podcast Beacon",
      category: "SaaS Platform",
      image: "/assets/portfolio/mic.jpg",
      href: "/portfolio/podcastbeacon",
    },
  ];

  return (
    <Box bg={theme.bgSecondary} py={{ base: 20, md: 32 }} id="portfolio">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              bg={theme.glass}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor={theme.border}
              color={theme.accent}
              fontSize="sm"
              fontWeight="semibold"
              mb={4}>
              Our Work
            </Badge>
            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="900"
              color={theme.textLight}
              mb={6}>
              Recent{" "}
              <Text as="span" bgGradient={theme.gradient} bgClip="text" color="transparent">
                Projects
              </Text>
            </Heading>
            <Text fontSize="xl" color={theme.text} lineHeight="1.8" mb={8}>
              Showcasing innovative solutions that transform businesses
            </Text>
            <ButtonLink
              href="/portfolio-v3"
              size="lg"
              bg={theme.accent}
              color="white"
              px={8}
              borderRadius="xl"
              _hover={{
                bg: theme.accentLight,
                transform: "translateY(-2px)",
                boxShadow: `0 20px 40px -12px ${theme.accent}`,
              }}
              transition="all 0.3s">
              View All Projects <Icon as={FaChevronRight} ml={2} />
            </ButtonLink>
          </Box>

          {/* Image-first masonry grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="100%">
            {portfolioItems.map((item, index) => (
              <MotionCard
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                as={Link}
                href={item.href}
                position="relative"
                h={{ base: "400px", md: index % 3 === 0 ? "500px" : "400px", lg: index % 3 === 0 ? "600px" : "450px" }}
                borderRadius="2xl"
                overflow="hidden"
                cursor="pointer"
                bg={theme.bgCard}
                border="1px solid"
                borderColor={theme.border}
                _hover={{
                  borderColor: theme.accent,
                  transform: "translateY(-8px)",
                  boxShadow: `0 25px 50px -12px ${theme.accent}40`,
                  transition: "all 0.4s",
                  "& .project-image": {
                    transform: "scale(1.1)",
                  },
                  "& .project-overlay": {
                    opacity: 0.95,
                  },
                }}>
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  zIndex={0}
                  className="project-image"
                  transition="transform 0.4s">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-t, blackAlpha.900, blackAlpha.600, transparent)"
                  opacity={0.7}
                  className="project-overlay"
                  transition="opacity 0.4s"
                  zIndex={1}
                />
                <VStack
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={6}
                  zIndex={2}
                  align="flex-start"
                  spacing={3}>
                  <Badge
                    bg={theme.glass}
                    backdropFilter="blur(10px)"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="semibold"
                    border="1px solid"
                    borderColor="whiteAlpha.300">
                    {item.category}
                  </Badge>
                  <Heading fontSize="2xl" fontWeight="bold" color="white" textShadow="0 2px 12px rgba(0,0,0,0.5)">
                    {item.title}
                  </Heading>
                </VStack>
              </MotionCard>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

const SocialProofSectionV2: React.FC = () => {
  return (
    <Box
      py={{ base: 16, md: 24 }}
      bgGradient={theme.gradient}
      color="white"
      position="relative"
      overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.200"
        zIndex={0}
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={12}>
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="900" mb={4}>
              Trusted by Industry Leaders
            </Heading>
            <Text fontSize="xl" opacity={0.95}>
              We've helped businesses worldwide transform their digital presence
            </Text>
          </Box>
          <Box
            display="flex"
            width="480%"
            minWidth={{ base: "6300px", lg: "4300px" }}
            whiteSpace="nowrap"
            overflow="hidden">
            <Box
              display="flex"
              width={{ base: "100%", lg: "50%" }}
              justifyContent="space-around"
              alignItems="center"
              animation={`${scrollAnimation} 75s infinite linear`}>
              {[
                { name: "Teadit", src: "/assets/clients/teadit.png", width: 110, height: 60 },
                { name: "Artis", src: "/assets/clients/Artis-lab.png", width: 100, height: 100 },
                { name: "Sonara", src: "/assets/clients/sonara.svg", width: 100, height: 80 },
                { name: "Popcard", src: "/assets/clients/POPCARD_4.png", width: 80, height: 50 },
                { name: "Nearshore", src: "/assets/clients/nearshore.png", width: 140, height: 100 },
                { name: "Bubble", src: "/assets/clients/Bubble.1.png", width: 110, height: 100 },
                { name: "Pensa", src: "/assets/clients/Pensa-white.png", width: 100, height: 100 },
                { name: "Atarim", src: "/assets/clients/atarim-white.svg", width: 100, height: 100 },
              ].map((client, idx) => (
                <Tooltip key={idx} label={client.name} hasArrow>
                  <Box mx={4} _hover={{ transform: "scale(1.1)" }} transition="all 0.3s">
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                    />
                  </Box>
                </Tooltip>
              ))}
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

const TestimonialsSectionV2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmall = useBreakpointValue({ base: true, md: true, lg: false });
  const [showMore, setShowMore] = useState(false);
  const testimonialsData = testimonials?.items || [];
  const testimonialsTitle = testimonials?.title || "Loved by tech people";

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isSmall) return;
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [isSmall, currentIndex]);

  const columns = React.useMemo(() => {
    return testimonialsData.reduce<Array<typeof testimonialsData>>(
      (columns, t, i) => {
        const colIndex = i % 3;
        if (!columns[colIndex]) columns[colIndex] = [];
        columns[colIndex].push(t);
        return columns;
      },
      [[], [], []]
    );
  }, [testimonialsData]);

  if (isSmall) {
    return (
      <Box position="relative" overflow="hidden" bg={theme.bg} py={{ base: 20, md: 32 }}>
        <Container maxW="container.xl" pt={{ base: 40, md: 40, lg: 20 }} pb="20" id="testimonials">
          <Stack
            direction={{ base: "column", md: "column", lg: "column", xl: "row" }}
            alignItems="flex-start">
            <Testimonials title={testimonialsTitle} columns={[1, 1, 1, 2, 3]} innerWidth="container.xl">
              {!showMore ? (
                <>
                  {columns
                    ?.map((column) => column.slice(0, 1))
                    .map((column, i) => (
                      <Stack key={i}>
                        {column.map((t, i) => (
                          <Testimonial key={i} {...t} maxW="100%" w="100%" />
                        ))}
                      </Stack>
                    ))}
                  <Link
                    href="#testimonials"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Button
                      onClick={() => {
                        setShowMore(true);
                      }}
                      sx={{
                        fontSize: "xl",
                        marginTop: "2rem",
                        padding: "30px",
                        background: "transparent",
                        color: theme.textLight,
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        textDecoration: "none",
                        _hover: {
                          bg: theme.glass,
                        },
                      }}>
                      Show more
                      <ChevronDownIcon
                        style={{
                          width: "25px",
                          height: "25px",
                          marginLeft: 3,
                          marginTop: 2,
                          color: theme.textLight,
                        }}
                      />
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <FallInPlace delay={0.8}>
                    <Box height={showMore ? "800px" : "auto"} overflow={showMore ? "auto" : ""}>
                      {columns?.map((column, i) => (
                        <Stack key={i}>
                          {column.map((t, i) => (
                            <Testimonial key={i} {...t} maxW="100%" w="100%" />
                          ))}
                        </Stack>
                      ))}
                    </Box>
                  </FallInPlace>
                  <Link
                    href="#testimonials"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Button
                      onClick={() => {
                        setShowMore(false);
                      }}
                      sx={{
                        fontSize: "xl",
                        marginTop: "2rem",
                        padding: "30px",
                        background: "transparent",
                        color: theme.textLight,
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        textDecoration: "none",
                        _hover: {
                          bg: theme.glass,
                        },
                      }}>
                      Show less
                      <ChevronUpIcon
                        style={{
                          width: "25px",
                          height: "25px",
                          marginLeft: 3,
                          marginTop: 2,
                          color: theme.textLight,
                        }}
                      />
                    </Button>
                  </Link>
                </>
              )}
            </Testimonials>
          </Stack>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      id="testimonials"
      py={{ base: 20, md: 32 }}
      color={theme.textLight}
      textAlign="center"
      bg={theme.bg}>
      <Container maxW="container.xl" py="5" mb="5">
        <Divider borderColor={theme.border} />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="4"
          sx={{
            transition: "all 0.5s ease",
          }}
          mt={10}
          w="95%"
          marginLeft="20px">
          <Box mb={5} maxW="60%">
            <Heading
              as="h2"
              size="md"
              color={theme.textLight}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                textTransform: "uppercase",
              }}>
              TESTIMONIALS
            </Heading>
            <Heading
              as="h1"
              mt="5"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: theme.textLight,
                fontSize: {
                  base: "2rem",
                  md: "2rem",
                },
                width: "100%",
              }}>
              Hear From Our Clients
            </Heading>
            <Text
              color={theme.text}
              fontSize="lg"
              fontWeight="500"
              mt="5"
              px="10"
              justifyContent="center"
              width={{ base: "100%", md: "100%" }}
              align="center">
              Discover what our clients have to say about their experiences with us.
              Hear firsthand how we've helped businesses grow, innovate, and achieve success through our dedicated services and collaborative approach.
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: "100%",
              padding: "0px",
              margin: "0px",
            }}
            width="100%"
            height="50vh">
            {/* Previous button */}
            <Button
              onClick={handlePrev}
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ml: 2,
                background: theme.bgCard,
                color: theme.text,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid",
                borderColor: theme.border,
                ":hover": {
                  bg: theme.accent,
                  color: "white",
                  fontWeight: "bold",
                  borderColor: theme.accent,
                },
              }}>
              <ChevronLeftIcon
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: 3,
                }}
              />
            </Button>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.5s ease",
              }}>
              {/* Testimonial item */}
              {testimonialsData.length > 0 && (
                <Testimonial {...testimonialsData[currentIndex]} maxW="100%" w="100%" />
              )}
            </Box>

            {/* Next button */}
            <Button
              onClick={handleNext}
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ml: 2,
                background: theme.bgCard,
                color: theme.text,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid",
                borderColor: theme.border,
                ":hover": {
                  bg: theme.accent,
                  color: "white",
                  fontWeight: "bold",
                  borderColor: theme.accent,
                },
              }}>
              <ChevronRightIcon
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: 3,
                }}
              />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const TechnologySectionV2: React.FC = () => {
  const [currentTab, setCurrentTab] = useState("frontend");

  const techStacks = {
    frontend: [
      { name: "React", src: "/assets/tech/react.png" },
      { name: "Next.js", src: "/assets/tech/next.png" },
      { name: "TypeScript", src: "/assets/tech/typescript.png" },
      { name: "Tailwind CSS", src: "/assets/tech/tailwind.png" },
      { name: "Material UI", src: "/assets/tech/mui.png" },
      { name: "Redux", src: "/assets/tech/redux.png" },
    ],
    backend: [
      { name: "Node.js", src: "/assets/tech/nodejs.png" },
      { name: "Python", src: "/assets/tech/python.png" },
      { name: "PostgreSQL", src: "/assets/tech/postgresql.png" },
      { name: "MongoDB", src: "/assets/tech/mongo.png" },
      { name: "Fast API", src: "/assets/tech/fastapi.png" },
      { name: "Django", src: "/assets/tech/django.png" },
    ],
    devops: [
      { name: "Docker", src: "/assets/tech/docker.png" },
      { name: "AWS", src: "/assets/tech/aws.png" },
      { name: "Kubernetes", src: "/assets/tech/kubernetes.png" },
      { name: "GitHub", src: "/assets/tech/github.png" },
      { name: "GitLab", src: "/assets/tech/gitlab.png" },
    ],
  };

  return (
    <Box bg={theme.bgSecondary} py={{ base: 20, md: 32 }}>
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              bg={theme.glass}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor={theme.border}
              color={theme.accent}
              fontSize="sm"
              fontWeight="semibold"
              mb={4}>
              Technologies
            </Badge>
            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="900"
              color={theme.textLight}
              mb={6}>
              Our{" "}
              <Text as="span" bgGradient={theme.gradient} bgClip="text" color="transparent">
                Tech Stack
              </Text>
            </Heading>
          </Box>
          <Tabs
            index={currentTab === "frontend" ? 0 : currentTab === "backend" ? 1 : 2}
            onChange={(index) =>
              setCurrentTab(index === 0 ? "frontend" : index === 1 ? "backend" : "devops")
            }
            variant="unstyled"
            width="100%">
            <TabList
              justifyContent="center"
              gap={4}
              mb={12}
              flexWrap="wrap">
              {["Frontend", "Backend", "DevOps"].map((tab, idx) => (
                <Tab
                  key={idx}
                  px={8}
                  py={4}
                  borderRadius="xl"
                  fontSize="lg"
                  fontWeight="semibold"
                  color={theme.text}
                  bg={currentTab === tab.toLowerCase() ? theme.accent : theme.bgCard}
                  border="1px solid"
                  borderColor={currentTab === tab.toLowerCase() ? theme.accent : theme.border}
                  _selected={{
                    color: "white",
                    bg: theme.accent,
                    borderColor: theme.accent,
                  }}
                  _hover={{
                    borderColor: theme.accent,
                  }}
                  transition="all 0.3s">
                  {tab}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {Object.keys(techStacks).map((key) => (
                <TabPanel key={key}>
                  <SimpleGrid columns={{ base: 3, md: 6 }} spacing={8}>
                    {techStacks[key as keyof typeof techStacks].map((tech) => (
                      <Tooltip key={tech.name} label={tech.name} placement="top">
                        <Box
                          p={6}
                          bg={theme.bgCard}
                          borderRadius="xl"
                          border="1px solid"
                          borderColor={theme.border}
                          _hover={{
                            borderColor: theme.accent,
                            transform: "translateY(-4px)",
                            boxShadow: `0 10px 30px -10px ${theme.accent}40`,
                          }}
                          transition="all 0.3s"
                          cursor="pointer">
                          <Image src={tech.src} alt={tech.name} width={80} height={80} style={{ objectFit: "contain" }} />
                        </Box>
                      </Tooltip>
                    ))}
                  </SimpleGrid>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </VStack>
      </Container>
    </Box>
  );
};

const BlogSectionV2: React.FC = () => {
  type HomeBlogCard = {
    id: string;
    slug: string;
    title: string;
    fullTitle: string;
    date: string | null;
    url: string;
    image: string | null;
  };

  const [blogPosts, setBlogPosts] = useState<HomeBlogCard[]>([]);

  useEffect(() => {
    let isMounted = true;
    const loadHomepageBlogs = async () => {
      try {
        const res = await fetch("/api/blog?home=true&limit=3");
        if (!res.ok) return;
        const json = await res.json();
        const posts = (json.posts || []) as any[];
        const mapped: HomeBlogCard[] = posts.map((post) => ({
          id: post.id as string,
          slug: post.slug as string,
          title: post.title as string,
          fullTitle: (post.title as string) || "",
          date: (post.published_at as string) || null,
          url: `/blog/${post.slug}`,
          image: (post.featured_image as string) || null,
        }));
        if (isMounted) setBlogPosts(mapped);
      } catch (err) {
        console.error("Error loading homepage blogs:", err);
      }
    };
    void loadHomepageBlogs();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Box bg={theme.bg} py={{ base: 20, md: 32 }} id="blog">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              bg={theme.glass}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor={theme.border}
              color={theme.accent}
              fontSize="sm"
              fontWeight="semibold"
              mb={4}>
              Blog
            </Badge>
            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="900"
              color={theme.textLight}
              mb={6}>
              Latest{" "}
              <Text as="span" bgGradient={theme.gradient} bgClip="text" color="transparent">
                Insights
              </Text>
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
            {blogPosts.map((post, idx) => (
              <Link key={idx} href={post.url} style={{ textDecoration: "none" }}>
                <Card
                  bg={theme.bgCard}
                  border="1px solid"
                  borderColor={theme.border}
                  borderRadius="2xl"
                  overflow="hidden"
                  _hover={{
                    borderColor: theme.accent,
                    transform: "translateY(-8px)",
                    boxShadow: `0 25px 50px -12px ${theme.accent}40`,
                    "& > div:first-of-type > div": {
                      filter: "grayscale(0%)",
                    },
                  }}
                  transition="all 0.4s">
                  <Box position="relative" w="100%" aspectRatio={16 / 9} bg={theme.bgSecondary}>
                    <Box
                      w="100%"
                      h="100%"
                      position="relative"
                      sx={{
                        backgroundImage: post.image
                          ? `url(${post.image})`
                          : `linear-gradient(135deg, ${theme.bgCard} 0%, ${theme.bgSecondary} 100%)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "grayscale(100%)",
                        transition: "filter 0.4s ease",
                      }}
                    />
                  </Box>
                  <CardBody p={6}>
                    <VStack align="flex-start" spacing={3}>
                      <Text fontSize="xs" color={theme.textMuted} textTransform="uppercase" letterSpacing="wide">
                        {post.date
                          ? new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "—"}
                      </Text>
                      <Heading as="h4" size="md" color={theme.textLight} fontWeight="bold" lineHeight="1.4">
                        {post.fullTitle}
                      </Heading>
                      <HStack color={theme.accent} fontWeight="semibold" fontSize="sm" spacing={2}>
                        <Text>Read Article</Text>
                        <Icon as={FiArrowUpRight} />
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

const FaqSectionV2: React.FC = () => {
  return (
    <Box bg={theme.bgSecondary} py={{ base: 20, md: 32 }}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              bg={theme.glass}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor={theme.border}
              color={theme.accent}
              fontSize="sm"
              fontWeight="semibold"
              mb={4}>
              FAQ
            </Badge>
            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="900"
              color={theme.textLight}
              mb={6}>
              Frequently Asked{" "}
              <Text as="span" bgGradient={theme.gradient} bgClip="text" color="transparent">
                Questions
              </Text>
            </Heading>
          </Box>
          <Faq {...faq} />
        </VStack>
      </Container>
    </Box>
  );
};

export default HomeV2;
