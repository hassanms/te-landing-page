import {
  Box,
  Container,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { FaAsterisk, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const CaseStudyFarmin = () => {
  const { colorMode } = useColorMode();
  return (
    <Box id="services">
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <EnhancedSEO
        title="Case Study: Farmin - Tech Emulsion"
        description="Farmin is an AI-powered SaaS platform for satellite image analysis that detects objects such as cars, ships, and oil spills using Mapbox, YOLO models, and OpenCV, with change detection and data annotation tools deployed on AWS."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/farmin"
        portfolioData={{
          title: "Farmin – AI-Powered Satellite Image Detection SaaS",
          description:
            "Tech Emulsion built Farmin, an AI-powered SaaS for satellite image analysis. Using Mapbox, YOLO models, and OpenCV, it detects objects like cars, ships, and oil spills and provides change detection and annotation tools on AWS.",
          dateCreated: "2023",
          image: "https://techemulsion.com/assets/portfolio/farmin.avif",
          url: "https://techemulsion.com/portfolio/farmin",
          genre: "AI SaaS, Remote Sensing",
          keywords: [
            "AI SaaS",
            "satellite imagery",
            "object detection",
            "YOLO",
            "remote sensing",
            "Tech Emulsion",
            "Farmin",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            { name: "Farmin", url: "https://techemulsion.com/portfolio/farmin" },
          ],
        }}
      />
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
      <Container maxW="container.8xl" py={{ base: "0", md: "20", lg: "5" }}>
        <Box
          display={{ base: "block", md: "flex" }}
          // px="15"
          justifyContent={"space-between"}>
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
            }}>
            <Box>
              <Image
                src="/assets/portfolio/farmin.avif"
                alt="Farmin"
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
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              borderRadius="md"
              p={5}
              boxShadow="md"
              mt={{ base: "-40vh", md: "-15vh", lg: "-15vh" }}
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
              }}>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "gray.700"
                }
                fontSize="3xl"
                fontWeight={"500"}
                mt="4"
                width={"100%"}
                align={"center"}>
                Farmin – Case Study
              </Text>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "gray.700"
                }
                fontSize="xl"
                mt="4"
                width={["auto", null, "100%"]}>
                Tech Emulsion built Farmin, an AI-powered SaaS for satellite
                image analysis. Using Mapbox, YOLO models, and OpenCV, it
                detects objects like cars, ships, and oil spills. We added
                change detection, a data annotation tool, and deployed it on
                AWS, enabling real-time insights and scalable remote sensing.
              </Text>
            </Box>
          </Box>
        </Box>
        <Container maxW="container.xl" py={{ base: "2", lg: "10" }}>
          <BackgroundGradient height="100%" zIndex="-1" />

          {/* Case Study Content */}
          <Box mt={10} px="5">
            <Text
              fontSize="3xl"
              w={["100%", null, "70%"]}
              fontWeight="bold"
              mb={10}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              Building Farmin – AI-Powered Satellite Image Detection Platform
            </Text>

            <Text
              fontSize="3xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
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
              }}>
              Farmin is a cutting-edge SaaS platform designed for remote sensing
              and object detection in satellite imagery. The platform leverages
              AI to analyze environmental and infrastructure data, assisting
              industries like agriculture, defense, and environmental
              monitoring.
            </Text>

            <Text
              fontSize="3xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
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
              }}>
              Farmin required a powerful, intuitive application capable of
              identifying and tracking changes in satellite images, such as
              vehicles, buildings, ships, and environmental hazards like oil
              spills. The system also needed a robust data annotation tool for
              continuous learning and seamless map integration for an intuitive
              user experience.
            </Text>

            <Text
              fontSize="3xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
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
              }}>
              Tech Emulsion developed a fully-featured web application that
              integrated sophisticated AI and deep learning capabilities for
              object detection, powered by Python and Django for the backend:
            </Text>

            <Box pl={5} mb={4}>
              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Mapbox Integration & Location Search:
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                We implemented Mapbox for accurate, responsive mapping and a
                search function to locate areas by name and mark target
                locations for monitoring.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                {" "}
                AI-Driven Object Detection:
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Using OpenCV and YOLO-based deep learning models, the system
                detects various objects—including cars, ships, buildings, and
                oil spills—within satellite images, providing real-time,
                actionable insights.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Change Detection & Data Annotation Tool:
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                We added a micro-frontend data annotation tool for customized
                tagging and refinement of detection results, enhancing model
                accuracy over time. Change detection features track
                environmental and structural changes across different time
                frames.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                {" "}
                AWS Deployment:
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Leveraging EC2 and S3, we ensured a scalable, secure
                infrastructure optimized for performance, facilitating seamless
                access to vast satellite data and images.
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
                h: "100%",
                textAlign: "center",
              }}>
              <FaQuoteLeft
                size={10}
                style={{ position: "absolute", left: "15%", top: 40 }}
              />
              <Text
                sx={{
                  whiteSpace: "pre-wrap",
                  fontSize: { base: "md", lg: "4xl" },
                  fontWeight: "normal",
                  lineHeight: "1.5",
                  letterSpacing: "normal",
                  textAlign: "left",
                  color: colorMode === "dark" ? "white" : "gray.600",
                  display: "flex",
                  width: "60%",
                }}>
                Tech Emulsion can work on different application technologies and
                is capable of adapting quickly to changing needs.
              </Text>
              <FaQuoteRight
                size={10}
                style={{ position: "absolute", right: "20%", bottom: 40 }}
              />
            </Box>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              mb={2}
              mt={10}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
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
              }}>
              <List spacing={3}>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  Enhanced detection accuracy for objects like vehicles,
                  buildings, and environmental hazards.
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  Robust infrastructure, ensuring real-time access to satellite
                  data.
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  Intuitive user experience with integrated mapping and
                  customizable annotations, empowering users to monitor and
                  respond to changes efficiently.
                </ListItem>
              </List>
            </Text>
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
            }}>
            <Text
              mb={10}
              textAlign="center"
              color={
                colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
              }
              fontSize="xl"
              fontWeight="bold"
              width={["auto", null, "60%"]}>
              Ready to bring AI-powered insights to your industry? Contact Tech
              Emulsion for tailored solutions in satellite image detection and
              analysis.
            </Text>

            <Box>
              <Text fontSize="2xl" fontWeight="bold" mb={6}>
                Ready to Get Started?
              </Text>
              <Text
                fontSize="xl"
                mb={10}
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "gray.700"
                }>
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
                }}>
                Book a Call
              </Box>
            </Box>
          </Box>
        </Container>{" "}
      </Container>
    </Box>
  );
};

export default CaseStudyFarmin;
