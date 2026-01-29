import React from "react";
import { Box, Text, HStack, useColorModeValue } from "@chakra-ui/react";

export const AdminFooter: React.FC = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Box
      as="footer"
      bg={bgColor}
      borderTop="1px solid"
      borderColor={borderColor}
      boxShadow="sm"
      mt={4}
      py={4}
    >
      <HStack justify="center" align="center" px={{ base: 4, md: 6 }}>
        <Text fontSize="sm" color={textColor}>
          © {new Date().getFullYear()} Tech Emulsion. Admin Panel.
        </Text>
      </HStack>
    </Box>
  );
};
