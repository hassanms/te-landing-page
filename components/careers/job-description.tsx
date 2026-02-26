import React from "react";
import { Box, Heading, List, ListItem, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Job } from "data/jobs/types";

interface JobDescriptionProps {
  job: Job;
}

export const JobDescription: React.FC<JobDescriptionProps> = ({ job }) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const noteTextColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Stack spacing={8} flex="2" maxW={{ base: "100%", lg: "800px" }}>
      <Box>
        <Heading as="h2" size="md" mb={4} color={headingColor}>
          Job Description
        </Heading>
        <Box
          mb={4}
          dangerouslySetInnerHTML={{ __html: job.description }}
          sx={{
            "& p": {
              mb: 1.5,
              lineHeight: "1.7",
              color: textColor,
            },
            "& p:empty": {
              display: "none",
            },
            "& h1, & h2, & h3, & h4": {
              fontWeight: "bold",
              mb: 1.5,
              mt: 3,
              color: headingColor,
            },
            "& h1": { fontSize: "2xl" },
            "& h2": { fontSize: "xl" },
            "& h3": { fontSize: "lg" },
            "& ul, & ol": {
              ml: 6,
              mb: 1.5,
              color: textColor,
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
          <List spacing={2} color={textColor}>
            {job.responsibilities.map((item) => (
              <ListItem key={item}>• {item}</ListItem>
            ))}
          </List>
        )}
      </Box>

      {job.requirements.length > 0 && (
        <Box>
          <Heading as="h2" size="md" mb={3} color={headingColor}>
            Requirements
          </Heading>
          <List spacing={2} color={textColor}>
            {job.requirements.map((item) => (
              <ListItem key={item} display="flex" ml={1} alignItems="flex-start" gap="0.5rem">
                <strong>•</strong>
                <span>{item}</span>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {job.locations.length > 0 && (
        <Box>
          <Text fontSize="sm" color={noteTextColor}>
            Please note that this role is currently open for{" "}
            {job.locations.join(", ")}.
          </Text>
        </Box>
      )}
    </Stack>
  );
};

export default JobDescription;

