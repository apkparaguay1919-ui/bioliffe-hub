/**
 * CONFIGURACIÓN CENTRAL DE BIOLIFFE MORINGA PARAGUAY
 * ==================================================
 *
 * Este es el ÚNICO archivo donde se define el número de WhatsApp, el dominio,
 * las redes sociales y los datos de contacto. Todo el resto de la web lee
 * desde acá.
 *
 * ¿Por qué? Antes el número de WhatsApp estaba escrito a mano en dos archivos
 * distintos (lib/whatsapp.ts y components/ProductCard.tsx). Si cambiabas uno
 * y te olvidabas del otro, la mitad de los botones seguía enviando al número
 * viejo y perdías leads sin darte cuenta.
 *
 * PARA CAMBIAR EL NÚMERO DE WHATSAPP: cambiá solo la línea WHATSAPP_NUMBER de
 * abajo. Se actualiza automáticamente en toda la web (header, hero, botón
 * flotante, popup, fichas de producto, formularios y footer).
 */

/** Número de WhatsApp en formato internacional, SIN "+", SIN espacios ni guiones. */
export const WHATSAPP_NUMBER = "51950639288";

/** Cómo se muestra el número cuando aparece escrito en pantalla. */
export const WHATSAPP_DISPLAY = "+51 950 639 288";

export const SITE = {
  name: "Bioliffe Moringa Paraguay",
  shortName: "Bioliffe Moringa",
  url: "https://www.biolifemoringaparaguay.com",
  locale: "es_PY",
  country: "PY",
  currency: "PYG",
  advisor: {
    name: "Javier Quintana Mendoza",
    role: "Distribuidor Recomendado",
    location: "Paraguay",
  },
  youtube: {
    /** Se usa como enlace público al canal. La sincronización automática de
     *  videos usa YOUTUBE_CHANNEL_ID desde las variables de entorno. */
    channelUrl: "https://www.youtube.com/@bioliffemoringaparaguay",
  },
  legal: {
    disclaimer:
      "Producto de bienestar. No sustituye diagnóstico ni tratamiento médico. Los resultados pueden variar de una persona a otra.",
    incomeDisclaimer:
      "Los ingresos dependen del esfuerzo, la dedicación y las ventas de cada distribuidor. No se garantizan resultados económicos.",
  },
} as const;

/** Ciudades de Paraguay para el selector de los formularios de captación. */
export const CIUDADES_PY = [
  "Asunción",
  "Ciudad del Este",
  "San Lorenzo",
  "Luque",
  "Capiatá",
  "Lambaré",
  "Fernando de la Mora",
  "Encarnación",
  "Limpio",
  "Ñemby",
  "Pedro Juan Caballero",
  "Coronel Oviedo",
  "Concepción",
  "Villarrica",
  "Caaguazú",
  "Mariano Roque Alonso",
  "Presidente Franco",
  "Itauguá",
  "Villa Elisa",
  "Otra ciudad",
] as const;
