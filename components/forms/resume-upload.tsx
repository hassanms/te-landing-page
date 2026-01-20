import React from "react";
import { Box, Input, Text, useColorModeValue } from "@chakra-ui/react";

interface ResumeUploadProps {
  onFileChange: (file: File | null) => void;
  error?: string;
  fileName?: string;
}

export const ResumeUpload: React.FC<ResumeUploadProps> = ({
  onFileChange,
  error,
  fileName,
}) => {
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box>
      <Text mb={2} fontWeight="600">
        Upload Your Resume *
      </Text>
      <Input
        type="file"
        accept=".pdf,.doc,.docx,.odt,.rtf"
        onChange={(event) => {
          const file = event.target.files?.[0] ?? null;
          onFileChange(file);
        }}
        sx={{
          padding: "0.75rem",
          border: "1px dashed",
          borderColor: error ? "red.500" : borderColor,
          borderRadius: "md",
          backgroundColor: useColorModeValue("gray.50", "gray.700"),
        }}
      />
      <Text fontSize="sm" color="gray.500" mt={2}>
        Only .doc, .docx, .pdf, .odt, .rtf (max 7MB)
      </Text>
      {(fileName || error) && (
        <Text
          fontSize="sm"
          mt={2}
          color={error ? "red.500" : "gray.600"}
        >
          {error || fileName}
        </Text>
      )}
    </Box>
  );
};

export default ResumeUpload;

