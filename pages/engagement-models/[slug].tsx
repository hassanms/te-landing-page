import React, { useState } from "react";
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
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  useColorMode,
  useColorModeValue,
  Collapse,
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
import { FaChevronRight, FaPlus, FaMinus, FaStar, FaComments, FaGem, FaCheck, FaShieldAlt } from "react-icons/fa";
import {
  engagementModelsData,
  type EngagementModelItem,
} from "data/engagement-models";
import { getEngagementModelContent } from "data/engagement-model-content";
import { TableOfContents } from "components/engagement-models/table-of-contents";
import NextLink from "next/link";
import Image from "next/image";

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
  const sdlcHighlightBg = useColorModeValue("teal.50", "teal.900");

  const heroTitle = model.heroTitle ?? model.title;
  const heroDescription =
    model.heroDescription ??
    `Tech Emulsion delivers ${model.title.toLowerCase()} to help you scale and succeed. Get in touch to discuss how we can support your goals.`;
  const heroParagraphs = heroDescription.split(/\n\n+/);

  const content = getEngagementModelContent(model.slug);
  const hasFullContent = !!content;
  const [activeSdlcPhase, setActiveSdlcPhase] = useState(
    content?.sdlcPhases?.[0]?.number ?? null
  );

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
      bg="transparent"
    >
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

      <Box pt={{ base: 20, md: 24 }} />
      <Container
        maxW={hasFullContent ? "container.xl" : "container.xl"}
        pt={6}
        pb={hasFullContent ? 0 : 20}
        position="relative"
        zIndex={1}
      >
        {/* Breadcrumb */}
        <Flex justify="flex-end" mb={8} display={{ base: "none", md: "flex" }}>
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

        {/* Header section - two-column split layout */}
        <Box
          minH={{ base: "360px", md: "48vh" }}
          display={{ base: "block", md: "grid" }}
          gridTemplateColumns={{ md: "1fr 1fr" }}
          borderTopWidth={{ base: 0, md: "1px" }}
          borderColor={dividerColor}
          mx={-6}
          px={6}
        >
          <Box
            py={8}
            pr={{ base: 0, md: 6 }}
            display="flex"
            flexDirection="column"
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
              fontSize={{ base: "2xl", md: "3xl", lg: "48px" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1"
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
              {model.heroTagline && (
                <Text
                  color={accentColor}
                  fontSize="sm"
                  fontWeight="semibold"
                  letterSpacing="wider"
                  mt={2}
                  textAlign="left"
                >
                  {model.heroTagline}
                </Text>
              )}
            </Box>
          </Box>
        </Box>

        <Box
          bg="transparent"
          py={0}
          px={6}
          mx={-6}
          borderTopWidth="1px"
          borderColor={dividerColor}
        />

        {content && (
          <>
            <Box mx={-6} px={6}>
              <Box position="relative" zIndex={1} mx={-6} minW="calc(100% + 48px)" w="calc(100% + 48px)">
                <TableOfContents
                  leftColumn={[
                    { label: "Our approach", href: "#our-approach" },
                    { label: `${model.title} at a glance`, href: "#the-model" },
                    { label: "What makes this model different", href: "#what-makes-special" },
                    { label: "Tools and platforms we use", href: "#ai-tools" },
                  ]}
                  rightColumn={[
                    { label: "Where this model adds value across the SDLC", href: "#sdlc" },
                    { label: "About Tech Emulsion", href: "#why-tech-emulsion" },
                    { label: "Client outcomes", href: "#client-outcomes" },
                    { label: "FAQs", href: "#faqs" },
                  ]}
                  sectionBg="transparent"
                  collapsedBg="transparent"
                  dividerColor={dividerColor}
                  accentColor={accentColor}
                  headingColor={headingColor}
                  textColor={textColor}
                />
              </Box>
            </Box>
            <Box h="1px" bg={dividerColor} mx={-6} px={6} flexShrink={0} />
          </>
        )}

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
          {/* You will feel safe and empowered */}
          <Box id="our-approach" bg="transparent" position="relative">
            <Box {...patternOverlay} opacity={0.3} />

            {/* Section 1: Tagline, large statement, subtext, divider */}
            <Container maxW="6xl" position="relative" zIndex={1} pt={0} pb={{ base: 20, md: 24 }}>
              {content.peaceOfMindIntro && (
                <Box
                  display={{ base: "block", md: "grid" }}
                  gridTemplateColumns={{ md: "1fr 1fr" }}
                  alignItems="center"
                  py={{ base: 20, md: 24 }}
                  mb={0}
                  minH={{ md: "200px" }}
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    bgGradient: `linear(to-r, transparent, ${accentColor}, transparent)`,
                    opacity: 0.2,
                  }}
                >
                  <Box display={{ base: "none", md: "block" }} />
                  <Text
                    as="blockquote"
                    color={headingColor}
                    fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                    // fontWeight="bold"
                    lineHeight="1.4"
                    letterSpacing="-0.02em"
                  >
                    {content.peaceOfMindIntro}
                  </Text>
                </Box>
              )}
              <Text
                fontSize="xs"
                color={accentColor}
                mt={{ base: 10, md: 12 }}
                mb={0}
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
              >
              </Text>
              {/* <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1"
                mb={0}
              >
                {content.sectionHeadings?.safeAndEmpowered ?? "You will feel safe and empowered with us. Here's why"}
              </Heading> */}
              <Text
                color={headingColor}
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                // fontWeight="bold"
                lineHeight="1.4"
                letterSpacing="-0.02em"
                mb={6}
                maxW={{ base: "100%", md: "65%" }}
              >
                {content.safeAndEmpowered.intro}
              </Text>
              {content.safeAndEmpowered.introSubtext && (
                <Box
                  display={{ base: "block", md: "grid" }}
                  gridTemplateColumns={{ md: "1fr 1fr" }}
                  alignItems="center"
                  mb={0}
                >
                  <Box display={{ base: "none", md: "block" }} />
                  <Text
                    color={textColor}
                    fontSize="16px"
                    lineHeight="1.8"
                  >
                    {content.safeAndEmpowered.introSubtext}
                  </Text>
                </Box>
              )}
            </Container>

            {/* Divider between section 1 and section 2 */}
            <Box mx="auto" maxW="6xl" px={6}>
              <Box
                height="1px"
                bgGradient={`linear(to-r, transparent, ${accentColor}, transparent)`}
                opacity={0.2}
              />
            </Box>

            {/* Section 2: Image left, bullets + closing right */}
            <Container maxW="6xl" position="relative" zIndex={1} py={{ base: 12, md: 16 }}>
              <Box
                display={{ base: "block", md: "grid" }}
                gridTemplateColumns={{ md: "minmax(0, 0.45fr) minmax(0, 0.55fr)" }}
                gap={{ base: 8, md: 12 }}
                alignItems="stretch"
              >
                <Box
                  position="relative"
                  w="100%"
                  minH={{ base: "240px" }}
                  aspectRatio={{ base: "16/10", md: "unset" }}
                  h={{ base: "auto", md: "100%" }}
                >
                  <Image
                    src="/assets/engagement-models/safe-empowered-section.jpg"
                    alt="Team collaborating on AI and delivery"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </Box>
                <Box>
                  <Text color={headingColor} fontWeight="semibold" mb={3} fontSize="16px">
                    Here&apos;s what backs every engagement:
                  </Text>
                  <Box as="ul" mb={6} pl={6}>
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
                  <Text
                    color={headingColor}
                    fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                    // fontWeight="bold"
                    lineHeight="1.3"
                    letterSpacing="-0.02em"
                  >
                    {content.safeAndEmpowered.closing}
                  </Text>
                </Box>
              </Box>
            </Container>
          </Box>

          {/* Everything you need to know */}
          <Box id="the-model" bg="transparent" py={{ base: 20, md: 24 }} {...sectionStyles}>
            <Box {...patternOverlay} />
            <Container maxW="6xl" position="relative" zIndex={1}>
              {/* Full width: headline + large paragraph (no empty space on left) */}
              <Box w="100%" mb={{ base: 10, md: 12 }}>
                {/* <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  fontWeight="bold"
                  color={headingColor}
                  letterSpacing="-0.02em"
                  lineHeight="1.1"
                  mb={0}
                >
                  {content.sectionHeadings?.everythingYouNeedToKnow ?? `${heroTitle}: Everything you need to know`}
                </Heading> */}
                <Text
                  color={headingColor}
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  // fontWeight="bold"
                  lineHeight="1.35"
                  letterSpacing="-0.02em"
                  maxW="100%"
                >
                  {(() => {
                    const main =
                      content.everythingYouNeedToKnow.introMain ?? content.everythingYouNeedToKnow.intro;
                    const parts = main.split(/(Staff augmentation|dedicated development teams)/);
                    return parts.map((p, i) =>
                      p === "Staff augmentation" || p === "dedicated development teams" ? (
                        <Box
                          key={i}
                          as="span"
                          textDecoration="underline"
                          textDecorationColor={accentColor}
                        >
                          {p}
                        </Box>
                      ) : (
                        <span key={i}>{p}</span>
                      )
                    );
                  })()}
                </Text>
              </Box>

              {/* Right-side content starts from center */}
              <Box
                display={{ base: "block", md: "grid" }}
                gridTemplateColumns={{ md: "1fr 1fr" }}
                gap={0}
                alignItems="start"
              >
                <Box display={{ base: "none", md: "block" }} />
                <Box pt={{ base: 0, md: 4 }}>
                  {content.everythingYouNeedToKnow.introRight && (
                    <>
                      <Text color={textColor} fontSize="16px" lineHeight="1.8" mb={6}>
                        {content.everythingYouNeedToKnow.introRight}
                      </Text>
                      <Box as="ul" pl={6} listStyleType="disc">
                        {content.everythingYouNeedToKnow.researchBullets.map((item, i) => (
                          <Text key={i} as="li" color={textColor} fontSize="16px" lineHeight="1.8" mb={3}>
                            <strong>{item.cite}:</strong> {item.text}
                          </Text>
                        ))}
                      </Box>
                    </>
                  )}
                  {!content.everythingYouNeedToKnow.introRight && (
                    <>
                      <Text color={textColor} fontSize="16px" lineHeight="1.8" mb={6}>
                        {content.everythingYouNeedToKnow.intro}
                      </Text>
                      <Box as="ul" pl={6} listStyleType="disc">
                        {content.everythingYouNeedToKnow.researchBullets.map((item, i) => (
                          <Text key={i} as="li" color={textColor} fontSize="16px" lineHeight="1.8" mb={3}>
                            <strong>{item.cite}:</strong> {item.text}
                          </Text>
                        ))}
                      </Box>
                    </>
                  )}
                </Box>
              </Box>

              {/* Bottom line: starts from center */}
              <Box
                display={{ base: "block", md: "grid" }}
                gridTemplateColumns={{ md: "1fr 1fr" }}
                alignItems="center"
                mt="18px"
              >
                <Box display={{ base: "none", md: "block" }} />
                <Text
                  color={headingColor}
                  fontSize={{ base: "lg", md: "xl" }}
                  // fontWeight="semibold"
                  lineHeight="1.5"
                >
                  With great AI comes great responsibility, and Tech Emulsion takes that responsibility seriously.
                </Text>
              </Box>
            </Container>
          </Box>

          {/* What makes AI-powered teams special - full-width accent section */}
          <Box
            id="what-makes-special"
            py={{ base: 20, md: 24 }}
            bgGradient={
              colorMode === "dark"
                ? "linear(to-r, teal.700, teal.900)"
                : "linear(to-r, teal.500, teal.600)"
            }
            color="white"
          >
            <Container maxW="6xl" position="relative" zIndex={1}>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "48px" }}
                fontWeight="bold"
                letterSpacing="-0.02em"
                lineHeight="1.1"
                textAlign="left"
                mb={{ base: 12, md: 16 }}
              >
                {content.sectionHeadings?.whatMakesSpecial ?? "What makes this engagement model special"}
              </Heading>
              <VStack spacing={{ base: 8, md: 10 }} align="stretch">
                {content.whatMakesSpecial.map((item, i) => (
                  <Box
                    key={i}
                    display={{ base: "block", md: "grid" }}
                    gridTemplateColumns={{ md: "minmax(0, 200px) 1fr" }}
                    gap={{ base: 2, md: 8 }}
                    alignItems="start"
                  >
                    <Heading
                      as="h3"
                      fontSize={{ base: "lg", md: "xl" }}
                      fontWeight="bold"
                      pt={{ md: 1 }}
                    >
                      {item.title}
                    </Heading>
                    <Text fontSize="16px" lineHeight="1.7" opacity={0.95}>
                      {item.description}
                    </Text>
                  </Box>
                ))}
              </VStack>
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
          <Box id="sdlc" bg="transparent" py={{ base: 20, md: 24 }} {...sectionStyles}>
            <Box {...patternOverlay} />
            <Container maxW="6xl" position="relative" zIndex={1}>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "48px" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1"
                textAlign="left"
                mb={4}
                >
                  {content.sectionHeadings?.sdlc ?? "Where this model adds value across the SDLC"}
              </Heading>
              <Text
                color={textColor}
                fontSize="16px"
                textAlign="left"
                mb={12}
              >
                {content.sectionHeadings?.sdlc
                  ? "From discovery and architecture through development, integration, and optimization:"
                  : "AI accelerates delivery at every stage of the software development lifecycle:"}
              </Text>
              <Box borderTopWidth="1px" borderColor={dividerColor}>
                {content.sdlcPhases.map((phase, i) => {
                  const isLast = i === content.sdlcPhases.length - 1;
                  const isActive = activeSdlcPhase === phase.number;
                  return (
                    <Box
                      key={i}
                      borderBottomWidth={isLast ? 0 : "1px"}
                      borderColor={dividerColor}
                      bg={isActive ? sdlcHighlightBg : "transparent"}
                      px={{ base: 4, md: 8 }}
                      py={{ base: 5, md: 6 }}
                      onMouseEnter={() => setActiveSdlcPhase(phase.number)}
                      _hover={{ bg: sdlcHighlightBg }}
                    >
                      <Box
                        display="grid"
                        gridTemplateColumns="minmax(48px, 60px) 1fr"
                        gap={{ base: 4, md: 8 }}
                        alignItems={isActive ? "start" : "center"}
                      >
                        <Text
                          fontSize="xl"
                          fontWeight="bold"
                          color={headingColor}
                        >
                          {phase.number}
                        </Text>
                        <Box>
                          <Text
                            fontSize="lg"
                            fontWeight="bold"
                            color={headingColor}
                            mb={isActive ? 4 : 0}
                          >
                            {phase.title}
                          </Text>
                          <Collapse in={isActive} animateOpacity unmountOnExit>
                            <Box as="ul" pl={6} listStyleType="disc">
                              {phase.bullets.map((bullet, j) => (
                                <Text
                                  key={j}
                                  as="li"
                                  color={textColor}
                                  fontSize="16px"
                                  lineHeight="1.7"
                                  mb={3}
                                >
                                  {bullet}
                                </Text>
                              ))}
                            </Box>
                          </Collapse>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Container>
          </Box>

          {/* Client outcomes */}
          <Box id="client-outcomes" bg="transparent" py={{ base: 20, md: 24 }} {...sectionStyles}>
            <Box {...patternOverlay} opacity={0.3} />
            <Container maxW="6xl" position="relative" zIndex={1}>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "48px" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1"
                textAlign="left"
                mb={4}
              >
                {content.sectionHeadings?.clientOutcomes ?? "Client outcomes powered by this engagement model"}
              </Heading>
              <Text
                color={textColor}
                fontSize="16px"
                mb={12}
                maxW="2xl"
              >
                {content.outcomesIntro ??
                  "We've tracked hundreds of use cases across delivery and documented the results. The examples below show how AI translates into tangible time savings and measurable efficiency gains."}
              </Text>
              <TableContainer
                borderWidth="1px"
                borderColor={dividerColor}
                borderRadius="md"
                overflowX="auto"
                overflowY="visible"
                mb={12}
              >
                <Table variant="simple" size="md" sx={{ minW: "720px", tableLayout: "fixed" }}>
                  <Thead bg={bgColor}>
                    <Tr>
                      <Th
                        color={accentColor}
                        fontWeight="medium"
                        textAlign="left"
                        py={5}
                        px={6}
                        borderBottomWidth="1px"
                        borderColor={dividerColor}
                        w="22%"
                        minW="140px"
                        whiteSpace="normal"
                        wordBreak="break-word"
                      >
                        Task
                      </Th>
                      <Th
                        color={accentColor}
                        fontWeight="medium"
                        textAlign="center"
                        py={5}
                        px={6}
                        borderBottomWidth="1px"
                        borderColor={dividerColor}
                        w="26%"
                        minW="160px"
                        whiteSpace="normal"
                        wordBreak="break-word"
                      >
                        Before
                      </Th>
                      <Th
                        color={accentColor}
                        fontWeight="medium"
                        textAlign="center"
                        py={5}
                        px={6}
                        borderBottomWidth="1px"
                        borderColor={dividerColor}
                        w="26%"
                        minW="160px"
                        whiteSpace="normal"
                        wordBreak="break-word"
                      >
                        After
                      </Th>
                      <Th
                        color={accentColor}
                        fontWeight="medium"
                        textAlign="center"
                        py={5}
                        px={6}
                        borderBottomWidth="1px"
                        borderColor={dividerColor}
                        w="26%"
                        minW="140px"
                        whiteSpace="normal"
                        wordBreak="break-word"
                      >
                        Impact
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {content.outcomes.map((row, i) => (
                      <Tr key={i} borderBottomWidth={i < content.outcomes.length - 1 ? "1px" : 0} borderColor={dividerColor}>
                        <Td
                          color={headingColor}
                          py={5}
                          px={6}
                          fontWeight="medium"
                          whiteSpace="normal"
                          wordBreak="break-word"
                          verticalAlign="top"
                        >
                          {row.task}
                        </Td>
                        <Td
                          color={headingColor}
                          py={5}
                          px={6}
                          textAlign="center"
                          whiteSpace="normal"
                          wordBreak="break-word"
                          verticalAlign="top"
                        >
                          {row.before}
                        </Td>
                        <Td
                          color={headingColor}
                          py={5}
                          px={6}
                          textAlign="center"
                          whiteSpace="normal"
                          wordBreak="break-word"
                          verticalAlign="top"
                        >
                          {row.after}
                        </Td>
                        <Td
                          color={headingColor}
                          py={5}
                          px={6}
                          textAlign="center"
                          fontWeight="medium"
                          whiteSpace="normal"
                          wordBreak="break-word"
                          verticalAlign="top"
                        >
                          {row.savings}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
              <Text
                color={headingColor}
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                lineHeight="1.5"
                w="100%"
              >
                {content.outcomesClosing ??
                  "Our experience shows that AI cuts minutes and hours from individual tasks, and at scale, entire days fall off delivery cycles. We work with you to set the right KPIs for your project and track every result transparently."}
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
          <Box id="ai-tools" bg="transparent" py={{ base: 20, md: 24 }} {...sectionStyles}>
            <Box {...patternOverlay} />
            <Container maxW="6xl" position="relative" zIndex={1}>
              <Text
                fontSize="xs"
                color={accentColor}
                mb={0}
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
              >
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "48px" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1"
                mb={4}
              >
                {content.sectionHeadings?.tools ?? "Tools and platforms that support delivery"}
              </Heading>
              <Text color={textColor} fontSize="16px" mb={12} maxW="2xl">
                {content.toolsIntro ??
                  "We work with a curated set of AI products trusted across industries. If your team already has preferred platforms, we integrate them seamlessly—secure, scalable, and built to deliver peace of mind at every step."}
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

          {/* Why Tech Emulsion - full background image + right-side cards */}
          <Box
            id="why-tech-emulsion"
            position="relative"
            minH="auto"
            bg={bgColor}
            overflow="hidden"
          >
            <Box
              position="absolute"
              inset={0}
              bgImage="url(/assets/engagement-models/Why%20Tech%20Emulsion%20Image.jpg)"
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
            />
            <Box
              position="absolute"
              inset={0}
              bgGradient={{
                base: "linear(to-r, blackAlpha.800 30%, blackAlpha.900 70%)",
                md: "linear(to-r, transparent 0%, blackAlpha.700 45%, blackAlpha.900 55%)",
              }}
            />
            <Container maxW="6xl" position="relative" zIndex={1} py={{ base: 10, md: 20 }} px={{ base: 4, md: 6 }}>
              <Flex justify={{ base: "flex-start", md: "flex-end" }} align="flex-start">
                <Box
                  w={{ base: "100%", md: "55%", lg: "52%" }}
                  maxW={{ md: "640px" }}
                  bg={{ base: "blackAlpha.800", md: "transparent" }}
                  p={{ base: 4, sm: 5, md: 0 }}
                  borderRadius={{ base: "md", md: 0 }}
                  mx={{ base: 0, md: 0 }}
                >
                  <Heading
                    as="h2"
                    fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                    fontWeight="bold"
                    color="white"
                    letterSpacing="-0.02em"
                    lineHeight="1.2"
                    mb={{ base: 6, md: 10 }}
                  >
                    {content.sectionHeadings?.whyPartner ?? "What makes Tech Emulsion your reliable development partner?"}
                  </Heading>
                  <Box
                    display="grid"
                    gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
                    borderWidth="1px"
                    borderColor="whiteAlpha.200"
                    borderRadius="md"
                    overflow="hidden"
                  >
                    {content.stats.map((stat, i) => {
                      const icons = [null, FaStar, FaComments, FaGem, FaCheck, FaShieldAlt];
                      const IconComponent = icons[i];
                      const isNumberLead = i === 0;
                      const isAiEnabledLastStat =
                        model.slug === "ai-enabled-teams" && i === content.stats.length - 1;
                      const showBigValue = isNumberLead || isAiEnabledLastStat;
                      const showIcon = !showBigValue && IconComponent;
                      const isLastColMd = i % 3 === 2;
                      const isLastColBase = i % 2 === 1;
                      const isInLastRowMd = i >= 3;
                      const isInLastRowBase = i >= 4;
                      return (
                        <Box
                          key={i}
                          p={{ base: 3, sm: 4, md: 5 }}
                          borderRightWidth={{ base: isLastColBase ? 0 : "1px", md: isLastColMd ? 0 : "1px" }}
                          borderBottomWidth={{ base: isInLastRowBase ? 0 : "1px", md: isInLastRowMd ? 0 : "1px" }}
                          borderColor="whiteAlpha.200"
                        >
                          {showBigValue ? (
                            <Text
                              fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                              fontWeight="bold"
                              color={accentColor}
                              mb={{ base: 1, md: 2 }}
                            >
                              {stat.value}
                            </Text>
                          ) : showIcon ? (
                            <Icon
                              as={IconComponent}
                              color={accentColor}
                              boxSize={{ base: 6, md: 8 }}
                              mb={{ base: 2, md: 3 }}
                              display="block"
                            />
                          ) : null}
                          <Text color="white" fontSize={{ base: "13px", sm: "14px", md: "15px" }} lineHeight="1.5">
                            {stat.label}
                          </Text>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Flex>
            </Container>
          </Box>

          {/* FAQs */}
          <Box id="faqs" bg="transparent" py={{ base: 20, md: 24 }} {...sectionStyles}>
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
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "48px" }}
                fontWeight="bold"
                color={headingColor}
                letterSpacing="-0.02em"
                lineHeight="1.1"
                mb={12}
              >
                {content.sectionHeadings?.faqs ?? "Frequently asked questions"}
              </Heading>
              <Accordion allowMultiple>
                <Box
                  display="grid"
                  gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                  gap={6}
                >
                  {content.faqs.map((faq, i) => {
                    const isLastOdd =
                      i === content.faqs.length - 1 && content.faqs.length % 2 === 1;
                    return (
                      <Box
                        key={i}
                        gridColumn={isLastOdd ? { base: "1", md: "1 / -1" } : undefined}
                        justifySelf={isLastOdd ? "center" : undefined}
                        maxW={isLastOdd ? { base: "100%", md: "50%" } : undefined}
                      >
                        <AccordionItem
                          borderRadius="lg"
                          bg={sectionBg}
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
                      </Box>
                    );
                  })}
                </Box>
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
