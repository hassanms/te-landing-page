import {
  Box,
  ButtonGroup,
  Container,
  Grid,
  Heading,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { HighlightsItem } from "components/highlights";
import Head from "next/head";
import Script from "next/script";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { FaChevronRight } from "react-icons/fa";
import { SectionProps, Section } from "components/section";
export const Highlights: React.FC<SectionProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Section
      innerWidth="container.xl"
      position="relative"
      overflow="hidden"
      {...rest}>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={6}
        position="relative"
        ml={{ base: 0, lg: "-12px" }}>
        {children}
      </Grid>
    </Section>
  );
};

const Services = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");

  const HighlightsItems = [
    {
      title: "Campaign Management System – A Precision-Engineered Management Ecosystem for Out-of-Home Advertising",
      description:
        "Campaign Management System is a comprehensive, end-to-end management platform designed specifically for the Out-of-Home (OOH) advertising industry. Built with React and Supabase, it handles the entire campaign lifecycle from initial briefing and inventory site selection to real-time availability tracking and multi-format financial reporting. The platform emphasizes data accuracy, role-based visibility, and high-fidelity automated exports.",
      image: "/assets/portfolio/New/Campaign_Porfolio.jpg",
      alt: "Campaign Management System – A Precision-Engineered Management Ecosystem for Out-of-Home Advertising",
    },
    {
      title: "Macromascot – Gamifying Health Consistency with AI and Digital Companions",
      description:
        "Macromascot is a comprehensive mobile health application designed to transform weight management by merging rigorous utility with gamification. Unlike traditional trackers, the platform utilizes an AI-powered meal logging system and an engaging Tamagotchi-style avatar system to drive user retention. By linking health consistency directly to the evolution of a digital companion, the app turns routine tracking into an emotional investment.",
      image: "/assets/portfolio/New/Health_app.jpg",
      alt: "Macromascot – Gamifying Health Consistency with AI and Digital Companions",
    },
    {
      title: "AutoSync Intelligence – Rebuilding Multi-Location Automotive Intelligence from Broken SaaS Data",
      description:
        "AutoSync Intelligence is a centralized operational intelligence platform built for a multi-location automotive repair business operating across multiple US states. We rebuilt an unreliable prototype into a scalable data aggregation and analytics system, capable of handling incomplete APIs, inconsistent data, and real-world automotive edge cases. The system consolidates sales, repair orders, inspections, work-in-progress, and profitability signals into one executive dashboard, with AI-driven automation planned as a second phase.",
      image: "/assets/portfolio/New/DADS_Sales_Reborn.jpg",
      alt: "AutoSync Intelligence – Multi-Location Automotive Intelligence Platform",
    },
    {
      title: "Pack Assist – Revolutionizing Packaging Sales with a Cost-Optimized AI Agent",
      description:
        "Pack Assist is an advanced AI-Assisted Sales Qualification Chatbot for the packaging industry. We upgraded the system to a Python FastAPI backend, implemented a cost-saving hybrid architecture (static qualification before AI), a Zendesk-style agent dashboard, RAG-based fact-checking to eliminate AI hallucinations, and weekend automation—delivered in 8 weeks.",
      image: "/assets/portfolio/New/Pack Assist – Revolutionizing Packaging Sales with a Cost-Optimized AI Agent.jpg",
      alt: "Pack Assist – AI-Assisted Sales Qualification Chatbot for Packaging",
    },
    {
      title: "The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency",
      description:
        "The Meatery is a proprietary e-commerce CRM and Voice AI platform for a premium meat distributor. We evolved it into a Multi-Tenant Agency Model with human-like voice agents, DNC Gatekeeper compliance, Shopify integration for smart agent context, n8n-based AI Judge for prompt iteration, and real-time draft orders—enabling abandoned checkout recovery and rapid inventory campaigns.",
      image: "/assets/portfolio/New/The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency.jpg",
      alt: "The Meatery – AI-Driven Voice CRM Multi-Tenant Agency",
    },
    {
      title: "Podcast Beacon – Link-in-Bio SaaS Hub for Podcasters",
      description:
        "Tech Emulsion built Podcast Beacon to let podcasters gather every important link on one branded page. Users launch multiple landing pages, showcase episodes, merch, and services, and accept payments through the built-in checkout. A secure login and clean admin panel make it simple to manage products, track clicks, and refresh content in seconds. By turning scattered links into a single beacon, the platform boosts listener engagement and converts profile traffic into revenue.",
      image: "/assets/portfolio/mic.jpg",
      alt: "Podcast Beacon – Link-in-Bio SaaS Hub for Podcasters",
    },
    {
      title: "Rack Room – Business resource management system",
      description:
        "Rackroom is a tailored, secure, and scalable application built for a single owner to manage their business's resources. It supports booking management with complex date/time calculations, client and engineer tracking, financial calculations, and automated SMS notifications via Twilio. The Gantt chart dashboard and event logs provide the owner with clear visibility and control. Built with a modern tech stack and a robust database schema, Rackroom is optimized for the owner's specific business needs, with flexibility for future enhancements.",
      image: "/assets/portfolio/download.jpg",
      alt: "Rack Room – Business resource management system",
    },
    {
      title: "Content Compass – LinkedIn content analysis and inspiration tool",
      description:
        "This tool helps users get inspired by top LinkedIn creators and level up their own content game. Users can create a personalized dashboard by entering the LinkedIn profiles they want to follow. The system scrapes those profiles every 3 days (or on demand) and collects all types of post formats including text, carousels, videos, images, multi-image posts, reshared and reposted content. We analyze the posts using OpenAI's LLM to detect tone, writing patterns, common hooks, CTAs, and engagement trends. Users get insights into what works and why and can use the AI to generate similar posts based on their favorite creators. The AI suggests engaging hooks and helps users write complete posts tailored to their voice. A built-in analytics panel also compares tone and engagement across different creators to help users understand what content styles perform best. This will be offered on a subscription basis with no current limits on creators or post generations.",
      image: "/assets/portfolio/linkedin.jpg",
      alt: "Content Compass – LinkedIn content analysis and inspiration tool",
    },
    {
      title: "SuperHeart – AI-powered nutrition tracking mobile app",
      description:
        "SuperHeart is a food coach in your pocket. It helps you choose meals that keep your heart happy. You can log meals by photo, words, or search. The app uses AI (smart computer brain) to guess food details. It shows calories and macros (big nutrients like protein, carbs, fats) right away. he dashboard tracks water, fiber, sugar and other targets for each day. Colored rings tell you what you still need or should limit. You can tap a meal for deeper facts and helpful notes. Reminders nudge you to eat, weigh in, or read small health tips. A profile page stores streaks, premium status, and account settings. Extra tabs show chat help and long-term progress. Everything runs in React Native, so one code serves iOS and Android. Supabase holds user data and handles sign-in and sync. This stack keeps costs low and updates fast.",
      image: "/assets/portfolio/food.webp",
      alt: "SuperHeart – AI-powered nutrition tracking mobile app",
    },
    {
      title: "Atarim – A SaaS tool for visual collaboration & project mgmt",
      description:
        "Tech Emulsion transformed WPFeedback into Atarim, a scalable SaaS platform for visual collaboration on any website. With new features, a Chrome extension, custom scraping, AWS scaling, and performance optimizations, we helped Atarim secure $500K funding and expand to a universal project management tool.",
      image: "/assets/portfolio/atarim.png",
      alt: "Atarim – A SaaS tool for visual collaboration & project mgmt",
    },
    {
      title:
        "JarvisReach – SaaS for LinkedIn prospecting, data extraction & email outreach",
      description:
        "Tech Emulsion developed JarvisReach, a SaaS for LinkedIn prospecting, enabling efficient data extraction, filtering, and automated email outreach. With subscription flexibility, team leaderboards, and admin analytics, JarvisReach streamlines lead management and boosts user productivity.",
      image: "/assets/portfolio/jarvis.png",
      alt: "JarvisReach – SaaS for LinkedIn prospecting, data extraction & email outreach",
    },
    {
      title: "Levellup - AI-driven sales training simulator",
      description:
        "LevellUp is an AI-powered sales-training platform purpose-built for SaaS and other B2B revenue teams. Instead of pairing with a colleague or waiting for a manager's calendar to free up, reps drop into on-demand, voice-enabled role-plays against lifelike AI buyer personas that adapt in real time—mirroring the questions, objections, and pushback they'll face on live calls. During each simulated conversation the software automatically scores the rep's performance against proven sales frameworks (discovery, objection-handling, closing techniques, etc.), pinpoints specific strengths and gaps, and then delivers focused coaching suggestions. Results accumulate in a dashboard so both reps and managers can track progress call-by-call and measure ramp-up, skill growth, and quota attainment over time.",
      image: "/assets/portfolio/level.png",
      alt: "Levellup - AI-driven sales training simulator",
    },
    {
      title: "Farmin – AI-Powered Satellite Image Detection SaaS",
      description:
        "Tech Emulsion built Farmin, an AI-powered SaaS for satellite image analysis. Using Mapbox, YOLO models, and OpenCV, it detects objects like cars, ships, and oil spills. We added change detection, a data annotation tool, and deployed it on AWS, enabling real-time insights and scalable remote sensing.",
      image: "/assets/portfolio/farmin.avif",
      alt: "Farmin – AI-Powered Satellite Image Detection SaaS",
    },

    {
      title: "Bipcards – Elevate Online Presence with Genuine Reviews",
      description:
        "Tech Emulsion developed a SaaS platform for Bipcards.com, enabling businesses to collect customer reviews via programmable NFC cards and QR codes. Customers benefit from a flexible subscription model, real-time analytics, and easy card programming, while sales reps streamline onboarding, enhancing engagement and efficiency.",
      image: "/assets/portfolio/bipcards.png",
      alt: "Bipcards – Elevate Online Presence with Genuine Reviews",
    },
    {
      title: "Popcard – SaaS for managing review cards",
      description:
        "Tech Emulsion developed a SaaS for PopCard.io, enabling businesses to manage locations, teams, and customer reviews via NFC cards and QR codes. Features included secure authentication with social logins, analytics, leaderboards, and Stripe subscriptions, enhancing engagement and revenue.",
      image: "/assets/portfolio/popcard.png",
      alt: "Popcard – SaaS for managing review cards",
    },
    {
      title:
        "Artis – Blockchain powered SaaS to help artists copyright their work",
      description:
        "Artis is an AI-driven platform that analyzes an artist's style to provide tailored advice and marketing strategies. It leverages blockchain for secure ownership protection and copyright management.It connects artists with audiences, enabling secure sales. Artis empowers creators across various fields, making creativity secure and profitable.",
      image: "/assets/portfolio/Artis.png",
      alt: "Artis – Blockchain powered SaaS to help artists copyright their work",
    },

    {
      title: "Alifa App – Client Engagement and AI-Driven Sales SaaS",
      description:
        "Tech Emulsion developed Alifa App to help sales reps manage client interactions with ease. It enables Zoom meeting creation, dynamic proposal sharing with hyperlinks, and automated client chats using RAG. With AI agents for web monitoring, data extraction, and web searches, it automates tasks and enhances client engagement, delivering a seamless and scalable sales solution.",
      image: "/assets/portfolio/file.jpg",
      alt: "Alifa App – AI-Driven Client Interaction SaaS",
    },
    {
      title: "MoodTube Extension – AI-Powered YouTube Video Search by Mood",
      description:
        "MoodTube allows users to search YouTube videos by mood (e.g., Happy, Relaxed, Motivated) using AI tools like LangChain and vector embeddings. The extension extracts YouTube transcripts, converts them into embeddings with models like all-mpnet-base-v2, and stores them in PGVector. Semantic search retrieves videos matching the selected mood, offering personalized video recommendations.",
      image: "/assets/portfolio/moodtube.png",
      alt: "MoodTube – AI-Powered Video Search by Mood",
    },
    {
      title: "RAG Based Customized ChatBot",
      description:
        "This end-to-end RAG application allows users to interact with documents by uploading PDFs and asking questions. It uses advanced AI techniques to extract, understand, and answer queries with remarkable accuracy. The system leverages OpenAI's LLMs, pgvector for similarity search, and image recognition for graphical content, offering an intelligent and intuitive document query experience.",
      image: "/assets/portfolio/raggenai.png",
      alt: "RAG – AI-Powered Document Querying Application",
    },
  ];

  return (
    <Box>
      <EnhancedSEO
        title="Our Portfolio - Tech Emulsion"
        description="Explore Tech Emulsion's diverse portfolio of successful projects including AI-powered tools, SaaS platforms, mobile apps, blockchain solutions, and custom software development for global clients."
        pageType="portfolio"
        portfolioData={{
          title: "Tech Emulsion Portfolio",
          description:
            "A comprehensive collection of successful digital transformation projects and innovative technology solutions.",
          dateCreated: "2020",
          image:
            "https://techemulsion.com/static/favicons/android-chrome-192x192.png",
          url: "https://techemulsion.com/portfolio",
          genre: "Technology Portfolio",
          keywords: [
            "AI solutions",
            "custom software",
            "SaaS platforms",
            "mobile apps",
            "blockchain",
            "digital transformation",
          ],
        }}
        faqData={{
          questions: [
            {
              question: "What types of projects has Tech Emulsion completed?",
              answer:
                "Tech Emulsion has completed diverse projects including AI-powered video search platforms (MoodTube), RAG-based document querying systems, e-commerce platforms, mobile applications, blockchain solutions, and custom enterprise software.",
            },
            {
              question: "Can I see examples of Tech Emulsion's work?",
              answer:
                "Yes, you can explore our portfolio section to see detailed case studies of our completed projects. Each portfolio item includes project descriptions, technologies used, challenges solved, and outcomes achieved.",
            },
          ],
        }}
        howToData={{
          title: "How to explore Tech Emulsion's portfolio",
          description:
            "A step-by-step guide to viewing and understanding our project case studies.",
          steps: [
            {
              name: "Visit the Portfolio Page",
              text: "Go to the Tech Emulsion portfolio section from the main menu.",
            },
            {
              name: "Browse Projects",
              text: "Scroll through the list of featured projects and select one that interests you.",
            },
            {
              name: "Read Case Study",
              text: "Click on a project to view detailed descriptions, technologies used, and outcomes achieved.",
            },
            {
              name: "Contact Us",
              text: "If you have questions or want a similar solution, use the contact form to reach out.",
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
      <Container maxW="container.xl" py="20" mb="20">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Box
          display={{ base: "block", md: "flex" }}
          px="15"
          mt={10}
          justifyContent={"space-between"}>
          <Box>
            <Heading as="h2" size="lg">
              Portfolio Page
            </Heading>
            <Text
              color={textColor}
              fontSize="lg"
              mt="4"
              width={["70%", null, "auto"]}>
              We believe that building a product should be fun and rewarding.
              Our mission is to provide you with the best tools to make that
              happen.
            </Text>
          </Box>

          {/* Explore Services */}
          <VStack
            spacing={4}
            display="flex"
            justifyContent={["flex-start", null, "flex-end"]}
            width={["100%", null, "auto"]}
            alignItems="end"
            mt="4">
            <ButtonGroup
              style={{
                backgroundColor: " none",
                fontSize: "1rem",
                color: "muted",
                display: "flex",
                alignItems: "center",
              }}>
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: "muted",
                  padding: "0",
                  "&:hover": {
                    bg: "none",
                  },
                }}>
                Home
              </ButtonLink>
              <FaChevronRight size={15} />
              <Text
                as="span"
                ml="2"
                sx={{
                  color: colorMode === "light" ? "#004c4c !important" : "white",
                }}>
                Portfolio
              </Text>
            </ButtonGroup>
          </VStack>
        </Box>

        <Highlights>
          {HighlightsItems.map((item, index) => {
            const href = item.title.includes("Pack Assist")
              ? "/portfolio/packassist"
              : item.title.includes("The Meatery")
              ? "/portfolio/meatery"
              : item.title.includes("Farmin")
              ? "/portfolio/farmin"
              : item.title.includes("Atarim")
              ? "/portfolio/atarim"
              : item.title.includes("Bipcards")
              ? "/portfolio/bipcards"
              : item.title.includes("Popcard")
              ? "/portfolio/popcard"
              : item.title.includes("Artis")
              ? "/portfolio/artis"
              : item.title.includes("JarvisReach")
              ? "/portfolio/jarvisreach"
              : item.title.includes("Alifa")
              ? "/portfolio/alifa"
              : item.title.includes("RAG")
              ? "/portfolio/genai"
              : item.title.includes("MoodTube")
              ? "/portfolio/moodtube"
              : item.title.includes("Content Compass")
              ? "/portfolio/contentcompass"
              : item.title.includes("Levellup")
              ? "/portfolio/levellup"
              : item.title.includes("SuperHeart")
              ? "/portfolio/superheart"
              : item.title.includes("Rack Room")
              ? "/portfolio/rackroom"
              : item.title.includes("Podcast Beacon")
              ? "/portfolio/podcastbeacon"
              : item.title.includes("AutoSync Intelligence")
              ? "/portfolio/autosync-intelligence"
              : item.title.includes("Macromascot")
              ? "/portfolio/macromascot"
              : item.title.includes("Campaign Management System") || item.title.includes("Campaign")
              ? "/portfolio/campaignos"
              : null;

            // Set objectFit for Rack Room, otherwise use "contain"
            const objectFit = item.title.includes("Rack Room")
              ? "cover"
              : "contain";

            return (
              <HighlightsItem key={index} colSpan={[1, null, 2]}>
                <Link
                  href={href || "/"}
                  _hover={{ textDecoration: "none" }}
                  gap="0"
                  title=""
                  border="none">
                  <Box
                    sx={{
                      width: "100%",
                      backgroundImage:
                        colorMode === "dark"
                          ? "url('/assets/background/pattern.jpg')"
                          : "url('/assets/background/light-pattern.jpg')",
                      height: "350px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      py: 1,
                      // Only add px for Rack Room
                      px: item.title.includes("Rack Room") ? 12 : 0,
                    }}>
                    <Box>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={502}
                        height={300}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: objectFit,
                          marginTop: 25,
                        }}
                      />
                    </Box>
                  </Box>
                  <Box w="100%" px={{ base: "0", md: "16", lg: "0" }} pt="4">
                    <Heading as="h2" size="lg" mb={4}>
                      {item.title}
                    </Heading>
                    <VStack alignItems="flex-start" spacing="8">
                      <Text color={textColor} fontSize="lg">
                        {item.description}
                      </Text>
                    </VStack>
                  </Box>
                </Link>
              </HighlightsItem>
            );
          })}
        </Highlights>
      </Container>
    </Box>
  );
};

export default Services;
