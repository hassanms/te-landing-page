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

const BILLBOARDIQ_CASE_STUDY_IMAGES = [
  { src: "/assets/portfolio/New/BillboardIQ/DashBoard.png", alt: "BillboardIQ Dashboard - Booked Media & Budget Analytics", isPortrait: false },
  { src: "/assets/portfolio/New/BillboardIQ/1.png", alt: "BillboardIQ - Screen 1", isPortrait: false },
  { src: "/assets/portfolio/New/BillboardIQ/2.png", alt: "BillboardIQ - Screen 2", isPortrait: false },
  { src: "/assets/portfolio/New/BillboardIQ/3.png", alt: "BillboardIQ - Screen 3", isPortrait: false },
  { src: "/assets/portfolio/New/BillboardIQ/4.png", alt: "BillboardIQ - Screen 4", isPortrait: false },
  { src: "/assets/portfolio/New/BillboardIQ/5.png", alt: "BillboardIQ - Screen 5", isPortrait: false },
  { src: "/assets/portfolio/New/BillboardIQ/6.png", alt: "BillboardIQ - Screen 6", isPortrait: false },
  { src: "/assets/portfolio/New/BillboardIQ/7.png", alt: "BillboardIQ - Screen 7", isPortrait: false },
  { src: "/assets/portfolio/New/BillboardIQ/8.png", alt: "BillboardIQ - Screen 8", isPortrait: false },
  { src: "/assets/portfolio/New/BillboardIQ/9.png", alt: "BillboardIQ - Screen 9", isPortrait: false },
  { src: "/assets/portfolio/New/BillboardIQ/10.png", alt: "BillboardIQ - Screen 10", isPortrait: false },
];

const scrollRightToLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const CaseStudyCampaignOS = () => {
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
        title="Case Study: BillboardIQ - Precision-Engineered Management Platform for OOH Advertising - Tech Emulsion"
        description="BillboardIQ is a comprehensive, end-to-end management platform designed specifically for the Out-of-Home (OOH) advertising industry. Built with React and Supabase, it handles the entire campaign lifecycle from briefing to financial reporting—intelligent inventory management, automated reconciliation, lunar-period availability tracking, and role-based dashboards."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/campaignos"
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
        minH={{ base: "500px", md: "600px" }}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
          <Image
            src="/assets/portfolio/New/List Images/BillboardIQ.jpg"
            alt="BillboardIQ - OOH Advertising Management Platform"
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
              style={{
                backgroundColor: "none",
                fontSize: "1rem",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}>
              <ButtonLink href="/" size="lg" sx={{ bg: "none", color: "white", padding: "0", "&:hover": { bg: "none" } }}>
                Home
              </ButtonLink>
              <FaChevronRight size={15} style={{ color: "white" }} />
              <ButtonLink href="/portfolio" size="lg" sx={{ bg: "none", color: "white", padding: "0", "&:hover": { bg: "none" } }}>
                Portfolio
              </ButtonLink>
              <FaChevronRight size={15} style={{ color: "white" }} />
              <Text as="span" ml="2" color="white">
                BillboardIQ
              </Text>
            </ButtonGroup>
          </Box>

          <Flex
            align={{ base: "flex-start", lg: "center" }}
            justify="space-between"
            gap={{ base: 10, lg: 12 }}
            flexDir={{ base: "column", lg: "row" }}
            w="full">
            <VStack align="start" spacing={6} flex={1} minW={0} maxW="4xl">
              <Heading as="h1" fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }} fontWeight="bold" lineHeight="1.1" color="white">
                BillboardIQ
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="300"
                lineHeight="1.3"
                color="rgba(255,255,255,0.9)">
                A Precision-Engineered Management Ecosystem for Out-of-Home Advertising
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="3xl">
                A comprehensive, end-to-end management platform that handles the entire campaign lifecycle—from initial briefing and inventory site selection to real-time availability tracking and multi-format financial reporting. Built for data accuracy, role-based visibility, and high-fidelity automated exports.
              </Text>
            </VStack>
            <Box flexShrink={0} w={{ base: "100%", lg: "40%" }} maxW={{ lg: "500px" }} position="relative" alignSelf={{ base: "center", lg: "flex-end" }}>
              <Image
                src="/assets/portfolio/New/BillboardIQ/BillboardIQ Show Case Screen Image white.png"
                alt="BillboardIQ - Dashboard Showcase"
                width={500}
                height={500}
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
        _before={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "1px", bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`, opacity: 0.2 }}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundImage={subtlePattern} backgroundSize="20px 20px" opacity={0.5} pointerEvents="none" />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack spacing={10} align="stretch">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Industry</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">Out-of-Home (OOH) Advertising</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Client</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">Multi-Country OOH Media Operator</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Engagement</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">End-to-end Platform Architecture & Production</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Outcome</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">80%+ reduction in reporting time</Text>
              </Box>
            </SimpleGrid>
            <Box pt={4} borderTop="1px solid" borderColor={dividerColor}>
              <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Tech Stack</Text>
              <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.6">
                React 18, TypeScript, Vite, Tailwind CSS, Shadcn UI, Supabase (PostgreSQL), Recharts
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
        onMouseLeave={() => setIsGalleryPaused(false)}>
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
            sx={{ animationPlayState: isGalleryPaused ? "paused" : "running" }}>
            {[...BILLBOARDIQ_CASE_STUDY_IMAGES, ...BILLBOARDIQ_CASE_STUDY_IMAGES].map((img, idx) => (
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
                _hover={{ opacity: 0.95, transform: "scale(1.02)", boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.06)" }}
                transition="all 0.25s ease"
                sx={{ "& img": { display: "block", width: "auto", height: "100%", objectFit: "contain" } }}>
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
            bg="teal.500"
            top={4}
            right={4}
            zIndex={10}
            borderRadius="full"
            w={10}
            h={10}
            fontSize="xl"
            boxShadow="lg"
            _hover={{ bg: "teal.600", color: "white" }}
            _focus={{ boxShadow: "0 0 0 2px teal.400" }}
          />
          <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
            {selectedImage && (
              <Box maxW="100%" maxH="90vh">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={selectedImage.src} alt={selectedImage.alt} style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", display: "block" }} />
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
        _before={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "1px", bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`, opacity: 0.2 }}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundImage={subtlePattern} backgroundSize="20px 20px" opacity={0.3} pointerEvents="none" />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }} alignItems="start">
            <VStack align="start" spacing={6}>
              <Heading as="h2" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor} letterSpacing="-0.02em" lineHeight="1.1">
                The Business Problem
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Before BillboardIQ, managing large-scale OOH inventory across multiple countries faced critical operational bottlenecks that threatened efficiency and accuracy.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                The client needed a single source of truth that could handle inventory fragmentation, complex availability logic, reporting bottlenecks, and role-based visibility—all in real time.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "Inventory fragmentation across Australia and New Zealand with varying regional rules",
                "Manual lunar-period availability calculations prone to human error and booking overlaps",
                "Reporting bottlenecks—hours spent on PDF contracts, Excel summaries, PowerPoint proposals",
                "Visibility control—management lacked a bird's-eye view; sales needed focused territory views",
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
        _before={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "1px", bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`, opacity: 0.2 }}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundImage={subtlePattern} backgroundSize="20px 20px" opacity={0.5} pointerEvents="none" />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }} alignItems="start">
            <VStack align="start" spacing={6}>
              <Heading as="h2" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor} letterSpacing="-0.02em" lineHeight="1.1">
                Our Approach
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                We implemented a cloud-native architecture using a modern TypeScript stack—React, Supabase, and Tailwind—to ensure precision and real-time responsiveness.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                The platform emphasizes data accuracy, role-based visibility, and high-fidelity automated exports across thousands of advertising sites.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "Intelligent inventory and geo-visualization",
                "Automated financial reconciliation engine",
                "Lunar-period availability tracking (13 periods × 28 days)",
                "Multi-format export engine (Excel, PDF, PowerPoint)",
                "Role-based command center dashboards",
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

      {/* The Solution */}
      <Box
        bg={sectionBg}
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "1px", bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`, opacity: 0.2 }}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundImage={subtlePattern} backgroundSize="20px 20px" opacity={0.3} pointerEvents="none" />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={12} w="full">
            <Heading as="h2" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor} letterSpacing="-0.02em" lineHeight="1.1">
              The Solution: BillboardIQ Platform
            </Heading>
            <VStack align="start" spacing={8} maxW="4xl" w="full">
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Intelligent Inventory & Geo-Visualization:</Text> Custom geo-logic tags sites by country, with distinct color-coded analytics for AU and NZ revenue splits.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Automated Financial Reconciliation:</Text> Logic layer calculates Gross Media, Net Media, and costs—handles proportional distributions for multi-month campaigns and tracks Closed Won revenue against targets.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Lunar-Period Availability Engine:</Text> Custom Avails engine on 13-period lunar cycles with slot summation and conflict detection across thousands of digital and static faces.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Multi-Format Export Engine:</Text> Excel workbooks, automated PDF contracts with dynamic data, and PowerPoint proposals for sales agents to export campaign site lists into branded decks.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Role-Based Dashboards:</Text> Stacked performance charts (Booked vs. Draft media vs. budgets), real-time sales pipeline status, and tailored visibility—Super Admins see global data, Sales Agents see individual metrics.
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
        _before={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "1px", bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`, opacity: 0.2 }}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundImage={subtlePattern} backgroundSize="20px 20px" opacity={0.5} pointerEvents="none" />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={10} maxW="4xl">
            <Heading as="h2" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor} letterSpacing="-0.02em" lineHeight="1.1">
              Technical Architecture
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
              React 18, TypeScript, Vite, Tailwind CSS, Shadcn UI (Radix). Supabase with PostgreSQL, Row Level Security, and Edge Functions. Recharts for financial visualization. Supabase Realtime for instant sync.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Business Impact */}
      <Box
        bg={sectionBg}
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "1px", bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`, opacity: 0.2 }}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundImage={subtlePattern} backgroundSize="20px 20px" opacity={0.3} pointerEvents="none" />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }} alignItems="start">
            <VStack align="start" spacing={6}>
              <Heading as="h2" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor} letterSpacing="-0.02em" lineHeight="1.1">
                Business Impact
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                From fragmentation to unified control—a single source of truth for OOH advertising operations across Australia and New Zealand.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "Unified inventory management for AU and NZ in one platform",
                "80%+ reduction in reporting time via automated exports",
                "Zero booking overlaps through automated slot-summation logic",
                "Real-time visibility into international revenue splits",
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
      <Box bg={bgColor} py={{ base: 20, md: 24 }} position="relative">
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={12} maxW="4xl">
            <Heading as="h2" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor} letterSpacing="-0.02em" lineHeight="1.1">
              Why This Matters
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
              At Tech Emulsion, we build precision-engineered management platforms that turn operational complexity into scalable, data-driven systems. BillboardIQ demonstrates how the right architecture can unify fragmented inventory, automate reporting, and empower teams with real-time visibility.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        bgGradient={colorMode === "dark" ? "linear(to-r, teal.600, teal.800)" : "linear(to-r, teal.500, teal.600)"}
        py={{ base: 16, md: 20 }}
        color="white">
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center" maxW="3xl" mx="auto">
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold">
              Ready to Build Your Precision-Engineered Platform?
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

export default CaseStudyCampaignOS;
