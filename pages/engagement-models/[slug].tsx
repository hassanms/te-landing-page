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
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ButtonLink } from "components/button-link";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { FaChevronRight, FaPlus, FaMinus } from "react-icons/fa";
import {
  engagementModelsData,
  type EngagementModelItem,
} from "data/engagement-models";
import { getEngagementModelContent } from "data/engagement-model-content";
import { TableOfContents } from "components/engagement-models/table-of-contents";
import NextLink from "next/link";

interface EngagementModelPageProps {
  model: EngagementModelItem;
}

const EngagementModelPage = ({ model }: EngagementModelPageProps) => {
  const { colorMode } = useColorMode();
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const dividerColor = useColorModeValue("gray.200", "gray.600");
  const bgColor = useColorModeValue("white", "charcoal.800");
  const sectionBg = useColorModeValue("gray.50", "charcoal.900");
  const accentColor = useColorModeValue("teal.500", "pearlAqua.500");

  const heroTitle = model.heroTitle ?? model.title;
  const heroDescription =
    model.heroDescription ??
    `Tech Emulsion delivers ${model.title.toLowerCase()} to help you scale and succeed. Get in touch to discuss how we can support your goals.`;
  const heroParagraphs = heroDescription.split(/\n\n+/);

  const content = getEngagementModelContent(model.slug);
  const hasFullContent = !!content;

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
    <Box
      position="relative"
      minH="100vh"
      color={headingColor}
      bg={hasFullContent ? bgColor : undefined}
    >
      <EnhancedSEO
        title={`${model.title} | Tech Emulsion`}
        description={
          model.heroDescription
            ? model.heroDescription.replace(/\n\n+/g, " ").slice(0, 160) + "..."
            : `Tech Emulsion offers ${model.title.toLowerCase()} as part of our engagement models. Find the right way to work with us.`
        }
        pageType="about"
        canonicalUrl={`https://techemulsion.com/engagement-models/${model.slug}`}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Engagement models", url: "https://techemulsion.com/engagement-models" },
            {
              name: model.title,
              url: `https://techemulsion.com/engagement-models/${model.slug}`,
            },
          ],
        }}
      />

      {!hasFullContent && (
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
      )}

      <Box pt={{ base: 20, md: 24 }} />
      <Container
        maxW={hasFullContent ? "container.xl" : "container.xl"}
        pt={6}
        pb={hasFullContent ? 0 : 20}
        position="relative"
        zIndex={1}
      >
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
            <ButtonLink
              href="/engagement-models"
              size="lg"
              sx={{ bg: "none", color: textColor, p: 0, "&:hover": { bg: "none", color: headingColor } }}
            >
              Engagement models
            </ButtonLink>
            <Icon as={FaChevronRight} color={textColor} boxSize={4} />
            <Text as="span" ml="2" color={headingColor}>
              {model.title}
            </Text>
          </ButtonGroup>
        </Flex>

        {/* Header section - two column */}
        <Box
          minH={{ base: "280px", md: "35vh" }}
          display={{ base: "block", md: "grid" }}
          gridTemplateColumns={{ md: "1fr 1fr" }}
          borderTopWidth="1px"
          borderColor={dividerColor}
          mx={-6}
          px={6}
        >
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
              {heroTitle}
            </Heading>
          </Box>
          <Box
            pl={{ base: 0, md: 6 }}
            py={{ base: 4, md: 8 }}
            display="flex"
            flexDirection="column"
            alignItems={{ base: "flex-start", md: "flex-end" }}
            justifyContent={{ base: "flex-start", md: "flex-end" }}
          >
            <Box maxW={{ md: "420px" }}>
              {heroParagraphs.map((paragraph, i) => (
                <Text
                  key={i}
                  color={textColor}
                  fontSize="16px"
                  lineHeight="tall"
                  textAlign="left"
                  mb={i < heroParagraphs.length - 1 ? 4 : 0}
                >
                  {paragraph}
                </Text>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          bg="transparent"
          py={2}
          px={6}
          mx={-6}
          borderTopWidth="1px"
          borderColor={dividerColor}
        />

        {!hasFullContent && (
          <Box pt={8}>
            <ButtonLink href="/contact" colorScheme="teal" size="lg">
              Get a Quote
            </ButtonLink>
          </Box>
        )}
      </Container>

      {/* Full content sections for ai-enabled-teams */}
      {content && (
        <>
          {/* Table of contents - first section after header, width aligned with header divider */}
          <Box bg={sectionBg} py={{ base: 12, md: 16 }} {...sectionStyles}>
            <Box {...patternOverlay} opacity={0.3} />
            <Container maxW="container.xl" px={6} position="relative" zIndex={1}>
              <TableOfContents
                leftColumn={[
                  { label: "Our approach to AI", href: "#our-approach" },
                  { label: "Our AI-powered development teams", href: "#the-model" },
                  { label: "What makes AI-enabled teams special", href: "#what-makes-special" },
                  { label: "AI's role across SDLC", href: "#sdlc" },
                  { label: "Tracked gains across our internal projects", href: "#client-outcomes" },
                ]}
                rightColumn={[
                  { label: "Our AI software development tools", href: "#ai-tools" },
                  { label: "Our AI projects", href: "/portfolio", external: true },
                  { label: "Testimonials", href: "/#social", external: true },
                  { label: "About Tech Emulsion", href: "#why-tech-emulsion" },
                  { label: "FAQs", href: "#faqs" },
                ]}
                sectionBg={sectionBg}
                dividerColor={dividerColor}
                accentColor={accentColor}
                headingColor={headingColor}
                textColor={textColor}
              />
            </Container>
          </Box>

          {/* You will feel safe and empowered */}
          <Box id="our-approach" bg={bgColor} py={{ base: 20, md: 24 }} {...sectionStyles}>
            <Box {...patternOverlay} opacity={0.3} />
            <Container maxW="6xl" position="relative" zIndex={1}>
              <Text
                fontSize="xs"
                color={accentColor}
                mb={4}
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                Our approach
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1"
                mb={6}
              >
                You will feel safe and empowered with us. Here&apos;s why
              </Heading>
              <Text color={textColor} fontSize="16px" lineHeight="1.8" mb={8} maxW="3xl">
                {content.safeAndEmpowered.intro}
              </Text>
              <Box as="ul" mb={8} pl={6} maxW="3xl">
                {content.safeAndEmpowered.bullets.map((bullet, i) => (
                  <Text
                    key={i}
                    as="li"
                    color={textColor}
                    fontSize="16px"
                    lineHeight="1.8"
                    mb={3}
                  >
                    {bullet}
                  </Text>
                ))}
              </Box>
              <Text color={textColor} fontSize="16px" lineHeight="1.8" maxW="3xl">
                {content.safeAndEmpowered.closing}
              </Text>
            </Container>
          </Box>

          {/* Everything you need to know */}
          <Box id="the-model" bg={bgColor} py={{ base: 20, md: 24 }} {...sectionStyles}>
            <Box {...patternOverlay} />
            <Container maxW="6xl" position="relative" zIndex={1}>
              <Text
                fontSize="xs"
                color={accentColor}
                mb={4}
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                The model
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1"
                mb={6}
              >
                AI-enabled development teams: Everything you need to know
              </Heading>
              <Text color={textColor} fontSize="16px" lineHeight="1.8" mb={8} maxW="3xl">
                {content.everythingYouNeedToKnow.intro}
              </Text>
              <Box as="ul" pl={6} maxW="3xl" mb={8}>
                {content.everythingYouNeedToKnow.researchBullets.map((item, i) => (
                  <Text key={i} as="li" color={textColor} fontSize="16px" lineHeight="1.8" mb={3}>
                    <strong>{item.cite}:</strong> {item.text}
                  </Text>
                ))}
              </Box>
              <Text color={textColor} fontSize="16px" lineHeight="1.8" maxW="3xl">
                With great AI comes great responsibility, and Tech Emulsion takes that responsibility
                seriously.
              </Text>
            </Container>
          </Box>

          {/* What makes AI-powered teams special */}
          <Box id="what-makes-special" bg={sectionBg} py={{ base: 20, md: 24 }} {...sectionStyles}>
            <Box {...patternOverlay} opacity={0.3} />
            <Container maxW="6xl" position="relative" zIndex={1}>
              <Text
                fontSize="xs"
                color={accentColor}
                mb={4}
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                Why choose us
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
                What makes AI-powered teams special
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {content.whatMakesSpecial.map((item, i) => (
                  <Box
                    key={i}
                    p={8}
                    bg={bgColor}
                    borderRadius="lg"
                    borderWidth="1px"
                    borderColor={dividerColor}
                  >
                    <Heading as="h3" size="md" color={headingColor} fontWeight="bold" mb={3}>
                      {item.title}
                    </Heading>
                    <Text color={textColor} fontSize="16px" lineHeight="1.7">
                      {item.description}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Container>
          </Box>

          {/* CTA 1 */}
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
              <VStack spacing={6} textAlign="center" maxW="3xl" mx="auto">
                <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold">
                  {content.ctaBlocks[0].title}
                </Heading>
                <Text fontSize="16px" opacity={0.95}>
                  {content.ctaBlocks[0].subtitle}
                </Text>
                <ButtonLink
                  href="/contact"
                  size="lg"
                  bg="white"
                  color="teal.500"
                  _hover={{ bg: "whiteAlpha.900" }}
                  px={8}
                  py={6}
                  fontWeight="bold"
                  boxShadow="xl"
                >
                  {content.ctaBlocks[0].buttonText}
                </ButtonLink>
              </VStack>
            </Container>
          </Box>

          {/* Where AI adds value across the SDLC */}
          <Box id="sdlc" bg={bgColor} py={{ base: 20, md: 24 }} {...sectionStyles}>
            <Box {...patternOverlay} />
            <Container maxW="6xl" position="relative" zIndex={1}>
              <Text
                fontSize="xs"
                color={accentColor}
                mb={4}
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                Software development lifecycle
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
                Where AI adds value across the SDLC
              </Heading>
              <VStack align="stretch" spacing={10}>
                {content.sdlcPhases.map((phase, i) => (
                  <Box
                    key={i}
                    p={8}
                    bg={sectionBg}
                    borderRadius="lg"
                    borderWidth="1px"
                    borderColor={dividerColor}
                  >
                    <HStack align="center" mb={4} gap={4}>
                      <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color={accentColor}
                        minW="48px"
                      >
                        {phase.number}
                      </Text>
                      <Heading as="h3" size="md" color={headingColor}>
                        {phase.title}
                      </Heading>
                    </HStack>
                    <Box as="ul" pl={6}>
                      {phase.bullets.map((bullet, j) => (
                        <Text
                          key={j}
                          as="li"
                          color={textColor}
                          fontSize="16px"
                          lineHeight="1.7"
                          mb={2}
                        >
                          {bullet}
                        </Text>
                      ))}
                    </Box>
                  </Box>
                ))}
              </VStack>
            </Container>
          </Box>

          {/* Client outcomes */}
          <Box id="client-outcomes" bg={sectionBg} py={{ base: 20, md: 24 }} {...sectionStyles}>
            <Box {...patternOverlay} opacity={0.3} />
            <Container maxW="6xl" position="relative" zIndex={1}>
              <Text
                fontSize="xs"
                color={accentColor}
                mb={4}
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                Tracked results
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
                Client outcomes powered by AI-enabled teams
              </Heading>
              <Text color={textColor} fontSize="16px" mb={12} maxW="2xl">
                We&apos;ve tracked use cases across delivery and documented the results. The
                examples below show how AI translates into tangible time savings and measurable
                efficiency gains.
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
                {content.outcomes.map((row, i) => (
                  <Box
                    key={i}
                    p={6}
                    bg={bgColor}
                    borderRadius="lg"
                    borderWidth="1px"
                    borderColor={dividerColor}
                  >
                    <Heading as="h3" size="sm" color={headingColor} mb={4} fontWeight="semibold">
                      {row.task}
                    </Heading>
                    <HStack justify="space-between" mb={2} flexWrap="wrap" gap={2}>
                      <Text color={textColor} fontSize="sm">
                        Before: {row.before}
                      </Text>
                      <Text color={textColor} fontSize="sm">
                        With AI: {row.after}
                      </Text>
                    </HStack>
                    <Text color={accentColor} fontWeight="bold" fontSize="lg">
                      Time savings: {row.savings}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
              <Text color={textColor} fontSize="16px" mt={8} maxW="2xl">
                Our experience shows that AI cuts minutes and hours from individual tasks, and at
                scale, entire days fall off delivery cycles. We work with you to set the right KPIs
                for your project and track every result transparently.
              </Text>
            </Container>
          </Box>

          {/* CTA 2 */}
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
              <VStack spacing={6} textAlign="center" maxW="3xl" mx="auto">
                <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold">
                  {content.ctaBlocks[1].title}
                </Heading>
                <Text fontSize="16px" opacity={0.95}>
                  {content.ctaBlocks[1].subtitle}
                </Text>
                <ButtonLink
                  href="/contact"
                  size="lg"
                  bg="white"
                  color="teal.500"
                  _hover={{ bg: "whiteAlpha.900" }}
                  px={8}
                  py={6}
                  fontWeight="bold"
                  boxShadow="xl"
                >
                  {content.ctaBlocks[1].buttonText}
                </ButtonLink>
              </VStack>
            </Container>
          </Box>

          {/* AI tools */}
          <Box id="ai-tools" bg={bgColor} py={{ base: 20, md: 24 }} {...sectionStyles}>
            <Box {...patternOverlay} />
            <Container maxW="6xl" position="relative" zIndex={1}>
              <Text
                fontSize="xs"
                color={accentColor}
                mb={4}
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                Tooling
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
                AI tools to power your development lifecycle
              </Heading>
              <Text color={textColor} fontSize="16px" mb={12} maxW="2xl">
                We work with a curated set of AI products trusted across industries. If your team
                already has preferred platforms, we integrate them seamlessly—secure, scalable, and
                built to deliver peace of mind at every step.
              </Text>
              <Flex flexWrap="wrap" gap={3}>
                {content.tools.map((tool, i) => (
                  <Box
                    key={i}
                    px={5}
                    py={3}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={dividerColor}
                    bg={sectionBg}
                  >
                    <Text color={headingColor} fontWeight="medium" fontSize="sm">
                      {tool}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Container>
          </Box>

          {/* Stats */}
          <Box id="why-tech-emulsion" bg={sectionBg} py={{ base: 20, md: 24 }} {...sectionStyles}>
            <Box {...patternOverlay} opacity={0.3} />
            <Container maxW="6xl" position="relative" zIndex={1}>
              <Text
                fontSize="xs"
                color={accentColor}
                mb={4}
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                Why Tech Emulsion
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
                What makes Tech Emulsion your reliable AI-powered development partner?
              </Heading>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
                {content.stats.map((stat, i) => (
                  <Box key={i} textAlign="center">
                    <Text
                      fontSize={{ base: "3xl", md: "4xl" }}
                      fontWeight="bold"
                      color={accentColor}
                      mb={2}
                    >
                      {stat.value}
                    </Text>
                    <Text color={textColor} fontSize="16px">
                      {stat.label}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Container>
          </Box>

          {/* FAQs */}
          <Box id="faqs" bg={bgColor} py={{ base: 20, md: 24 }} {...sectionStyles}>
            <Box {...patternOverlay} />
            <Container maxW="6xl" position="relative" zIndex={1}>
              <Text
                fontSize="xs"
                color={accentColor}
                mb={4}
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                Support
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
                FAQs
              </Heading>
              <Accordion allowMultiple>
                <VStack align="stretch" spacing={4}>
                  {content.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      borderRadius="lg"
                      bg={sectionBg}
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
                        <Box
                          flex="1"
                          fontWeight="semibold"
                          color={headingColor}
                          pr={4}
                          fontSize="16px"
                        >
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
                      <AccordionPanel
                        px={6}
                        pb={6}
                        pt={0}
                        color={textColor}
                        fontSize="16px"
                        lineHeight="1.7"
                      >
                        {faq.answer}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </VStack>
              </Accordion>
            </Container>
          </Box>

          {/* Final CTA */}
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
                  Ready to transform your delivery?
                </Heading>
                <Text fontSize="16px" opacity={0.95}>
                  Schedule a free discovery call with our experts to discuss your project.
                </Text>
                <HStack spacing={4} flexWrap="wrap" justify="center" pt={4}>
                  <Button
                    as="a"
                    href="https://calendly.com/hassanms/discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
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
                  <ButtonLink
                    href="/engagement-models"
                    size="lg"
                    variant="outline"
                    borderColor="white"
                    borderWidth="2px"
                    color="white"
                    _hover={{ bg: "whiteAlpha.200" }}
                    px={8}
                    py={6}
                    fontWeight="bold"
                  >
                    View all engagement models
                  </ButtonLink>
                </HStack>
              </VStack>
            </Container>
          </Box>
        </>
      )}
    </Box>
  );
};

export default EngagementModelPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = engagementModelsData.map((model) => ({
    params: { slug: model.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<EngagementModelPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const model = engagementModelsData.find((m) => m.slug === slug);
  if (!model) return { notFound: true };
  return { props: { model } };
};
