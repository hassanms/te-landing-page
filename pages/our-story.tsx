// components/OurStory.tsx
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Container,
  UnorderedList,
  ListItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import Script from "next/script";

const OurStory: React.FC = () => {
  const isSmallScreen = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: false,
  });
  return (
    <Box>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <EnhancedSEO
        title="Our Story - Tech Emulsion"
        description="Learn about the journey of Tech Emulsion, from its inception to becoming a leading digital transformation agency specializing in AI solutions, custom software development, and innovative technology services."
        pageType="about"
        canonicalUrl="https://techemulsion.com/our-story"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Our Story", url: "https://techemulsion.com/our-story" },
          ],
        }}
        faqData={{
          questions: [
            {
              question: "When was Tech Emulsion founded?",
              answer:
                "Tech Emulsion was founded in 2020 with a vision to imagineer digital transformation for businesses through innovative technology solutions.",
            },
            {
              question: "What is Tech Emulsion's mission?",
              answer:
                "Tech Emulsion's mission is to help businesses transform digitally by providing cutting-edge AI solutions, custom software development, SaaS platforms, and innovative technology services that drive growth and efficiency.",
            },
            {
              question: "Where is Tech Emulsion located?",
              answer:
                "Tech Emulsion is based in Peshawar, Khyber Pakhtunkhwa, Pakistan, and serves clients worldwide with remote development services and digital transformation solutions.",
            },
          ],
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DJFC9CERLF"></Script>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          Calendly.initBadgeWidget({
            url: "https://calendly.com/hassanms/discovery-call",
            text: "Talk to Sales",
            color: "#004c4c",
            textColor: "#ffffff",
          });
        }}
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DJFC9CERLF')`}
      </Script>
      <Container maxW="container.xl" pt={{ base: 40, md: 40, lg: 20 }} pb="20">
        <BackgroundGradient height="100%" zIndex="-1" />{" "}
        <Flex
          direction={{ base: "column", md: "column", lg: "column", xl: "row" }}
          align={isSmallScreen ? "center" : "start"}
          justify="center"
          p={6}
          gap={8}>
          {/* Profile Section */}
          <Box maxW="800px">
            <Image
              src="https://th.bing.com/th/id/R.f26ede0a10b10145c15618a7994be5be?rik=IV6zOv4WrT4tOQ&pid=ImgRaw&r=0"
              alt="John Doe"
              borderRadius="full"
              mb={4}
              h="300px"
              w="300px"
            />
            <Heading size="md" mb={2}>
              Business, Technology and the Future
            </Heading>
            <Text fontSize="lg" fontWeight="medium">
              The Story of John Doe
            </Text>
          </Box>

          {/* Content Section */}
          <Box maxW="600px">
            <Text mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </Text>
            <Text mb={4}>
              Fusce euismod dui ligula, vel faucibus purus bibendum sit amet.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </Text>
            <Text mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Heading size="md" my={4}>
              lorem ipsum dolor sit amet
            </Heading>
            <Text mb={4}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              doloribus nostrum odit, ipsam aut mollitia numquam recusandae sunt
              fuga dolore maiores quia cupiditate, facere quisquam maxime velit
              vel quibusdam fugiat!
            </Text>
            <UnorderedList spacing={3} mb={4}>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                minus? Aliquid ipsa possimus eveniet, assumenda sint itaque
                architecto magnam praesentium voluptas tenetur facilis unde nisi
                dolores a laudantium dolor. Error?
              </ListItem>
              <ListItem>
                lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi.
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              </ListItem>
            </UnorderedList>
            <Text mb={4}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            </Text>
            <Text mb={4}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              neque voluptatibus quos, eligendi quisquam culpa nobis repellendus
              cupiditate minus, odit nesciunt voluptatum reprehenderit animi?
              Eveniet, recusandae voluptate. Sint, quos totam.
            </Text>
            <Text mb={4}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptatum laboriosam reiciendis dignissimos culpa rem,
              praesentium corrupti fugiat aperiam illo fugit. A excepturi,
              repudiandae quae modi tempora obcaecati quasi deleniti.
            </Text>
            <Text mb={4}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at
              debitis incidunt unde delectus fugit accusantium non iste
              laudantium nostrum nisi, tenetur nesciunt voluptatum qui saepe
              veritatis quas ullam minima?
            </Text>
            <Heading size="md" my={4}>
              That’s when Tech Emulsion was born
            </Heading>
            <Text mb={4}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              doloribus pariatur, nihil eum inventore dignissimos itaque est
              maiores voluptatum aut! Eum quo necessitatibus, est animi
              voluptatem beatae sit? Accusantium, voluptatem.
            </Text>
            <Box
              display="flex"
              alignItems="center"
              mb={4}
              p={4}
              borderRadius="md">
              {/* Vertical Line with Gradient */}
              <Box
                width="15px"
                height="100px"
                bgGradient="linear(to-b, teal.300, teal.500)"
                borderRadius="full"
                mr={4}
              />

              <Text
                fontSize="lg"
                fontWeight="bold"
                bgGradient="linear(to-r, teal.300, teal.500)"
                bgClip="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                ducimus asperiores dignissimos mollitia? Voluptate beatae
                dignissimos veritatis placeat explicabo ducimus quod ipsum
                officia, veniam nobis, amet saepe ut dolor hic?
              </Text>
            </Box>
            <Text mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              blanditiis animi neque magnam pariatur, doloremque assumenda
              corporis a ipsum aperiam mollitia repellat soluta voluptatum? Ex
              omnis non eveniet aut ea.
            </Text>
            <Text mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              nulla assumenda, aliquid iure ea adipisci dolor, voluptatem
              voluptatum dicta accusantium eveniet inventore qui illum quidem
              odit repudiandae harum temporibus expedita.
            </Text>
          </Box>

          {/* Additional Image */}
          <Box
            maxW="300px"
            display={{ base: "flex", lg: "flex" }}
            flexDirection="column"
            alignItems="center"
            gap={4}>
            <Image
              src="/assets/whatWeDo/automation.png"
              alt="Agency Management Image"
              borderRadius="md"
              mb={4}
            />
            <Image
              src="/assets/whatWeDo/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg"
              alt="Agency Management Image"
              borderRadius="md"
              mb={4}
            />
            <Image
              src="/assets/whatWeDo/randa-marzouk-ilwI-AIAQr4-unsplash.jpg"
              alt="Agency Management Image"
              borderRadius="md"
              mb={4}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurStory;
