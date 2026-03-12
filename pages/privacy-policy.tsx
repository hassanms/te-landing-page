import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
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
} from "@chakra-ui/react";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import { FaChevronRight, FaAsterisk, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
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
        <title>Privacy Policy - Tech Emulsion</title>
        <link rel="canonical" href="https://techemulsion.com/privacy-policy" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Tech Emulsion privacy policy. How we collect, use, and protect your data when you use our services and website."
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
              Privacy Policy
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
              Privacy policy
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
              How we collect, use, and protect information when you use Tech Emulsion.
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
            Introduction
          </Heading>
          <Text mb={10} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps}>
            Tech Emulsion is committed to protecting the
            privacy of visitors and users of our website(https://techemulsion.com). This Privacy
            Policy outlines how we collect, use, and safeguard your personal
            information.
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
            Information We Collect
          </Heading>
          <Text mb={5} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps}>
            We may collect the following types of information:
          </Text>
          <Text mb={5} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps} fontWeight="bold">
            Personal Information
          </Text>
          <VStack align="start" spacing={0} mb={10}>
            {["Name", "Email Address", "Phone Number", "Company information"].map((item, index) => (
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
                  <Text {...bodyTextProps}>{item}</Text>
                </HStack>
              </Box>
            ))}
          </VStack>
          <Text mb={5} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps} fontWeight="bold">
            Technical Information
          </Text>
          <VStack align="start" spacing={0} mb={10}>
            {["IP address", "Browser type and version", "Operating system", "Website usage data and analytics"].map(
              (item, index) => (
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
                    <Text {...bodyTextProps}>{item}</Text>
                  </HStack>
                </Box>
              )
            )}
          </VStack>

          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            How We Collect Information
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={4}>
            Information is collected through:
          </Text>
          <VStack align="start" spacing={0} mb={10}>
            {[
              "User submissions via contact forms or inquiries.",
              "Automated means such as cookies, analytics tools, and server logs.",
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
                  <Text {...bodyTextProps}>{item}</Text>
                </HStack>
              </Box>
            ))}
          </VStack>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Use of Information
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={5}>
            Tech Emulsion uses your information for:
          </Text>
          <VStack align="start" spacing={0} mb={10}>
            {[
              "Responding to inquiries and providing customer support.",
              "Improving our website, services, and user experience.",
              "Communicating promotional materials, newsletters, or updates (you can opt-out anytime).",
              "Ensuring website security and compliance.",
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
                  <Text {...bodyTextProps}>{item}</Text>
                </HStack>
              </Box>
            ))}
          </VStack>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Sharing of Information
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={5}>
            We will not sell, trade, or otherwise transfer your personal information to outside parties unless:
          </Text>
          <VStack align="start" spacing={0} mb={10}>
            {[
              "You explicitly consent to sharing.",
              "It is necessary to provide services or respond to inquiries.",
              "Required by law or regulatory bodies.",
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
                  <Text {...bodyTextProps}>{item}</Text>
                </HStack>
              </Box>
            ))}
          </VStack>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={3}
          >
            Security
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={10}>
            Tech Emulsion implements reasonable and industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
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
            Cookies
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={10}>
            We use cookies to enhance your experience, gather analytics, and track visits to our website. You can adjust your browser settings to refuse cookies, although this may limit some functionalities of our website.
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
            Third-party Links
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={10}>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these external websites. We
            recommend reviewing their respective privacy policies.
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
                Your Rights
              </Heading>
              <Text {...bodyTextProps}>
                You have the right to:
              </Text>
            </VStack>

            <VStack align="start" spacing={0} pt={4}>
              {[
                "Access your personal data.",
                "Request correction or deletion of your data.",
                "Withdraw consent for data processing.",
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
                    <Text {...bodyTextProps}>{item}</Text>
                  </HStack>
                </Box>
              ))}
            </VStack>
            <Text mt={6} sx={{ whiteSpace: "pre-wrap" }} {...bodyTextProps}>
              Please contact us to exercise these rights.
            </Text>
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
            Changes to this Privacy Policy
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="1.8" mb={10}>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page, and your continued use of the website after
            such changes indicates your acceptance.
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
            For any questions regarding this Privacy Policy, please reach out to
            us:
          </Text>
          <Box mb={10}>
            <List spacing={3}>
              <ListItem display="flex" alignItems="flex-start" justifyContent="flex-start" {...bodyTextProps}>
                <ListIcon as={FaEnvelope} color="brand.500" mt={1} />
                Email:{" "}
                <Link href="mailto:privacy@techemulsion.com" textDecoration="underline">
                  privacy@techemulsion.com
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

export default PrivacyPolicy;
