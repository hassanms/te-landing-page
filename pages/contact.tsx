import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
  VStack,
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
  return (
    <Box id="services">
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <EnhancedSEO
        title="Contact Us - Tech Emulsion"
        description="Get in touch with Tech Emulsion for your next project. We specialize in web development, SaaS solutions, Chrome extensions, QA testing, cloud services, and artificial intelligence."
        pageType="contact"
        canonicalUrl="https://techemulsion.com/contact"
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
      <Container maxW="container.xl" py="20">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Box
          display={{ base: "block", md: "flex" }}
          px="15"
          mt={10}
          justifyContent={"space-between"}
          mb={10}>
          <Box>
            <Heading as="h2" size="lg">
              Contact Page
            </Heading>
            <Text
              color={textColor}
              fontSize="lg"
              mt="4"
              width={["auto", null, "80%"]}>
              Whether you&apos;re looking for innovative software solutions,
              need to scale your development team, or want to discuss your next
              big project, we&apos;d love to hear from you! At Tech Emulsion, we
              are dedicated to delivering exceptional results in web
              development, SaaS solutions, Chrome extensions, QA testing, cloud
              services, and artificial intelligence.
            </Text>
          </Box>

          {/* Breadcrumb - matches portfolio style */}
          <Flex justify="flex-end" mt="4">
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
        </Box>
        <Contact />
      </Container>
    </Box>
  );
};

export default Contacts;
