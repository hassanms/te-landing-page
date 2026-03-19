import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ButtonLink } from "components/button-link";
import Contact from "components/Contact";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Contacts = () => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const dividerColor = useColorModeValue("gray.200", "gray.600");
  return (
    <Box id="services">
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <EnhancedSEO
        title="Contact Tech Emulsion | Get a Free Discovery Call"
        description="Get in touch with Tech Emulsion for AI development, SaaS, and software outsourcing. US and Pakistan teams available. Book a free discovery call today."
        pageType="contact"
        canonicalUrl="https://techemulsion.com/contact"
        ogImage="/assets/logo/logo-light.png"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Contact", url: "https://techemulsion.com/contact" },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "How can I contact Tech Emulsion?",
              answer:
                "You can contact Tech Emulsion through our contact page, email us at info@techemulsion.com, or schedule a discovery call via our Calendly widget. We're available to discuss your project needs and answer any questions.",
            },
            {
              question: "What information should I provide when contacting Tech Emulsion?",
              answer:
                "When contacting us, please provide details about your project requirements, timeline, budget, and any specific technologies or features you need. This helps us prepare a tailored proposal for your project.",
            },
            {
              question: "Do you offer free consultations?",
              answer:
                "Yes, Tech Emulsion offers free discovery calls to discuss your project needs, understand your requirements, and provide initial guidance on how we can help with your digital transformation journey.",
            },
          ],
        }}
      />
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            name: "Tech Emulsion LLC",
            url: "https://techemulsion.com",
            logo: "https://techemulsion.com/assets/logo/logo-light.png",
            image: "https://techemulsion.com/assets/logo/logo-light.png",
            description:
              "Tech Emulsion is a US-based generative AI development company offering AI agents, SaaS development, DevOps, and custom software solutions. Serving clients across the United States and worldwide.",
            telephone: "+1-850-930-7798",
            email: "contact@techemulsion.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1021 E Lincolnway, Unit #1373",
              addressLocality: "Cheyenne",
              addressRegion: "WY",
              postalCode: "82001",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 41.14,
              longitude: -104.8202,
            },
            hasMap:
              "https://maps.google.com/?q=1021+E+Lincolnway+Cheyenne+WY+82001",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+1-850-930-7798",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "English",
                contactOption: "TollFree",
              },
              {
                "@type": "ContactPoint",
                telephone: "+92-334-555-9140",
                contactType: "customer service",
                areaServed: "PK",
                availableLanguage: ["English", "Urdu"],
              },
            ],
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Pakistan" },
              { "@type": "AdministrativeArea", name: "Worldwide" },
            ],
            priceRange: "$$",
            currenciesAccepted: "USD",
            paymentAccepted: "Bank Transfer, Credit Card, PayPal",
            sameAs: [
              "https://www.linkedin.com/company/tech-emulsion/",
              "https://www.upwork.com/agencies/techemulsion/",
              "https://www.youtube.com/@TechEmulsion",
              "https://github.com/Tech-Emulsion",
              "https://www.facebook.com/profile.php?id=100092936174663",
            ],
            knowsAbout: [
              "Generative AI Development",
              "AI Agent Engineering",
              "SaaS Development",
              "Next.js Development",
              "DevOps",
              "QA Automation",
              "Workflow Automation",
              "Chrome Extension Development",
            ],
            founder: {
              "@type": "Person",
              name: "Zain Ul Abideen",
              jobTitle: "Co-Founder & CTO",
            },
          }),
        }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          Calendly.initBadgeWidget({
            url: "https://calendly.com/hassanms/discovery-call",
            text: "Talk to Us",
            color: "#004c4c",
            textColor: "#ffffff",
          });
        }}
      />
      <Box position="relative" minH="100vh" color={headingColor}>
        {/* Full-page gradient - same as portfolio, blog, services, careers */}
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

        {/* Top margin - clear fixed navbar */}
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
                Contact
              </Text>
            </ButtonGroup>
          </Flex>

          {/* Header section - same layout as portfolio, blog, services, careers */}
          <Box
            minH={{ base: "280px", md: "35vh" }}
            display={{ base: "block", md: "grid" }}
            gridTemplateColumns={{ md: "1fr 1fr" }}
            borderTopWidth={{ base: 0, md: "1px" }}
            borderColor={dividerColor}
            mx={-6}
            px={6}
          >
            {/* Left: Heading - top aligned */}
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
                Get in touch
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
                Whether you&apos;re looking for innovative software solutions,
                need to scale your development team, or want to discuss your next
                big project, we&apos;d love to hear from you! At Tech Emulsion, we
                are dedicated to delivering exceptional results in web
                development, SaaS solutions, Chrome extensions, QA testing, cloud
                services, and artificial intelligence.
              </Text>
            </Box>
          </Box>

          {/* Divider bar - matches portfolio, blog, services, careers */}
          <Box
            bg="transparent"
            py={2}
            px={6}
            mx={-6}
            borderTopWidth="1px"
            borderColor={dividerColor}
          />

          <Contact />
        </Container>
      </Box>
    </Box>
  );
};

export default Contacts;
