"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";
import AnimatedCounter from "./effects/AnimatedCounter";

/**
 * Hero cinematográfico. Mantiene el texto, los enlaces, los 3 botones y las
 * estadísticas originales — solo se agregan: video de fondo opcional,
 * parallax, partículas sutiles, animaciones de entrada y contadores animados.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const particles = Array.from({ length: 18 });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Fondo: imagen con parallax + video opcional que se desvanece encima */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src="/images/pexels-brett-sayles-1002797.jpg"
          alt="hero"
          className="w-full h-full object-cover scale-110"
        />
        <motion.video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/pexels-brett-sayles-1002797.jpg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 2, delay: 0.6 }}
        >
          <source src="/videos/producto.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
      </motion.div>

      {/* Partículas sutiles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-green-300/50"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        ))}
      </div>

      <motion.div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
          Bioliffe Moringa Paraguay Hub
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-white leading-none mb-6 tracking-tight"
        >
          Bienestar,<br />
          <span className="text-green-400">liderazgo</span><br />
          y oportunidad.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-xl max-w-2xl mx-auto mb-4 leading-relaxed font-light"
        >
          La plataforma de formacion, productos premium y sistema de negocio para construir tu futuro con Bioliffe Moringa Paraguay.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/40 text-sm mb-12 tracking-widest uppercase"
        >
          Mentoria 24/7 · Productos naturales · Sistema de duplicacion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href={createWhatsAppLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-green-500 hover:bg-green-400 text-white font-black px-10 py-4 rounded-xl text-base tracking-widest uppercase transition-all shadow-[0_0_0_0_rgba(34,197,94,0.6)] hover:shadow-[0_0_35px_5px_rgba(34,197,94,0.45)]"
          >
            Quiero informacion ahora
          </a>
          <a
            href="/#productos"
            className="border border-white/30 text-white hover:bg-white/10 hover:border-white/60 font-bold px-10 py-4 rounded-xl text-base tracking-widest uppercase transition-all"
          >
            Ver productos
          </a>
          <a
            href={createWhatsAppLink(WA_MESSAGES.negocio)}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 text-white hover:bg-white/10 hover:border-white/60 font-bold px-10 py-4 rounded-xl text-base tracking-widest uppercase transition-all"
          >
            Quiero emprender
          </a>
        </motion.div>

        {/* Indicadores premium */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-14"
        >
          {["Productos Premium", "Mentoría", "Oportunidad de Negocio", "Distribución Nacional"].map((label) => (
            <span key={label} className="flex items-center gap-2 text-white/70 text-xs font-bold tracking-widest uppercase">
              <span className="w-4 h-4 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-[10px]">✓</span>
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-white/10 pt-10"
        >
          <div className="text-center">
            <AnimatedCounter value={10} suffix="+" className="text-3xl font-black text-white" />
            <p className="text-white/40 text-xs mt-1 tracking-widest uppercase">Productos premium</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-white">24/7</p>
            <p className="text-white/40 text-xs mt-1 tracking-widest uppercase">Mentoria activa</p>
          </div>
          <div className="text-center">
            <AnimatedCounter value={100} suffix="%" className="text-3xl font-black text-white" />
            <p className="text-white/40 text-xs mt-1 tracking-widest uppercase">Natural con moringa</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/40 text-[10px] tracking-widest uppercase">Descubre más</span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1.5">
          <span className="w-1 h-1.5 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
