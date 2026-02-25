"use client";

import React from "react";
import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { ButtonLink } from "components/button-link";
import { HighlightsItem, HighlightsWhatWeDo } from "components/highlights";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { FaChevronRight } from "react-icons/fa";
import Script from "next/script";

const serviceItems = [
  {
    id: 1,
    title: "Agentic AI Engineering",
    description:
      "We create intelligent AI-driven agent systems tailored to your business needs, delivering cutting-edge automation, personalized interactions, and exceptional user experiences.",
    image: "/assets/whatWeDo/arseny-togulev-MECKPoKJYjM-unsplash.jpg",
  },
  {
    id: 2,
    title: "Next-Gen SaaS Development",
    description:
      "We design and develop scalable, custom SaaS solutions tailored to your business needs, ensuring robust performance and seamless user experiences.",
    image: "/assets/whatWeDo/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
  },
  {
    id: 3,
    title: "Innovative Website Development",
    description:
      "From concept to launch, we create responsive and visually stunning websites that captivate your audience and drive business growth.",
    image: "/assets/whatWeDo/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg",
  },
  {
    id: 4,
    title: "Custom Chrome Extensions",
    description:
      "We build powerful Chrome extensions that enhance productivity and offer unique functionalities, perfectly aligned with your business objectives.",
    image: "/assets/whatWeDo/growtika-fiao0RcVWBE-unsplash.jpg",
  },
  {
    id: 5,
    title: "Expert DevOps Solutions",
    description:
      "Our DevOps services streamline your development process, enhance collaboration, and ensure continuous integration and deployment for faster, reliable releases.",
    image: "/assets/whatWeDo/growtika-72dRZHuYJWE-unsplash.jpg",
  },
  {
    id: 6,
    title: "Generative AI Integration",
    description:
      "Harness the power of AI to revolutionize your operations. We integrate advanced generative AI solutions to automate tasks, enhance creativity, and boost efficiency.",
    image: "/assets/whatWeDo/randa-marzouk-ilwI-AIAQr4-unsplash.jpg",
  },
  {
    id: 7,
    title: "QA Testing & Automation",
    description:
      "We deliver comprehensive QA testing and automation services, ensuring your software is bug-free, reliable, and ready for market with speed and precision.",
    image: "/assets/whatWeDo/growtika-Am6pBe2FpJw-unsplash.jpg",
  },
  {
    id: 8,
    title: "Automation Solutions",
    description:
      "Streamline your business processes with our cutting-edge automation services. We design and implement automated workflows to enhance productivity, reduce manual errors, and optimize efficiency.",
    image: "/assets/whatWeDo/automation.png",
  },
];

const Services = () => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  return (
    <>
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

      <Box position="relative" minH="100vh" color={headingColor}>
        {/* Full-page gradient - scrolls with content (not fixed) */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={-1}
          overflow="hidden"
          pointerEvents="none"
        >
          <BackgroundGradient height="100%" width="100%" />
        </Box>

        {/* Top margin - clear fixed navbar only */}
        <Box pt={{ base: 20, md: 24 }} />
        <Container maxW="container.xl" pt={6} pb={20} position="relative" zIndex={1}>
          {/* Breadcrumb */}
          <Flex justify="flex-end" mb={8}>
            <ButtonGroup
              sx={{
                bg: "none",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: textColor,
                  p: 0,
                  "&:hover": { bg: "none", color: headingColor },
                }}
              >
                Home
              </ButtonLink>
              <Icon as={FaChevronRight} color={textColor} boxSize={4} />
              <Text as="span" ml="2" color={headingColor}>
                Services
              </Text>
            </ButtonGroup>
          </Flex>

          {/* Header section - same layout as portfolio */}
          <Box
            minH={{ base: "280px", md: "35vh" }}
            display={{ base: "block", md: "grid" }}
            gridTemplateColumns={{ md: "1fr 1fr" }}
            borderTopWidth="1px"
            borderColor={dividerColor}
            mx={-6}
            px={6}
          >
            {/* Left: Our services - top aligned */}
            <Box
              py={8}
              pr={{ base: 0, md: 6 }}
              display="flex"
              alignItems="flex-start"
              borderRightWidth={{ md: "1px" }}
              borderColor={dividerColor}
              sx={{
                borderColor: "gray.200 !important",
                _dark: { borderColor: "gray.600 !important" },
              }}
            >
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                Our services
              </Heading>
            </Box>
            {/* Right: Description - bottom aligned */}
            <Box
              pl={{ base: 0, md: 6 }}
              py={{ base: 4, md: 8 }}
              display="flex"
              alignItems={{ base: "flex-start", md: "flex-end" }}
              justifyContent={{ base: "flex-start", md: "flex-end" }}
            >
              <Text
                color={textColor}
                fontSize="lg"
                lineHeight="tall"
                textAlign={{ base: "left", md: "left" }}
                maxW={{ md: "420px" }}
              >
                We believe that building a product should be fun and rewarding.
                Our mission is to provide you with the best tools to make that
                happen.
              </Text>
            </Box>
          </Box>

          {/* Divider bar - matches portfolio filter bar styling */}
          <Box
            bg="transparent"
            py={2}
            px={6}
            mx={-6}
            borderTopWidth="1px"
            borderColor={dividerColor}
          />

          {/* Services cards - previous HighlightsWhatWeDo style */}
          <HighlightsWhatWeDo>
            {serviceItems.map((item) => (
              <HighlightsItem key={item.id} colSpan={[1, null, 2]} title="" p={0}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={300}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: item.title === "Agentic AI Engineering" ? "cover" : "fill",
                  }}
                />
                <Box px="4" pb="6" borderRadius="8px" w="100%">
                  <Heading as="h2" size="lg" sx={{ py: "6" }}>
                    {item.title}
                  </Heading>
                  <VStack alignItems="flex-start" spacing="8">
                    <Text color={textColor} fontSize="xl">
                      {item.description}
                    </Text>
                  </VStack>
                </Box>
              </HighlightsItem>
            ))}
          </HighlightsWhatWeDo>
        </Container>
      </Box>
    </>
  );
};

export default Services;
