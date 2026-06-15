"use client";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full" />
          <span className="text-white font-black text-lg tracking-tight">BIOLIFFE <span className="text-yellow-400">MORINGA</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[["Productos","/productos"],["Negocio","/negocio"],["Mentoria","/mentoria"],["Liderazgo","/liderazgo"],["Eventos","/eventos"]].map(([label,href])=>(
            <a key={href} href={href} className="text-green-200 hover:text-yellow-400 text-sm font-medium transition-colors tracking-wide">{label}</a>
          ))}
        </div>
        <a href={createWhatsAppLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-5 py-2 rounded-full text-sm transition-all hover:scale-105">WhatsApp</a>
      </div>
    </nav>
  );
}
