import React, { ReactNode, useState, createContext, useContext } from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { AdminSidebar } from "./admin-sidebar";
import { AdminHeader } from "./admin-header";
import { AdminFooter } from "./admin-footer";

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

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const sidebarWidth = isSidebarCollapsed ? "80px" : "260px";

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
