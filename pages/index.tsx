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
  Divider,
  Grid,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  useBreakpointValue,
  Tooltip,
} from "@chakra-ui/react";
// new import for animation
import { keyframes } from "@emotion/react";
import { SEO } from "components/seo/seo";
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
import { Em } from "components/typography";
import {
  FiBox,
  FiCode,
  FiFlag,
  FiLock,
  FiSearch,
  FiTerminal,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";
import Teams from "components/team/team";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsWhatWeDo,
} from "components/highlights";

import { FiFacebook, FiLinkedin } from "react-icons/fi";
import Contact from "components/Contact";
import FirstIcon from "components/icons/firstIcon";
import Innovation from "components/icons/Inovation";
import EffectiveCommunication from "components/icons/EffectiveCommunication";
import OwnerShipd from "components/icons/OwnerShipd";
import NewsLetter from "components/NewsLetter";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import OutsourceIcon from "components/icons/Outsource";
import StaffIcon from "components/icons/Staff";
import ContractorsIcon from "components/icons/Contractors";
import TeamsIcon from "components/icons/Teams";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData1 from "../public/assets/Animation/screen.json";
import animationData2 from "../public/assets/Animation/mobile.json";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Head from "next/head";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <Box>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF"
      ></Script>

      <Head>
        <title>Tech Emulsion | Imagineering Digital Transformation</title>
        <meta
          name="description"
          content="Imagineering digital transformation for your business"
        />
          {/* Open Graph (OG) Meta Tags for Social Media Previews */}
        <meta property="og:title" content="Tech Emulsion | Imagineering Digital Transformation" />
        <meta property="og:description" content="Tech Emulsion Always provide innovative digital transformation solutions." />
        <meta property="og:image" content="https://techemulsion.com/static/favicons/android-chrome-192x192.png" />
        <meta property="og:url" content="https://techemulsion.com/" />
        <meta property="og:type" content="website" />

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
            text: "Talk to Our CEO",
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

      <SEO
        title="Tech Emulsion | Imagineering Digital Transformation"
        description="Imagineering digital transformation for your business"
      />
      <Box height="100%" width="100%" overflow="hidden">
        <HeroSection />
        <AboutUsSection />
        <HighlightsSection />
        <Portfolio />
        <SocialProofSection />

        <TestimonialsSection />
        {/* <FeaturesSection /> */}

        {/* <Team /> */}
        {/* <PricingSection /> */}
        <TechnologySection />
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
  const [currentAnimation, setCurrentAnimation] =
    useState<LottieAnimationData>(animationData1);
  const isSmall = useBreakpointValue({ base: true, md: true, lg: false });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prevAnimation) =>
        prevAnimation === animationData1 ? animationData2 : animationData1
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
      gridTemplateRows="1fr"
    >
      <BackgroundGradient height="100%" zIndex="-1" />
      <Box
        gridColumn="1 / -1"
        gridRow="1 / -1"
        height="100%"
        width="100%"
        display="grid"
        zIndex="-1"
        mb={{ base: "0px", lg: "-120px" }}
      >
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
        zIndex={1}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent={{ base: "center", lg: "space-between" }}
          alignItems="flex-start"
        >
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Imagineering <Br />
                {/* <Em color={colorMode === "dark" ? "#66B2B2" : "#004C4C"}>
                  digital transformation
                </Em> */}
                <Em style={{ color: "#66B2B2" }}>digital transformation</Em>
                <Br /> for your business
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Em>
                  Empowering businesses with next-gen{" "}
                  <Em
                    style={{
                      color: "#66B2B2",
                      fontWeight: "900",
                    }}
                  >
                    SaaS, web, and AI solutions
                  </Em>{" "}
                  driving innovation and excellence through tailored technology
                  strategies that propel your brand to new heights.
                </Em>
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="6" spacing="8">
                {/* <NextjsLogo height="28px" /> <ChakraLogo height="20px" /> */}
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink
                  size="lg"
                  href="#portfolio"
                  sx={{
                    bg: "#004c4c !important",
                    color: "white !important",
                  }}
                >
                  Explore Portfolio
                </ButtonLink>

              </ButtonGroup>
            </FallInPlace>
            <VStack
              flex="1"
              spacing="2"
              alignItems="flex-start"
              display={{ base: "flex", lg: "flex" }}
              mt="10"
            >
              <Text
                fontSize="sm"
                color="muted"
                fontWeight="medium"
                maxW="lg"
                textAlign="left"
                display={"flex"}
                alignItems={"center"}
                width={"100%"}
              >
                Trusted By the Best{"  "}
                <Divider height="1.5px" bg="muted" width="20%" ml="4" />
              </Text>
              <FallInPlace delay={0.6}>
                <Box overflow="hidden" height="100%" display="flex" gap="10">
                  <>
                    <Image
                      src="/assets/clients/atarim-white.svg"
                      width={100}
                      height={100}
                      alt="Atarim logo"
                    />
                    <Image
                      src="/assets/clients/farmin-white.png"
                      width={100}
                      height={100}
                      style={{ objectFit: "contain" }}
                      alt="Farmin logo"
                    />
                  </>
                </Box>
              </FallInPlace>
            </VStack>
          </Hero>
          <Box
            display={{ base: "none", lg: "block" }}
            mt={{ base: "20", lg: "20" }}
            mr={{ base: 0, lg: 0 }}
            w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden">
                {/*   <Player
                  autoplay
                  loop
                  src={currentAnimation} // Toggle between animations
                  style={{
                    height: "70%",
                    width: "70%",
                  }}
                /> */}
              </Box>
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
          alignItems="flex-start"
        >
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Imagineering <Br />
                {/* <Em color={colorMode === "dark" ? "#66B2B2" : "#004C4C"}>
                  digital transformation
                </Em> */}
                <Em style={{ color: "#004C4C" }}>digital transformation</Em>
                <Br /> for your business
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Em>
                  Empowering businesses with next-gen{" "}
                  <Em
                    style={{
                      color: "#004C4C",
                      fontWeight: "900",
                    }}
                  >
                    SaaS, web, and AI solutions
                  </Em>{" "}
                  driving innovation and excellence through tailored technology
                  strategies that propel your brand to new heights.
                </Em>
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="6" spacing="8">
                {/* <NextjsLogo height="28px" /> <ChakraLogo height="20px" /> */}
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink
                  size="lg"
                  href="#portfolio"
                  sx={{
                    bg: "#004c4c !important",
                    color: "white !important",
                  }}
                >
                  Explore Portfolio
                </ButtonLink>

              </ButtonGroup>
            </FallInPlace>
            <VStack
              flex="1"
              spacing="2"
              alignItems="flex-start"
              display={{ base: "flex", lg: "flex" }}
              mt="10"
            >
              <Text
                fontSize="sm"
                color="muted"
                fontWeight="medium"
                maxW="lg"
                textAlign="left"
                display={"flex"}
                alignItems={"center"}
                width={"100%"}
              >
                Trusted By the Best{"  "}
                <Divider height="1.5px" bg="muted" width="20%" ml="4" />
              </Text>
              <FallInPlace delay={0.6}>
                <Box overflow="hidden" height="100%" display="flex" gap="10">
                  <>
                    <Image
                      src="/assets/clients/Atarim.svg"
                      width={100}
                      height={100}
                      alt="Atarim logo"
                      loading="eager"
                    />
                    <Image
                      src="/assets/clients/farmin-dark.png"
                      width={100}
                      height={100}
                      style={{ objectFit: "contain" }}
                      alt="Farmin logo"
                    />
                  </>
                </Box>
              </FallInPlace>
            </VStack>
          </Hero>
          <Box
            display={{ base: "none", lg: "block" }}
            mt={{ base: "20", lg: "20" }}
            mr={{ base: 0, lg: 0 }}
            w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}
          >
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
      "At Tech Emulsion, we don’t just create software, we build AI-powered solutions that elevate business capabilities. We believe in turning complex challenges into growth opportunities for our clients.",
  },
];

const AboutUsSection: React.FC = () => {
  const { colorMode } = useColorMode();
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
          mt={10}
        >
          <Box flex="1">
            <Heading
              as="h2"
              size="md"
              color={colorMode === "dark" ? "white" : "#004c4c"}
              sx={{
                textTransform: "uppercase",
              }}
            >
              About us
            </Heading>
            <Heading
              as="h1"
              mt="2"
              sx={{
                fontSize: "2rem",
              }}
            >
              Impactful Product Design,
              <Br /> Memorable Experience
            </Heading>
            <Text color="muted" fontSize="lg" mt="4">
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
              }}
            >
              Connect With Us
            </Heading>
            <Text color="muted" fontSize="lg" mt="4">
              {`We'd love to hear from you! Reach out to us for any inquiries,
              feedback, or support. Our team is here to assist you and ensure
              you have the best experience.`}
            </Text>
            {/* social links */}
            <HStack mt="8" spacing="4">
              <Link
                href="https://www.linkedin.com/company/tech-emulsion/"
                isExternal
                aria-label="Visit Tech Emulsion on LinkedIn"
              >
                <Icon
                  as={FiLinkedin}
                  boxSize="10"
                  color="gray.500"
                  sx={{
                    padding: "10px",
                    borderRadius: "20%",
                    border: "1px solid #004c4c",
                    ":hover": {
                      bg: "#004c4c",
                      color: "white",
                    },
                  }}
                />
              </Link>

              <Link href="https://www.facebook.com/emulsiontech/" isExternal
                aria-label="Visit Tech Emulsion on Facebook"
              >
                <Icon
                  as={FiFacebook}
                  boxSize="10"
                  color="gray.500"
                  sx={{
                    padding: "10px",
                    borderRadius: "20%",
                    border: "1px solid #004c4c",
                    ":hover": {
                      bg: "#004c4c",
                      color: "white",
                    },
                  }}
                />
              </Link>
              <Link href="https://github.com/hassanms" isExternal
                aria-label="Visit Hassan's GitHub profile"
              >
                <Icon
                  as={AiFillGithub}
                  boxSize="10"
                  color="gray.500"
                  sx={{
                    padding: "10px",
                    borderRadius: "20%",
                    border: "1px solid #004c4c",
                    ":hover": {
                      bg: "#004c4c",
                      color: "white",
                    },
                  }}
                />
              </Link>
              <Link href="https://www.youtube.com/@TechEmulsion" isExternal
                aria-label="Visit Tech Emulsion on YouTube"
              >
                <Icon
                  as={AiFillYoutube}
                  boxSize="10"
                  color="gray.500"
                  sx={{
                    padding: "10px",
                    borderRadius: "20%",
                    border: "1px solid #004c4c",
                    ":hover": {
                      bg: "#004c4c",
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
            color={colorMode === "dark" ? "white" : "#004c4c"}
            sx={{
              textTransform: "uppercase",
            }}
            ml={4}
          >
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
          {/* <HighlightsTestimonialItem
            name="Zain Ul Abideen"
            description="Co-Founder & CTO"
            avatar="/assets/zain.png"
            gradient={["pink.200", "purple.500"]}
            company=""
            colSpan={[1, null, 2]}
          >
            “Your challenges fuel our creativity and determination. We’re
            dedicated to delivering exceptional results that exceed
            expectations.”
          </HighlightsTestimonialItem> */}

          <Box>
            <Box key={currentCard.id}>
              <Card
                position="relative"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                bgGradient={`linear(to-br, #b2d8d8, #006666 , #004c4c)`}
                boxShadow="none"
                border={"none"}
                borderRadius="lg"
                overflow="hidden"
                h="320px"
                className="shining-card"
              >
                <FallInPlace delay={0.8}>
                  <CardHeader
                    display="flex"
                    flexDirection="row"
                    gap="4"
                    className={`fade-card ${isFlipping ? "fade-out" : "fade-in"
                      }`}
                  >
                    <Avatar
                      src={currentCard.avatar}
                      size="lg"
                      bg="transparent"
                      className={`fade-card ${isFlipping ? "fade-out" : "fade-in"
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
                    className={`fade-card ${isFlipping ? "fade-out" : "fade-in"
                      }`}
                  >
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
            title="Areas We Specialize In"
          >
            <Text color="muted" fontSize="lg">
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
                      bg: "#185651",
                      color: "#fff",
                      "&:hover": {
                        bg: "#004c4c",
                      },
                    }}
                  >
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
      }}
    >
      <Container maxW="container.xl" py="5">
        <Divider />
        <Box
          display={{ base: "block", md: "flex" }}
          px="4"
          mt={10}
          justifyContent={"space-between"}
        >
          <Box>
            <Heading
              as="h2"
              size="md"
              color={colorMode === "dark" ? "white" : "#004c4c"}
              sx={{
                textTransform: "uppercase",
              }}
            >
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
              }}
            >
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
            mt="4"
          >
            <ButtonLink
              size="lg"
              href="/services"
              sx={{
                bg: " none",
                fontSize: "1.5rem",
                color: colorMode === "light" ? "#004c4c !important" : "white",
                textDecoration: "underline",
                ":hover": {
                  bg: "none",
                  color: colorMode === "light" ? "#004c4c !important" : "white",
                  textDecoration: "none",
                },
              }}
            >
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
              padding={0}
            >
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
                  <Text color="muted" fontSize="lg">
                    {item.description}
                  </Text>

                  {/* <Flex
              rounded="full"
              borderWidth="1px"
              flexDirection="row"
              alignItems="center"
              py="1"
              ps="8"
              pe="2"
              bg="primary.900"
              _dark={{ bg: "gray.900" }}
            >
              <Box>
                <Text color="yellow.400" display="inline">
                  yarn add
                </Text>{" "}
                <Text color="cyan.300" display="inline">
                  @saas-ui/react
                </Text>
              </Box>
              <IconButton
                icon={hasCopied ? <FiCheck /> : <FiCopy />}
                aria-label="Copy install command"
                onClick={onCopy}
                variant="ghost"
                ms="4"
                isRound
                color="white"
              />
            </Flex> */}
                </VStack>
              </Box>
            </HighlightsItem>
          ))}

          {/* <HighlightsItem colSpan={[1, null, 2]} title="Core components">
          <Text color="muted" fontSize="lg">
            We don&apos;t like to re-invent the wheel, neither should you. We
            selected the most productive and established tools in the scene and
            build Saas UI on top of it.
          </Text>
        </HighlightsItem> */}
          {/* <HighlightsTestimonialItem
            name="Renata Alink"
            description="Founder"
            avatar="/static/images/avatar.jpg"
            gradient={["pink.200", "purple.500"]}
            company="Tech Emulsion"
            colSpan={[1, null, 2]}
          >
            “Saas UI helped us set up a beautiful modern UI in no time. It saved
            us hundreds of hours in development time and allowed us to focus on
            business logic for our specific use-case from the start.”
          </HighlightsTestimonialItem>
          <HighlightsItem
            colSpan={[1, null, 2, 3, 4]}
            title="Start your next idea two steps ahead"
          >
            <Text color="muted" fontSize="lg">
              We took care of all your basic frontend needs, so you can start
              building functionality that makes your product unique.
            </Text>
            <Wrap mt="8">
              {[
                "authentication",
                "navigation",
                "crud",
                "settings",
                "multi-tenancy",
                "layouts",
                "billing",
                "a11y testing",
                "server-side rendering",
                "documentation",
                "onboarding",
                "storybooks",
                "theming",
                "upselling",
                "unit testing",
                "feature flags",
                "responsiveness",
              ].map((value) => (
                <Tag
                  key={value}
                  variant="subtle"
                  rounded="full"
                  px="3"
                  sx={{
                    bg: "#b2d8d8",
                    color: "#004c4c",
                    "&:hover": {
                      bg: "#66b2b2",
                    },
                  }}
                >
                  {value}
                </Tag>
              ))}
            </Wrap>
          </HighlightsItem> */}
        </HighlightsWhatWeDo>
      </Container>
    </Box>
  );
};

const Portfolio: React.FC = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");
  const { colorMode } = useColorMode();
  const HighlightsItems = [
    {
      title: "Farmin – AI-Powered Satellite Image Detection SaaS",
      description:
        "Tech Emulsion built Farmin, an AI-powered SaaS for satellite image analysis. Using Mapbox, YOLO models, and OpenCV, it detects objects like cars, ships, and oil spills. We added change detection, a data annotation tool, and deployed it on AWS, enabling real-time insights and scalable remote sensing.",
      image: "/assets/portfolio/farmin.avif",
      alt: "Farmin – AI-Powered Satellite Image Detection SaaS",
    },
    {
      title: "Atarim – A SaaS tool for visual collaboration & project mgmt",
      description:
        "Tech Emulsion transformed WPFeedback into Atarim, a scalable SaaS platform for visual collaboration on any website. With new features, a Chrome extension, custom scraping, AWS scaling, and performance optimizations, we helped Atarim secure $500K funding and expand to a universal project management tool.",
      image: "/assets/portfolio/atarim.png",
      alt: "Atarim – A SaaS tool for visual collaboration & project mgmt",
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
        "Artis is an AI-driven platform that analyzes an artist’s style to provide tailored advice and marketing strategies. It leverages blockchain for secure ownership protection and copyright management.It connects artists with audiences, enabling secure sales. Artis empowers creators across various fields, making creativity secure and profitable.",
      image: "/assets/portfolio/Artis.png",
      alt: "Artis – Blockchain powered SaaS to help artists copyright their work",
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
    <Box id="portfolio" sx={{ scrollMarginTop: "50px" }}>
      <Container maxW="container.xl" py="5" mb="5">
        <Divider />

        <Box
          display={{ base: "block", md: "flex" }}
          px="4"
          mt={10}
          justifyContent={"space-between"}
        >
          <Box>
            <Heading
              as="h2"
              size="md"
              color={colorMode === "dark" ? "white" : "#004c4c"}
              sx={{
                textTransform: "uppercase",
              }}
            >
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
              }}
            >
              Recent Works
            </Heading>

            {/* for small text  */}

            <Text
              py="4"
              color="muted"
              fontSize="lg"
              fontWeight={"500"}
              mt="4"
              width={{ base: "100%", md: "60%" }}
              textAlign="left"
            >
              {`Explore our creative portfolio showcasing a selection of recent works. From innovative designs to cutting-edge solutions, each
            project highlights our dedication to quality and creativity.
            Discover how we've transformed ideas into impactful digital experiences for businesses like yours.`}
            </Text>
          </Box>

          {/* Explore services */}
          {/* <ButtonGroup
            spacing={4}
            display="flex"
            justifyContent={["flex-start", null, "flex-end"]}
            width={["100%", null, "auto"]}
            alignItems="end"
            mt="4"
          >
            <ButtonLink
              size="lg"
              href="/portfolio"
              sx={{
                bg: " none",
                fontSize: "1.5rem",
                color: colorMode === "light" ? "#004c4c !important" : "white",
                textDecoration: "underline",
                ":hover": {
                  bg: "none",
                  color: colorMode === "light" ? "#004c4c !important" : "white",
                  textDecoration: "none",
                },
              }}
            >
              Explore Portfolio
            </ButtonLink>
          </ButtonGroup> */}
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"4"}
          mt={10}
        >
          <Button
            size="lg"
            mt={"10"}
            bg={"#004c4c"}
            sx={{
              fontSize: "1rem",
              color: "white",
              borderRadius: "30px",
              padding: "0.5rem 1.8rem",
              "&:hover": {
                bg: "#004c4c",
              },
            }}
          >
            All
          </Button>
        </Box>

        {/* Explore services */}
        <Highlights>
          {HighlightsItems?.map((item, index) => {
            const href = item.title.includes("Farmin")
              ? "/work/case-study-farmin"
              : item.title.includes("Atarim")
                ? "/work/case-study-atarim"
                : item.title.includes("Bipcards")
                  ? "/work/case-study-bipcards"
                  : item.title.includes("Popcard")
                    ? "/work/case-study-popcard"
                    : item.title.includes("Artis")
                      ? "/work/case-study-artis"
                      : item.title.includes("JarvisReach")
                        ? "/work/case-study-jarvisreach"
                        : item.title.includes("Alifa")
                          ? "/work/case-study-alifa"
                          : item.title.includes("RAG")
                            ? "/work/case-study-genai"
                            : item.title.includes("MoodTube")
                              ? "/work/case-study-moodtube"
                              : null;

            return (
              <HighlightsItem key={index} colSpan={[1, null, 2]}>
                <Link
                  href={href || "/"}
                  _hover={{ textDecoration: "none" }}
                  gap="0"
                  title=""
                  border="none"
                >
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
                    }}
                  >
                    <Box>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={502}
                        height={300}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "contain",
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
                      <Text color="muted" fontSize="lg">
                        {item.description}
                      </Text>
                    </VStack>
                  </Box>
                </Link>
              </HighlightsItem>
            );
          })}

          {/* <HighlightsItem colSpan={[1, null, 2]} title="Core components">
          <Text color="muted" fontSize="lg">
            We don&apos;t like to re-invent the wheel, neither should you. We
            selected the most productive and established tools in the scene and
            build Saas UI on top of it.
          </Text>
        </HighlightsItem>
        <HighlightsTestimonialItem
          name="Renata Alink"
          description="Founder"
          avatar="/static/images/avatar.jpg"
          gradient={["pink.200", "purple.500"]}
        >
          “Saas UI helped us set up a beautiful modern UI in no time. It saved
          us hundreds of hours in development time and allowed us to focus on
          business logic for our specific use-case from the start.”
        </HighlightsTestimonialItem>
        <HighlightsItem
          colSpan={[1, null, 2]}
          title="Start your next idea two steps ahead"
        >
          <Text color="muted" fontSize="lg">
            We took care of all your basic frontend needs, so you can start
            building functionality that makes your product unique.
          </Text>
          <Wrap mt="8">
            {[
              "authentication",
              "navigation",
              "crud",
              "settings",
              "multi-tenancy",
              "layouts",
              "billing",
              "a11y testing",
              "server-side rendering",
              "documentation",
              "onboarding",
              "storybooks",
              "theming",
              "upselling",
              "unit testing",
              "feature flags",
              "responsiveness",
            ].map((value) => (
              <Tag
                key={value}
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
              >
                {value}
              </Tag>
            ))}
          </Wrap>
        </HighlightsItem> */}
        </Highlights>
      </Container>
    </Box>
  );
};
const scrollAnimation = keyframes`
0% { transform: translateX(0); }
100% { transform: translateX(-100%); }`;

const SocialProofSection: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="social"
      py="20"
      bg="#004c4c"
      color="white"
      textAlign="center"
      height={[null, null, null]}
      mb="200"
    >
      <Box
        position={"relative"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="4"
        py="5"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="4"
        >
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
            }}
          >
            Trusted by Leading Brands
          </Heading>

          <Text
            color="gray.400"
            fontSize="lg"
            fontWeight={"500"}
            justifyContent={"center"}
            alignItems={"center"}
            mt="4"
            px="10"
            width={{ base: "100%", md: "60%" }}
            textAlign="center"
          >
            We’re proud to have worked with a diverse range of clients across
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
        minWidth={{base: "6300px", lg:"4300px"}}
        whiteSpace="nowrap"
        overflow="hidden"
      >
        <Box
          display="flex"
          width={{base: "100%", lg: "50%" }}
          justifyContent="space-around"
          alignItems="center"
          animation={`${scrollAnimation} 75s infinite linear`}
        >
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
                maxHeight: "70px",
                width: "130px",
                cursor: "pointer",
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
          {/* <Tooltip label="Krypto Labs App" hasArrow>
            <Image
              src="/assets/clients/krypto-labs.png"
              alt="Krypto Labs"
              width={120}
              height={120}
              loading="eager"
              decoding="async"
              style={{
                // height: "fit-content",
                // maxHeight: "100px",
                // width: "120px",
                // cursor: "pointer",
                objectFit: "contain", // Ensures proper aspect ratio
                maxHeight: "120px",
                maxWidth: "120px",
                width: "auto",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip> */}
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
          width={{base: "100%", lg: "50%" }}
          justifyContent="space-around"
          alignItems="center"
          
          animation={`${scrollAnimation} 75s infinite linear`}
        >
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
          {/* <Tooltip label="Krypto Labs App" hasArrow>
            <Image
              src="/assets/clients/krypto-labs.png"
              alt="Krypto Labs"
              width={120}
              height={120}
              loading="eager"
              decoding="async"
              style={{
                // height: "fit-content",
                // maxHeight: "100px",
                // width: "120px",
                // cursor: "pointer",
                objectFit: "contain", // Ensures proper aspect ratio
                maxHeight: "120px",
                maxWidth: "120px",
                width: "auto",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </Tooltip> */}
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
          gap="4"
        >
          {/* <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="4"
          ></Box> */}
          {/* Absolute Subscrite newletter with imput and subscribe button  */}
          <NewsLetter />
        </Box>
      </Container>
    </Box>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> dashboard template.
        </Heading>
      }
      description={
        <>
          Saas UI Pro includes everything you need to build modern frontends.
          <Br />
          Use it as a template for your next product or foundation for your
          design system.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={6}
      margin={10}
      features={[
        {
          title: "Components.",
          icon: FiBox,
          description:
            "All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.",
          variant: "inline",
        },
        {
          title: "Starterkits.",
          icon: FiLock,
          description:
            "Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.",
          variant: "inline",
        },
        {
          title: "Documentation.",
          icon: FiSearch,
          description:
            "Extensively documented, including storybooks, best practices, use-cases and examples.",
          variant: "inline",
        },
        {
          title: "Onboarding.",
          icon: FiUserPlus,
          description:
            "Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.",
          variant: "inline",
        },
        {
          title: "Feature flags.",
          icon: FiFlag,
          description:
            "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
          variant: "inline",
        },
        {
          title: "Upselling.",
          icon: FiTrendingUp,
          description:
            "Components and hooks for upgrade flows designed to make upgrading inside your app frictionless.",
          variant: "inline",
        },
        {
          title: "Themes.",
          icon: FiToggleLeft,
          description:
            "Includes multiple themes with darkmode support, always have the perfect starting point for your next project.",
          variant: "inline",
        },
        {
          title: "Generators.",
          icon: FiTerminal,
          description:
            "Extend your design system while maintaininig code quality and consistency with built-in generators.",
          variant: "inline",
        },
        {
          title: "Monorepo.",
          icon: FiCode,
          description: (
            <>
              All code is available as packages in a high-performance{" "}
              <Link href="https://turborepo.com">Turborepo</Link>, you have full
              control to modify and adjust it to your workflow.
            </>
          ),
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const isSmall = useBreakpointValue({ base: true, md: true, lg: false });
  const [showMore, setShowMore] = React.useState(false);
  const { colorMode } = useColorMode();
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.items.length - 1 : prevIndex - 1
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
      [[], [], []]
    );
  }, []);

  if (isSmall) {
    return (
      <Box position="relative" overflow="hidden">
        <Container
          maxW="container.xl"
          pt={{ base: 40, md: 40, lg: 20 }}
          pb="20"
          id="testimonials"
        >
          <Stack
            direction={{
              base: "column",
              md: "column",
              lg: "column",
              xl: "row",
            }}
            alignItems="flex-start"
          >
            <Testimonials
              title={testimonials.title}
              columns={[1, 1, 1, 2, 3]}
              innerWidth="container.xl"
            >
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
                    }}
                  >
                    <Button
                      onClick={() => {
                        setShowMore(true);
                      }}
                      sx={{
                        fontSize: "1.2rem",
                        marginTop: "2rem",
                        padding: "30px",
                        background: "transparent",
                        color: colorMode === "dark" ? "white" : "#004c4c",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        textDecoration: "none",
                      }}
                    >
                      Show more
                      <ChevronDownIcon
                        style={{
                          width: "25px",
                          height: "25px",
                          marginLeft: 3,
                          marginTop: 2,
                          color: colorMode === "dark" ? "white" : "#004c4c",
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
                      overflow={showMore ? "auto" : ""}
                    >
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
                    }}
                  >
                    <Button
                      onClick={() => {
                        setShowMore(false);
                      }}
                      sx={{
                        fontSize: "1.2rem",
                        marginTop: "2rem",
                        padding: "30px",
                        background: "transparent",
                        color: colorMode === "dark" ? "white" : "#004c4c",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        textDecoration: "none",
                      }}
                    >
                      Show less
                      <ChevronUpIcon
                        style={{
                          width: "25px",
                          height: "25px",
                          marginLeft: 3,
                          marginTop: 2,
                          color: colorMode === "dark" ? "white" : "#004c4c",
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
      height={[null, null, null]}
    >
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
          marginLeft={"20px"}
        >
          <Box mb={5} maxW={"60%"}>
            <Heading
              as="h2"
              size="md"
              color={colorMode === "dark" ? "white" : "#004c4c"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                textTransform: "uppercase",
              }}
            >
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
              }}
            >
              Hear From Our Clients
            </Heading>
            <Text
              color="muted"
              fontSize="lg"
              fontWeight={"500"}
              mt="5"
              px="10"
              justifyContent={"center"}
              width={{ base: "100%", md: "100%" }}
              align={"center"}
            >
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
            height={"50vh"}
          >
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
                  bg: "#004c4c",
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            >
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
                animation: `${currentIndex % 2 === 0 || currentIndex % 3 === 0
                  ? "fadeOut"
                  : "fadeIn"
                  } 0.5s`,
              }}
            >
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
                  bg: "#004c4c",
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            >
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
            color={colorMode === "dark" ? "white" : "#004c4c"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              textTransform: "uppercase",
            }}
          >
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
            }}
          >
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
            mt={10}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
              width="100%"
              maxWidth={"900px"}
            >
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent="center"
                alignItems="center"
                gap="10"
                width="100%"
              >
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
            mt={10}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
              width="100%"
              maxWidth={"900px"}
            >
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent="center"
                alignItems="center"
                gap="10"
                width="100%"
              >
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
            mt={10}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
              width="100%"
              maxWidth={"900px"}
            >
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent="center"
                alignItems="center"
                gap="10"
                width="100%"
              >
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
            mt={10}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
              width="100%"
              maxWidth={"900px"}
            >
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent="center"
                alignItems="center"
                gap="10"
                width="100%"
              >
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
            mt={10}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
              width="100%"
              maxWidth={"900px"}
            >
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent="center"
                alignItems="center"
                gap="10"
                width="100%"
              >
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
      bg={colorMode === "dark" ? "gray.800" : ""}
    >
      <Divider />
      <Container maxW="container.xl" py="5" mb="5">
        <Box flex="1" mt={20}>
          <Heading
            as="h2"
            size="md"
            color={colorMode === "dark" ? "white" : "#004c4c"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              textTransform: "uppercase",
            }}
          >
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
            }}
          >
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
            minWidth={"380px"}
          >
            <Button
              size="lg"
              mt={"10"}
              bg={currentTab === "frontend" ? "#004c4c" : "gray.300"}
              sx={{
                fontSize: isSMall ? "0.8rem" : "1rem",
                color: currentTab === "frontend" ? "white" : "gray.800",
                borderRadius: "30px",
                padding: "0.5rem 1.8rem",
                "&:hover": {
                  bg: currentTab === "frontend" ? "#004c4c" : "gray.300",
                },
              }}
              onClick={() => setCurrentTab("frontend")}
              minWidth={"72px"}
            >
              Frontend
            </Button>
            <Button
              size="lg"
              mt={"10"}
              bg={currentTab === "backend" ? "#004c4c" : "gray.300"}
              sx={{
                fontSize: isSMall ? "0.8rem" : "1rem",
                color: currentTab === "backend" ? "white" : "gray.800",
                borderRadius: "30px",
                padding: "0.5rem 1.8rem",
                "&:hover": {
                  bg: currentTab === "backend" ? "#004c4c" : "gray.300",
                },
              }}
              onClick={() => setCurrentTab("backend")}
              minWidth={"72px"}
            >
              Backend
            </Button>
            <Button
              size="lg"
              mt={"10"}
              bg={currentTab === "devops" ? "#004c4c" : "gray.300"}
              sx={{
                fontSize: isSMall ? "0.8rem" : "1rem",
                color: currentTab === "devops" ? "white" : "gray.800",
                borderRadius: "30px",
                padding: "0.5rem 1.8rem",
                "&:hover": {
                  bg: currentTab === "devops" ? "#004c4c" : "gray.300",
                },
              }}
              onClick={() => setCurrentTab("devops")}
              minWidth={"72px"}
            >
              DevOps
            </Button>
            <Button
              size="lg"
              mt={"10"}
              bg={currentTab === "AI" ? "#004c4c" : "gray.300"}
              sx={{
                fontSize: isSMall ? "0.8rem" : "1rem",
                color: currentTab === "AI" ? "white" : "gray.800",
                borderRadius: "30px",
                padding: "0.5rem 1.8rem",
                "&:hover": {
                  bg: currentTab === "AI" ? "#004c4c" : "gray.300",
                },
              }}
              onClick={() => setCurrentTab("AI")}
            >
              AI
            </Button>
            <Button
              size="lg"
              mt={"10"}
              bg={currentTab === "noCodeAutomation" ? "#004c4c" : "gray.300"}
              sx={{
                fontSize: isSMall ? "0.8rem" : "1rem",
                color: currentTab === "noCodeAutomation" ? "white" : "gray.800",
                borderRadius: "30px",
                padding: "0.5rem 1.8rem",
                "&:hover": {
                  bg:
                    currentTab === "noCodeAutomation" ? "#004c4c" : "gray.300",
                },
                minWidth: "140px",
              }}
              onClick={() => setCurrentTab("noCodeAutomation")}
            >
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

const Team: React.FC = () => {
  const { colorMode } = useColorMode();
  const images = [
    {
      image: "/assets/team/hamid.png",
      name: "Hamid Ali",
      role: "Full Stack Developer",
    },
    {
      image: "/assets/team/javed.png",
      name: "Javed Iqbal",
      role: "Full Stack Developer",
    },
    {
      image: "/assets/team/qazi.png",
      name: "Qazi Yahya",
      role: "Full Stack Developer",
    },
    {
      image: "/assets/team/talha.png",
      name: "Muhammad Talha",
      role: "MERN Stack Developer",
    },
    {
      image: "/assets/team/yahya.png",
      name: "Yahya Naeem",
      role: "Full Stack Developer",
    },
    {
      image: "/assets/team/saud.png",
      name: "Saud Iftekhar",
      role: "SQA Engineer",
    },
  ];
  return (
    <Box id="services">
      <Container maxW="container.xl" py="5">
        <Divider />
        <Box
          display={{ base: "block", md: "flex" }}
          flexDirection={"column"}
          justifyContent={"center"}
          width={"100%"}
        >
          <Box
            display={{ base: "block", md: "flex" }}
            px="15"
            mt={10}
            justifyContent={"space-between"}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
              width="100%"
            >
              <Heading
                as="h2"
                size="md"
                color={colorMode === "dark" ? "white" : "#004c4c"}
                sx={{
                  textTransform: "uppercase",
                }}
              >
                TEAM
              </Heading>
              <Heading
                as="h1"
                mt="2"
                sx={{
                  fontSize: {
                    base: "2rem",
                    md: "2rem",
                  },
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Our Awesome Team
              </Heading>
              <Text
                color="gray.400"
                fontSize="lg"
                fontWeight={"500"}
                mt="4"
                width={"60%"}
                align={"center"}
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </Text>
            </Box>

            {/* Explore services */}
          </Box>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              null,
              "repeat(2, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={{ base: 4, md: 4, lg: 4, xl: 0 }}
            mt="14"
            w="100%"
            justifyContent={"center"}
            alignItems={"center"}
          >
            {images?.map((image, index) => (
              <Teams
                key={index}
                name={image.name}
                role={image.role}
                image={image.image}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const PricingSection: React.FC = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
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

// export async function getStaticProps() {
//   return {
//     props: {
//       announcement: {
//         title: "Support us by becoming a stargazer! 🚀 ",
//         description:
//           '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
//         href: "https://github.com/saas-js/saas-ui",
//         action: false,
//       },
//     },
//   };
// }
