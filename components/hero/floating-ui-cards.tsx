import { Box, Text, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface FloatingCardProps {
  className?: string;
  animClass: string;
  children: React.ReactNode;
  sx?: any;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ className = "", animClass, children, sx }) => {
  const bgColor = useColorModeValue(
    "rgba(0, 0, 0, 0.05)",
    "rgba(255, 255, 255, 0.05)"
  );
  const borderColor = useColorModeValue(
    "rgba(0, 0, 0, 0.08)",
    "rgba(255, 255, 255, 0.08)"
  );

  return (
    <Box
      className={`${animClass} ${className}`}
      position="absolute"
      borderRadius="2xl"
      p={4}
      backdropFilter="blur(24px)"
      border="1px solid"
      borderColor={borderColor}
      bg={bgColor}
      sx={{
        WebkitBackdropFilter: "blur(24px)",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export const FloatingUICards: React.FC = () => {
  const textColor = useColorModeValue("gray.800", "#e2e8f0");
  const subTextColor = useColorModeValue("gray.600", "#64748b");
  const accentColor = useColorModeValue("teal.500", "#2dd4bf");
  
  // Code syntax colors for light/dark mode
  const codeConst = useColorModeValue("#7c3aed", "#a78bfa"); // purple
  const codeVar = useColorModeValue("#0891b2", "#67e8f9"); // cyan
  const codeKeyword = useColorModeValue("#14b8a6", "#2dd4bf"); // teal
  const codeClass = useColorModeValue("#ca8a04", "#fde047"); // yellow
  const codeProp = useColorModeValue("#475569", "#cbd5e1"); // slate
  const codeString = useColorModeValue("#16a34a", "#4ade80"); // green
  const codePunct = useColorModeValue("gray.500", "#64748b"); // punctuation

  return (
    <MotionBox
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      }}
      position="relative"
      h="520px"
      w="100%"
    >
      {/* ── Card 1: Revenue Dashboard ── */}
      <FloatingCard className="hero-float" animClass="hero-float" sx={{ top: "32px", left: "32px", w: "288px" }}>
        <HStack spacing={3} mb={3}>
          <Box
            w="32px"
            h="32px"
            borderRadius="lg"
            bgGradient="linear(to-br, rgba(20, 184, 166, 0.2), rgba(34, 211, 238, 0.2))"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box w="12px" h="12px" borderRadius="sm" bg={accentColor} />
          </Box>
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="xs" fontWeight="600" color={textColor}>
              Revenue Dashboard
            </Text>
            <Text fontSize="10px" color={subTextColor}>
              Real-time analytics
            </Text>
          </VStack>
        </HStack>
        <HStack spacing={1.5} align="flex-end" h="64px" mt={2}>
          {[
            { height: "40%", bg: "rgba(20, 184, 166, 0.2)" },
            { height: "65%", bg: "rgba(20, 184, 166, 0.3)" },
            { height: "45%", bg: "rgba(20, 184, 166, 0.2)" },
            { height: "80%", bg: "rgba(20, 184, 166, 0.4)" },
            { height: "55%", bg: "rgba(20, 184, 166, 0.3)" },
            { height: "95%", bgGradient: "linear(to-t, rgba(20, 184, 166, 0.5), rgba(34, 211, 238, 0.5))" },
            { height: "70%", bg: "rgba(20, 184, 166, 0.35)" },
            { height: "50%", bg: "rgba(20, 184, 166, 0.25)" },
          ].map((bar, index) => (
            <Box
              key={index}
              flex="1"
              h={bar.height}
              borderRadius="sm"
              bg={bar.bg}
              bgGradient={bar.bgGradient}
              minH="8px"
            />
          ))}
        </HStack>
        <HStack justify="space-between" mt={3}>
          <Text fontSize="10px" color={subTextColor}>
            Jan
          </Text>
          <Text fontSize="xs" fontWeight="600" color={accentColor}>
            +24.5%
          </Text>
        </HStack>
      </FloatingCard>

      {/* ── Card 2: Code Snippet ── */}
      <FloatingCard className="hero-float-delayed" animClass="hero-float-delayed" sx={{ top: "144px", right: "16px", w: "240px" }}>
        <HStack spacing={2} mb={3}>
          <HStack spacing={1}>
            <Box w="8px" h="8px" borderRadius="full" bg="rgba(248, 113, 113, 0.6)" />
            <Box w="8px" h="8px" borderRadius="full" bg="rgba(251, 191, 36, 0.6)" />
            <Box w="8px" h="8px" borderRadius="full" bg="rgba(74, 222, 128, 0.6)" />
          </HStack>
          <Text fontSize="10px" color={subTextColor} ml={1}>
            agent.ts
          </Text>
        </HStack>
        <VStack align="flex-start" spacing={1} fontFamily="mono" fontSize="11px" lineHeight="relaxed">
          <Text>
            <Text as="span" color={codeConst}>const</Text>{" "}
            <Text as="span" color={codeVar}>agent</Text>{" "}
            <Text as="span" color={codePunct}>=</Text>{" "}
            <Text as="span" color={codeKeyword}>new</Text>{" "}
            <Text as="span" color={codeClass}>AIAgent</Text>
            <Text as="span" color={codePunct}>{"({"}</Text>
          </Text>
          <Text pl={3}>
            <Text as="span" color={codeProp}>model</Text>
            <Text as="span" color={codePunct}>: </Text>
            <Text as="span" color={codeString}>"gpt-5"</Text>
            <Text as="span" color={codePunct}>,</Text>
          </Text>
          <Text pl={3}>
            <Text as="span" color={codeProp}>tools</Text>
            <Text as="span" color={codePunct}>: </Text>
            <Text as="span" color={codePunct}>[</Text>
            <Text as="span" color={codeString}>search</Text>
            <Text as="span" color={codePunct}>]</Text>
          </Text>
          <Text>
            <Text as="span" color={codePunct}>{"})"}</Text>
          </Text>
        </VStack>
      </FloatingCard>

      {/* ── Card 3: Mobile Frame ── */}
      <FloatingCard className="hero-float-slow" animClass="hero-float-slow" sx={{ bottom: "48px", left: "64px", w: "176px" }}>
        <Box
          w="100%"
          aspectRatio="9/16"
          borderRadius="xl"
          bgGradient={useColorModeValue(
            "linear(to-b, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.05))",
            "linear(to-b, #111118, #0d0d14)"
          )}
          border="none"
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={3}
          position="relative"
          overflow="hidden"
        >
          <Box 
            w="48px" 
            h="4px" 
            borderRadius="full" 
            bg={useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(255, 255, 255, 0.1)")} 
            mb={3} 
          />
          <VStack spacing={2} w="100%" align="flex-start">
            <Box 
              h="8px" 
              w="75%" 
              borderRadius="full" 
              bg={useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(255, 255, 255, 0.1)")} 
            />
            <Box 
              h="8px" 
              w="50%" 
              borderRadius="full" 
              bg={useColorModeValue("rgba(0, 0, 0, 0.06)", "rgba(255, 255, 255, 0.06)")} 
            />
          </VStack>
          <Box mt={3} w="100%" display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={1.5}>
            <Box aspectRatio={1} borderRadius="lg" bg="rgba(20, 184, 166, 0.1)" />
            <Box aspectRatio={1} borderRadius="lg" bg="rgba(34, 211, 238, 0.1)" />
            <Box aspectRatio={1} borderRadius="lg" bg="rgba(139, 92, 246, 0.1)" />
            <Box aspectRatio={1} borderRadius="lg" bg="rgba(20, 184, 166, 0.1)" />
          </Box>
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            h="32px"
            bgGradient={useColorModeValue(
              "linear(to-t, rgba(0, 0, 0, 0.05), transparent)",
              "linear(to-t, #0d0d14, transparent)"
            )}
          />
        </Box>
      </FloatingCard>

      {/* ── Card 4: Stats Pill ── */}
      <FloatingCard className="hero-float-delayed" animClass="hero-float-delayed" sx={{ bottom: "128px", right: "48px", w: "192px" }}>
        <HStack spacing={3}>
          <Box
            w="40px"
            h="40px"
            borderRadius="full"
            bgGradient="linear(to-br, rgba(20, 184, 166, 0.2), rgba(34, 211, 238, 0.2))"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="smaller" fontWeight="bold" color={accentColor}>
              100%
            </Text>
          </Box>
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="xs" fontWeight="600" color={textColor}>
              Client Satisfaction
            </Text>
            <Text fontSize="10px" color={subTextColor}>
              Based on 50+ projects
            </Text>
          </VStack>
        </HStack>
      </FloatingCard>

      {/* ── Decorative glow orb ── */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="288px"
        h="288px"
        borderRadius="full"
        bg="rgba(20, 184, 166, 0.06)"
        filter="blur(80px)"
        className="hero-glow-pulse"
        pointerEvents="none"
        zIndex={-1}
      />
    </MotionBox>
  );
};
