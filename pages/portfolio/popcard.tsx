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
} from "@chakra-ui/react";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { ButtonLink } from "components/button-link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const CaseStudyPopcard = () => {
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
        title="Case Study: Popcard - Tech Emulsion"
        description="PopCard.io is a SaaS platform that enables businesses to manage locations, teams, and customer reviews via NFC cards and QR codes, with secure authentication, analytics, leaderboards, and Stripe subscription billing."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/popcard"
        portfolioData={{
          title: "Popcard – SaaS for Managing Review Cards",
          description:
            "Tech Emulsion developed a SaaS for PopCard.io, enabling businesses to manage locations, teams, and customer reviews via NFC cards and QR codes with secure authentication, analytics, leaderboards, and Stripe subscriptions.",
          dateCreated: "2023",
          image: "https://techemulsion.com/assets/portfolio/popcard.png",
          url: "https://techemulsion.com/portfolio/popcard",
          genre: "SaaS, Reviews Management",
          keywords: [
            "SaaS",
            "customer reviews",
            "NFC cards",
            "QR codes",
            "Popcard",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "Popcard",
              url: "https://techemulsion.com/portfolio/popcard",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is Popcard and what does it do?",
              answer:
                "Popcard is a SaaS platform that enables businesses to manage locations, teams, and customer reviews via NFC cards and QR codes. The platform provides a comprehensive solution for businesses with multiple locations or teams, allowing them to streamline review collection, manage team performance, and track customer feedback across different locations. It features secure authentication with social logins, analytics to track review performance, leaderboards to motivate teams, and Stripe subscription integration for flexible billing.",
            },
            {
              question: "How does Popcard help businesses manage reviews?",
              answer:
                "Popcard simplifies review management by providing NFC cards and QR codes that customers can easily scan to leave reviews, enabling businesses to manage multiple locations from a single dashboard, tracking team performance through leaderboards, collecting customer reviews efficiently across different touchpoints, and providing analytics to understand review trends and customer satisfaction. This approach helps businesses build their online reputation and improve customer engagement.",
            },
            {
              question: "What are the key features of Popcard?",
              answer:
                "Popcard offers several key features including location management for businesses with multiple sites, team management and performance tracking, customer review collection via NFC cards and QR codes, secure authentication with social login options, comprehensive analytics to track review performance and engagement, leaderboards to motivate teams and encourage healthy competition, and Stripe subscription integration for flexible billing options that scale with business needs.",
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

      {/* Hero Section */}
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
            src="/assets/portfolio/popcard.png"
            alt="Popcard - SaaS Platform for Digital Business Cards"
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
              }}>
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: "white",
                  p: 0,
                  "&:hover": { bg: "none", color: "white" },
                }}
              >
                Home
              </ButtonLink>
              <Icon as={FaChevronRight} color="white" boxSize={4} />
              <ButtonLink
                href="/portfolio"
                size="lg"
                sx={{
                  bg: "none",
                  color: "white",
                  p: 0,
                  "&:hover": { bg: "none", color: "white" },
                }}
              >
                Portfolio
              </ButtonLink>
              <Icon as={FaChevronRight} color="white" boxSize={4} />
              <Text as="span" ml="2" color="white">
                Popcard
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
                Popcard
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="300"
                lineHeight="1.3"
                color="rgba(255,255,255,0.9)">
                Digital Business Cards Powered by NFC Technology
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="rgba(255,255,255,0.8)"
                lineHeight="1.7"
                maxW="3xl">
                Instantly share contact information and collect customer reviews using NFC cards and QR codes. Enable businesses to manage multiple locations, track team performance, and gain insights through comprehensive analytics. Built with secure authentication, subscription management, and scalable architecture for growing enterprises.
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
                  SaaS / Digital Networking
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Client
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  Popcard
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Engagement
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  End-to-end digital networking platform
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                  Outcome
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.5">
                  Streamlined business networking
                </Text>
              </Box>
            </SimpleGrid>
            <Box pt={4} borderTop="1px solid" borderColor={dividerColor}>
              <Text fontSize="xs" color={textColor} mb={3} fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
                Tech Stack
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color={headingColor} fontWeight="semibold" lineHeight="1.6">
                NFC Technology, QR Codes, Stripe, Social Authentication
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* The Challenge */}
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
                The Challenge
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Traditional business networking relied on paper cards and manual processes, limiting scalability and efficiency for businesses with multiple locations and teams.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                Popcard required a comprehensive SaaS platform capable of secure authentication, multi-location management, team collaboration, advanced analytics, and subscription-based scaling.
              </Text>
            </VStack>

            <VStack align="start" spacing={0} pt={2}>
              {[
                "Implement robust authentication system with social login options",
                "Enable multi-location management for businesses with multiple sites",
                "Foster team collaboration with leaderboards and performance tracking",
                "Deliver comprehensive analytics and statistics over various time frames",
                "Integrate subscription model with Stripe for scalable billing",
                "Provide account and billing management for seamless user experience",
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
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }} alignItems="start">
            <VStack align="start" spacing={6}>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1">
                Our Approach
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                Tech Emulsion partnered with Popcard to develop a comprehensive digital networking platform that revolutionized business card sharing and customer review collection. We integrated NFC technology, advanced analytics, and scalable subscription management to create a modern solution for professional networking.
              </Text>
            </VStack>

            <VStack align="start" spacing={0} pt={2}>
              {[
                "Develop robust authentication with social login and secure password recovery",
                "Implement multi-location management with one free and paid additional locations",
                "Create team collaboration features with leaderboards for performance tracking",
                "Build comprehensive analytics showing statistics over 7 days, 1 month, 3 months, 1 year",
                "Integrate Stripe subscription system for flexible billing and account management",
                "Design scalable architecture supporting businesses of all sizes",
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

      {/* The Solution: Technical Architecture & Key Features */}
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
          <VStack align="start" spacing={12} w="full">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1">
              The Solution: Technical Architecture & Key Features
            </Heading>

            <VStack align="start" spacing={8} maxW="4xl" w="full">
              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Authentication System:</Text> Secure user signup, login, and password recovery with social login integration for Google and Apple accounts, ensuring seamless and safe access.
                </Text>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Multi-Location Management:</Text> Comprehensive location dashboard allowing businesses to add and manage multiple locations, with one free location and additional locations available through paid subscriptions.
                </Text>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Team Collaboration:</Text> Separate team sections for each location featuring leaderboards that encourage healthy competition among staff members in collecting reviews and engaging customers.
                </Text>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Advanced Analytics:</Text> Detailed statistics dashboard showing key metrics for selected locations over customizable time frames (7 days, 1 month, 3 months, 1 year) and generalized statistics per location.
              </Text>
            </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>Subscription Integration:</Text> Stripe-powered subscription system with flexible billing options, allowing users to manage plans, view billing history, and scale operations seamlessly.
              </Text>
              </Box>

              <Box>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                  <Text as="span" fontWeight="semibold" color={headingColor}>NFC & QR Technology:</Text> Digital business cards powered by NFC technology and QR codes, enabling instant contact sharing and customer review collection with a simple tap or scan.
              </Text>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Client Review */}
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
          <VStack align="start" spacing={10} w="full" maxW="3xl">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1">
              Client Review
            </Heading>
            <Box position="relative" w="full">
              <Box
                position="absolute"
                top={-2}
                left={0}
                color={accentColor}
                opacity={0.15}
                lineHeight={0}>
                <FaQuoteLeft size={72} />
              </Box>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color={textColor}
                lineHeight="1.8"
                fontStyle="italic"
                pl={{ base: 20, md: 24 }}
                pt={2}>
                Tech Emulsion has been instrumental in elevating our platform. Their expertise in developing user-friendly features like multi-location management and team leaderboards has significantly enhanced our service. We've seen remarkable growth and increased engagement thanks to their solutions.
              </Text>
              <HStack
                mt={8}
                pl={{ base: 20, md: 24 }}
                spacing={3}
                align="center">
                <Box w={12} h="1px" bg={accentColor} opacity={0.6} />
                <Text
                  fontSize="sm"
                  color={headingColor}
                  fontWeight="semibold"
                  letterSpacing="wide">
                  Popcard
                </Text>
              </HStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Impact & Results */}
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
                Impact & Results
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8">
                The platform delivered enhanced user experience, scalable operations, and significant business growth through streamlined digital networking and customer review management.
              </Text>
            </VStack>

            <VStack align="start" spacing={0} pt={2}>
              {[
                "Enhanced user experience with seamless signup, login, and social authentication",
                "Scalable location management enabling businesses to expand operations globally",
                "Improved team engagement through leaderboards and performance tracking",
                "Data-driven insights with comprehensive analytics over customizable time frames",
                "Revenue growth through flexible subscription model and new business opportunities",
                "Streamlined digital networking replacing traditional paper business cards",
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
      <Box
        bg={bgColor}
        py={{ base: 20, md: 24 }}
        position="relative">
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack align="start" spacing={12} maxW="4xl">
            <VStack align="start" spacing={6}>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1">
                Why This Matters
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={headingColor} fontWeight="semibold" lineHeight="1.8">
                Tech Emulsion transformed traditional business networking into a digital-first experience—enabling businesses to leverage NFC technology, comprehensive analytics, and scalable subscriptions for enhanced customer engagement and operational efficiency.
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
              Ready to Transform Your Digital Networking Experience?
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

export default CaseStudyPopcard;