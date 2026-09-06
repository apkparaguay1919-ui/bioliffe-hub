import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blog";

const SITE_URL = "https://www.bioliffemoringaperu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/nosotros`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/moringa`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/lideres`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/academia`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/descargas`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
