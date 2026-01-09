import {
  Box,
  Container,
  Image,
  List,
  ListItem,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const CaseStudyAlifa = () => {
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
        title="Case Study: Alifa - Tech Emulsion"
        description="Learn how Tech Emulsion helped Alifa, a leading SaaS company, scaled their operations and improved client satisfaction with custom software solutions."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/alifa"
        portfolioData={{
          title: "Alifa - SaaS Platform Development",
          description:
            "Tech Emulsion developed a comprehensive SaaS platform for Alifa, enabling them to scale operations and improve client satisfaction through custom software solutions.",
          dateCreated: "2023",
          image: "https://techemulsion.com/assets/portfolio/file.jpg",
          url: "https://techemulsion.com/portfolio/alifa",
          genre: "SaaS Development",
          keywords: [
            "SaaS",
            "custom software",
            "web development",
            "Tech Emulsion",
            "Alifa",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            { name: "Alifa", url: "https://techemulsion.com/portfolio/alifa" },
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
          justifyContent={"space-between"}
          mb={10}>
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
                src="/assets/portfolio/file.jpg"
                alt="Alifa"
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
              // width=
              p={5}
              boxShadow="md"
              // mt={{ base: "-40px", md: "-100px" }} // Adjust margin for responsiveness
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
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
                }
                fontSize="4xl"
                fontWeight={"500"}
                mt="4"
                width={"100%"}
                align={"center"}>
                Alifa – Case Study
              </Text>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
                }
                fontSize="xl"
                mt="4"
                width={["auto", null, "100%"]}>
                Alifa is a cutting-edge client engagement and AI-driven sales
                SaaS (Software as a Service) platform designed to empower sales
                representatives by streamlining client interactions. By
                integrating advanced artificial intelligence (AI) capabilities,
                Alifa enhances productivity, automates repetitive tasks, and
                facilitates personalized client engagement. The platform is
                tailored to meet the unique demands of modern sales teams,
                offering tools to improve efficiency and boost customer
                satisfaction.
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
              }}>
              Developing Alifa – A Comprehensive SaaS Platform for Client
              Engagement and AI-Driven Sales Analytics
            </Text>

            <Text
              fontSize="4xl"
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
              Alifa is a cutting-edge client engagement and AI-driven sales SaaS
              (Software as a Service) platform designed to empower sales
              representatives by streamlining client interactions. By
              integrating advanced artificial intelligence (AI) capabilities,
              Alifa enhances productivity, automates repetitive tasks, and
              facilitates personalized client engagement. The platform is
              tailored to meet the unique demands of modern sales teams,
              offering tools to improve efficiency and boost customer
              satisfaction.
            </Text>

            <Text
              fontSize="4xl"
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
              Alifa needed a robust SaaS solution to address the challenges of
              managing client interactions, scaling AI-driven sales tools, and
              supporting multiple agents in a dynamic, real-time environment.
              The platform required advanced multi-agent architectures for
              parallel execution, integration with diverse tools and APIs, and
              state management to maintain contextual awareness across
              conversations. Key challenges included:
            </Text>

            <Text
              fontSize="4xl"
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
              Tech Emulsion developed a feature-rich SaaS platform tailored to
              Alifa’s specific requirements. The platform leverages LangGraph, a
              state-of-the-art framework for implementing multi-agent
              architectures, enabling seamless interaction and task execution.
              Key features include:
            </Text>

            <Box pl={5} mb={4}>
              <List spacing={3} mt={5}>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>Real-Time Analytics:</strong>
                    <span>
                      A centralized dashboard provides admins and sales
                      representatives with insights into performance metrics,
                      customer engagement, and team productivity.
                    </span>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>Multi-Agent Parallelism</strong>
                    <span>
                      Handling thousands of agents simultaneously, each with
                      independent states, to enhance scalability and
                      responsiveness.
                    </span>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>AI-Driven Tools:</strong>
                    <span>
                      Features like Google search integration, web scraping, and
                      business information retrieval automate repetitive tasks,
                      freeing up time for strategic activities.
                    </span>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>Seamless User Experience</strong>
                    <span>
                      Ensuring an intuitive interface for admins, sales
                      representatives, and customers.
                    </span>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>AI Integration</strong>
                    <span>
                      Leveraging cutting-edge AI technologies to automate tasks
                      throught AI agents and RAG.
                    </span>
                  </Box>
                </ListItem>
              </List>
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
                Tech Emulsion transformed Alifa’s vision into an intuitive,
                scalable platform that addresses modern sales challenges. With
                advanced AI features and a user-friendly design, Alifa is
                well-positioned to lead in client engagement and sales
                analytics.
              </Text>
              <FaQuoteRight
                size={10}
                style={{ position: "absolute", right: "20%", bottom: 34 }}
              />
              <Text fontSize="2xl" fontWeight="bold" color="gray.600" mt={5}>
                – Suliman, CEO of Alifa
              </Text>
            </Box>
            <Text
              fontSize="4xl"
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
              Alifa's SaaS platform has revolutionized client engagement by
              leveraging AI-driven agents to streamline sales processes. Sales
              teams can easily connect their Zoom and Google Calendar accounts
              to schedule meetings with clients and send proposals, complete
              with embedded hyperlinks. The platform has boosted team
              productivity through advanced analytics and performance tracking,
              enabling organizations to scale and handle thousands of
              interactions seamlessly. Additionally, it has expanded its global
              reach with multi-language and multi-currency support, while
              optimizing operational efficiency through automated subscription
              management, real-time analytics, and seamless integration with
              cutting-edge tools and APIs.
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
              Looking to elevate your business with a custom, scalable SaaS
              solution? Contact Tech Emulsion today to turn your innovative
              ideas into reality.
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
      </Container>{" "}
    </Box>
  );
};

export default CaseStudyAlifa;
