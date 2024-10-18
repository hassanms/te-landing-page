import * as React from "react";
import { HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import siteConfig from "data/config";
import { NavLink } from "components/nav-link";
import { useScrollSpy } from "hooks/use-scrollspy";
import { MobileNavButton } from "components/mobile-nav";
import { MobileNavContent } from "components/mobile-nav";
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import ThemeToggle from "./theme-toggle";

const Navigation: React.FC = () => {
  const { colorMode } = useColorMode();
  const mobileNav = useDisclosure();
  const router = useRouter();
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>(null);

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href?: string,
    id?: string
  ) => {
    if (href) {
      // If navigating to a different page, let Next.js handle it
      router.push(href);
      return;
    }

    if (id) {
      // Prevent default behavior
      e.preventDefault();
      const el = document.getElementById(id);

      if (el) {
        // For same-page scrolling
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // If the element doesn't exist, navigate to home and scroll
        router.push(`/#${id}`);
      }
    }
  };

  return (
    <HStack spacing="2" flexShrink={0}>
      {siteConfig.header.links.map(({ href, id, variant, ...props }, i) => (
        <NavLink
          display={["none", null, "block"]}
          href={href || `/#${id}`}
          onClick={(
            e:
              | React.MouseEvent<HTMLAnchorElement, MouseEvent>
              | MouseEvent
              | any
          ) => handleNavigation(e, href, id)}
          key={i}
          isActive={
            !!(
              (id && activeId === id) ||
              (href && !!router.asPath.match(new RegExp(href)))
            )
          }
          {...props}
          sx={{
            background: variant === "varient" ? "#185651" : "",
            color: variant === "varient" ? "white" : "",
            "&:hover": {
              color:
                variant === "varient" || colorMode === "dark"
                  ? "white"
                  : "#185651",
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
