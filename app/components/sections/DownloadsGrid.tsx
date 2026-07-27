"use client";
import { useMemo, useState } from "react";
import { Download, FileText, MessageCircle } from "lucide-react";
import RevealOnScroll from "../effects/RevealOnScroll";
import { downloadCategories, type DownloadItem } from "../../data/downloads";
import { createWhatsAppLink, WA_MESSAGES } from "../../lib/whatsapp";

interface Props {
  items: DownloadItem[];
}

/**
 * Centro de descargas. Cada tarjeta muestra "Descargar" cuando el archivo ya
 * está disponible en /public/descargas/, o "Solicitar por WhatsApp" mientras
 * tanto — así no hay nunca un botón de descarga que lleve a un 404.
 */
export default function DownloadsGrid({ items }: Props) {
  const [category, setCategory] = useState<string>("Todas");

  const filtered = useMemo(
    () => (category === "Todas" ? items : items.filter((i) => i.category === category)),
    [items, category]
  );

  return (
    <section className="relative py-16 px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="flex gap-2 overflow-x-auto pb-10 no-scrollbar justify-center">
            {["Todas", ...downloadCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
                  category === cat
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 0.05}>
              <div className="h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-400/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-green-500/15 text-green-400 flex items-center justify-center mb-5">
                  <FileText size={22} />
                </div>
                <span className="text-green-400 text-[10px] font-bold tracking-widest uppercase mb-2">{item.category}</span>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{item.description}</p>
                {item.fileUrl ? (
                  <a
                    href={item.fileUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-sm py-3 rounded-xl transition-colors"
                  >
                    <Download size={16} /> Descargar{item.fileSize ? ` (${item.fileSize})` : ""}
                  </a>
                ) : (
                  <a
                    href={createWhatsAppLink(WA_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-white/15 text-white hover:bg-white/10 font-bold text-sm py-3 rounded-xl transition-colors"
                  >
                    <MessageCircle size={16} /> Solicitar por WhatsApp
                  </a>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
