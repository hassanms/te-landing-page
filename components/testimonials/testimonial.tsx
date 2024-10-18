import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { Logo } from "components/layout/logo";
import { FaTwitter } from "react-icons/fa";

export interface TestimonialProps extends CardProps {
  name: string;
  company: string;
  description: React.ReactNode;
  avatar: string;
  href?: string;
  children?: React.ReactNode;
}

export const Testimonial = ({
  name,
  description,
  avatar,
  company,
  href,
  children,
  ...rest
}: TestimonialProps) => {
  const { colorMode } = useColorMode();
  const isSmall = useBreakpointValue({ base: true, md: true, lg: false });
  return (
    <Card
      position="relative"
      {...rest}
      maxWidth={{ base: "100%", md: "100%" }}
      width={{ base: "100%", md: "100%" }}
    >
      <CardHeader display="flex" flexDirection="row" alignItems="center">
        <Stack
          spacing="3"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Logo />
          <Heading size="sm">{company}</Heading>
        </Stack>
      </CardHeader>
      <CardBody width={isSmall ? "100%" : "600px"}>
        {children}

        {href && (
          <Link href={href} position="absolute" top="4" right="4">
            <FaTwitter />
          </Link>
        )}
      </CardBody>
      <CardFooter
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{
          color: colorMode === "dark" ? "white" : "#004c4c",
        }}
      >
        <Avatar src={avatar} size="lg" bg={"#004c4c"} />
        <Stack spacing="1" ms="4">
          <Heading size="sm">{name}</Heading>
          <Text color="muted" size="xs">
            {description}
          </Text>
        </Stack>
      </CardFooter>
    </Card>
  );
};
