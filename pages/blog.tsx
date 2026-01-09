import type { NextPage } from "next";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
const allPosts = [
  {
    title: "Welcome to the blog",
    date: "2022-01-01",
    url: "/blog/welcome-to-the-blog",
  },
  {
    title: "Introducing Contentlayer",
    date: "2022-01-02",
    url: "/blog/introducing-contentlayer",
  },
  {
    title: "How to use Contentlayer",
    date: "2022-01-03",
    url: "/blog/how-to-use-contentlayer",
  },
];
const Blog: NextPage = ({ posts }: any) => {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <EnhancedSEO
        title="Blog - Tech Emulsion"
        description="Read the latest articles, insights, and updates from Tech Emulsion about digital transformation, AI solutions, custom software development, and technology trends."
        pageType="blog"
        canonicalUrl="https://techemulsion.com/blog"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Blog", url: "https://techemulsion.com/blog" },
          ],
        }}
      />
      <Head>
        <title>Blog - Tech Emulsion</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Tech Emulsion Blog</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
};

function PostCard(post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Link href={post.url}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
