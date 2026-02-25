import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Job } from "data/jobs/types";
import JobCard from "./job-card";

interface JobListingsGridProps {
  jobs: Job[];
}

export const JobListingsGrid: React.FC<JobListingsGridProps> = ({ jobs }) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  if (!jobs.length) {
    return (
      <Box
        pt={16}
        pb={16}
        mt={12}
        mx={-6}
        px={6}
        borderTopWidth="1px"
        borderColor={dividerColor}
        sx={{
          borderColor: "gray.200 !important",
          _dark: { borderColor: "gray.600 !important" },
        }}
      >
        <Heading as="h2" size="lg" color={headingColor} mb={2}>
          No open roles right now
        </Heading>
        <Text color={textColor} fontSize="md">
          Check back soon or reach out to us at contact@techemulsion.com.
        </Text>
      </Box>
    );
  }

  return (
    <Box
      id="open-roles"
      mt={12}
      pt={10}
      mx={-6}
      px={6}
      borderTopWidth="1px"
      borderColor={dividerColor}
      sx={{
        borderColor: "gray.200 !important",
        _dark: { borderColor: "gray.600 !important" },
      }}
    >
      <Heading
        as="h2"
        size="md"
        color={headingColor}
        fontWeight="semibold"
        mb={8}
        letterSpacing="tight"
      >
        Open roles
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
        {jobs.map((job, idx) => (
          <Box
            key={job.id}
            py={6}
            pr={{ base: 0, md: idx % 2 === 0 ? 6 : 0 }}
            pl={{ base: 0, md: idx % 2 === 1 ? 6 : 0 }}
            borderRight={{
              base: "none",
              md: idx % 2 === 0 ? "1px solid" : "none",
            }}
            borderBottom={
              idx < 2 * Math.floor((jobs.length - 1) / 2) ? "1px solid" : "none"
            }
            borderColor={dividerColor}
            sx={{
              borderColor: "gray.200 !important",
              _dark: { borderColor: "gray.600 !important" },
            }}
          >
            <JobCard job={job} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default JobListingsGrid;
