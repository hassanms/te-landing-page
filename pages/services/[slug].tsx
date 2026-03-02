import {
  Box,
  Button,
  ButtonGroup,
  Container,
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
import { FaChevronRight, FaPlus, FaMinus } from "react-icons/fa";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  type ServiceData,
} from "data/services";
import { getServiceIcon } from "components/services/icon-map";

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

      {/* Hero Section - portfolio style */}
      <Box
        position="relative"
        color="white"
        pt={{ base: 20, md: 32 }}
        pb={{ base: 16, md: 24 }}
        overflow="hidden"
        minH={{ base: "500px", md: "600px" }}
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
              fontSize="16px"
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
      <Box bg={sectionBg} py={{ base: 20, md: 24 }} {...sectionStyles}>
        <Box {...patternOverlay} opacity={0.3} />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Text fontSize="xs" color={accentColor} mb={4} fontWeight="bold" letterSpacing="wider" textTransform="uppercase">
            Value Proposition
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={12}
          >
            How We Help You Succeed
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {service.valueProps.map((vp, i) => (
              <Box
                key={i}
                p={8}
                bg={bgColor}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={dividerColor}
              >
                <Heading as="h3" size="md" color={headingColor} fontWeight="bold" mb={3}>
                  {vp.title}
                </Heading>
                <Text color={textColor} fontSize="16px" lineHeight="1.7">
                  {vp.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Service Offerings */}
      <Box bg={bgColor} py={{ base: 20, md: 24 }} {...sectionStyles}>
        <Box {...patternOverlay} />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Text fontSize="xs" color={accentColor} mb={4} fontWeight="bold" letterSpacing="wider" textTransform="uppercase">
            Deliverables
          </Text>
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
                <HStack key={i} align="flex-start" spacing={6} p={6} bg={sectionBg} borderRadius="lg">
                  <Icon as={IconComponent} boxSize={10} color={accentColor} flexShrink={0} />
                  <VStack align="start" spacing={2}>
                    <Heading as="h3" size="md" color={headingColor}>
                      {off.title}
                    </Heading>
                    <Text color={textColor} fontSize="16px" lineHeight="1.6">
                      {off.description}
                    </Text>
                  </VStack>
                </HStack>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Industries - 3-col grid, icon cards with shadow */}
      {service.industries && service.industries.length > 0 && (
        <Box bg={sectionBg} py={{ base: 20, md: 24 }} {...sectionStyles}>
          <Box {...patternOverlay} opacity={0.3} />
          <Container maxW="6xl" position="relative" zIndex={1}>
            <Text fontSize="xs" color={accentColor} mb={4} fontWeight="bold" letterSpacing="wider" textTransform="uppercase">
              Industries
            </Text>
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
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {service.industries.map((ind, i) => {
                const IconComponent = getServiceIcon(ind.icon);
                return (
                  <Box
                    key={i}
                    p={6}
                    bg={bgColor}
                    borderRadius="lg"
                    boxShadow="md"
                    borderWidth="1px"
                    borderColor={dividerColor}
                  >
                    <HStack align="flex-start" spacing={4} mb={3}>
                      <Icon as={IconComponent} boxSize={6} color={accentColor} flexShrink={0} mt={0.5} />
                      <Heading as="h3" size="md" color={headingColor} fontWeight="bold">
                        {ind.name}
                      </Heading>
                    </HStack>
                    <Text color={textColor} fontSize="16px" lineHeight="1.6">
                      {ind.description}
                    </Text>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Container>
        </Box>
      )}

      {/* Benefits - 3x2 icon cards */}
      <Box bg={bgColor} py={{ base: 20, md: 24 }} {...sectionStyles}>
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Text fontSize="xs" color={accentColor} mb={4} fontWeight="bold" letterSpacing="wider" textTransform="uppercase">
            Why Choose Us
          </Text>
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
          <Text color={textColor} fontSize="16px" maxW="2xl" mb={12} lineHeight="1.8">
            Our services augment your business with unparalleled expertise. Unveil hallmarks that you&apos;ll get working with us:
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {service.benefits.map((b, i) => {
              const IconComponent = getServiceIcon(b.icon);
              return (
                <Box key={i} textAlign="center">
                  <Box
                    w={14}
                    h={14}
                    borderRadius="full"
                    bg={sectionBg}
                    borderWidth="1px"
                    borderColor={dividerColor}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={4}
                    mx="auto"
                  >
                    <Icon as={IconComponent} boxSize={7} color={headingColor} />
                  </Box>
                  <Heading as="h3" size="md" color={headingColor} fontWeight="bold" mb={2}>
                    {b.title}
                  </Heading>
                  <Text color={textColor} fontSize="16px" lineHeight="1.6">
                    {b.description}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ - Card grid layout with plus icon, accordion on click */}
      <Box bg={sectionBg} py={{ base: 20, md: 24 }} {...sectionStyles}>
        <Box {...patternOverlay} />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Text fontSize="xs" color={accentColor} mb={4} fontWeight="bold" letterSpacing="wider" textTransform="uppercase">
            Support
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={4}
          >
            Frequently Asked Questions
          </Heading>
          <Text color={textColor} fontSize="16px" mb={12}>
            Let&apos;s Explore Your Most Pressing Questions!
          </Text>
          <Accordion allowMultiple>
            <Box
              display="grid"
              gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              {service.faqs.map((faq, i) => {
                const isLastOdd =
                  i === service.faqs.length - 1 && service.faqs.length % 2 === 1;
                return (
                  <Box
                    key={i}
                    gridColumn={isLastOdd ? { base: "1", md: "1 / -1" } : undefined}
                    justifySelf={isLastOdd ? "center" : undefined}
                    maxW={isLastOdd ? { base: "100%", md: "50%" } : undefined}
                  >
                    <AccordionItem
                      borderRadius="lg"
                      bg={bgColor}
                      boxShadow="sm"
                      borderWidth="1px"
                      borderColor={dividerColor}
                      overflow="hidden"
                      _focusWithin={{ boxShadow: "md" }}
                    >
                      <AccordionButton
                        py={6}
                        px={6}
                        textAlign="left"
                        _expanded={{ color: accentColor }}
                        sx={{
                          "&[data-expanded] .icon-plus": { display: "none" },
                          "&[data-expanded] .icon-minus": { display: "block" },
                          "&:not([data-expanded]) .icon-plus": { display: "block" },
                          "&:not([data-expanded]) .icon-minus": { display: "none" },
                        }}
                      >
                        <Box flex="1" fontWeight="semibold" color={headingColor} pr={4} fontSize="16px">
                          {faq.question}
                        </Box>
                        <Icon
                          as={FaPlus}
                          className="icon-plus"
                          boxSize={5}
                          color={accentColor}
                          flexShrink={0}
                        />
                        <Icon
                          as={FaMinus}
                          className="icon-minus"
                          boxSize={5}
                          color={accentColor}
                          flexShrink={0}
                          display="none"
                        />
                      </AccordionButton>
                      <AccordionPanel px={6} pb={6} pt={0} color={textColor} fontSize="16px" lineHeight="1.7">
                        {faq.answer}
                      </AccordionPanel>
                    </AccordionItem>
                  </Box>
                );
              })}
            </Box>
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
            <Text fontSize="16px" opacity={0.95}>
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
