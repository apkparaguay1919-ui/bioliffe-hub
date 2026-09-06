import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import BlogGrid from "../components/sections/BlogGrid";
import { blogPosts } from "../data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre moringa, nutrición general, negocio, liderazgo, bienestar y la comunidad Bioliffe Moringa Paraguay.",
  openGraph: {
    title: "Blog",
    description: "Artículos sobre moringa, nutrición, negocio, liderazgo y bienestar.",
    url: "https://www.biolifemoringaparaguay.com/blog",
  },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="text-gray-900 min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="Blog Bioliffe"
        title="Ideas, formación y bienestar"
        description="Artículos sobre moringa, nutrición general, negocio, liderazgo y la comunidad Bioliffe Moringa Paraguay."
        image="/images/pexels-tranmautritam-922978.webp"
      />
      <BlogGrid posts={sorted} />
    </main>
  );
}
