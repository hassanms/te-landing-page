import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { HighlightsItem, HighlightsWhatWeDo } from "components/highlights";
import Head from "next/head";
import Script from "next/script";
import { FaChevronRight } from "react-icons/fa";
import { EnhancedSEO } from "components/seo/enhanced-seo";

const Services = () => {
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
      <EnhancedSEO
        title="Services - Tech Emulsion"
        description="Tech Emulsion provides comprehensive technology services including SaaS development services, AI agent development, and custom software solutions. We specialize in generative AI solutions, business automation, workflow automation services, DevOps services, QA testing services, Chrome extension development, and Next.js website development."
        pageType="services"
        serviceData={{
          name: "Digital Transformation Services",
          description:
            "Comprehensive digital transformation services including agentic AI development, AI agent development services, SaaS development services, custom SaaS development, generative AI solutions, AI integration services, business automation solutions, workflow automation services, DevOps services, QA testing services, test automation services, Chrome extension development, custom website development, Next.js website development, and AI automation services.",
          serviceType: "Technology Services",
        }}
        faqData={{
          questions: [
            {
              question:
                "What types of SaaS platforms does Tech Emulsion develop?",
              answer:
                "Tech Emulsion develops various SaaS platforms including customer relationship management (CRM) systems, project management tools, e-commerce platforms, learning management systems, analytics dashboards, and industry-specific solutions. Our SaaS development services encompass custom SaaS development tailored to your business needs, ensuring scalable, secure, and high-performance solutions.",
            },
            {
              question:
                "How does Tech Emulsion handle data security and privacy?",
              answer:
                "Tech Emulsion implements enterprise-grade security measures including data encryption, secure authentication systems, regular security audits, compliance with GDPR and other privacy regulations, and comprehensive backup and disaster recovery plans.",
            },
            {
              question:
                "What are your AI agent development services?",
              answer:
                "Our AI agent development services include creating intelligent, autonomous AI agents that can perform complex tasks, make decisions, and interact with users naturally. We specialize in agentic AI development, building AI agents that can automate business processes, provide intelligent customer support, analyze data, and integrate seamlessly with your existing systems. Our AI agent development services cover conversational AI, task automation agents, data analysis agents, and custom AI agent solutions tailored to your specific business requirements.",
            },
            {
              question:
                "Do you offer workflow automation services?",
              answer:
                "Yes, we provide comprehensive workflow automation services that help streamline your business processes. Our workflow automation services include analyzing your current workflows, identifying automation opportunities, designing automated workflows, and implementing solutions that reduce manual errors, improve efficiency, and save time. We also offer business automation solutions that encompass end-to-end process automation, integration with existing systems, and continuous optimization of automated workflows.",
            },
            {
              question:
                "What QA testing services do you provide?",
              answer:
                "We offer comprehensive QA testing services including functional testing, performance testing, security testing, usability testing, and automated testing. Our QA testing services ensure your software is bug-free, reliable, and ready for market. Additionally, we provide test automation services that help you maintain quality while accelerating your development cycles through automated test suites, continuous testing integration, and comprehensive test coverage.",
            },
            {
              question:
                "Can you help with Next.js website development?",
              answer:
                "Absolutely! We specialize in Next.js website development, creating high-performance, SEO-friendly websites using the Next.js framework. Our Next.js website development services include custom website development, responsive design, server-side rendering, static site generation, API integration, and performance optimization. We also provide custom website development services for businesses looking for unique, tailored web solutions that align with their brand and business objectives.",
            },
            {
              question:
                "What AI integration services do you offer?",
              answer:
                "Our AI integration services help businesses seamlessly integrate artificial intelligence into their existing systems and workflows. We provide AI integration services for various AI technologies including generative AI solutions, machine learning models, natural language processing, computer vision, and predictive analytics. Our AI integration services ensure smooth integration, minimal disruption to existing operations, and maximum value from AI technologies.",
            },
            {
              question:
                "Do you provide AI automation services?",
              answer:
                "Yes, we offer comprehensive AI automation services that combine artificial intelligence with automation to create intelligent, self-learning automated systems. Our AI automation services include intelligent process automation, AI-powered decision-making systems, automated data analysis, intelligent document processing, and AI-driven workflow optimization. These services help businesses achieve higher levels of automation while maintaining flexibility and adaptability.",
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
              Services Page
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
              padding={0}>
              <Image
                src={item.image}
                alt="hero"
                width={1200}
                height={300}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit:
                    item.title === "Agentic AI Engineering" ? "cover" : "fill",
                }}
              />
              <Box px="4" pb="6" borderRadius="8px" w="100%">
                <Heading
                  as="h2"
                  size="lg"
                  sx={{
                    py: "6",
                  }}>
                  {item.title}
                </Heading>
                <VStack alignItems="flex-start" spacing="8">
                  <Text color={textColor} fontSize="xl">
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
        <Text color={textColor} fontSize="lg">
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
        <Text color={textColor} fontSize="lg">
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
