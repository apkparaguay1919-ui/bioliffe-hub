"use client";
import { useState } from "react";
import { Link2, MessageCircle, Check } from "lucide-react";

interface Props {
  title: string;
  url: string;
}

/** Botones de compartir: WhatsApp y copiar enlace (con fallback a Web Share API si está disponible). */
export default function ShareButtons({ title, url }: Props) {
  const [copied, setCopied] = useState(false);

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${title} — ${url}`);
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silencioso: el navegador puede bloquear el acceso al portapapeles
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={shareWhatsApp}
        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl transition-colors"
      >
        <MessageCircle size={14} /> Compartir
      </button>
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-2 border border-white/15 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl transition-colors"
      >
        {copied ? <Check size={14} /> : <Link2 size={14} />} {copied ? "Copiado" : "Copiar enlace"}
      </button>
    </div>
  );
}
