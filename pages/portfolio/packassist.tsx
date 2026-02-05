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
import { FaAsterisk } from "react-icons/fa";

const CaseStudyPackAssist = () => {
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
        title="Case Study: Pack Assist - Tech Emulsion"
        description="Pack Assist is an AI-Assisted Sales Qualification Chatbot for the packaging industry. Tech Emulsion delivered a cost-optimized hybrid architecture, Zendesk-style agent dashboard, RAG-based fact-checking, and weekend automation in 8 weeks."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/packassist"
        portfolioData={{
          title: "Pack Assist – Revolutionizing Packaging Sales with a Cost-Optimized AI Agent",
          description:
            "Advanced AI-Assisted Sales Qualification Chatbot for the packaging industry. Python FastAPI backend, hybrid cost-saving architecture, Zendesk-style agent dashboard, RAG to eliminate AI hallucinations, weekend automation.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/Pack-Assist.PNG",
          url: "https://techemulsion.com/portfolio/packassist",
          genre: "AI, Sales Automation, Packaging Industry",
          keywords: [
            "Pack Assist",
            "AI chatbot",
            "packaging sales",
            "FastAPI",
            "RAG",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "Pack Assist",
              url: "https://techemulsion.com/portfolio/packassist",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is Pack Assist?",
              answer:
                "Pack Assist is an advanced AI-Assisted Sales Qualification Chatbot designed for the packaging industry. It helps qualify leads through a hybrid flow: static questions first (Name, Email, Product), then paid AI logic only for qualified visitors, reducing costs and improving accuracy.",
            },
            {
              question: "How did Tech Emulsion reduce AI costs for Pack Assist?",
              answer:
                "We built a Hybrid Init workflow. The first 3–4 questions (Name, Email, Product) are static system questions. Paid AI is triggered only after these qualifications are met, filtering out casual browsers before incurring token costs.",
            },
            {
              question: "What technical stack powers Pack Assist?",
              answer:
                "Frontend: React, Tailwind CSS, Socket.io Client. Backend: Python, FastAPI, Socket.io Server. AI: OpenAI (GPT-4o-mini & GPT-4.1), LangChain, Pinecone for memory. Database: MongoDB for chat logs.",
            },
          ],
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF"
      />
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
                src="/assets/portfolio/Pack-Assist.PNG"
                alt="Pack Assist – AI-Assisted Sales Qualification Chatbot for Packaging"
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
                Pack Assist – Case Study
              </Text>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "gray.700"
                }
                fontSize="xl"
                mt="4"
                width={["auto", null, "100%"]}>
                Revolutionizing Packaging Sales with a Cost-Optimized AI Agent.
                A Python FastAPI backend, hybrid qualification flow, Zendesk-style
                agent dashboard, and RAG to eliminate AI hallucinations—delivered
                in 8 weeks.
              </Text>
            </Box>
          </Box>
        </Box>
        <Container maxW="container.xl" py={{ base: "2", lg: "10" }}>
          <BackgroundGradient height="100%" zIndex="-1" />

          <Box mt={10} px="5">
            <Text
              fontSize="3xl"
              w={["100%", null, "70%"]}
              fontWeight="bold"
              mb={10}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              Pack Assist – Revolutionizing Packaging Sales with a
              Cost-Optimized AI Agent
            </Text>

            <Text
              fontSize="3xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              Project Overview
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
              Pack Assist is an advanced AI-Assisted Sales Qualification
              Chatbot specifically designed for the packaging industry. The
              project focused on upgrading an existing system to a robust
              Python FastAPI backend, implementing advanced AI logic, and
              delivering a high-density agent dashboard to streamline sales
              operations. Delivered in an 8-week timeframe, the project
              emphasizes operational stability and significant cost control.
            </Text>

            <Text
              fontSize="3xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              The Challenge
            </Text>
            <Text
              mb={4}
              sx={{
                fontSize: "2xl",
                fontWeight: "normal",
                lineHeight: "1.5",
                textAlign: "left",
                color: colorMode === "dark" ? "white" : "gray.600",
              }}>
              Before the upgrade, the client faced several critical operational
              hurdles:
            </Text>
            <List spacing={3} mb={10}>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                <Text
                  fontSize="xl"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>High AI Operational Costs:</strong> Every interaction
                  triggered paid AI tokens, even for &quot;window shoppers&quot;.
                </Text>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                <Text
                  fontSize="xl"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>AI Hallucinations:</strong> The chatbot frequently
                  &quot;invented&quot; details, such as incorrect shipping
                  locations or non-existent business rules.
                </Text>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                <Text
                  fontSize="xl"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>Inefficient Management:</strong> Agents lacked the
                  tools to manage high volumes of chats effectively, needing a
                  more professional, high-density interface.
                </Text>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                <Text
                  fontSize="xl"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>Coverage Gaps:</strong> The system lacked a reliable
                  automated strategy for weekend inquiries.
                </Text>
              </ListItem>
            </List>

            <Text
              fontSize="3xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              The Solution
            </Text>
            <Text
              mb={4}
              sx={{
                fontSize: "2xl",
                fontWeight: "normal",
                lineHeight: "1.5",
                textAlign: "left",
                color: colorMode === "dark" ? "white" : "gray.600",
              }}>
              We implemented a &quot;Hybrid&quot; architecture and migrated the
              system to a modern tech stack to enhance control and scalability.
            </Text>

            <Box pl={2} mb={4}>
              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                1. Cost-Saving Hybrid Architecture
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                To slash AI costs, we built a &quot;Hybrid Init&quot; workflow.
                The first 3–4 questions (requesting Name, Email, and Product)
                are now static system questions. Paid AI logic is only triggered
                after these initial qualifications are met, effectively
                filtering out casual browsers before incurring costs.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                2. Zendesk-Style Agent Dashboard
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                We redesigned the agent interface to match Zendesk standards,
                creating a high-density view that allows a single agent to
                manage 30+ simultaneous chats.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                3. Advanced Sales Tools
              </Text>
              <List spacing={2} mb={5} pl={4}>
                <ListItem
                  fontSize="lg"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>Ghost Typing:</strong> Agents see what a user is
                  typing in real-time before they hit &quot;send,&quot; for
                  faster, more prepared responses.
                </ListItem>
                <ListItem
                  fontSize="lg"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>Visitor Path Tracking:</strong> The system shows
                  agents the user&apos;s full navigation history (e.g., Source
                  → Home → Product), providing vital context for the sales
                  pitch.
                </ListItem>
                <ListItem
                  fontSize="lg"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>Manual AI Toggle:</strong> Agents have total control
                  with a per-chat toggle to turn the AI on or off as needed.
                </ListItem>
                <ListItem
                  fontSize="lg"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>Rich Media Support:</strong> Users and agents can
                  exchange PDFs, images, and product reference galleries
                  directly within the widget.
                </ListItem>
              </List>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                4. Eliminating AI Hallucinations
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Using RAG (Retrieval-Augmented Generation) fact-checking, we
                enforced strict business rules. The AI was programmed to stop
                inventing shipping locations and to adhere to industry-specific
                standards, such as suggesting a 350 GSM thickness for packaging
                materials. We also implemented localization logic to detect US
                vs. UK IPs, automatically adjusting spelling (e.g., Color vs.
                Colour) and regional shipping rules.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                5. Weekend Automation Strategy
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                The system now features a &quot;Weekend Mode.&quot; While the
                bot acts as a support tool for &quot;manned&quot; hours during
                the week, it transitions into a full AI safety net on Saturdays
                and Sundays, ensuring no lead is missed.
              </Text>
            </Box>

            <Text
              fontSize="3xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              Technical Excellence
            </Text>
            <Text
              mb={4}
              sx={{
                fontSize: "2xl",
                fontWeight: "normal",
                lineHeight: "1.5",
                textAlign: "left",
                color: colorMode === "dark" ? "white" : "gray.600",
              }}>
              The project utilized a cutting-edge tech stack to ensure high
              performance and real-time responsiveness:
            </Text>
            <List spacing={2} mb={10} pl={4}>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Frontend:</strong> React, Tailwind CSS, and Socket.io
                Client.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Backend:</strong> Python, FastAPI, and Socket.io Server.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>AI & Logic:</strong> OpenAI (GPT-4o-mini & GPT-4.1),
                LangChain, and Pinecone for AI memory.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Database:</strong> MongoDB for secure chat logs.
              </ListItem>
            </List>

            <Text
              fontSize="3xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              The Results
            </Text>
            <List spacing={3} mb={10}>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                <Text
                  fontSize="xl"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  A fully functional V2 platform with a modernized Python
                  backend.
                </Text>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                <Text
                  fontSize="xl"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  Significant reduction in AI overhead through the hybrid
                  static-question model.
                </Text>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                <Text
                  fontSize="xl"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  Improved data accuracy via RAG-enforced business rules and the
                  elimination of AI hallucinations.
                </Text>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}>
                <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                <Text
                  fontSize="xl"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  Enhanced marketing insights through a new analytics report
                  comparing website visitors vs. chatbot engagement.
                </Text>
              </ListItem>
            </List>
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
              Looking to elevate your business with a cost-optimized AI
              solution? Contact Tech Emulsion today to turn your sales and
              support challenges into scalable, accurate experiences.
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
        </Container>
      </Container>
    </Box>
  );
};

export default CaseStudyPackAssist;
