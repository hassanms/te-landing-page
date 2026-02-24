"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  VStack,
  HStack,
  Link,
  ButtonGroup,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Icon } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { ButtonLink } from "components/button-link";
import { FaChevronRight } from "react-icons/fa";

// Design-accurate flip card - matches pages/portfolio/Design
function PortfolioCardV2({
  title,
  platform,
  industry,
  image,
  href,
}: {
  title: string;
  platform: string;
  industry: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      as={NextLink}
      href={href}
      _hover={{ textDecoration: "none" }}
      display="block"
      h="450px"
      position="relative"
      role="group"
      sx={{
        perspective: "1000px",
      }}
    >
      <Box
        position="relative"
        w="100%"
        h="100%"
        transition="transform 0.7s ease"
        sx={{
          transformStyle: "preserve-3d",
          "&": { backfaceVisibility: "hidden" },
        }}
        _groupHover={{
          transform: "rotateY(180deg)",
        }}
      >
        {/* Front - Image */}
        <Box
          position="absolute"
          inset={0}
          w="100%"
          h="100%"
          overflow="hidden"
          boxShadow="2xl"
          sx={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Box
            position="relative"
            w="100%"
            h="100%"
            transition="transform 0.7s"
            _groupHover={{
              transform: "scale(1.1)",
            }}
          >
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Box>
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, blackAlpha.200, transparent)"
            opacity={0}
            transition="opacity 0.3s"
            _groupHover={{ opacity: 1 }}
          />
        </Box>

        {/* Back - Teal gradient with details */}
        <Box
          position="absolute"
          inset={0}
          w="100%"
          h="100%"
          overflow="hidden"
          boxShadow="2xl"
          sx={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background:
              "linear-gradient(135deg, #00D9C1 0%, #00F5DD 50%, #00D9C1 100%)",
          }}
          p={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Box position="absolute" inset={0} opacity={0.1}>
            <Box
              position="absolute"
              top={0}
              left={0}
              w="8rem"
              h="8rem"
              bg="white"
              borderRadius="full"
              filter="blur(48px)"
            />
            <Box
              position="absolute"
              bottom={0}
              right={0}
              w="10rem"
              h="10rem"
              bg="white"
              borderRadius="full"
              filter="blur(48px)"
            />
          </Box>

          <VStack
            spacing={6}
            position="relative"
            zIndex={1}
            maxW="xs"
          >
            <Heading
              as="h3"
              fontSize="4xl"
              fontWeight="bold"
              color="black"
              lineHeight="tight"
            >
              {title}
            </Heading>

            <HStack spacing={2} flexWrap="wrap" justify="center" gap={2}>
              <Badge
                px={4}
                py={2}
                bg="blackAlpha.800"
                color="white"
                borderRadius="full"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="wide"
                textTransform="uppercase"
                borderWidth="1px"
                borderColor="whiteAlpha.300"
              >
                {industry}
              </Badge>
              <Badge
                px={4}
                py={2}
                bg="blackAlpha.800"
                color="white"
                borderRadius="full"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="wide"
                textTransform="uppercase"
                borderWidth="1px"
                borderColor="whiteAlpha.300"
              >
                {platform}
              </Badge>
            </HStack>

            <Text color="blackAlpha.900" fontSize="md" fontWeight="semibold">
              View full case study
            </Text>

            <HStack pt={2}>
              <Box
                w="14"
                h="14"
                borderRadius="full"
                bg="black"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="transform 0.3s"
                _groupHover={{ transform: "scale(1.1)" }}
              >
                <Icon as={FiArrowUpRight} w={6} h={6} color="#00D9C1" />
              </Box>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Link>
  );
}

// Tech Emulsion portfolio data - platform + industry tags from portfolio page
const portfolioItems = [
  {
    id: 1,
    title: "AVL Copilot",
    platform: "AI Solution",
    industry: "Enterprise",
    image: "/assets/portfolio/New/AVL-CoPilot-hero.png",
    href: "/portfolio/avl-copilot",
  },
  {
    id: 2,
    title: "BillboardIQ",
    platform: "SaaS Platform",
    industry: "Advertising",
    image: "/assets/portfolio/New/Campaign_Porfolio.jpg",
    href: "/portfolio/campaignos",
  },
  {
    id: 3,
    title: "Macromascot",
    platform: "Mobile App",
    industry: "Healthcare",
    image: "/assets/portfolio/New/Health_app.jpg",
    href: "/portfolio/macromascot",
  },
  {
    id: 4,
    title: "AutoCar Intelligence",
    platform: "Enterprise SaaS",
    industry: "Automotive",
    image: "/assets/portfolio/New/DADS_Sales_Reborn.jpg",
    href: "/portfolio/autosync-intelligence",
  },
  {
    id: 5,
    title: "Pack Assist",
    platform: "AI Solution",
    industry: "Packaging",
    image: "/assets/portfolio/New/Pack Assist.png",
    href: "/portfolio/packassist",
  },
  {
    id: 6,
    title: "The Meatery",
    platform: "AI Solution",
    industry: "E-commerce",
    image:
      "/assets/portfolio/New/The Meatery – Scaling an AI-Driven Voice CRM into a Multi-Tenant Agency.jpg",
    href: "/portfolio/meatery",
  },
  {
    id: 7,
    title: "Podcast Beacon",
    platform: "SaaS Platform",
    industry: "Media",
    image: "/assets/portfolio/mic.jpg",
    href: "/portfolio/podcastbeacon",
  },
  {
    id: 8,
    title: "Rack Room",
    platform: "Enterprise SaaS",
    industry: "Retail",
    image: "/assets/portfolio/download.jpg",
    href: "/portfolio/rackroom",
  },
  {
    id: 9,
    title: "Content Compass",
    platform: "AI Solution",
    industry: "Marketing",
    image: "/assets/portfolio/linkedin.jpg",
    href: "/portfolio/contentcompass",
  },
  {
    id: 10,
    title: "SuperHeart",
    platform: "Mobile App",
    industry: "Healthcare",
    image: "/assets/portfolio/food.webp",
    href: "/portfolio/superheart",
  },
  {
    id: 11,
    title: "Atarim",
    platform: "SaaS Platform",
    industry: "Design & Development",
    image: "/assets/portfolio/atarim.png",
    href: "/portfolio/atarim",
  },
  {
    id: 12,
    title: "JarvisReach",
    platform: "SaaS Platform",
    industry: "Sales & Marketing",
    image: "/assets/portfolio/jarvis.png",
    href: "/portfolio/jarvisreach",
  },
  {
    id: 13,
    title: "Levellup",
    platform: "AI Solution",
    industry: "Gaming",
    image: "/assets/portfolio/level.png",
    href: "/portfolio/levellup",
  },
  {
    id: 14,
    title: "Farmin",
    platform: "AI Solution",
    industry: "Agriculture",
    image: "/assets/portfolio/farmin.avif",
    href: "/portfolio/farmin",
  },
  {
    id: 15,
    title: "Bipcards",
    platform: "SaaS Platform",
    industry: "Business",
    image: "/assets/portfolio/bipcards.png",
    href: "/portfolio/bipcards",
  },
  {
    id: 16,
    title: "Popcard",
    platform: "SaaS Platform",
    industry: "Business",
    image: "/assets/portfolio/popcard.png",
    href: "/portfolio/popcard",
  },
  {
    id: 17,
    title: "Artis",
    platform: "Blockchain",
    industry: "NFT & Digital Art",
    image: "/assets/portfolio/Artis.png",
    href: "/portfolio/artis",
  },
  {
    id: 18,
    title: "Alifa App",
    platform: "AI Solution",
    industry: "AI & Automation",
    image: "/assets/portfolio/file.jpg",
    href: "/portfolio/alifa",
  },
];

export default function PortfolioV2() {
  const { colorMode } = useColorMode();
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "lightGrey.400");

  return (
    <>
      <EnhancedSEO
        title="Our Portfolio - Tech Emulsion"
        description="Explore Tech Emulsion's diverse portfolio of successful projects including AI-powered tools, SaaS platforms, mobile apps, and custom software development."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio-v2"
      />

      <Box position="relative" minH="100vh">
        {/* Full-page gradient - scrolls with content (not fixed) */}
        <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={-1} overflow="hidden" pointerEvents="none">
          <BackgroundGradient height="100%" width="100%" />
        </Box>

        <Container maxW="container.xl" py="20" mb="20" position="relative" zIndex={1}>
          {/* Hero Section with Breadcrumb - same layout as Services page */}
          <Box
            display={{ base: "block", md: "flex" }}
            px={6}
            mt={10}
            justifyContent="space-between"
            mb={16}
          >
            <Box maxW="4xl">
              <Heading
                as="h1"
                color={headingColor}
                fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                fontWeight="bold"
                mb={8}
                lineHeight="tight"
              >
                Our work
              </Heading>
              <Text
                color={textColor}
                fontSize="xl"
                lineHeight="relaxed"
                maxW="2xl"
              >
                We combine creative strategy with technical excellence to craft
                digital experiences that drive results. Each project represents
                our commitment to innovation, quality, and client success.
              </Text>
            </Box>

            {/* Breadcrumb - same as Services page */}
            <VStack
              spacing={4}
              display="flex"
              justifyContent={{ base: "flex-start", md: "flex-end" }}
              width={{ base: "100%", md: "auto" }}
              alignItems={{ base: "flex-start", md: "flex-end" }}
              mt={4}
            >
              <ButtonGroup
                style={{
                  backgroundColor: "none",
                  fontSize: "1rem",
                  color: "muted",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ButtonLink
                  href="/"
                  size="lg"
                  sx={{
                    bg: "none",
                    color: "muted",
                    padding: "0",
                    "&:hover": {
                      bg: "none",
                    },
                  }}
                >
                  Home
                </ButtonLink>
                <Icon as={FaChevronRight} boxSize={4} color="muted" />
                <Text
                  as="span"
                  ml="2"
                  sx={{
                    color: colorMode === "light" ? "#004c4c !important" : "white",
                  }}
                >
                  Portfolio
                </Text>
              </ButtonGroup>
            </VStack>
          </Box>

          {/* Portfolio Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {portfolioItems.map((item) => (
                <PortfolioCardV2
                  key={item.id}
                  title={item.title}
                  platform={item.platform}
                  industry={item.industry}
                  image={item.image}
                  href={item.href}
                />
              ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
