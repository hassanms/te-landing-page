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
  const img =
    "https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fhero%2Fhero-image-01.png&w=1920&q=75";
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 20 }} pb="40">
        <Stack
          direction={{ base: "column", lg: "row" }}
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
                A software development partner with{" "}
                <Em>various collaboration options</Em>
                <Br /> Tech Emulsion provides a tailored selection of
                outsourcing methods that can be adjusted to your present
                requirements and expanded as your business expands. Regardless
                of whether you’re a newcomer to IT outsourcing or someone
                skilled in overseeing extensive software development groups,{" "}
                <Br /> Tech Emulsion is here to guide you in determining the
                optimal strategy for bringing your ideas to life. We work
                together to develop effective technical answers and back your
                ongoing progress.
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
                  <img
                    src="/assets/clients/Atarim.svg"
                    width={100}
                    height={262}
                    alt="Screenshot of a ListPage in Saas UI Pro"
                  />
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
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <img
                  src={img}
                  width={800}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
        <Features
          id="benefits"
          columns={[1, 2, 4]}
          iconSize={4}
          innerWidth="container.xl"
          pt="20"
          features={[
            {
              title: "Accessible",
              icon: FiSmile,
              description: "All components strictly follow WAI-ARIA standards.",
              iconPosition: "left",
              delay: 0.6,
            },
            {
              title: "Themable",
              icon: FiSliders,
              description:
                "Fully customize all components to your brand with theme support and style props.",
              iconPosition: "left",
              delay: 0.8,
            },
            {
              title: "Composable",
              icon: FiGrid,
              description:
                "Compose components to fit your needs and mix them together to create new ones.",
              iconPosition: "left",
              delay: 1,
            },
            {
              title: "Productive",
              icon: FiThumbsUp,
              description:
                "Designed to reduce boilerplate and fully typed, build your product at speed.",
              iconPosition: "left",
              delay: 1.1,
            },
          ]}
          reveal={FallInPlace}
        />
      </Container>
    </Box>
  );
};

const AboutUsSection = () => {
  const { colorMode } = useColorMode();

  return (
    <Box id="about">
      <Container maxW="container.xl" py="5" mb="20">
        <Stack
          direction={["column", null, "row"]}
          spacing="8"
          ml={{ base: 0, lg: 4 }}
        >
          <Box flex="1">
            <Heading
              as="h2"
              size="lg"
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
                fontSize: "3rem",
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
        <Highlights>
          <HighlightsTestimonialItem
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
      title: "Core components",
      description:
        "Get started for free with 30+ open source components. Including authentication screens with Clerk, Supabase and Magic. Fully functional forms with React Hook Form. Data tables with React Table.",
      image:
        "https://cdn.educba.com/academy/wp-content/uploads/2018/12/What-is-Software-Development-3.jpg",
    },
    {
      title: "Core components",
      description:
        "Get started for free with 30+ open source components. Including authentication screens with Clerk, Supabase and Magic. Fully functional forms with React Hook Form. Data tables with React Table.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FfhtPsXcSWbQmfHqTkve3DmOHZI_2Gc8uk-h0YMaLIs0vW1xDWaD06X47FLBhA116PE&usqp=CAU",
    },
    {
      title: "Core components",
      description:
        "Get started for free with 30+ open source components. Including authentication screens with Clerk, Supabase and Magic. Fully functional forms with React Hook Form. Data tables with React Table.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCOFpKHTPDru2q1BCvSheKmglmnEE6XRdGw&s",
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
              size="lg"
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
                  borderRadius: "8px",
                }}
              />
              <Box p="8" borderRadius="8px" mt="4" boxShadow="md" w="100%">
                <Heading
                  as="h2"
                  size="lg"
                  sx={{
                    py: "6",
                  }}
                >
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
            size="lg"
            color={colorMode === "dark" ? "white" : "#004c4c"}
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
              colSpan={[1, null, 3]}
              gap={"4"}
              title={""}
              padding={0}
              border={"none"}
            >
              <img
                src={item.image}
                alt="hero"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "fill",
                  borderRadius: "8px",
                }}
              />
              <Box p="8" borderRadius="8px" mt="4" boxShadow="md" w="100%">
                <Heading
                  as="h2"
                  size="lg"
                  sx={{
                    textTransform: "uppercase",
                    py: "6",
                  }}
                >
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
      <Container maxW="container.xl">
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
            width={"90%"}
            sx={{
              // background image with gradient
              backgroundColor: "#008080",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            <Heading
              as="h2"
              mt={"10"}
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
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
      ml={{ base: 0, lg: 10 }}
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
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
