"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import InfiniteMarquee from "../effects/InfiniteMarquee";

const PHOTOS = [
  { src: "/images/pexels-allphoto-bangkok-1628521-13612693.webp", label: "Comunidad" },
  { src: "/images/pexels-anibal-pabon-253091036-13834221.webp", label: "Capacitación" },
  { src: "/images/pexels-ankit-rainloure-1425442-12695823.webp", label: "Cultivo" },
  { src: "/images/pexels-beckesbestphotos-2782969.webp", label: "Testimonios" },
  { src: "/images/pexels-bernahanim_-1173268160-32664637.webp", label: "Liderazgo" },
  { src: "/images/pexels-brett-sayles-1002797.webp", label: "Producto" },
  { src: "/images/pexels-chaitaastic-1796727.webp", label: "Catálogo" },
  { src: "/images/pexels-ian-panelo-4884823.webp", label: "Reconocimientos" },
  { src: "/images/pexels-jahratreza-37911594.webp", label: "Eventos" },
  { src: "/images/pexels-jahratreza-37937214.webp", label: "Moringa" },
  { src: "/images/pexels-mehul-patel-829985-18697894.webp", label: "Distribuidores" },
  { src: "/images/pexels-rabbiislam123-5750575.webp", label: "Bienestar" },
  { src: "/images/pexels-tranmautritam-922978.webp", label: "Comunidad" },
  { src: "/images/pexels-wanderinglenses-32198643.webp", label: "Viajes" },
];

/** Galería infinita estilo cinta de fotos (productos, eventos, líderes, viajes, cultivos). */
export default function PhotoRibbon() {
  const [open, setOpen] = useState<{ src: string; label: string } | null>(null);

  return (
    <div className="w-full py-4">
      <InfiniteMarquee speed={60}>
        {PHOTOS.map((photo, i) => (
          <button
            key={i}
            onClick={() => setOpen(photo)}
            className="group relative w-[220px] h-[280px] shrink-0 rounded-2xl overflow-hidden border border-white/10 hover:border-green-400/40 transition-colors"
          >
            <img
              src={photo.src}
                      loading="lazy"
                      decoding="async"
              alt={photo.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-xs font-bold uppercase tracking-widest">
              {photo.label}
            </span>
          </button>
        ))}
      </InfiniteMarquee>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.img
              src={open.src}
              alt={open.label}
              className="max-w-4xl max-h-[80vh] rounded-2xl object-contain shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 text-white flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
