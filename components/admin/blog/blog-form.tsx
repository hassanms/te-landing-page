import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  Stack,
  HStack,
  VStack,
  Switch,
  useColorModeValue,
  Text,
  Image,
  IconButton,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  WrapItem,
  Progress,
} from "@chakra-ui/react";
import { FiUpload, FiX, FiImage } from "react-icons/fi";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import apiClient from "lib/api-client";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface BlogPost {
  id?: string;
  slug?: string;
  title?: string;
  excerpt?: string;
  content?: string;
  featured_image?: string | null;
  category?: string;
  author_name?: string;
  tags?: string[];
  is_featured?: boolean;
  is_published?: boolean;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  canonical_url?: string;
  og_image?: string | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface BlogFormProps {
  post?: BlogPost | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export const BlogForm: React.FC<BlogFormProps> = ({ post, onSuccess, onCancel }) => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image: "",
    category: "",
    author_name: "Hassan Sid",
    tags: [] as string[],
    is_featured: false,
    is_published: false,
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    canonical_url: "",
    og_image: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [categories, setCategories] = useState<Category[]>([]);
  const [newTag, setNewTag] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const inputBg = useColorModeValue("gray.50", "gray.700");
  const quillBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const labelColor = useColorModeValue("gray.700", "gray.100");
  const helperTextColor = useColorModeValue("gray.500", "gray.200");
  const smallTextColor = useColorModeValue("gray.400", "gray.200");

  // ReactQuill modules configuration
  const quillModules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ align: [] }],
        ["blockquote", "code-block"],
        ["link"],
        ["clean"],
      ],
    },
    clipboard: {
      matchVisual: false,
    },
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "align",
    "blockquote",
    "code-block",
    "link",
  ];

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get("/api/admin/blog/categories");
        setCategories(response.data.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Populate form if editing
  useEffect(() => {
    if (post) {
      setForm({
        title: post.title || "",
        slug: post.slug || "",
        excerpt: post.excerpt || "",
        content: post.content || "",
        featured_image: post.featured_image || "",
        category: post.category || "",
        author_name: post.author_name || "Tech Emulsion",
        tags: post.tags || [],
        is_featured: post.is_featured || false,
        is_published: post.is_published || false,
        meta_title: post.meta_title || "",
        meta_description: post.meta_description || "",
        meta_keywords: post.meta_keywords || "",
        canonical_url: post.canonical_url || "",
        og_image: post.og_image || "",
      });
    }
  }, [post]);

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));

    // Auto-generate slug from title
    if (field === "title" && !post) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setForm((prev) => ({ ...prev, slug }));
    }

    // Auto-fill SEO fields if empty
    if (field === "title") {
      setForm((prev) => ({
        ...prev,
        meta_title: prev.meta_title || value,
      }));
    }
    if (field === "excerpt") {
      setForm((prev) => ({
        ...prev,
        meta_description: prev.meta_description || value,
      }));
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && !form.tags.includes(newTag.trim())) {
      setForm((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: "featured_image" | "og_image") => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Invalid file type. Allowed: JPEG, PNG, GIF, WebP");
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB");
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await apiClient.post("/api/admin/blog/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.total
            ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
            : 0;
          setUploadProgress(progress);
        },
      });

      if (response.data.url) {
        setForm((prev) => ({ ...prev, [field]: response.data.url }));
        toast.success("Image uploaded successfully");
      }
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error(error?.response?.data?.error || "Failed to upload image");
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const removeImage = (field: "featured_image" | "og_image") => {
    setForm((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!form.title) newErrors.title = "Title is required";
    if (!form.slug) newErrors.slug = "Slug is required";
    if (!form.excerpt) newErrors.excerpt = "Excerpt is required";
    if (!form.category) newErrors.category = "Category is required";

    // Validate content - check if it has actual content
    const contentText = form.content.replace(/<[^>]*>/g, "").trim();
    if (!contentText) {
      newErrors.content = "Content is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSubmitting(true);

    try {
      const postData = {
        ...form,
        og_image: form.og_image || form.featured_image,
      };

      if (post?.id) {
        // Update existing post
        await apiClient.put(`/api/admin/blog/${post.id}`, postData);
        toast.success("Blog post updated successfully");
      } else {
        // Create new post
        await apiClient.post("/api/admin/blog", postData);
        toast.success("Blog post created successfully");
      }

      onSuccess();
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        "Failed to save blog post. Please try again.";
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSaveDraft = async () => {
    const wasPublished = form.is_published;
    setForm((prev) => ({ ...prev, is_published: false }));
    
    // Small delay to ensure state is updated
    setTimeout(async () => {
      if (!validate()) {
        setForm((prev) => ({ ...prev, is_published: wasPublished }));
        toast.error("Please fill in all required fields");
        return;
      }
      
      setSubmitting(true);
      try {
        const postData = { ...form, is_published: false };
        
        if (post?.id) {
          await apiClient.put(`/api/admin/blog/${post.id}`, postData);
          toast.success("Draft saved successfully");
        } else {
          await apiClient.post("/api/admin/blog", postData);
          toast.success("Draft created successfully");
        }
        onSuccess();
      } catch (error: any) {
        toast.error(error?.response?.data?.error || "Failed to save draft");
        setForm((prev) => ({ ...prev, is_published: wasPublished }));
      } finally {
        setSubmitting(false);
      }
    }, 0);
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Tabs variant="enclosed" colorScheme="teal">
        <TabList>
          <Tab>Content</Tab>
          <Tab>Media</Tab>
          <Tab>SEO</Tab>
          <Tab>Settings</Tab>
        </TabList>

        <TabPanels>
          {/* Content Tab */}
          <TabPanel px={0}>
            <Stack spacing={5}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <FormControl isRequired isInvalid={!!errors.title}>
                  <FormLabel color={labelColor}>Title</FormLabel>
                  <Input
                    value={form.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    bg={inputBg}
                    placeholder="Enter blog post title"
                  />
                  <FormErrorMessage>{errors.title}</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={!!errors.slug}>
                  <FormLabel color={labelColor}>Slug (URL)</FormLabel>
                  <Input
                    value={form.slug}
                    onChange={(e) => handleChange("slug", e.target.value)}
                    bg={inputBg}
                    placeholder="e.g., my-blog-post"
                  />
                  <FormErrorMessage>{errors.slug}</FormErrorMessage>
                </FormControl>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <FormControl isRequired isInvalid={!!errors.category}>
                  <FormLabel color={labelColor}>Category</FormLabel>
                  <Select
                    value={form.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                    bg={inputBg}
                    placeholder="Select category"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{errors.category}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel color={labelColor}>Author Name</FormLabel>
                  <Input
                    value={form.author_name}
                    onChange={(e) => handleChange("author_name", e.target.value)}
                    bg={inputBg}
                    placeholder="Author name"
                  />
                </FormControl>
              </SimpleGrid>

              <FormControl isRequired isInvalid={!!errors.excerpt}>
                <FormLabel color={labelColor}>Excerpt</FormLabel>
                <Textarea
                  value={form.excerpt}
                  onChange={(e) => handleChange("excerpt", e.target.value)}
                  bg={inputBg}
                  rows={3}
                  placeholder="Brief summary of the blog post (shown in listings)"
                />
                <FormErrorMessage>{errors.excerpt}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!errors.content}>
                <FormLabel color={labelColor}>Content</FormLabel>
                <Box
                  sx={{
                    ".quill": {
                      display: "flex",
                      flexDirection: "column",
                      height: "400px",
                    },
                    ".ql-container": {
                      flex: 1,
                      overflow: "auto",
                      fontSize: "16px",
                      fontFamily: "inherit",
                    },
                    ".ql-editor": {
                      minHeight: "300px",
                      backgroundColor: quillBg,
                    },
                    ".ql-toolbar.ql-snow": {
                      border: "1px solid",
                      borderColor: errors.content ? "red.500" : borderColor,
                      borderTopLeftRadius: "6px",
                      borderTopRightRadius: "6px",
                      borderBottom: "none",
                      backgroundColor: inputBg,
                    },
                    ".ql-container.ql-snow": {
                      border: "1px solid",
                      borderColor: errors.content ? "red.500" : borderColor,
                      borderBottomLeftRadius: "6px",
                      borderBottomRightRadius: "6px",
                      backgroundColor: quillBg,
                    },
                    ".ql-editor.ql-blank::before": {
                      fontStyle: "normal",
                      color: "gray.400",
                    },
                    ".quill:focus-within .ql-toolbar.ql-snow": {
                      borderColor: errors.content ? "red.500" : "teal.500",
                    },
                    ".quill:focus-within .ql-container.ql-snow": {
                      borderColor: errors.content ? "red.500" : "teal.500",
                    },
                  }}
                >
                  <ReactQuill
                    theme="snow"
                    value={form.content}
                    onChange={(value) => handleChange("content", value)}
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Write your blog post content here..."
                  />
                </Box>
                <FormErrorMessage>{errors.content}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel color={labelColor}>Tags</FormLabel>
                <HStack mb={2}>
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    bg={inputBg}
                    placeholder="Add a tag"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <Button onClick={handleAddTag} colorScheme="teal" variant="outline">
                    Add
                  </Button>
                </HStack>
                <Wrap>
                  {form.tags.map((tag, index) => (
                    <WrapItem key={index}>
                      <Tag size="md" colorScheme="teal" borderRadius="full">
                        <TagLabel>{tag}</TagLabel>
                        <TagCloseButton onClick={() => handleRemoveTag(tag)} />
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </FormControl>
            </Stack>
          </TabPanel>

          {/* Media Tab */}
          <TabPanel px={0}>
            <Stack spacing={6}>
              <FormControl>
                <FormLabel color={labelColor}>Featured Image</FormLabel>
                <VStack align="stretch" spacing={3}>
                  {form.featured_image ? (
                    <Box position="relative" borderRadius="md" overflow="hidden">
                      <Image
                        src={form.featured_image}
                        alt="Featured image"
                        maxH="300px"
                        objectFit="cover"
                        w="100%"
                      />
                      <IconButton
                        aria-label="Remove image"
                        icon={<FiX />}
                        position="absolute"
                        top={2}
                        right={2}
                        size="sm"
                        colorScheme="red"
                        onClick={() => removeImage("featured_image")}
                      />
                    </Box>
                  ) : (
                    <Box
                      border="2px dashed"
                      borderColor={borderColor}
                      borderRadius="md"
                      p={8}
                      textAlign="center"
                    >
                      <VStack spacing={3}>
                        <FiImage size={48} color="gray" />
                        <Text color={helperTextColor}>
                          Drag and drop an image or click to upload
                        </Text>
                        <Text fontSize="xs" color={smallTextColor}>
                          Recommended: 1200x630px, Max 5MB
                        </Text>
                        <Input
                          type="file"
                          accept="image/jpeg,image/png,image/gif,image/webp"
                          onChange={(e) => handleImageUpload(e, "featured_image")}
                          display="none"
                          id="featured-image-upload"
                        />
                        <Button
                          as="label"
                          htmlFor="featured-image-upload"
                          leftIcon={<FiUpload />}
                          colorScheme="teal"
                          variant="outline"
                          cursor="pointer"
                          isLoading={uploading}
                        >
                          Upload Image
                        </Button>
                      </VStack>
                    </Box>
                  )}
                  {uploading && <Progress value={uploadProgress} colorScheme="teal" size="sm" />}
                </VStack>
              </FormControl>

              <FormControl>
                <FormLabel color={labelColor}>Image URL (Alternative)</FormLabel>
                <Input
                  value={form.featured_image}
                  onChange={(e) => handleChange("featured_image", e.target.value)}
                  bg={inputBg}
                  placeholder="https://example.com/image.jpg"
                />
                <Text fontSize="xs" color={helperTextColor} mt={1}>
                  You can also paste an external image URL directly
                </Text>
              </FormControl>
            </Stack>
          </TabPanel>

          {/* SEO Tab */}
          <TabPanel px={0}>
            <Stack spacing={5}>
              <Text fontSize="sm" color={helperTextColor} mb={2}>
                SEO settings help your blog post rank better in search engines
              </Text>

              <FormControl>
                <FormLabel color={labelColor}>Meta Title</FormLabel>
                <Input
                  value={form.meta_title}
                  onChange={(e) => handleChange("meta_title", e.target.value)}
                  bg={inputBg}
                  placeholder="SEO title (defaults to post title)"
                />
                <Text fontSize="xs" color={helperTextColor} mt={1}>
                  {form.meta_title.length}/60 characters recommended
                </Text>
              </FormControl>

              <FormControl>
                <FormLabel color={labelColor}>Meta Description</FormLabel>
                <Textarea
                  value={form.meta_description}
                  onChange={(e) => handleChange("meta_description", e.target.value)}
                  bg={inputBg}
                  rows={3}
                  placeholder="SEO description (defaults to excerpt)"
                />
                <Text fontSize="xs" color={helperTextColor} mt={1}>
                  {form.meta_description.length}/160 characters recommended
                </Text>
              </FormControl>

              <FormControl>
                <FormLabel color={labelColor}>Meta Keywords</FormLabel>
                <Input
                  value={form.meta_keywords}
                  onChange={(e) => handleChange("meta_keywords", e.target.value)}
                  bg={inputBg}
                  placeholder="keyword1, keyword2, keyword3"
                />
              </FormControl>

              <FormControl>
                <FormLabel color={labelColor}>Canonical URL</FormLabel>
                <Input
                  value={form.canonical_url}
                  onChange={(e) => handleChange("canonical_url", e.target.value)}
                  bg={inputBg}
                  placeholder="https://techemulsion.com/blog/your-post"
                />
                <Text fontSize="xs" color={helperTextColor} mt={1}>
                  Leave empty to use default URL
                </Text>
              </FormControl>

              <FormControl>
                <FormLabel color={labelColor}>Open Graph Image</FormLabel>
                <VStack align="stretch" spacing={3}>
                  {form.og_image ? (
                    <Box position="relative" borderRadius="md" overflow="hidden">
                      <Image
                        src={form.og_image}
                        alt="OG image"
                        maxH="200px"
                        objectFit="cover"
                        w="100%"
                      />
                      <IconButton
                        aria-label="Remove OG image"
                        icon={<FiX />}
                        position="absolute"
                        top={2}
                        right={2}
                        size="sm"
                        colorScheme="red"
                        onClick={() => removeImage("og_image")}
                      />
                    </Box>
                  ) : (
                    <Box
                      border="2px dashed"
                      borderColor={borderColor}
                      borderRadius="md"
                      p={6}
                      textAlign="center"
                    >
                      <Input
                        type="file"
                        accept="image/jpeg,image/png,image/gif,image/webp"
                        onChange={(e) => handleImageUpload(e, "og_image")}
                        display="none"
                        id="og-image-upload"
                      />
                      <Button
                        as="label"
                        htmlFor="og-image-upload"
                        leftIcon={<FiUpload />}
                        colorScheme="teal"
                        variant="outline"
                        cursor="pointer"
                        size="sm"
                      >
                        Upload OG Image
                      </Button>
                      <Text fontSize="xs" color={smallTextColor} mt={2}>
                        Defaults to featured image if not set
                      </Text>
                    </Box>
                  )}
                </VStack>
              </FormControl>
            </Stack>
          </TabPanel>

          {/* Settings Tab */}
          <TabPanel px={0}>
            <Stack spacing={6}>
              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <FormLabel mb={0} color={labelColor}>
                    Publish Post
                  </FormLabel>
                  <Text fontSize="xs" color={helperTextColor}>
                    Make this post visible to the public
                  </Text>
                </Box>
                <Switch
                  isChecked={form.is_published}
                  onChange={(e) => handleChange("is_published", e.target.checked)}
                  colorScheme="teal"
                  size="lg"
                />
              </FormControl>

              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <FormLabel mb={0} color={labelColor}>
                    Feature Post
                  </FormLabel>
                  <Text fontSize="xs" color={helperTextColor}>
                    Display this post prominently on the blog page
                  </Text>
                </Box>
                <Switch
                  isChecked={form.is_featured}
                  onChange={(e) => handleChange("is_featured", e.target.checked)}
                  colorScheme="teal"
                  size="lg"
                />
              </FormControl>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Action Buttons */}
      <HStack justify="flex-end" spacing={4} mt={6} pt={4} borderTop="1px solid" borderColor={borderColor}>
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          variant="outline"
          colorScheme="teal"
          onClick={handleSaveDraft}
          isLoading={submitting}
        >
          Save as Draft
        </Button>
        <Button
          colorScheme="teal"
          type="submit"
          isLoading={submitting}
        >
          {post?.id ? "Update Post" : "Create Post"}
        </Button>
      </HStack>
    </Box>
  );
};
