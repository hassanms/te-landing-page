import * as React from "react";
import { HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import siteConfig from "data/config";
import { NavLink } from "components/nav-link";
import { MobileNavButton } from "components/mobile-nav";
import { MobileNavContent } from "components/mobile-nav";
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import ThemeToggle from "./theme-toggle";

const HERO_LIGHT_NAV_PATHS = [
  "/portfolio/autosync-intelligence",
  "/portfolio/macromascot-v2",
  "/portfolio-v2",
  "/portfolio-v3",
];

interface NavigationProps {
  isScrolled?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled = true }) => {
  const { colorMode } = useColorMode();
  const mobileNav = useDisclosure();
  const router = useRouter();
  const useWhiteNav =
    colorMode === "light" &&
    !isScrolled &&
    HERO_LIGHT_NAV_PATHS.some((path) => router.pathname === path);

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
      {siteConfig.header.links.map(({ href, variant, ...props }, i) => (
        <NavLink
          display={["none", null, "block"]}
          href={href}
          onClick={(
            e:
              | React.MouseEvent<HTMLAnchorElement, MouseEvent>
              | MouseEvent
              | any
          ) => handleNavigation(e, href)}
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
      ))}

      <ThemeToggle color={useWhiteNav ? "white" : undefined} />

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
