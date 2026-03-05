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
import NextLink from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { engagementModelsData } from "data/engagement-models";

const EngagementModelsPage = () => {
  const { colorMode } = useColorMode();
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const dividerColor = useColorModeValue("gray.200", "gray.600");
  const cardBg = useColorModeValue("white", "gray.800");
  const accentColor = useColorModeValue("teal.500", "pearlAqua.500");

  return (
    <Box position="relative" minH="100vh" color={headingColor}>
      <EnhancedSEO
        title="Engagement models - Tech Emulsion"
        description="Discover Tech Emulsion’s engagement models including AI-enabled teams, staff augmentation, dedicated teams, and project outsourcing so you can choose how to work with us."
        pageType="about"
        canonicalUrl="https://techemulsion.com/engagement-models"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Engagement models", url: "https://techemulsion.com/engagement-models" },
          ],
        }}
      />

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
        {/* Breadcrumb - same as services, blog, careers */}
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
            <Text as="span" ml="2" color={headingColor}>
              Engagement models
            </Text>
          </ButtonGroup>
        </Flex>

        {/* Header section - same layout as services, blog, careers */}
        <Box
          minH={{ base: "280px", md: "35vh" }}
          display={{ base: "block", md: "grid" }}
          gridTemplateColumns={{ md: "1fr 1fr" }}
          borderTopWidth="1px"
          borderColor={dividerColor}
          mx={-6}
          px={6}
        >
          {/* Left: Engagement models - top aligned */}
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
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="-0.02em"
              lineHeight="1.1"
            >
              Engagement models
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
              <Text
                color={textColor}
                fontSize="16px"
                lineHeight="tall"
                textAlign="left"
              >
                We offer flexible engagement models—from AI-enabled teams and staff augmentation to
                dedicated teams and full project outsourcing—so you can scale delivery in the way
                that best fits your stage and goals.
              </Text>
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

        {/* Overview section - mirrors services/portfolio intro hierarchy */}
        <Box py={{ base: 12, md: 16 }}>
          <Box maxW="3xl">
            <Heading
              as="h2"
              size="md"
              color={colorMode === "dark" ? "pearlAqua.400" : "teal.500"}
              textTransform="uppercase"
              letterSpacing="widest"
            >
              How we work together
            </Heading>
            <Heading
              as="h1"
              mt={3}
              color={headingColor}
              fontSize={{ base: "2rem", md: "2.5rem" }}
              fontWeight="bold"
            >
              Engagement models tailored to your roadmap
            </Heading>
            <Text
              mt={4}
              color={textColor}
              fontSize="16px"
              lineHeight="tall"
            >
              Whether you need to boost an existing team, spin up a dedicated squad, or outsource an
              entire initiative, these models give you clear options for how to collaborate with Tech
              Emulsion.
            </Text>
          </Box>
        </Box>

        {/* Divider above models grid - aligns with other main pages */}
        <Box
          bg="transparent"
          py={2}
          px={6}
          mx={-6}
          borderTopWidth="1px"
          borderColor={dividerColor}
        />

        {/* Models grid - aligned with portfolio/services grid layout */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={0} pt={8} pb={12}>
          {engagementModelsData.map((model, idx) => {
            const len = engagementModelsData.length;
            const lastRowStartMd = 2 * Math.floor((len - 1) / 2);
            const lastRowStartLg = 3 * Math.floor((len - 1) / 3);
            return (
              <Box
                key={model.id}
                as={NextLink}
                href={`/engagement-models/${model.slug}`}
                _hover={{ textDecoration: "none" }}
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
                <Box
                  role="group"
                  position="relative"
                  h="full"
                  bg={cardBg}
                  p={6}
                  overflow="hidden"
                  transition="all 0.3s ease"
                  cursor="pointer"
                >
                  {/* Teal overlay on hover - same as home page portfolio/service cards */}
                  <Box
                    position="absolute"
                    inset={0}
                    bg="teal.500"
                    opacity={0}
                    transition="opacity 0.3s"
                    _groupHover={{ opacity: 0.55 }}
                    zIndex={1}
                  />
                  <Box position="relative" zIndex={2}>
                    {model.heroTagline && (
                      <Text
                        color={accentColor}
                        fontSize="xs"
                        fontWeight="semibold"
                        textTransform="uppercase"
                        letterSpacing="widest"
                        mb={2}
                        transition="color 0.3s"
                        _groupHover={{ color: "white" }}
                      >
                        {model.heroTagline}
                      </Text>
                    )}
                    <Heading
                      as="h3"
                      fontSize={{ base: "xl", md: "2xl" }}
                      color={headingColor}
                      mb={3}
                      fontWeight="bold"
                      transition="color 0.3s"
                      _groupHover={{ color: "white" }}
                    >
                      {model.title}
                    </Heading>
                    <Text
                      color={textColor}
                      fontSize="16px"
                      lineHeight="1.6"
                      transition="color 0.3s"
                      _groupHover={{ color: "white" }}
                    >
                      Tech Emulsion delivers {model.title.toLowerCase()} to help you
                      scale engineering capacity, move faster, and reduce delivery risk.
                    </Text>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default EngagementModelsPage;

