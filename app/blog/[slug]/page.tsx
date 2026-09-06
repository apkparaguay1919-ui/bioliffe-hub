import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RevealOnScroll from "../../components/effects/RevealOnScroll";
import ShareButtons from "../../components/ShareButtons";
import { blogPosts, getPostBySlug, getRelatedPosts } from "../../data/blog";
import { createWhatsAppLink, WA_MESSAGES } from "../../lib/whatsapp";

const SITE_URL = "https://www.biolifemoringaparaguay.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: post.cover }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const url = `${SITE_URL}/blog/${post.slug}`;

  return (
    <main className="text-gray-900 min-h-screen bg-[#050505]">
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.cover} alt="" fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <span className="inline-block bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-white/50 text-xs font-semibold uppercase tracking-widest">
              <span>{post.readTime} de lectura</span>
              <span>·</span>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("es-PY", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <div className="mb-10">
              <ShareButtons title={post.title} url={url} />
            </div>
          </RevealOnScroll>

          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <RevealOnScroll key={i} delay={i * 0.04}>
                <p className="text-white/70 text-lg leading-relaxed">{paragraph}</p>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold uppercase tracking-widest text-white/40 border border-white/10 rounded-full px-3 py-1.5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-white/50 text-sm leading-relaxed">
                Producto de bienestar. No sustituye diagnóstico ni tratamiento médico. Resultados pueden variar.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <h3 className="text-2xl font-black text-white mb-10 text-center">Seguí leyendo</h3>
            </RevealOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <RevealOnScroll key={r.slug} delay={i * 0.06}>
                  <a
                    href={`/blog/${r.slug}`}
                    className="group h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-green-400/30 transition-colors"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={r.cover}
                      loading="lazy"
                      decoding="async"
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-green-400 text-[10px] font-bold uppercase tracking-widest">{r.category}</span>
                      <h4 className="text-white font-bold mt-2 leading-snug group-hover:text-green-400 transition-colors">
                        {r.title}
                      </h4>
                    </div>
                  </a>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-24 px-6 text-center">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto bg-green-700/20 border border-green-500/20 rounded-3xl py-14 px-8">
            <h3 className="text-3xl font-black text-white mb-4">¿Tenés alguna duda sobre esto?</h3>
            <p className="text-white/60 mb-8">Escribinos por WhatsApp y te ayudamos directamente.</p>
            <a
              href={createWhatsAppLink(WA_MESSAGES.blog)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-green-500 hover:bg-green-400 text-white font-black px-10 py-4 rounded-xl text-sm tracking-widest uppercase transition-all"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
