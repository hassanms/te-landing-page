import React from "react";
import { Box, Text, HStack, useColorModeValue } from "@chakra-ui/react";

interface AdminFooterProps {
  sidebarWidth?: string;
}

export const AdminFooter: React.FC<AdminFooterProps> = ({ sidebarWidth = "0px" }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      as="footer"
      position="fixed"
      bottom={0}
      left={sidebarWidth}
      right={0}
      bg={bgColor}
      borderTop="1px solid"
      borderColor={borderColor}
      h="60px"
      zIndex={999}
      transition="left 0.3s ease"
      boxShadow="sm"
    >
      <HStack
        justify="center"
        align="center"
        h="100%"
        px={6}
      >
        <Text fontSize="sm" color={textColor}>
          © {new Date().getFullYear()} Tech Emulsion. Admin Panel.
        </Text>
      </HStack>
    </Box>
  );
};
