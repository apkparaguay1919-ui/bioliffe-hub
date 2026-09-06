/**
 * Constructor de enlaces de WhatsApp.
 *
 * El número ya NO se escribe acá: vive en app/lib/site.ts (WHATSAPP_NUMBER).
 * Así hay una sola fuente de verdad y es imposible que un botón quede
 * apuntando a un número viejo.
 */
import { WHATSAPP_NUMBER, SITE } from "./site";

export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WA_MESSAGES = {
  general: "Hola Javier, quiero más información sobre Bioliffe Moringa.",
  producto: "Hola Javier, quiero más información sobre los productos Bioliffe Moringa.",
  negocio: "Hola Javier, quiero conocer la oportunidad de negocio con Bioliffe Moringa.",
  mentoria: "Hola Javier, quiero recibir mentoría para empezar correctamente.",
  evento: "Hola Javier, quiero registrarme en el próximo evento Bioliffe Moringa.",
  lideres: "Hola Javier, quiero saber más sobre el liderazgo y la mentoría en Bioliffe Moringa.",
  academia: "Hola Javier, quiero información sobre la Academia Bioliffe y sus módulos de formación.",
  blog: "Hola Javier, quiero más información sobre lo que leí en el blog de Bioliffe Moringa.",
  videos: "Hola Javier, vi un video del canal y quiero más información sobre Bioliffe Moringa.",
  asesor: "Hola Javier, quiero hablar con un asesor de Bioliffe Moringa Paraguay.",
};

/** Mensaje precargado para consultar por un producto puntual. */
export function productMessage(productName: string): string {
  return `Hola Javier, quiero información y precio de *${productName}* de Bioliffe Moringa.`;
}

/** Enlace directo de WhatsApp para un producto puntual. */
export function productWhatsAppLink(productName: string): string {
  return createWhatsAppLink(productMessage(productName));
}

/** Enlace de WhatsApp para consultar por un video del canal. */
export function videoWhatsAppLink(videoTitle: string): string {
  return createWhatsAppLink(
    `Hola Javier, vi el video *${videoTitle}* y quiero más información sobre Bioliffe Moringa.`
  );
}

/* ------------------------------------------------------------------ */
/*  FORMULARIOS DE CAPTACIÓN                                           */
/* ------------------------------------------------------------------ */

export type LeadInterest =
  | "Comprar productos"
  | "Ser distribuidor"
  | "Aprender sobre moringa"
  | "Emprender un negocio";

export const LEAD_INTERESTS: LeadInterest[] = [
  "Comprar productos",
  "Ser distribuidor",
  "Aprender sobre moringa",
  "Emprender un negocio",
];

export interface LeadData {
  nombre: string;
  whatsapp: string;
  ciudad: string;
  interes: string;
  /** Campo extra que solo usa el formulario de /emprender. */
  experiencia?: string;
  /** De qué página salió el lead — para saber qué sección convierte. */
  origen?: string;
}

/**
 * Arma el mensaje de WhatsApp con todos los datos del formulario.
 * El asesor recibe el lead ya calificado en un solo mensaje, sin tener que
 * preguntar nombre, ciudad ni interés.
 */
export function buildLeadMessage(lead: LeadData): string {
  const lineas = [
    "Hola Javier 👋 Quiero información sobre Bioliffe Moringa Paraguay.",
    "",
    `*Nombre:* ${lead.nombre.trim()}`,
    `*WhatsApp:* ${lead.whatsapp.trim()}`,
    `*Ciudad:* ${lead.ciudad.trim()}`,
    `*Me interesa:* ${lead.interes.trim()}`,
  ];

  if (lead.experiencia && lead.experiencia.trim()) {
    lineas.push(`*Experiencia previa:* ${lead.experiencia.trim()}`);
  }
  if (lead.origen) {
    lineas.push("", `_Enviado desde ${SITE.url}${lead.origen}_`);
  }

  return lineas.join("\n");
}

/** Enlace final de WhatsApp con el lead completo ya cargado. */
export function buildLeadLink(lead: LeadData): string {
  return createWhatsAppLink(buildLeadMessage(lead));
}
