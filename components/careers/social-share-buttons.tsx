import React from "react";
import { HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

interface SocialShareButtonsProps {
  url?: string;
  title: string;
}

export const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({
  url,
  title,
}) => {
  // Use provided URL or fallback to current page URL
  const shareUrl = url || (typeof window !== "undefined" 
    ? window.location.href 
    : "https://techemulsion.com/careers");
  
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const bg = useColorModeValue("white", "gray.800");

  const openShare = (shareLink: string) => {
    if (typeof window === "undefined") return;
    window.open(shareLink, "_blank", "noopener,noreferrer");
  };

  return (
    <HStack spacing={2}>
      <IconButton
        aria-label="Share on Facebook"
        icon={<FaFacebook />}
        size="sm"
        variant="outline"
        bg={bg}
        onClick={() =>
          openShare(
            `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
          )
        }
      />
      <IconButton
        aria-label="Share on X"
        icon={<FaXTwitter />}
        size="sm"
        variant="outline"
        bg={bg}
        onClick={() =>
          openShare(
            `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}%20-%20${encodedUrl}`,
          )
        }
      />
      <IconButton
        aria-label="Share on LinkedIn"
        icon={<FaLinkedin />}
        size="sm"
        variant="outline"
        bg={bg}
        onClick={() =>
          openShare(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
          )
        }
      />
      <IconButton
        aria-label="Share on WhatsApp"
        icon={<FaWhatsapp />}
        size="sm"
        variant="outline"
        bg={bg}
        onClick={() =>
          openShare(
            `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
          )
        }
      />
    </HStack>
  );
};

export default SocialShareButtons;

