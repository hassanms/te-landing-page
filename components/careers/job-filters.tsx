import {
  Box,
  Flex,
  Input,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Job } from "data/jobs/types";

export interface JobFilterState {
  search: string;
  location: string;
  employmentType: string;
}

interface JobFiltersProps {
  jobs: Job[];
  value: JobFilterState;
  onChange: (next: JobFilterState) => void;
}

export const JobFilters: React.FC<JobFiltersProps> = ({
  jobs,
  value,
  onChange,
}) => {
  const locations = Array.from(
    new Set(jobs.flatMap((job) => job.locations)),
  ).sort();
  const employmentTypes = Array.from(
    new Set(jobs.map((job) => job.employmentType)),
  );

  const handleChange = (key: keyof JobFilterState, newValue: string) => {
    onChange({ ...value, [key]: newValue });
  };

  const labelColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Box>
      <Text mb={3} fontWeight="semibold" color={labelColor}>
        Filter roles
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
      >
        <Input
          placeholder="Search by title or keyword"
          value={value.search}
          onChange={(event) => handleChange("search", event.target.value)}
        />
        <Flex gap={4} w={{ base: "100%", md: "auto" }} flexShrink={0}>
          <Select
            placeholder="All locations"
            value={value.location}
            onChange={(event) => handleChange("location", event.target.value)}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </Select>
          <Select
            placeholder="All types"
            value={value.employmentType}
            onChange={(event) =>
              handleChange("employmentType", event.target.value)
            }
          >
            {employmentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </Flex>
      </Stack>
    </Box>
  );
};

export default JobFilters;

