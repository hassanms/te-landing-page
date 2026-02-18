import { Box, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useRef, useState, useMemo } from "react";

interface Blob {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  speed: number;
}

export const AnimatedMeshBackground = ({ ...props }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [blobs, setBlobs] = useState<Blob[]>([]);
  const animationFrameRef = useRef<number>();
  const lastUpdateTimeRef = useRef<number>(0);
  const mouseThrottleRef = useRef<number>(0);

  const isDark = useColorModeValue(false, true);
  
  // Check for reduced motion preference
  const [prefersReducedMotion] = useMediaQuery("(prefers-reduced-motion: reduce)");
  const shouldAnimate = !prefersReducedMotion;

  // Initialize blobs - reduced from 4 to 3 for better performance
  useEffect(() => {
    const initialBlobs: Blob[] = Array.from({ length: 3 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      targetX: Math.random() * 100,
      targetY: Math.random() * 100,
      size: 300 + Math.random() * 200,
      // First blob (index 0) has faster speed for mouse following
      speed: i === 0 ? 0.08 : 0.02 + Math.random() * 0.02,
    }));
    setBlobs(initialBlobs);
  }, []);

  // Mouse tracking - track mouse on the entire window for better interaction
  // Throttled to reduce update frequency
  useEffect(() => {
    if (!shouldAnimate) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle mouse updates to every 16ms (~60fps)
      if (now - mouseThrottleRef.current < 16) return;
      mouseThrottleRef.current = now;

      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to container
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      // Clamp values to stay within bounds
      const clampedX = Math.max(0, Math.min(100, x));
      const clampedY = Math.max(0, Math.min(100, y));
      
      setMousePosition({ x: clampedX, y: clampedY });
    };

    // Track mouse on window for better coverage
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    // Initialize mouse position to center
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: 50, y: 50 });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [shouldAnimate]);

  // Animate blobs - throttled and with reduced motion support
  useEffect(() => {
    if (blobs.length === 0 || !shouldAnimate) return;

    const animate = (timestamp: number) => {
      // Throttle animation updates to ~30fps instead of 60fps for better performance
      const elapsed = timestamp - lastUpdateTimeRef.current;
      if (elapsed < 33) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastUpdateTimeRef.current = timestamp;

      setBlobs((prevBlobs) =>
        prevBlobs.map((blob, index) => {
          const updatedBlob = { ...blob };
          
          // Update target position based on mouse (only for first blob)
          if (index === 0) {
            // First blob follows mouse cursor smoothly
            updatedBlob.targetX = mousePosition.x;
            updatedBlob.targetY = mousePosition.y;
          } else {
            // Other blobs have autonomous movement - reduced frequency
            if (Math.random() < 0.003) {
              updatedBlob.targetX = Math.random() * 100;
              updatedBlob.targetY = Math.random() * 100;
            }
          }

          // Smooth interpolation with easing
          const dx = updatedBlob.targetX - updatedBlob.x;
          const dy = updatedBlob.targetY - updatedBlob.y;
          
          // Use faster interpolation for mouse-following blob
          const interpolationSpeed = index === 0 ? updatedBlob.speed : updatedBlob.speed;
          
          updatedBlob.x += dx * interpolationSpeed;
          updatedBlob.y += dy * interpolationSpeed;

          return updatedBlob;
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [blobs.length, mousePosition, shouldAnimate]);

  // Color gradients based on theme - memoized for performance
  const colors = useMemo(
    () =>
      isDark
        ? [
            "rgba(20, 184, 166, 0.4)", // teal-500
            "rgba(95, 201, 188, 0.3)", // pearlAqua-500
            "rgba(0, 53, 48, 0.5)", // evergreen-500
          ]
        : [
            "rgba(20, 184, 166, 0.25)", // teal-500
            "rgba(95, 201, 188, 0.2)", // pearlAqua-500
            "rgba(0, 53, 48, 0.15)", // evergreen-500
          ],
    [isDark]
  );

  return (
    <Box
      ref={containerRef}
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="0"
      overflow="hidden"
      pointerEvents="none"
      {...props}
    >
      {/* Animated gradient blobs */}
      {shouldAnimate && blobs.map((blob, index) => (
        <Box
          key={index}
          position="absolute"
          left={`${blob.x}%`}
          top={`${blob.y}%`}
          width={`${blob.size}px`}
          height={`${blob.size}px`}
          borderRadius="50%"
          background={`radial-gradient(circle, ${colors[index % colors.length]}, transparent 70%)`}
          filter="blur(60px)"
          transform="translate(-50%, -50%)"
          pointerEvents="none"
          style={{
            willChange: index === 0 ? "transform, left, top" : "transform",
            transition: index === 0 ? "none" : "transform 0.3s ease-out",
          }}
        />
      ))}

      {/* Additional subtle gradient overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background={`linear-gradient(180deg, transparent 0%, ${
          isDark ? "rgba(26, 32, 44, 0.3)" : "rgba(255, 255, 255, 0.5)"
        } 100%)`}
        pointerEvents="none"
      />
    </Box>
  );
};
