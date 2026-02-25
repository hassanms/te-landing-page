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
  Badge,
  useColorModeValue,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { ButtonLink } from "components/button-link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const AUTO_CAR_CASE_STUDY_IMAGES = [
  { src: "/assets/portfolio/New/AutoCar Intelligence/01-dashboard (1).png", alt: "AutoCar Intelligence - Company Dashboard", isPortrait: false },
  { src: "/assets/portfolio/New/AutoCar Intelligence/02-historical-performance top.png", alt: "AutoCar Intelligence - Historical Performance Top", isPortrait: false },
  { src: "/assets/portfolio/New/AutoCar Intelligence/02-historical-performance b.png", alt: "AutoCar Intelligence - Historical Performance Bottom", isPortrait: false },
  { src: "/assets/portfolio/New/AutoCar Intelligence/03-agging-work-in-progress top.png", alt: "AutoCar Intelligence - Aging Work In Progress", isPortrait: false },
  { src: "/assets/portfolio/New/AutoCar Intelligence/05-wicked-file-page-1.png", alt: "AutoCar Intelligence - Risk File Page 1", isPortrait: false },
  { src: "/assets/portfolio/New/AutoCar Intelligence/06-wicked-file-page.png", alt: "AutoCar Intelligence - Risk File Page 2", isPortrait: false },
];

const scrollRightToLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const CaseStudyAutoSyncIntelligence = () => {
  const { colorMode } = useColorMode();
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
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
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </Head>
      <EnhancedSEO
        title="Case Study: AutoCar Intelligence (Premium Design) - Tech Emulsion"
        description="AutoCar Intelligence is a centralized operational intelligence platform built for a multi-location automotive repair business. Tech Emulsion rebuilt an unreliable prototype into a scalable data aggregation and analytics system."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/autosync-intelligence"
      />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF" />
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
        minH={{ base: "500px", md: "600px" }}
      >
        <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
          <Image
            src="/assets/portfolio/New/List Images/AutoCar Intelligence.jpg"
            alt="AutoCar Intelligence - Multi-Location Automotive Intelligence"
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
              }}
            >
              <ButtonLink
                href="/"
                size="lg"
                sx={{ bg: "none", color: "white", p: 0, "&:hover": { bg: "none", color: "white" } }}
              >
                Home
              </ButtonLink>
              <Icon as={FaChevronRight} color="white" boxSize={4} />
              <ButtonLink
                href="/portfolio"
                size="lg"
                sx={{ bg: "none", color: "white", p: 0, "&:hover": { bg: "none", color: "white" } }}
              >
                Portfolio
              </ButtonLink>
              <Icon as={FaChevronRight} color="white" boxSize={4} />
              <Text as="span" ml="2" color="white">
                AutoCar Intelligence
              </Text>
            </ButtonGroup>
          </Box>

          <Flex
            align={{ base: "flex-start", lg: "center" }}
            justify="space-between"
            gap={{ base: 10, lg: 12 }}
            flexDir={{ base: "column", lg: "row" }}
            w="full"
          >
            <VStack align="start" spacing={6} flex={1} minW={0} maxW="4xl">
              <Heading
                as="h1"
                fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                color="white"
              >
                AutoCar Intelligence
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="300"
                lineHeight="1.3"
                color="rgba(255,255,255,0.9)"
              >
                Rebuilding Multi-Location Automotive Intelligence from Broken SaaS Data
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="3xl"
              >
                A centralized operational intelligence platform that gives owners a single, trustworthy source of truth
                across all shops without logging into multiple systems. Not a reporting toy—an operational control system.
              </Text>
            </VStack>
            <Box
              flexShrink={0}
              w={{ base: "100%", lg: "45%" }}
              maxW={{ lg: "500px" }}
              position="relative"
              alignSelf={{ base: "center", lg: "flex-end" }}
            >
              <Image
                src="/assets/portfolio/New/AutoCar Intelligence/AutoCar Intelligence Show Case Screen Image.png"
                alt="AutoCar Intelligence - Dashboard Showcase"
                width={500}
                height={400}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </Box>
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
        }}
      >
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
                  Automotive Repair & Maintenance
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Client
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  9+ Shop Multi-Location Operator (US)
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Engagement
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  Data Aggregation Platform & Operational Dashboard
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Outcome
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  Unified, AI-ready intelligence across all locations
                </Text>
              </Box>
            </SimpleGrid>
            <Box pt={4} borderTop="1px solid" borderColor={dividerColor}>
              <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                Tech Stack
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.6">
                React dashboard, Supabase (PostgreSQL) with Edge Functions, Tekmetric API, Chrome extension–based ingestion,
                AI-ready data model for future agents.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Case Study Image Gallery Section */}
      <Box
        position="relative"
        py={{ base: 6, md: 10 }}
        overflow="hidden"
        minH={{ base: "340px", md: "400px" }}
        onMouseEnter={() => setIsGalleryPaused(true)}
        onMouseLeave={() => setIsGalleryPaused(false)}
      >
        <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
          <Image src="/assets/portfolio/New/banner of case studies.webp" alt="" fill style={{ objectFit: "cover" }} />
          <Box position="absolute" top={0} left={0} right={0} bottom={0} bg="blackAlpha.6" _dark={{ bg: "blackAlpha.5" }} />
        </Box>
        <Box position="relative" zIndex={1} overflow="hidden" w="100%" py={4}>
          <Box
            display="flex"
            alignItems="flex-start"
            width="max-content"
            animation={`${scrollRightToLeft} 45s linear infinite`}
            sx={{ animationPlayState: isGalleryPaused ? "paused" : "running" }}
          >
            {[...AUTO_CAR_CASE_STUDY_IMAGES, ...AUTO_CAR_CASE_STUDY_IMAGES].map((img, idx) => (
              <Box
                key={idx}
                as="figure"
                flexShrink={0}
                mr={{ base: 6, md: 8 }}
                overflow="hidden"
                borderRadius={img.isPortrait ? "2xl" : "0"}
                border="5px solid"
                borderColor="gray.500"
                _dark={{ borderColor: "whiteAlpha.150" }}
                boxShadow="0 4px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)"
                lineHeight={0}
                m={0}
                h={{ base: "300px", md: "360px" }}
                cursor="pointer"
                onClick={() => setSelectedImage(img)}
                _hover={{
                  opacity: 0.95,
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
                transition="all 0.25s ease"
                sx={{
                  "& img": {
                    display: "block",
                    width: "auto",
                    height: "100%",
                    objectFit: "contain",
                  },
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} size="6xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(4px)" />
        <ModalContent bg="transparent" boxShadow="none" maxW="90vw" maxH="90vh">
          <ModalCloseButton
            color="white"
            bg="transparent"
            border="none"
            top={4}
            right={4}
            zIndex={10}
            fontSize="2xl"
            sx={{
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.9)) drop-shadow(0 0 4px rgba(0,0,0,0.6))",
            }}
            _hover={{ bg: "transparent", color: "white", opacity: 0.9 }}
            _focus={{ boxShadow: "none" }}
          />
          <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
            {selectedImage && (
              <Box maxW="100%" maxH="90vh">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", display: "block" }}
                />
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* The Business Problem */}
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
        }}
      >
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
                lineHeight="1.1"
              >
                The Business Problem
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                The client owned 9 automotive shops (growing to 10+) across multiple US states. Their Shop Management System exposed
                a limited and inconsistent API, forcing manual workflows and unreliable dashboards.
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={headingColor}
                fontWeight="semibold"
                lineHeight="1.8"
              >
                Data existed—but it was unusable for decision-making. The owner lacked a single, trustworthy view of performance and
                risk across the company.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "Fragmented visibility—Tekmetric required logging into each shop individually",
                "Inaccurate and incomplete API data, missing key metrics like inspections and aging WIP",
                "Operational risk blind spots: high-dollar jobs with no deposits and over-exposure on low-value vehicles",
                "No automation or intelligence—everything relied on manual oversight and spreadsheets",
              ].map((item, i) => (
                <Box key={i} w="full">
                  <HStack spacing={5} py={5} align="flex-start">
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="bold"
                      color={numberColor}
                      lineHeight="1.2"
                      minW="60px"
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </Text>
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      color={headingColor}
                      fontWeight="medium"
                      lineHeight="1.5"
                    >
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
        }}
      >
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
                lineHeight="1.1"
              >
                Our Approach
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                We rebuilt AutoCar Intelligence around a data-first architecture: never trust upstream aggregates, calculate
                everything ourselves, and store raw and derived data separately for historical analysis.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                The system was designed to survive bad APIs and still produce reliable insights—laying the foundation for future AI
                agents without refactoring.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "Centralize data from all shops into a single aggregation engine",
                "Normalize inconsistent fields and structures across APIs and reports",
                "Rebuild sales, profit, and WIP logic using deterministic calculations",
                "Expose risk and performance via drill-down dashboards instead of static reports",
              ].map((item, i) => (
                <Box key={i} w="full">
                  <HStack spacing={5} py={5} align="flex-start">
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="bold"
                      color={numberColor}
                      lineHeight="1.2"
                      minW="60px"
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </Text>
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      color={headingColor}
                      fontWeight="medium"
                      lineHeight="1.5"
                    >
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

      {/* The Solution */}
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
        }}
      >
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
              lineHeight="1.1"
            >
              The Solution: AutoCar Intelligence Platform
            </Heading>
            <VStack align="start" spacing={8} maxW="4xl" w="full">
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>
                    Centralized Multi-Shop Aggregation:
                  </Text>{" "}
                  Unified aggregation layer pulls data shop-by-shop, normalizes inconsistent fields, and stores historical snapshots
                  for month-over-month and year-over-year comparison.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>
                    Hardened Sales & Profit Calculations:
                  </Text>{" "}
                  Deterministic logic for labor, parts, and sublet sales, along with authorized vs unauthorized sublets and RO
                  averages, so owners can trust every number.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>
                    Aging Work-In-Progress Intelligence:
                  </Text>{" "}
                  Tracks approved repair orders across all shops, flags high-dollar jobs without deposits, and surfaces aging risk by
                  RO age, vehicle value, and exposure.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>
                    Hybrid Inspection & Compliance Tracking:
                  </Text>{" "}
                  Uses both API data and Chrome extension–based extraction to capture inspection metrics that Tekmetric’s API
                  doesn&apos;t expose, then normalizes them into the central model.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>
                    AI-Ready Architecture:
                  </Text>{" "}
                  Clear event boundaries and deterministic rules first, AI second—so future agents can safely monitor deposits, WIP
                  aging, and anomalies without rearchitecting the system.
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Technical Architecture */}
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
        }}
      >
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
          <VStack align="start" spacing={10} maxW="4xl">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1"
            >
              Technical Architecture
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
              React-based dashboard, Supabase with PostgreSQL and Edge Functions, Tekmetric API integration, and a Chrome
              extension ingestion path for non-API reports. Raw and derived data are stored separately to enable deep historical
              analysis, not just current-state reporting.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Business Impact */}
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
        }}
      >
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
                lineHeight="1.1"
              >
                Business Impact
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                AutoCar Intelligence transformed fragmented, unreliable data into a unified control system—giving leadership
                confidence in their numbers and visibility into risk before it becomes loss.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "Company-wide performance and risk in a single dashboard",
                "Reliable month-over-month and year-over-year comparisons",
                "Visibility into financial risk from aging WIP and unprotected ROs",
                "An AI-ready foundation without rework when agents are introduced",
              ].map((item, i) => (
                <Box key={i} w="full">
                  <HStack spacing={5} py={5} align="flex-start">
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="bold"
                      color={numberColor}
                      lineHeight="1.2"
                      minW="60px"
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </Text>
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      color={headingColor}
                      fontWeight="medium"
                      lineHeight="1.5"
                    >
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
      <Box bg={bgColor} py={{ base: 20, md: 24 }} position="relative">
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={12} maxW="4xl">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1"
            >
              Why This Matters
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
              At Tech Emulsion, we specialize in turning messy, real-world data into production-grade intelligence systems. AutoCar
              Intelligence shows how a data-first architecture can transform broken SaaS APIs into a durable strategic asset—and
              lay the groundwork for safe, effective AI.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        bgGradient={colorMode === "dark" ? "linear(to-r, teal.600, teal.800)" : "linear(to-r, teal.500, teal.600)"}
        py={{ base: 16, md: 20 }}
        color="white"
      >
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center" maxW="3xl" mx="auto">
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold">
              Building Operational Intelligence for Your Locations?
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
                boxShadow="xl"
              >
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
                fontWeight="bold"
              >
                View More Case Studies
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default CaseStudyAutoSyncIntelligence;

