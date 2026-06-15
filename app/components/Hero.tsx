"use client";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/pexels-brett-sayles-1002797.jpg" alt="hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
          Bioliffe Moringa Paraguay Hub
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 tracking-tight">
          Bienestar,<br />
          <span className="text-green-400">liderazgo</span><br />
          y oportunidad.
        </h1>

        <p className="text-white/70 text-xl max-w-2xl mx-auto mb-4 leading-relaxed font-light">
          La plataforma de formacion, productos premium y sistema de negocio para construir tu futuro con Bioliffe Moringa Paraguay.
        </p>

        <p className="text-white/40 text-sm mb-12 tracking-widest uppercase">
          Mentoria 24/7 · Productos naturales · Sistema de duplicacion
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href={createWhatsAppLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-white font-black px-10 py-4 rounded-xl text-base tracking-widest uppercase transition-all">
            Quiero informacion ahora
          </a>
          <a href="/productos"
            className="border border-white/30 text-white hover:bg-white/10 font-bold px-10 py-4 rounded-xl text-base tracking-widest uppercase transition-all">
            Ver productos
          </a>
          <a href={createWhatsAppLink(WA_MESSAGES.negocio)} target="_blank" rel="noopener noreferrer"
            className="border border-white/30 text-white hover:bg-white/10 font-bold px-10 py-4 rounded-xl text-base tracking-widest uppercase transition-all">
            Quiero emprender
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-white/10 pt-10">
          {[{num:"10+",label:"Productos premium"},{num:"24/7",label:"Mentoria activa"},{num:"100%",label:"Natural con moringa"}].map((stat)=>(
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-white">{stat.num}</p>
              <p className="text-white/40 text-xs mt-1 tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}