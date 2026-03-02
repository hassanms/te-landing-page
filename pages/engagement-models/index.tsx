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
  const cardBorder = useColorModeValue("gray.200", "gray.700");

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
              Engagement models
            </Heading>
          </Box>
          {/* Right: Description - bottom aligned */}
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
              We offer flexible engagement models—from AI-enabled teams and staff
              augmentation to dedicated teams and full project outsourcing—so you
              can scale delivery in the way that best fits your stage and goals.
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

        {/* Models grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={6}
          pb={12}
        >
          {engagementModelsData.map((model) => (
            <Box
              key={model.id}
              as={NextLink}
              href={`/engagement-models/${model.slug}`}
              _hover={{ textDecoration: "none" }}
            >
              <Box
                role="group"
                position="relative"
                h="full"
                bg={cardBg}
                borderWidth="1px"
                borderColor={cardBorder}
                borderRadius="lg"
                p={6}
                overflow="hidden"
                transition="all 0.3s ease"
                cursor="pointer"
                _hover={{
                  borderColor: colorMode === "light" ? "teal.500" : "pearlAqua.400",
                }}
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
                  <Heading
                    as="h2"
                    size="md"
                    color={headingColor}
                    mb={3}
                    fontWeight="semibold"
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
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default EngagementModelsPage;

