"use client";

import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Divider,
  Flex,
  ButtonGroup,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Icon } from "@chakra-ui/react";
import { FiChevronDown, FiGrid, FiList, FiArrowUpRight } from "react-icons/fi";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { ButtonLink } from "components/button-link";
import { FaChevronRight } from "react-icons/fa";

// Tech Emulsion portfolio data - use platforms array for items with multiple platform tags
const portfolioItems: Array<{
  id: number;
  title: string;
  platform: string;
  platforms?: string[];
  industry: string;
  image: string;
  href: string;
}> = [
  { id: 1, title: "AVL Copilot", platform: "AI Solution", platforms: ["AI Solution", "SaaS Platform"], industry: "Enterprise", image: "/assets/portfolio/New/AVL-CoPilot-hero.png", href: "/portfolio/avl-copilot" },
  { id: 2, title: "BillboardIQ", platform: "SaaS Platform", industry: "Advertising", image: "/assets/portfolio/New/List Images/BillboardIQ.jpg", href: "/portfolio/campaignos" },
  { id: 6, title: "The Meatery", platform: "AI Solution", industry: "E-commerce", image: "/assets/portfolio/New/List Images/The Meatery.jpg", href: "/portfolio/meatery" },
  { id: 3, title: "Macromascot", platform: "Mobile App", industry: "Healthcare", image: "/assets/portfolio/New/List Images/Macromascot.jpg", href: "/portfolio/macromascot" },
  { id: 4, title: "AutoCar Intelligence", platform: "SaaS Platform", industry: "Automotive", image: "/assets/portfolio/New/List Images/AutoCar Intelligence.jpg", href: "/portfolio/autosync-intelligence" },
  { id: 5, title: "Pack Assist", platform: "AI Solution", industry: "Packaging", image: "/assets/portfolio/New/List Images/PackAssist.jpg", href: "/portfolio/packassist" },
  { id: 19, title: "StaffUp", platform: "SaaS Platform", platforms: ["AI Solution", "SaaS Platform"], industry: "Recruitment", image: "/assets/portfolio/New/List Images/StaffUp.png", href: "/portfolio/staffup" },
  { id: 7, title: "SuperHeart", platform: "Mobile App", industry: "Healthcare", image: "/assets/portfolio/New/List Images/SuperHeart.jpg", href: "/portfolio/superheart" },
  { id: 8, title: "Podcast Beacon", platform: "SaaS Platform", industry: "Media", image: "/assets/portfolio/mic.jpg", href: "/portfolio/podcastbeacon" },
  { id: 9, title: "Rack Room", platform: "SaaS Platform", industry: "Retail", image: "/assets/portfolio/download.jpg", href: "/portfolio/rackroom" },
  { id: 10, title: "Content Compass", platform: "AI Solution", industry: "Marketing", image: "/assets/portfolio/linkedin.jpg", href: "/portfolio/contentcompass" },
  { id: 11, title: "Atarim", platform: "SaaS Platform", industry: "Design & Development", image: "/assets/portfolio/atarim.png", href: "/portfolio/atarim" },
  { id: 12, title: "JarvisReach", platform: "SaaS Platform", industry: "Sales & Marketing", image: "/assets/portfolio/jarvis.png", href: "/portfolio/jarvisreach" },
  { id: 13, title: "Levellup", platform: "AI Solution", industry: "Gaming", image: "/assets/portfolio/level.png", href: "/portfolio/levellup" },
  { id: 14, title: "Farmin", platform: "AI Solution", industry: "Agriculture", image: "/assets/portfolio/farmin.avif", href: "/portfolio/farmin" },
  { id: 15, title: "Bipcards", platform: "SaaS Platform", industry: "Business", image: "/assets/portfolio/bipcards.png", href: "/portfolio/bipcards" },
  { id: 16, title: "Popcard", platform: "SaaS Platform", industry: "Business", image: "/assets/portfolio/popcard.png", href: "/portfolio/popcard" },
  { id: 17, title: "Artis", platform: "Blockchain", industry: "NFT & Digital Art", image: "/assets/portfolio/Artis.png", href: "/portfolio/artis" },
  { id: 18, title: "Alifa App", platform: "AI Solution", industry: "AI & Automation", image: "/assets/portfolio/file.jpg", href: "/portfolio/alifa" },
];

const technologies = ["All", "AI Solution", "SaaS Platform", "Mobile App", "Blockchain"];
const industries = ["All", "Advertising", "Healthcare", "Automotive", "Packaging", "E-commerce", "Media", "Retail", "Marketing", "Design & Development", "Sales & Marketing", "Gaming", "Agriculture", "Business", "NFT & Digital Art", "AI & Automation", "Media & Entertainment", "Enterprise", "Recruitment"];

function ProjectCard({
  title,
  industry,
  platform,
  platforms,
  image,
  href,
  headingColor,
  textColor,
}: {
  title: string;
  industry: string;
  platform: string;
  platforms?: string[];
  image: string;
  href: string;
  headingColor: string;
  textColor: string;
}) {
  const platformLabel = platforms ? platforms.join(" + ") : platform;
  return (
    <Link as={NextLink} href={href} _hover={{ textDecoration: "none" }}>
      <Box role="group">
        <Flex justify="space-between" align="flex-start" mb={3} gap={4}>
          <Heading as="h3" size="lg" color={headingColor} fontWeight="bold" flex="1" minW={0}>
            {title}
          </Heading>
          <HStack spacing={2} flexWrap="wrap" justifyContent="flex-end" flexShrink={0}>
            <Text color={textColor} fontSize="sm" whiteSpace="nowrap">
              {industry}, {platformLabel}
            </Text>
          </HStack>
        </Flex>
        <Box
          position="relative"
          aspectRatio={4 / 3}
          overflow="hidden"
          bg="teal.500"
          cursor="pointer"
        >
          <Box
            position="absolute"
            inset={0}
            opacity={1}
            transition="opacity 0.3s"
          >
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Box>
          {/* Hover state - teal 30% visible, text 100% visible */}
          <Box
            position="absolute"
            inset={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            opacity={0}
            transition="opacity 0.3s"
            _groupHover={{ opacity: 1 }}
            zIndex={1}
          >
            <Box position="absolute" inset={0} bg="teal.500" opacity={0.55} />
            <Heading
              as="h3"
              position="relative"
              zIndex={1}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              color="white"
              textAlign="center"
              px={6}
              py={4}
              lineHeight="tall"
              textShadow="0 2px 8px rgba(0,0,0,0.4)"
            >
              {title}
            </Heading>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

function ProjectCardList({
  title,
  industry,
  platform,
  platforms,
  image,
  href,
  headingColor,
  textColor,
  linkIconBg,
}: {
  title: string;
  industry: string;
  platform: string;
  platforms?: string[];
  image: string;
  href: string;
  headingColor: string;
  textColor: string;
  linkIconBg: string;
}) {
  const platformLabel = platforms ? platforms.join(" + ") : platform;
  return (
    <Link as={NextLink} href={href} _hover={{ textDecoration: "none" }}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        align={{ md: "stretch" }}
        gap={0}
        py={12}
        role="group"
      >
        {/* Image - left side, ~45% width on desktop - teal + title on hover */}
        <Box
          position="relative"
          w={{ base: "100%", md: "45%" }}
          flexShrink={0}
          overflow="hidden"
          sx={{ aspectRatio: "4/3" }}
          bg="teal.500"
        >
          <Box position="absolute" inset={0} opacity={1} transition="opacity 0.3s">
            <Image src={image} alt={title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 45vw" />
          </Box>
          <Box
            position="absolute"
            inset={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            opacity={0}
            transition="opacity 0.3s"
            _groupHover={{ opacity: 1 }}
            zIndex={1}
          >
            <Box position="absolute" inset={0} bg="teal.500" opacity={0.45} />
            <Heading
              as="h3"
              position="relative"
              zIndex={1}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              color="white"
              textAlign="center"
              px={6}
              py={4}
              lineHeight="tall"
              textShadow="0 2px 8px rgba(0,0,0,0.4)"
            >
              {title}
            </Heading>
          </Box>
        </Box>
        {/* Text content - right side */}
        <Flex
          flex={1}
          flexDirection="column"
          justify="flex-start"
          align="flex-start"
          pl={{ base: 0, md: 12 }}
          pt={{ base: 4, md: 0 }}
          minW={0}
        >
          <Flex justify="space-between" align="flex-start" mb={2} gap={4} w="100%">
            <Text color={textColor} fontSize="sm" fontWeight="medium">
              {industry}, {platformLabel}
            </Text>
            <Box
              as="span"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w="10"
              h="10"
              bg={linkIconBg}
              borderRadius="full"
              flexShrink={0}
            >
              <Icon as={FiArrowUpRight} boxSize={5} color="white" />
            </Box>
          </Flex>
          <Heading as="h3" size="xl" color={headingColor} fontWeight="bold" lineHeight="tight">
            {title}
          </Heading>
        </Flex>
      </Flex>
    </Link>
  );
}

export default function Portfolio() {
  const [selectedTech, setSelectedTech] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const techMatch =
        selectedTech === "All" ||
        (item.platforms ? item.platforms.includes(selectedTech) : item.platform === selectedTech);
      const industryMatch = selectedIndustry === "All" || item.industry === selectedIndustry;
      return techMatch && industryMatch;
    });
  }, [selectedTech, selectedIndustry]);

  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const filterColor = useColorModeValue("gray.800", "white");
  const dividerColor = useColorModeValue("gray.200", "gray.600");
  const menuBg = useColorModeValue("white", "charcoal.700");
  const menuBorder = useColorModeValue("gray.200", "whiteAlpha.200");
  const linkIconBg = useColorModeValue("teal.500", "teal.500");

  return (
    <>
      <EnhancedSEO
        title="Our Portfolio - Tech Emulsion"
        description="Explore Tech Emulsion's diverse portfolio of successful projects including AI-powered tools, SaaS platforms, mobile apps, and custom software development."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio"
      />

      <Box position="relative" minH="100vh" color={headingColor}>
        {/* Full-page gradient - scrolls with content (not fixed) */}
        <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={-1} overflow="hidden" pointerEvents="none">
          <BackgroundGradient height="100%" width="100%" />
        </Box>

        {/* Top margin - clear fixed navbar only */}
        <Box pt={{ base: 20, md: 24 }} />
        <Container maxW="container.xl" pt={6} pb={20} position="relative" zIndex={1}>
          {/* Breadcrumb */}
          <Flex justify="flex-end" mb={8}>
            <ButtonGroup sx={{ bg: "none", fontSize: "1rem", display: "flex", alignItems: "center" }}>
              <ButtonLink href="/" size="lg" sx={{ bg: "none", color: textColor, p: 0, "&:hover": { bg: "none", color: headingColor } }}>
                Home
              </ButtonLink>
              <Icon as={FaChevronRight} color={textColor} boxSize={4} />
              <Text as="span" ml="2" color={headingColor}>
                Portfolio
              </Text>
            </ButtonGroup>
          </Flex>

          {/* Header section - no bg, tall height, vertical line aligns with grid columns; mx/px match filter bar for aligned dividers */}
          <Box
            minH={{ base: "280px", md: "35vh" }}
            display={{ base: "block", md: "grid" }}
            gridTemplateColumns={{ md: "1fr 1fr" }}
            borderTopWidth="1px"
            borderColor={dividerColor}
            mx={-6}
            px={6}
          >
            {/* Left: Our work - top aligned, borderRight aligns with grid divider */}
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
              <Heading as="h1" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" color={headingColor}>
                Our work
              </Heading>
            </Box>
            {/* Right: Description - bottom aligned, right aligned */}
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
                We collaborate with innovative companies at every stage, acting as a partner as they accelerate and meet their goals. Take a look at some of our favorite projects to date.
              </Text>
            </Box>
          </Box>

          {/* Filter bar - bg matches page (transparent, gradient shows through) */}
          <Box
            bg="transparent"
            py={2}
            px={6}
            mx={-6}
            borderTopWidth="1px"
            borderBottomWidth="1px"
            borderColor={dividerColor}
          >
            <Flex justify="space-between" align="center" flexWrap="wrap">
              {/* Filter buttons - left: Platforms | Industries */}
              <HStack spacing={0} divider={<Box w="1px" bg={dividerColor} alignSelf="stretch" minH="6" />} align="center">
                <Menu>
                  <MenuButton
                    as={Box}
                    cursor="pointer"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    px={4}
                    py={2}
                    color={filterColor}
                    fontSize="sm"
                    _hover={{ opacity: 0.8 }}
                  >
                    Platforms {selectedTech !== "All" && `(${selectedTech})`}
                    <Icon as={FiChevronDown} boxSize={4} ml={2} />
                  </MenuButton>
                  <MenuList bg={menuBg} borderColor={menuBorder}>
                    {technologies.map((tech) => (
                      <MenuItem
                        key={tech}
                        onClick={() => setSelectedTech(tech)}
                        bg={selectedTech === tech ? "whiteAlpha.100" : "transparent"}
                        color={headingColor}
                        _hover={{ bg: "whiteAlpha.100" }}
                      >
                        {tech}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    as={Box}
                    cursor="pointer"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    px={4}
                    py={2}
                    color={filterColor}
                    fontSize="sm"
                    _hover={{ opacity: 0.8 }}
                  >
                    Industries {selectedIndustry !== "All" && `(${selectedIndustry})`}
                    <Icon as={FiChevronDown} boxSize={4} ml={2} />
                  </MenuButton>
                  <MenuList bg={menuBg} borderColor={menuBorder} maxH="300px" overflowY="auto">
                    {industries.map((ind) => (
                      <MenuItem
                        key={ind}
                        onClick={() => setSelectedIndustry(ind)}
                        bg={selectedIndustry === ind ? "whiteAlpha.100" : "transparent"}
                        color={headingColor}
                        _hover={{ bg: "whiteAlpha.100" }}
                      >
                        {ind}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </HStack>
              {/* View toggles - right side: Grid | List */}
              <HStack spacing={0} divider={<Box w="1px" bg={dividerColor} alignSelf="stretch" minH="6" />} align="center">
                <IconButton
                  aria-label="Grid view"
                  icon={<FiGrid />}
                  variant="ghost"
                  color={viewMode === "grid" ? filterColor : "gray.500"}
                  borderRadius={0}
                  px={3}
                  py={2}
                  onClick={() => setViewMode("grid")}
                  _hover={{ bg: "transparent", color: filterColor, opacity: 0.8 }}
                />
                <IconButton
                  aria-label="List view"
                  icon={<FiList />}
                  variant="ghost"
                  color={viewMode === "list" ? filterColor : "gray.500"}
                  borderRadius={0}
                  px={3}
                  py={2}
                  onClick={() => setViewMode("list")}
                  _hover={{ bg: "transparent", color: filterColor, opacity: 0.8 }}
                />
              </HStack>
            </Flex>
          </Box>

          {/* Project grid or list */}
          {viewMode === "grid" ? (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
              {filteredItems.map((item, idx) => (
                <Box
                  key={item.id}
                  py={6}
                  pr={{ base: 0, md: idx % 2 === 0 ? 6 : 0 }}
                  pl={{ base: 0, md: idx % 2 === 1 ? 6 : 0 }}
                  borderRight={{ base: "none", md: idx % 2 === 0 ? "1px solid" : "none" }}
                  borderBottom={
                    idx < 2 * Math.floor((filteredItems.length - 1) / 2) ? "1px solid" : "none"
                  }
                  borderColor={dividerColor}
                  sx={{
                    borderColor: "gray.200 !important",
                    _dark: { borderColor: "gray.600 !important" },
                  }}
                >
                  <ProjectCard
                    key={item.id}
                    title={item.title}
                    industry={item.industry}
                    platform={item.platform}
                    platforms={item.platforms}
                    image={item.image}
                    href={item.href}
                    headingColor={headingColor}
                    textColor={textColor}
                  />
                </Box>
              ))}
            </SimpleGrid>
          ) : (
            <Box>
              {filteredItems.map((item, idx) => (
                <Box key={item.id}>
                  {idx > 0 && <Divider borderColor={dividerColor} my={4} />}
                  <ProjectCardList
                    key={item.id}
                    title={item.title}
                    industry={item.industry}
                    platform={item.platform}
                    platforms={item.platforms}
                    image={item.image}
                    href={item.href}
                    headingColor={headingColor}
                    textColor={textColor}
                    linkIconBg={linkIconBg}
                  />
                </Box>
              ))}
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}
