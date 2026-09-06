"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import RevealOnScroll from "../effects/RevealOnScroll";
import { blogCategories, type BlogPost } from "../../data/blog";

interface Props {
  posts: BlogPost[];
}

/** Listado de blog con filtro por categoría y búsqueda por texto. */
export default function BlogGrid({ posts }: Props) {
  const [category, setCategory] = useState<string>("Todas");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory = category === "Todas" || p.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [posts, category, query]);

  return (
    <section className="relative py-16 px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="relative max-w-md mx-auto mb-8">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar artículos..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-green-400/40"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-10 no-scrollbar justify-center">
            {["Todas", ...blogCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
                  category === cat
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {filtered.length === 0 ? (
          <p className="text-center text-white/40 py-16">No encontramos artículos con ese criterio.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i * 0.05}>
                <a
                  href={`/blog/${post.slug}`}
                  className="group h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-green-400/30 transition-colors"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={post.cover}
                      loading="lazy"
                      decoding="async"
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="text-white font-bold text-lg mb-2 leading-snug group-hover:text-green-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-[11px] text-white/30 font-semibold uppercase tracking-widest">
                      <span>{post.readTime} de lectura</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("es-PY", { day: "numeric", month: "short" })}
                      </span>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
