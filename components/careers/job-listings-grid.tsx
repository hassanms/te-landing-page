import { SimpleGrid, Stack, Heading, Text, Box } from "@chakra-ui/react";
import { Job } from "data/jobs/types";
import { JobCard } from "./job-card";

interface JobListingsGridProps {
  jobs: Job[];
}

export const JobListingsGrid: React.FC<JobListingsGridProps> = ({ jobs }) => {
  if (!jobs.length) {
    return (
      <Box textAlign="center" py={16}>
        <Heading size="md" mb={2}>
          No open roles right now
        </Heading>
        <Text color="gray.500">
          Check back soon or reach out to us at contact@techemulsion.com.
        </Text>
      </Box>
    );
  }

  return (
    <Stack spacing={8} id="open-roles" align="center">
      <Stack spacing={2} textAlign="center">
        <Heading as="h2" size="lg">
          Some opportunities for you to explore
        </Heading>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default JobListingsGrid;

