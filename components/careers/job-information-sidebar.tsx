import { Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Job } from "data/jobs/types";

interface JobInformationSidebarProps {
  job: Job;
}

export const JobInformationSidebar: React.FC<JobInformationSidebarProps> = ({
  job,
}) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");

  const infoItems: { label: string; value?: string }[] = [
    { label: "Country", value: job.country },
    { label: "Industry", value: job.industry },
  ];

  return (
    <Box
      flex="1"
      position={{ base: "static", md: "sticky" }}
      top={{ base: 0, md: 24 }}
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        borderColor={borderColor}
        bg={cardBg}
        p={6}
      >
        <Heading as="h2" size="md" mb={4}>
          Job Information
        </Heading>
        <Stack spacing={3} fontSize="sm">
          {infoItems
            .filter((item) => item.value)
            .map((item) => (
              <Box key={item.label}>
                <Text fontWeight="semibold">{item.label}</Text>
                <Text>{item.value}</Text>
              </Box>
            ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default JobInformationSidebar;

