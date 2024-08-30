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
} from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { FaLaughWink, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
  return (
    <Card position="relative" {...rest}>
      <CardHeader display="flex" flexDirection="row" alignItems="center">
        <Stack
          spacing="3"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <FaLinkedinIn
            size="2em"
            style={{
              color: "#0077b5",
            }}
          />
          <Heading size="sm">{company}</Heading>
        </Stack>
      </CardHeader>
      <CardBody>
        {children}

        {href && (
          <Link href={href} position="absolute" top="4" right="4">
            <FaTwitter />
          </Link>
        )}
      </CardBody>
      <CardFooter display="flex" flexDirection="row" alignItems="center">
        <Avatar name={name} src={avatar} size="sm" bg="transparent" />
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
