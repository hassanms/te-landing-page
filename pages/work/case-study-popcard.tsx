import {
  Box,
  Container,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const CaseStudyPopcard = () => {
  const { colorMode } = useColorMode();
  return (
    <Box id="services">
      <Head>
        <title>Case Study: Popcard - Tech Emulsion</title>
        <meta
          name="description"
          content="Learn how Tech Emulsion helped Popcard, a leading SaaS company, scale their operations and improve customer satisfaction with custom software solutions."
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF"
      ></Script>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          Calendly.initBadgeWidget({
            url: "https://calendly.com/hassanms/discovery-call",
            text: "Talk to Our CEO",
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
      <Container maxW="container.8xl" py="10">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Box
          display={{ base: "block", md: "flex" }}
          // px="15"
          justifyContent={"space-between"}
          mb={10}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              py: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              h: "100%",
              textAlign: "center",
            }}
          >
            <Box>
              <Image
                src="/assets/portfolio/popcard.png"
                alt="Artis"
                width={1200}
                height={300}
                style={{
                  width: "60vw",
                  height: "100vh",
                  marginTop: 45,
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box
              position="absolute"
              bottom="-15%"
              left="50%"
              transform="translate(-50%, -50%)"
              sx={{
                backgroundImage:
                  colorMode === "dark"
                    ? "url('/assets/background/pattern.jpg')"
                    : "url('/assets/background/light-pattern.jpg')",
                backdropBlur: "md",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                borderRadius: "md",
                p: 5,
                boxShadow: "md",
              }}
            >
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
                }
                fontSize="4xl"
                fontWeight={"500"}
                mt="4"
                width={"100%"}
                align={"center"}
              >
                Popcard – Case Study
              </Text>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
                }
                fontSize="xl"
                mt="4"
                width={["auto", null, "100%"]}
              >
                Tech Emulsion developed a SaaS for PopCard.io, enabling
                businesses to manage locations, teams, and customer reviews via
                NFC cards and QR codes. Features included secure authentication
                with social logins, analytics, leaderboards, and Stripe
                subscriptions, enhancing engagement and revenue.
              </Text>
            </Box>
          </Box>
        </Box>
        <Container maxW="container.xl" py="20">
          <BackgroundGradient height="100%" zIndex="-1" />

          {/* Case Study Content */}
          <Box mt={10} px="5">
            <Text
              fontSize="4xl"
              w={["100%", null, "70%"]}
              fontWeight="bold"
              mb={10}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}
            >
              Case Study: Developing PopCard.io – A SaaS Platform for Seamless
              Digital Networking and Review Management
            </Text>

            <Text
              fontSize="4xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}
            >
              Client Background
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
              }}
            >
              PopCard.io is an innovative company offering digital business
              cards powered by NFC technology and QR codes. Their mission is to
              revolutionize how professionals network and how businesses manage
              customer feedback. By providing a convenient and eco-friendly
              alternative to traditional paper cards and cumbersome review
              systems, PopCard.io enables users to share contact information and
              gather customer reviews with a simple tap or scan.
            </Text>

            <Text
              fontSize="4xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}
            >
              Challenge
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
              }}
            >
              PopCard.io aimed to develop a scalable SaaS platform that would: -
              Implement a Robust Authentication System: Provide secure user
              signup, login, and password recovery, including social login
              options with Google and Apple accounts. - Enable Multi-Location
              Management: Allow businesses to track reviews based on various
              locations like restaurants, cafes, or stores, with the ability to
              add multiple locations. - Foster Team Collaboration: Create
              separate team sections for each location, featuring leaderboards
              to encourage healthy competition among staff members in collecting
              reviews. - Deliver Comprehensive Statistics: Offer detailed
              analytics showing statistics for selected locations over time
              frames like 7 days, 1 month, 3 months, or 1 year, as well as
              generalized stats per location. - Integrate a Subscription Model:
              Provide one free location and offer additional locations through a
              paid subscription, managed via Stripe. - Offer Account and Billing
              Management: Include settings where users can manage their account
              details and billing information seamlessly.
            </Text>

            <Text
              fontSize="4xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}
            >
              Solution
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
              }}
            >
              Tech Emulsion developed a comprehensive SaaS platform tailored to
              PopCard.io&apos;s needs:
            </Text>

            <Box pl={5} mb={4}>
              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                mb={2}
                sx={{ color: colorMode === "dark" ? "white" : "#004c4c" }}
              >
                Robust Authentication System
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{ color: colorMode === "dark" ? "white" : "gray.600" }}
              >
                Secure signup, login, and password recovery functionalities,
                with social login options for Google and Apple.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                mb={2}
                sx={{ color: colorMode === "dark" ? "white" : "#004c4c" }}
              >
                Multi-Location Management
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{ color: colorMode === "dark" ? "white" : "gray.600" }}
              >
                A location dashboard for adding and managing multiple locations,
                with one free and additional locations available through a paid
                subscription.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                mb={2}
                sx={{ color: colorMode === "dark" ? "white" : "#004c4c" }}
              >
                Team Collaboration and Leaderboards
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{ color: colorMode === "dark" ? "white" : "gray.600" }}
              >
                Separate team sections for each location with leaderboards to
                track staff performance in collecting reviews.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                mb={2}
                sx={{ color: colorMode === "dark" ? "white" : "#004c4c" }}
              >
                Advanced Statistics and Analytics
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{ color: colorMode === "dark" ? "white" : "gray.600" }}
              >
                Detailed analytics showing key metrics for selected locations
                over time, and generalized stats per location.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                mb={2}
                sx={{ color: colorMode === "dark" ? "white" : "#004c4c" }}
              >
                Subscription and Payment Integration
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{ color: colorMode === "dark" ? "white" : "gray.600" }}
              >
                Stripe integration for secure subscription payments, with user
                options to manage plans and view billing history.
              </Text>
            </Box>

            <Box
              sx={{
                width: "100%",
                py: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Text
                sx={{
                  whiteSpace: "pre-wrap",
                  fontSize: "4xl",
                  fontWeight: "normal",
                  lineHeight: "1.5",
                  letterSpacing: "normal",
                  textAlign: "left",
                  color: colorMode === "dark" ? "white" : "gray.600",
                  display: "flex",
                  width: "60%",
                }}
              >
                <FaQuoteLeft
                  size={60}
                  style={{ marginRight: 10, marginTop: -10 }}
                />
                Tech Emulsion has been instrumental in elevating our platform.
                Their expertise in developing user-friendly features like
                multi-location management and team leaderboards has
                significantly enhanced our service. We&apos;ve seen remarkable
                growth and increased engagement thanks to their solutions.
                <FaQuoteRight size={60} />
              </Text>
            </Box>

            <Text
              fontSize="4xl"
              fontWeight="bold"
              mb={2}
              mt={10}
              sx={{ color: colorMode === "dark" ? "white" : "#004c4c" }}
            >
              Results
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
              }}
            >
              Enhanced User Experience: Users can easily sign up, log in, and
              recover passwords, with social logins for added convenience.
              Scalable Location Management: Businesses can manage multiple
              locations, scaling operations through a flexible subscription
              model. Improved Team Engagement: Leaderboards increase staff
              motivation, leading to more customer feedback. Data-Driven
              Insights: Comprehensive statistics enable informed business
              decisions. Revenue Growth: The subscription model has opened new
              revenue streams for PopCard.io, contributing to financial growth.
            </Text>
            {/* <Box mt={16} px="5">
              <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
                Visual Showcase
              </Text>
              <SimpleGrid columns={[1, 2, 3]} spacing={5}>
                <Box>
                  <Image
                    src="/assets/screenshots/screenshot1.png"
                    alt="Atarim Platform Screenshot 1"
                    width={500}
                    height={300}
                  />
                </Box>
                <Box>
                  <Image
                    src="/assets/screenshots/screenshot2.png"
                    alt="Atarim Platform Screenshot 2"
                    width={500}
                    height={300}
                  />
                </Box>
                <Box>
                  <Image
                    src="/assets/screenshots/screenshot3.png"
                    alt="Atarim Platform Screenshot 3"
                    width={500}
                    height={300}
                  />
                </Box>
              </SimpleGrid>
            </Box> */}
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundImage:
                colorMode === "dark"
                  ? "url('/assets/background/pattern.jpg')"
                  : "url('/assets/background/light-pattern.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              py: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              h: "100%",
              textAlign: "center",
            }}
          >
            <Text
              mb={10}
              textAlign="center"
              color={
                colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
              }
              fontSize="xl"
              fontWeight="bold"
              width={["auto", null, "60%"]}
            >
              Ready to transform your innovative idea into a powerful SaaS
              solution? Contact Tech Emulsion today to turn your vision into
              reality.
            </Text>

            <Box>
              <Text fontSize="2xl" fontWeight="bold" mb={6}>
                Ready to Get Started?
              </Text>
              <Text
                fontSize="xl"
                mb={10}
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
                }
              >
                Let&apos;s discuss how we can help you achieve your business
                goals.
              </Text>
              <Box
                as="a"
                href="https://calendly.com/hassanms/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                bg="brand.500"
                color="white"
                px={8}
                py={4}
                borderRadius="md"
                fontSize="xl"
                fontWeight="bold"
                _hover={{ bg: "brand.600" }}
                sx={{
                  textDecoration: "none",
                  boxShadow: "md",
                  backdropFilter: "saturate(180%) blur(20px)",
                  backgroundClip: "padding-box",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  color: "#004c4c",
                }}
              >
                Book a Call
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default CaseStudyPopcard;
