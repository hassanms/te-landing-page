import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

interface AutofillSectionProps {
  onResumeUpload: (file: File | null) => void;
  resumeFile: File | null;
}

export const AutofillSection: React.FC<AutofillSectionProps> = ({
  onResumeUpload,
  resumeFile,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const bgColor = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("gray.50", "gray.700");

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && isValidFileType(file)) {
      onResumeUpload(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && isValidFileType(file)) {
      onResumeUpload(file);
    }
  };

  const isValidFileType = (file: File): boolean => {
    const validTypes = [
      ".doc",
      ".docx",
      ".pdf",
      ".odt",
      ".rtf",
    ];
    const extension = file.name
      .substring(file.name.lastIndexOf("."))
      .toLowerCase();
    return validTypes.includes(extension);
  };

  return (
    <Box mb={8}>
      <Heading
        as="h2"
        fontSize="xl"
        fontWeight="semibold"
        color="teal.600"
        mb={2}
      >
        Autofill Application
      </Heading>
      <Text fontSize="sm" color="gray.600" mb={4}>
        Upload your resume/cv in seconds with the autofill option.
      </Text>

      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={6}
        align={{ base: "stretch", lg: "flex-start" }}
      >
        {/* Resume Upload Area */}
        <Box
          flex="1"
          borderWidth="2px"
          borderStyle="dashed"
          borderColor={isDragging ? "teal.400" : borderColor}
          borderRadius="md"
          p={8}
          textAlign="center"
          bg={isDragging ? hoverBg : bgColor}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          cursor="pointer"
          transition="all 0.2s"
          _hover={{ bg: hoverBg, borderColor: "teal.400" }}
          onClick={() => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = ".doc,.docx,.pdf,.odt,.rtf";
            input.onchange = (e) => {
              const target = e.target as HTMLInputElement;
              handleFileSelect({
                target: { files: target.files },
              } as React.ChangeEvent<HTMLInputElement>);
            };
            input.click();
          }}
        >
          <Stack spacing={2} align="center">
            <Text fontSize="md" fontWeight="medium" color="gray.700">
              Upload your resume or drag and drop it here
            </Text>
            <Text fontSize="xs" color="gray.500">
              Only .doc, .docx, .pdf, .odt, .rtf (Optional)
            </Text>
            {resumeFile && (
              <Text fontSize="sm" color="teal.600" fontWeight="medium" mt={2}>
                ✓ {resumeFile.name}
              </Text>
            )}
          </Stack>
        </Box>

        {/* Sign In Box */}
        <Box
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="md"
          p={6}
          bg={bgColor}
          minW={{ base: "100%", lg: "300px" }}
        >
          <Text fontSize="sm" color="gray.700" mb={4}>
            Please sign in to apply with Tech Emulsion
          </Text>
          <Stack spacing={3}>
            <Button
              colorScheme="teal"
              size="md"
              leftIcon={
                <Box
                  as="span"
                  fontWeight="bold"
                  fontSize="lg"
                  color="white"
                >
                  Z
                </Box>
              }
              isDisabled
              _disabled={{
                opacity: 0.6,
                cursor: "not-allowed",
              }}
            >
              Easy Apply
            </Button>
            <Button
              colorScheme="blue"
              size="md"
              leftIcon={
                <Box
                  as="span"
                  fontWeight="bold"
                  fontSize="lg"
                  color="white"
                >
                  i
                </Box>
              }
              isDisabled
              _disabled={{
                opacity: 0.6,
                cursor: "not-allowed",
              }}
            >
              Apply with Indeed
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AutofillSection;
