"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  withExperience?: boolean;
  defaultInterest?: string;
  origen?: string;
  submitLabel?: string;
}

/**
 * Modal de captación. Accesible: se cierra con Escape o clic afuera, bloquea
 * el scroll del fondo, devuelve el foco al botón que lo abrió y anuncia el
 * diálogo a los lectores de pantalla.
 */
export default function LeadModal({
  open,
  onClose,
  title = "Quiero información ahora",
  subtitle = "Completá estos datos y te respondemos por WhatsApp con todo lo que necesitás saber.",
  withExperience,
  defaultInterest,
  origen,
  submitLabel,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Foco al primer campo del formulario.
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("input, select, button")?.focus();
    }, 80);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(t);
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-sm px-4 py-8 sm:py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b0b0b] p-7 sm:p-10 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
            >
              <X size={16} />
            </button>

            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-green-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              Respuesta por WhatsApp
            </span>

            <h2
              id="lead-modal-title"
              className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-3 mb-8 text-sm leading-relaxed text-white/55">{subtitle}</p>

            <LeadForm
              withExperience={withExperience}
              defaultInterest={defaultInterest}
              origen={origen}
              submitLabel={submitLabel}
              tone="dark"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
