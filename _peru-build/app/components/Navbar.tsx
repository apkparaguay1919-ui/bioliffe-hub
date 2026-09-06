"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

const LINKS: [string, string][] = [
  ["Nosotros", "/nosotros"],
  ["La Moringa", "/moringa"],
  ["Productos", "/#productos"],
  ["Negocio", "/#negocio"],
  ["Mentoria", "/#mentoria"],
  ["Academia", "/academia"],
  ["Liderazgo", "/#liderazgo"],
  ["Lideres", "/lideres"],
  ["Eventos", "/#eventos"],
  ["Videos", "/#video"],
  ["Testimonios", "/#testimonios"],
  ["Blog", "/blog"],
  ["Recursos", "/descargas"],
  ["Preguntas Frecuentes", "/#faq"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur border-white/10" : "bg-black border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-black font-black text-sm">BM</span>
          </div>
          <span className="text-white font-black text-xl tracking-tight">
            BIOLIFFE <span className="text-green-400">MORINGA</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-white/60 hover:text-white text-xs font-medium transition-colors tracking-widest uppercase whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={createWhatsAppLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-2.5 rounded-lg text-sm transition-all tracking-wide uppercase"
          >
            WhatsApp
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            className="lg:hidden w-10 h-10 rounded-lg border border-white/15 text-white flex items-center justify-center"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-black border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {LINKS.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-white text-sm font-semibold tracking-widest uppercase py-3 border-b border-white/5"
                >
                  {label}
                </a>
              ))}
              <a
                href={createWhatsAppLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-lg text-sm tracking-wide uppercase"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
