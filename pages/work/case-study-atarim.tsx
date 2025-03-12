import {
  Box,
  Container,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { FaAsterisk, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const CaseStudyAtarim = () => {
  const { colorMode } = useColorMode();
  return (
    <Box id="services">
      <Head>
        <title>Case Study: Atarim - Tech Emulsion</title>
        <meta
          name="description"
          content="Learn how Tech Emulsion helped Atarim, a leading SaaS company, scale their operations and improve customer satisfaction with custom software solutions."
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
      <Container maxW="container.8xl" py={{ base: "0", md: "20", lg: "5" }}>
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
              py: { base: 0, md: 4, lg: 1 },
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
                src="/assets/portfolio/atarim.png"
                alt="Artis"
                width={1200}
                height={300}
                style={{
                  width: "100vw",
                  height: "100vh",
                  marginTop: 45,
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box
              // position="absolute"
              // bottom="-15%"
              // left="50%"
              // transform="translate(-50%, -50%)"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              borderRadius="md"
              // width=
              p={5}
              boxShadow="md"
              // mt={{ base: "-350px", md: "-100px" }} // Adjust margin for responsiveness
              mt={{ base: "-35vh", md: "-12vh", lg: "-10vh" }}
              maxWidth={{ base: "90%", lg: "50%" }}
              width={{ base: "90%", lg: "50%" }}
              height={{ base: "90%", lg: "50%" }}
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
                Atarim – Case Study
              </Text>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
                }
                fontSize="xl"
                mt="4"
                width={["auto", null, "100%"]}
              >
                Instantly comment on any design, from websites to graphics.
                Manage at scale and integrate your stack. Just click on any part
                to leave feedback and say goodbye to endless email/Slack chains.
              </Text>
            </Box>
          </Box>
        </Box>
        <Container maxW="container.xl" py={{ base: "2", lg: "10" }}>
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
              Transforming WPFeedback into Atarim – A Complete SaaS
              Collaboration Platform
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
              Atarim, formerly known as WPFeedback, started as a WordPress-based
              feedback and collaboration tool, offering users a way to
              communicate and provide visual feedback on WordPress websites.
              However, with ambitious growth plans, Atarim needed to expand
              beyond WordPress to become a versatile, SaaS-based collaboration
              platform for any website type.
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
              As a WordPress plugin, WPFeedback had limitations, particularly
              around payment flexibility, collaboration scope (limited to
              WordPress sites), and scalability. It required a strategic
              transformation into a SaaS product with visual collaboration
              across all web platforms, advanced infrastructure, and seamless
              user experience.
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
              Tech Emulsion partnered with Atarim to overhaul the platform from
              the ground up:
            </Text>

            <Box pl={5} mb={4}>
              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}
              >
                Transition to a SaaS Model:
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}
              >
                Transformed WPFeedback into a SaaS platform, enabling visual
                collaboration across all websites and shifting to a
                subscription-based payment model.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}
              >
                {" "}
                Chrome Extension Development:
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}
              >
                Developed a Chrome extension for feedback on various site types,
                expanding Atarim&apos;s adaptability.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}
              >
                Expanding Feature Set:
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}
              >
                Enhanced project management with tools like kanban boards,
                notifications, a WYSIWYG editor, and more, turning Atarim into a
                complete project management and feedback solution.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}
              >
                {" "}
                Automation & Integration:
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}
              >
                Added workflow automation and integrations with Slack, Jira,
                Asana, and other productivity tools.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}
              >
                {" "}
                Custom Scraping Solution:
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}
              >
                {" "}
                Created a web scraping feature for collaborative editing on
                external sites via a wildcard subdomain approach.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}
              >
                {" "}
                Infrastructure Scaling:
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}
              >
                {" "}
                Scaled the cloud infrastructure on AWS, with region-based load
                balancing, auto-scaling, and enhanced monitoring.
              </Text>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                py: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <FaQuoteLeft
                size={10}
                style={{ position: "absolute", left: "15%", top: 40 }}
              />
              <Text
                sx={{
                  whiteSpace: "pre-wrap",
                  fontSize: { base: "lg", lg: "4xl" },
                  fontWeight: "normal",
                  lineHeight: "1.5",
                  letterSpacing: "normal",
                  textAlign: "left",
                  color: colorMode === "dark" ? "white" : "gray.600",
                  display: "flex",
                  width: "60%",
                  // width: { base: "90%", md: "70%", lg: "60%" },
                }}
              >
                Tech Emulsion worked with us for four years, delivering
                outstanding results. Due to internal changes, we had to end the
                contract, but their hard work and dedication were always
                evident. I highly recommend them for any future projects.
              </Text>
              <FaQuoteRight
                size={10}
                style={{ position: "absolute", right: "22%", bottom: 40 }}
              />
            </Box>
            <Text
              fontSize="4xl"
              fontWeight="bold"
              mb={2}
              mt={10}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}
            >
              {" "}
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
              <List spacing={3}>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  Successfully launched Atarim as a SaaS, transforming the
                  WordPress plugin into a scalable solution for universal web
                  collaboration.
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  Helped secure $500K in funding by showcasing Atarim’s
                  innovative infrastructure and expanded capabilities.
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  Enhanced platform stability, decreasing latency and improving
                  uptime through region-based load balancing and auto-scaling.
                </ListItem>
              </List>
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

          {/* Visual Showcase / Gallery Section */}

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
              Discover how Tech Emulsion can revolutionize your product. Contact
              us or book a call to explore innovative, scalable solutions for
              your business.
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
        </Container>{" "}
      </Container>
    </Box>
  );
};

export default CaseStudyAtarim;
