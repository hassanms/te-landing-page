import {
  Box,
  Container,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import { FaAsterisk, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const CaseStudyBipcards = () => {
  const { colorMode } = useColorMode();

  return (
    <Box id="services">
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <EnhancedSEO
        title="Case Study: Bipcards - Tech Emulsion"
        description="Bipcards is a SaaS platform that helps businesses collect and showcase genuine customer reviews using programmable NFC cards and QR codes, with flexible subscriptions, real-time analytics, and streamlined onboarding for sales teams."
        pageType="portfolio"
        canonicalUrl="https://techemulsion.com/portfolio/bipcards"
        portfolioData={{
          title: "Bipcards – Elevate Online Presence with Genuine Reviews",
          description:
            "Tech Emulsion developed a SaaS platform for Bipcards.com, enabling businesses to collect customer reviews via programmable NFC cards and QR codes. Customers benefit from flexible subscriptions, real-time analytics, and easy card programming, while sales reps streamline onboarding and engagement.",
          dateCreated: "2023",
          image: "https://techemulsion.com/assets/portfolio/bipcards.png",
          url: "https://techemulsion.com/portfolio/bipcards",
          genre: "SaaS, Reviews Management",
          keywords: [
            "SaaS",
            "customer reviews",
            "NFC cards",
            "QR codes",
            "Bipcards",
            "Tech Emulsion",
          ],
        }}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Portfolio", url: "https://techemulsion.com/portfolio" },
            {
              name: "Bipcards",
              url: "https://techemulsion.com/portfolio/bipcards",
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
      <Container maxW="container.8xl" py={{ base: "0", md: "20", lg: "5" }}>
        <Box
          display={{ base: "block", md: "flex" }}
          // px="15"
          justifyContent={"space-between"}
          mb={10}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              py: { base: 0, md: 4, lg: 1 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              h: "100%",
              textAlign: "center",
            }}>
            <Box>
              <Image
                src="/assets/portfolio/bipcards.png"
                alt="Artis"
                width={1200}
                height={300}
                style={{
                  width: "100vw",
                  height: "100vh",
                  marginTop: 45,
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              borderRadius="md"
              // width=
              p={5}
              boxShadow="md"
              // mt={{ base: "-40px", md: "-100px" }} // Adjust margin for responsiveness
              mt={{ base: "-40vh", md: "-15vh", lg: "-15vh" }}
              maxWidth={{ base: "90%", lg: "50%" }}
              width={{ base: "90%", lg: "50%" }}
              height={{ base: "90%", lg: "50%" }}
              sx={{
                backgroundImage:
                  colorMode === "dark"
                    ? "url('/assets/background/pattern.jpg')"
                    : "url('/assets/background/light-pattern.jpg')",
                backdropBlur: "md",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                borderRadius: "md",
                p: 5,
                boxShadow: "md",
              }}>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
                }
                fontSize="4xl"
                fontWeight={"500"}
                mt="4"
                width={"100%"}
                align={"center"}>
                Bipcards – Case Study
              </Text>
              <Text
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
                }
                fontSize="xl"
                mt="4"
                width={["auto", null, "100%"]}>
                Bipcards.com is a platform designed to help businesses enhance
                their online presence by collecting and showcasing genuine
                customer reviews. It aims to build trust and credibility through
                verified feedback.
              </Text>
            </Box>
          </Box>
        </Box>
        <Container maxW="container.xl" py={{ base: "2", lg: "10" }}>
          <BackgroundGradient height="100%" zIndex="-1" />

          {/* Case Study Content */}
          <Box mt={10} px="5">
            <Text
              fontSize="4xl"
              w={["100%", null, "70%"]}
              fontWeight="bold"
              mb={10}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              Developing Bipcards.com – A Comprehensive SaaS Platform for
              Streamlined Customer Reviews and Sales Analytics
            </Text>

            <Text
              fontSize="4xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              Client Background
            </Text>
            <Text
              mb={10}
              fontSize="3xl"
              sx={{
                whiteSpace: "pre-wrap",
                fontSize: "2xl",
                fontWeight: "normal",
                lineHeight: "1.5",
                letterSpacing: "normal",
                textAlign: "left",
                color: colorMode === "dark" ? "white" : "gray.600",
              }}>
              Bipcards.com is an innovative company providing customizable
              NFC-enabled cards designed to help businesses effortlessly direct
              customers to preferred review platforms such as Google, Yelp,
              Trustpilot, and more. By simplifying the review process through a
              simple tap or QR code scan, Bipcards.com enables businesses to
              gather valuable customer feedback conveniently.
            </Text>

            <Text
              fontSize="4xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              Challenge
            </Text>
            <Text
              mb={10}
              sx={{
                whiteSpace: "pre-wrap",
                fontSize: "2xl",
                fontWeight: "normal",
                lineHeight: "1.5",
                letterSpacing: "normal",
                textAlign: "left",
                color: colorMode === "dark" ? "white" : "gray.600",
              }}>
              As a WordPress plugin, WPFeedback had limitations, particularly
              around payment flexibility, collaboration scope (limited to
              WordPress sites), and scalability. It required a strategic
              transformation into a SaaS product with visual collaboration
              across all web platforms, advanced infrastructure, and seamless
              user experience.
              <List spacing={3} mt={5}>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>Advanced Analytics:</strong>
                    <span>
                      Real-time insights into card taps and performance metrics
                      over various time frames.
                    </span>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>Sales and Inventory Management:</strong>
                    <span>
                      Comprehensive tools for tracking sales targets, managing
                      inventory across multiple product types, and monitoring
                      sales representatives&apos; performance.
                    </span>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>Global Support:</strong>
                    <span>
                      Multi-language and multi-currency capabilities to serve an
                      international customer base.
                    </span>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>User Management and Personalization:</strong>
                    <span>
                      Features for account management, subscription handling,
                      and team collaboration.
                    </span>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <ListIcon as={FaAsterisk} color="brand.500" mt={1} />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <strong>Streamlined Sales Process:</strong>
                    <span>
                      Efficient methods for sales reps to onboard new customers
                      quickly and effectively.
                    </span>
                  </Box>
                </ListItem>
              </List>
            </Text>

            <Text
              fontSize="4xl"
              fontWeight="bold"
              mb={2}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              Solution
            </Text>
            <Text
              mb={4}
              sx={{
                whiteSpace: "pre-wrap",
                fontSize: "2xl",
                fontWeight: "normal",
                lineHeight: "1.5",
                letterSpacing: "normal",
                textAlign: "left",
                color: colorMode === "dark" ? "white" : "gray.600",
              }}>
              Tech Emulsion developed a feature-rich SaaS platform tailored to
              meet Bipcards.com&apos;s complex needs:
            </Text>

            <Box pl={5} mb={4}>
              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Client Background
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Bipcards.com is an innovative company providing customizable
                NFC-enabled cards that allow businesses to effortlessly direct
                customers to preferred review platforms like Google, Yelp,
                Trustpilot, and more. By simplifying the review process through
                a tap or QR code scan, businesses can gather valuable feedback
                conveniently. Bipcards.com also offers tools like a Google Star
                Calculator to estimate how new reviews could affect a
                business&apos;s rating. Features like express shipping, a 30-day
                money-back guarantee, and support for multiple languages and
                currencies cater to a global audience.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Challenge
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Bipcards.com needed a robust SaaS platform to enhance their
                service offerings and manage complex operations efficiently. The
                platform had to accommodate three distinct user roles: Admins,
                Customers, and Sales Representatives, each with tailored
                functionalities. Key requirements included advanced analytics
                for real-time insights into card taps over various time frames,
                such as the last 30 minutes, day, week, or month. They also
                needed comprehensive sales and inventory management tools,
                global support for multi-language and multi-currency
                capabilities, user management features for account handling,
                subscriptions, and team collaboration, as well as efficient
                onboarding methods for sales reps to quickly add new customers.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Solution
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Tech Emulsion developed a feature-rich SaaS platform tailored to
                Bipcards.com&apos;s needs, focusing on scalability, user
                experience, and operational efficiency. For Admins, we created a
                comprehensive analytics dashboard that displays overall platform
                performance, including total card taps, and line charts showing
                customer activity trends. Leaderboards were introduced to
                highlight top-performing team members and their recent activity.
                Admins can also access a sales overview page that shows total
                sales, individual sales rep targets versus actual sales, and
                comparative analyses of budget versus sales. Inventory
                management was implemented to manage seven different platform
                types—such as Google, Instagram, WhatsApp, Trustpilot,
                TripAdvisor, Reco, and Yelp—across three product types—Card,
                Stand, and Plate—allowing seamless inventory addition, updating,
                and management. Subscription and fulfillment integration with
                Stripe was established to view and manage all customer
                subscriptions and link with the fulfillment center for automated
                order processing. Admins also have full control over adding,
                updating, and deleting users across all roles.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Customers
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Customers can access their own personalized analytics page,
                mirroring the admin dashboard but focused on their business.
                Insights into card performance, tap activity over time, and team
                member contributions are available. Customers can edit personal
                details, manage subscriptions, and add team members. Team
                performance stats and leaderboards encourage healthy
                competition, while a shop section allows customers to upgrade
                subscriptions and purchase additional products or services.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Sales Representatives
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Sales Representatives benefit from unique payment links and QR
                codes that automatically create customer accounts upon scanning.
                This streamlined onboarding process reduces friction, and new
                customers receive credentials via email for instant access.
                Sales reps can track performance metrics, compare their results
                against peers, and view available inventory.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Advanced Features
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                Real-time analytics tracking with customizable time frames and
                line charts provide a comprehensive view of user engagement.
                Leaderboards enhance team productivity, and multi-language and
                multi-currency support make the platform accessible globally.
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={["xl", "2xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "#004c4c",
                }}
                mb={2}>
                Technology and Integration
              </Text>
              <Text
                mb={5}
                fontSize={["lg", "xl"]}
                sx={{
                  color: colorMode === "dark" ? "white" : "gray.600",
                }}>
                The platform integrates seamlessly with Stripe for secure
                subscriptions and payments. Additionally, fulfillment centers
                are linked for automated order processing. The platform was
                designed with scalability in mind, ensuring secure data handling
                that adheres to international standards.
              </Text>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                py: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
              }}>
              <FaQuoteLeft
                size={10}
                style={{ position: "absolute", left: "15%", top: 40 }}
              />
              <Text
                sx={{
                  whiteSpace: "pre-wrap",
                  fontSize: { base: "md", lg: "4xl" },
                  fontWeight: "normal",
                  lineHeight: "1.5",
                  letterSpacing: "normal",
                  textAlign: "left",
                  color: colorMode === "dark" ? "white" : "gray.600",
                  display: "flex",
                  width: "60%",
                }}>
                Tech Emulsion transformed our vision into a powerful platform
                that not only meets our current needs but is scalable for future
                growth. Their expertise in integrating complex features into an
                intuitive interface has significantly improved our operational
                efficiency and global reach.
              </Text>
              <FaQuoteRight
                size={10}
                style={{ position: "absolute", right: "20%", bottom: 32 }}
              />
              <Text
                sx={{
                  fontSize: { base: "md", lg: "4xl" },
                  fontWeight: "bold",

                  color: "gray.600",

                  mt: "5",
                }}>
                – Alex, CEO of Bipcards.com
              </Text>
            </Box>
            <Text
              fontSize="4xl"
              fontWeight="bold"
              mb={2}
              mt={10}
              sx={{
                color: colorMode === "dark" ? "white" : "#004c4c",
              }}>
              {" "}
              Results
            </Text>
            <Text
              mb={10}
              sx={{
                whiteSpace: "pre-wrap",
                fontSize: "2xl",
                fontWeight: "normal",
                lineHeight: "1.5",
                letterSpacing: "normal",
                textAlign: "left",
                color: colorMode === "dark" ? "white" : "gray.600",
              }}>
              The new platform provided enhanced business insights for both
              admins and customers through detailed analytics, empowering them
              to make data-driven decisions. Streamlined sales processes allowed
              sales reps to onboard customers quickly using QR codes, reducing
              the friction associated with traditional sales cycles. Improved
              team management was achieved through leaderboards and team stats
              that fostered a competitive environment, enhancing productivity
              and encouraging collaboration. Operational efficiency was improved
              through automated inventory and subscription management, reducing
              manual workload and errors. Finally, global reach was expanded
              with multi-language and multi-currency support, allowing
              Bipcards.com to tap into new international markets.
            </Text>
          </Box>

          {/* Visual Showcase / Gallery Section */}

          <Box
            sx={{
              width: "100%",
              backgroundImage:
                colorMode === "dark"
                  ? "url('/assets/background/pattern.jpg')"
                  : "url('/assets/background/light-pattern.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              py: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              h: "100%",
              textAlign: "center",
            }}>
            <Text
              mb={10}
              textAlign="center"
              color={
                colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
              }
              fontSize="xl"
              fontWeight="bold"
              width={["auto", null, "60%"]}>
              Looking to elevate your business with a custom, scalable SaaS
              solution? Contact Tech Emulsion today to turn your innovative
              ideas into reality.
            </Text>

            <Box>
              <Text fontSize="2xl" fontWeight="bold" mb={6}>
                Ready to Get Started?
              </Text>
              <Text
                fontSize="xl"
                mb={10}
                color={
                  colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
                }>
                Let&apos;s discuss how we can help you achieve your business
                goals.
              </Text>
              <Box
                as="a"
                href="https://calendly.com/hassanms/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                bg="brand.500"
                color="white"
                px={8}
                py={4}
                borderRadius="md"
                fontSize="xl"
                fontWeight="bold"
                _hover={{ bg: "brand.600" }}
                sx={{
                  textDecoration: "none",
                  boxShadow: "md",
                  backdropFilter: "saturate(180%) blur(20px)",
                  backgroundClip: "padding-box",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  color: "#004c4c",
                }}>
                Book a Call
              </Box>
            </Box>
          </Box>
        </Container>{" "}
      </Container>{" "}
    </Box>
  );
};

export default CaseStudyBipcards;
