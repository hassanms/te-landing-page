import React from "react";
import { Box, Button, Container, Heading, Stack, Tag, Text, useColorModeValue } from "@chakra-ui/react";
import { Job } from "data/jobs/types";
import { SocialShareButtons } from "./social-share-buttons";

interface ApplicationHeaderProps {
  job: Job;
}

export const ApplicationHeader: React.FC<ApplicationHeaderProps> = ({ job }) => {
  const subTextColor = useColorModeValue("gray.600", "lightGrey.400");
  
  // Get the job detail page URL (not the apply page)
  const jobUrl = typeof window !== "undefined"
    ? window.location.origin + `/careers/${job.slug || job.id}`
    : `https://techemulsion.com/careers/${job.slug || job.id}`;

  // Create email share link with subject and body
  const emailSubject = encodeURIComponent(`Job opportunity: ${job.title} at ${job.company}`);
  const emailBody = encodeURIComponent(
    `Check out this job opportunity:\n\n${job.title}\n${job.company}\n\nView details: ${jobUrl}`
  );
  const emailShareLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;

  return (
    <Box
      borderBottomWidth="1px"
      borderColor={useColorModeValue("gray.100", "gray.700")}
      bg={useColorModeValue("white", "charcoal.900")}
      pt={{ base: 20, md: 24 }}
      pb={{ base: 10, md: 12 }}
      mb={8}
    >
      <Container maxW="container.xl">
        <Stack spacing={6} align="center" textAlign="center">
          <Stack spacing={1}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="semibold"
              color={subTextColor}
            >
              {job.company} &nbsp;|&nbsp; {job.employmentType}
            </Text>
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "3.5xl" }}>{job.title}</Heading>
            <Stack direction="row" spacing={3} justify="center">
              <Tag size="sm" colorScheme="teal">
                {job.department}
              </Tag>
              {job.locations[0] && (
                <Tag size="sm" variant="subtle">
                  {job.locations[0]}
                </Tag>
              )}
            </Stack>
          </Stack>

          <Stack spacing={3} align="center">
            <Button
              variant="outline"
              colorScheme="teal"
              size="sm"
              as="a"
              href={emailShareLink}
            >
              Share job via email
            </Button>
            <Text fontSize="sm" color={subTextColor}>
              Share this job with your network
            </Text>
            <SocialShareButtons title={job.title} url={jobUrl} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ApplicationHeader;

