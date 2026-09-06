"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "../video/VideoModal";
import { getVideosByCategory, type VideoEntry } from "../../data/videos";
import { testimonials } from "../../data/testimonials";

/**
 * Galería de testimonios.
 *
 * Arriba van los testimonios EN VIDEO, que son los reales del canal de
 * YouTube (Katy Vilca, Yessenia Benito, Víctor García, Anastacio de la Cruz,
 * Dora Riva, Flor). Son los que más convierten porque se ve y se escucha a
 * la persona.
 *
 * ⚠️ Abajo se muestran los testimonios de texto que ya estaban en
 * app/data/testimonials.ts ("María G.", "Carlos R.", …). Ojo: parecen de
 * relleno, con nombres e iniciales genéricas. Conviene reemplazarlos por
 * frases reales de clientes con su nombre y ciudad — un testimonio inventado
 * es un riesgo legal y de credibilidad. Se editan en ese mismo archivo.
 */
export default function TestimonialGallery() {
  const videosTestimonio = getVideosByCategory("Testimonios");
  const [playing, setPlaying] = useState<VideoEntry | null>(null);

  return (
    <>
      {/* TESTIMONIOS EN VIDEO */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-green-400">
              En video
            </p>
            <h2 className="text-4xl font-black text-white">Escuchalos en primera persona</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videosTestimonio.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setPlaying(v)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition-all duration-400 hover:-translate-y-1 hover:border-green-400/40"
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.thumbnail}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                      <Play size={22} fill="currentColor" />
                    </span>
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold leading-snug text-white transition-colors group-hover:text-green-400">
                    {v.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/40">
                    {v.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS DE TEXTO */}
      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-green-400">
              Lo que nos escriben
            </p>
            <h2 className="text-4xl font-black text-white">Mensajes de la comunidad</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-white/20"
              >
                <blockquote className="text-sm italic leading-relaxed text-white/70">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white ${t.color}`}
                    aria-hidden="true"
                  >
                    {t.initial}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white">{t.name}</span>
                    <span className="block text-xs text-white/40">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </>
  );
}
