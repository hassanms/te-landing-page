import { GetServerSideProps } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://techemulsion.com";
  const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

  // Define static pages with their metadata
  const staticPages = [
    { path: "", changefreq: "weekly", priority: "1.0" },
    { path: "/services", changefreq: "monthly", priority: "0.9" },
    { path: "/portfolio", changefreq: "weekly", priority: "0.9" },
    { path: "/contact", changefreq: "monthly", priority: "0.8" },
    { path: "/our-story", changefreq: "monthly", priority: "0.7" },
    { path: "/blog", changefreq: "weekly", priority: "0.8" },
    { path: "/careers", changefreq: "weekly", priority: "0.7" },
    { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
    { path: "/terms-of-service", changefreq: "yearly", priority: "0.3" },
    // Portfolio pages
    { path: "/portfolio/alifa", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/artis", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/atarim", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/bipcards", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/contentcompass", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/dadssalesreborn", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/farmin", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/genai", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/jarvisreach", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/levellup", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/moodtube", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/podcastbeacon", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/popcard", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/rackroom", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/superheart", changefreq: "monthly", priority: "0.7" },
  ];

  // Fetch blog posts dynamically
  let blogPosts: Array<{ path: string; lastmod: string; changefreq: string; priority: string }> = [];
  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { data: posts } = await supabaseAdmin
      .from("blog_posts")
      .select("slug, published_at, updated_at")
      .eq("is_published", true)
      .order("published_at", { ascending: false });

    if (posts && posts.length > 0) {
      blogPosts = posts.map((post) => {
        const lastmod = post.updated_at 
          ? new Date(post.updated_at).toISOString().split("T")[0]
          : post.published_at 
          ? new Date(post.published_at).toISOString().split("T")[0]
          : currentDate;
        return {
          path: `/blog/${post.slug}`,
          lastmod,
          changefreq: "monthly",
          priority: "0.7",
        };
      });
    }
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    // Continue without blog posts if there's an error
  }

  // Fetch career pages dynamically
  let careerPages: Array<{ path: string; lastmod: string; changefreq: string; priority: string }> =
    [];
  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { data: jobs } = await supabaseAdmin
      .from("jobs")
      .select("id, slug, updated_at, created_at")
      .eq("is_published", true);

    if (jobs && jobs.length > 0) {
      careerPages = jobs.flatMap((job: any) => {
        const jobIdentifier = job.slug || job.id;
        const lastmod = job.updated_at
          ? new Date(job.updated_at).toISOString().split("T")[0]
          : job.created_at
          ? new Date(job.created_at).toISOString().split("T")[0]
          : currentDate;

        return [
          {
            path: `/careers/${jobIdentifier}`,
            lastmod,
            changefreq: "weekly",
            priority: "0.6",
          },
          {
            path: `/careers/${jobIdentifier}/apply`,
            lastmod,
            changefreq: "weekly",
            priority: "0.5",
          },
        ];
      });
    }
  } catch (error) {
    console.error("Error fetching careers for sitemap:", error);
    // Continue without career pages if there's an error
  }

  // Combine static pages and blog posts
  const allPages = [
    ...staticPages.map((page) => ({
      ...page,
      lastmod: currentDate,
    })),
    ...blogPosts,
    ...careerPages,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page.path}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `,
    )
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate",
  );
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
