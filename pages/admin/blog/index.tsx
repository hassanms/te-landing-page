import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Select,
  Input,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { 
  FiEdit, 
  FiTrash2, 
  FiPlus, 
  FiEye, 
  FiMoreVertical,
  FiExternalLink,
  FiCopy,
  FiStar,
} from "react-icons/fi";
import apiClient from "lib/api-client";
import toast from "react-hot-toast";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { BlogForm } from "components/admin/blog/blog-form";
import { AdminLayout } from "components/admin/layout/admin-layout";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  category: string;
  author_name: string;
  tags: string[];
  is_featured: boolean;
  is_published: boolean;
  published_at: string | null;
  view_count: number;
  reading_time_minutes: number;
  created_at: string;
  updated_at: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

const AdminBlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const hoverBg = useColorModeValue("gray.50", "gray.700");
  const smallTextColor = useColorModeValue("gray.400", "gray.200");
  const tableHeadingColor = useColorModeValue("gray.600", "gray.100");

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, categoryFilter, searchTerm]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/api/admin/blog");
      setPosts(response.data.posts || []);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching posts:", err);
      setError("Failed to load blog posts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await apiClient.get("/api/admin/blog/categories");
      setCategories(response.data.categories || []);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const handleCreateNew = () => {
    setSelectedPost(null);
    setIsEditing(false);
    onOpen();
  };

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setIsEditing(true);
    onOpen();
  };

  const handleDelete = async (postId: string) => {
    if (!confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
      return;
    }

    try {
      await apiClient.delete(`/api/admin/blog/${postId}`);
      toast.success("Blog post deleted successfully");
      fetchPosts();
    } catch (err: any) {
      console.error("Error deleting post:", err);
      toast.error("Failed to delete blog post");
    }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    try {
      await apiClient.put(`/api/admin/blog/${post.id}`, {
        is_published: !post.is_published,
      });
      toast.success(post.is_published ? "Post unpublished" : "Post published");
      fetchPosts();
    } catch (err: any) {
      console.error("Error toggling publish:", err);
      toast.error("Failed to update post status");
    }
  };

  const handleToggleFeatured = async (post: BlogPost) => {
    try {
      await apiClient.put(`/api/admin/blog/${post.id}`, {
        is_featured: !post.is_featured,
      });
      toast.success(post.is_featured ? "Removed from featured" : "Added to featured");
      fetchPosts();
    } catch (err: any) {
      console.error("Error toggling featured:", err);
      toast.error("Failed to update featured status");
    }
  };

  const handleCopyLink = (slug: string) => {
    const url = `${window.location.origin}/blog/${slug}`;
    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard");
  };

  const handleFormSuccess = () => {
    onClose();
    fetchPosts();
    setSelectedPost(null);
    setIsEditing(false);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not published";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "published"
        ? post.is_published
        : !post.is_published;
    
    const matchesCategory =
      categoryFilter === "all" ? true : post.category === categoryFilter;
    
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !term ||
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.author_name.toLowerCase().includes(term);

    return matchesStatus && matchesCategory && matchesSearch;
  });

  const totalFiltered = filteredPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Stats
  const publishedCount = posts.filter((p) => p.is_published).length;
  const draftCount = posts.filter((p) => !p.is_published).length;
  const featuredCount = posts.filter((p) => p.is_featured).length;

  return (
    <AdminLayout>
      <EnhancedSEO
        title="Admin - Blog Management - Tech Emulsion"
        description="Manage blog posts"
        pageType="about"
      />

      <Box>
        <HStack justify="space-between" mb={6} align="flex-start">
          <Box>
            <Heading size="xl">Blog Management</Heading>
            <Text mt={1} fontSize="sm" color={textColor}>
              Create, edit, and manage all blog posts.
            </Text>
          </Box>
          <Button
            leftIcon={<FiPlus />}
            colorScheme="teal"
            onClick={handleCreateNew}
          >
            New Post
          </Button>
        </HStack>

        {/* Stats */}
        <HStack spacing={4} mb={6} flexWrap="wrap">
          <Badge colorScheme="blue" px={3} py={1} borderRadius="full">
            Total: {posts.length}
          </Badge>
          <Badge colorScheme="green" px={3} py={1} borderRadius="full">
            Published: {publishedCount}
          </Badge>
          <Badge colorScheme="gray" px={3} py={1} borderRadius="full">
            Drafts: {draftCount}
          </Badge>
          <Badge colorScheme="purple" px={3} py={1} borderRadius="full">
            Featured: {featuredCount}
          </Badge>
        </HStack>

        {/* Filters */}
        <HStack spacing={4} mb={4} align="center" flexWrap="wrap">
          <Select
            placeholder="All statuses"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value || "all")}
            maxW="180px"
            bg={bgColor}
            size="sm"
          >
            <option value="published">Published</option>
            <option value="draft">Drafts</option>
          </Select>
          <Select
            placeholder="All categories"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value || "all")}
            maxW="200px"
            bg={bgColor}
            size="sm"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </Select>
          <Input
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            maxW="300px"
            bg={bgColor}
            size="sm"
          />
          <HStack spacing={2} ml="auto" fontSize="xs" color={textColor}>
            <Text>Rows per page:</Text>
            <Select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              size="xs"
              w="auto"
              bg={bgColor}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </Select>
          </HStack>
        </HStack>

        {error && (
          <Alert status="error" mb={4} borderRadius="lg">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {loading ? (
          <Box textAlign="center" py={10}>
            <Spinner size="xl" color="teal.500" />
            <Text mt={4}>Loading blog posts...</Text>
          </Box>
        ) : posts.length === 0 ? (
          <Box textAlign="center" py={10}>
            <Text fontSize="lg" color={textColor}>
              No blog posts found. Create your first post!
            </Text>
            <Button
              mt={4}
              leftIcon={<FiPlus />}
              colorScheme="teal"
              onClick={handleCreateNew}
            >
              Create First Post
            </Button>
          </Box>
        ) : filteredPosts.length === 0 ? (
          <Box textAlign="center" py={10}>
            <Text fontSize="lg" color={textColor}>
              No posts match the current filters.
            </Text>
          </Box>
        ) : (
          <Box
            bg={bgColor}
            borderRadius="lg"
            border="1px solid"
            borderColor={borderColor}
            overflow="hidden"
            overflowX="auto"
          >
            <Table variant="striped" colorScheme="blackAlpha" size="sm">
              <Thead>
                <Tr>
                  <Th w="50px" color={tableHeadingColor}></Th>
                  <Th color={tableHeadingColor}>Title</Th>
                  <Th color={tableHeadingColor}>Category</Th>
                  <Th color={tableHeadingColor}>Status</Th>
                  <Th color={tableHeadingColor}>Views</Th>
                  <Th color={tableHeadingColor}>Date</Th>
                  <Th w="100px" color={tableHeadingColor}>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {paginatedPosts.map((post) => (
                  <Tr 
                    key={post.id} 
                    _hover={{ bg: hoverBg }}
                    transition="background 0.2s"
                  >
                    <Td>
                      {post.featured_image ? (
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          boxSize="40px"
                          objectFit="cover"
                          borderRadius="md"
                        />
                      ) : (
                        <Box
                          boxSize="40px"
                          bg="gray.200"
                          borderRadius="md"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Text fontSize="xs" color={smallTextColor}>
                            No img
                          </Text>
                        </Box>
                      )}
                    </Td>
                    <Td>
                      <VStack align="flex-start" spacing={0}>
                        <HStack>
                          <Text fontWeight="medium" noOfLines={1} maxW="300px">
                            {post.title}
                          </Text>
                          {post.is_featured && (
                            <Tooltip label="Featured post">
                              <Box color="yellow.500">
                                <FiStar size={14} fill="currentColor" />
                              </Box>
                            </Tooltip>
                          )}
                        </HStack>
                        <Text fontSize="xs" color={textColor} noOfLines={1} maxW="300px">
                          {post.excerpt}
                        </Text>
                      </VStack>
                    </Td>
                    <Td>
                      <Badge colorScheme="teal" fontSize="xs">
                        {post.category}
                      </Badge>
                    </Td>
                    <Td>
                      <Badge
                        colorScheme={post.is_published ? "green" : "gray"}
                        fontSize="xs"
                      >
                        {post.is_published ? "Published" : "Draft"}
                      </Badge>
                    </Td>
                    <Td>
                      <Text fontSize="sm">{post.view_count || 0}</Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm" color={textColor}>
                        {formatDate(post.is_published ? post.published_at : post.created_at)}
                      </Text>
                    </Td>
                    <Td>
                      <HStack spacing={1}>
                        <Tooltip label="Edit">
                          <IconButton
                            aria-label="Edit post"
                            icon={<FiEdit />}
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(post)}
                          />
                        </Tooltip>
                        <Menu>
                          <MenuButton
                            as={IconButton}
                            aria-label="More options"
                            icon={<FiMoreVertical />}
                            size="sm"
                            variant="ghost"
                          />
                          <MenuList>
                            {post.is_published && (
                              <MenuItem
                                icon={<FiExternalLink />}
                                as={Link}
                                href={`/blog/${post.slug}`}
                                target="_blank"
                              >
                                View Post
                              </MenuItem>
                            )}
                            <MenuItem
                              icon={<FiCopy />}
                              onClick={() => handleCopyLink(post.slug)}
                            >
                              Copy Link
                            </MenuItem>
                            <MenuItem
                              icon={<FiEye />}
                              onClick={() => handleTogglePublish(post)}
                            >
                              {post.is_published ? "Unpublish" : "Publish"}
                            </MenuItem>
                            <MenuItem
                              icon={<FiStar />}
                              onClick={() => handleToggleFeatured(post)}
                            >
                              {post.is_featured ? "Remove Featured" : "Set Featured"}
                            </MenuItem>
                            <MenuItem
                              icon={<FiTrash2 />}
                              color="red.500"
                              onClick={() => handleDelete(post.id)}
                            >
                              Delete
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}

        {/* Pagination */}
        {!loading && filteredPosts.length > 0 && (
          <HStack
            mt={4}
            justify="space-between"
            align="center"
            fontSize="xs"
            color={textColor}
            flexWrap="wrap"
          >
            <Text>
              Showing{" "}
              <strong>
                {startIndex + 1}-{Math.min(endIndex, totalFiltered)}
              </strong>{" "}
              of <strong>{totalFiltered}</strong> posts
            </Text>
            <HStack spacing={2}>
              <Button
                size="xs"
                variant="outline"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                isDisabled={safePage <= 1}
              >
                Previous
              </Button>
              <Text>
                Page <strong>{safePage}</strong> of <strong>{totalPages}</strong>
              </Text>
              <Button
                size="xs"
                variant="outline"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                isDisabled={safePage >= totalPages}
              >
                Next
              </Button>
            </HStack>
          </HStack>
        )}
      </Box>

      {/* Create/Edit Post Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent maxH="90vh">
          <ModalHeader>
            {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <BlogForm
              post={selectedPost}
              onSuccess={handleFormSuccess}
              onCancel={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </AdminLayout>
  );
};

export default AdminBlogPage;
