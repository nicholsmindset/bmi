import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] }],
    sitemap: [
      "https://www.bmicalculatorsingapore.com/sitemap.xml",
      "https://www.bmicalculatorsingapore.com/sitemap-core.xml",
      "https://www.bmicalculatorsingapore.com/sitemap-bmi-age.xml",
      "https://www.bmicalculatorsingapore.com/sitemap-ages.xml",
      "https://www.bmicalculatorsingapore.com/sitemap-ideal-weight.xml",
      "https://www.bmicalculatorsingapore.com/sitemap-protein.xml",
      "https://www.bmicalculatorsingapore.com/sitemap-calories-burned.xml",
      "https://www.bmicalculatorsingapore.com/sitemap-programmatic.xml",
    ],
    host: "https://www.bmicalculatorsingapore.com",
  };
}
