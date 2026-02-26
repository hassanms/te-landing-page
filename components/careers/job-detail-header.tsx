import React from "react";
import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Job } from "data/jobs/types";
import { FaChevronRight } from "react-icons/fa";
import { ButtonLink } from "components/button-link";

interface JobDetailHeaderProps {
  job: Job;
}

export const JobDetailHeader: React.FC<JobDetailHeaderProps> = ({ job }) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  return (
    <>
      {/* Breadcrumb - matches portfolio, services, blog, careers */}
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
          <ButtonLink
            href="/careers"
            size="lg"
            sx={{
              bg: "none",
              color: textColor,
              p: 0,
              "&:hover": { bg: "none", color: headingColor },
            }}
          >
            Careers
          </ButtonLink>
          <Icon as={FaChevronRight} color={textColor} boxSize={4} />
          <Text as="span" ml="2" color={headingColor}>
            Job details
          </Text>
        </ButtonGroup>
      </Flex>

      {/* Header section - same layout as portfolio, services, blog, careers */}
      <Box
        minH={{ base: "280px", md: "35vh" }}
        display={{ base: "block", md: "grid" }}
        gridTemplateColumns={{ md: "1fr 1fr" }}
        borderTopWidth="1px"
        borderColor={dividerColor}
        mx={-6}
        px={6}
      >
        {/* Left: Job details - top aligned */}
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
            Job details
          </Heading>
        </Box>
        {/* Right: Job info & CTA - matches portfolio/services description style */}
        <Box
          pl={{ base: 0, md: 6 }}
          py={{ base: 4, md: 8 }}
          display="flex"
          alignItems={{ base: "flex-start", md: "flex-end" }}
          justifyContent={{ base: "flex-start", md: "flex-end" }}
        >
          <Box maxW={{ md: "420px" }}>
            <Heading
              as="h2"
              size="md"
              color={headingColor}
              fontWeight="semibold"
              lineHeight="1.3"
              mb={2}
            >
              {job.title}
            </Heading>
            <Text fontSize="lg" color={textColor} lineHeight="tall">
              {[job.department, job.locations?.[0], job.employmentType]
                .filter(Boolean)
                .join(" · ")}
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Divider bar - matches portfolio, services, careers */}
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

export default JobDetailHeader;
