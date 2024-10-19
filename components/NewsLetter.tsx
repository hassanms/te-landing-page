import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import InnerElementBG from "./InnerElementBG";
import * as Yup from "yup";

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const NewsLetter = () => {
  const { colorMode } = useColorMode();
  const [formData, setFormData] = React.useState({ email: "" });
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({ email: "" });

  const validateField = async (name: string, value: string) => {
    try {
      await emailSchema.validateAt(name, { [name]: value });
      setErrors({ ...errors, [name]: "" });
    } catch (error: any) {
      setErrors({ ...errors, [name]: error.message });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailSchema.validate(formData, { abortEarly: false });

      await axios.post("/api/subscription", formData);
      toast.success("Subscribed successfully");
      setFormData({ email: "" });
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) {
        const validationErrors: any = {};
        validationError.inner.forEach((err) => {
          if (err.path) validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        toast.error("Failed to send Subscription email");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <Box
      position={"absolute"}
      top={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"4"}
      mt={"20"}
      width={"97.8%"}
      ml={"0.3%"}
      sx={{
        // background image with gradient
        backgroundColor: "#008080",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingY: "60px",
        borderRadius: "5px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Heading
        as="h2"
        color={"white"}
        sx={{
          fontSize: {
            base: "1.5rem",
            md: "2rem",
          },
          width: {
            base: "90%",
            md: "60%",
          },
        }}
      >
        Subscribe our newsletter to receive future updates
      </Heading>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"4"}
        mt={"10"}
        position={"relative"}
        width={{
          base: "90%",
          md: "70%",
          lg: "55%",
          xl: "45%",
        }}
        color={"gray.100"}
      >
        <Input
          sx={{
            width: "100%",
            padding: "2rem 1rem",
            borderRadius: "40px",
            fontSize: "18px",
            color: "white",
            bg: "#66b2b2",
            opacity: "0.8",
            zIndex: "1000000",
            _focusVisible: {
              border: "1px solid #004c4c",
              color: "none",
            },
            "&::placeholder": {
              color: "gray.50",
            },
          }}
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
        {errors.email && (
          <Text
            color="#FFAE42"
            fontSize="18px"
            textAlign={"left"}
            mt={"-10px"}
            marginLeft={"10px"}
          >
            {errors.email}
          </Text>
        )}
        <Button
          position={[null, null, "absolute"]}
          zIndex={"10000000"}
          top={errors.email ? "8%" : "12%"}
          right={"2%"}
          size="lg"
          bg={"white"}
          sx={{
            fontSize: {
              base: "1rem",
              md: "1.1rem",
            },
            color: "#004c4c",
            borderRadius: "30px",
            padding: {
              base: "0.5rem",
              md: "1rem 1.2rem",
            },
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
            "&:hover": {
              bg: "#004c4c",
              color: "white",
            },
          }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe Now"}
        </Button>
      </Box>

      <Box
        display="block"
        position={"absolute"}
        top={"0"}
        left={"0"}
        width={"100%"}
        overflow={"hidden"}
      >
        <InnerElementBG />
      </Box>
    </Box>
  );
};

export default NewsLetter;
