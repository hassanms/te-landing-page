import React from "react";
import { Box, Card, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Job } from "data/jobs/types";

interface JobInformationSidebarProps {
  job: Job;
}

export const JobInformationSidebar: React.FC<JobInformationSidebarProps> = ({
  job,
}) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");

  const infoItems: { label: string; value?: string }[] = [
    { label: "Country", value: job.country },
    { label: "Industry", value: job.industry },
    ...(job.totalPositions
      ? [
          {
            label: "Total Positions",
            value: `${job.totalPositions} ${job.totalPositions === 1 ? "Position" : "Positions"}`,
          },
        ]
      : []),
  ];

  return (
    <Box
      w="100%"
      position={{ base: "static", md: "sticky" }}
      top={{ base: 0, md: 24 }}
    >
      <Card
        w="100%"
        borderRadius="md"
        p={4}
        overflow="hidden"
        bg={cardBg}
        variant="elevated"
      >
        <Heading as="h2" size="md" mb={4} color={headingColor}>
          Job Information
        </Heading>
        <Stack spacing={3} fontSize="sm">
          {infoItems
            .filter((item) => item.value)
            .map((item) => (
              <Box key={item.label}>
                <Text fontWeight="semibold" color={headingColor}>{item.label}</Text>
                <Text color={textColor}>{item.value}</Text>
              </Box>
            ))}
        </Stack>
      </Card>
    </Box>
  );
};

export default JobInformationSidebar;

