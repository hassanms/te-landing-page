import { Box, Button, Heading, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { Job } from "data/jobs/types";
import NextLink from "next/link";

interface JobDescriptionProps {
  job: Job;
}

export const JobDescription: React.FC<JobDescriptionProps> = ({ job }) => {
  return (
    <Stack spacing={8} flex="2">
      <Box>
        <Heading as="h2" size="md" mb={4}>
          Job Description
        </Heading>
        <Text mb={4}>{job.description}</Text>
        {job.responsibilities.length > 0 && (
          <List spacing={2}>
            {job.responsibilities.map((item) => (
              <ListItem key={item}>• {item}</ListItem>
            ))}
          </List>
        )}
      </Box>

      {job.requirements.length > 0 && (
        <Box>
          <Heading as="h3" size="sm" mb={3}>
            Requirements
          </Heading>
          <List spacing={2}>
            {job.requirements.map((item) => (
              <ListItem key={item}>• {item}</ListItem>
            ))}
          </List>
        </Box>
      )}

      {job.locations.length > 0 && (
        <Stack spacing={4}>
          <Box>
            <Text fontSize="sm" color="gray.600">
              Please note that this role is currently open for{" "}
              {job.locations.join(", ")}.
            </Text>
          </Box>

          <Box>
            <Button
              as={NextLink}
              href={`/careers/${job.slug || job.id}/apply`}
              colorScheme="teal"
              size="sm"
            >
              I&apos;m interested
            </Button>
          </Box>
        </Stack>
      )}
    </Stack>
  );
};

export default JobDescription;

