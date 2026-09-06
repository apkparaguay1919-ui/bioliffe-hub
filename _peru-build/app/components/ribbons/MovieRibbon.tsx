"use client";
import { useMemo, useState } from "react";
import InfiniteMarquee from "../effects/InfiniteMarquee";
import VideoCard from "../video/VideoCard";
import VideoModal from "../video/VideoModal";
import { videos, videoCategories, type VideoCategory, type VideoEntry } from "../../data/videos";

/**
 * Movie Ribbon estilo Netflix / Apple TV: cinta infinita de videos con
 * categorías (Testimonios, Productos, Eventos, Viajes, Bonos, Liderazgo,
 * Moringa, Negocio, Capacitaciones, Academia, Distribución). El catálogo se
 * llena automáticamente desde app/data/videos.ts, que a su vez está listo
 * para poblarse desde la API de YouTube (app/lib/youtube.ts) apenas se
 * configure el canal — no se agregan videos manualmente uno por uno.
 */
export default function MovieRibbon() {
  const [active, setActive] = useState<VideoCategory | "Todos">("Todos");
  const [playing, setPlaying] = useState<VideoEntry | null>(null);

  const filtered = useMemo(
    () => (active === "Todos" ? videos : videos.filter((v) => v.category === active)),
    [active]
  );

  return (
    <div className="w-full">
      <div className="flex gap-2 overflow-x-auto pb-6 px-1 no-scrollbar">
        <button
          onClick={() => setActive("Todos")}
          className={`shrink-0 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
            active === "Todos"
              ? "bg-green-500 border-green-500 text-white"
              : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
          }`}
        >
          Todos
        </button>
        {videoCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`shrink-0 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
              active === cat
                ? "bg-green-500 border-green-500 text-white"
                : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <InfiniteMarquee speed={55} key={active}>
        {filtered.map((video) => (
          <VideoCard key={video.id} video={video} onPlay={setPlaying} size="lg" />
        ))}
      </InfiniteMarquee>

      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </div>
  );
}
