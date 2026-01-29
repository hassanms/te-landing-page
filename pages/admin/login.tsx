import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Alert,
  AlertIcon,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { signIn, getCurrentUser } from "lib/supabase/auth-client";
import { EnhancedSEO } from "components/seo/enhanced-seo";

const AdminLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const labelColor = useColorModeValue("gray.700", "gray.100");

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          router.push("/admin");
        }
      } catch (err) {
        // Not authenticated
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: signInError } = await signIn(email, password);

      if (signInError) {
        setError(signInError.message || "Invalid email or password");
        setLoading(false);
        return;
      }

      if (data?.user) {
        // Redirect to admin dashboard
        router.push("/admin");
      } else {
        setError("Login failed. Please try again.");
        setLoading(false);
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "An error occurred during login");
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Text>Checking authentication...</Text>
      </Box>
    );
  }

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg={useColorModeValue("gray.50", "gray.900")}>
      <EnhancedSEO
        title="Admin Login - Tech Emulsion"
        description="Admin login page"
        pageType="about"
      />
      <Container maxW="md">
        <Box
          bg={bgColor}
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          border="1px solid"
          borderColor={borderColor}
        >
          <VStack spacing={6} align="stretch">
            <Box textAlign="center">
              <Heading size="lg" mb={2}>
                Admin Login
              </Heading>
              <Text color={textColor} fontSize="sm">
                Sign in to access the admin dashboard
              </Text>
            </Box>

            {error && (
              <Alert status="error" borderRadius="md">
                <AlertIcon />
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel color={labelColor}>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    autoComplete="email"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color={labelColor}>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="teal"
                  width="full"
                  isLoading={loading}
                  loadingText="Signing in..."
                >
                  Sign In
                </Button>
              </VStack>
            </form>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLogin;
