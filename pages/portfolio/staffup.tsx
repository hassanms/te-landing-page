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

const STAFFUP_CASE_STUDY_IMAGES = [
  { src: "/assets/portfolio/New/StaffUp/Welcome_Section.PNG", alt: "StaffUp - Welcome Section", isPortrait: false },
  { src: "/assets/portfolio/New/StaffUp/Process.png", alt: "StaffUp - Recruitment Process Flow", isPortrait: false },
  { src: "/assets/portfolio/New/StaffUp/staffuphq.com_job-list_.png", alt: "StaffUp - Job List Screen", isPortrait: false },
  { src: "/assets/portfolio/New/StaffUp/staffuphq.com_job-list_ (2).png", alt: "StaffUp - Job List Variant", isPortrait: false },
  { src: "/assets/portfolio/New/StaffUp/staffuphq.com_job.png", alt: "StaffUp - Job Detail Page", isPortrait: false },
  { src: "/assets/portfolio/New/StaffUp/Job Details.png", alt: "StaffUp - Job Details View", isPortrait: false },
];

const scrollRightToLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const CaseStudyStaffUp = () => {
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
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <EnhancedSEO
        title="Case Study: StaffUp - AI Recruitment SaaS with Intelligent Matching Engine - Tech Emulsion"
        description="Built StaffUp, a serverless recruitment SaaS powered by a proprietary 7-criteria scoring engine using Next.js 15 and Firebase. Automated candidate ranking through availability matching, psychometric alignment, certification validation, and experience weighting. Reduced manual screening time by 70%, introduced real-time dashboards for employers and admins, and created a transparent, data-driven matching system handling thousands of users at scale."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/staffup"
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
            src="/assets/portfolio/New/List Images/StaffUp.png"
            alt="StaffUp - AI Recruitment Platform"
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
                StaffUp
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
              <Heading as="h1" fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }} fontWeight="bold" lineHeight="1.1" color="white">
                StaffUp
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="300"
                lineHeight="1.3"
                color="rgba(255,255,255,0.9)">
                AI Recruitment SaaS with Intelligent Matching Engine
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="3xl">
                Built StaffUp, a serverless recruitment SaaS powered by a proprietary 7-criteria scoring engine using Next.js 15 and Firebase. Automated candidate ranking through availability matching, psychometric alignment, certification validation, and experience weighting. Reduced manual screening time by 70%, introduced real-time dashboards for employers and admins.
              </Text>
            </VStack>
            <Box flexShrink={0} w={{ base: "100%", lg: "45%" }} maxW={{ lg: "500px" }} position="relative" alignSelf={{ base: "center", lg: "flex-end" }}>
              <Image
                src="/assets/portfolio/New/StaffUp/StaffUp Show Case Screen Image.png"
                alt="StaffUp - AI Recruitment SaaS Showcase"
                width={500}
                height={400}
                style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "12px" }}
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
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">Recruitment & HR Tech</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Client</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">High-Volume Seasonal Staffing</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Engagement</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">End-to-end Serverless SaaS Architecture</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Outcome</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">70% reduction in manual screening time</Text>
              </Box>
            </SimpleGrid>
            <Box pt={4} borderTop="1px solid" borderColor={dividerColor}>
              <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Tech Stack</Text>
              <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.6">
                Next.js 15 (App Router), React 19, Tailwind CSS, Firebase Admin, Firestore, Redux Toolkit, Resend API
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
            {[...STAFFUP_CASE_STUDY_IMAGES, ...STAFFUP_CASE_STUDY_IMAGES].map((img, idx) => (
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
                boxShadow="0 4px 24px rgba(0,0,0,0.12)"
                lineHeight={0}
                m={0}
                h={{ base: "300px", md: "360px" }}
                cursor="pointer"
                onClick={() => setSelectedImage(img)}
                _hover={{ opacity: 0.95, transform: "scale(1.02)", boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
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
                <img src={selectedImage.src} alt={selectedImage.alt} style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", display: "block" }} />
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* The Core Problem */}
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
                The Core Problem
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Traditional hiring relied on manual resume screening, subjective judgment, and reactive filtering. Employers were overwhelmed by unqualified applicants, while strong candidates were overlooked due to availability or documentation mismatches.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                The client needed a data-driven system that could automatically rank candidates by job fit in real time.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "Resume fatigue and slow manual review",
                "Availability mismatches for fixed seasonal dates",
                "No objective scoring for psychometric alignment",
                "Lack of transparency for candidates",
                "No structured ranking logic for employers",
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

      {/* Our Solution */}
      <Box
        bg={bgColor}
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "1px", bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`, opacity: 0.2 }}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundImage={subtlePattern} backgroundSize="20px 20px" opacity={0.5} pointerEvents="none" />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={12} w="full">
            <Heading as="h2" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor} letterSpacing="-0.02em" lineHeight="1.1">
              Our Solution: 7-Criteria Scoring Engine
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
              We built a proprietary scoring engine that calculates match percentage dynamically. The system generates rank-ordered employer views, eliminating resume scanning.
            </Text>
            <VStack align="start" spacing={6} maxW="4xl" w="full">
              {[
                "Availability overlap algorithm",
                "Psychometric benchmark comparison",
                "Quantified seasonal experience",
                "Certification validation checks",
                "Profile completeness weighting",
              ].map((item, i) => (
                <HStack key={i} spacing={4} align="flex-start" w="full">
                  <Text fontSize="xl" fontWeight="bold" color={accentColor}>•</Text>
                  <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.7">{item}</Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Intelligent Candidate Feedback */}
      <Box
        bg={sectionBg}
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "1px", bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`, opacity: 0.2 }}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundImage={subtlePattern} backgroundSize="20px 20px" opacity={0.3} pointerEvents="none" />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={10} maxW="4xl">
            <Heading as="h2" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor} letterSpacing="-0.02em" lineHeight="1.1">
              Intelligent Candidate Feedback
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
              Instead of rejecting applicants silently, the system generates automated improvement roadmaps.
            </Text>
            <VStack align="start" spacing={4}>
              {[
                "Complete required training modules",
                "Upload missing certifications",
                "Improve psychometric threshold score",
              ].map((item, i) => (
                <Text key={i} fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="medium" lineHeight="1.6">
                  • {item}
                </Text>
              ))}
            </VStack>
            <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
              This increases talent quality over time and gamifies professional growth.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Multi-Role Dashboard Architecture */}
      <Box
        bg={bgColor}
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "1px", bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`, opacity: 0.2 }}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundImage={subtlePattern} backgroundSize="20px 20px" opacity={0.5} pointerEvents="none" />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={10} maxW="4xl">
            <Heading as="h2" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor} letterSpacing="-0.02em" lineHeight="1.1">
              Multi-Role Dashboard Architecture
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={4}>
              We designed three separate experiences:
            </Text>
            <VStack align="start" spacing={6}>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.6">Employer Dashboard</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.7">Real-time rank and filter system for top-fit candidates.</Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.6">Admin Command Center</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.7">Performance analytics, growth visualization, placement insights.</Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.6">Candidate Portal</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.7">Personalized job feed sorted by match percentage.</Text>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Technical Architecture */}
      <Box
        bg={sectionBg}
        py={{ base: 20, md: 24 }}
        position="relative"
        _before={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "1px", bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`, opacity: 0.2 }}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundImage={subtlePattern} backgroundSize="20px 20px" opacity={0.3} pointerEvents="none" />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={10} maxW="4xl">
            <Heading as="h2" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor} letterSpacing="-0.02em" lineHeight="1.1">
              Technical Architecture
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              <Box>
                <Text fontSize="sm" color={textColor} mb={2} fontWeight="semibold" textTransform="uppercase">Frontend</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} lineHeight="1.6">Next.js 15 (App Router), React 19, Tailwind CSS</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color={textColor} mb={2} fontWeight="semibold" textTransform="uppercase">Backend</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} lineHeight="1.6">Next.js Server Actions with Firebase Admin</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color={textColor} mb={2} fontWeight="semibold" textTransform="uppercase">Database</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} lineHeight="1.6">Firestore with real-time mutations</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color={textColor} mb={2} fontWeight="semibold" textTransform="uppercase">State & Email</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} lineHeight="1.6">Redux Toolkit, Resend API for transactional messaging</Text>
              </Box>
            </SimpleGrid>
            <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
              Architecture Model: Serverless, horizontally scalable, low-maintenance infrastructure.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Results / Business Impact */}
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
                Results
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                A structured data-driven recruitment engine that replaced manual processes with scalable, automated systems.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "70% reduction in manual screening time",
                "Higher placement success through structured psychometric thresholds",
                "Full transparency in candidate ranking",
                "Real-time matching engine handling thousands of users",
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
      <Box bg={sectionBg} py={{ base: 20, md: 24 }} position="relative">
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={12} maxW="4xl">
            <Heading as="h2" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor} letterSpacing="-0.02em" lineHeight="1.1">
              Why This Matters
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
              This wasn&apos;t a job board. It was a structured data-driven recruitment engine built with custom scoring algorithms, serverless SaaS architecture, automated ranking systems, and real-time data mutations.
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
              At Tech Emulsion, we design intelligent SaaS platforms that replace manual processes with scalable, automated systems. If you&apos;re building a recruitment tech product, matching engine, or data-driven SaaS platform, we can architect it end-to-end.
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
              Building Recruitment Tech or Data-Driven SaaS?
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

export default CaseStudyStaffUp;
