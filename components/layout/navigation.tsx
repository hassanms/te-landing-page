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

const Navigation: React.FC = () => {
  const { colorMode } = useColorMode();
  const mobileNav = useDisclosure();
  const router = useRouter();

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
            color: variant === "varient" ? "white" : "",
            "&:hover": {
              backgroundColor: variant === "varient" ? "teal.600" : "",
              color:
                variant === "varient" || colorMode === "dark"
                  ? "white"
                  : "teal.500",
            },
          }}
        >
          {props.label}
        </NavLink>
      ))}

      <ThemeToggle />

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  );
};

export default Navigation;
