import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  Heading,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Highlights, HighlightsItem } from "components/highlights";
import { FaChevronRight } from "react-icons/fa";

const services = () => {
  const { colorMode } = useColorMode();

  const HighlightsItems = [
    {
      title: "Core components",
      description:
        "Get started for free with 30+ open source components. Including authentication screens with Clerk, Supabase and Magic. Fully functional forms with React Hook Form. Data tables with React Table.",
      image:
        "https://cdn.educba.com/academy/wp-content/uploads/2018/12/What-is-Software-Development-3.jpg",
    },
    {
      title: "Core components",
      description:
        "Get started for free with 30+ open source components. Including authentication screens with Clerk, Supabase and Magic. Fully functional forms with React Hook Form. Data tables with React Table.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FfhtPsXcSWbQmfHqTkve3DmOHZI_2Gc8uk-h0YMaLIs0vW1xDWaD06X47FLBhA116PE&usqp=CAU",
    },
    {
      title: "Core components",
      description:
        "Get started for free with 30+ open source components. Including authentication screens with Clerk, Supabase and Magic. Fully functional forms with React Hook Form. Data tables with React Table.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCOFpKHTPDru2q1BCvSheKmglmnEE6XRdGw&s",
    },
  ];

  return (
    <Box>
      <Container maxW="container.2xl" py="20" mb="20">
        <Divider />
        <BackgroundGradient height="100%" zIndex="-1" />
        <Box
          display={{ base: "block", md: "flex" }}
          px="15"
          mt={10}
          justifyContent={"space-between"}
        >
          <Box>
            <Heading
              as="h2"
              size="lg"
              sx={{
                textTransform: "uppercase",
              }}
            >
              Service Page
            </Heading>
            <Text
              color="muted"
              fontSize="lg"
              mt="4"
              width={["70%", null, "auto"]}
            >
              We believe that building a product should be fun and rewarding.
              Our mission is to provide you with the best tools to make that
              happen.
            </Text>
          </Box>

          {/* Explore services */}
          <VStack
            spacing={4}
            display="flex"
            justifyContent={["flex-start", null, "flex-end"]}
            width={["100%", null, "auto"]}
            alignItems="end"
            mt="4"
          >
            <ButtonGroup
              style={{
                backgroundColor: " none",
                fontSize: "1rem",
                color: "muted",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: "muted",
                  padding: "0",
                  "&:hover": {
                    bg: "none",
                  },
                }}
              >
                Home
              </ButtonLink>
              <FaChevronRight size={15} />
              <Text
                as="span"
                ml="2"
                sx={{
                  color: colorMode === "light" ? "#004c4c !important" : "white",
                }}
              >
                Services
              </Text>
            </ButtonGroup>
          </VStack>
        </Box>

        <Highlights>
          {HighlightsItems?.map((item, index) => (
            <HighlightsItem colSpan={[1, null, 2]} title={""} padding={0}>
              <img
                src={item.image}
                alt="hero"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "fill",
                  borderRadius: "8px",
                }}
              />
              <Box p="8" borderRadius="8px" mt="4" boxShadow="md" w="100%">
                <Heading
                  as="h2"
                  size="lg"
                  sx={{
                    textTransform: "uppercase",
                    py: "6",
                  }}
                >
                  {item.title}
                </Heading>
                <VStack alignItems="flex-start" spacing="8">
                  <Text color="muted" fontSize="xl">
                    {item.description}
                  </Text>

                  {/* <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex> */}
                </VStack>
              </Box>
            </HighlightsItem>
          ))}

          {/* <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved
        us hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            "authentication",
            "navigation",
            "crud",
            "settings",
            "multi-tenancy",
            "layouts",
            "billing",
            "a11y testing",
            "server-side rendering",
            "documentation",
            "onboarding",
            "storybooks",
            "theming",
            "upselling",
            "unit testing",
            "feature flags",
            "responsiveness",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem> */}
        </Highlights>
      </Container>
    </Box>
  );
};

export default services;
