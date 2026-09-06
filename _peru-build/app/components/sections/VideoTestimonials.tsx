"use client";
import { useMemo, useState } from "react";
import { Youtube, Play } from "lucide-react";
import RevealOnScroll from "../effects/RevealOnScroll";
import GsapHeading from "../effects/GsapHeading";
import VideoModal from "../video/VideoModal";
import type { YouTubeVideo } from "../../lib/youtube";
import type { VideoEntry } from "../../data/videos";
import { isHiddenVideo } from "../../lib/videoCuration";

interface Props {
  videos: YouTubeVideo[];
}

const TESTIMONIAL_PATTERN = /testimonio/i;

/**
 * Filtra automáticamente, por título, los videos del canal que son
 * testimonios reales de distribuidores (p.ej. "TESTIMONIO KATY VILCA...")
 * y los muestra en una franja tipo Netflix junto a la sección de Testimonios.
 * No requiere marcar nada a mano en el catálogo local: si el título del
 * video en YouTube contiene "testimonio", aparece acá automáticamente.
 */
export default function VideoTestimonials({ videos }: Props) {
  const [playing, setPlaying] = useState<VideoEntry | null>(null);

  const testimonialVideos = useMemo(
    () => videos.filter((v) => TESTIMONIAL_PATTERN.test(v.title) && !isHiddenVideo(v.title)),
    [videos]
  );

  if (testimonialVideos.length === 0) return null;

  const openVideo = (v: YouTubeVideo) => {
    setPlaying({
      id: v.id,
      title: v.title,
      description: v.description || "Testimonio real de un distribuidor Bioliffe Moringa Perú.",
      category: "Testimonios",
      tags: [],
      youtubeId: v.id,
      thumbnail: v.thumbnail,
      duration: v.isShort ? "Short" : "Video",
      date: v.publishedAt ? new Date(v.publishedAt).toLocaleDateString("es-PY") : "",
    });
  };

  return (
    <section className="relative py-24 px-6 bg-[#050505] border-t border-white/5" id="video-testimonios">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <Youtube size={14} /> Testimonios en video
            </p>
            <GsapHeading className="text-4xl md:text-5xl font-black text-white mb-4">
              Historias reales de nuestra comunidad
            </GsapHeading>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              {testimonialVideos.length} testimonios en video, sincronizados automáticamente desde el canal de
              YouTube de Bioliffe Moringa Perú.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="flex gap-5 overflow-x-auto pb-4 no-scrollbar">
            {testimonialVideos.map((v) => (
              <button
                key={v.id}
                onClick={() => openVideo(v)}
                className="group relative w-[260px] shrink-0 text-left rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_20px_60px_-15px_rgba(34,197,94,0.35)]"
              >
                <div className="relative aspect-video overflow-hidden">
                  {v.thumbnail ? (
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/20">
                      <Youtube size={28} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <span className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur text-green-400 px-2.5 py-1 rounded-full border border-white/10">
                    Testimonio
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play size={22} fill="currentColor" />
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-white font-bold text-sm leading-snug line-clamp-2 group-hover:text-green-400 transition-colors">
                    {v.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </section>
  );
}
