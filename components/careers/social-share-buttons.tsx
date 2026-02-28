import React from "react";
import { HStack, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";

interface SocialShareButtonsProps {
  url?: string;
  title: string;
  company?: string;
}

export const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({
  url,
  title,
  company = "Tech Emulsion",
}) => {
  const shareUrl = url || (typeof window !== "undefined"
    ? window.location.href
    : "https://techemulsion.com/careers");

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const emailSubject = encodeURIComponent(`Job opportunity: ${title} at ${company}`);
  const emailBody = encodeURIComponent(
    `Check out this job opportunity:\n\n${title}\n${company}\n\nView details: ${shareUrl}`
  );
  const emailShareLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  const whatsappShareLink = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;

  const iconColor = useColorModeValue("gray.700", "gray.100");

  const iconStyle = {
    boxSize: "10",
    color: iconColor,
    sx: {
      padding: "10px",
      borderRadius: "20%",
      border: "1px solid",
      borderColor: "teal.500",
      ":hover": {
        bg: "teal.500",
        color: "white",
      },
    },
  };

  return (
    <HStack spacing="4">
      <Link
        href={emailShareLink}
        aria-label="Share via email"
      >
        <Icon as={FaEnvelope} {...iconStyle} />
      </Link>
      <Link
        href={whatsappShareLink}
        isExternal
        aria-label="Share on WhatsApp"
      >
        <Icon as={FaWhatsapp} {...iconStyle} />
      </Link>
    </HStack>
  );
};

export default SocialShareButtons;

