"use client";

import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  VStack,
  useColorMode,
  useColorModeValue,
  Divider,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  useBreakpointValue,
  Tooltip,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
// new import for animation
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { Logo2 } from "components/logo2";
import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import {
  Br,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@saas-ui/react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { Em } from "components/typography";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";

import {
  Highlights,
  HighlightsItem,
  HighlightsWhatWeDo,
} from "components/highlights";

import { FiLinkedin, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Contact from "components/Contact";
import FirstIcon from "components/icons/firstIcon";
import Innovation from "components/icons/Inovation";
import EffectiveCommunication from "components/icons/EffectiveCommunication";
import OwnerShipd from "components/icons/OwnerShipd";
import NewsLetter from "components/NewsLetter";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
import OutsourceIcon from "components/icons/Outsource";
import StaffIcon from "components/icons/Staff";
import ContractorsIcon from "components/icons/Contractors";
import TeamsIcon from "components/icons/Teams";
import dynamic from "next/dynamic";
import animationData1 from "../public/assets/Animation/screen.json";
import animationData2 from "../public/assets/Animation/mobile.json";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Head from "next/head";
import Script from "next/script";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false },
);

const MotionBox = motion(Box);
const MotionCard = motion(Box);

const Home: NextPage = () => {
  return (
    <Box>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF"></Script>

      {/* Calendly CSS - kept separate as it's required for widget functionality */}
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          Calendly.initBadgeWidget({
            url: "https://calendly.com/hassanms/discovery-call",
            text: "Talk to Sales",
            color: "#008080",
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

      <EnhancedSEO
        title="Tech Emulsion | Imagineer breakthrough SaaS, Mobile Apps, and AI Agents for your business"
        description="Transform your business with cutting-edge SaaS platforms, mobile applications, and AI agents. Tech Emulsion specializes in SaaS development services, AI agent development, and custom software solutions. We provide generative AI solutions, workflow automation services, DevOps services, QA testing services, and Next.js website development to drive digital transformation."
        pageType="home"
        canonicalUrl="https://techemulsion.com"
        ogImage="https://techemulsion.com/static/favicons/android-chrome-512x512.png"
        faqData={{
          questions: [
            {
              question:
                "What is digital transformation and how can Tech Emulsion help?",
              answer:
                "Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. Tech Emulsion specializes in imagineering digital transformation through AI-powered solutions, custom software development, and innovative technology services. We help businesses modernize their operations, improve efficiency, and gain competitive advantages through strategic technology implementation. Our approach combines cutting-edge technologies like artificial intelligence, machine learning, and cloud computing to create scalable, future-proof solutions tailored to your specific business needs.",
            },
            {
              question: "What AI solutions does Tech Emulsion provide?",
              answer:
                "Tech Emulsion offers comprehensive AI solutions including custom AI applications, intelligent chatbots, machine learning models, natural language processing systems, computer vision applications, and predictive analytics. We develop AI agents that automate business processes, enhance customer experiences, and provide intelligent insights. Our AI solutions range from conversational AI for customer support to advanced machine learning models for data analysis and prediction. We also specialize in RAG (Retrieval-Augmented Generation) systems for document querying, AI-powered content analysis tools, and generative AI integration for creative and operational tasks. Through our agentic AI development services, we create autonomous AI systems that can make decisions and perform complex tasks independently. Our AI agent development services help businesses build intelligent agents tailored to their specific needs, while our AI integration services ensure seamless incorporation of AI technologies into existing systems. Additionally, we offer AI automation services that combine artificial intelligence with automation for intelligent, self-learning systems.",
            },
            {
              question: "How much does custom software development cost?",
              answer:
                "The cost of custom software development varies based on project complexity, features, timeline, and specific requirements. Tech Emulsion provides transparent pricing with detailed project estimates and flexible engagement models. Factors that influence cost include the scope of features, technology stack, integration requirements, scalability needs, and timeline. We offer various engagement models including fixed-price projects, time and materials, and dedicated team arrangements. During our free discovery call, we analyze your requirements and provide a detailed proposal with transparent pricing. Our goal is to deliver maximum value while working within your budget constraints.",
            },
            {
              question: "What services does Tech Emulsion offer?",
              answer:
                "Tech Emulsion offers a comprehensive range of services including custom software development, SaaS platform development, mobile app development (iOS and Android), AI and machine learning solutions, web development, cloud services and DevOps, QA testing and automation, Chrome extension development, and digital transformation consulting. We specialize in building scalable SaaS platforms with subscription management, multi-tenancy, and advanced analytics. Our SaaS development services encompass custom SaaS development tailored to businesses of all sizes. For mobile applications, we provide both native and cross-platform solutions using React Native. In the AI domain, we offer agentic AI development and AI agent development services to create intelligent, autonomous systems. Our generative AI solutions help businesses automate tasks and enhance creativity, while our AI integration services ensure seamless incorporation of AI technologies into existing systems. For process optimization, we provide business automation solutions and workflow automation services that streamline operations and improve efficiency. Our DevOps services support continuous integration and deployment, while our QA testing services and test automation services ensure software quality and reliability. We also specialize in Chrome extension development for enhanced productivity, and offer custom website development including Next.js website development for high-performance, SEO-friendly websites. Additionally, our AI automation services combine artificial intelligence with automation for intelligent, self-learning systems. All our services are backed by comprehensive project management, quality assurance, and ongoing support.",
            },
            {
              question: "Where is Tech Emulsion located?",
              answer:
                "Tech Emulsion is based in Peshawar, Khyber Pakhtunkhwa, Pakistan, and serves clients worldwide. We work with businesses globally, providing remote development services and digital transformation solutions. Our distributed team model allows us to work across different time zones, ensuring efficient collaboration with clients in North America, Europe, Asia, and beyond. We have successfully delivered projects for clients in the United States, United Kingdom, Canada, Australia, and various other countries. Our remote-first approach enables us to provide cost-effective solutions while maintaining high-quality standards and effective communication throughout the project lifecycle.",
            },
            {
              question: "What industries does Tech Emulsion serve?",
              answer:
                "Tech Emulsion serves a diverse range of industries including healthcare, finance, e-commerce, education, real estate, marketing and advertising, entertainment, logistics, and technology startups. We have experience building solutions for SaaS companies, healthcare platforms, financial technology applications, e-commerce platforms, content management systems, project management tools, and AI-powered applications. Our portfolio includes projects for businesses of all sizes, from startups to established enterprises. We adapt our development approach and technology stack to meet the specific regulatory, security, and operational requirements of each industry.",
            },
            {
              question: "How long does it take to develop a custom software solution?",
              answer:
                "Development timelines vary significantly based on project scope, complexity, and requirements. A simple web application might take 2-4 months, while a comprehensive SaaS platform with multiple features could take 6-12 months or more. Mobile applications typically require 3-6 months for initial development, and AI-powered solutions may take 4-8 months depending on the complexity of AI integration. We follow agile development methodologies, allowing for iterative development and early delivery of core features. During the discovery phase, we provide detailed project timelines with milestones. Our development process includes regular updates, demos, and feedback cycles to ensure alignment with your vision and requirements.",
            },
            {
              question: "What is agentic AI development and how can it benefit my business?",
              answer:
                "Agentic AI development involves creating AI systems that can operate autonomously, make decisions, and perform complex tasks without constant human intervention. Our agentic AI development services focus on building intelligent agents that can understand context, learn from interactions, and adapt to changing conditions. These AI agents can automate business processes, provide intelligent customer support, analyze data in real-time, and integrate seamlessly with your existing systems. Agentic AI development is particularly valuable for businesses looking to automate complex workflows, enhance decision-making processes, and create more intelligent, responsive systems that can operate independently while maintaining alignment with business objectives.",
            },
            {
              question: "What are your AI agent development services?",
              answer:
                "Our AI agent development services include creating intelligent, autonomous AI agents tailored to your specific business needs. We develop AI agents that can automate business processes, provide intelligent customer support, analyze data, and integrate seamlessly with your existing systems. Our AI agent development services cover conversational AI agents for customer service, task automation agents for workflow optimization, data analysis agents for business intelligence, and custom AI agent solutions designed for your unique requirements. We specialize in building AI agents that can understand natural language, make decisions, learn from interactions, and operate autonomously while maintaining human oversight and control.",
            },
            {
              question: "Do you offer SaaS development services?",
              answer:
                "Yes, we provide comprehensive SaaS development services including custom SaaS development for businesses of all sizes. Our SaaS development services encompass building scalable, multi-tenant SaaS platforms with subscription management, user authentication, payment processing, analytics dashboards, and API integrations. We specialize in creating SaaS solutions that are secure, scalable, and user-friendly. Our custom SaaS development approach ensures that your SaaS platform is tailored to your specific business model, industry requirements, and user needs. We handle everything from initial architecture design to deployment, maintenance, and ongoing support for your SaaS platform.",
            },
            {
              question: "What workflow automation services do you provide?",
              answer:
                "We offer comprehensive workflow automation services that help streamline your business processes and improve efficiency. Our workflow automation services include analyzing your current workflows, identifying automation opportunities, designing automated workflows, and implementing solutions that reduce manual errors and save time. We also provide business automation solutions that encompass end-to-end process automation, integration with existing systems, and continuous optimization. Our workflow automation services can automate repetitive tasks, streamline approval processes, synchronize data across systems, and create intelligent workflows that adapt to changing conditions. We work with various automation platforms and can integrate with your existing tools and systems.",
            },
            {
              question: "What QA testing services and test automation services do you offer?",
              answer:
                "We provide comprehensive QA testing services including functional testing, performance testing, security testing, usability testing, and compatibility testing. Our QA testing services ensure your software is bug-free, reliable, and ready for market. Additionally, we offer test automation services that help you maintain quality while accelerating your development cycles. Our test automation services include creating automated test suites, implementing continuous testing integration, setting up test frameworks, and providing comprehensive test coverage. We use industry-standard testing tools and frameworks to ensure efficient and effective test automation. Our QA testing services and test automation services help reduce testing time, improve test coverage, catch bugs early, and ensure consistent quality across releases.",
            },
            {
              question: "Can you help with Next.js website development?",
              answer:
                "Absolutely! We specialize in Next.js website development, creating high-performance, SEO-friendly websites using the Next.js framework. Our Next.js website development services include custom website development, responsive design, server-side rendering, static site generation, API integration, and performance optimization. We also provide custom website development services for businesses looking for unique, tailored web solutions. Our Next.js website development approach ensures fast page loads, excellent SEO performance, mobile responsiveness, and seamless user experiences. We leverage Next.js features like automatic code splitting, image optimization, and built-in API routes to create websites that are both fast and feature-rich.",
            },
            {
              question: "What AI integration services do you provide?",
              answer:
                "Our AI integration services help businesses seamlessly integrate artificial intelligence into their existing systems and workflows. We provide AI integration services for various AI technologies including generative AI solutions, machine learning models, natural language processing, computer vision, and predictive analytics. Our AI integration services ensure smooth integration with minimal disruption to existing operations. We handle API integrations, data pipeline setup, model deployment, and system integration to ensure that AI technologies work seamlessly with your current infrastructure. Our AI integration services also include training your team, providing documentation, and offering ongoing support to ensure successful AI adoption.",
            },
            {
              question: "Do you provide AI automation services?",
              answer:
                "Yes, we offer comprehensive AI automation services that combine artificial intelligence with automation to create intelligent, self-learning automated systems. Our AI automation services include intelligent process automation, AI-powered decision-making systems, automated data analysis, intelligent document processing, and AI-driven workflow optimization. These services help businesses achieve higher levels of automation while maintaining flexibility and adaptability. Our AI automation services can automate complex tasks that require decision-making, learning, and adaptation, going beyond traditional automation to create systems that can improve over time and handle edge cases intelligently.",
            },
          ],
        }}
        howToData={{
          title: "How to get started with Tech Emulsion for your digital transformation project",
          description:
            "A comprehensive step-by-step guide to begin your digital transformation journey with Tech Emulsion, from initial contact to project launch.",
          totalTime: "PT2W",
          steps: [
            { 
              name: "Initial Contact", 
              text: "Reach out to Tech Emulsion through our website contact form, email us at info@techemulsion.com, or schedule a discovery call directly via our Calendly widget. Provide basic information about your project needs, timeline, and budget expectations." 
            },
            {
              name: "Free Discovery Call",
              text: "Schedule and attend a free discovery call with our team. During this 30-60 minute session, we'll discuss your business goals, technical requirements, project scope, timeline, and budget. This helps us understand your vision and determine how we can best assist you.",
            },
            {
              name: "Project Analysis & Proposal",
              text: "Our team analyzes your requirements and prepares a detailed proposal including project scope, technology recommendations, timeline, milestones, deliverables, and transparent pricing. The proposal includes a breakdown of features, development phases, and expected outcomes.",
            },
            {
              name: "Proposal Review & Discussion",
              text: "Review the proposal with your team and discuss any questions or modifications needed. We're flexible and can adjust the proposal to better align with your budget, timeline, or feature requirements. This collaborative approach ensures we're on the same page before starting.",
            },
            {
              name: "Contract & Onboarding",
              text: "Once you approve the proposal, we'll prepare and sign the project contract. Our onboarding process includes setting up project management tools, establishing communication channels, scheduling regular check-ins, and assigning your dedicated development team.",
            },
            {
              name: "Project Kickoff",
              text: "We begin your project with a kickoff meeting where we finalize requirements, set up development environments, establish workflows, and create the initial project timeline. This ensures everyone understands the project goals, technical approach, and success metrics.",
            },
            {
              name: "Development & Iteration",
              text: "Our agile development process includes regular sprints, weekly updates, demo sessions, and feedback cycles. You'll see progress regularly and can provide input throughout the development process. We maintain transparent communication and keep you informed at every stage.",
            },
            {
              name: "Testing & Quality Assurance",
              text: "Before launch, we conduct comprehensive testing including functional testing, performance testing, security audits, and user acceptance testing. We ensure your solution meets quality standards, performs optimally, and is ready for production deployment.",
            },
            {
              name: "Launch & Deployment",
              text: "We deploy your solution to production, configure hosting environments, set up monitoring and analytics, and ensure everything is running smoothly. We provide deployment documentation and training materials to help your team use the new system effectively.",
            },
            {
              name: "Ongoing Support",
              text: "After launch, we provide ongoing support including bug fixes, feature enhancements, performance monitoring, and technical assistance. Our support packages ensure your solution continues to evolve and meet your changing business needs.",
            },
          ],
        }}
      />
      <Box height="100%" width="100%" overflow="hidden">
        <HeroSection />
        <AboutUsSection />
        <HighlightsSection />
        <Portfolio />
        <SocialProofSection />

        <TestimonialsSection />
        <TechnologySection />
        <BlogSection />
        <FaqSection />
        <Divider />
        <Contact />
      </Box>
    </Box>
  );
};
type LottieAnimationData = Record<string, any>;

const HeroSection: React.FC = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const pensaImage = useColorModeValue(
    "/assets/clients/Pensa.webp",
    "/assets/clients/Pensa-white.png"
  );
  const [currentAnimation, setCurrentAnimation] =
    useState<LottieAnimationData>(animationData1);
  const isSmall = useBreakpointValue({ base: true, md: true, lg: false });

  useEffect(() => {
    // Avoid running the animation toggle timer on small screens
    if (isSmall) return;

    const interval = setInterval(() => {
      setCurrentAnimation((prevAnimation) =>
        prevAnimation === animationData1 ? animationData2 : animationData1,
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [isSmall]);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch((err) => console.error("Video play error:", err));
  }, []);

  const img =
    "https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fhero%2Fhero-image-01.png&w=1920&q=75";
  return colorMode === "dark" ? (
    <Box
      position="relative"
      overflow="hidden"
      display="grid"
      gridTemplateColumns="1fr"
      gridTemplateRows="1fr">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Box
        gridColumn="1 / -1"
        gridRow="1 / -1"
        height="100%"
        width="100%"
        display="grid"
        zIndex="-1"
        mb={{ base: "0px", lg: "-120px" }}>
        {!isSmall && (
          <FallInPlace delay={1}>
            <video
              src="/assets/Animation/hero-video.mp4"
              ref={videoRef}
              autoPlay={true}
              loop={true}
              muted={true}
              // loading="eager"
              playsInline={true}
              preload="none"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxWidth: "100%",
              }}
            />
          </FallInPlace>
        )}
      </Box>
      <Container
        maxW="container.xl"
        pt={{ base: 20, lg: 20 }}
        gridColumn="1 / -1"
        gridRow="1 / -1"
        zIndex={1}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent={{ base: "center", lg: "space-between" }}
          alignItems="flex-start">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Imagineer breakthrough <Br />
                <Em style={{ color: "var(--chakra-colors-pearlAqua-500)" }}>
                  SaaS, Mobile Apps, and AI Agents{" "}
                </Em>
                <Br /> for your business
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Em>
                  Tech Emulsion designs, builds, and scales{" "}
                  <Em
                    style={{
                      color: "var(--chakra-colors-pearlAqua-500)",
                      fontWeight: "900",
                    }}>
                    SaaS, mobile experiences, and AI agents
                  </Em>{" "}
                  that streamline operations, delight users, and unlock new
                  growth.
                </Em>
              </FallInPlace>
            }>
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="6" spacing="8">
                {/* <NextjsLogo height="28px" /> <ChakraLogo height="20px" /> */}
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <Button
                  size="lg"
                  onClick={() => {
                    // @ts-ignore
                    if (window.Calendly) {
                      // @ts-ignore
                      window.Calendly.initPopupWidget({
                        url: "https://calendly.com/hassanms/discovery-call",
                      });
                    }
                  }}
                  sx={{
                    bg: "teal.500 !important",
                    color: "white !important",
                  }}>
                  Book a Discovery Call
                </Button>
              </ButtonGroup>
            </FallInPlace>
            <VStack
              flex="1"
              spacing="2"
              alignItems="flex-start"
              display={{ base: "flex", lg: "flex" }}
              mt="10">
              <Text
                fontSize="sm"
                color={textColor}
                fontWeight="medium"
                maxW="lg"
                textAlign="left"
                display={"flex"}
                alignItems={"center"}
                width={"100%"}>
                Trusted By the Best{"  "}
                <Divider height="1.5px" bg="muted" width="20%" ml="4" />
              </Text>
              <FallInPlace delay={0.6}>
                {/* Static version for screens >= 600px */}
                <Box
                  overflow="hidden"
                  height="100%"
                  display="none"
                  gap="10"
                  sx={{
                    "@media (min-width: 600px)": {
                      display: "flex",
                    },
                  }}>
                  <>
                    <Image
                      src="/assets/clients/Bubble.1.png"
                      width={110}
                      height={100}
                      alt="Bubble logo"
                      style={{
                        filter: "invert(1) brightness(2) contrast(1.2)",
                        objectFit: "contain",
                        marginBottom: "8px",
                      }}
                    />
                    <Image
                      src={pensaImage}
                      width={100}
                      height={100}
                      alt="Pensa logo"
                      style={{
                        objectFit: "contain",
                        marginBottom: "2px",
                      }}
                    />
                    <Image
                      src="/assets/clients/atarim-white.svg"
                      width={100}
                      height={100}
                      alt="Atarim logo"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                    <Image
                      src="/assets/clients/nearshore.png"
                      width={140}
                      height={100}
                      alt="NearShore logo"
                      style={{
                        objectFit: "contain",
                        marginTop: "13px",
                      }}
                    />
                  </>
                </Box>
                {/* Scrolling version for screens < 600px */}
                <Box
                  overflow="hidden"
                  height="100%"
                  width="100%"
                  position="relative"
                  display="block"
                  sx={{
                    "@media (min-width: 600px)": {
                      display: "none",
                    },
                  }}>
                  <Box
                    display="flex"
                    width="200%"
                    gap="10"
                    animation={`${heroScrollAnimation} 30s infinite linear`}>
                    <>
                      <Image
                        src="/assets/clients/Bubble.1.png"
                        width={110}
                        height={100}
                        alt="Bubble logo"
                        style={{
                          filter: "invert(1) brightness(2) contrast(1.2)",
                          objectFit: "contain",
                          marginBottom: "8px",
                        }}
                      />
                      <Image
                        src="/assets/clients/Pensa.webp"
                        width={100}
                        height={100}
                        alt="Pensa logo"
                        style={{
                          objectFit: "contain",
                          marginBottom: "2px",
                        }}
                      />
                      <Image
                        src="/assets/clients/atarim-white.svg"
                        width={100}
                        height={100}
                        alt="Atarim logo"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src="/assets/clients/nearshore.png"
                        width={140}
                        height={100}
                        alt="NearShore logo"
                        style={{
                          objectFit: "contain",
                          marginTop: "13px",
                        }}
                      />
                      {/* Duplicate logos for seamless loop */}
                    <Image
                      src="/assets/clients/Bubble.1.png"
                      width={110}
                      height={100}
                      alt="Bubble logo"
                      style={{
                        filter: "invert(1) brightness(2) contrast(1.2)",
                        objectFit: "contain",
                        marginBottom: "8px",
                      }}
                    />
                    <Image
                      src="/assets/clients/Pensa.webp"
                      width={100}
                      height={100}
                      alt="Pensa logo"
                      style={{
                        objectFit: "contain",
                        marginBottom: "2px",
                      }}
                    />
                    <Image
                      src="/assets/clients/atarim-white.svg"
                      width={100}
                      height={100}
                      alt="Atarim logo"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                    <Image
                      src="/assets/clients/nearshore.png"
                      width={140}
                      height={100}
                      alt="NearShore logo"
                      style={{
                        objectFit: "contain",
                        marginTop: "13px",
                      }}
                    />
                  </>
                  </Box>
                </Box>
              </FallInPlace>
            </VStack>
          </Hero>
          <Box
            display={{ base: "none", lg: "block" }}
            mt={{ base: "20", lg: "20" }}
            mr={{ base: 0, lg: 0 }}
            w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}>
            <FallInPlace delay={1}>
              <Box overflow="hidden"></Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
    </Box>
  ) : (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 20, lg: 20 }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent={{ base: "center", lg: "space-between" }}
          alignItems="flex-start">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Imagineer breakthrough <Br />
                <Em style={{ color: "var(--chakra-colors-teal-500)" }}>
                  SaaS, Mobile Apps, and AI Agents{" "}
                </Em>
                <Br /> for your business
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Em>
                  Tech Emulsion designs, builds, and scales{" "}
                  <Em
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: "900",
                    }}>
                    SaaS, mobile experiences, and AI agents
                  </Em>{" "}
                  that streamline operations, delight users, and unlock new
                  growth.
                </Em>
              </FallInPlace>
            }>
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="6" spacing="8">
                {/* <NextjsLogo height="28px" /> <ChakraLogo height="20px" /> */}
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <Button
                  size="lg"
                  onClick={() => {
                    // @ts-ignore
                    if (window.Calendly) {
                      // @ts-ignore
                      window.Calendly.initPopupWidget({
                        url: "https://calendly.com/hassanms/discovery-call",
                      });
                    }
                  }}
                  sx={{
                    bg: "teal.500 !important",
                    color: "white !important",
                  }}>
                  Book a Discovery Call
                </Button>
              </ButtonGroup>
            </FallInPlace>
            <VStack
              flex="1"
              spacing="2"
              alignItems="flex-start"
              display={{ base: "flex", lg: "flex" }}
              mt="10">
              <Text
                fontSize="sm"
                color={textColor}
                fontWeight="medium"
                maxW="lg"
                textAlign="left"
                display={"flex"}
                alignItems={"center"}
                width={"100%"}>
                Trusted By the Best{"  "}
                <Divider height="1.5px" bg="muted" width="20%" ml="4" />
              </Text>
              <FallInPlace delay={0.6}>
                {/* Static version for screens >= 600px */}
                <Box
                  overflow="hidden"
                  height="100%"
                  display="none"
                  gap="10"
                  sx={{
                    "@media (min-width: 600px)": {
                      display: "flex",
                    },
                  }}>
                  <>
                    <Image
                      src="/assets/clients/Bubble.1.png"
                      width={110}
                      height={100}
                      alt="bubble logo"
                      loading="eager"
                      style={{
                        objectFit: "contain",
                        marginBottom: "8px",
                      }}
                    />
                    <Image
                      src="/assets/clients/Pensa.webp"
                      width={100}
                      height={100}
                      alt="Pensa logo"
                      loading="eager"
                      style={{
                        objectFit: "contain",
                        marginBottom: "2px",
                      }}
                    />
                    <Image
                      src="/assets/clients/Atarim.svg"
                      width={100}
                      height={100}
                      alt="Atarim logo"
                      loading="eager"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                    <Image
                      src="/assets/clients/nearshore.png"
                      width={140}
                      height={100}
                      alt="Nearshore logo"
                      loading="eager"
                      style={{
                        filter: "invert(1) brightness(2) contrast(1.2)",
                        objectFit: "contain",
                        marginTop: "13px",
                      }}
                    />
                  </>
                </Box>
                {/* Scrolling version for screens < 600px */}
                <Box
                  overflow="hidden"
                  height="100%"
                  width="100%"
                  position="relative"
                  display="block"
                  sx={{
                    "@media (min-width: 600px)": {
                      display: "none",
                    },
                  }}>
                  <Box
                    display="flex"
                    width="200%"
                    gap="10"
                    animation={`${heroScrollAnimation} 30s infinite linear`}>
                    <>
                      <Image
                        src="/assets/clients/Bubble.1.png"
                        width={110}
                        height={100}
                        alt="bubble logo"
                        loading="eager"
                        style={{
                          objectFit: "contain",
                          marginBottom: "8px",
                        }}
                      />
                      <Image
                        src="/assets/clients/Pensa.webp"
                        width={100}
                        height={100}
                        alt="Pensa logo"
                        loading="eager"
                        style={{
                          objectFit: "contain",
                          marginBottom: "2px",
                        }}
                      />
                      <Image
                        src="/assets/clients/Atarim.svg"
                        width={100}
                        height={100}
                        alt="Atarim logo"
                        loading="eager"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src="/assets/clients/nearshore.png"
                        width={140}
                        height={100}
                        alt="Nearshore logo"
                        loading="eager"
                        style={{
                          filter: "invert(1) brightness(2) contrast(1.2)",
                          objectFit: "contain",
                          marginTop: "13px",
                        }}
                      />
                      {/* Duplicate logos for seamless loop */}
                      <Image
                        src="/assets/clients/Bubble.1.png"
                        width={110}
                        height={100}
                        alt="bubble logo"
                        loading="eager"
                        style={{
                          objectFit: "contain",
                          marginBottom: "8px",
                        }}
                      />
                      <Image
                        src="/assets/clients/Pensa.webp"
                        width={100}
                        height={100}
                        alt="Pensa logo"
                        loading="eager"
                        style={{
                          objectFit: "contain",
                          marginBottom: "2px",
                        }}
                      />
                      <Image
                        src="/assets/clients/Atarim.svg"
                        width={100}
                        height={100}
                        alt="Atarim logo"
                        loading="eager"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src="/assets/clients/nearshore.png"
                        width={140}
                        height={100}
                        alt="Nearshore logo"
                        loading="eager"
                        style={{
                          filter: "invert(1) brightness(2) contrast(1.2)",
                          objectFit: "contain",
                          marginTop: "13px",
                        }}
                      />
                    </>
                  </Box>
                </Box>
              </FallInPlace>
            </VStack>
          </Hero>
          <Box
            display={{ base: "none", lg: "block" }}
            mt={{ base: "20", lg: "20" }}
            mr={{ base: 0, lg: 0 }}
            w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}>
            <FallInPlace delay={1}>
              <Box overflow="hidden">
                <Player
                  autoplay
                  loop
                  src={currentAnimation} // Toggle between animations
                  style={{
                    height: "70%",
                    width: "70%",
                  }}
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const cardData = [
  {
    id: 1,
    name: "Zain Ul Abideen",
    designation: "Co-Founder & CTO",
    avatar: "/assets/zain.png",
    gradient: ["pink.200", "purple.500"],
    company: "",
    description:
      "We are committed to delivering exceptional products, achieving outstanding results, and driving significant revenue growth for our clients.",
  },
  {
    id: 2,
    name: "Hassan M. Saddique",
    designation: "Co-Founder & CEO",
    avatar: "/assets/hassan.png",
    gradient: ["pink.200", "purple.500"],
    company: "",
    description:
      "At Tech Emulsion, we don't just create software, we build AI-powered solutions that elevate business capabilities. We believe in turning complex challenges into growth opportunities for our clients.",
  },
];

const AboutUsSection: React.FC = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("muted", "lightGrey.400");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        setIsFlipping(false);
      }, 0);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentCard = cardData[currentIndex];

  return (
    <Box id="about" sx={{ scrollMarginTop: "50px" }}>
      <Container maxW="container.xl" py="5">
        {/*<Divider /> */}

        <Stack
          direction={["column", null, "row"]}
          spacing="4"
          ml={{ base: 4, lg: 4 }}
          mt={10}>
          <Box flex="1">
            <Heading
              as="h2"
              size="md"
              color={colorMode === "dark" ? "white" : "teal.500"}
              sx={{
                textTransform: "uppercase",
              }}>
              About us
            </Heading>
            <Heading
              as="h1"
              mt="2"
              sx={{
                fontSize: "2rem",
              }}>
              Impactful Product Design,
              <Br /> Memorable Experience
            </Heading>
            <Text color={textColor} fontSize="lg" mt="4">
              We believe that collaboration is key, working closely with you to
              craft tailored solutions. Our mission is to guide you with the
              best tools and personalized support, ensuring a rewarding journey
              from concept to completion.
            </Text>
          </Box>
          <Box flex="1">
            <Heading
              as="h1"
              fontWeight={600}
              sx={{
                fontSize: "2rem",
              }}>
              Connect With Us
            </Heading>
            <Text color={textColor} fontSize="lg" mt="4">
              {`We'd love to hear from you! Reach out to us for any inquiries,
              feedback, or support. Our team is here to assist you and ensure
              you have the best experience.`}
            </Text>
            {/* social links */}
            <HStack mt="8" spacing="4">
              <Link
                href="https://www.linkedin.com/company/tech-emulsion/"
                isExternal
                aria-label="Visit Tech Emulsion on LinkedIn">
                <Icon
                  as={FiLinkedin}
                  boxSize="10"
                  color={useColorModeValue("gray.700", "gray.100")}
                  sx={{
                    padding: "10px",
                    borderRadius: "20%",
                    border: "1px solid",
                    borderColor: "teal.500",
                    ":hover": {
                      bg: "teal.500",
                      color: "white",
                    },
                  }}
                />
              </Link>
              <Link
                href="https://www.upwork.com/agencies/techemulsion/"
                isExternal
                aria-label="Visit Tech Emulsion on Upwork">
                <Icon
                  as={BiLogoUpwork}
                  boxSize="10"
                  color={useColorModeValue("gray.700", "gray.100")}
                  sx={{
                    padding: "10px",
                    borderRadius: "20%",
                    border: "1px solid",
                    borderColor: "teal.500",
                    ":hover": {
                      bg: "teal.500",
                      color: "white",
                    },
                  }}
                />
              </Link>
              <Link
                href="https://www.youtube.com/@TechEmulsion"
                isExternal
                aria-label="Visit Tech Emulsion on YouTube">
                <Icon
                  as={AiFillYoutube}
                  boxSize="10"
                  color={useColorModeValue("gray.700", "gray.100")}
                  sx={{
                    padding: "10px",
                    borderRadius: "20%",
                    border: "1px solid",
                    borderColor: "teal.500",
                    ":hover": {
                      bg: "teal.500",
                      color: "white",
                    },
                  }}
                />
              </Link>
            </HStack>
          </Box>
        </Stack>
        <Box flex="1" mt={20}>
          <Heading
            as="h2"
            size="md"
            color={colorMode === "dark" ? "white" : "teal.500"}
            sx={{
              textTransform: "uppercase",
            }}
            ml={4}>
            How We Empower Your Business
          </Heading>
          <Features
            id="benefits"
            columns={[1, 2, 4]}
            iconSize={3}
            innerWidth="container.xl"
            pt="10"
            pb={0}
            mb={-5}
            features={[
              {
                title: "Software Outsourcing",
                icon: OutsourceIcon,
                description:
                  "We take full ownership of your software development, delivering high-quality solutions from start to finish, allowing you to focus on your core business.",
                iconPosition: "left",
                delay: 0.8,
              },
              {
                title: "Staff Augmentation",
                icon: StaffIcon,
                description:
                  "Seamlessly expand your team with our pre-vetted developers, saving you the hassle of recruitment, training, and onboarding.",
                iconPosition: "left",
                delay: 1,
              },
              {
                title: "Dedicated Teams",
                icon: TeamsIcon,
                description:
                  "Accelerate your projects by integrating a fully functional and dedicated team into your development process for faster results.",
                iconPosition: "left",
                delay: 1.1,
              },
              {
                title: "Offshore Contractors",
                icon: ContractorsIcon,
                description:
                  "Leverage our global talent pool to hire experienced offshore contractors, providing cost-effective, high-quality development services tailored to your needs.",
                iconPosition: "left",
                delay: 0.6,
              },
            ]}
            reveal={FallInPlace}
          />
        </Box>

        <Highlights>
          <Box>
            <Box key={currentCard.id}>
              <Card
                position="relative"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                bgGradient="linear(to-br, mutedTeal.400, teal.600, teal.500)"
                boxShadow="none"
                border={"none"}
                borderRadius="lg"
                overflow="hidden"
                h="320px"
                className="shining-card">
                <FallInPlace delay={0.8}>
                  <CardHeader
                    display="flex"
                    flexDirection="row"
                    gap="4"
                    className={`fade-card ${
                      isFlipping ? "fade-out" : "fade-in"
                    }`}>
                    <Avatar
                      src={currentCard.avatar}
                      size="lg"
                      bg="transparent"
                      className={`fade-card ${
                        isFlipping ? "fade-out" : "fade-in"
                      }`}
                    />
                    <Stack spacing="1" mt="4">
                      <Heading size="sm" color="white">
                        {currentCard.name}
                      </Heading>
                      <Text color="white" size="xs">
                        {currentCard.designation}
                      </Text>
                    </Stack>
                  </CardHeader>
                </FallInPlace>
                <FallInPlace delay={0.8}>
                  <CardBody
                    className={`fade-card ${
                      isFlipping ? "fade-out" : "fade-in"
                    }`}>
                    <Text color="white" fontSize="lg" textAlign="center">
                      &quot;{currentCard.description}&quot;
                    </Text>
                  </CardBody>
                </FallInPlace>
              </Card>
            </Box>
          </Box>

          <HighlightsItem
            colSpan={[1, null, 2, 3, 3]}
            title="Areas We Specialize In">
            <Text color={textColor} fontSize="lg">
              Our team specializes in delivering innovative software solutions
              using a wide range of modern technologies. From SaaS and
              full-stack development to AI and machine learning, we provide
              scalable, customized services to meet your business needs.
            </Text>
            <Wrap mt="8">
              {[
                "SaaS Development",
                "DevOps",
                "Web Application",
                "Web Development",
                "Full-Stack Development",
                "Front-End Development",
                "Back-End Development",
                "QA Testing & Automation",
                "Mobile App Development",
                "Amazon Web Services",
                "RESTful API",
                "Google Chrome Extension",
                "API Integration",
                "App Development",
                "Chatbots Development",
                "AI App Development",
                "Artificial Intelligence",
                "Machine Learning",
              ].map((value) => (
                <li key={value}>
                  <Tag
                    variant="subtle"
                    rounded="full"
                    px="3"
                    sx={{
                      bg: "evergreen.500",
                      color: "#fff",
                      "&:hover": {
                        bg: "teal.500",
                      },
                    }}>
                    {value}
                  </Tag>
                </li>
              ))}
            </Wrap>
          </HighlightsItem>
        </Highlights>
      </Container>
    </Box>
  );
};

const HighlightsSection: React.FC = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const HighlightsItems = [
    {
      title: "Agentic AI Engineering",
      description:
        "We create intelligent AI-driven agent systems tailored to your business needs, delivering cutting-edge automation, personalized interactions, and exceptional user experiences.",
      image: "/assets/whatWeDo/arseny-togulev-MECKPoKJYjM-unsplash.jpg",
      alt: "Agentic AI Engineering",
    },
    {
      title: "Next-Gen SaaS Development",
      description:
        "We design and develop scalable, custom SaaS solutions tailored to your business needs, ensuring robust performance and seamless user experiences.",
      image: "/assets/whatWeDo/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
      alt: "Next-Gen SaaS Development",
    },
    {
      title: "Innovative Website Development",
      description:
        "From concept to launch, we create responsive and visually stunning websites that captivate your audience and drive business growth.",
      image: "/assets/whatWeDo/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg",
      alt: "Innovative Website Development",
    },
    {
      title: "Custom Chrome Extensions",
      description:
        "We build powerful Chrome extensions that enhance productivity and offer unique functionalities, perfectly aligned with your business objectives.",
      image: "/assets/whatWeDo/growtika-fiao0RcVWBE-unsplash.jpg",
      alt: "Custom Chrome Extensions",
    },
    {
      title: "Expert DevOps Solutions",
      description:
        "Our DevOps services streamline your development process, enhance collaboration, and ensure continuous integration and deployment for faster, reliable releases.",
      image: "/assets/whatWeDo/growtika-72dRZHuYJWE-unsplash.jpg",
      alt: "Expert DevOps Solutions",
    },
    {
      title: "Generative AI Integration",
      description:
        "Harness the power of AI to revolutionize your operations. We integrate advanced generative AI solutions to automate tasks, enhance creativity, and boost efficiency.",
      image: "/assets/whatWeDo/randa-marzouk-ilwI-AIAQr4-unsplash.jpg",
      alt: "Generative AI Integration",
    },
    {
      title: "QA Testing & Automation",
      description:
        "We deliver comprehensive QA testing and automation services, ensuring your software is bug-free, reliable, and ready for market with speed and precision.",
      image: "/assets/whatWeDo/growtika-Am6pBe2FpJw-unsplash.jpg",
      alt: "QA Testing & Automation",
    },
    {
      title: "Automation Solutions",
      description:
        "Streamline your business processes with our cutting-edge automation services. We design and implement automated workflows to enhance productivity, reduce manual errors, and optimize efficiency.",
      image: "/assets/whatWeDo/automation.png",
      alt: "Automation Solutions",
    },
  ];
  return (
    <Box
      id="services"
      sx={{
        scrollMarginTop: "50px",
      }}>
      <Container maxW="container.xl" py="5">
        <Divider />
        <Box
          display={{ base: "block", md: "flex" }}
          px="4"
          mt={10}
          justifyContent={"space-between"}>
          <Box>
            <Heading
              as="h2"
              size="md"
              color={colorMode === "dark" ? "white" : "teal.500"}
              sx={{
                textTransform: "uppercase",
              }}>
              What We Do
            </Heading>
            <Heading
              as="h1"
              mt="2"
              sx={{
                fontSize: {
                  base: "2rem",
                  md: "2rem",
                },
                width: {
                  base: "100%",
                  md: "70%",
                },
              }}>
              We help to build clients their dream projects
            </Heading>
          </Box>

          {/* Explore services */}
          <ButtonGroup
            spacing={4}
            display="flex"
            justifyContent={["flex-start", null, "flex-end"]}
            width={["100%", null, "auto"]}
            alignItems="end"
            mt="4">
            <ButtonLink
              size="lg"
              href="/services"
              sx={{
                bg: " none",
                fontSize: "1.5rem",
                color: colorMode === "light" ? "teal.500 !important" : "white",
                textDecoration: "underline",
                ":hover": {
                  bg: "none",
                  color: colorMode === "light" ? "teal.500 !important" : "white",
                  textDecoration: "none",
                },
              }}>
              Explore Services
            </ButtonLink>
          </ButtonGroup>
        </Box>

        <HighlightsWhatWeDo>
          {HighlightsItems?.map((item, index) => (
            <HighlightsItem
              key={index}
              colSpan={[1, null, 2]}
              title={""}
              padding={0}>
              <Image
                src={item.image}
                alt={item.alt}
                width={1200}
                height={300}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit:
                    item.title === "Agentic AI Engineering" ? "cover" : "fill",
                }}
              />
              <Box px="4" py="6" borderRadius="8px" w="100%">
                <Heading as="h2" size="lg" mb={4}>
                  {item.title}
                </Heading>
                <VStack alignItems="flex-start" spacing="8">
                  <Text color={textColor} fontSize="lg">
                    {item.description}
                  </Text>
                </VStack>
              </Box>
            </HighlightsItem>
          ))}
        </HighlightsWhatWeDo>
      </Container>
    </Box>
  );
};

const Portfolio: React.FC = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const [showAll, setShowAll] = useState(false); // Add this state
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "whiteAlpha.200");
  const accentColor = useColorModeValue("teal.500", "pearlAqua.400");
  const HighlightsItems = [
    {
      title: "Campaign Management System – A Precision-Engineered Management Ecosystem for Out-of-Home Advertising",
      description:
        "Campaign Management System is a comprehensive, end-to-end management platform designed specifically for the Out-of-Home (OOH) advertising industry. Built with React and Supabase, it handles the entire campaign lifecycle from initial briefing and inventory site selection to real-time availability tracking and multi-format financial reporting.",
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
      title: "DADS Sales Reborn – Rebuilding Multi-Location Automotive Intelligence from Broken SaaS Data",
      description:
        "DADS Sales Reborn is a centralized operational intelligence platform built for a multi-location automotive repair business operating across multiple US states. We rebuilt an unreliable prototype into a scalable data aggregation and analytics system, capable of handling incomplete APIs, inconsistent data, and real-world automotive edge cases. The system consolidates sales, repair orders, inspections, work-in-progress, and profitability signals into one executive dashboard.",
      image: "/assets/portfolio/New/DADS_Sales_Reborn.jpg",
      alt: "DADS Sales Reborn – Multi-Location Automotive Intelligence Platform",
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
      title: "AVL-CoPilot – Intelligent Conversational AI Platform",
      description:
        "An advanced AI-powered conversational assistant solution designed to transform customer engagement through intelligent automation, natural language processing, and context-aware interactions. Built with cutting-edge AI frameworks to deliver 24/7 availability, sub-second response times, and continuous learning capabilities.",
      image: "/assets/portfolio/New/ai-chatbot-avl-case-study.png",
      alt: "AVL-CoPilot – Intelligent Conversational AI Platform",
    },
  ];

  // Listen for hash change to #portfolio (when nav is clicked)
  React.useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#portfolio") {
        setShowAll(true);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <Box id="portfolio" sx={{ scrollMarginTop: "50px" }}>
      <Container maxW="container.xl" py="5" mb="5">
        <Divider />

        <Box
          display={{ base: "block", md: "flex" }}
          px="4"
          mt={10}
          justifyContent={"space-between"}>
          <Box>
            <Heading
              as="h2"
              size="md"
              color={colorMode === "dark" ? "white" : "teal.500"}
              sx={{
                textTransform: "uppercase",
              }}>
              Creative Portfolio
            </Heading>
            <Heading
              as="h1"
              mt="2"
              sx={{
                fontSize: {
                  base: "2rem",
                  md: "2rem",
                },
                width: {
                  base: "100%",
                  md: "70%",
                },
              }}>
              Recent Works
            </Heading>

            {/* for small text  */}

            <Text
              py="4"
              color={textColor}
              fontSize="lg"
              fontWeight={"500"}
              mt="1"
              width={{ base: "100%", md: "60%" }}
              textAlign="left">
              {`Explore our creative portfolio showcasing a selection of recent works. From innovative designs to cutting-edge solutions, each
            project highlights our dedication to quality and creativity.
            Discover how we've transformed ideas into impactful digital experiences for businesses like yours.`}
            </Text>
            <ButtonGroup
              spacing={4}
              display="flex"
              justifyContent={["flex-start", null, "flex-end"]}
              width={["100%", null, "auto"]}
              alignItems="end"
              mt="0">
              <ButtonLink
                size="lg"
                href="/portfolio"
                sx={{
                  bg: " none",
                  fontSize: "1.5rem",
                  color: colorMode === "light" ? "teal.500 !important" : "white",
                  textDecoration: "underline",
                  ":hover": {
                    bg: "none",
                    color:
                      colorMode === "light" ? "teal.500 !important" : "white",
                    textDecoration: "none",
                  },
                }}>
                Explore Portfolio
              </ButtonLink>
            </ButtonGroup>
          </Box>
        </Box>

        {/* Image-first masonry grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="100%" mt={8}>
          {HighlightsItems.map((item, index) => {
            const href = item.title.includes("Pack Assist")
              ? "/portfolio/packassist"
              : item.title.includes("The Meatery")
              ? "/portfolio/meatery"
              : item.title.includes("Atarim")
              ? "/portfolio/atarim"
              : item.title.includes("JarvisReach")
              ? "/portfolio/jarvisreach"
              : item.title.includes("Content Compass")
              ? "/portfolio/contentcompass"
              : item.title.includes("SuperHeart")
              ? "/portfolio/superheart"
              : item.title.includes("Rack Room")
              ? "/portfolio/rackroom"
              : item.title.includes("Podcast Beacon")
              ? "/portfolio/podcastbeacon"
              : item.title.includes("DADS Sales Reborn")
              ? "/portfolio/dadssalesreborn"
              : item.title.includes("Macromascot")
              ? "/portfolio/macromascot"
              : item.title.includes("Campaign Management System") || item.title.includes("Campaign")
              ? "/portfolio/campaignos"
              : item.title.includes("AVL-CoPilot") || item.title.includes("AVL-Co")
              ? "/portfolio/avl-copilot"
              : null;

            // Determine category based on title
            const category = item.title.includes("Campaign")
              ? "Management System"
              : item.title.includes("Macromascot")
              ? "Health App"
              : item.title.includes("DADS")
              ? "Analytics Platform"
              : item.title.includes("Pack Assist")
              ? "AI Chatbot"
              : item.title.includes("Meatery")
              ? "Voice CRM"
              : item.title.includes("Podcast")
              ? "SaaS Platform"
              : item.title.includes("AVL-CoPilot") || item.title.includes("AVL-Co")
              ? "AI Solution"
              : "Project";

            return (
              <NextLink href={href || "/"} passHref legacyBehavior>
                <MotionCard
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  as={Link}
                position="relative"
                h={{ base: "400px", md: "450px", lg: "500px" }}
                borderRadius="2xl"
                overflow="hidden"
                cursor="pointer"
                bg={cardBg}
                border="1px solid"
                borderColor={cardBorder}
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.4)`,
                  "& .project-image": {
                    transform: "scale(1.05)",
                    filter: "brightness(1.1) contrast(1)",
                  },
                  "& .project-overlay": {
                    opacity: 0.4,
                  },
                }}
                >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  zIndex={0}
                  className="project-image"
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  sx={{
                    filter: "brightness(0.9) contrast(1)",
                  }}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "right" }}
                  />
                </Box>
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-t, blackAlpha.900, blackAlpha.600, transparent)"
                  opacity={0.7}
                  className="project-overlay"
                  transition="opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  zIndex={1}
                />
                <VStack
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={6}
                  zIndex={2}
                  align="flex-start"
                  spacing={3}>
                  <Badge
                    color="white"
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="0.5px"
                    sx={{
                      background: "linear-gradient(135deg, rgba(128, 237, 255, 0.25), rgba(20, 184, 166, 0.25))",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3), 0 0 24px rgba(128, 237, 255, 0.3)",
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                    }}>
                    {category}
                  </Badge>
                  <Heading fontSize="2xl" fontWeight="bold" color="white" textShadow="0 2px 12px rgba(0,0,0,0.5)">
                    {item.title}
                  </Heading>
                </VStack>
              </MotionCard>
              </NextLink>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
const scrollAnimation = keyframes`
0% { transform: translateX(0); }
100% { transform: translateX(-100%); }`;

const heroScrollAnimation = keyframes`
0% { transform: translateX(0); }
100% { transform: translateX(-100%); }`;

const SocialProofSection: React.FC = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");

  return (
    <Box
      id="social"
      py="20"
      bg="evergreen.500"
      color="white"
      textAlign="center"
      height={[null, null, null]}
      mb="200">
      <Box
        position={"relative"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="4"
        py="5">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="4">
          <Heading
            as="h1"
            mt="2"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              fontSize: {
                base: "2rem",
                md: "2rem",
              },
              width: "100%",
            }}>
            Trusted by Leading Brands
          </Heading>

          <Text
            color="lightGrey.400"
            fontSize="lg"
            fontWeight={"500"}
            justifyContent={"center"}
            alignItems={"center"}
            mt="4"
            px="10"
            width={{ base: "100%", md: "60%" }}
            textAlign="center">
            We're proud to have worked with a diverse range of clients across
            industries, delivering impactful solutions that drive results. Our
            clients trust us for our commitment to quality, innovation, and
            lasting partnerships, helping them achieve their digital goals with
            ease.
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        width="480%"
        minWidth={{ base: "6300px", lg: "4300px" }}
        whiteSpace="nowrap"
        overflow="hidden">
        <Box
          display="flex"
          width={{ base: "100%", lg: "50%" }}
          justifyContent="space-around"
          alignItems="center"
          animation={`${scrollAnimation} 75s infinite linear`}>
          <Tooltip label="Teadit" hasArrow>
            <Image
              src="/assets/clients/teadit.png"
              alt="teadit"
              width={160}
              height={60}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "60px",
                width: "110px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            />
          </Tooltip>
          <Tooltip label="Artis" hasArrow>
            <Image
              src="/assets/clients/Artis-lab.png"
              alt="Artis"
              width={100}
              height={100}
              loading="eager"
              decoding="async"
              style={{
                objectFit: "contain", // Ensures proper aspect ratio
                maxHeight: "100px",
                maxWidth: "100px",
                width: "auto",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Sonara" hasArrow>
            <Image
              src="/assets/clients/sonara.svg"
              alt="Sonara"
              width={100}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                // filter: "invert(1) brightness(2) contrast(1.2)",
                height: "cover",
                maxHeight: "80px",
                width: "100px",
                cursor: "pointer",
                marginTop: "11px",
              }}
            />
          </Tooltip>
          <Tooltip label="Popcard" hasArrow>
            <Image
              src="/assets/clients/POPCARD_4.png"
              alt="POPCARD"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "50px",
                width: "auto",
                cursor: "pointer",
                marginTop: "10px",
              }}
            />
          </Tooltip>
          <Tooltip label="Nearshore" hasArrow>
            <Image
              src="/assets/clients/nearshore.png"
              alt="Pensa"
              width={140}
              height={180}
              loading="eager"
              decoding="async"
              style={{
                height: "contain",
                maxHeight: "140px",
                width: "180px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            />
          </Tooltip>
          <Tooltip label="Sprintzeal" hasArrow>
            <Image
              src="/assets/clients/Sprintzeal_Logo.webp"
              alt="Sprintzeal"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "50px",
                width: "auto",
                cursor: "pointer",
                marginTop: "10px",
              }}
            />
          </Tooltip>
          <Tooltip label="Bai" hasArrow>
            <Image
              src="/assets/clients/bai_logo_colored.46fc5d5b219c.svg"
              alt="Bai"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "50px",
                width: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Crystal Ball" hasArrow>
            <Image
              src="/assets/clients/crystal_ball.png"
              alt="Crystal Ball"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "50px",
                width: "50px",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Farmin" hasArrow>
            <Image
              src="/assets/clients/farmin-white.png"
              alt="Farmin"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "30px",
                width: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Jarvis" hasArrow>
            <Image
              src="/assets/clients/jarvis-logo.png"
              alt="Jarvis"
              width={120}
              height={120}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "120px",
                width: "120px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            />
          </Tooltip>
          <Tooltip label="Ibatu" hasArrow>
            <Image
              src="/assets/clients/ibatu.png"
              alt="Ibatu"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "50px",
                width: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Krypto Labs" hasArrow>
            <Image
              src="/assets/clients/krypto-labs.png"
              alt="Krypto Labs"
              width={180} // Increased width
              height={120} // Increased height
              loading="eager"
              decoding="async"
              style={{
                display: "block",
                objectFit: "cover", // Keeps proportions correct
                width: "180px", // Ensures it expands properly
                height: "120px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            />
          </Tooltip>
          <Tooltip label="Podcast-Beacon" hasArrow>
            <Image
              src="/assets/clients/Podcast-Beacon.png"
              alt="Podcast-Beacon"
              width={150}
              height={150}
              loading="eager"
              decoding="async"
              style={{
                objectFit: "contain", // Ensures proper aspect ratio
                maxHeight: "150px",
                maxWidth: "150px",
                width: "auto",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Pensa" hasArrow>
            <Image
              src="/assets/clients/Pensa.webp"
              alt="Pensa"
              width={120}
              height={120}
              loading="eager"
              decoding="async"
              style={{
                height: "cover",
                maxHeight: "120px",
                width: "120",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Logo Black" hasArrow>
            <Image
              src="/assets/clients/logo-black-small.png"
              alt="Logo Black"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "40px",
                width: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="IPG" hasArrow>
            <Image
              src="/assets/clients/Logo_IPG.jpg"
              alt="Logo Black"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "40px",
                width: "auto",
                cursor: "pointer",
                marginTop: "5px",
              }}
            />
          </Tooltip>
          <Tooltip label="Atarim" hasArrow>
            <Image
              src="/assets/clients/atarim-white.svg"
              alt="Atarim"
              width={130}
              height={40}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "40px",
                width: "130px",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Republic Power" hasArrow>
            <Image
              src="/assets/clients/republic_power_logo.jpeg"
              alt="Republic Power"
              width={200}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "60px",
                width: "90px",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Alifa" hasArrow>
            <Image
              src="/assets/clients/alifa.PNG"
              alt="Republic Power"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "50px",
                width: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Moodtube Extension" hasArrow>
            <Image
              src="/assets/clients/moodtube_img.png"
              alt="Republic Power"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                objectFit: "contain", // Ensures proper aspect ratio
                maxHeight: "80px",
                maxWidth: "80px",
                width: "auto",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Bipcards" hasArrow>
            <Box cursor="pointer">
              <Logo2 />
            </Box>
          </Tooltip>
        </Box>
        <Box
          display="flex"
          width={{ base: "100%", lg: "50%" }}
          justifyContent="space-around"
          alignItems="center"
          animation={`${scrollAnimation} 75s infinite linear`}>
          <Tooltip label="Sprintzeal" hasArrow>
            <Image
              src="/assets/clients/Sprintzeal_Logo.webp"
              alt="Sprintzeal"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "50px",
                width: "auto",
                cursor: "pointer",
                marginTop: "10px",
              }}
            />
          </Tooltip>
          <Tooltip label="Popcard" hasArrow>
            <Image
              src="/assets/clients/POPCARD_4.png"
              alt="POPCARD"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "50px",
                width: "auto",
                cursor: "pointer",
                marginTop: "10px",
              }}
            />
          </Tooltip>
          <Tooltip label="Bubble" hasArrow>
            <Image
              src="/assets/clients/Bubble.io.png"
              alt="Bubble"
              width={120}
              height={130}
              loading="eager"
              decoding="async"
              style={{
                // filter: "invert(1) brightness(2) contrast(1.2)",
                height: "cover",
                maxHeight: "110px",
                width: "120",
                cursor: "pointer",
                marginTop: "5px",
              }}
            />
          </Tooltip>
          <Tooltip label="Teadit" hasArrow>
            <Image
              src="/assets/clients/teadit.png"
              alt="teadit"
              width={130}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "80px",
                width: "130px",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Artis" hasArrow>
            <Image
              src="/assets/clients/Artis-lab.png"
              alt="Artis"
              width={100}
              height={100}
              loading="eager"
              decoding="async"
              style={{
                objectFit: "contain", // Ensures proper aspect ratio
                maxHeight: "100px",
                maxWidth: "100px",
                width: "auto",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Moodtube Extension" hasArrow>
            <Image
              src="/assets/clients/moodtube_img.png"
              alt="Republic Power"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                objectFit: "contain", // Ensures proper aspect ratio
                maxHeight: "80px",
                maxWidth: "80px",
                // width: "auto",
                // height: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Atarim" hasArrow>
            <Image
              src="/assets/clients/atarim-white.svg"
              alt="Atarim"
              width={150}
              height={60}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "60px",
                width: "150px",
                cursor: "pointer",
              }}
            />
          </Tooltip>

          <Tooltip label="Bai" hasArrow>
            <Image
              src="/assets/clients/bai_logo_colored.46fc5d5b219c.svg"
              alt="Bai"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "50px",
                width: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Crystal Ball" hasArrow>
            <Image
              src="/assets/clients/crystal_ball.png"
              alt="Crystal Ball"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "50px",
                width: "50px",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Farmin" hasArrow>
            <Image
              src="/assets/clients/farmin-white.png"
              alt="Farmin"
              width={120}
              height={120}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "120px",
                width: "120px",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Ibatu" hasArrow>
            <Image
              src="/assets/clients/ibatu.png"
              alt="Ibatu"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "50px",
                width: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Jarvis" hasArrow>
            <Image
              src="/assets/clients/jarvis-logo.png"
              alt="Jarvis"
              width={120}
              height={120}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "120px",
                width: "120px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            />
          </Tooltip>
          <Tooltip label="Krypto Labs" hasArrow>
            <Image
              src="/assets/clients/krypto-labs.png"
              alt="Krypto Labs"
              width={180} // Increased width
              height={100} // Increased height
              loading="eager"
              decoding="async"
              style={{
                display: "block",
                objectFit: "cover", // Keeps proportions correct
                width: "180px", // Ensures it expands properly
                height: "100px",
                cursor: "pointer",
              }}
            />
          </Tooltip>

          <Tooltip label="Podcast-Beacon" hasArrow>
            <Image
              src="/assets/clients/Podcast-Beacon.png"
              alt="Podcast-Beacon"
              width={150}
              height={150}
              loading="eager"
              decoding="async"
              style={{
                objectFit: "contain", // Ensures proper aspect ratio
                maxHeight: "150px",
                maxWidth: "150px",
                width: "auto",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>

          <Tooltip label="Logo Black" hasArrow>
            <Image
              src="/assets/clients/logo-black-small.png"
              alt="Logo Black"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "40px",
                width: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="IPG" hasArrow>
            <Image
              src="/assets/clients/Logo_IPG.jpg"
              alt="Logo Black"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "40px",
                width: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Republic Power" hasArrow>
            <Image
              src="/assets/clients/republic_power_logo.jpeg"
              alt="Republic Power"
              width={200}
              height={80}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "60px",
                width: "90px",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Alifa" hasArrow>
            <Image
              src="/assets/clients/alifa.PNG"
              alt="Republic Power"
              width={120}
              height={120}
              loading="eager"
              decoding="async"
              style={{
                height: "fit-content",
                maxHeight: "120px",
                width: "120px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            />
          </Tooltip>
          <Tooltip label="Bipcards">
            <Box cursor="pointer">
              <Logo2 />
            </Box>
          </Tooltip>
        </Box>
      </Box>
      {/* added a margin of -10 */}
      <Container maxW="container.xl" pb="5" pt="0" mb="20" mt="-10">
        <Box
          position={"relative"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="4">
          {/* Absolute Subscrite newletter with imput and subscribe button  */}
          <NewsLetter />
        </Box>
      </Container>
    </Box>
  );
};

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const isSmall = useBreakpointValue({ base: true, md: true, lg: false });
  const [showMore, setShowMore] = React.useState(false);
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.items.length - 1 : prevIndex - 1,
    );
  };

  React.useEffect(() => {
    // Only auto-rotate testimonials on larger screens and at a slower interval
    if (isSmall) return;

    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [isSmall]);
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 2 || i % 3].push(t);

        return columns;
      },
      [[], [], []],
    );
  }, []);

  if (isSmall) {
    return (
      <Box position="relative" overflow="hidden">
        <Container
          maxW="container.xl"
          pt={{ base: 40, md: 40, lg: 20 }}
          pb="20"
          id="testimonials">
          <Stack
            direction={{
              base: "column",
              md: "column",
              lg: "column",
              xl: "row",
            }}
            alignItems="flex-start">
            <Testimonials
              title={testimonials.title}
              columns={[1, 1, 1, 2, 3]}
              innerWidth="container.xl">
              {!showMore ? (
                <>
                  {columns
                    ?.map((column) => column.slice(0, 1))
                    .map((column, i) => (
                      <Stack key={i}>
                        {column.map((t, i) => (
                          <Testimonial key={i} {...t} />
                        ))}
                      </Stack>
                    ))}
                  <Link
                    href="#testimonials"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Button
                      onClick={() => {
                        setShowMore(true);
                      }}
                      sx={{
                        fontSize: "xl",
                        marginTop: "2rem",
                        padding: "30px",
                        background: "transparent",
                        color: colorMode === "dark" ? "white" : "teal.500",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        textDecoration: "none",
                      }}>
                      Show more
                      <ChevronDownIcon
                        style={{
                          width: "25px",
                          height: "25px",
                          marginLeft: 3,
                          marginTop: 2,
                          color: colorMode === "dark" ? "white" : "teal.500",
                        }}
                      />
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <FallInPlace delay={0.8}>
                    <Box
                      height={showMore ? "800px" : "auto"}
                      overflow={showMore ? "auto" : ""}>
                      {columns?.map((column, i) => (
                        <Stack key={i}>
                          {column.map((t, i) => (
                            <Testimonial key={i} {...t} />
                          ))}
                        </Stack>
                      ))}
                    </Box>
                  </FallInPlace>
                  <Link
                    href="#testimonials"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Button
                      onClick={() => {
                        setShowMore(false);
                      }}
                      sx={{
                        fontSize: "xl",
                        marginTop: "2rem",
                        padding: "30px",
                        background: "transparent",
                        color: colorMode === "dark" ? "white" : "teal.500",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        textDecoration: "none",
                      }}>
                      Show less
                      <ChevronUpIcon
                        style={{
                          width: "25px",
                          height: "25px",
                          marginLeft: 3,
                          marginTop: 2,
                          color: colorMode === "dark" ? "white" : "teal.500",
                        }}
                      />
                    </Button>
                  </Link>
                </>
              )}
            </Testimonials>
          </Stack>
        </Container>
      </Box>
    );
  }
  return (
    <Box
      id="testimonials"
      py="20"
      color="white"
      textAlign="center"
      height={[null, null, null]}>
      <Container maxW="container.xl" py="5" mb="5">
        <Divider />
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          gap="4"
          sx={{
            // add transition upo changing the testimonial
            transition: "all 0.5s ease",
          }}
          mt={10}
          w={"95%"}
          marginLeft={"20px"}>
          <Box mb={5} maxW={"60%"}>
            <Heading
              as="h2"
              size="md"
              color={colorMode === "dark" ? "white" : "teal.500"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                textTransform: "uppercase",
              }}>
              TESTIMONIALS
            </Heading>
            <Heading
              as="h1"
              mt="5"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: colorMode === "dark" ? "white" : "black",
                fontSize: {
                  base: "2rem",
                  md: "2rem",
                },
                width: "100%",
              }}>
              Hear From Our Clients
            </Heading>
            <Text
              color={textColor}
              fontSize="lg"
              fontWeight={"500"}
              mt="5"
              px="10"
              justifyContent={"center"}
              width={{ base: "100%", md: "100%" }}
              align={"center"}>
              {`Discover what our clients have to say about their experiences with us.
              Hear firsthand how we've helped businesses grow, innovate, and achieve success through our dedicated services and collaborative approach.`}
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: "100%",
              padding: "0px",
              margin: "0px",
            }}
            width={"100%"}
            height={"50vh"}>
            {/* Previous button */}
            <Button
              onClick={handlePrev}
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ml: 2,
                background: "gray.300",
                color: "gray.800",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                ":hover": {
                  bg: "teal.500",
                  color: "white",
                  fontWeight: "bold",
                },
              }}>
              <ChevronLeftIcon
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: 3,
                }}
              />
            </Button>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.5s ease",
                animation: `${
                  currentIndex % 2 === 0 || currentIndex % 3 === 0
                    ? "fadeOut"
                    : "fadeIn"
                } 0.5s`,
              }}>
              {/* Testimonial item */}
              <Testimonial {...testimonials.items[currentIndex]} />
            </Box>

            {/* Next button */}
            <Button
              onClick={handleNext}
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                ml: 2,
                background: "gray.300",
                color: "gray.800",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                ":hover": {
                  bg: "teal.500",
                  color: "white",
                  fontWeight: "bold",
                },
              }}>
              <ChevronRightIcon
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: 3,
                }}
              />
            </Button>
          </Box>
        </Box>
        <Box flex="1" mt={20}>
          <Heading
            as="h2"
            size="md"
            color={colorMode === "dark" ? "white" : "teal.500"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              textTransform: "uppercase",
            }}>
            Reason behind our success
          </Heading>
          <Heading
            as="h1"
            mt="5"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: colorMode === "dark" ? "white" : "black",
              fontSize: {
                base: "2rem",
                md: "2rem",
              },
              width: "100%",
            }}>
            Our Core Values
          </Heading>
          <Features
            id="benefits"
            columns={[1, 2, 4]}
            iconSize={6}
            innerWidth="container.xl"
            pt="10"
            pb={0}
            mb={-5}
            features={[
              {
                title: "Client-Centric Excellence",
                icon: FirstIcon,
                description:
                  "We prioritize your success by deeply understanding your needs, delivering solutions that exceed expectations, and building lasting partnerships.",
                iconPosition: "left",
                delay: 0.5,
              },
              {
                title: "Innovative Problem Solving",
                icon: Innovation,
                description:
                  "We approach every challenge with creativity and expertise, turning obstacles into opportunities for your business to thrive.",
                iconPosition: "left",
                delay: 1,
              },
              {
                title: "Clear & Effective Communication",
                icon: EffectiveCommunication,
                description:
                  "We believe in straightforward, precise communication, ensuring clarity in every interaction and decision-making process.",
                iconPosition: "left",
                delay: 1.1,
              },
              {
                title: "Accountability & Ownership",
                icon: OwnerShipd,
                description:
                  "We take full responsibility for our work, committed to delivering quality and integrity in everything we do.",
                iconPosition: "left",
                delay: 0.6,
              },
            ]}
            reveal={FallInPlace}
          />
        </Box>
      </Container>
    </Box>
  );
};

const TechnologySection: React.FC = () => {
  const { colorMode } = useColorMode();
  const isSMall = useBreakpointValue({ base: true, md: true, lg: false });

  const [currentTab, setCurrentTab] = React.useState("frontend");

  const Frontend = () => {
    const isSMall = useBreakpointValue({ base: true, md: true, lg: false });
    return (
      <Container maxW="container.xl" py="5" mb="5">
        <FallInPlace delay={0.4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="4"
            width="100%"
            mt={10}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
              width="100%"
              maxWidth={"900px"}>
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent="center"
                alignItems="center"
                gap="10"
                width="100%">
                <Tooltip label="React" placement="top">
                  <Image
                    src="/assets/tech/react.png"
                    alt="React"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Next.js" placement="top">
                  <Image
                    src={
                      colorMode === "dark"
                        ? "/assets/tech/next.png"
                        : "/assets/tech/nextjs-white.png"
                    }
                    alt="Next.js"
                    width={colorMode === "dark" ? 120 : 100}
                    height={colorMode === "dark" ? 120 : 100}
                  />
                </Tooltip>
                <Tooltip label="Redux" placement="top">
                  <Image
                    src="/assets/tech/redux.png"
                    alt="Redux"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Material UI" placement="top">
                  <Image
                    src="/assets/tech/mui.png"
                    alt="Material UI"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="TypeScript" placement="top">
                  <Image
                    src="/assets/tech/typescript.png"
                    alt="TypeScript"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="GraphQL" placement="top">
                  <Image
                    src="/assets/tech/graphql.png"
                    alt="GraphQL"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="JavaScript" placement="top">
                  <Image
                    src="/assets/tech/javascript.png"
                    alt="JavaScript"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Tailwind CSS" placement="top">
                  <Image
                    src="/assets/tech/tailwind.png"
                    alt="Tailwind CSS"
                    width={100}
                    height={100}
                  />
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </FallInPlace>
      </Container>
    );
  };

  const Backend = () => {
    const isSMall = useBreakpointValue({ base: true, md: false, lg: false });
    return (
      <Container maxW="container.xl" py="5" mb="5">
        <FallInPlace delay={0.4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="4"
            width="100%"
            mt={10}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
              width="100%"
              maxWidth={"900px"}>
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent="center"
                alignItems="center"
                gap="10"
                width="100%">
                <Tooltip label="Node.js" placement="top">
                  <Image
                    src="/assets/tech/nodejs.png"
                    alt="Node.js"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Express" placement="top">
                  <Image
                    src="/assets/tech/express.png"
                    alt="Express"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="MongoDB" placement="top">
                  <Image
                    src="/assets/tech/mongo.png"
                    alt="MongoDB"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="PostgreSQL" placement="top">
                  <Image
                    src="/assets/tech/postgresql.png"
                    alt="postgresql"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="MySQL" placement="top">
                  <Image
                    src="/assets/tech/mysql.png"
                    alt="MySQL"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Django" placement="top">
                  <Image
                    src="/assets/tech/django.png"
                    alt="Django"
                    width={100}
                    height={80}
                  />
                </Tooltip>
                <Tooltip label="Rails" placement="top">
                  <Image
                    src="/assets/tech/rails.png"
                    alt="Rails"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Ruby" placement="top">
                  <Image
                    src="/assets/tech/ruby.png"
                    alt="Ruby"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Nest" placement="top">
                  <Image
                    src="/assets/tech/nest.png"
                    alt="Nest"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Python" placement="top">
                  <Image
                    src="/assets/tech/python.png"
                    alt="Python"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Elasticsearch" placement="top">
                  <Image
                    src="/assets/tech/elasticsearch_logo.png"
                    alt="Elasticsearch"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Redis" placement="top">
                  <Image
                    src="/assets/tech/redis_logo.png"
                    alt="Redis"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Fast API" placement="top">
                  <Image
                    src="/assets/tech/fastapi.png"
                    alt="Fast API"
                    width={100}
                    height={100}
                  />
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </FallInPlace>
      </Container>
    );
  };

  const DevOps = () => {
    const isSMall = useBreakpointValue({ base: true, md: true, lg: false });
    return (
      <Container maxW="container.xl" py="5" mb="5">
        <FallInPlace delay={0.4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="4"
            width="100%"
            mt={10}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
              width="100%"
              maxWidth={"900px"}>
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent="center"
                alignItems="center"
                gap="10"
                width="100%">
                <Tooltip label="Docker" placement="top">
                  <Image
                    src="/assets/tech/docker.png"
                    alt="Docker"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="AWS" placement="top">
                  <Image
                    src="/assets/tech/aws.png"
                    alt="AWS"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="GitLab" placement="top">
                  <Image
                    src="/assets/tech/gitlab.png"
                    alt="GitLab"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="GitHub" placement="top">
                  <Image
                    src="/assets/tech/github.png"
                    alt="GitHub"
                    width={100}
                    height={100}
                  />
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </FallInPlace>
      </Container>
    );
  };

  const AI = () => {
    const isSMall = useBreakpointValue({ base: true, md: true, lg: false });
    return (
      <Container maxW="container.xl" py="5" mb="5">
        <FallInPlace delay={0.4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="4"
            width="100%"
            mt={10}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
              width="100%"
              maxWidth={"900px"}>
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent="center"
                alignItems="center"
                gap="10"
                width="100%">
                <Tooltip label="TensorFlow" placement="top">
                  <Image
                    src="/assets/tech/tensorflow.png"
                    alt="TensorFlow"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="PyTorch" placement="top">
                  <Image
                    src="/assets/tech/pytorch.png"
                    alt="PyTorch"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="OpenAI" placement="top">
                  <Image
                    src="/assets/tech/openai.png"
                    alt="OpenAI"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Keras" placement="top">
                  <Image
                    src="/assets/tech/keras.png"
                    alt="Keras"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Huggingface" placement="top">
                  <Image
                    src="/assets/tech/huggingface_logo.png"
                    alt="Huggingface"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Crew" placement="top">
                  <Image
                    src="/assets/tech/crew_logo.png"
                    alt="Crew"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="LangChain" placement="top">
                  <Image
                    src="/assets/tech/langchain_logo.png"
                    alt="LangChain"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="LangGraph" placement="top">
                  <Image
                    src="/assets/tech/langgrapg.PNG"
                    alt="LangGraph"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Pinecone" placement="top">
                  <Image
                    src="/assets/tech/pinecorn.PNG"
                    alt="Pinecone"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="LangSmith" placement="top">
                  <Image
                    src="/assets/tech/langsmith.PNG"
                    alt="LangSmith"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Chroma" placement="top">
                  <Image
                    src="/assets/tech/chroma_logo.png"
                    alt="Chroma"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Meta LLaMA" placement="top">
                  <Image
                    src="/assets/tech/meta_llma.png"
                    alt="Meta LLaMA"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Anthropic" placement="top">
                  <Image
                    src="/assets/tech/Anthropic_logo.png"
                    alt="Anthropic"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="UI Path" placement="top">
                  <Image
                    src="/assets/tech/uipath_logo.png"
                    alt="UI Path"
                    width={100}
                    height={100}
                  />
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </FallInPlace>
      </Container>
    );
  };

  const NoCodeAutomation = () => {
    const isSMall = useBreakpointValue({ base: true, md: true, lg: false });
    return (
      <Container maxW="container.xl" py="5" mb="5">
        <FallInPlace delay={0.4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="4"
            width="100%"
            mt={10}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
              width="100%"
              maxWidth={"900px"}>
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent="center"
                alignItems="center"
                gap="10"
                width="100%">
                <Tooltip label="Make" placement="top">
                  <Image
                    src="/assets/tech/make_logo.jpg"
                    alt="Make"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Zapier" placement="top">
                  <Image
                    src="/assets/tech/zapier_logo.png"
                    alt="Zapier"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="n8n" placement="top">
                  <Image
                    src="/assets/tech/n8n_logo.jpg"
                    alt="n8n"
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip label="Framer" placement="top">
                  <Image
                    src="/assets/tech/framer_logo.png"
                    alt="Framer"
                    width={100}
                    height={100}
                  />
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </FallInPlace>
      </Container>
    );
  };

  return (
    <Box
      id="tech"
      pb="10"
      mt={10}
      color="white"
      textAlign="center"
      height={["100%", "100%", "100%"]}
      bg={colorMode === "dark" ? "gray.800" : ""}>
      <Divider />
      <Container maxW="container.xl" py="5" mb="5">
        <Box flex="1" mt={20}>
          <Heading
            as="h2"
            size="md"
            color={colorMode === "dark" ? "white" : "teal.500"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              textTransform: "uppercase",
            }}>
            Tech Stack
          </Heading>
          <Heading
            as="h1"
            mt="5"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: colorMode === "dark" ? "white" : "black",
              fontSize: {
                base: "2rem",
                md: "2rem",
              },
              width: "100%",
            }}>
            Technologies We Use
          </Heading>

          <Box
            mt={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="4"
            width="100%"
            flexWrap={"wrap"}
            minWidth={"380px"}>
            <Button
              size="lg"
              mt={"10"}
              bg={currentTab === "frontend" ? "teal.500" : "evergreen.500"}
              sx={{
                fontSize: isSMall ? "sm" : "lg",
                color: "#fff",
                borderRadius: "30px",
                padding: "0.5rem 1.8rem",
                "&:hover": {
                  bg: "teal.500",
                },
              }}
              onClick={() => setCurrentTab("frontend")}
              minWidth={"72px"}>
              Frontend
            </Button>
            <Button
              size="lg"
              mt={"10"}
              bg={currentTab === "backend" ? "teal.500" : "evergreen.500"}
              sx={{
                fontSize: isSMall ? "sm" : "lg",
                color: "#fff",
                borderRadius: "30px",
                padding: "0.5rem 1.8rem",
                "&:hover": {
                  bg: "teal.500",
                },
              }}
              onClick={() => setCurrentTab("backend")}
              minWidth={"72px"}>
              Backend
            </Button>
            <Button
              size="lg"
              mt={"10"}
              bg={currentTab === "devops" ? "teal.500" : "evergreen.500"}
              sx={{
                fontSize: isSMall ? "sm" : "lg",
                color: "#fff",
                borderRadius: "30px",
                padding: "0.5rem 1.8rem",
                "&:hover": {
                  bg: "teal.500",
                },
              }}
              onClick={() => setCurrentTab("devops")}
              minWidth={"72px"}>
              DevOps
            </Button>
            <Button
              size="lg"
              mt={"10"}
              bg={currentTab === "AI" ? "teal.500" : "evergreen.500"}
              sx={{
                fontSize: isSMall ? "sm" : "lg",
                color: "#fff",
                borderRadius: "30px",
                padding: "0.5rem 1.8rem",
                "&:hover": {
                  bg: "teal.500",
                },
              }}
              onClick={() => setCurrentTab("AI")}>
              AI
            </Button>
            <Button
              size="lg"
              mt={"10"}
              bg={currentTab === "noCodeAutomation" ? "teal.500" : "evergreen.500"}
              sx={{
                fontSize: isSMall ? "sm" : "lg",
                color: "#fff",
                borderRadius: "30px",
                padding: "0.5rem 1.8rem",
                "&:hover": {
                  bg: "teal.500",
                },
                minWidth: "140px",
              }}
              onClick={() => setCurrentTab("noCodeAutomation")}>
              No Code Automation
            </Button>
          </Box>
          {currentTab === "frontend" && <Frontend />}
          {currentTab === "backend" && <Backend />}
          {currentTab === "devops" && <DevOps />}
          {currentTab === "AI" && <AI />}
          {currentTab === "noCodeAutomation" && <NoCodeAutomation />}
        </Box>
      </Container>
    </Box>
  );
};

const BlogSection: React.FC = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const bgColor = useColorModeValue("white", "gray.800");
  const cardBgColor = useColorModeValue("charcoal.800", "charcoal.900");
  const titleColor = useColorModeValue("gray.800", "white");

  type HomeBlogCard = {
    id: string;
    slug: string;
    title: string;
    fullTitle: string;
    date: string | null;
    url: string;
    image: string | null;
  };

  const [blogPosts, setBlogPosts] = React.useState<HomeBlogCard[]>([]);

  React.useEffect(() => {
    let isMounted = true;

    const loadHomepageBlogs = async () => {
      try {
        const res = await fetch("/api/blog?home=true&limit=4");
        if (!res.ok) {
          console.error("Failed to fetch homepage blogs:", res.statusText);
          return;
        }
        const json = await res.json();
        const posts = (json.posts || []) as any[];
        const mapped: HomeBlogCard[] = posts.map((post) => ({
          id: post.id as string,
          slug: post.slug as string,
          title: post.title as string,
          fullTitle: (post.title as string) || "",
          date: (post.published_at as string) || null,
          url: `/blog/${post.slug}`,
          image: (post.featured_image as string) || null,
        }));

        if (isMounted) {
          setBlogPosts(mapped.slice(0, 4));
        }
      } catch (err) {
        console.error("Error loading homepage blogs:", err);
      }
    };

    void loadHomepageBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Box
      id="blog"
      py="20"
      bg={bgColor}
      color={textColor}
      sx={{ scrollMarginTop: "50px" }}>
      <Container maxW="container.xl" py="5">
        <Divider />
        <Box
          display={{ base: "block", md: "flex" }}
          px="4"
          mt={10}
          mb={10}
          justifyContent={"space-between"}>
          <Box>
            <Heading
              as="h2"
              size="md"
              color={colorMode === "dark" ? "white" : "teal.500"}
              sx={{
                textTransform: "uppercase",
              }}>
              Insights From Our Blog
            </Heading>
            <Heading
              as="h1"
              mt="2"
              sx={{
                fontSize: {
                  base: "2rem",
                  md: "2rem",
                },
                width: {
                  base: "100%",
                  md: "70%",
                },
              }}>
              Software Development Insights from Our Team
            </Heading>
          </Box>

          {/* Explore Blog */}
          <ButtonGroup
            spacing={4}
            display="flex"
            justifyContent={["flex-start", null, "flex-end"]}
            width={["100%", null, "auto"]}
            alignItems="end"
            mt="4">
            <ButtonLink
              size="lg"
              href="/blog"
              sx={{
                bg: " none",
                fontSize: "1.5rem",
                color: colorMode === "light" ? "teal.500 !important" : "white",
                textDecoration: "underline",
                ":hover": {
                  bg: "none",
                  color: colorMode === "light" ? "teal.500 !important" : "white",
                  textDecoration: "none",
                },
              }}>
              Explore Blog
            </ButtonLink>
          </ButtonGroup>
        </Box>

        {/* Blog Posts Grid */}
        <Stack
          direction={["column", null, "row"]}
          spacing="6"
          justify="center"
          align="stretch"
          px="4">
          {blogPosts.map((post, idx) => (
            <NextLink key={idx} href={post.url} passHref>
              <Box
                flex="1"
                maxW={["100%", null, "280px"]}
                cursor="pointer"
                _hover={{
                  "& > div:first-of-type": {
                    transform: "translateY(-4px)",
                    boxShadow: "xl",
                    "& > div": {
                      filter: "grayscale(0%)",
                    },
                  },
                }}
                transition="all 0.3s">
                {/* Card with Image - Square format */}
                <Box
                  mb="4"
                  position="relative"
                  w="100%"
                  aspectRatio="16/9"
                  overflow="hidden"
                  bg="charcoal.700"
                  transition="all 0.3s">
                  {/* Image with black and white filter by default, color on hover */}
                  <Box
                    w="100%"
                    h="100%"
                    position="relative"
                    sx={{
                      backgroundImage: post.image
                        ? `url(${post.image})`
                        : "linear-gradient(135deg, #1E1E1E 0%, #2A2A2A 100%)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "grayscale(100%)",
                      transition: "filter 0.3s ease",
                    }}
                  />
                </Box>

                {/* Full Title, Date, and Link Below Card */}
                <VStack align="flex-start" spacing="2">
                  <Heading
                    as="h4"
                    size="sm"
                    color={titleColor}
                    fontWeight="semibold"
                    lineHeight="1.4">
                    {post.fullTitle}
                  </Heading>
                  <Text
                    fontSize="sm"
                    color={textColor}
                    opacity={0.8}>
                    {post.date
                      ? new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "—"}
                  </Text>
                  <Link
                    as="span"
                    color="teal.500"
                    fontWeight="semibold"
                    fontSize="sm"
                    display="flex"
                    alignItems="center"
                    gap="2"
                    _hover={{
                      color: "teal.600",
                    }}>
                    READ POST
                    <Icon as={FiArrowUpRight} />
                  </Link>
                </VStack>
              </Box>
            </NextLink>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

const FaqSection: React.FC = () => {
  return (
    <>
      <Divider />

      <Faq {...faq} />
    </>
  );
};

export default Home;
