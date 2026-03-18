import React, { useEffect, useRef } from "react";
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
import Image from "next/image";

import siteConfig from "data/config";
import { getImageUrl } from "lib/supabase-storage";
import Link from "next/link";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const gradient = svg.querySelector<SVGGradientElement>("#hoverGradient");
    const innerStop = gradient?.querySelector<SVGStopElement>("stop[offset='0%']");
    if (!gradient || !innerStop) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      gradient.setAttribute("cx", `${x}%`);
      gradient.setAttribute("cy", `${y}%`);
    };

    const handleMouseEnter = () => {
      innerStop.setAttribute("stop-opacity", "1");
    };

    const handleMouseLeave = () => {
      innerStop.setAttribute("stop-opacity", "0");
    };

    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseenter", handleMouseEnter);
    svg.addEventListener("mouseleave", handleMouseLeave);
    // initial state: no fill
    handleMouseLeave();

    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseenter", handleMouseEnter);
      svg.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Box
      bg="evergreen.500"
      {...rest}
      // make at the bottom
      position={"relative"}>
      <Container
        maxW="container.xl"
        px="10"
        py="20"
        display={"flex"}
        flexDirection={"column"}
        gap={"2rem"}>
        <SimpleGrid columns={[1, 2, columns, columns]} spacing="8">
          <Stack spacing="2">
            <Stack alignItems="flex-start">
              <Flex>
                <Image
                  src={getImageUrl("assets/logo/logo-light.png")}
                  alt="Tech Emulsion Logo"
                  width={100}
                  height={30}
                  style={{
                    objectFit: "contain",
                  }}
                />
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
                      href="tel:+18509307798"
                      target="_blank"
                      rel="noreferrer">
                      <HStack>
                        <FaPhone
                          style={{ marginRight: "2px", color: "#D9D9D9" }}
                        />
                        <Text color="lightGrey.400" fontSize="lg">
                          +1 (850) 930-7798
                        </Text>
                      </HStack>
                    </a>
                  </ListItem>

                  <ListItem role="listitem">
                    <a
                      href="https://wa.me/+923345559140"
                      target="_blank"
                      rel="noreferrer">
                      <HStack>
                        <FaWhatsapp
                        style={{ marginRight: "2px", color: "#D9D9D9" }}
                        />
                      <Text color="lightGrey.400" fontSize="lg">
                          +92 334 555 9140
                        </Text>
                      </HStack>
                    </a>
                  </ListItem>

                  <ListItem role="listitem">
                    <a
                      href="mailto:contact@techemulsion.com"
                      target="_blank"
                      rel="noreferrer">
                      <HStack>
                        <FaEnvelope
                          style={{ marginRight: "2px", color: "#D9D9D9" }}
                        />
                        <Text color="lightGrey.400" fontSize="lg">
                          contact@techemulsion.com
                        </Text>
                      </HStack>
                    </a>
                  </ListItem>

                  <ListItem role="listitem">
                    <HStack>
                      <FaMapMarkerAlt
                        style={{ marginRight: "2px", color: "#D9D9D9" }}
                      />
                      <Text color="lightGrey.400" fontSize="lg">
                        3rd Floor, Afzal Towers, University Road, Peshawar.
                      </Text>
                    </HStack>
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
                        fontSize: "lg",
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
                        fontSize: "lg",
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
                        fontSize: "lg",
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
                        fontSize: "lg",
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
                      color: "lightGrey.400",
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
                      color: "lightGrey.400",
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
                      color: "lightGrey.400",
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
                      color: "lightGrey.400",
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
                      color: "lightGrey.400",
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
                      color: "lightGrey.400",
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
        <Stack spacing="2" alignItems="flex-start">
          <Box
            width="100%"
            px="20px"
            pt="12"
            pb="0"
            minH="240px"
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            alignItems="center"
            cursor="default"
            sx={{ userSelect: "none" }}>
            <Box
              as="svg"
              ref={svgRef}
              viewBox="0 0 1200 260"
              preserveAspectRatio="xMidYMid meet"
              width="100%">
              <defs>
                <radialGradient id="hoverGradient" cx="50%" cy="50%" r="18%">
                  <stop offset="0%" stopColor="#bbbbbb" stopOpacity="0" />
                  <stop offset="100%" stopColor="#bbbbbb" stopOpacity="0" />
                </radialGradient>
              </defs>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif`,
                  fontSize: "clamp(120px, 20vw, 280px)",
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  fill: "url(#hoverGradient)",
                  stroke: "#bbbbbb",
                  strokeWidth: 2.5,
                  whiteSpace: "nowrap",
                }}>
                Emulsion
              </text>
            </Box>
          </Box>
          <Divider
            orientation="horizontal"
            color="white"
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "teal.600",
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
                      border: "1px solid",
                      borderColor: "evergreen.500",
                      backgroundColor: "mutedTeal.400",
                      color: colorMode === "dark" ? "charcoal.800" : "charcoal.800",
                      "&:hover": {
                        color: "white",
                        transition: "color .2s ease-in",
                        backgroundColor: "teal.600",
                      },
                    }}>
                    {label}
                    <VisuallyHidden>{label.props["aria-label"]}</VisuallyHidden>
                  </Text>
                </FooterLink>
              ))}
            </HStack>
            <Text fontSize="sm" color="lightGrey.400">
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
    <Text color="lightGrey.400" fontSize="sm" mt={4}>
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
      color="lightGrey.400"
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
