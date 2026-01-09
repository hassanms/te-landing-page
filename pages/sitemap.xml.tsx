import { GetServerSideProps } from "next";

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://techemulsion.com";
  const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

  // Define pages with their metadata
  const pages = [
    { path: "", changefreq: "weekly", priority: "1.0" },
    { path: "/services", changefreq: "monthly", priority: "0.9" },
    { path: "/portfolio", changefreq: "weekly", priority: "0.9" },
    { path: "/contact", changefreq: "monthly", priority: "0.8" },
    { path: "/our-story", changefreq: "monthly", priority: "0.7" },
    { path: "/blog", changefreq: "weekly", priority: "0.8" },
    { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
    { path: "/terms-of-service", changefreq: "yearly", priority: "0.3" },
    // Portfolio pages
    { path: "/portfolio/alifa", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/artis", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/atarim", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/bipcards", changefreq: "monthly", priority: "0.7" },
    { path: "/portfolio/contentcompass", changefreq: "monthly", priority: "0.7" },
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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page.path}</loc>
      <lastmod>${currentDate}</lastmod>
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
