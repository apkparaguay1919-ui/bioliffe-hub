"use client";

import { useState } from "react";
import LeadModal from "./LeadModal";

interface Props {
  label: string;
  className?: string;
  title?: string;
  subtitle?: string;
  withExperience?: boolean;
  defaultInterest?: string;
  origen?: string;
  submitLabel?: string;
}

/**
 * Botón que abre el modal de captación.
 *
 * Reemplaza los enlaces que iban directo a wa.me: primero pedimos los datos
 * (nombre, WhatsApp, ciudad, interés) y recién después abrimos WhatsApp con
 * el lead ya calificado. Así el asesor no arranca desde un "Hola" en frío.
 */
export default function LeadCTA({
  label,
  className = "",
  title,
  subtitle,
  withExperience,
  defaultInterest,
  origen,
  submitLabel,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>
      <LeadModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        subtitle={subtitle}
        withExperience={withExperience}
        defaultInterest={defaultInterest}
        origen={origen}
        submitLabel={submitLabel}
      />
    </>
  );
}
