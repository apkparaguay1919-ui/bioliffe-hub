"use client";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950 to-black" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse inline-block" />
          Bioliffe Moringa Paraguay Hub
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 tracking-tight">
          Bienestar,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">liderazgo</span><br />
          <span className="text-green-400">y oportunidad.</span>
        </h1>
        <p className="text-green-200 text-xl max-w-2xl mx-auto mb-4 leading-relaxed font-light">La plataforma de formacion, productos premium y sistema de negocio para construir tu futuro con Bioliffe Moringa Paraguay.</p>
        <p className="text-yellow-400/80 text-sm mb-12 tracking-wide">Mentoria 24/7 · Productos naturales · Sistema de duplicacion</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href={createWhatsAppLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-400 text-white font-black px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/30">Quiero informacion ahora</a>
          <a href="/productos" className="border-2 border-yellow-400/60 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105">Ver productos</a>
          <a href={createWhatsAppLink(WA_MESSAGES.negocio)} target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 text-white/80 hover:bg-white hover:text-green-900 font-bold px-10 py-5 rounded-full text-lg transition-all duration-300">Quiero emprender</a>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-white/10 pt-10">
          {[{num:"10+",label:"Productos premium"},{num:"24/7",label:"Mentoria activa"},{num:"100%",label:"Natural con moringa"}].map((stat)=>(
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-yellow-400">{stat.num}</p>
              <p className="text-green-300 text-xs mt-1 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
