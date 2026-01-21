import React from "react";
import {
  Badge,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Job } from "data/jobs/types";

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Box
      as={NextLink}
      href={`/careers/${job.slug || job.id}`}
      borderWidth="1px"
      borderRadius="lg"
      borderColor={borderColor}
      p={6}
      bg={cardBg}
      boxShadow="sm"
      _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
      transition="all 0.2s ease"
    >
      <Stack spacing={3}>
        <Heading as="h3" fontSize="lg" color={useColorModeValue("teal.700", "teal.300")}>
          {job.title}
        </Heading>
        <Stack direction="row" spacing={3}>
          <Badge colorScheme="teal">{job.employmentType}</Badge>
          <Badge variant="subtle">{job.department}</Badge>
        </Stack>
        <Text color={textColor} noOfLines={3}>
          {job.shortDescription}
        </Text>
        <Text fontSize="sm" color={textColor}>
          {job.locations.join(" · ")}
        </Text>
        <Button
          mt={2}
          size="sm"
          colorScheme="teal"
          alignSelf="flex-start"
        >
          View Details
        </Button>
      </Stack>
    </Box>
  );
};

export default JobCard;

