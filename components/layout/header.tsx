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
import { useScroll } from "framer-motion";

// Only the 6 case studies shown in the home page Recent Works section
const HERO_DARK_NAVBAR_PATHS = [
  "/portfolio",
  "/portfolio/campaignos",
  "/portfolio/macromascot",
  "/portfolio/autosync-intelligence",
  "/portfolio/packassist",
  "/portfolio/meatery",
  "/portfolio/avl-copilot",
  "/portfolio/avl-copilot-v3",
];

export interface HeaderProps extends Omit<BoxProps, "children"> {}

export const Header = (props: HeaderProps) => {
  const ref = React.useRef<HTMLHeadingElement>(null);
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};
  const { colorMode } = useColorMode();
  const router = useRouter();

  const { scrollY } = useScroll();
  React.useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setY(v));
    return () => unsubscribe();
  }, [scrollY]);

  const bg = useColorModeValue("whiteAlpha.700", "rgba(29, 32, 37, 0.7)");

  const isScrolled = y > height;
  const darkNavbar =
    colorMode === "light" &&
    !isScrolled &&
    HERO_DARK_NAVBAR_PATHS.some((path) => router.pathname === path);

  const isHeroPageAtTop =
    !isScrolled &&
    HERO_DARK_NAVBAR_PATHS.some((path) => router.pathname === path);

  return (
    <Box
      ref={ref}
      as="header"
      top="0"
      w="full"
      position="fixed"
      backdropFilter="blur(5px)"
      zIndex="sticky"
      borderColor="whiteAlpha.100"
      transitionProperty="common"
      transitionDuration="normal"
      bg={isScrolled ? bg : ""}
      boxShadow={isScrolled ? "md" : ""}
      borderBottomWidth={isScrolled ? "1px" : ""}
      {...props}
    >
      <Container maxW="container.xl" px="8" py="4">
        <Flex width="full" align="center" justify="space-between">
          <Logo
            useLightLogo={isHeroPageAtTop ? true : undefined}
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
          <Navigation isScrolled={isScrolled} />
        </Flex>
      </Container>
    </Box>
  );
};
