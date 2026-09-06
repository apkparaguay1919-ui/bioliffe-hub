"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

export default function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) setShowBubble(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white text-gray-900 text-sm font-semibold px-4 py-3 rounded-2xl rounded-br-sm shadow-2xl max-w-[200px]"
          >
            <button
              onClick={() => {
                setDismissed(true);
                setShowBubble(false);
              }}
              aria-label="Cerrar"
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center"
            >
              <X size={11} />
            </button>
            ¿Necesitas ayuda? Escríbenos por WhatsApp 👋
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={createWhatsAppLink(WA_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        <span className="relative">WhatsApp</span>
      </a>
    </div>
  );
}
