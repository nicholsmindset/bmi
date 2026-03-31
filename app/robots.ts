import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] }],
    sitemap: "https://bmicalculator.sg/sitemap.xml",
    host: "https://bmicalculator.sg",
  };
}
