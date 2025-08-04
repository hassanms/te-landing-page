import {
  VisuallyHidden,
  Box,
  BoxProps,
  SimpleGrid,
  Container,
  Text,
  Stack,
  Flex,
  HStack,
  List,
  ListItem,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import Layout from "components/FooterLayout/layout-1";
import LayoutBottom from "components/FooterLayout/LayoutBottom";

import siteConfig from "data/config";
import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

export interface FooterProps extends BoxProps {
  columns?: number;
}

interface LinkProps {
  href: string;
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  _hover?: any;
  textDecoration?: string;
  sx?: any;
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 2, ...rest } = props;
  const { colorMode } = useColorMode();
  return (
    <Box
      bg="#004c4c"
      // _dark={{ bg: "gray.900" }}
      {...rest}
      // make at the bottom
      position={"relative"}>
      <Container
        maxW="container.xl"
        px="10"
        py="10"
        display={"flex"}
        flexDirection={"column"}
        gap={"5rem"}>
        <SimpleGrid columns={[1, 2, columns, columns]} spacing="8">
          <Stack spacing="2">
            <Stack alignItems="flex-start">
              <Flex>
                <Box as={siteConfig.logo} flex="1" height="32px" />
              </Flex>
              <Text fontSize="2xl" color="white">
                Let&apos;s Talk!
              </Text>
              <HStack
                spacing="4"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                {/* ul li */}
                <List
                  role="list"
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.2rem",
                  }}>
                  <ListItem role="listitem">
                    <a
                      href="https://wa.me/+923345559140"
                      target="_blank"
                      rel="noreferrer">
                      <HStack>
                        <FaWhatsapp
                          style={{ marginRight: "2px", color: "silver" }}
                        />
                        <Text color="silver" fontSize="16px">
                          +923345559140
                        </Text>
                      </HStack>
                    </a>
                  </ListItem>

                  {/* <ListItem role="listitem">
                    <HStack>
                      <FaPhone
                        style={{ marginRight: "2px", color: "silver" }}
                      />
                      <Text color="silver" fontSize="16px">
                        +92 334 555 9140
                      </Text>
                    </HStack>
                  </ListItem> */}

                  <ListItem role="listitem">
                    <Text color="silver" fontSize="16px">
                      contact@techemulsion.com
                    </Text>
                  </ListItem>

                  <ListItem role="listitem">
                    <Text color="silver" fontSize="16px">
                      Sheikh Yaseen Trade Centre, University Road, Peshawar
                    </Text>
                  </ListItem>
                </List>
              </HStack>
            </Stack>
            <Copyright>
              All rights reserved. Techemulsion &copy;{" "}
              {new Date().getFullYear()}
            </Copyright>
          </Stack>

          {/* What I Do? */}
          <Stack
            spacing={[2, 2, 8, 32]}
            display={"flex"}
            flexDirection={["column", "column", "row", "row"]}
            justifyContent={"center"}
            alignItems={"flex-start"}>
            {/* <Stack spacing="8">
              <Stack alignItems="flex-start" spacing="4">
                <Text fontSize="2xl" color="white" whiteSpace={"nowrap"}>
                  What We Do?
                </Text>
                <HStack
                  spacing="4"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // hover on the list
                  }}
                >
                  <List
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    <ListItem
                      sx={{
                        color: "silver",
                        fontSize: "16px",
                        cursor: "pointer",
                        "&:hover": {
                          color: "white",
                          transition: "color .2s ease-in",
                        },
                      }}
                      whiteSpace={"nowrap"}
                    >
                      Web Development
                    </ListItem>
                    <ListItem
                      sx={{
                        color: "silver",
                        fontSize: "16px",
                        cursor: "pointer",
                        "&:hover": {
                          color: "white",
                          transition: "color .2s ease-in",
                        },
                      }}
                      whiteSpace={"nowrap"}
                    >
                      Mobile Development
                    </ListItem>
                    <ListItem
                      sx={{
                        color: "silver",
                        fontSize: "16px",
                        cursor: "pointer",
                        "&:hover": {
                          color: "white",
                          transition: "color .2s ease-in",
                        },
                      }}
                      whiteSpace={"nowrap"}
                    >
                      UI/UX Design
                    </ListItem>
                    <ListItem
                      sx={{
                        color: "silver",
                        fontSize: "16px",
                        cursor: "pointer",
                        "&:hover": {
                          color: "white",
                          transition: "color .2s ease-in",
                        },
                      }}
                    >
                      Branding
                    </ListItem>
                  </List>
                </HStack>
              </Stack>
            </Stack> */}
            {/* News */}
            {/* Quick Links */}
            <Stack
              spacing="4"
              alignItems="flex-start"
              mt={{
                base: "10",
                md: "0",
                lg: "0",
              }}>
              <Text fontSize="2xl" color="white" whiteSpace={"nowrap"}>
                Quick Links
              </Text>
              <HStack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <List
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                  }}
                  spacing={2}>
                  <ListItem
                    sx={{
                      color: "silver",
                      fontSize: "16px",
                      cursor: "pointer",
                      "&:hover": {
                        color: "white",
                        transition: "color .2s ease-in",
                      },
                    }}>
                    <Link href="/#about">About</Link>
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "silver",
                      fontSize: "16px",
                      cursor: "pointer",
                      "&:hover": {
                        color: "white",
                        transition: "color .2s ease-in",
                      },
                    }}>
                    <Link href="/services">Services</Link>
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "silver",
                      fontSize: "16px",
                      cursor: "pointer",
                      "&:hover": {
                        color: "white",
                        transition: "color .2s ease-in",
                      },
                    }}>
                    <Link href="/contact">Contact</Link>
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "silver",
                      fontSize: "16px",
                      cursor: "pointer",
                      "&:hover": {
                        color: "white",
                        transition: "color .2s ease-in",
                      },
                    }}>
                    {/* <Link href="/portfolio">Portfolio</Link> */}
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "silver",
                      fontSize: "16px",
                      cursor: "pointer",
                      "&:hover": {
                        color: "white",
                        transition: "color .2s ease-in",
                      },
                    }}>
                    <Link href="/terms-of-service">Terms of Service</Link>
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "silver",
                      fontSize: "16px",
                      cursor: "pointer",
                      "&:hover": {
                        color: "white",
                        transition: "color .2s ease-in",
                      },
                    }}>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </ListItem>
                </List>
              </HStack>
            </Stack>
          </Stack>
        </SimpleGrid>
        <Stack spacing="8" alignItems="flex-start">
          <Divider
            orientation="horizontal"
            color="white"
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#007777",
              border: "none",
            }}
          />
          <Stack
            spacing="8"
            alignItems="center"
            justify={"center"}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}>
            <HStack justify="center" spacing="4" alignSelf="center" mt={8}>
              {siteConfig.footer?.links?.map(({ href, label }) => (
                <FooterLink
                  key={href}
                  href={href}
                  aria-label={label.props["aria-label"]}>
                  <Text
                    sx={{
                      padding: "5px",
                      borderRadius: "50%",
                      border: "1px solid #004c4c",
                      backgroundColor: "#b2d8d8",
                      color: colorMode === "dark" ? "black" : "black",
                      "&:hover": {
                        color: "white",
                        transition: "color .2s ease-in",
                        backgroundColor: "#006666",
                      },
                    }}>
                    {label}
                    <VisuallyHidden>{label.props["aria-label"]}</VisuallyHidden>
                  </Text>
                </FooterLink>
              ))}
            </HStack>
            <Text fontSize="sm" color="silver">
              Tech Emulsion is a Private Limited company in Pakistan and an LLC
              in the United States
            </Text>
          </Stack>
        </Stack>
      </Container>
      <Layout />
      <LayoutBottom />
    </Box>
  );
};

export interface CopyrightProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content;
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`;
  }
  return (
    <Text color="muted" fontSize="sm">
      {content || children}
    </Text>
  );
};

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      // isExternal
      color="muted"
      fontSize="sm"
      textDecoration="none"
      _hover={{
        bg: "white",
        color: "white",
      }}
      {...rest}>
      {children}
    </Link>
  );
};
