import * as React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import siteConfig from "data/config";
import { NavLink } from "components/nav-link";
import { MobileNavButton } from "components/mobile-nav";
import { MobileNavContent } from "components/mobile-nav";
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import ThemeToggle from "./theme-toggle";

// Portfolio and services detail pages get white nav text at top (excludes list pages)
const isHeroDetailPage = (pathname: string) =>
  pathname.startsWith("/portfolio/") ||
  pathname === "/portfolio-v4" ||
  pathname.startsWith("/services/");

const NO_THEME_TOGGLE_PATHS = [
  "/index-v2",
  "/index-v3",
];

interface NavigationProps {
  isScrolled?: boolean;
  isServicesOpen?: boolean;
  onServicesOpen?: () => void;
  onServicesClose?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isScrolled = true,
  isServicesOpen = false,
  onServicesOpen,
  onServicesClose,
}) => {
  const { colorMode } = useColorMode();
  const mobileNav = useDisclosure();
  const router = useRouter();
  const useWhiteNav =
    colorMode === "light" &&
    !isScrolled &&
    !isServicesOpen &&
    isHeroDetailPage(router.pathname);
  
  const hideThemeToggle = NO_THEME_TOGGLE_PATHS.some((path) => router.pathname === path);

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>(null);

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href?: string
  ) => {
    if (href) {
      // If navigating to a different page, let Next.js handle it
      router.push(href);
      return;
    }
  };

  return (
    <HStack spacing="2" flexShrink={0}>
      {siteConfig.header.links.map(({ href, variant, ...props }, i) => {
        const isServices = href === "/services";
        const linkEl = (
          <NavLink
            display={["none", null, "block"]}
            href={href}
            onClick={(
              e:
                | React.MouseEvent<HTMLAnchorElement, MouseEvent>
                | MouseEvent
                | any
            ) => {
              if (isServices) {
                e.preventDefault();
                return;
              }
              handleNavigation(e, href);
            }}
            key={i}
            isActive={
              !!(href && !!router.asPath.match(new RegExp(href)))
            }
            {...props}
            sx={{
              background: variant === "varient" ? "teal.500" : "",
              color:
                variant === "varient" ? "white" : useWhiteNav ? "white" : "",
              "&:hover": {
                backgroundColor: variant === "varient" ? "teal.600" : "",
                color:
                  variant === "varient" || colorMode === "dark" || useWhiteNav
                    ? "white"
                    : "teal.500",
              },
            }}
          >
            {props.label}
          </NavLink>
        );
        if (isServices && onServicesOpen && onServicesClose) {
          return (
            <Box
              key={i}
              display={["none", null, "block"]}
              position="relative"
              onMouseEnter={onServicesOpen}
              onMouseLeave={onServicesClose}
            >
              {linkEl}
            </Box>
          );
        }
        return linkEl;
      })}

      {!hideThemeToggle && <ThemeToggle color={useWhiteNav ? "white" : undefined} />}

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
        color={useWhiteNav ? "white" : undefined}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  );
};

export default Navigation;
