import React, { ReactNode, useState, createContext, useContext, useEffect } from "react";
import { Box, Flex, useColorModeValue, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AdminSidebar } from "./admin-sidebar";
import { AdminHeader } from "./admin-header";
import { AdminFooter } from "./admin-footer";
import { useAuth } from "contexts/auth-context";

interface AdminLayoutContextType {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  sidebarWidth: string;
}

const AdminLayoutContext = createContext<AdminLayoutContextType>({
  isSidebarCollapsed: false,
  toggleSidebar: () => {},
  sidebarWidth: "260px",
});

export const useAdminLayout = () => useContext(AdminLayoutContext);

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const bgColor = useColorModeValue("white", "gray.900");
  const contentBg = useColorModeValue("white", "gray.800");
  const { user, loading } = useAuth();
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const sidebarWidth = isSidebarCollapsed ? "80px" : "260px";

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push("/admin/login");
    }
  }, [user, loading, router]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={bgColor}
      >
        <Box textAlign="center">
          <Spinner size="xl" color="teal.500" thickness="4px" />
          <Text mt={4} color="gray.500">
            Loading...
          </Text>
        </Box>
      </Box>
    );
  }

  // Don't render admin content if not authenticated
  if (!user) {
    return (
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={bgColor}
      >
        <Box textAlign="center">
          <Spinner size="xl" color="teal.500" thickness="4px" />
          <Text mt={4} color="gray.500">
            Redirecting to login...
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <AdminLayoutContext.Provider
      value={{ isSidebarCollapsed, toggleSidebar, sidebarWidth }}
    >
      <Box minH="100vh" bg={bgColor}>
        <Flex>
          {/* Sidebar - Full left side */}
          <AdminSidebar />

          {/* Main content area - After sidebar */}
          <Box
            flex="1"
            ml={0}
            minH="100vh"
            display="flex"
            flexDirection="column"
          >
            {/* Header - After sidebar */}
            <AdminHeader />

            {/* Content area */}
            <Box
              flex="1"
              as="main"
              mt={{ base: "60px", md: "70px" }}
              mb={{ base: "56px", md: "60px" }}
              px={{ base: 4, md: 6 }}
              py={6}
              transition="all 0.3s ease"
            >
              <Box
                bg={contentBg}
                borderRadius="lg"
                p={{ base: 4, md: 6 }}
                boxShadow="sm"
              >
                {children}
              </Box>
            </Box>

            {/* Footer */}
            <AdminFooter />
          </Box>
        </Flex>
      </Box>
    </AdminLayoutContext.Provider>
  );
};
