import React from "react";
import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Job } from "data/jobs/types";
import { FiArrowUpRight } from "react-icons/fi";
import { Icon } from "@chakra-ui/react";

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const linkIconBg = useColorModeValue("teal.500", "teal.500");

  return (
    <Box
      as={NextLink}
      href={`/careers/${job.slug || job.id}`}
      _hover={{ textDecoration: "none" }}
      role="group"
      p={3}
    >
      <Flex justify="space-between" align="flex-start" mb={3} gap={4}>
        <Heading
          as="h3"
          size="lg"
          color={headingColor}
          fontWeight="bold"
          flex="1"
          minW={0}
        >
          {job.title}
        </Heading>
        <Box
          as="span"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          w="9"
          h="9"
          bg={linkIconBg}
          borderRadius="full"
          flexShrink={0}
          opacity={0}
          _groupHover={{ opacity: 1 }}
          transition="opacity 0.2s"
        >
          <Icon as={FiArrowUpRight} boxSize={4} color="white" />
        </Box>
      </Flex>
      <HStack spacing={2} flexWrap="wrap" mb={3} gap={1}>
        <Badge colorScheme="teal" variant="subtle" fontSize="sm" fontWeight="medium">
          {job.employmentType}
        </Badge>
        <Text color={textColor} fontSize="md" as="span">
          {job.department}
        </Text>
        {job.totalPositions && (
          <Text color={textColor} fontSize="md" as="span">
            · {job.totalPositions}{" "}
            {job.totalPositions === 1 ? "Position" : "Positions"}
          </Text>
        )}
      </HStack>
      <Text color={textColor} fontSize="md" lineHeight="tall" noOfLines={2}>
        {job.shortDescription}
      </Text>
      <Text color={textColor} fontSize="sm" mt={2} opacity={0.9}>
        {job.locations.join(" · ")}
      </Text>
    </Box>
  );
};

export default JobCard;
