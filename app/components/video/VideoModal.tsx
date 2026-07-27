"use client";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, Youtube } from "lucide-react";
import type { VideoEntry } from "../../data/videos";
import { YOUTUBE_CHANNEL_SEARCH_URL } from "../../data/videos";
import { createWhatsAppLink, WA_MESSAGES } from "../../lib/whatsapp";

interface Props {
  video: VideoEntry | null;
  onClose: () => void;
}

/** Modal elegante para reproducir un video (YouTube, local o estado "próximamente"). */
export default function VideoModal({ video, onClose }: Props) {
  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          <motion.div
            className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-green-500 text-white flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>

            <div className="aspect-video w-full bg-black flex items-center justify-center">
              {video.youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : video.localSrc ? (
                <video className="w-full h-full object-cover" controls autoPlay poster={video.thumbnail}>
                  <source src={video.localSrc} type="video/mp4" />
                </video>
              ) : (
                <div className="text-center px-8 py-16">
                  <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-3">Próximamente</p>
                  <p className="text-white text-lg font-bold mb-2">{video.title}</p>
                  <p className="text-white/50 text-sm max-w-md mx-auto">
                    Este video se conectará automáticamente desde el canal de YouTube de Bioliffe Moringa
                    Paraguay. Mientras tanto, escríbenos por WhatsApp o visita el canal.
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-green-400 text-[10px] font-bold tracking-widest uppercase">{video.category}</span>
                <h3 className="text-white font-black text-lg mt-1">{video.title}</h3>
                <p className="text-white/50 text-sm mt-1 max-w-xl">{video.description}</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href={createWhatsAppLink(WA_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
                <a
                  href={YOUTUBE_CHANNEL_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-bold text-xs px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Youtube size={14} /> Canal
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
