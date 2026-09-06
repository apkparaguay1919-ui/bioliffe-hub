"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, ShoppingBag } from "lucide-react";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

const STORAGE_KEY = "bioliffe_popup_dismissed";

/** Popup que aparece a los 20 segundos ofreciendo más información. Se muestra una vez por sesión. */
export default function WhatsAppPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setVisible(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setVisible(false);
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 z-50 w-[320px] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-6"
        >
          <button
            onClick={close}
            aria-label="Cerrar"
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <X size={14} />
          </button>

          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4">
            <MessageCircle size={22} className="text-black" />
          </div>

          <h3 className="text-white font-black text-lg mb-2">¿Quieres más información?</h3>
          <p className="text-white/50 text-sm mb-5 leading-relaxed">
            Estamos para ayudarte a elegir el producto ideal o conocer la oportunidad de negocio.
          </p>

          <div className="flex flex-col gap-2.5">
            <a
              href={createWhatsAppLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-sm py-3 rounded-xl transition-colors"
            >
              <MessageCircle size={16} /> Hablar por WhatsApp
            </a>
            <a
              href="/productos"
              onClick={close}
              className="flex items-center justify-center gap-2 border border-white/15 text-white hover:bg-white/10 font-bold text-sm py-3 rounded-xl transition-colors"
            >
              <ShoppingBag size={16} /> Ver productos
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
