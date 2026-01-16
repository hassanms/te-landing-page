import React from "react";
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
        <Box
          mb={4}
          dangerouslySetInnerHTML={{ __html: job.description }}
          sx={{
            "& p": {
              mb: 3,
              lineHeight: "1.7",
            },
            "& h1, & h2, & h3, & h4": {
              fontWeight: "bold",
              mb: 2,
              mt: 4,
            },
            "& h1": { fontSize: "2xl" },
            "& h2": { fontSize: "xl" },
            "& h3": { fontSize: "lg" },
            "& ul, & ol": {
              ml: 6,
              mb: 3,
            },
            "& li": {
              mb: 1,
            },
            "& strong": {
              fontWeight: "bold",
            },
            "& em": {
              fontStyle: "italic",
            },
            "& u": {
              textDecoration: "underline",
            },
            "& a": {
              color: "teal.500",
              textDecoration: "underline",
              _hover: {
                color: "teal.600",
              },
            },
          }}
        />
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

