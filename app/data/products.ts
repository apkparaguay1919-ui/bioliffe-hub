/**
 * CATÁLOGO DE PRODUCTOS — BIOLIFFE MORINGA PARAGUAY
 * =================================================
 *
 * Para Paraguay se muestran SOLO Eficlax y Alkam. El resto de la línea ya
 * tiene las imágenes cargadas en /public/images y se puede activar cuando
 * quieras: copiás uno de los bloques de abajo, cambiás los datos y listo.
 * No hay que tocar ningún componente ni ninguna página.
 *
 * ── CÓMO AGREGAR UN PRODUCTO ──────────────────────────────────────────
 *   1. Copiá un bloque completo { ... } de los de abajo.
 *   2. Cambiá id, name, slug, image y el contenido.
 *   3. Guardá. El producto aparece solo en:
 *        · la home (sección Productos)
 *        · /productos (con su filtro de categoría)
 *        · /productos/[slug] (ficha completa, generada automáticamente)
 *        · el sitemap y los datos estructurados de Google
 *
 * ── PRECIOS ───────────────────────────────────────────────────────────
 *   DECISIÓN TOMADA: la web NO muestra precios. Se cierran a mano por
 *   WhatsApp, en la conversación con cada cliente. Por eso todos los
 *   productos van con priceGs: null, que en pantalla se ve como
 *   "Consultar precio" junto al botón de WhatsApp.
 *
 *   Si algún día querés mostrar un precio en un producto puntual, poné el
 *   número en guaraníes sin puntos ni comas:
 *       priceGs: 150000   →  se muestra "Gs. 150.000"
 *   Se formatea solo en la tarjeta, en la ficha y en los datos
 *   estructurados de Google. No hay que tocar nada más.
 *
 * ── IMÁGENES DISPONIBLES SIN USAR ─────────────────────────────────────
 *   althus · amagi3en1 · amagiblack · amagicapuccino · amagifit · amagipote
 *   biokids · eternal · metha · nutribar · nutro · ori · propoleo · purifort
 *   revella · revellapote · revitalis · vegafull
 */

export interface ProductFAQ {
  q: string;
  a: string;
}

export interface Product {
  id: string;
  /** URL de la ficha: /productos/<slug> */
  slug: string;
  name: string;
  /** Nombre completo tal cual figura en el envase. */
  fullName?: string;
  category: string;
  /** Frase corta para tarjetas y resultados de búsqueda. */
  tagline: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  /** Modo de uso sugerido. */
  usage: string;
  presentation?: string;
  /** Precio en guaraníes, sin puntos. null = "Consultar precio". */
  priceGs: number | null;
  image: string;
  /** ID del video de YouTube donde se explica el producto. */
  youtubeId?: string;
  faq: ProductFAQ[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "eficlax",
    slug: "eficlax-detox",
    name: "Eficlax",
    fullName: "Eficlax Detox",
    category: "Bienestar digestivo",
    tagline: "Limpieza natural para tu bienestar",
    description:
      "Eficlax Detox es un suplemento alimenticio elaborado con una exclusiva combinación de semillas de moringa liofilizadas, pitahaya, ciruela, dátiles, mora y yacón: ingredientes reconocidos por su aporte de fibra, antioxidantes y compuestos naturales que favorecen el equilibrio digestivo. Según la información del fabricante, está formulado para apoyar el tránsito intestinal y las funciones naturales de depuración del organismo.",
    benefits: [
      "Favorece el tránsito intestinal de forma natural",
      "Ayuda a eliminar desechos acumulados",
      "Contribuye a disminuir la sensación de pesadez e inflamación abdominal",
      "Apoya los procesos naturales de depuración del organismo",
      "Aporta fibra y antioxidantes de origen vegetal",
    ],
    ingredients: [
      "Semillas de moringa liofilizadas — antioxidantes, vitaminas, minerales y fibra",
      "Pitahaya — fuente natural de fibra, favorece la digestión",
      "Ciruela — conocida por su efecto laxante natural",
      "Dátiles — aportan fibra y energía de origen natural",
      "Mora — rica en antioxidantes y vitamina C",
      "Yacón — prebióticos naturales (fructooligosacáridos) para la microbiota",
    ],
    usage:
      "Seguir siempre las indicaciones del envase. Se recomienda acompañarlo con una buena hidratación durante el día y mantener una alimentación equilibrada.",
    presentation: "Suplemento alimenticio",
    // Sin precio en la web: se cierra por WhatsApp. Ver nota de arriba.
    priceGs: null,
    image: "/images/eficlax.webp",
    youtubeId: "jw0NVJtwTfs",
    faq: [
      {
        q: "¿Qué es exactamente Eficlax Detox?",
        a: "Es un suplemento alimenticio a base de semillas de moringa liofilizadas combinadas con pitahaya, ciruela, dátiles, mora y yacón. Está pensado para acompañar el tránsito intestinal y los procesos naturales de depuración del cuerpo.",
      },
      {
        q: "¿Qué lo diferencia de un laxante común?",
        a: "Su base es vegetal: fibra, antioxidantes y prebióticos naturales provenientes de frutas y de la semilla de moringa, en lugar de una fórmula de acción única.",
      },
      {
        q: "¿Reemplaza un tratamiento médico?",
        a: "No. Es un producto de bienestar y no sustituye diagnóstico ni tratamiento médico. Ante cualquier condición de salud, consultá con un profesional antes de incorporarlo.",
      },
      {
        q: "¿Cómo lo compro en Paraguay?",
        a: "Escribinos por WhatsApp y te pasamos disponibilidad, precio actualizado y las formas de envío dentro del país.",
      },
    ],
    featured: true,
  },
  {
    id: "alkam",
    slug: "alka-m",
    name: "Alkam",
    fullName: "ALKA-M Bioliffe Moringa",
    category: "Nutrición y equilibrio",
    tagline: "Equilibra tu bienestar desde el interior",
    description:
      "ALKA-M de Bioliffe Moringa combina el poder de la moringa, sábila, yacón, limón, toronja, piña y bicarbonato de sodio en una fórmula diseñada para complementar un estilo de vida saludable. Según el fabricante, está orientado al apoyo digestivo y al bienestar general — pensado para quienes se sienten pesados, con digestiones lentas, o buscan incorporar un suplemento natural a su rutina diaria.",
    benefits: [
      "Apoya el proceso natural de depuración del organismo",
      "Favorece una buena digestión y el tránsito intestinal",
      "Contiene antioxidantes de origen natural",
      "Aporta fibra proveniente de ingredientes vegetales",
      "Complementa una alimentación equilibrada y un estilo de vida activo",
    ],
    ingredients: [
      "Moringa",
      "Sábila",
      "Yacón",
      "Limón",
      "Toronja",
      "Piña",
      "Bicarbonato de sodio",
    ],
    usage:
      "Seguir las indicaciones del envase. Muchos lo incorporan a la mañana, como parte de su rutina diaria de cuidado.",
    presentation: "Suplemento alimenticio",
    // Sin precio en la web: se cierra por WhatsApp. Ver nota de arriba.
    priceGs: null,
    image: "/images/alkam.webp",
    youtubeId: "jDYozWh5pXA",
    faq: [
      {
        q: "¿Para quién es ALKA-M?",
        a: "Para personas que se sienten pesadas, con digestiones lentas, o que simplemente quieren sumar un suplemento natural a su rutina diaria de bienestar.",
      },
      {
        q: "¿Qué ingredientes tiene?",
        a: "Moringa, sábila, yacón, limón, toronja, piña y bicarbonato de sodio.",
      },
      {
        q: "¿Se puede tomar junto con Eficlax?",
        a: "Son productos distintos de la misma línea. Escribinos por WhatsApp y te asesoramos sobre cuál conviene según lo que estés buscando.",
      },
      {
        q: "¿Hacen envíos al interior del país?",
        a: "Sí. Consultanos por WhatsApp y coordinamos el envío a tu ciudad.",
      },
    ],
    featured: true,
  },
];

/* ------------------------------------------------------------------ */
/*  DERIVADOS — no hace falta tocar nada de acá abajo                  */
/* ------------------------------------------------------------------ */

export const featuredProducts = products.filter((p) => p.featured);

export const categories = [...new Set(products.map((p) => p.category))];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
