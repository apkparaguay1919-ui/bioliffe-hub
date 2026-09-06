"use client";

import { useMemo, useState } from "react";
import { Play, Search } from "lucide-react";
import VideoModal from "../video/VideoModal";
import {
  videos,
  videoCategories,
  type VideoCategory,
  type VideoEntry,
} from "../../data/videos";

/**
 * Biblioteca completa de videos con filtro por categoría y buscador.
 *
 * Los videos salen de app/data/videos.ts. Cuando agregás uno ahí, aparece
 * solo acá: no hay que tocar este componente.
 */
export default function VideoLibrary() {
  const [active, setActive] = useState<VideoCategory | "Todos">("Todos");
  const [query, setQuery] = useState("");
  const [playing, setPlaying] = useState<VideoEntry | null>(null);

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    return videos.filter((v) => {
      const okCat = active === "Todos" || v.category === active;
      if (!okCat) return false;
      if (!q) return true;
      return (
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [active, query]);

  /** Cuántos videos hay por categoría, para mostrarlo en los botones. */
  const conteos = useMemo(() => {
    const map = new Map<string, number>();
    videos.forEach((v) => map.set(v.category, (map.get(v.category) ?? 0) + 1));
    return map;
  }, []);

  return (
    <section className="bg-[#0a0a0a] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Buscador */}
        <div className="relative mx-auto mb-10 max-w-xl">
          <Search
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar un video: moringa, testimonio, bono, negocio…"
            aria-label="Buscar videos"
            className="w-full rounded-xl border border-white/15 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-green-400 focus:bg-white/10"
          />
        </div>

        {/* Filtros por categoría */}
        <div
          className="no-scrollbar mb-4 flex gap-2 overflow-x-auto pb-3"
          role="tablist"
          aria-label="Filtrar videos por categoría"
        >
          <button
            type="button"
            role="tab"
            aria-selected={active === "Todos"}
            onClick={() => setActive("Todos")}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
              active === "Todos"
                ? "border-green-500 bg-green-500 text-white"
                : "border-white/15 text-white/50 hover:border-white/30 hover:text-white"
            }`}
          >
            Todos ({videos.length})
          </button>
          {videoCategories.map((cat) => {
            const n = conteos.get(cat) ?? 0;
            if (n === 0) return null;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                  active === cat
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-white/15 text-white/50 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat} ({n})
              </button>
            );
          })}
        </div>

        <p className="mb-10 text-xs text-white/35" role="status" aria-live="polite">
          {filtrados.length} {filtrados.length === 1 ? "video" : "videos"}
        </p>

        {/* Grilla */}
        {filtrados.length === 0 ? (
          <p className="py-20 text-center text-white/40">
            No encontramos videos con esa búsqueda. Probá con otra palabra.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtrados.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setPlaying(video)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition-all duration-400 hover:-translate-y-1 hover:border-green-400/40 hover:shadow-[0_20px_50px_-15px_rgba(34,197,94,0.35)]"
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={video.thumbnail}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-green-400 backdrop-blur">
                    {video.category}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                      <Play size={22} fill="currentColor" />
                    </span>
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 text-sm font-bold leading-snug text-white transition-colors group-hover:text-green-400">
                    {video.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/40">
                    {video.description}
                  </p>
                  <span className="mt-3 inline-block text-[10px] font-bold uppercase tracking-widest text-green-500">
                    Ver video →
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        <VideoModal video={playing} onClose={() => setPlaying(null)} />
      </div>
    </section>
  );
}
