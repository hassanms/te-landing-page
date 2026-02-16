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

const CaseStudyMeatery = () => {
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
        title="Case Study: The Meatery - Tech Emulsion"
        description="The Meatery is an AI-Driven Voice CRM and e-commerce platform for a premium meat distributor. Tech Emulsion scaled it into a Multi-Tenant Agency with DNC Gatekeeper, Shopify integration, n8n AI Judge, and real-time draft orders."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/meatery"
        portfolioData={{
          title:
            "The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency",
          description:
            "Proprietary e-commerce CRM and Voice AI platform for a premium meat distributor. Multi-Tenant Agency Model with human-like voice agents, DNC Gatekeeper, Shopify integration, n8n AI Judge, and real-time draft orders.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/New/The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency.jpg",
          url: "https://techemulsion.com/portfolio/meatery",
          genre: "Voice AI, CRM, E-commerce, Multi-Tenant",
          keywords: [
            "The Meatery",
            "Voice AI",
            "CRM",
            "Shopify",
            "Retell AI",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "The Meatery",
              url: "https://techemulsion.com/portfolio/meatery",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is The Meatery?",
              answer:
                "The Meatery is a proprietary e-commerce CRM and Voice AI platform designed to automate high-ticket customer interactions for a premium meat distributor. It uses human-like voice agents for inbound support and outbound sales campaigns, including abandoned checkout recovery and cold outreach.",
            },
            {
              question: "How did Tech Emulsion address DNC compliance for The Meatery?",
              answer:
                "We built a centralized PostgreSQL DNC Gatekeeper that checks every phone number against both Global and Client-Specific Do Not Call tables before any call is triggered, allowing the client to run automation flows with confidence and reactivate revenue drivers like Abandoned Checkout recovery.",
            },
            {
              question: "What tech stack powers The Meatery?",
              answer:
                "Voice AI: Retell AI (LLM + Voice). Backend: Node.js (Express) with Shopify API. Automation: n8n for orchestration. Database: PostgreSQL (Railway) refactored for multi-tenancy. Frontend: React Admin Dashboard for call logs and sentiment analysis.",
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
                src="/assets/portfolio/New/The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency.jpg"
                alt="The Meatery – AI-Driven Voice CRM Multi-Tenant Agency"
                width={1200}
                height={300}
                style={{
                  width: "100vw",
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
                The Meatery – Case Study
              </Text>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "gray.700"
                }
                fontSize="xl"
                mt="4"
                width={["auto", null, "100%"]}>
                Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency.
                Human-like voice agents, DNC Gatekeeper compliance, Shopify
                integration, and real-time draft orders for abandoned checkout
                recovery and inventory campaigns.
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
              The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant
              Agency
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
              The Meatery is a proprietary e-commerce CRM and Voice AI platform
              designed to automate high-ticket customer interactions. Initially
              developed as an internal tool for a premium meat distributor, the
              project focused on evolving the platform into a Multi-Tenant
              Agency Model. The system utilizes human-like voice agents to
              manage inbound support and outbound sales campaigns, such as
              abandoned checkout recovery and cold outreach.
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
              The transition from an internal tool to a scalable agency
              solution presented several technical and operational hurdles:
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
                  <strong>Compliance Risks:</strong> A &quot;DNC (Do Not Call)
                  Fear&quot; prevented the reactivation of high-revenue
                  automation flows like Abandoned Checkout recovery.
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
                  <strong>Data Reliability:</strong> Unreliable webhooks led to
                  missing call logs and inaccurate CRM attribution, making it
                  impossible to bill future agency clients accurately.
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
                  <strong>Lack of Personalization:</strong> Early AI iterations
                  often sounded &quot;robotic&quot; and lacked deep customer
                  context (e.g., VIP status or purchase history) needed for
                  effective sales.
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
                  <strong>Operational Friction:</strong> Launching new
                  inventory-specific campaigns (like a surplus sale) took days of
                  manual intervention instead of minutes.
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
              We implemented a robust infrastructure overhaul focused on
              compliance, intelligence, and multi-tenant scalability.
            </Text>

            <Box pl={2} mb={4}>
              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                1. DNC &quot;Gatekeeper&quot; Architecture
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                To mitigate legal risks, we built a centralized PostgreSQL
                exclusion list. This &quot;Gatekeeper&quot; checks every phone
                number against both Global and Client-Specific DNC tables
                before a call is ever triggered, allowing the client to run
                automation flows with total confidence.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                2. Smart Agent Context & Shopify Integration
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                We transformed the AI from a generic caller into a savvy sales
                agent by injecting Shopify Data (Order Count, LTV, Subscription
                Status) directly into the AI&apos;s dynamic variables. This
                allows the agent to distinguish between a VIP subscriber and a
                first-time buyer, offering personalized discounts or add-ons
                accordingly.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                3. &quot;Prompt Ops&quot; Feedback Loop
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                To eliminate &quot;robotic&quot; behavior, we developed an
                n8n-based AI Judge. This system automatically ingests call
                recordings, grades the conversation based on rebuttal handling
                and tone, and aggregates data for rapid prompt iteration.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                4. Campaign Injection System
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                We streamlined inventory liquidation by creating a flexible CSV
                upload tool. Admins can now map specific customer lists (e.g.,
                &quot;Prime Rib Buyers&quot;) to specific agents and scripts
                instantly, reducing production time from days to minutes.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                5. Real-Time Sales Execution
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                The agents were empowered with the ability to programmatically
                create discounted &quot;Draft Orders&quot; in Shopify and text
                the checkout link to the customer immediately during the call.
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
              The project utilized a sophisticated tech stack to ensure low
              latency and high reliability:
            </Text>
            <List spacing={2} mb={10} pl={4}>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Voice AI Engine:</strong> Retell AI (LLM + Voice) with
                rigid &quot;State Prompts&quot; to minimize hallucinations.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Backend:</strong> Node.js (Express) handling business
                logic and Shopify API connections.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Automation:</strong> n8n for orchestrating the
                &quot;glue&quot; between the database and Retell triggers.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Database:</strong> PostgreSQL (via Railway) refactored
                for Multi-Tenancy (isolated data for multiple clients).
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Frontend:</strong> React-based Admin Dashboard for
                tracking call logs and sentiment analysis.
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
                  Transitioned from a single-tenant tool to a Multi-Tenant
                  Agency MVP, enabling the onboarding of external clients.
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
                  Reactivated the primary revenue driver (Abandoned Checkout
                  flows) by securing the system with a hardened DNC Gatekeeper.
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
                  Improved data integrity by refactoring webhooks to ensure
                  100% of call outcomes and CRM attributions are captured.
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
                  Enhanced sales agility, allowing the client to liquidate
                  surplus stock through rapid-fire AI voice campaigns.
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
              Ready to scale your voice AI and CRM into a multi-tenant agency?
              Contact Tech Emulsion to discuss compliance-safe, intelligent
              automation for your business.
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

export default CaseStudyMeatery;
