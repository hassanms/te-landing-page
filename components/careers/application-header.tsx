import React from "react";
import { Box, Container, Heading, Stack, Tag, Text, useColorModeValue } from "@chakra-ui/react";
import { Job } from "data/jobs/types";
import { SocialShareButtons } from "./social-share-buttons";

interface ApplicationHeaderProps {
  job: Job;
}

export const ApplicationHeader: React.FC<ApplicationHeaderProps> = ({ job }) => {
  const subTextColor = useColorModeValue("gray.600", "lightGrey.400");

  return (
    <Box
      borderBottomWidth="1px"
      borderColor={useColorModeValue("gray.100", "gray.700")}
      bg={useColorModeValue("white", "charcoal.900")}
      pt={{ base: 20, md: 24 }}
      pb={{ base: 10, md: 12 }}
      mb={8}
      mt={{ base: 40, md: 12 }}
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
            <Text fontSize="sm" color={subTextColor}>
              Share this job with your network
            </Text>
            <SocialShareButtons title={job.title} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ApplicationHeader;

