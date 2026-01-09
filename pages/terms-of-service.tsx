import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  List,
  ListItem,
  ListIcon,
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
import { FaChevronRight, FaAsterisk } from "react-icons/fa";

const TermsOfService = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  return (
    <Box id="services">
      <Head>
        <title>Terms of Service - Tech Emulsion</title>
        <meta
          name="description"
          content="Get in touch with Tech Emulsion for your next project. We specialize in web development, SaaS solutions, Chrome extensions, QA testing, cloud services, and artificial intelligence."
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF"></Script>
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
      <Container maxW="container.xl" py="20">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Box
          display={{ base: "block", md: "flex" }}
          px="15"
          mt={10}
          justifyContent={"space-between"}
          mb={10}>
          <Box>
            <Heading as="h2" size="lg">
              Terms of Service Page
            </Heading>
            <Text
              color={textColor}
              fontSize="lg"
              mt="4"
              width={["auto", null, "100%"]}>
              Last updated: July 31, 2025
            </Text>
          </Box>

          {/* Explore Services */}
          <VStack
            spacing={4}
            display="flex"
            justifyContent={["flex-start", null, "flex-end"]}
            width={["100%", null, "auto"]}
            alignItems="end"
            mt="4">
            <ButtonGroup
              style={{
                backgroundColor: " none",
                fontSize: "1rem",
                color: "muted",
                display: "flex",
                alignItems: "center",
              }}>
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: "muted",
                  padding: "0",
                  "&:hover": {
                    bg: "none",
                  },
                }}>
                Home
              </ButtonLink>
              <FaChevronRight
                size={12}
                style={{
                  color: colorMode === "light" ? "#004c4c" : "white",
                }}
              />
              <Text
                as="span"
                ml="2"
                sx={{
                  color: colorMode === "light" ? "#004c4c !important" : "white",
                  whiteSpace: "nowrap",
                }}>
                Terms of Service
              </Text>
            </ButtonGroup>
          </VStack>
        </Box>
        <Box mt={10} px="5">
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Acceptance of Terms
          </Text>
          <Text
            mb={10}
            fontSize="3xl"
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            By accessing and using the Tech Emulsion website
            ("[https://techemulsion.com](https://techemulsion.com)") and its
            services, you acknowledge and agree to comply with these Terms of
            Service ("Terms"). If you disagree with these Terms, you may not use
            our website or services.
          </Text>

          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Description of Services
          </Text>
          <Text
            mb={10}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            Tech Emulsion provides software development services, including but
            not limited to SaaS development, AI integration, automation, web
            applications, mobile app development, and technology consulting.
          </Text>

          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            User Obligations
          </Text>
          <Text
            mb={4}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            When using our website and services, you agree:
          </Text>
          <Text
            mb={10}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            <List spacing={3}>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                To provide accurate and up-to-date information.
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Not to engage in any activity that disrupts or interferes with
                our services.
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Not to misuse our website for illegal purposes or to spread
                malicious software.
              </ListItem>
            </List>
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Intellectual Property
          </Text>
          <Text
            mb={10}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            All content, including text, graphics, logos, software, and
            proprietary materials on our website, is owned by Tech Emulsion and
            protected by intellectual property laws. You may not reproduce,
            distribute, or create derivative works from our content without
            prior written consent.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Third-Party Links
          </Text>
          <Text
            mb={10}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            Our website may include links to third-party websites. Tech Emulsion
            is not responsible for the content or practices of these external
            websites and encourages users to review their individual terms and
            privacy policies.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Limitation of Liability
          </Text>
          <Text
            mb={10}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            Tech Emulsion will not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of your
            access to, or use of, the website and services. Our liability shall
            be limited to the maximum extent permitted by law.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Indemnification
          </Text>
          <Text
            mb={10}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            You agree to indemnify, defend, and hold harmless Tech Emulsion, its
            employees, contractors, partners, and affiliates, from and against
            any and all claims, liabilities, damages, losses, costs, or expenses
            arising from your use of the website or services or violation of
            these Terms.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Service Modification
          </Text>
          <Text
            mb={10}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            Tech Emulsion reserves the right to modify, suspend, or discontinue,
            temporarily or permanently, any service provided on the website,
            with or without prior notice.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Privacy
          </Text>
          <Text
            mb={10}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            Your privacy is important to us. Please review our Privacy Policy to
            understand our practices regarding the collection and use of your
            personal information.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Governing Law
          </Text>
          <Text
            mb={10}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            These Terms are governed by and construed according to the laws of
            Pakistan. Any disputes arising from or related to these Terms shall
            be exclusively resolved by the competent courts in Peshawar,
            Pakistan.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Changes to Terms
          </Text>
          <Text
            mb={10}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            Tech Emulsion may update these Terms periodically. We encourage
            users to review these Terms regularly. Your continued use of our
            website or services after any changes indicates your acceptance of
            the updated Terms.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Contact Us
          </Text>
          <Text
            mb={5}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            If you have questions or concerns about these Terms, please contact
            us at:
          </Text>
          <Text
            mb={10}
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "2xl",
              fontWeight: "normal",
              lineHeight: "1.5",
              letterSpacing: "normal",
              textAlign: "left",
              color: colorMode === "dark" ? "white" : "gray.600",
            }}>
            <List spacing={3}>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                **Contact**
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                Email:
                [contact@techemulsion.com](mailto:contact@techemulsion.com)
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                Address: Peshawar, Pakistan
              </ListItem>
            </List>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsOfService;
