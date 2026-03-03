"use client";

import React, { useState } from "react";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
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
  dividerColor?: string;
  accentColor?: string;
  headingColor?: string;
  textColor?: string;
}

const linkStyles = {
  align: "center" as const,
  gap: 3,
  py: 2,
  textAlign: "left" as const,
  bg: "transparent",
  border: "none",
  cursor: "pointer",
  _hover: { opacity: 0.9 },
  w: "full",
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
    e.preventDefault();
    const el = document.querySelector(item.href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const content = (
    <>
      <Text
        as="span"
        color={headingColor}
        fontSize="16px"
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
        w={8}
        h={8}
        borderRadius="full"
        bg={accentColor}
        flexShrink={0}
      >
        <Icon as={FaChevronRight} color="white" boxSize={3} />
      </Box>
    </>
  );

  if (item.external) {
    return (
      <Flex as="a" href={item.href} target="_blank" rel="noopener noreferrer" {...linkStyles}>
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
  dividerColor = "gray.200",
  accentColor = "teal.500",
  headingColor = "gray.800",
}: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Box
      borderRadius="lg"
      bg={sectionBg}
      borderWidth="1px"
      borderColor={dividerColor}
      overflow="hidden"
      _focusWithin={{ boxShadow: "md" }}
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
          transition="transform 0.2s"
          transform={isExpanded ? "rotate(0deg)" : "rotate(180deg)"}
        />
      </Flex>
      {isExpanded && (
        <Flex
          direction={{ base: "column", md: "row" }}
          pt={2}
          borderTopWidth="1px"
          borderColor={dividerColor}
        >
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
          <Box
            flex={1}
            py={4}
            px={6}
            borderLeftWidth={{ base: 0, md: "1px" }}
            borderColor={dividerColor}
          >
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
      )}
    </Box>
  );
}
