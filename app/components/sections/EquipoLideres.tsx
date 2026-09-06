"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { equipo, iniciales, type Lider } from "../../data/lideres";
import RevealOnScroll from "../effects/RevealOnScroll";

/**
 * Equipo de líderes.
 *
 * Se edita en app/data/lideres.ts. Cada tarjeta muestra solo lo que
 * realmente hay cargado: si un líder no tiene historia o logros, la tarjeta
 * se adapta y no queda un hueco ni un texto de relleno.
 */
export default function EquipoLideres() {
  const [abierto, setAbierto] = useState<Lider | null>(null);

  if (equipo.length === 0) return null;

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-400">
              El equipo
            </p>
            <h2 className="text-4xl font-black text-white">Líderes de la comunidad</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
              Distribuidores que construyeron su propio equipo y hoy acompañan a
              otros. Escuchalos contar su recorrido.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {equipo.map((l, i) => (
            <RevealOnScroll key={l.id} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-green-400/30">
                <div className="mb-5 flex items-center gap-4">
                  {l.foto ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={l.foto}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-14 w-14 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-600 text-base font-black text-white">
                      {iniciales(l.nombre)}
                    </span>
                  )}
                  <div className="min-w-0">
                    <h3 className="truncate font-black text-white">{l.nombre}</h3>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-green-400">
                      {l.rango}
                    </p>
                    <p className="truncate text-xs text-white/35">{l.ubicacion}</p>
                  </div>
                </div>

                {l.historia && (
                  <p className="mb-5 text-sm leading-relaxed text-white/55">{l.historia}</p>
                )}

                {l.logros.length > 0 && (
                  <ul className="mb-5 space-y-2">
                    {l.logros.map((logro) => (
                      <li key={logro} className="flex items-start gap-2 text-xs text-white/60">
                        <span className="mt-1 text-green-400" aria-hidden="true">
                          ◆
                        </span>
                        {logro}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {l.videoId && (
                    <button
                      type="button"
                      onClick={() => setAbierto(l)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 py-2.5 text-xs font-bold text-white transition-colors hover:bg-green-400"
                    >
                      <Play size={13} fill="currentColor" /> Ver su historia
                    </button>
                  )}
                  {l.redes.map((r) => (
                    <a
                      key={r.nombre}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-xl border border-white/15 px-4 py-2.5 text-xs font-bold text-white/70 transition-colors hover:border-green-400/40 hover:text-white"
                    >
                      {r.nombre}
                    </a>
                  ))}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>

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
              aria-label={`Historia de ${abierto.nombre}`}
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
                  title={`Historia de ${abierto.nombre}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">
                  {abierto.rango}
                </span>
                <h3 className="mt-1 text-lg font-black text-white">{abierto.nombre}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
