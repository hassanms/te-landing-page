"use client";

import React from "react";
import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { FaChevronRight } from "react-icons/fa";
import Script from "next/script";
import {
  servicesData,
  mainValueProps,
  impactStats,
} from "data/services";
import {
  ServiceCard,
  ValuePropositionCard,
  ImpactBar,
  TrustedByStrip,
} from "components/services";

const Services = () => {
  const { colorMode } = useColorMode();
  const headingColor = useColorModeValue("gray.800", "white");
  const mainHeadingColor = useColorModeValue("black", "white");
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
              question: "What types of SaaS platforms does Tech Emulsion develop?",
              answer:
                "Tech Emulsion develops various SaaS platforms including customer relationship management (CRM) systems, project management tools, e-commerce platforms, learning management systems, analytics dashboards, and industry-specific solutions.",
            },
            {
              question: "How does Tech Emulsion handle data security and privacy?",
              answer:
                "Tech Emulsion implements enterprise-grade security measures including data encryption, secure authentication systems, regular security audits, and compliance with GDPR and other privacy regulations.",
            },
            {
              question: "What are your AI agent development services?",
              answer:
                "Our AI agent development services include creating intelligent, autonomous AI agents that can perform complex tasks, make decisions, and interact with users naturally.",
            },
            {
              question: "Do you offer workflow automation services?",
              answer:
                "Yes, we provide comprehensive workflow automation services that help streamline your business processes.",
            },
            {
              question: "What QA testing services do you provide?",
              answer:
                "We offer comprehensive QA testing services including functional testing, performance testing, security testing, usability testing, and automated testing.",
            },
            {
              question: "Can you help with Next.js website development?",
              answer:
                "Absolutely! We specialize in Next.js website development, creating high-performance, SEO-friendly websites.",
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

        <Box pt={{ base: 20, md: 24 }} />
        <Container maxW="container.xl" pt={6} pb={20} position="relative" zIndex={1}>
          {/* Breadcrumb */}
          <Flex justify="flex-end" mb={8}>
            <ButtonGroup
              sx={{ bg: "none", fontSize: "1rem", display: "flex", alignItems: "center" }}
            >
              <ButtonLink
                href="/"
                size="lg"
                sx={{ bg: "none", color: textColor, p: 0, "&:hover": { bg: "none", color: headingColor } }}
              >
                Home
              </ButtonLink>
              <Icon as={FaChevronRight} color={textColor} boxSize={4} />
              <Text as="span" ml="2" color={headingColor}>
                Services
              </Text>
            </ButtonGroup>
          </Flex>

          {/* Header section - same layout as portfolio, contact */}
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
            {/* Right: Description + CTA - bottom aligned */}
            <Box
              pl={{ base: 0, md: 6 }}
              py={{ base: 4, md: 8 }}
              display="flex"
              flexDirection="column"
              alignItems={{ base: "flex-start", md: "flex-end" }}
              justifyContent={{ base: "flex-start", md: "flex-end" }}
            >
              <Text
                color={textColor}
                fontSize="16px"
                lineHeight="tall"
                textAlign={{ base: "left", md: "left" }}
                maxW={{ md: "420px" }}
                mb={4}
              >
                We build scalable software, AI-powered solutions, and automation that
                transform your business. From cutting-edge SaaS platforms to intelligent
                agent systems—our expertise delivers results.
              </Text>
            </Box>
          </Box>

          {/* Divider bar - header bottom */}
          <Box
            bg="transparent"
            py={2}
            px={6}
            mx={-6}
            borderTopWidth="1px"
            borderColor={dividerColor}
          />

          {/* Value propositions - same style as Trusted by Leading Brands */}
          <Box py={{ base: 12, md: 16 }}>
            <Box mb={8} maxW="100%" textAlign="center">
              <Heading
                as="h2"
                size="md"
                color={colorMode === "dark" ? "white" : "teal.500"}
                sx={{ textTransform: "uppercase" }}
              >
                How We
              </Heading>
              <Heading
                as="h1"
                mt={2}
                color={mainHeadingColor}
                fontSize={{ base: "2rem", md: "2.5rem" }}
                fontWeight="bold"
              >
                Help You Succeed
              </Heading>
            </Box>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
              {mainValueProps.map((vp, i) => (
                <ValuePropositionCard
                  key={i}
                  title={vp.title}
                  description={vp.description}
                  icon={vp.icon}
                />
              ))}
            </SimpleGrid>
          </Box>

          {/* Impact stats bar - social proof */}
          <Box py={{ base: 8, md: 10 }} mx={-6} px={6}>
            <ImpactBar items={impactStats} />
          </Box>

          {/* Services grid - same layout as home page */}
          <Box py={{ base: 12, md: 16 }}>
            {/* <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color={headingColor}
              mb={8}
            >
              Our Services
            </Heading> */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={0} w="100%">
              {servicesData.map((service, idx) => {
                const len = servicesData.length;
                const lastRowStartMd = 2 * Math.floor((len - 1) / 2);
                const lastRowStartLg = 3 * Math.floor((len - 1) / 3);
                return (
                  <Box
                    key={service.id}
                    py={6}
                    pr={{
                      base: 0,
                      md: idx % 2 === 0 ? 6 : 0,
                      lg: idx % 3 === 0 || idx % 3 === 1 ? 6 : 0,
                    }}
                    pl={{
                      base: 0,
                      md: idx % 2 === 1 ? 6 : 0,
                      lg: idx % 3 === 1 || idx % 3 === 2 ? 6 : 0,
                    }}
                    borderRight={{
                      base: "none",
                      md: idx % 2 === 0 ? "1px solid" : "none",
                      lg: idx % 3 < 2 ? "1px solid" : "none",
                    }}
                    borderBottom={{
                      base: idx < len - 1 ? "1px solid" : "none",
                      md: idx < lastRowStartMd ? "1px solid" : "none",
                      lg: idx < lastRowStartLg ? "1px solid" : "none",
                    }}
                    borderColor={dividerColor}
                    sx={{
                      borderColor: "gray.200 !important",
                      _dark: { borderColor: "gray.600 !important" },
                    }}
                  >
                    <ServiceCard
                      slug={service.slug}
                      title={service.title}
                      shortDescription={service.shortDescription}
                      image={service.image}
                      compact
                    />
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>

          {/* Divider above Trusted by */}
          <Box
            bg="transparent"
            py={2}
            px={6}
            mx={-6}
            borderTopWidth="1px"
            borderColor={dividerColor}
          />

          {/* Trusted by strip (moved below services grid) */}
          <Box py={{ base: 8, md: 10 }}>
            <TrustedByStrip />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Services;
