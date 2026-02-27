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

// Portfolio and services detail pages get white navbar at top (excludes list pages)
const isHeroDetailPage = (pathname: string) =>
  pathname.startsWith("/portfolio/") ||
  pathname === "/portfolio-v4" ||
  pathname.startsWith("/services/");

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
    isHeroDetailPage(router.pathname);

  const isHeroPageAtTop =
    !isScrolled && isHeroDetailPage(router.pathname);

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
