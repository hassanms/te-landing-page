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
  IconButton,
  VStack,
  Flex,
  useColorMode,
  Divider,
  Grid,
  Avatar,
  Img,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import InnerElementBG from "components/InnerElementBG";
import { NextjsLogo, ChakraLogo } from "components/logos";
import bipCards from "../components/Bipcards";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
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
  HighlightsTestimonialItem,
} from "components/highlights";

import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Contact from "components/Contact";
import FirstIcon from "components/icons/firstIcon";
import Innovation from "components/icons/Inovation";
import EffectiveCommunication from "components/icons/EffectiveCommunication";
import OwnerShipd from "components/icons/OwnerShipd";
import Atarim from "components/icons/Atarim";

const Home: NextPage = () => {
  const [mount, setMount] = React.useState(false);

  React.useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }
  return (
    <Box>
      <SEO
        title="Saas UI Landingspage"
        description="Free SaaS landingspage starter kit"
      />
      <Box>
        <HeroSection />
        <AboutUsSection />
        <HighlightsSection />
        <Portfolio />
        <SocialProofSection />
        <FeaturesSection />

        <TestimonialsSection />
        <Team />
        {/* <PricingSection /> */}

        <FaqSection />
        <Contact />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  const { colorMode } = useColorMode();
  const img =
    "https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fhero%2Fhero-image-01.png&w=1920&q=75";
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 20, lg: 20 }} pb="20">
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
                Imagineering digital success
                <Br /> for your business
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Empowering businesses with next-gen{" "}
                <Em> SaaS, web, and AI solutions</Em> driving innovation and
                excellence through tailored technology strategies that propel
                your brand to new heights.
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
                {/* <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink> */}
              </ButtonGroup>
            </FallInPlace>
            <VStack
              flex="1"
              spacing="2"
              alignItems="flex-start"
              display={{ base: "none", lg: "flex" }}
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
                  {colorMode === "dark" ? (
                    <img
                      src="/assets/clients/Atarim.svg"
                      width={100}
                      height={262}
                      alt="Screenshot of a ListPage in Saas UI Pro"
                    />
                  ) : (
                    <Atarim />
                  )}
                  <img
                    src="/assets/clients/krypto_labs_logo.jpeg"
                    width={100}
                    height={262}
                    alt="Screenshot of a ListPage in Saas UI Pro"
                  />
                  <img
                    src="/assets/clients/farmin-logo-dark.png"
                    width={100}
                    height={462}
                    style={{ objectFit: "contain" }}
                    alt="Screenshot of a ListPage in Saas UI Pro"
                  />
                </Box>
              </FallInPlace>
            </VStack>
          </Hero>
          <Box
            display={{ base: "none", lg: "block" }}
            mt={{ base: "20", lg: "20" }}
            mr={{ base: 0, lg: 3 }}
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <img src={img} alt="Screenshot of a ListPage in Saas UI Pro" />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const AboutUsSection = () => {
  const { colorMode } = useColorMode();

  return (
    <Box id="about">
      <Container maxW="container.xl" py="5" mb="5">
        <Stack
          direction={["column", null, "row"]}
          spacing="4"
          ml={{ base: 4, lg: 4 }}
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
              Better design,
              <Br /> better experience
            </Heading>
            <Text color="muted" fontSize="lg" mt="4">
              We believe that building a product should be fun and rewarding.
              Our mission is to provide you with the best tools to make that
              happen.
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
              We believe that building a product should be fun and rewarding.
              Our mission is to provide you with the best tools to make that
              happen.
            </Text>
            {/* social links */}
            <HStack mt="8" spacing="4">
              <Link href="https://twitter.com/saas_js">
                <Icon
                  as={FiTwitter}
                  boxSize="10"
                  color="gray.500"
                  sx={{
                    padding: "10px",
                    borderRadius: "50%",
                    border: "1px solid #004c4c",
                    ":hover": {
                      bg: "#004c4c",
                      color: "white",
                    },
                  }}
                />
              </Link>
              <Link href="https://facebook.com/saas-js">
                <Icon
                  as={FiFacebook}
                  boxSize="10"
                  color="gray.500"
                  sx={{
                    padding: "10px",
                    borderRadius: "50%",
                    border: "1px solid #004c4c",
                    ":hover": {
                      bg: "#004c4c",
                      color: "white",
                    },
                  }}
                />
              </Link>
              <Link
                href="
              https://instagram.com/saas-js"
              >
                <Icon
                  as={FiInstagram}
                  boxSize="10"
                  color="gray.500"
                  sx={{
                    padding: "10px",
                    borderRadius: "50%",
                    border: "1px solid #004c4c",
                    ":hover": {
                      bg: "#004c4c",
                      color: "white",
                    },
                  }}
                />
              </Link>
              <Link
                href="
              https://linkedin.com/saas-js"
              >
                <Icon
                  as={FiLinkedin}
                  boxSize="10"
                  color="gray.500"
                  sx={{
                    padding: "6px",
                    borderRadius: "46%",
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
            Our core values
          </Heading>
          <Features
            id="benefits"
            columns={[1, 2, 4]}
            iconSize={4}
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
                delay: 0.8,
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
                title: "Clear and Effective Communication",
                icon: EffectiveCommunication,
                description:
                  "We believe in straightforward, precise communication, ensuring clarity in every interaction and decision-making process.",
                iconPosition: "left",
                delay: 1.1,
              },
              {
                title: "Accountability and Ownership",
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

          <Card
            position="relative"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgGradient={`linear(to-br,#b2d8d8, #66b2b2, #008080, #006666 ,  #004c4c)`}
            boxShadow="none"
            border={"none"}
            borderRadius="lg"
            overflow="hidden"
          >
            <CardHeader display="flex" flexDirection="row" alignItems="center">
              <Avatar
                name="Zain Ul Abideen"
                src="/assets/zain.png"
                size="lg"
                bg="transparent"
              />
              <Stack spacing="1" ms="4">
                <Heading
                  size="sm"
                  sx={{
                    color: "white",
                  }}
                >
                  Zain Ul Abideen
                </Heading>
                <Text color="white" size="xs">
                  Co-Founder & CTO
                </Text>
              </Stack>
            </CardHeader>
            <CardBody>
              <Text color="white" fontSize="lg">
                &quot;We believe that building a product should be fun and
                rewarding. Our mission is to provide you with the best tools to
                make that happen.&quot;
              </Text>
            </CardBody>
          </Card>

          <HighlightsItem
            colSpan={[1, null, 2, 3, 3]}
            title="Start your next idea two steps ahead"
          >
            <Text color="muted" fontSize="lg">
              We took care of all your basic frontend needs, so you can start
              building functionality that makes your product unique.
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
          </HighlightsItem>
        </Highlights>
      </Container>
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");
  const { colorMode } = useColorMode();
  const HighlightsItems = [
    {
      title: "Next-Gen SaaS Development",
      description:
        "We design and develop scalable, custom SaaS solutions tailored to your business needs, ensuring robust performance and seamless user experiences.",
      image: "/assets/whatWeDo/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
    },
    {
      title: "Innovative Website Development",
      description:
        "From concept to launch, we create responsive and visually stunning websites that captivate your audience and drive business growth.",
      image: "/assets/whatWeDo/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg",
    },
    {
      title: "Custom Chrome Extensions",
      description:
        "We build powerful Chrome extensions that enhance productivity and offer unique functionalities, perfectly aligned with your business objectives",
      image: "/assets/whatWeDo/growtika-fiao0RcVWBE-unsplash.jpg",
    },
    {
      title: "Expert DevOps Solutions",
      description:
        "Our DevOps services streamline your development process, enhance collaboration, and ensure continuous integration and deployment for faster, reliable releases",
      image: "/assets/whatWeDo/growtika-72dRZHuYJWE-unsplash.jpg",
    },
    {
      title: "Generative AI Integration",
      description:
        "Harness the power of AI to revolutionize your operations. We integrate advanced generative AI solutions to automate tasks, enhance creativity, and boost efficiency",
      image: "/assets/whatWeDo/randa-marzouk-ilwI-AIAQr4-unsplash.jpg",
    },
    {
      title: "QA Testing & Automation",
      description:
        "We deliver comprehensive QA testing and automation services, ensuring your software is bug-free, reliable, and ready for market with speed and precision",
      image: "/assets/whatWeDo/growtika-Am6pBe2FpJw-unsplash.jpg",
    },
  ];
  return (
    <Box id="services">
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

        <Highlights>
          {HighlightsItems?.map((item, index) => (
            <HighlightsItem
              key={index}
              colSpan={[1, null, 2]}
              title={""}
              padding={0}
            >
              <img
                src={item.image}
                alt="hero"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "fill",
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
        </Highlights>
      </Container>
    </Box>
  );
};
const Portfolio = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");
  const { colorMode } = useColorMode();
  const HighlightsItems = [
    {
      title: "Core components",
      description:
        "Get started for free with 30+ open source components. Including authentication screens with Clerk, Supabase and Magic. Fully functional forms with React Hook Form. Data tables with React Table.",
      image:
        "https://agency.demo.nextjstemplates.com/images/portfolio/portfolio-01.jpg",
    },
    {
      title: "Core components",
      description:
        "Get started for free with 30+ open source components. Including authentication screens with Clerk, Supabase and Magic. Fully functional forms with React Hook Form. Data tables with React Table.",
      image:
        "https://agency.demo.nextjstemplates.com/images/portfolio/portfolio-02.jpg",
    },
    {
      title: "Core components",
      description:
        "Get started for free with 30+ open source components. Including authentication screens with Clerk, Supabase and Magic. Fully functional forms with React Hook Form. Data tables with React Table.",
      image:
        "https://agency.demo.nextjstemplates.com/images/portfolio/portfolio-03.jpg",
    },
  ];
  return (
    <Box id="portfolio">
      <Container maxW="container.xl" py="5" mb="20">
        <Divider />
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"4"}
          mt={10}
        >
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
            Recent Works
          </Heading>
          <Text
            color="muted"
            fontSize="lg"
            fontWeight={"500"}
            mt="4"
            width={"60%"}
            align={"center"}
          >
            We believe that building a product should be fun and rewarding. Our
            mission is to provide you with the best tools to make that happen.
          </Text>
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
          {HighlightsItems?.map((item, index) => (
            <HighlightsItem
              key={index}
              colSpan={[1, null, 2]}
              gap={"0"}
              padding={"4"}
              title={""}
              border={"none"}
              width={{
                base: "100%",
                md: "100%",
                lg: "100%",
                xl: "592px",
              }}
            >
              <img
                src={item.image}
                alt="hero"
                style={{
                  width: "100%",
                  objectFit: "fill",
                }}
              />
              <Box
                w="100%"
                px={{
                  base: "0",
                  md: "16",
                  lg: "0",
                }}
                pt={"4"}
              >
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

const SocialProofSection = () => {
  const { colorMode } = useColorMode();
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");
  return (
    <Box
      id="social"
      py="20"
      bg="#004c4c"
      color="white"
      textAlign="center"
      height={[null, null, null]}
    >
      <Container maxW="container.xl" py="5" mb="20">
        <Box
          position={"relative"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="4"
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
              Some of Our Happy Clients
            </Heading>
            <Text
              color="gray.400"
              fontSize="lg"
              fontWeight={"500"}
              mt="4"
              width={"60%"}
              align={"center"}
            >
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </Text>
            <Grid
              templateColumns={["repeat(2, 1fr)", null, "repeat(4, 1fr 1fr)"]}
              gap={10}
              mt="14"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",
                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <img
                  src="/assets/clients/Artis.png"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",

                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <img
                  src="/assets/clients/Atarim.svg"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",

                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <bipCards />
              </Box> */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",

                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <img
                  src="/assets/clients/POPCARD_4.png_v=1718360510&width=370"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",

                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <img
                  src="/assets/clients/Sprintzeal_Logo.webp"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",

                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <img
                  src="/assets/clients/bai_logo_colored.46fc5d5b219c.svg"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",

                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <img
                  src="/assets/clients/crystal_ball.png"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",

                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <img
                  src="/assets/clients/farmin-logo-dark.png"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",

                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <img
                  src="/assets/clients/ibatu.png"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",

                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <img
                  src="/assets/clients/jarvis-logo.png"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",

                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <img
                  src="/assets/clients/krypto_labs_logo.jpeg"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",

                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <img
                  src="/assets/clients/logo-black-small.png"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "gray.400",

                  cursor: "pointer",
                  gap: "4",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <img
                  src="/assets/clients/republic_power_logo.jpeg"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Box>
          {/* Absolute Subscrite newletter with imput and subscribe button  */}
          <Box
            position={"absolute"}
            top={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"4"}
            mt={"20"}
            width={"97.8%"}
            ml={"0.3%"}
            sx={{
              // background image with gradient
              backgroundColor: "#008080",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              paddingY: "60px",
              borderRadius: "20px",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            <Heading
              as="h2"
              color={"white"}
              sx={{
                fontSize: {
                  base: "1.5rem",
                  md: "2rem",
                },
                width: "70%",
              }}
            >
              Subscribe our newsletter to receive future updates
            </Heading>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"4"}
              mt={"10"}
              width={[null, null, "60%"]}
              position={"relative"}
            >
              <Input
                placeholder="Enter your email"
                sx={{
                  width: "100%",
                  padding: {
                    base: "1.5rem 1.5rem",
                    md: "40px",
                  },

                  borderRadius: "40px",
                  fontSize: {
                    base: "1rem",
                    md: "1.5rem",
                  },

                  bg: "#66b2b2",
                  zIndex: "1000000",
                }}
              />
              <Button
                position={[null, null, "absolute"]}
                zIndex={"10000000"}
                top={"10%"}
                right={"2%"}
                size="lg"
                bg={"white"}
                sx={{
                  fontSize: {
                    base: "1rem",
                    md: "1.5rem",
                  },

                  color: "#004c4c",
                  borderRadius: "30px",
                  padding: {
                    base: "0.5rem 1.8rem",
                    md: "2rem 2rem",
                  },

                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                  "&:hover": {
                    bg: "#004c4c",
                    color: "white",
                  },
                }}
              >
                Subscribe Now
              </Button>
            </Box>
            <Box
              display={{ base: "none", md: "none", lg: "none", xl: "block" }}
              position={"absolute"}
              top={"0"}
              left={"0"}
              width={"100%"}
            >
              <InnerElementBG />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      mt={300}
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
      iconSize={4}
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

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 40, lg: 20 }} pb="40">
        <Stack
          direction={{ base: "column", lg: "row" }}
          alignItems="flex-start"
        >
          <Testimonials
            title={testimonials.title}
            columns={[1, 2, 3]}
            innerWidth="container.xl"
          >
            <>
              {columns.map((column, i) => (
                <Stack key={i}>
                  {column.map((t, i) => (
                    <Testimonial key={i} {...t} />
                  ))}
                </Stack>
              ))}
            </>
          </Testimonials>
        </Stack>
      </Container>
    </Box>
  );
};

const Team = () => {
  const { colorMode } = useColorMode();
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
                size="lg"
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
            templateColumns={["repeat(1, 1fr)", null, "repeat(4, 1fr)"]}
            gap={{ base: 4, md: 0 }}
            mt="14"
            w="100%"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Teams />
            <Teams />
            <Teams />
            <Teams />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
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
