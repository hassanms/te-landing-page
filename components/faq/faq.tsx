import {
  Box,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Section, SectionProps } from "components/section";

interface FaqProps extends Omit<SectionProps, "title" | "children"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  items: { q: React.ReactNode; a: React.ReactNode }[];
  /** Optional uppercase label above the heading (e.g. "Support") */
  label?: React.ReactNode;
}

export const Faq: React.FC<FaqProps> = (props) => {
  const {
    title = "Frequently asked questions",
    description,
    items = [],
    label,
    innerWidth = "6xl",
    ...rest
  } = props;

  const bgColor = useColorModeValue("white", "charcoal.800");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("teal.500", "pearlAqua.400");
  const dividerColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Section id="faq" innerWidth={innerWidth} {...rest}>
      {label && (
        <Box
          as="span"
          display="block"
          fontSize="xs"
          color={accentColor}
          mb={4}
          fontWeight="bold"
          letterSpacing="wider"
          textTransform="uppercase"
        >
          {label}
        </Box>
      )}
      <Box
        as="h2"
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        fontWeight="bold"
        color={headingColor}
        letterSpacing="-0.02em"
        lineHeight="1.1"
        mb={description ? 4 : 10}
      >
        {title}
      </Box>
      {description && (
        <Box color={textColor} fontSize="16px" mb={12}>
          {description}
        </Box>
      )}
      <Accordion allowMultiple>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          {items?.map(({ q, a }, i) => {
            const isLastOdd =
              items.length % 2 === 1 && i === items.length - 1;
            return (
              <Box
                key={i}
                gridColumn={isLastOdd ? { base: "1", md: "1 / -1" } : undefined}
                justifySelf={isLastOdd ? "center" : undefined}
                maxW={isLastOdd ? { base: "100%", md: "50%" } : undefined}
              >
                <AccordionItem
                  borderRadius="lg"
                  bg={bgColor}
                  boxShadow="sm"
                  borderWidth="1px"
                  borderColor={dividerColor}
                  overflow="hidden"
                  _focusWithin={{ boxShadow: "md" }}
                >
                  <AccordionButton
                    py={6}
                    px={6}
                    textAlign="left"
                    _expanded={{ color: accentColor }}
                    sx={{
                      "&[data-expanded] .icon-plus": { display: "none" },
                      "&[data-expanded] .icon-minus": { display: "block" },
                      "&:not([data-expanded]) .icon-plus": { display: "block" },
                      "&:not([data-expanded]) .icon-minus": { display: "none" },
                    }}
                  >
                    <Box
                      flex="1"
                      fontWeight="semibold"
                      color={headingColor}
                      pr={4}
                      fontSize="16px"
                    >
                      {q}
                    </Box>
                    <Icon
                      as={FaPlus}
                      className="icon-plus"
                      boxSize={5}
                      color={accentColor}
                      flexShrink={0}
                    />
                    <Icon
                      as={FaMinus}
                      className="icon-minus"
                      boxSize={5}
                      color={accentColor}
                      flexShrink={0}
                      display="none"
                    />
                  </AccordionButton>
                  <AccordionPanel
                    px={6}
                    pb={6}
                    pt={0}
                    color={textColor}
                    fontSize="16px"
                    lineHeight="1.7"
                  >
                    {a}
                  </AccordionPanel>
                </AccordionItem>
              </Box>
            );
          })}
        </Box>
      </Accordion>
    </Section>
  );
};

export interface FaqItemProps {
  question: React.ReactNode;
  answer: React.ReactNode;
}
