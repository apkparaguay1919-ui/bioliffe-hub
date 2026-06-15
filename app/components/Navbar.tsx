"use client";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-black font-black text-sm">BM</span>
          </div>
          <span className="text-white font-black text-xl tracking-tight">
            BIOLIFFE <span className="text-green-400">MORINGA</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {[["Productos","#productos"],["Negocio","#negocio"],["Mentoria","#mentoria"],["Liderazgo","#liderazgo"],["Eventos","#eventos"]].map(([label, href]) => (
            <a key={href} href={href}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors tracking-widest uppercase">
              {label}
            </a>
          ))}
        </div>

        <a href={createWhatsAppLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-2.5 rounded-lg text-sm transition-all tracking-wide uppercase">
          WhatsApp
        </a>
      </div>
    </nav>
  );
}