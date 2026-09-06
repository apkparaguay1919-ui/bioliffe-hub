"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

/**
 * Menú principal.
 *
 * Cambios: "Productos" y "Negocio" ahora van a páginas reales (/productos y
 * /emprender) en lugar de anclas de la home; "Videos" y "Testimonios" tienen
 * su propia página; y se quitó "Liderazgo" porque apuntaba a /#liderazgo,
 * un ancla que no existe en ninguna sección (era un enlace roto).
 * Todos los destinos siguen accesibles, además, desde el footer.
 */
/** Lista completa — es la que se ve en el menú desplegable del celular. */
const LINKS: [string, string][] = [
  ["Nosotros", "/nosotros"],
  ["La Moringa", "/moringa"],
  ["Productos", "/productos"],
  ["Emprender", "/emprender"],
  ["Academia", "/academia"],
  ["Videos", "/videos"],
  ["Lideres", "/lideres"],
  ["Testimonios", "/testimonios"],
  ["Eventos", "/#eventos"],
  ["Blog", "/blog"],
  ["Recursos", "/descargas"],
  ["Preguntas", "/#faq"],
];

/**
 * Barra horizontal de escritorio: 10 enlaces.
 *
 * Con los 12 la barra se pasaba del ancho de la pantalla y el último quedaba
 * cortado contra el borde derecho, incluso en un monitor de 1440 px. "Eventos"
 * y "Recursos" salen de acá pero siguen estando en el menú del celular y en el
 * footer, así que no se pierde ningún acceso.
 */
const LINKS_ESCRITORIO = LINKS.filter(
  ([, href]) => href !== "/#eventos" && href !== "/descargas"
);

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

        <div className="hidden xl:flex items-center gap-4 2xl:gap-6">
          {LINKS_ESCRITORIO.map(([label, href]) => (
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
            className="xl:hidden w-10 h-10 rounded-lg border border-white/15 text-white flex items-center justify-center"
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
            className="xl:hidden overflow-hidden bg-black border-t border-white/10"
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
