export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  category: "Catálogos" | "Presentaciones" | "Plan de Negocio" | "Material de Apoyo";
  /**
   * Ruta del archivo dentro de /public (ej: "/descargas/catalogo-2026.pdf").
   * Dejalo en null hasta que subas el archivo real a la carpeta
   * public/descargas/ — mientras tanto la tarjeta muestra "Solicitar por
   * WhatsApp" en lugar de un botón de descarga roto.
   */
  fileUrl: string | null;
  fileSize?: string;
}

export const downloads: DownloadItem[] = [
  {
    id: "catalogo-productos",
    title: "Catálogo de Productos 2026",
    description: "Catálogo completo con todos los productos Bioliffe Moringa, imágenes y descripciones.",
    category: "Catálogos",
    fileUrl: null,
  },
  {
    id: "presentacion-negocio",
    title: "Presentación de la Oportunidad de Negocio",
    description: "Diapositivas oficiales para presentar el sistema de negocio Bioliffe a nuevos contactos.",
    category: "Presentaciones",
    fileUrl: null,
  },
  {
    id: "plan-compensacion",
    title: "Plan de Compensación",
    description: "Documento detallado con bonos, rangos y el plan de compensación completo.",
    category: "Plan de Negocio",
    fileUrl: null,
  },
  {
    id: "guia-primeros-pasos",
    title: "Guía de Primeros Pasos para Distribuidores",
    description: "Checklist y guía paso a paso para arrancar con el pie derecho como nuevo distribuidor.",
    category: "Material de Apoyo",
    fileUrl: null,
  },
  {
    id: "scripts-whatsapp",
    title: "Scripts de Seguimiento por WhatsApp",
    description: "Mensajes listos para copiar y personalizar en tu seguimiento profesional por WhatsApp.",
    category: "Material de Apoyo",
    fileUrl: null,
  },
  {
    id: "presentacion-moringa",
    title: "La Moringa: Presentación Educativa",
    description: "Material visual sobre el origen, cultivo y nutrientes generales de la moringa.",
    category: "Presentaciones",
    fileUrl: null,
  },
];

export const downloadCategories = ["Catálogos", "Presentaciones", "Plan de Negocio", "Material de Apoyo"] as const;
