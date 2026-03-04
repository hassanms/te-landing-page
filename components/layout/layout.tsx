import { Box, Spinner, Text, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useRouter } from "next/router";

import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";

import { Header, HeaderProps } from "./header";
import {
  AnnouncementBanner,
  AnnouncementBannerProps,
} from "../announcement-banner";
import { Footer, FooterProps } from "./footer";
import { Logo } from "./logo";

interface LayoutProps {
  children: ReactNode;
  announcementProps: AnnouncementBannerProps;
  headerProps: HeaderProps;
  footerProps: FooterProps;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, announcementProps, headerProps, footerProps } = props;
  // Render full content on server and initial client so crawlers/LLMs get readable HTML (no JS required).
  const [isRouteChanging, setIsRouteChanging] = React.useState(false);
  const router = useRouter();
  const textColor = useColorModeValue("gray.600", "gray.100");

  React.useEffect(() => {
    const handleRouteChangeStart = () => setIsRouteChanging(true);
    const handleRouteChangeComplete = () => setIsRouteChanging(false);
    const handleRouteChangeError = () => setIsRouteChanging(false);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router.events]);

  return (
    <Box>
      <SkipNavLink>Skip to content</SkipNavLink>
      <AnnouncementBanner {...announcementProps} />
      <Header {...headerProps} />
      <Box as="main">
        <SkipNavContent />
        {isRouteChanging ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minH="60vh"
            py={16}
          >
            <Box color="teal.500" display="inline-block">
              <Spinner size="xl" />
            </Box>
            <Text mt={4} color={textColor}>
              Loading...
            </Text>
          </Box>
        ) : (
          children
        )}
      </Box>
      <Footer {...footerProps} />
    </Box>
  );
};
