"use client";
import { useMemo, useState } from "react";
import { Search, Youtube, Clock, Film } from "lucide-react";
import RevealOnScroll from "../effects/RevealOnScroll";
import GsapHeading from "../effects/GsapHeading";
import VideoModal from "../video/VideoModal";
import type { YouTubeVideo } from "../../lib/youtube";
import type { VideoEntry } from "../../data/videos";
import { YOUTUBE_CHANNEL_SEARCH_URL } from "../../data/videos";
import { isHiddenVideo, isTestimonialVideo } from "../../lib/videoCuration";

interface Props {
  videos: YouTubeVideo[];
}

type Filter = "todos" | "videos" | "shorts";
type Sort = "recientes" | "antiguos";

/**
 * Todos los videos del canal de YouTube de Bioliffe, sincronizados
 * automáticamente vía la API (app/lib/youtube.ts) — sin incrustar nada
 * manualmente. Incluye buscador, filtro Shorts/Videos y orden por fecha.
 */
export default function YouTubeChannelGrid({ videos }: Props) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("todos");
  const [sort, setSort] = useState<Sort>("recientes");
  const [playing, setPlaying] = useState<VideoEntry | null>(null);

  const filtered = useMemo(() => {
    // Oculta videos que no son de Bioliffe (viajes personales, pruebas, etc.)
    // — ver app/lib/videoCuration.ts para agregar más palabras clave.
    let list = videos.filter((v) => !isHiddenVideo(v.title));
    list = list.filter((v) =>
      query.trim() === "" ? true : v.title.toLowerCase().includes(query.toLowerCase())
    );
    if (filter === "videos") list = list.filter((v) => !v.isShort);
    if (filter === "shorts") list = list.filter((v) => v.isShort);
    list = [...list].sort((a, b) => {
      // Los testimonios siempre se destacan primero, sin importar el orden elegido.
      const aFeatured = isTestimonialVideo(a.title) ? 0 : 1;
      const bFeatured = isTestimonialVideo(b.title) ? 0 : 1;
      if (aFeatured !== bFeatured) return aFeatured - bFeatured;
      const da = new Date(a.publishedAt).getTime();
      const db = new Date(b.publishedAt).getTime();
      return sort === "recientes" ? db - da : da - db;
    });
    return list;
  }, [videos, query, filter, sort]);

  const openVideo = (v: YouTubeVideo) => {
    setPlaying({
      id: v.id,
      title: v.title,
      description: v.description || "Contenido oficial del canal de Bioliffe Moringa Paraguay.",
      category: "Canal",
      tags: [],
      youtubeId: v.id,
      thumbnail: v.thumbnail,
      duration: v.isShort ? "Short" : "Video",
      date: v.publishedAt ? new Date(v.publishedAt).toLocaleDateString("es-PY") : "",
    });
  };

  return (
    <section className="relative py-32 px-6 bg-[#050505]" id="canal-youtube">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <Youtube size={14} /> Sincronizado con YouTube
            </p>
            <GsapHeading className="text-5xl font-black text-white mb-4">Todo nuestro canal, en un solo lugar</GsapHeading>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              {videos.length} videos traídos automáticamente desde el canal de Bioliffe Moringa Paraguay.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar video por título..."
                className="w-full bg-white/5 border border-white/10 focus:border-green-400/50 outline-none text-white text-sm rounded-xl pl-11 pr-4 py-3.5 placeholder:text-white/30 transition-colors"
              />
            </div>
            <div className="flex gap-2">
              {(["todos", "videos", "shorts"] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border transition-colors ${
                    filter === f
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
                  }`}
                >
                  {f}
                </button>
              ))}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest rounded-xl px-3 outline-none"
              >
                <option value="recientes">Recientes</option>
                <option value="antiguos">Antiguos</option>
              </select>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((v) => (
            <button
              key={v.id}
              onClick={() => openVideo(v)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-green-400/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`relative overflow-hidden ${v.isShort ? "aspect-[9/16]" : "aspect-video"}`}>
                {v.thumbnail ? (
                  <img src={v.thumbnail} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/20">
                    <Youtube size={28} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <span className="absolute top-2 left-2 flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur text-green-400 px-2 py-1 rounded-full">
                  {v.isShort ? <Film size={10} /> : <Clock size={10} />}
                  {v.isShort ? "Short" : "Video"}
                </span>
                {isTestimonialVideo(v.title) && (
                  <span className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-widest bg-green-500 text-white px-2 py-1 rounded-full">
                    Testimonio
                  </span>
                )}
              </div>
              <p className="p-3 text-white text-xs font-semibold text-left line-clamp-2">{v.title}</p>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-white/40 text-sm text-center py-16">No encontramos videos que coincidan con tu búsqueda.</p>
        )}

        <div className="text-center mt-12">
          <a
            href={YOUTUBE_CHANNEL_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 text-white hover:bg-white/10 font-bold text-xs px-6 py-3 rounded-xl transition-colors uppercase tracking-widest"
          >
            <Youtube size={14} /> Ver canal completo en YouTube
          </a>
        </div>
      </div>

      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </section>
  );
}
