import React from "react";
import {
  Box,
  HStack,
  IconButton,
  Button,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import ThemeToggle from "components/layout/theme-toggle";
import { useAdminLayout } from "./admin-layout";
import { useAuth } from "contexts/auth-context";
import { FiMenu, FiLogOut } from "react-icons/fi";

export const AdminHeader: React.FC = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const { sidebarWidth, toggleSidebar } = useAdminLayout();
  const { user, signOut } = useAuth();

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={{ base: 0, md: sidebarWidth }}
      right={0}
      zIndex={999}
      bg={bgColor}
      borderBottom="1px solid"
      borderColor={borderColor}
      h={{ base: "60px", md: "70px" }}
      boxShadow="sm"
      transition="left 0.3s ease"
    >
      <HStack
        justify="space-between"
        align="center"
        h="100%"
        px={{ base: 4, md: 6 }}
        maxW="100%"
        spacing={4}
      >
        <HStack spacing={4}>
          <IconButton
            aria-label="Toggle sidebar"
            icon={<FiMenu />}
            variant="ghost"
            onClick={toggleSidebar}
            display={{ base: "none", md: "flex" }}
          />
        </HStack>

        <HStack spacing={4}>
          {user && (
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.100")}
              display={{ base: "none", md: "block" }}
            >
              {user.email}
            </Text>
          )}
          <Button
            size="sm"
            variant="ghost"
            leftIcon={<FiLogOut />}
            onClick={signOut}
            colorScheme="red"
          >
            Logout
          </Button>
          <ThemeToggle />
        </HStack>
      </HStack>
    </Box>
  );
};
