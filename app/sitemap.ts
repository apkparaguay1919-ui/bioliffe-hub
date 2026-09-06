import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blog";
import { products } from "./data/products";
import { SITE } from "./lib/site";

/**
 * Sitemap dinámico.
 *
 * Las rutas de productos y de artículos del blog se generan solas desde
 * app/data/*. Cuando agregues un producto o un post, aparece acá automáticamente
 * — no hay que acordarse de actualizar el sitemap a mano.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = SITE.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/productos`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/emprender`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/videos`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/nosotros`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/moringa`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/testimonios`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/lideres`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/academia`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contacto`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/descargas`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacidad`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terminos`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${SITE_URL}/productos/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
