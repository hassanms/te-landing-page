import React from "react";
import { Card, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Job } from "data/jobs/types";
import { SocialShareButtons } from "./social-share-buttons";

interface ShareJobCardProps {
  job: Job;
  /** Override URL to share (e.g. job listing URL when on apply page) */
  shareUrl?: string;
}

export const ShareJobCard: React.FC<ShareJobCardProps> = ({ job, shareUrl }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");

  const jobUrl =
    shareUrl ??
    (typeof window !== "undefined"
      ? window.location.href
      : `https://techemulsion.com/careers/${job.slug || job.id}`);

  return (
    <Card
      w="100%"
      borderRadius="md"
      p={4}
      overflow="hidden"
      bg={cardBg}
      variant="elevated"
    >
      <Heading as="h2" size="md" mb={4} color={headingColor}>
        Share this job
      </Heading>
      <Stack spacing={4} fontSize="sm" align="left">
        <Text color={textColor} textAlign="left">
          Share this opportunity with your network
        </Text>
        <SocialShareButtons title={job.title} url={jobUrl} company={job.company} />
      </Stack>
    </Card>
  );
};

export default ShareJobCard;
