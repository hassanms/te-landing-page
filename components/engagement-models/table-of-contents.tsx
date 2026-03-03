"use client";

import React, { useState } from "react";
import {
  Box,
  Collapse,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";

export interface TocItem {
  label: string;
  href: string;
  /** If true, opens in new tab (e.g. external link). */
  external?: boolean;
}

interface TableOfContentsProps {
  leftColumn: TocItem[];
  rightColumn: TocItem[];
  /** Theme props from page - matches section styling */
  sectionBg?: string;
  /** Background when collapsed - matches header (e.g. transparent or bgColor) */
  collapsedBg?: string;
  dividerColor?: string;
  accentColor?: string;
  headingColor?: string;
  textColor?: string;
}

const linkStyles = {
  align: "center" as const,
  gap: 4,
  py: 4,
  textAlign: "left" as const,
  bg: "transparent",
  border: "none",
  cursor: "pointer",
  _hover: { opacity: 0.9 },
  w: "full",
  justifyContent: "space-between" as const,
};

function TocLink({
  item,
  headingColor,
  accentColor,
}: {
  item: TocItem;
  headingColor: string;
  accentColor: string;
}) {
  const handleClick = (e: React.MouseEvent) => {
    if (!item.external) {
      e.preventDefault();
      const el = document.querySelector(item.href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const content = (
    <>
      <Text
        as="span"
        color={headingColor}
        fontSize={{ base: "md", md: "lg" }}
        textDecoration="underline"
        textUnderlineOffset="2px"
        flex={1}
      >
        {item.label}
      </Text>
      <Box
        as="span"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        w={10}
        h={10}
        minW={10}
        minH={10}
        borderRadius="full"
        bg={accentColor}
        flexShrink={0}
      >
        <Icon as={FaChevronRight} color="white" boxSize={4} />
      </Box>
    </>
  );

  if (item.external) {
    return (
      <Flex as="a" href={item.href} {...linkStyles}>
        {content}
      </Flex>
    );
  }

  return (
    <Flex as="button" type="button" onClick={handleClick} {...linkStyles}>
      {content}
    </Flex>
  );
}

export function TableOfContents({
  leftColumn,
  rightColumn,
  sectionBg = "gray.50",
  collapsedBg,
  dividerColor = "gray.200",
  accentColor = "teal.500",
  headingColor = "gray.800",
}: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const bg = isExpanded ? sectionBg : (collapsedBg ?? sectionBg);

  return (
    <Box
      bg={bg}
      overflow="hidden"
      transition="background 0.2s ease"
    >
      <Flex
        justify="space-between"
        align="center"
        py={6}
        px={6}
        borderBottomWidth={isExpanded ? "1px" : 0}
        borderColor={dividerColor}
        cursor="pointer"
        onClick={() => setIsExpanded((e) => !e)}
        transition="background 0.2s ease"
        _hover={{ bg: "blackAlpha.02" }}
        _dark={{ _hover: { bg: "whiteAlpha.05" } }}
      >
        <Text fontWeight="semibold" color={headingColor} fontSize="16px">
          Table of contents
        </Text>
        <Icon
          as={FaChevronUp}
          color={accentColor}
          boxSize={4}
          transition="transform 0.3s ease"
          transform={isExpanded ? "rotate(0deg)" : "rotate(180deg)"}
        />
      </Flex>
      <Collapse in={isExpanded} animateOpacity>
        <Flex direction={{ base: "column", md: "row" }} pt={2}>
          <Box flex={1} py={4} px={6}>
            <Stack spacing={0} align="stretch">
              {leftColumn.map((item, i) => (
                <TocLink
                  key={i}
                  item={item}
                  headingColor={headingColor}
                  accentColor={accentColor}
                />
              ))}
            </Stack>
          </Box>
          <Box flex={1} py={4} px={6}>
            <Stack spacing={0} align="stretch">
              {rightColumn.map((item, i) => (
                <TocLink
                  key={i}
                  item={item}
                  headingColor={headingColor}
                  accentColor={accentColor}
                />
              ))}
            </Stack>
          </Box>
        </Flex>
      </Collapse>
    </Box>
  );
}
