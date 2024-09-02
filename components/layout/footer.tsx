import {
  Box,
  BoxProps,
  SimpleGrid,
  Container,
  Text,
  Stack,
  Flex,
  HStack,
  Grid,
  List,
  ListItem,
} from "@chakra-ui/react";

import siteConfig from "data/config";
import Link from "next/link";

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
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 3, ...rest } = props;
  return (
    <Box
      bg="#004c4c"
      // _dark={{ bg: "gray.900" }}
      {...rest}
      // make at the bottom
    >
      <Container maxW="container.2xl" px="10" py="8">
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
                }}
              >
                {/* ul li */}
                <List
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <ListItem
                    style={{
                      color: "silver",
                      fontSize: "16px",
                    }}
                  >
                    {" "}
                    +1 234 567 89
                  </ListItem>
                  <ListItem
                    style={{
                      color: "silver",
                      fontSize: "16px",
                    }}
                  >
                    info@techemulsion.com
                  </ListItem>
                  <ListItem
                    style={{
                      color: "silver",
                      fontSize: "16px",
                    }}
                  >
                    1234 North Avenue, New York, NY 12345
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
          >
            <Stack spacing="8">
              <Stack alignItems="flex-start" spacing="4">
                <Text fontSize="2xl" color="white" whiteSpace={"nowrap"}>
                  What I Do?
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
            </Stack>
            {/* News */}
            <Stack spacing="8" alignItems="flex-start">
              <Text fontSize="2xl" color="white">
                News
              </Text>
              <HStack
                spacing="4"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <List
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                  }}
                  spacing={2}
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
                  >
                    Blog
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
                    Events
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
                    Press
                  </ListItem>
                </List>
              </HStack>
            </Stack>
            {/* Quick Links */}
            <Stack spacing="8" alignItems="flex-start">
              <Text fontSize="2xl" color="white" whiteSpace={"nowrap"}>
                Quick Links
              </Text>
              <HStack
                spacing="4"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <List
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                  }}
                  spacing={2}
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
                  >
                    <Link href="#about">About</Link>
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
                    }}
                  >
                    <Link href="/contact">Contact</Link>
                  </ListItem>
                </List>
              </HStack>
            </Stack>
          </Stack>
          <HStack justify="flex-end" spacing="4" alignSelf="flex-end">
            {siteConfig.footer?.links?.map(({ href, label }) => (
              <FooterLink key={href} href={href}>
                {label}
              </FooterLink>
            ))}
          </HStack>
        </SimpleGrid>
      </Container>
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
      color="muted"
      fontSize="sm"
      textDecoration="none"
      _hover={{
        color: "white",
        transition: "color .2s ease-in",
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};
