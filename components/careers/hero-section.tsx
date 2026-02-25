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
import { FaChevronRight } from "react-icons/fa";

export const CareersHeroSection: React.FC = () => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  return (
    <>
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
            Careers
          </Text>
        </ButtonGroup>
      </Flex>

      {/* Header section - same layout as portfolio and services */}
      <Box
        minH={{ base: "280px", md: "35vh" }}
        display={{ base: "block", md: "grid" }}
        gridTemplateColumns={{ md: "1fr 1fr" }}
        borderTopWidth="1px"
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
            Join us
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
            We know that finding a meaningful and rewarding career can be a long
            journey. Our goal is to make that process easy for you and to create
            a work environment that&apos;s enriching—one that you&apos;ll look
            forward to every day.
          </Text>
        </Box>
      </Box>

      {/* Divider bar - matches portfolio and services */}
      <Box
        bg="transparent"
        py={2}
        px={6}
        mx={-6}
        borderTopWidth="1px"
        borderColor={dividerColor}
      />
    </>
  );
};

export default CareersHeroSection;
