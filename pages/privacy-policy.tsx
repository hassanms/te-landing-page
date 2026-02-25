import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Icon,
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

const PrivacyPolicy = () => {
  const { colorMode } = useColorMode();
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  return (
    <Box id="services">
      <Head>
        <title>Privacy Policy - Tech Emulsion</title>
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
              Privacy Policy Page
            </Heading>
            <Text
              color={textColor}
              fontSize="lg"
              mt="4"
              width={["auto", null, "100%"]}>
              Last updated: July 31, 2025
            </Text>
          </Box>

          {/* Breadcrumb - matches portfolio style */}
          <Flex justify="flex-end" mt="4">
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
                sx={{
                  bg: "none",
                  color: textColor,
                  p: 0,
                  "&:hover": { bg: "none", color: headingColor },
                }}
              >
                Home
              </ButtonLink>
              <Icon as={FaChevronRight} color={textColor} boxSize={4} />
              <Text as="span" ml="2" color={headingColor}>
                Privacy Policy
              </Text>
            </ButtonGroup>
          </Flex>
        </Box>
        <Box mt={10} px="5">
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Introduction
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
            Tech Emulsion ("we", "our", or "us") is committed to protecting the
            privacy of visitors and users of our website,
            [https://techemulsion.com](https://techemulsion.com). This Privacy
            Policy outlines how we collect, use, and safeguard your personal
            information.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Information We Collect
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
            We may collect the following types of information:
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
            Personal Information
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
                Name
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Email Address
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Phone Number
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Company information
              </ListItem>
            </List>
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
            Technical Information
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
                IP address
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Browser type and version
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Operating system
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Website usage data and analytics
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
            How We Collect Information
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
            Information is collected through:
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
                User submissions via contact forms or inquiries.
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Automated means such as cookies, analytics tools, and server
                logs.
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
            Use of Information
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
            Tech Emulsion uses your information for:
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
                Responding to inquiries and providing customer support.
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Improving our website, services, and user experience.
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Communicating promotional materials, newsletters, or updates
                (you can opt-out anytime).
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Ensuring website security and compliance.
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
            Sharing of Information
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
            We will not sell, trade, or otherwise transfer your personal
            information to outside parties unless:
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
                You explicitly consent to sharing.
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                It is necessary to provide services or respond to inquiries.
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Required by law or regulatory bodies.
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
            Security
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
            Tech Emulsion implements reasonable and industry-standard security
            measures to protect your personal information from unauthorized
            access, alteration, disclosure, or destruction.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Cookies
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
            We use cookies to enhance your experience, gather analytics, and
            track visits to our website. You can adjust your browser settings to
            refuse cookies, although this may limit some functionalities of our
            website.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Third-party Links
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
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these external websites. We
            recommend reviewing their respective privacy policies.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Your Rights
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
            You have the right to:
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
            <List spacing={3}>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Access your personal data.
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Request correction or deletion of your data.
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                Withdraw consent for data processing.
              </ListItem>
            </List>
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
            Please contact us to exercise these rights.
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            sx={{
              color: colorMode === "dark" ? "white" : "#004c4c",
            }}>
            Changes to this Privacy Policy
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
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page, and your continued use of the website after
            such changes indicates your acceptance.
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
            For any questions regarding this Privacy Policy, please reach out to
            us:
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
                [privacy@techemulsion.com](mailto:privacy@techemulsion.com)
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

export default PrivacyPolicy;
