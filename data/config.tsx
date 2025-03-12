import { Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Logo } from "./logo";

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Tech Emulsion",
    description: "Imageineering digital transformation for your business",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "about",
        label: "About",
      },
      {
        id: "services",
        label: "Services",
      },
      {
        id: "portfolio",
        label: "Portfolio",
      },
      {
        label: "Social Proof",
        id: "social",
      },
      {
        label: "Tech Stack",
        id: "tech",
      },
      // {
      //   label: "Our Story",
      //   href: "/our-story",
      //   id: "tech",
      // },
      {
        label: "Get a Quote",
        href: "/contact",
        variant: "varient",
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{" "}
        <Link href="https://twitter.com/Pagebakers">Eelco Wiersma</Link>
      </>
    ),
    links: [
      {
        href: "https://www.facebook.com/emulsiontech/",
        label: <FaFacebook size="20" />,
      },
      {
        href: "https://www.linkedin.com/company/tech-emulsion/",
        label: <FaLinkedin size="20" />,
      },

      // {
      //   href: "https://twitter.com/saas_js",
      //   label: <FaTwitter size="20" />,
      // },
      {
        href: "https://github.com/hassanms",
        label: <FaGithub size="20" />,
      },
      {
        href: "https://www.youtube.com/@TechEmulsion",
        label: <FaYoutube size="20" />,
      },
    ],
  },
  signup: {
    title: "Start building with Saas UI",
    features: [
      {
        icon: FiCheck,
        title: "Accessible",
        description: "All components strictly follow WAI-ARIA standards.",
      },
      {
        icon: FiCheck,
        title: "Themable",
        description:
          "Fully customize all components to your brand with theme support and style props.",
      },
      {
        icon: FiCheck,
        title: "Composable",
        description:
          "Compose components to fit your needs and mix them together to create new ones.",
      },
      {
        icon: FiCheck,
        title: "Productive",
        description:
          "Designed to reduce boilerplate and fully typed, build your product at speed.",
      },
    ],
  },
};

export default siteConfig;
