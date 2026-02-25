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
} from "@chakra-ui/react";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { ButtonLink } from "components/button-link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const CaseStudyPodcastBeacon = () => {
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
        title="Case Study: Podcast Beacon - Tech Emulsion"
        description="Podcast Beacon is a link-in-bio SaaS hub for podcasters that centralizes episodes, merch, services, and payments on branded pages, with secure login and admin tools to manage content and track engagement."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/podcastbeacon"
        portfolioData={{
          title: "Podcast Beacon – Link-in-Bio SaaS Hub for Podcasters",
          description:
            "Tech Emulsion built Podcast Beacon so podcasters can gather every important link on one branded page. Users launch multiple landing pages, showcase episodes, merch and services, and accept payments through a built-in checkout with a secure admin panel.",
          dateCreated: "2023",
          image: "https://techemulsion.com/assets/portfolio/mic.jpg",
          url: "https://techemulsion.com/portfolio/podcastbeacon",
          genre: "SaaS, Creator Tools",
          keywords: [
            "podcast",
            "link in bio",
            "SaaS",
            "creator economy",
            "Podcast Beacon",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "Podcast Beacon",
              url: "https://techemulsion.com/portfolio/podcastbeacon",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is Podcast Beacon and how does it help podcasters?",
              answer:
                "Podcast Beacon is a link-in-bio SaaS hub specifically designed for podcasters to gather every important link on one branded page. Instead of having scattered links across different platforms, podcasters can launch multiple landing pages, showcase episodes, merchandise, and services, and accept payments through the built-in checkout system. The platform features a secure login system and clean admin panel that makes it simple to manage products, track clicks, and refresh content in seconds, turning scattered links into a single beacon that boosts listener engagement.",
            },
            {
              question: "What features does Podcast Beacon offer?",
              answer:
                "Podcast Beacon offers comprehensive features including multiple landing page creation for different purposes, episode showcasing to highlight specific podcast episodes, merchandise management and sales through the built-in checkout, service promotion for podcasters offering additional services, secure login and authentication system, clean admin panel for easy content management, click tracking and analytics to understand audience engagement, and quick content updates that allow podcasters to refresh their links and information in seconds.",
            },
            {
              question: "How does Podcast Beacon help podcasters monetize their content?",
              answer:
                "Podcast Beacon helps podcasters monetize their content by providing a built-in checkout system for accepting payments, enabling them to sell merchandise directly from their link-in-bio page, promoting additional services or offerings, tracking which links generate the most engagement and revenue, and converting profile traffic into revenue by consolidating all important links and monetization opportunities in one place. This approach maximizes the value of each visitor to the podcaster's profile.",
            },
          ],
        }}
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

      {/* Hero Section - no right side image */}
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
            src="/assets/portfolio/mic.jpg"
            alt="Podcast Beacon - Link-in-Bio SaaS Hub"
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
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: "white",
                  padding: "0",
                  "&:hover": { bg: "none" },
                }}>
                Home
              </ButtonLink>
              <FaChevronRight size={15} style={{ color: "white" }} />
              <ButtonLink
                href="/portfolio"
                size="lg"
                sx={{
                  bg: "none",
                  color: "white",
                  padding: "0",
                  "&:hover": { bg: "none" },
                }}>
                Portfolio
              </ButtonLink>
              <FaChevronRight size={15} style={{ color: "white" }} />
              <Text as="span" ml="2" color="white">
                Podcast Beacon
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
                Podcast Beacon
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="300"
                lineHeight="1.3"
                color="rgba(255,255,255,0.9)">
                Link-in-Bio SaaS Hub for Podcasters
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="3xl">
                Tech Emulsion built Podcast Beacon to let podcasters gather every important link on one branded page. Users launch multiple landing pages, showcase episodes, merch, and services, and accept payments through the built-in checkout. A secure login and clean admin panel make it simple to manage products, track clicks, and refresh content in seconds.
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
                  Podcast-tech SaaS in the creator-economy / MarTech space
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Product
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  Podcast Beacon (podbcn.com)
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Engagement
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  Link-in-bio SaaS hub for podcasters
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Outcome
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  One branded page, episodes, merch, services, payments
                </Text>
              </Box>
            </SimpleGrid>
            <Box pt={4} borderTop="1px solid" borderColor={dividerColor}>
              <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                Tech Stack
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.6">
                MERN + Stripe + AWS
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Building Podcast Beacon */}
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
                Building Podcast Beacon – A Comprehensive Platform for Podcasters
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Tech Emulsion built Podcast Beacon to let podcasters gather every important link on one branded page. Users launch multiple landing pages, showcase episodes, merch, and services, and accept payments through the built-in checkout. A secure login and clean admin panel make it simple to manage products, track clicks, and refresh content in seconds.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                By turning scattered links into a single beacon, the platform boosts listener engagement and converts profile traffic into revenue.
              </Text>
            </VStack>

            <VStack align="start" spacing={0} pt={2}>
              {[
                "Launch multiple landing pages on one branded page",
                "Showcase episodes, merch, and services",
                "Accept payments through the built-in checkout",
                "Secure login and clean admin panel to manage products, track clicks, refresh content in seconds",
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

      {/* Key Features */}
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
          <VStack align="start" spacing={12} w="full">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1">
              Key Features
            </Heading>

            <VStack align="start" spacing={8} maxW="4xl" w="full">
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Multiple landing pages:</Text> Users launch multiple landing pages for different purposes.
                </Text>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Episodes, merch, and services:</Text> Showcase episodes, merchandise, and services on one branded page.
                </Text>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Built-in checkout:</Text> Accept payments through the built-in checkout system.
                </Text>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Secure login and admin panel:</Text> A secure login and clean admin panel make it simple to manage products, track clicks, and refresh content in seconds.
                </Text>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Listener engagement and revenue:</Text> By turning scattered links into a single beacon, the platform boosts listener engagement and converts profile traffic into revenue.
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Architecture Overview */}
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
          <VStack align="start" spacing={10} maxW="4xl">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1">
              Architecture Overview
            </Heading>
            <VStack align="start" spacing={6}>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                Tech Stack: MERN + Stripe + AWS.
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Why This Matters */}
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
          opacity={0.3}
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
              lineHeight="1.1">
              Why This Matters
            </Heading>
            <VStack align="start" spacing={6}>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                Tech Emulsion built Podcast Beacon so podcasters can gather every important link on one branded page. The platform centralizes episodes, merch, services, and payments with a secure admin panel to manage content and track engagement, turning scattered links into a single beacon that boosts listener engagement and converts profile traffic into revenue.
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
              Ready to Get Started?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} opacity={0.9}>
              Let&apos;s discuss how we can help you achieve your business goals.
            </Text>
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
                Book a Call
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

export default CaseStudyPodcastBeacon;
