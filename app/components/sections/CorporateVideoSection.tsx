"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import RevealOnScroll from "../effects/RevealOnScroll";
import MovieRibbon from "../ribbons/MovieRibbon";
import VideoModal from "../video/VideoModal";
import { videos, type VideoEntry } from "../../data/videos";
import { createWhatsAppLink, WA_MESSAGES } from "../../lib/whatsapp";

/**
 * Sección "Descubre Bioliffe Paraguay": video principal + descripción +
 * beneficios + llamada a la acción, seguida de la galería Movie Ribbon con
 * el resto del catálogo (testimonios, eventos, viajes, bonos, liderazgo,
 * moringa, negocio, capacitaciones, academia, distribución).
 */
export default function CorporateVideoSection() {
  const main = videos[0];
  const [playing, setPlaying] = useState<VideoEntry | null>(null);

  const benefits = [
    "Productos premium elaborados con moringa y estándares de calidad cuidados en cada etapa.",
    "Sistema de mentoría 24/7 para acompañarte desde el primer día.",
    "Oportunidad de negocio real, con duplicación y comunidad activa.",
    "Distribución con presencia en Paraguay, Perú y Latinoamérica.",
  ];

  return (
    <section className="relative py-32 px-6 bg-[#050505]" id="video">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Contenido oficial</p>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Descubre Bioliffe Paraguay</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Todo el contenido de nuestro canal, organizado en un solo lugar: productos, testimonios,
              eventos, viajes y formación.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="grid lg:grid-cols-5 gap-10 items-center mb-24">
            <button
              onClick={() => setPlaying(main)}
              className="group relative lg:col-span-3 aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img src={main.thumbnail} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-20 h-20 rounded-full bg-green-500 group-hover:bg-green-400 text-white flex items-center justify-center shadow-2xl transition-all group-hover:scale-110">
                  <Play size={30} fill="currentColor" />
                </span>
              </span>
            </button>

            <div className="lg:col-span-2">
              <h3 className="text-white font-black text-2xl mb-4">{main.title}</h3>
              <p className="text-white/50 mb-8 leading-relaxed">{main.description}</p>
              <ul className="space-y-4 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-xs mt-0.5 shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={createWhatsAppLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-green-500 hover:bg-green-400 text-white font-black px-8 py-4 rounded-xl text-sm tracking-widest uppercase transition-all"
              >
                Quiero información ahora
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <MovieRibbon />
        </RevealOnScroll>
      </div>

      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </section>
  );
}
