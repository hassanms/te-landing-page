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

const CaseStudyMacromascot = () => {
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
        title="Case Study: Macromascot - Tech Emulsion"
        description="Macromascot is a comprehensive mobile health application that transforms weight management by merging rigorous utility with gamification. Using AI-powered meal logging and a Tamagotchi-style avatar system, it drives user retention through emotional investment."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/macromascot"
        portfolioData={{
          title: "Macromascot – Gamifying Health Consistency with AI and Digital Companions",
          description:
            "A comprehensive mobile health application designed to transform weight management by merging rigorous utility with gamification. Features AI-powered meal logging, gamified avatar system, intermittent fasting module, social interactions, and agile monetization infrastructure.",
          dateCreated: "2024",
          image: "https://techemulsion.com/assets/portfolio/New/Health_app.jpg",
          url: "https://techemulsion.com/portfolio/macromascot",
          genre: "Mobile Health App, Gamification, AI-Powered Nutrition",
          keywords: [
            "Macromascot",
            "health app",
            "gamification",
            "AI meal logging",
            "mobile health",
            "weight management",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "Macromascot",
              url: "https://techemulsion.com/portfolio/macromascot",
            },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What is Macromascot?",
              answer:
                "Macromascot is a comprehensive mobile health application designed to transform weight management by merging rigorous utility with gamification. It uses an AI-powered meal logging system and a Tamagotchi-style avatar system to drive user retention through emotional investment.",
            },
            {
              question: "How does Macromascot solve manual data entry fatigue?",
              answer:
                "Macromascot integrates OpenAI (GPT-4o) to create a nutrition scanner. Users can capture food images via their camera, which are then analyzed to return structured nutritional data including macros and calories, eliminating the friction of manual logging.",
            },
            {
              question: "What technologies power Macromascot?",
              answer:
                "Mobile Framework: React Native (Expo SDK 53) with Development Builds. Animations: Reanimated + Skia for high-performance sprite rendering. Backend: Supabase (PostgreSQL) with Row Level Security and Edge Functions. State Management: Zustand for lightweight client-side state management.",
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
                src="/assets/portfolio/New/Health_app.jpg"
                alt="Macromascot – Gamifying Health Consistency with AI and Digital Companions"
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
                Macromascot – Case Study
              </Text>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "gray.700"
                }
                fontSize="xl"
                mt="4"
                width={["auto", null, "100%"]}>
                Gamifying Health Consistency with AI and Digital Companions. A
                comprehensive mobile health application that transforms weight
                management by merging rigorous utility with gamification, featuring
                AI-powered meal logging and an engaging avatar system.
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
              Macromascot – Gamifying Health Consistency with AI and Digital
              Companions
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
              Macromascot is a comprehensive mobile health application designed to
              transform the weight management experience by merging rigorous utility
              with gamification. Unlike traditional trackers, the platform utilizes an
              AI-powered meal logging system and an engaging &quot;Tamagotchi-style&quot;
              avatar system to drive user retention. By linking health consistency
              (such as logging and fasting streaks) directly to the evolution of a
              digital companion, the app turns a routine chore into an emotional
              investment.
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
              The project addressed several critical hurdles common in the fitness app
              industry:
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
                  <strong>Manual Data Entry Fatigue:</strong> The #1 factor for user
                  churn in fitness apps is the friction of manual logging.
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
                  <strong>Low Long-Term Retention:</strong> Many health apps lack the
                  &quot;emotional hook&quot; necessary to sustain daily active usage
                  (DAU).
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
                  <strong>Performance Bottlenecks:</strong> Delivering a
                  &quot;Native-First&quot; experience with high-performance animations
                  for game-like elements on mobile devices.
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
                  <strong>Monetization Flexibility:</strong> The need to rapidly test
                  and deploy different subscription models without constant code
                  releases.
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
              We developed a &quot;Native-First&quot; mobile experience built on a
              robust, scalable backend architecture.
            </Text>

            <Box pl={2} mb={4}>
              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                1. AI-Powered &quot;Instant Logging&quot;
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                To eliminate user friction, we integrated OpenAI (GPT-4o) to create a
                nutrition scanner. Users can capture food images via their camera,
                which are then analyzed to return structured nutritional data including
                macros and calories.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                2. Gamified Avatar & Economy Engine
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                We built a dynamic state management system where user health actions
                earn &quot;Coins&quot;. These coins allow users to purchase backgrounds
                and clothing to customize and evolve their character sprites. This
                creates a &quot;sunk cost&quot; investment that significantly boosts
                user retention.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                3. Multi-Utility Intermittent Fasting Module
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                To expand the app&apos;s target audience, we implemented a configurable
                fasting timer (e.g., 16:8 or 18:6). The module includes real-time
                countdowns, &quot;Fat Burning&quot; phase tracking, and automatic
                notification triggers to keep users accountable.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                4. Social &quot;Vibe&quot; System
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                The app features a social graph allowing users to add friends and view
                profiles. We introduced a &quot;Vibe&quot; interaction system, where
                users send interactions based on shared achievements, creating viral
                loops and lowering user acquisition costs.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                5. Agile Monetization Infrastructure
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                By integrating Superwall, we decoupled the paywall UI from the core app
                code. This enables the marketing team to manage subscription tiers and
                conduct A/B testing on pricing models instantly without requiring new
                engineering releases.
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
              The project utilized a cutting-edge, high-performance tech stack:
            </Text>
            <List spacing={2} mb={10} pl={4}>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Mobile Framework:</strong> React Native (Expo SDK 53)
                utilizing &quot;Development Builds&quot; to support complex native
                modules.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Animations:</strong> Reanimated + Skia to ensure the
                &quot;Game&quot; feel remains performant and fluid for sprite
                rendering.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>Backend:</strong> Supabase (PostgreSQL) with strict Row Level
                Security (RLS) for user privacy and Edge Functions for low-latency AI
                processing.
              </ListItem>
              <ListItem
                fontSize="xl"
                color={colorMode === "dark" ? "white" : "gray.600"}>
                <strong>State Management:</strong> Zustand for lightweight,
                boilerplate-free management of complex client-side states like coin
                balances and streaks.
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
                  Reduced User Friction: The AI scanner successfully addressed the
                  primary cause of fitness app churn.
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
                  Increased User Retention: Emotional engagement through the avatar
                  engine turned health tracking into a daily habit.
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
                  Scalable Architecture: A multi-tenant-ready backend that handles
                  social interactions and complex gamification logic with ease.
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
                  Immediate Revenue Readiness: A fully integrated monetization pipeline
                  ready for immediate market testing and scaling.
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
              Ready to transform your health app with AI-powered features and
              gamification? Contact Tech Emulsion today to turn your vision into a
              scalable, engaging mobile experience.
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

export default CaseStudyMacromascot;
