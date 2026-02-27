import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { GetStaticPaths, GetStaticProps } from "next";
import { ButtonLink } from "components/button-link";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { FaChevronRight } from "react-icons/fa";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  type ServiceData,
} from "data/services";
import { getServiceIcon } from "components/services/icon-map";
import { ValuePropositionCard } from "components/services";

interface ServicePageProps {
  service: ServiceData;
}

const ServiceSubpage = ({ service }: ServicePageProps) => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "charcoal.800");
  const sectionBg = useColorModeValue("gray.50", "charcoal.900");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const headingColor = useColorModeValue("gray.900", "white");
  const accentColor = useColorModeValue("teal.500", "pearlAqua.500");
  const dividerColor = useColorModeValue("gray.200", "gray.700");

  const subtlePattern = useColorModeValue(
    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)",
    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)"
  );

  const sectionStyles = {
    position: "relative" as const,
    _before: {
      content: '""',
      position: "absolute" as const,
      top: 0,
      left: 0,
      right: 0,
      height: "1px",
      bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`,
      opacity: 0.2,
    },
  };

  const patternOverlay = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: subtlePattern,
    backgroundSize: "20px 20px",
    opacity: 0.5,
    pointerEvents: "none" as const,
  };

  return (
    <Box bg={bgColor}>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <EnhancedSEO
        title={`${service.title} - Tech Emulsion`}
        description={service.shortDescription}
        pageType="services"
        serviceData={{
          name: service.title,
          description: service.fullDescription,
          serviceType: "Technology Services",
        }}
        canonicalUrl={`https://techemulsion.com/services/${service.slug}`}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Services", url: "https://techemulsion.com/services" },
            {
              name: service.title,
              url: `https://techemulsion.com/services/${service.slug}`,
            },
          ],
        }}
        faqData={{
          questions: service.faqs.map((f) => ({
            question: f.question,
            answer: f.answer,
          })),
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

      {/* Hero Section */}
      <Box
        position="relative"
        color="white"
        pt={{ base: 20, md: 32 }}
        pb={{ base: 16, md: 24 }}
        overflow="hidden"
        minH={{ base: "420px", md: "500px" }}
      >
        <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient={
              colorMode === "dark"
                ? "linear(to-b, rgba(0,0,0,0.7), rgba(0,0,0,0.9))"
                : "linear(to-b, rgba(0,0,0,0.6), rgba(0,0,0,0.85))"
            }
          />
        </Box>

        <Container maxW="container.xl" position="relative" zIndex={1}>
          <Box mb={8} display="flex" justifyContent="flex-end" w="full">
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
                  color: "white",
                  p: 0,
                  "&:hover": { bg: "none", color: "whiteAlpha.900" },
                }}
              >
                Home
              </ButtonLink>
              <Icon as={FaChevronRight} color="white" boxSize={4} />
              <ButtonLink
                href="/services"
                size="lg"
                sx={{
                  bg: "none",
                  color: "white",
                  p: 0,
                  "&:hover": { bg: "none", color: "whiteAlpha.900" },
                }}
              >
                Services
              </ButtonLink>
              <Icon as={FaChevronRight} color="white" boxSize={4} />
              <Text as="span" ml="2" color="white">
                {service.title}
              </Text>
            </ButtonGroup>
          </Box>

          <VStack align="start" spacing={6} maxW="4xl">
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
              fontWeight="bold"
              lineHeight="1.1"
              color="white"
            >
              {service.title}
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="rgba(255,255,255,0.9)"
              lineHeight="1.7"
            >
              {service.fullDescription}
            </Text>
            <Button
              as="a"
              href="https://calendly.com/hassanms/discovery-call"
              target="_blank"
              size="lg"
              bg="teal.500"
              color="white"
              _hover={{ bg: "teal.600" }}
              rightIcon={<FaChevronRight />}
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="bold"
              boxShadow="xl"
            >
              Schedule a Discovery Call
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Value Props */}
      <Box bg={bgColor} py={{ base: 12, md: 16 }} {...sectionStyles}>
        <Box {...patternOverlay} />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Heading
            as="h2"
            size="md"
            fontWeight="bold"
            color={colorMode === "dark" ? "white" : "teal.500"}
            mb={8}
            sx={{ textTransform: "uppercase" }}
          >
            How We Help You Succeed
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
            {service.valueProps.map((vp, i) => (
              <ValuePropositionCard
                key={i}
                title={vp.title}
                description={vp.description}
                icon={vp.icon}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Service Offerings - portfolio-style section heading */}
      <Box bg={sectionBg} py={{ base: 20, md: 24 }} {...sectionStyles}>
        <Box {...patternOverlay} opacity={0.3} />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={12}
          >
            What We Deliver
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {service.offerings.map((off, i) => {
              const IconComponent = getServiceIcon(off.icon);
              return (
                <HStack key={i} align="flex-start" spacing={6} p={6} bg={bgColor} borderRadius="lg">
                  <Icon as={IconComponent} boxSize={10} color={accentColor} flexShrink={0} />
                  <VStack align="start" spacing={2}>
                    <Heading as="h3" size="md" color={headingColor}>
                      {off.title}
                    </Heading>
                    <Text color={textColor} fontSize="md" lineHeight="1.6">
                      {off.description}
                    </Text>
                  </VStack>
                </HStack>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Industries (optional) */}
      {service.industries && service.industries.length > 0 && (
        <Box bg={bgColor} py={{ base: 20, md: 24 }} {...sectionStyles}>
          <Box {...patternOverlay} />
          <Container maxW="6xl" position="relative" zIndex={1}>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1"
              mb={12}
            >
              Industries We Serve
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {service.industries.map((ind, i) => (
                <Box key={i} p={6} borderWidth="1px" borderColor={dividerColor} borderRadius="lg">
                  <Heading as="h3" size="sm" color={accentColor} mb={2}>
                    {ind.name}
                  </Heading>
                  <Text color={textColor} fontSize="sm" lineHeight="1.6">
                    {ind.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      )}

      {/* Why Choose Us - Benefits */}
      <Box bg={sectionBg} py={{ base: 20, md: 24 }} {...sectionStyles}>
        <Box {...patternOverlay} opacity={0.3} />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={4}
          >
            Why Partner with Tech Emulsion
          </Heading>
          <Text color={textColor} maxW="2xl" mb={12}>
            Our services augment your business with unparalleled expertise. Here&apos;s what you get:
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {service.benefits.map((b, i) => (
              <VStack key={i} align="start" spacing={3} p={6} bg={bgColor} borderRadius="lg">
                <Heading as="h3" size="sm" color={accentColor}>
                  {b.title}
                </Heading>
                <Text color={textColor} fontSize="md" lineHeight="1.6">
                  {b.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ */}
      <Box bg={bgColor} py={{ base: 20, md: 24 }} {...sectionStyles}>
        <Box {...patternOverlay} />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={12}
          >
            Frequently Asked Questions
          </Heading>
          <Accordion allowMultiple>
            {service.faqs.map((faq, i) => (
              <AccordionItem key={i} borderColor={dividerColor}>
                <AccordionButton py={6} _expanded={{ color: accentColor }}>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={6} color={textColor} lineHeight="1.7">
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        bgGradient={
          colorMode === "dark"
            ? "linear(to-r, teal.600, teal.800)"
            : "linear(to-r, teal.500, teal.600)"
        }
        py={{ base: 16, md: 20 }}
        color="white"
      >
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center" maxW="3xl" mx="auto">
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold">
              Ready to Transform Your Business?
            </Heading>
            <Text fontSize="lg" opacity={0.95}>
              Schedule a free discovery call with our experts to discuss your project.
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center" pt={4}>
              <Button
                as="a"
                href="https://calendly.com/hassanms/discovery-call"
                target="_blank"
                size="lg"
                bg="white"
                color="teal.500"
                _hover={{ bg: "whiteAlpha.900" }}
                rightIcon={<FaChevronRight />}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                boxShadow="xl"
              >
                Schedule a Call
              </Button>
              <Button
                as="a"
                href="/services"
                size="lg"
                variant="outline"
                borderColor="white"
                borderWidth="2px"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
              >
                View All Services
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllServiceSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ServicePageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { notFound: true };
  }
  return { props: { service } };
};

export default ServiceSubpage;
