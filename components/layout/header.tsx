import * as React from "react";

import {
  Box,
  BoxProps,
  Container,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Navigation from "./navigation";
import { Logo } from "./logo";
import { ServicesDropdown } from "./services-dropdown";
import { useScroll } from "framer-motion";

// Portfolio and services detail pages get white navbar at top (excludes list pages)
const isHeroDetailPage = (pathname: string) =>
  pathname.startsWith("/portfolio/") ||
  pathname === "/portfolio-v4" ||
  pathname.startsWith("/services/");

export interface HeaderProps extends Omit<BoxProps, "children"> {}

export const Header = (props: HeaderProps) => {
  const ref = React.useRef<HTMLHeadingElement>(null);
  const [y, setY] = React.useState(0);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};
  const { colorMode } = useColorMode();
  const router = useRouter();

  const { scrollY } = useScroll();
  React.useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setY(v));
    return () => unsubscribe();
  }, [scrollY]);

  const onServicesOpen = React.useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  }, []);

  const onServicesClose = React.useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 120);
  }, []);

  React.useEffect(() => () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  }, []);

  // Close dropdown on route change
  React.useEffect(() => {
    setIsServicesOpen(false);
  }, [router.pathname]);

  const bg = useColorModeValue("whiteAlpha.700", "rgba(29, 32, 37, 0.7)");

  const isScrolled = y > height;
  const darkNavbar =
    colorMode === "light" &&
    !isScrolled &&
    isHeroDetailPage(router.pathname);

  const isHeroPageAtTop =
    !isScrolled && isHeroDetailPage(router.pathname);

  const useWhiteNav =
    colorMode === "light" &&
    !isScrolled &&
    !isServicesOpen &&
    isHeroDetailPage(router.pathname);

  const useLightLogo = isHeroPageAtTop && !isServicesOpen;

  return (
    <Box
      ref={ref}
      as="header"
      top="0"
      w="full"
      position="fixed"
      display="flex"
      flexDirection="column"
      backdropFilter="blur(5px)"
      zIndex="sticky"
      borderColor="whiteAlpha.100"
      transitionProperty="common"
      transitionDuration="normal"
      bg={isScrolled || isServicesOpen ? bg : ""}
      boxShadow={isScrolled || isServicesOpen ? "md" : ""}
      borderBottomWidth={isScrolled || isServicesOpen ? "1px" : ""}
      {...props}
    >
      <Container maxW="container.xl" px="8" py="4">
        <Flex width="full" align="center" justify="space-between">
          <Logo
            useLightLogo={useLightLogo ? true : undefined}
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }}
          />
          <Navigation
            isScrolled={isScrolled}
            isServicesOpen={isServicesOpen}
            onServicesOpen={onServicesOpen}
            onServicesClose={onServicesClose}
          />
        </Flex>
      </Container>
      <ServicesDropdown
        isOpen={isServicesOpen}
        onOpen={onServicesOpen}
        onClose={onServicesClose}
        useWhiteNav={useWhiteNav}
      />
    </Box>
  );
};
