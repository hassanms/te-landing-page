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
} from "@chakra-ui/react";
// new import for animation
import { keyframes } from "@emotion/react";
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
import { FaSquare } from "react-icons/fa6";
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
        description="Transform your business with cutting-edge SaaS platforms, mobile applications, and AI agents. Tech Emulsion specializes in digital transformation, custom software development, and innovative technology solutions that drive growth and efficiency."
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
                "Tech Emulsion offers comprehensive AI solutions including custom AI applications, intelligent chatbots, machine learning models, natural language processing systems, computer vision applications, and predictive analytics. We develop AI agents that automate business processes, enhance customer experiences, and provide intelligent insights. Our AI solutions range from conversational AI for customer support to advanced machine learning models for data analysis and prediction. We also specialize in RAG (Retrieval-Augmented Generation) systems for document querying, AI-powered content analysis tools, and generative AI integration for creative and operational tasks.",
            },
            {
              question: "How much does custom software development cost?",
              answer:
                "The cost of custom software development varies based on project complexity, features, timeline, and specific requirements. Tech Emulsion provides transparent pricing with detailed project estimates and flexible engagement models. Factors that influence cost include the scope of features, technology stack, integration requirements, scalability needs, and timeline. We offer various engagement models including fixed-price projects, time and materials, and dedicated team arrangements. During our free discovery call, we analyze your requirements and provide a detailed proposal with transparent pricing. Our goal is to deliver maximum value while working within your budget constraints.",
            },
            {
              question: "What services does Tech Emulsion offer?",
              answer:
                "Tech Emulsion offers a comprehensive range of services including custom software development, SaaS platform development, mobile app development (iOS and Android), AI and machine learning solutions, web development, cloud services and DevOps, QA testing and automation, Chrome extension development, and digital transformation consulting. We specialize in building scalable SaaS platforms with subscription management, multi-tenancy, and advanced analytics. Our mobile app development services cover both native and cross-platform solutions using React Native. We also provide AI agent engineering, automation solutions, and blockchain integration services. All our services are backed by comprehensive project management, quality assurance, and ongoing support.",
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
    const interval = setInterval(() => {
      setCurrentAnimation((prevAnimation) =>
        prevAnimation === animationData1 ? animationData2 : animationData1,
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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
                href="https://github.com/Tech-Emulsion"
                isExternal
                aria-label="Visit Tech Emulsion on GitHub">
                <Icon
                  as={AiFillGithub}
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
              <Link
                href="https://www.upwork.com/agencies/techemulsion/"
                isExternal
                aria-label="Visit Tech Emulsion on Upwork">
                <Icon
                  as={FaSquare}
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
  const HighlightsItems = [
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

        {/* Explore services */}
        <Highlights>
          {HighlightsItems.map((item, index) => {
            const href = item.title.includes("Atarim")
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
                      <Text color={textColor} fontSize="lg" textAlign="justify">
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
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);
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

  // Blog posts data - using blog images
  const blogPosts = [
    {
      title: "Productized Internal Tools: The Agency Pivot From Custom Builds to Repeatable Capabilities",
      fullTitle: "Productized Internal Tools: The Agency Pivot From Custom Builds to Repeatable Capabilities",
      date: "2026-01-14",
      url: "/blog/productized-internal-tools",
      image: "/assets/blog/Productized-Internal-Tools.png",
    },
    {
      title: "AI Systems Engineering: Why AI Apps Will Get Commoditized and AI Systems Will Not",
      fullTitle: "AI Systems Engineering: Why \"AI Apps\" Will Get Commoditized and \"AI Systems\" Will Not",
      date: "2026-01-08",
      url: "/blog/ai-systems-engineering",
      image: "/assets/blog/AI-Systems-Engineering.png",
    },
    {
      title: "Beyond Vibe Coding: The New Moats for Software Agencies in 2026",
      fullTitle: "Beyond Vibe Coding: The New Moats for Software Agencies in 2026",
      date: "2026-01-06",
      url: "/blog/beyond-vibe-coding",
      image: "/assets/blog/Beyond-Vibe-Coding-main-image.png",
    },
    {
      title: "Automation First Consulting: The Pivot From Building Features to Building Outcomes",
      fullTitle: "Automation First Consulting: The Pivot From Building Features to Building Outcomes",
      date: "2026-01-09",
      url: "/blog/automation-first-consulting",
      image: "/assets/blog/Automation-First-Consulting.png",
    },
  ];

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
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
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
