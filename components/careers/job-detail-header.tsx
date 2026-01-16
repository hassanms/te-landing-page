import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Job } from "data/jobs/types";
import { SocialShareButtons } from "./social-share-buttons";
import NextLink from "next/link";

interface JobDetailHeaderProps {
  job: Job;
}

export const JobDetailHeader: React.FC<JobDetailHeaderProps> = ({ job }) => {
  const subTextColor = useColorModeValue("gray.600", "lightGrey.400");

  return (
    <Box
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
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "3.5xl" }}>
              {job.title}
            </Heading>
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
            <Stack direction={{ base: "column", md: "row" }} spacing={3}>
              <Button
                variant="outline"
                colorScheme="teal"
                size="sm"
                as="a"
                href={`mailto:?subject=${encodeURIComponent(
                  `Job opportunity: ${job.title} at ${job.company}`,
                )}`}
              >
                Share job via email
              </Button>
              <Button
                as={NextLink}
                href={`/careers/${job.slug || job.id}/apply`}
                colorScheme="teal"
                size="sm"
              >
                I&apos;m interested
              </Button>
            </Stack>

            <SocialShareButtons title={job.title} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default JobDetailHeader;

