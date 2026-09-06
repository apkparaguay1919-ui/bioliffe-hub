"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { cursos, type Curso } from "../../data/academia";
import RevealOnScroll from "../effects/RevealOnScroll";
import { createWhatsAppLink } from "../../lib/whatsapp";

/**
 * Grilla de cursos de la Academia.
 *
 * Los cursos salen de app/data/academia.ts. Los que tienen `disponible: true`
 * se ven en el momento; los otros muestran "Próximamente" y el botón lleva a
 * WhatsApp para anotarse — sin prometer un contenido que todavía no está.
 */
export default function CursosGrid() {
  const [abierto, setAbierto] = useState<Curso | null>(null);

  return (
    <section className="border-y border-white/5 bg-white/[0.02] px-6 py-24" id="cursos">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-400">
            Plan de estudios
          </p>
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">Cursos disponibles</h2>
          <p className="mx-auto max-w-2xl text-white/50">
            Empezá por el nivel inicial y avanzá a tu ritmo. Cada curso es una
            clase concreta, no una teoría larga.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cursos.map((c, i) => (
            <RevealOnScroll key={c.id} delay={i * 0.06}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-green-400/30">
                {/* Portada */}
                <div className="relative aspect-video overflow-hidden bg-black/40">
                  {c.imagen ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={c.imagen}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-5xl" aria-hidden="true">
                      {c.icono}
                    </div>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-green-400 backdrop-blur">
                    {c.nivel}
                  </span>
                  {!c.disponible && (
                    <span className="absolute right-3 top-3 rounded-full bg-[#c9a84c]/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-black">
                      Próximamente
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-xl" aria-hidden="true">
                      {c.icono}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                      {c.duracion}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-black text-white">{c.titulo}</h3>
                  <p className="mb-7 flex-1 text-sm leading-relaxed text-white/50">
                    {c.descripcion}
                  </p>

                  {c.disponible && c.videoId ? (
                    <button
                      type="button"
                      onClick={() => setAbierto(c)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 text-sm font-bold text-white transition-colors hover:bg-green-400"
                    >
                      <Play size={15} fill="currentColor" /> Acceder al curso
                    </button>
                  ) : (
                    <a
                      href={createWhatsAppLink(
                        `Hola Javier, quiero anotarme al curso *${c.titulo}* de la Academia Bioliffe.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full rounded-xl border border-white/15 py-3 text-center text-sm font-bold text-white/70 transition-colors hover:border-green-400/40 hover:text-white"
                    >
                      Avisame cuando esté
                    </a>
                  )}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Reproductor */}
      <AnimatePresence>
        {abierto?.videoId && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setAbierto(null);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={abierto.titulo}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]"
            >
              <button
                type="button"
                onClick={() => setAbierto(null)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-green-500"
              >
                <X size={18} />
              </button>
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="h-full w-full border-0"
                  src={`https://www.youtube-nocookie.com/embed/${abierto.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={abierto.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">
                  {abierto.nivel} · {abierto.duracion}
                </span>
                <h3 className="mt-1 text-lg font-black text-white">{abierto.titulo}</h3>
                <p className="mt-1 max-w-2xl text-sm text-white/50">{abierto.descripcion}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
