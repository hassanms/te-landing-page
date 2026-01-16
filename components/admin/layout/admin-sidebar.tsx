import React from "react";
import {
  Box,
  VStack,
  Text,
  useColorModeValue,
  IconButton,
  HStack,
  Tooltip,
  Divider,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  FiHome,
  FiBriefcase,
  FiFileText,
  FiX,
  FiMenu,
} from "react-icons/fi";
import { Logo } from "data/logo";
import { useAdminLayout } from "./admin-layout";
import Image from "next/image";

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    icon: FiHome,
    href: "/admin",
  },
  {
    label: "Jobs",
    icon: FiBriefcase,
    href: "/admin/jobs",
  },
  {
    label: "Applications",
    icon: FiFileText,
    href: "/admin/applications",
  },
];

export const AdminSidebar: React.FC = () => {
  const router = useRouter();
  const { isSidebarCollapsed, toggleSidebar } = useAdminLayout();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const activeBg = useColorModeValue("teal.500", "teal.600");
  const activeColor = "white";
  const hoverBg = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const brandTextColor = useColorModeValue("gray.800", "white");

  const isActive = (href: string) => {
    if (href === "/admin") {
      return router.pathname === "/admin";
    }
    return router.pathname.startsWith(href);
  };

  const handleNavClick = (href: string) => {
    const adminSecret = process.env.NEXT_PUBLIC_ADMIN_SECRET || "your-admin-secret-key";
    router.push(`${href}?secret=${adminSecret}`);
    setIsMobileOpen(false);
  };

  const sidebarWidth = isSidebarCollapsed ? "80px" : "260px";

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
          zIndex={999}
          onClick={() => setIsMobileOpen(false)}
          display={{ base: "block", md: "none" }}
        />
      )}

      {/* Sidebar - Full left side */}
      <Box
        as="aside"
        position="relative"
        w={{ base: "260px", md: sidebarWidth }}
        minH="100vh"
        bg={bgColor}
        borderRight="1px solid"
        borderColor={borderColor}
        transform={{
          base: isMobileOpen ? "translateX(0)" : "translateX(-100%)",
          md: "translateX(0)",
        }}
        transition="width 0.3s ease, transform 0.3s ease"
        zIndex={1000}
        overflowY="auto"
        overflowX="hidden"
        boxShadow="sm"
        flexShrink={0}
      >
        <VStack align="stretch" spacing={0} p={4}>
          {/* Logo Section */}
          <Box
            p={4}
            mb={4}
            display="flex"
            alignItems="center"
            justifyContent={isSidebarCollapsed ? "center" : "flex-start"}
            minH="60px"
          >
            {isSidebarCollapsed ? (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="100%"
                h="100%"
              >
                <Image
                  src="/assets/icons/logo-icon.svg"
                  alt="Tech Emulsion Icon"
                  width={100}
                  height={100}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>
            ) : (
              <Logo />
            )}
          </Box>

          {/* Mobile Close Button */}
          <HStack justify="space-between" mb={4} display={{ base: "flex", md: "none" }}>
            <Text fontSize="lg" fontWeight="bold" color={textColor}>
              Admin Menu
            </Text>
            <IconButton
              aria-label="Close menu"
              icon={<FiX />}
              size="sm"
              variant="ghost"
              onClick={() => setIsMobileOpen(false)}
            />
          </HStack>

          <Divider mb={4} display={{ base: "block", md: "none" }} />

          {/* Navigation Items */}
          <VStack align="stretch" spacing={2}>
            {navItems.map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;

              const navButton = (
                <Box
                  as="button"
                  onClick={() => handleNavClick(item.href)}
                  w="100%"
                  p={isSidebarCollapsed ? 3 : 4}
                  borderRadius="lg"
                  bg={active ? activeBg : "transparent"}
                  color={active ? activeColor : textColor}
                  fontWeight={active ? "semibold" : "normal"}
                  _hover={{
                    bg: active ? activeBg : hoverBg,
                  }}
                  transition="all 0.2s"
                  textAlign="left"
                  display="flex"
                  alignItems="center"
                  justifyContent={isSidebarCollapsed ? "center" : "flex-start"}
                >
                  <HStack spacing={isSidebarCollapsed ? 0 : 4} justify="center">
                    <Icon size={22} />
                    {!isSidebarCollapsed && (
                      <Text fontSize="sm">{item.label}</Text>
                    )}
                  </HStack>
                </Box>
              );

              return isSidebarCollapsed ? (
                <Tooltip
                  key={item.href}
                  label={item.label}
                  placement="right"
                  hasArrow
                >
                  {navButton}
                </Tooltip>
              ) : (
                <Box key={item.href}>{navButton}</Box>
              );
            })}
          </VStack>
        </VStack>
      </Box>

      {/* Mobile Menu Button - Only show when sidebar is closed */}
      {!isMobileOpen && (
        <Box
          position="fixed"
          left={4}
          top={4}
          zIndex={998}
          display={{ base: "block", md: "none" }}
        >
          <IconButton
            aria-label="Open menu"
            icon={<FiMenu />}
            onClick={() => setIsMobileOpen(true)}
            size="sm"
            variant="solid"
            colorScheme="teal"
          />
        </Box>
      )}
    </>
  );
};
