import {
  Avatar,
  Box,
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
  useColorModeValue,
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
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const isSmall = useBreakpointValue({ base: true, md: true, lg: false });
  return (
    <Card
      position="relative"
      {...rest}
      maxWidth="100%"
      width="100%"
      overflow="hidden"
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
      <CardBody 
        width="100%" 
        maxWidth="100%"
        overflow="hidden"
        wordBreak="break-word">
        <Box
          maxW="100%"
          overflow="hidden"
          sx={{
            "& > *": {
              maxW: "100%",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            },
          }}>
          {children}
        </Box>

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
        <Stack spacing="1" ms="4" textAlign={{ base: "center", md: "left" }}>
          <Heading size="sm">{name}</Heading>
          <Text color={textColor} size="xs">
            {description}
          </Text>
        </Stack>
      </CardFooter>
    </Card>
  );
};
