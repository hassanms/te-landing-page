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

const MEATERY_CASE_STUDY_IMAGES = [
  { src: "/assets/portfolio/New/Meatery/Dashboard.png", alt: "The Meatery Dashboard", isPortrait: false },
  { src: "/assets/portfolio/New/Meatery/Screenshot 2026-02-13 124129.png", alt: "The Meatery - Screen 1", isPortrait: false },
  { src: "/assets/portfolio/New/Meatery/Screenshot 2026-02-13 124252.png", alt: "The Meatery - Screen 2", isPortrait: false },
  { src: "/assets/portfolio/New/Meatery/Screenshot 2026-02-13 124330.png", alt: "The Meatery - Screen 3", isPortrait: false },
  { src: "/assets/portfolio/New/Meatery/screencapture-localhost-3001-crm-reports-2026-02-13-12_43_49.png", alt: "The Meatery - CRM Reports", isPortrait: false },
];

const scrollRightToLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const CaseStudyMeatery = () => {
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
        title="Case Study: The Meatery - AI-Driven Voice CRM & Multi-Tenant Agency - Tech Emulsion"
        description="The Meatery is an AI-Driven Voice CRM and e-commerce platform for a premium meat distributor. Tech Emulsion scaled it into a Multi-Tenant Agency with DNC Gatekeeper, Shopify integration, n8n AI Judge, and real-time draft orders."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/meatery"
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
            src="/assets/portfolio/New/List Images/The Meatery.jpg"
            alt="The Meatery - AI-Driven Voice CRM"
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
              <ButtonLink href="/" size="lg" sx={{ bg: "none", color: "white", p: 0, "&:hover": { bg: "none", color: "white" } }}>
                Home
              </ButtonLink>
              <Icon as={FaChevronRight} color="white" boxSize={4} />
              <ButtonLink href="/portfolio" size="lg" sx={{ bg: "none", color: "white", p: 0, "&:hover": { bg: "none", color: "white" } }}>
                Portfolio
              </ButtonLink>
              <Icon as={FaChevronRight} color="white" boxSize={4} />
              <Text as="span" ml="2" color="white">
                The Meatery
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
                The Meatery
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="300"
                lineHeight="1.3"
                color="rgba(255,255,255,0.9)">
                Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="3xl">
                A proprietary e-commerce CRM and Voice AI platform for a premium meat distributor. Human-like voice agents, DNC Gatekeeper compliance, Shopify integration, and real-time draft orders for abandoned checkout recovery and inventory campaigns.
              </Text>
            </VStack>
            <Box flexShrink={0} w={{ base: "100%", lg: "45%" }} maxW={{ lg: "500px" }} position="relative" alignSelf={{ base: "center", lg: "flex-end" }}>
              <Image
                src="/assets/portfolio/New/Meatery/The Meatrey Show case screen image.png"
                alt="The Meatery - Voice CRM Showcase"
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
        _before={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "1px", bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`, opacity: 0.2 }}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundImage={subtlePattern} backgroundSize="20px 20px" opacity={0.5} pointerEvents="none" />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack spacing={10} align="stretch">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Industry</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">E-commerce & Food Distribution</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Client</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">Premium Meat Distributor</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Engagement</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">Multi-Tenant Agency Architecture & Voice AI</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Outcome</Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">Multi-tenant agency MVP, DNC compliance</Text>
              </Box>
            </SimpleGrid>
            <Box pt={4} borderTop="1px solid" borderColor={dividerColor}>
              <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">Tech Stack</Text>
              <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.6">
                React, Node.js (Express), Shopify API, Retell AI, n8n, PostgreSQL (Railway)
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
            {[...MEATERY_CASE_STUDY_IMAGES, ...MEATERY_CASE_STUDY_IMAGES].map((img, idx) => (
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
                The transition from an internal tool to a scalable agency solution presented several technical and operational hurdles.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                DNC compliance fears, unreliable webhooks, robotic AI voices, and operational friction blocked scaling from a single-tenant tool to a multi-tenant agency.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "DNC (Do Not Call) fear prevented reactivating high-revenue automation flows like Abandoned Checkout",
                "Unreliable webhooks led to missing call logs and inaccurate CRM attribution",
                "Early AI iterations sounded robotic and lacked deep customer context",
                "Launching new inventory campaigns took days of manual intervention instead of minutes",
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
                We implemented an infrastructure overhaul focused on compliance, intelligence, and multi-tenant scalability.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                The goal was to transform a single-tenant Voice AI CRM into an agency-ready platform with DNC Gatekeeper, smart context injection, and real-time sales execution.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "DNC Gatekeeper architecture for compliance",
                "Smart agent context & Shopify integration",
                "Prompt Ops feedback loop with n8n AI Judge",
                "Campaign injection system for rapid launch",
                "Real-time draft orders during calls",
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
              The Solution: The Meatery Platform
            </Heading>
            <VStack align="start" spacing={8} maxW="4xl" w="full">
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>DNC Gatekeeper Architecture:</Text> Centralized PostgreSQL exclusion list checks every phone number against Global and Client-Specific DNC tables before any call, enabling confident automation.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Smart Agent Context & Shopify Integration:</Text> AI receives Shopify data (Order Count, LTV, Subscription Status) for personalized discounts and add-ons during calls.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Prompt Ops Feedback Loop:</Text> n8n-based AI Judge ingests call recordings, grades conversations on rebuttal handling and tone, and aggregates data for rapid prompt iteration.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Campaign Injection System:</Text> CSV upload tool maps customer lists to specific agents and scripts—reducing campaign launch time from days to minutes.
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Real-Time Draft Orders:</Text> Agents create discounted Draft Orders in Shopify and text checkout links to customers during the call for instant conversion.
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
              Voice AI: Retell AI (LLM + Voice). Backend: Node.js (Express) with Shopify API. Automation: n8n for orchestration. Database: PostgreSQL (Railway) refactored for multi-tenancy. Frontend: React Admin Dashboard for call logs and sentiment analysis.
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
                From single-tenant tool to multi-tenant agency—with compliance-safe automation and enhanced sales agility.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} pt={2}>
              {[
                "Multi-Tenant Agency MVP enabling external client onboarding",
                "Reactivated Abandoned Checkout flows via DNC Gatekeeper",
                "100% call outcome and CRM attribution capture for accurate billing",
                "Campaign launch time reduced from days to minutes",
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
              At Tech Emulsion, we scale Voice AI and CRM platforms from internal tools into compliance-safe, multi-tenant agencies. The Meatery demonstrates how DNC Gatekeeper architecture, smart context injection, and real-time sales execution can reactivate revenue drivers and accelerate growth.
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
              Ready to Scale Your Voice AI and CRM?
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

export default CaseStudyMeatery;
