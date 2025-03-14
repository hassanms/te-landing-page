import {
  Heading,
  ResponsiveValue,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  Section,
  SectionProps,
  SectionTitleProps,
} from "components/section";

export interface TestimonialsProps
  extends Omit<SectionProps, "title">,
  Pick<SectionTitleProps, "title" | "description"> {
  columns?: ResponsiveValue<number>;
}

export const Testimonials: React.FC<TestimonialsProps> = (props) => {
  const { children, title, columns = [1, null, 2], ...rest } = props;
  const { colorMode } = useColorMode();
  return (
    <Section {...rest} padding={0}>
      <Heading
        as="h2"
        size="lg"
        color={colorMode === "dark" ? "white" : "#004c4c"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          textTransform: "uppercase",
        }}
      >
        TESTIMONIALS
      </Heading>
      <Heading
        as="h1"
        mt="5"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          fontSize: {
            base: "2rem",
            md: "2rem",
          },
          width: "100%",
        }}
      >
        Hear From Our Clients
      </Heading>
      <Text
        color="muted"
        fontSize="lg"
        fontWeight={"500"}
        mt="5"
        width={"60%"}
        align={"center"}
        justifyItems={"center"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          width: "100%",
        }}
      >
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffered alteration in some form.
      </Text>
      <SimpleGrid columns={columns} spacing="2" mt={20}>
        {children}
      </SimpleGrid>
    </Section>
  );
};
