import { Box, Spinner, useDisclosure } from "@chakra-ui/react";
import { ReactNode, useState, useEffect } from "react";
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";
import { Header, HeaderProps } from "./header";
import {
  AnnouncementBanner,
  AnnouncementBannerProps,
} from "../announcement-banner";
import { Footer, FooterProps } from "./footer";
import { Toaster } from "components/Toaster";
import { Logo } from "./logo";

interface LayoutProps {
  children: ReactNode;
  announcementProps: AnnouncementBannerProps;
  headerProps: HeaderProps;
  footerProps: FooterProps;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, announcementProps, headerProps, footerProps } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <SkipNavLink>Skip to content</SkipNavLink>
      <AnnouncementBanner {...announcementProps} />
      <>
        {children && <Header {...headerProps} />}
        <Box as="main" position="relative">
          <SkipNavContent />
          {isLoading ? (
            <Box
              display="flex"
              flexDirection="column"
              gap="4"
              justifyContent="center"
              alignItems="center"
              height="100vh"
              width="100%"
              position="absolute"
              top="0"
              left="0"
              bg="white"
              zIndex="overlay"
              w="100%"
            >
              <Logo />
              <Spinner size="xl" />
            </Box>
          ) : (
            children
          )}
          <Toaster />
        </Box>
        {children && <Footer {...footerProps} />}
      </>
    </Box>
  );
};
