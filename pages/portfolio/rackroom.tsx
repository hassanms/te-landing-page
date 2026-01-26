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
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { FaAsterisk } from "react-icons/fa";

const CaseStudyRackroom = () => {
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
        title="Case Study: Rack Room - Tech Emulsion"
        description="Rackroom is a tailored, secure, and scalable business resource management system that supports complex booking management, client and engineer tracking, financial calculations, and automated SMS notifications via Twilio with Gantt chart visualizations."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/rackroom"
        portfolioData={{
          title: "Rack Room – Business Resource Management System",
          description:
            "Rackroom is a secure, scalable application built for a single owner to manage business resources. It supports complex booking management, client and engineer tracking, financial calculations, automated Twilio SMS notifications, and Gantt chart dashboards for visibility and control.",
          dateCreated: "2023",
          image: "https://techemulsion.com/assets/portfolio/download.jpg",
          url: "https://techemulsion.com/portfolio/rackroom",
          genre: "Custom Software, Resource Management",
          keywords: [
            "resource management",
            "booking system",
            "Twilio SMS",
            "Rack Room",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "Rack Room",
              url: "https://techemulsion.com/portfolio/rackroom",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is Rack Room and what problem does it solve?",
              answer:
                "Rack Room is a tailored, secure, and scalable business resource management system built for a single owner to manage their business's resources efficiently. It supports complex booking management with sophisticated date and time calculations, client and engineer tracking, financial calculations, and automated SMS notifications via Twilio. The system includes a Gantt chart dashboard and event logs that provide the owner with clear visibility and control over all business operations.",
            },
            {
              question: "What are the main features of Rack Room?",
              answer:
                "Rack Room offers comprehensive business management features including booking management with complex date and time calculations to handle scheduling conflicts and availability, client tracking to maintain detailed records of customer interactions, engineer tracking to monitor team member assignments and performance, financial calculations for accurate billing and revenue tracking, automated SMS notifications via Twilio for appointment reminders and updates, Gantt chart dashboard for visual project and resource scheduling, and event logs that provide a complete audit trail of all business activities.",
            },
            {
              question: "How does Rack Room help business owners manage their operations?",
              answer:
                "Rack Room helps business owners manage operations by providing a centralized system that handles all aspects of resource management, offering real-time visibility through Gantt charts and event logs, automating routine tasks like SMS notifications to reduce manual work, tracking financial data to support informed decision-making, managing complex scheduling scenarios with advanced date and time calculations, and providing a scalable architecture that can grow with the business while maintaining security and reliability.",
            },
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
                src="/assets/portfolio/download.jpg"
                alt="Farmin"
                width={1200}
                height={300}
                style={{
                  width: "70vw",
                  height: "100vh",
                  marginTop: 45,
                  objectFit: "cover",
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
                Rack Room – Case Study
              </Text>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "gray.700"
                }
                fontSize="xl"
                mt="4"
                width={["auto", null, "100%"]}>
                Rackroom is a tailored, secure, and scalable application built
                for a single owner to manage their business's resources. It
                supports booking management with complex date/time calculations,
                client and engineer tracking, financial calculations, and
                automated SMS notifications via Twilio. The Gantt chart
                dashboard and event logs provide the owner with clear visibility
                and control. Built with a modern tech stack and a robust
                database schema, Rackroom is optimized for the owner's specific
                business needs, with flexibility for future enhancements.
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
              Building Rack Room – A Comprehensive Platform for Business
              Management
            </Text>

            <Text
              fontSize="3xl"
              fontWeight="bold"
              mb={2}
              mt={10}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              {" "}
              Project Background
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
              <List spacing={3} mt={5}>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>Industry:</strong>
                    <span>Business Operations / SMB Management</span>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>Link:</strong>
                    <span>
                      <Link
                        href="https://app.therackroom.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer">
                        https://app.therackroom.co.uk/
                      </Link>
                    </span>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>Tech Stack:</strong>
                    <span>Next.js + Supabase + Railway</span>
                  </Box>
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

export default CaseStudyRackroom;
