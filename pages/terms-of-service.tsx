import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import { FaChevronRight, FaAsterisk, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TermsOfService = () => {
  const { colorMode } = useColorMode();
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const dividerColor = useColorModeValue("gray.200", "gray.600");
  const bodyTextProps = {
    fontSize: { base: "lg", md: "xl" },
    color: textColor,
    lineHeight: "1.8",
  } as const;
  return (
    <Box position="relative" minH="100vh" color={headingColor}>
      <Head>
        <title>Terms of Service - Tech Emulsion</title>
        <link rel="canonical" href="https://techemulsion.com/terms-of-service" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Tech Emulsion terms of service. Terms and conditions for using our website and services."
        />
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
            text: "Talk to Us",
            color: "#004c4c",
            textColor: "#ffffff",
          });
        }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
        overflow="hidden"
        pointerEvents="none"
      >
        <BackgroundGradient height="100%" width="100%" />
      </Box>

      <Box pt={{ base: 20, md: 24 }} />
      <Container maxW="container.xl" pt={6} pb={20} position="relative" zIndex={1}>
        {/* Breadcrumb */}
        <Flex justify="flex-end" mb={8} display={{ base: "none", md: "flex" }}>
          <ButtonGroup sx={{ bg: "none", fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <ButtonLink
              href="/"
              size="lg"
              sx={{ bg: "none", color: textColor, p: 0, "&:hover": { bg: "none", color: headingColor } }}
            >
              Home
            </ButtonLink>
            <Icon as={FaChevronRight} color={textColor} boxSize={4} />
            <Text as="span" ml="2" color={headingColor}>
              Terms of Service
            </Text>
          </ButtonGroup>
        </Flex>

        {/* Header section - match services page */}
        <Box
          minH={{ base: "280px", md: "35vh" }}
          display={{ base: "block", md: "grid" }}
          gridTemplateColumns={{ md: "1fr 1fr" }}
          borderTopWidth={{ base: 0, md: "1px" }}
          borderColor={dividerColor}
          mx={-6}
          px={6}
        >
          <Box
            py={8}
            pr={{ base: 0, md: 6 }}
            display="flex"
            alignItems="flex-start"
            borderRightWidth={{ md: "1px" }}
            borderColor={dividerColor}
            sx={{ borderColor: "gray.200 !important", _dark: { borderColor: "gray.600 !important" } }}
          >
            <Heading as="h1" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor}>
              Terms of service
            </Heading>
          </Box>

          <Box
            pl={{ base: 0, md: 6 }}
            py={{ base: 4, md: 8 }}
            display="flex"
            flexDirection="column"
            alignItems={{ base: "flex-start", md: "flex-end" }}
            justifyContent={{ base: "flex-start", md: "flex-end" }}
          >
            <Text color={textColor} fontSize="18px" lineHeight="tall" maxW={{ md: "420px" }} mb={4}>
              The terms and conditions for using Tech Emulsion’s website and services.
            </Text>
            <Text color={textColor} fontSize="sm" maxW={{ md: "420px" }}>
              Last updated: July 31, 2025
            </Text>
          </Box>
        </Box>

        {/* Divider bar */}
        <Box bg="transparent" py={2} px={6} mx={-6} borderTopWidth="1px" borderColor={dividerColor} />

        <Box mt={{ base: 8, md: 10 }} px={{ base: 0, md: 1 }}>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Acceptance of Terms
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={10}>
            By accessing and using the Tech Emulsion website
            ("[https://techemulsion.com](https://techemulsion.com)") and its
            services, you acknowledge and agree to comply with these Terms of
            Service ("Terms"). If you disagree with these Terms, you may not use
            our website or services.
          </Text>

          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Description of Services
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={10}>
            Tech Emulsion provides software development services, including but
            not limited to SaaS development, AI integration, automation, web
            applications, mobile app development, and technology consulting.
          </Text>

          <Box
            as="section"
            py={{ base: 10, md: 12 }}
            px={{ base: 0, md: 0 }}
          >
            <VStack align="start" spacing={4}>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1"
              >
                User Obligations
              </Heading>
              <Text {...bodyTextProps}>
                When using our website and services, you agree:
              </Text>
            </VStack>

            <VStack align="start" spacing={0} pt={4}>
              {[
                "To provide accurate and up-to-date information.",
                "Not to engage in any activity that disrupts or interferes with our services.",
                "Not to misuse our website for illegal purposes or to spread malicious software.",
              ].map((item, index) => (
                <Box key={item} w="full">
                  <HStack spacing={5} py={3} align="flex-start">
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="bold"
                      color="teal.400"
                      lineHeight="1.2"
                      minW="48px"
                    >
                      {String(index + 1).padStart(2, "0")}.
                    </Text>
                    <Text {...bodyTextProps} fontWeight="medium" color={headingColor}>
                      {item}
                    </Text>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Intellectual Property
          </Heading>
          <Text mb={10} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps}>
            All content, including text, graphics, logos, software, and
            proprietary materials on our website, is owned by Tech Emulsion and
            protected by intellectual property laws. You may not reproduce,
            distribute, or create derivative works from our content without
            prior written consent.
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Third-Party Links
          </Heading>
          <Text mb={10} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps}>
            Our website may include links to third-party websites. Tech Emulsion
            is not responsible for the content or practices of these external
            websites and encourages users to review their individual terms and
            privacy policies.
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Limitation of Liability
          </Heading>
          <Text mb={10} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps}>
            Tech Emulsion will not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of your
            access to, or use of, the website and services. Our liability shall
            be limited to the maximum extent permitted by law.
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Indemnification
          </Heading>
          <Text mb={10} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps}>
            You agree to indemnify, defend, and hold harmless Tech Emulsion, its
            employees, contractors, partners, and affiliates, from and against
            any and all claims, liabilities, damages, losses, costs, or expenses
            arising from your use of the website or services or violation of
            these Terms.
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Service Modification
          </Heading>
          <Text mb={10} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps}>
            Tech Emulsion reserves the right to modify, suspend, or discontinue,
            temporarily or permanently, any service provided on the website,
            with or without prior notice.
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Privacy
          </Heading>
          <Text mb={10} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps}>
            Your privacy is important to us. Please review our Privacy Policy to
            understand our practices regarding the collection and use of your
            personal information.
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Governing Law
          </Heading>
          <Text mb={10} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps}>
            These Terms are governed by and construed according to the laws of
            Pakistan. Any disputes arising from or related to these Terms shall
            be exclusively resolved by the competent courts in Peshawar,
            Pakistan.
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Changes to Terms
          </Heading>
          <Text mb={10} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps}>
            Tech Emulsion may update these Terms periodically. We encourage
            users to review these Terms regularly. Your continued use of our
            website or services after any changes indicates your acceptance of
            the updated Terms.
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Contact Us
          </Heading>
          <Text mb={5} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps}>
            If you have questions or concerns about these Terms, please contact
            us at:
          </Text>
          <Box mb={10}>
            <List spacing={3}>
              <ListItem display="flex" alignItems="flex-start" justifyContent="flex-start" {...bodyTextProps}>
                <ListIcon as={FaEnvelope} color="brand.500" mt={1} />
                Email:{" "}
                <Link href="mailto:contact@techemulsion.com" textDecoration="underline">
                  contact@techemulsion.com
                </Link>
              </ListItem>
              <ListItem display="flex" alignItems="flex-start" justifyContent="flex-start" {...bodyTextProps}>
                <ListIcon as={FaMapMarkerAlt} color="brand.500" mt={1} />
                Address: Peshawar, Pakistan
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsOfService;
