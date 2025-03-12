import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import {
  HighlightsItem,
  HighlightsWhatWeDo,
} from "components/highlights";
import Head from "next/head";
import Script from "next/script";
import { FaChevronRight } from "react-icons/fa";

const Services = () => {
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
    {
      title: "Automation Solutions",
      description:
        "Streamline your business processes with our cutting-edge automation services. We design and implement automated workflows to enhance productivity, reduce manual errors, and optimize efficiency.",
      image: "/assets/whatWeDo/automation.png",
    },
  ];

  return (
    <Box>
      <Head>
        <title>Services - Tech Emulsion</title>
        <meta
          name="description"
          content="Tech Emulsion offers a range of innovative services, including SaaS development, website development, Chrome extensions, DevOps solutions, generative AI integration, QA testing, and automation solutions."
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF"
      ></Script>
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
      <Container maxW="container.xl" py="20" mb="20">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Box
          display={{ base: "block", md: "flex" }}
          px="15"
          mt={10}
          justifyContent={"space-between"}
        >
          <Box>
            <Heading as="h2" size="lg">
              Services Page
            </Heading>
            <Text
              color="muted"
              fontSize="lg"
              mt="4"
              width={["70%", null, "auto"]}
            >
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
            mt="4"
          >
            <ButtonGroup
              style={{
                backgroundColor: " none",
                fontSize: "1rem",
                color: "muted",
                display: "flex",
                alignItems: "center",
              }}
            >
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
                }}
              >
                Home
              </ButtonLink>
              <FaChevronRight size={15} />
              <Text
                as="span"
                ml="2"
                sx={{
                  color: colorMode === "light" ? "#004c4c !important" : "white",
                }}
              >
                Services
              </Text>
            </ButtonGroup>
          </VStack>
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
                alt="hero"
                width={1200}
                height={300}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: item.title === "Agentic AI Engineering" ? "cover" : "fill",
                }}
              />
              <Box px="4" pb="6" borderRadius="8px" w="100%">
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
                  <Text color="muted" fontSize="xl">
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
        </HighlightsWhatWeDo>
      </Container>
    </Box>
  );
};

export default Services;
