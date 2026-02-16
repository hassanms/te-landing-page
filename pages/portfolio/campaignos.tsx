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

const CaseStudyCampaignOS = () => {
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
        title="Case Study: Campaign Management System - Tech Emulsion"
        description="Campaign Management System is a comprehensive, end-to-end management platform designed specifically for the Out-of-Home (OOH) advertising industry. Built with React and Supabase, it handles the entire campaign lifecycle from briefing to financial reporting."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/campaignos"
        portfolioData={{
          title: "Campaign Management System – A Precision-Engineered Management Ecosystem for Out-of-Home Advertising",
          description:
            "A comprehensive, end-to-end management platform for Out-of-Home advertising. Features intelligent inventory management, automated financial reconciliation, lunar-period availability tracking, multi-format exports, and role-based dashboards.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/New/Campaign_Porfolio.jpg",
          url: "https://techemulsion.com/portfolio/campaignos",
          genre: "SaaS Platform, Out-of-Home Advertising, Campaign Management",
          keywords: [
            "Campaign Management System",
            "OOH advertising",
            "campaign management",
            "inventory management",
            "advertising platform",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "Campaign Management System",
              url: "https://techemulsion.com/portfolio/campaignos",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is Campaign Management System?",
              answer:
                "Campaign Management System is a comprehensive, end-to-end management platform designed specifically for the Out-of-Home (OOH) advertising industry. It handles the entire lifecycle of an advertising campaign—from initial briefing and inventory site selection to real-time availability tracking and multi-format financial reporting.",
            },
            {
              question: "What problems does Campaign Management System solve?",
              answer:
                "Campaign Management System addresses inventory fragmentation across multiple countries, complex availability logic for lunar-period calculations, reporting bottlenecks through automated exports, and visibility control with role-based dashboards for management and sales teams.",
            },
            {
              question: "What technologies power Campaign Management System?",
              answer:
                "Frontend: React 18, TypeScript, and Vite. Styling: Tailwind CSS and Shadcn UI (Radix UI). Backend: Supabase (PostgreSQL) with Row Level Security and Edge Functions. Real-Time: Supabase Realtime for instant synchronization. Analytics: Recharts for financial data visualization.",
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
                src="/assets/portfolio/New/Campaign_Porfolio.jpg"
                alt="Campaign Management System – A Precision-Engineered Management Ecosystem for Out-of-Home Advertising"
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
                Campaign Management System – Case Study
              </Text>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "gray.700"
                }
                fontSize="xl"
                mt="4"
                width={["auto", null, "100%"]}>
                A Precision-Engineered Management Ecosystem for Out-of-Home
                Advertising. A comprehensive, end-to-end platform handling the
                entire campaign lifecycle from briefing to financial reporting with
                intelligent inventory management and automated exports.
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
              Campaign Management System – A Precision-Engineered Management Ecosystem for
              Out-of-Home Advertising
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
              Campaign Management System is a comprehensive, end-to-end management platform
              designed specifically for the Out-of-Home (OOH) advertising industry.
              The project involved building a high-performance React and
              Supabase-powered ecosystem to handle the entire lifecycle of an
              advertising campaign—from initial briefing and inventory site selection
              to real-time availability tracking and multi-format financial reporting.
              The platform emphasizes data accuracy, role-based visibility, and
              high-fidelity automated exports.
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
              Before the implementation of this system, the management of large-scale
              OOH inventory faced several critical operational bottlenecks:
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
                  <strong>Inventory Fragmentation:</strong> Managing thousands of
                  advertising sites across different countries (Australia and New
                  Zealand) with varying regional rules and timezone complexities.
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
                  <strong>Availability Logic Complexity:</strong> Manually
                  calculating &quot;slots&quot; for static and digital sites across
                  28-day &quot;lunar periods&quot; was prone to human error and booking
                  overlaps.
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
                  <strong>Reporting Bottlenecks:</strong> Sales teams spent hours
                  manually generating PDF contracts, Excel summaries, and PowerPoint
                  proposals for clients.
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
                  <strong>Visibility Control:</strong> Management lacked a real-time
                  &quot;bird&apos;s-eye view&quot; of the sales pipeline, while sales
                  teams needed a focused interface to manage their specific
                  territories without data noise.
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
              We implemented a robust &quot;Cloud-Native&quot; architecture using a
              modern TypeScript stack to ensure precision and real-time
              responsiveness.
            </Text>

            <Box pl={2} mb={4}>
              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                1. Intelligent Inventory & Geo-Visualization
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                We built a sophisticated site management module that distinguishes
                between Australian and New Zealand inventory. The system uses custom
                geo-logic to automatically tag sites and visualize revenue splits in the
                dashboard, providing immediate insights into international performance
                through distinct color-coded analytics.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                2. Automated Financial Reconciliation Engine
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                To ensure financial precision, we developed a logic layer that
                automatically calculates Gross Media, Net Media, and associated costs
                (Print, Install, De-install). This engine handles complex proportional
                distributions for campaigns spanning multiple months, ensuring that
                &quot;Closed Won&quot; revenue is accurately tracked against annual
                targets.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                3. Lunar-Period Availability Tracking
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                We engineered a custom availability (Avails) engine. Unlike standard
                calendars, this system operates on 13-period lunar cycles (28 days
                each), allowing for precise slot summation and conflict detection across
                thousands of digital and static faces.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                4. Multi-Format Export Engine
              </Text>
              <Text
                mb={2}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                We integrated high-fidelity export tools to eliminate manual
                administrative work:
              </Text>
              <List spacing={2} mb={5} pl={4}>
                <ListItem
                  fontSize="lg"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>Excel Summary:</strong> Generates complex, styled workbooks
                  that sum total static slots per period and apply conditional
                  formatting for client reviews.
                </ListItem>
                <ListItem
                  fontSize="lg"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>PDF Contracts:</strong> Automates the creation of legal
                  campaign contracts with dynamic data insertion.
                </ListItem>
                <ListItem
                  fontSize="lg"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>PowerPoint Proposals:</strong> Allows sales agents to export
                  campaign site lists directly into branded presentation decks.
                </ListItem>
              </List>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                5. Role-Based &quot;Command Center&quot; Dashboard
              </Text>
              <Text
                mb={2}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                We designed a high-density dashboard featuring:
              </Text>
              <List spacing={2} mb={5} pl={4}>
                <ListItem
                  fontSize="lg"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>Stacked Performance Charts:</strong> Visualizing Booked vs.
                  Draft media against annual budgets.
                </ListItem>
                <ListItem
                  fontSize="lg"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>Real-Time Status Split:</strong> A doughnut-chart breakdown
                  of the sales pipeline (Speculative → Negotiation → Booked).
                </ListItem>
                <ListItem
                  fontSize="lg"
                  color={colorMode === "dark" ? "white" : "gray.600"}>
                  <strong>Management vs. Sales Views:</strong> Tailored data visibility
                  where Super Admins see global data, while Sales Agents focus on their
                  individual performance metrics.
                </ListItem>
              </List>
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
              The project utilized a cutting-edge tech stack to ensure data integrity
              and a polished user experience:
            </Text>
            <List spacing={2} mb={10} pl={4}>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Frontend:</strong> React 18, TypeScript, and Vite for a
                lightning-fast UI.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Styling & UI:</strong> Tailwind CSS and Shadcn UI (Radix UI)
                for a professional, accessible interface.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Backend:</strong> Supabase (PostgreSQL) with Row Level
                Security (RLS) and Edge Functions for secure, serverless logic.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Real-Time:</strong> Supabase Realtime for instant data
                synchronization across all agent sessions.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Analytics:</strong> Recharts for complex financial data
                visualization.
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
                  Unified Inventory Management: A single source of truth for all AU
                  and NZ advertising assets.
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
                  Administrative Efficiency: Reduced reporting time by over 80%
                  through automated Excel and PPTX generation.
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
                  Improved Sales Accuracy: Eliminated booking overlaps via the
                  automated slot-summation logic in the Avails engine.
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
                  Enhanced Strategic Insight: Real-time visibility into international
                  revenue splits, allowing for data-driven expansion into the New
                  Zealand market.
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
              Ready to build a precision-engineered management platform for your
              industry? Contact Tech Emulsion today to transform your operational
              challenges into scalable, automated solutions.
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

export default CaseStudyCampaignOS;
