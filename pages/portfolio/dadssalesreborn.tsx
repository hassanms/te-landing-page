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

const CaseStudyDadsSalesReborn = () => {
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
        title="Case Study: AutoCar Intelligence - Tech Emulsion"
        description="AutoCar Intelligence is a centralized operational intelligence platform built for a multi-location automotive repair business. Tech Emulsion rebuilt an unreliable prototype into a scalable data aggregation and analytics system, capable of handling incomplete APIs, inconsistent data, and real-world automotive edge cases."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/autosync-intelligence"
        portfolioData={{
          title: "AutoCar Intelligence – Rebuilding Multi-Location Automotive Intelligence from Broken SaaS Data",
          description:
            "A centralized operational intelligence platform for multi-location automotive repair businesses. Rebuilt from unreliable prototype into scalable data aggregation system with multi-shop aggregation, hardened sales calculations, aging WIP intelligence, and AI-ready architecture.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/New/DADS_Sales_Reborn.jpg",
          url: "https://techemulsion.com/portfolio/autosync-intelligence",
          genre: "Data Analytics, Automotive Intelligence, Operational Control System",
          keywords: [
            "AutoCar Intelligence",
            "automotive intelligence",
            "data aggregation",
            "multi-location business",
            "operational control",
            "Tekmetric",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "AutoCar Intelligence",
              url: "https://techemulsion.com/portfolio/autosync-intelligence",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is AutoCar Intelligence?",
              answer:
                "AutoCar Intelligence is a centralized operational intelligence platform built for multi-location automotive repair businesses. It consolidates sales, repair orders, inspections, work-in-progress, and profitability signals into one executive dashboard, replacing the need to log into multiple systems like Tekmetric, QuickBooks, and banks.",
            },
            {
              question: "What problems does AutoCar Intelligence solve?",
              answer:
                "The platform addresses fragmented visibility across multiple shops, inaccurate and incomplete data from unreliable APIs, operational risk blind spots (like high-dollar repair orders without deposits), and the lack of automation or intelligence for proactive warnings and anomaly detection.",
            },
            {
              question: "What technologies power AutoCar Intelligence?",
              answer:
                "Frontend: React-based dashboard (Lovable for rapid UI iteration). Backend: Supabase (PostgreSQL) for structured relational data, Edge Functions for scheduled aggregation and sync. Data Sources: Tekmetric API, with planned Chrome extension ingestion for missing reports and future integrations with Wicked File and financial systems.",
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
                src="/assets/portfolio/New/DADS_Sales_Reborn.jpg"
                alt="AutoCar Intelligence – Multi-Location Automotive Intelligence Platform"
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
                AutoCar Intelligence – Case Study
              </Text>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "gray.700"
                }
                fontSize="xl"
                mt="4"
                width={["auto", null, "100%"]}>
                Rebuilding Multi-Location Automotive Intelligence from Broken SaaS
                Data. A centralized operational intelligence platform that
                consolidates sales, repair orders, inspections, and profitability
                signals into one executive dashboard.
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
              AutoCar Intelligence – Rebuilding Multi-Location Automotive
              Intelligence from Broken SaaS Data
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
              AutoCar Intelligence is a centralized operational intelligence platform
              built for a multi-location automotive repair business operating across
              multiple US states. The goal was simple but brutal to execute: give
              the owner a single, trustworthy source of truth across all shops
              without logging into Tekmetric, QuickBooks, banks, or third-party
              tools.
              {"\n\n"}
              The project focuses on rebuilding an unreliable prototype into a
              scalable data aggregation and analytics system, capable of handling
              incomplete APIs, inconsistent data, and real-world automotive edge
              cases. The system consolidates sales, repair orders, inspections,
              work-in-progress, and profitability signals into one executive
              dashboard, with AI-driven automation planned as a second phase.
              {"\n\n"}
              This is not a reporting toy. It&apos;s an operational control system.
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
              The client owned 9 automotive shops (growing to 10+) across Georgia,
              Texas, and North Carolina. Their Shop Management System (Tekmetric)
              exposed a limited and inconsistent API, forcing manual workflows and
              unreliable dashboards.
            </Text>
            <Text
              mb={4}
              sx={{
                fontSize: "xl",
                fontWeight: "semibold",
                lineHeight: "1.5",
                textAlign: "left",
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              The core problems were ugly:
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
                  <strong>Fragmented Visibility:</strong> Tekmetric required logging
                  into each shop individually. There was no reliable way to view
                  company-wide performance, trends, or risk exposure in one place.
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
                  <strong>Inaccurate and Incomplete Data:</strong> API data often
                  lagged or returned partial results. Critical metrics like
                  inspections, approvals, and aging WIP were missing entirely. Some
                  values were flat-out wrong, making dashboards untrustworthy.
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
                  <strong>Operational Risk Blind Spots:</strong> High-dollar repair
                  orders sat open without deposits. Managers could approve $10k
                  engine jobs on cars worth $5k, creating serious financial risk
                  with no automated alerts.
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
                  <strong>No Automation or Intelligence:</strong> Everything relied
                  on manual oversight. No proactive warnings. No anomaly detection.
                  No way to enforce business rules at scale.
                </Text>
              </ListItem>
            </List>
            <Text
              mb={10}
              sx={{
                fontSize: "xl",
                fontWeight: "normal",
                lineHeight: "1.5",
                textAlign: "left",
                color: colorMode === "dark" ? "white" : "gray.600",
                fontStyle: "italic",
              }}>
              In short: data existed, but it was unusable for decision-making.
            </Text>

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
              We rebuilt the system around a data-first, aggregation-driven
              architecture, designed to survive bad APIs and still produce reliable
              insights.
            </Text>

            <Box pl={2} mb={4}>
              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                1. Centralized Multi-Shop Aggregation Engine
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Instead of treating each shop as an isolated unit, we built a
                unified aggregation layer that pulls data shop-by-shop via
                Tekmetric&apos;s API, normalizes inconsistent fields and structures,
                and stores historical snapshots for month-over-month and
                year-over-year comparison. This allowed the owner to view all shops
                combined, something Tekmetric itself does not support.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                2. Hardened Sales & Profit Calculations
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                We implemented deterministic aggregation logic for labor, parts, and
                sublet sales; authorized vs unauthorized sublets; Repair Order counts
                and averages; and gross vs profit comparisons across months and
                years. This removed reliance on Tekmetric&apos;s inconsistent rollups
                and eliminated silent mismatches.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                3. Aging Work-In-Progress Intelligence
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                One of the most critical features rebuilt was Aging WIP. The system
                now tracks approved repair orders across all shops, flags high-dollar
                jobs with no deposits, shows vehicle age, RO age, and exposure risk,
                and enables drill-down from company → shop → repair order. This
                directly addresses real-world financial loss scenarios the client had
                already experienced.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                4. Inspection & Compliance Tracking (Hybrid Data Strategy)
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Tekmetric does not expose inspection completion percentages via API.
                Instead of accepting that limitation, we designed a hybrid strategy:
                API data where available, Chrome extension–based extraction for
                non-API reports, and normalized inspection metrics stored centrally.
                This enables performance analysis like RO value vs inspection
                completion rate, technician compliance comparison, and revenue impact
                of proper inspections.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                5. AI-Ready Architecture (Planned Phase)
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                The system is intentionally built to support AI agents without
                retrofitting later: clear event boundaries, deterministic business
                rules first, AI second, and planned agents for monitoring deposits,
                WIP aging, and anomalies. AI is used as an enforcer, not a guesser.
              </Text>
            </Box>

            <Text
              fontSize="3xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              Technical Architecture
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
              The stack was chosen for control, scalability, and long-term
              maintainability.
            </Text>
            <Box pl={4} mb={4}>
              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Frontend
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                React-based dashboard (Lovable for rapid UI iteration), high-density,
                executive-focused views, drill-down navigation from company to repair
                order.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Backend
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Supabase (PostgreSQL) for structured relational data, Edge Functions
                for scheduled aggregation and sync, deterministic calculation layer
                separate from ingestion.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Data Sources
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Tekmetric API (shops, ROs, jobs, vehicles, customers), planned Chrome
                extension ingestion for missing reports, future integrations with
                Wicked File and financial systems.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Design Principles
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Never trust upstream aggregates, store raw + derived data separately,
                optimize for historical analysis, not just &quot;current state&quot;.
              </Text>
            </Box>

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
                  A working multi-location dashboard that replaces logging into 10+
                  separate systems.
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
                  Reliable month-over-month and year-over-year comparisons.
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
                  Visibility into financial risk from aging WIP and unprotected
                  repair orders.
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
                  A foundation ready for AI-driven automation without rework.
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
              Looking to transform fragmented data into a unified operational
              intelligence platform? Contact Tech Emulsion today to turn your
              multi-location challenges into scalable, reliable insights.
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

export default CaseStudyDadsSalesReborn;
