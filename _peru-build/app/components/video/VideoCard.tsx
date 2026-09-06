"use client";
import { Play, Clock } from "lucide-react";
import type { VideoEntry } from "../../data/videos";

interface Props {
  video: VideoEntry;
  onPlay: (video: VideoEntry) => void;
  size?: "md" | "lg";
}

/** Tarjeta de video estilo Netflix: miniatura grande, hover con escala + glow + play. */
export default function VideoCard({ video, onPlay, size = "md" }: Props) {
  const width = size === "lg" ? "w-[340px]" : "w-[260px]";

  return (
    <button
      onClick={() => onPlay(video)}
      className={`group relative ${width} shrink-0 text-left rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_20px_60px_-15px_rgba(34,197,94,0.35)]`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        <span className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur text-green-400 px-2.5 py-1 rounded-full border border-white/10">
          {video.category}
        </span>

        {video.comingSoon && (
          <span className="absolute top-3 right-3 text-[9px] font-bold tracking-widest uppercase bg-[#c9a84c]/90 text-black px-2.5 py-1 rounded-full">
            Próximamente
          </span>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play size={22} fill="currentColor" />
          </span>
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 backdrop-blur text-white text-[10px] font-semibold px-2 py-1 rounded-md">
          <Clock size={10} /> {video.duration}
        </div>
      </div>

      <div className="p-4">
        <h4 className="text-white font-bold text-sm leading-snug line-clamp-1 group-hover:text-green-400 transition-colors">
          {video.title}
        </h4>
        <p className="text-white/40 text-xs mt-1 line-clamp-2 leading-relaxed">{video.description}</p>
      </div>
    </button>
  );
}
