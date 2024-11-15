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

const CaseStudyJarvisreach = () => {
  const { colorMode } = useColorMode();
  return (
    <Box id="services">
      <Head>
        <title>Case Study: Jarvis - Tech Emulsion</title>
        <meta
          name="description"
          content="Learn how Tech Emulsion helped Jarvis, a leading SaaS company, scale their operations and improve customer satisfaction with custom software solutions."
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
                src="/assets/portfolio/jarvis.png"
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
                JarvisReach – Case Study
              </Text>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
                }
                fontSize="xl"
                mt="4"
                width={["auto", null, "100%"]}
              >
                Tech Emulsion developed JarvisReach, a SaaS for LinkedIn
                prospecting, enabling efficient data extraction, filtering, and
                automated email outreach. With subscription flexibility, team
                leaderboards, and admin analytics, JarvisReach streamlines lead
                management and boosts user productivity.
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
              Developing JarvisReach – A Comprehensive SaaS for LinkedIn
              Prospecting and Outreach
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
              JarvisReach is a powerful SaaS application designed to streamline
              LinkedIn prospecting and lead management. Aimed at users like
              sales professionals, recruiters, and business developers, it
              provides an efficient way to extract, manage, and engage with
              LinkedIn prospects. By combining data extraction, filtering, and
              automated outreach, JarvisReach addresses the core needs of
              professionals who rely on LinkedIn as their primary source for
              lead generation.
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
              The client wanted a solution that would transform the way users
              interact with LinkedIn for lead generation. The main objectives
              were to create a tool that could extract valuable prospect data,
              manage leads effectively, automate email outreach, and ultimately
              help users convert leads into opportunities without needing
              multiple disconnected tools. It needed to support both individual
              users and larger teams, ensuring scalability, security, and ease
              of use. Additionally, the platform required robust account
              management and flexible subscription models to cater to different
              user needs.
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
              Tech Emulsion developed JarvisReach as a fully-featured SaaS
              platform with several advanced functionalities tailored to meet
              the needs of LinkedIn prospectors:
            </Text>

            <Box pl={5} mb={4}>
              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                mb={2}
                sx={{ color: colorMode === "dark" ? "white" : "#004c4c" }}
              >
                Data Extraction and Enrichment
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{ color: colorMode === "dark" ? "white" : "gray.600" }}
              >
                We developed a Chrome extension that allows users to extract
                details directly from LinkedIn profiles. This includes contact
                information such as emails and phone numbers when available.
                Extracted data is saved within the JarvisReach dashboard, where
                users can create and organize folders to efficiently manage
                their prospect data.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                mb={2}
                sx={{ color: colorMode === "dark" ? "white" : "#004c4c" }}
              >
                Advanced Filtering and Search
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{ color: colorMode === "dark" ? "white" : "gray.600" }}
              >
                To make the prospecting process more efficient, we implemented
                advanced filtering options in the dashboard. Users can segment
                prospects by criteria like date ranges, industry, location, job
                title, or custom tags, allowing them to quickly identify
                relevant leads and streamline their outreach.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                mb={2}
                sx={{ color: colorMode === "dark" ? "white" : "#004c4c" }}
              >
                Automated Email Outreach
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{ color: colorMode === "dark" ? "white" : "gray.600" }}
              >
                JarvisReach includes an email outreach system that lets users
                initiate direct communication from within the platform.
                Personalized email sequences can be set up to send follow-ups at
                specified intervals, ensuring consistent engagement with
                prospects. The platform’s automated email feature allows users
                to manage large volumes of outreach without manual follow-up
                tracking.
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
                Tech Emulsion helped us bring JarvisReach to life. They built a
                user-friendly SaaS that makes LinkedIn prospecting much easier.
                Their work on features like automated email outreach and
                flexible subscriptions was key to our success.
                <FaQuoteRight size={60} />
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="gray.600" mt={5}>
                – Imran, Founder of JarvisReach
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
              Streamlined Prospecting: JarvisReach enabled users to efficiently
              extract and enrich LinkedIn data, reducing the time needed to find
              and organize potential leads.
              <br />
              Enhanced Outreach: Automated email sequences and email
              verification significantly improved engagement rates while
              reducing manual effort.
              <br />
              Efficient Team Management: The team leaderboards and
              location-specific management features helped organizations foster
              healthy competition and boost team productivity.
              <br />
              Scalable Growth: The flexible subscription model allowed the
              platform to cater to both individual users and teams, driving user
              adoption and platform scalability.
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
              Looking to develop an advanced SaaS solution that meets your
              unique business needs? Contact Tech Emulsion today to transform
              your vision into a reality.
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

export default CaseStudyJarvisreach;
