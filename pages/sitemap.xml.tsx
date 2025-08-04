import { GetServerSideProps } from "next";

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://techemulsion.com";

  const pages = [
    "",
    "/services",
    "/portfolio",
    "/contact",
    "/our-story",
    "/blog",
    "/privacy-policy",
    "/terms-of-service",
    "/portfolio/alifa",
    "/portfolio/artis",
    "/portfolio/atarim",
    "/portfolio/bipcards",
    "/portfolio/contentcompass",
    "/portfolio/farmin",
    "/portfolio/genai",
    "/portfolio/jarvisreach",
    "/portfolio/levellup",
    "/portfolio/moodtube",
    "/portfolio/podcastbeacon",
    "/portfolio/popcard",
    "/portfolio/rackroom",
    "/portfolio/superheart",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page === "" ? "weekly" : "monthly"}</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
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
