/**
 * CATÁLOGO DE VIDEOS — BIOLIFFE MORINGA PARAGUAY
 * ==============================================
 *
 * Este archivo alimenta la Movie Ribbon de la home, la página /videos, los
 * testimonios en video y la Academia.
 *
 * Los videos de abajo son los REALES de tu canal de YouTube, ya clasificados
 * por categoría. Las miniaturas se traen solas desde YouTube: no hay que
 * subir ninguna imagen.
 *
 * ── CÓMO AGREGAR UN VIDEO NUEVO ───────────────────────────────────────
 *   1. Subilo a YouTube como siempre.
 *   2. Copiá el ID de la URL:
 *        https://www.youtube.com/watch?v=ZhGc2zTDPnU
 *                                        └────┬─────┘
 *                                           el ID
 *   3. Pegá un bloque nuevo acá con ese ID, el título, una descripción
 *      y la categoría. Listo, aparece solo en toda la web.
 *
 * Nota: la home además sincroniza automáticamente los últimos 24 videos del
 * canal vía la API de YouTube (app/lib/youtube.ts). Este archivo es la
 * versión CURADA y ordenada por vos — la que se usa en /videos y en las
 * secciones donde importa la clasificación.
 */

export type VideoCategory =
  | "Testimonios"
  | "Productos"
  | "Eventos"
  | "Viajes"
  | "Bonos"
  | "Liderazgo"
  | "Moringa"
  | "Negocio"
  | "Capacitaciones"
  | "Academia"
  | "Distribución"
  | "Canal";

export interface VideoEntry {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  tags: string[];
  /** ID de YouTube. */
  youtubeId?: string;
  /** Video local propio (mp4 en /public/videos). */
  localSrc?: string;
  /** Miniatura. Para YouTube se genera sola con ytThumb(). */
  thumbnail: string;
  duration: string;
  date: string;
  /** Se muestra primero en las grillas destacadas. */
  featured?: boolean;
  comingSoon?: boolean;
}

/** Miniatura oficial de YouTube — no hace falta subir imágenes. */
export function ytThumb(youtubeId: string): string {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

/** URL pública de un video de YouTube. */
export function ytUrl(youtubeId: string): string {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export const YOUTUBE_CHANNEL_SEARCH_URL =
  "https://www.youtube.com/results?search_query=Bioliffe+Moringa+Paraguay";

export const videos: VideoEntry[] = [
  /* ─────────────── NEGOCIO ─────────────── */
  {
    id: "presentacion-negocio-py",
    title: "Presentación de negocio Paraguay",
    description:
      "La presentación completa de la oportunidad Bioliffe Moringa en Paraguay: productos, sistema y cómo empezar.",
    category: "Negocio",
    tags: ["negocio", "paraguay", "presentación", "oportunidad"],
    youtubeId: "ZhGc2zTDPnU",
    thumbnail: ytThumb("ZhGc2zTDPnU"),
    duration: "—",
    date: "2026-09-06",
    featured: true,
  },
  {
    id: "oportunidad-internacional",
    title: "Oportunidad internacional Bioliffe Moringa",
    description:
      "Cómo la oportunidad Bioliffe se expande por Latinoamérica y qué significa entrar en el momento correcto.",
    category: "Negocio",
    tags: ["negocio", "internacional", "expansión"],
    youtubeId: "5U5MkOH9Ym0",
    thumbnail: ytThumb("5U5MkOH9Ym0"),
    duration: "—",
    date: "2024-01-12",
  },
  {
    id: "variables-red-mercadeo",
    title: "Variables de una red de mercadeo",
    description:
      "Qué mirar antes de elegir una compañía de ventas directas: producto, plan, respaldo y momento del mercado.",
    category: "Negocio",
    tags: ["red de mercadeo", "formación", "negocio"],
    youtubeId: "8iVh_4Ob6Jw",
    thumbnail: ytThumb("8iVh_4Ob6Jw"),
    duration: "—",
    date: "2024-09-05",
  },
  {
    id: "prelanzamiento",
    title: "Video de prelanzamiento",
    description: "El video con el que arrancó todo: el prelanzamiento de Bioliffe Moringa.",
    category: "Negocio",
    tags: ["prelanzamiento", "historia", "negocio"],
    youtubeId: "aBQSMnZw5Qk",
    thumbnail: ytThumb("aBQSMnZw5Qk"),
    duration: "—",
    date: "2026-06-25",
  },
  {
    id: "bioliffe-ecuador",
    title: "Bioliffe Moringa Ecuador",
    description: "Apertura de Ecuador: buscamos pioneros para abrir mercado.",
    category: "Negocio",
    tags: ["ecuador", "expansión", "pioneros"],
    youtubeId: "fFUODKnVEI4",
    thumbnail: ytThumb("fFUODKnVEI4"),
    duration: "—",
    date: "2024-06-28",
  },

  /* ─────────────── PRODUCTOS ─────────────── */
  {
    id: "eficlax-detox",
    title: "Eficlax Detox",
    description:
      "Semillas de moringa liofilizadas, pitahaya, ciruela, dátiles, mora y yacón: qué aporta cada ingrediente de Eficlax Detox.",
    category: "Productos",
    tags: ["eficlax", "detox", "moringa", "digestión"],
    youtubeId: "jw0NVJtwTfs",
    thumbnail: ytThumb("jw0NVJtwTfs"),
    duration: "—",
    date: "2026-06-25",
    featured: true,
  },
  {
    id: "alkam",
    title: "ALKA-M Bioliffe Moringa",
    description:
      "Moringa, sábila, yacón, limón, toronja, piña y bicarbonato: cómo ALKA-M acompaña tu bienestar desde el interior.",
    category: "Productos",
    tags: ["alkam", "alka-m", "moringa", "bienestar"],
    youtubeId: "jDYozWh5pXA",
    thumbnail: ytThumb("jDYozWh5pXA"),
    duration: "—",
    date: "2026-06-25",
    featured: true,
  },
  {
    id: "eficlax-limpieza",
    title: "Eficlax Detox — limpieza natural",
    description:
      "Otra mirada a Eficlax Detox y su aporte de fibra, antioxidantes y prebióticos naturales.",
    category: "Productos",
    tags: ["eficlax", "detox", "fibra"],
    youtubeId: "oRyQrSUtMZo",
    thumbnail: ytThumb("oRyQrSUtMZo"),
    duration: "—",
    date: "2026-06-25",
  },
  {
    id: "eficlax-presentacion",
    title: "Eficlax Detox — presentación",
    description: "Presentación corta de Eficlax Detox para compartir con clientes.",
    category: "Productos",
    tags: ["eficlax", "detox", "presentación"],
    youtubeId: "QGpIwLzans0",
    thumbnail: ytThumb("QGpIwLzans0"),
    duration: "—",
    date: "2026-06-25",
  },
  {
    id: "producto-local",
    title: "Descubrí Bioliffe Paraguay",
    description:
      "Video institucional: la calidad y el cuidado detrás de cada producto Bioliffe Moringa.",
    category: "Productos",
    tags: ["institucional", "productos", "calidad"],
    localSrc: "/videos/producto-web.mp4",
    thumbnail: "/images/producto-poster.webp",
    duration: "—",
    date: "2026",
  },

  /* ─────────────── MORINGA ─────────────── */
  {
    id: "moringa-concepto",
    title: "Moringa: concepto y beneficios",
    description:
      "Qué es la moringa, por qué se la llama el árbol de la vida y cuáles son sus principales aportes nutricionales.",
    category: "Moringa",
    tags: ["moringa", "beneficios", "nutrición"],
    youtubeId: "hjE1noho1yQ",
    thumbnail: ytThumb("hjE1noho1yQ"),
    duration: "—",
    date: "2026-06-25",
    featured: true,
  },
  {
    id: "moringa-cultivo",
    title: "Moringa: cultivo y distribución",
    description:
      "Del cultivo a la distribución: cómo llega la moringa desde la planta hasta el producto final.",
    category: "Moringa",
    tags: ["moringa", "cultivo", "distribución", "producción"],
    youtubeId: "zefChkEq6RU",
    thumbnail: ytThumb("zefChkEq6RU"),
    duration: "—",
    date: "2026-06-25",
  },

  /* ─────────────── TESTIMONIOS ─────────────── */
  {
    id: "testimonio-katy-vilca",
    title: "Testimonio de Katy Vilca — Rango Diamante",
    description: "Katy Vilca cuenta su recorrido hasta alcanzar el rango Diamante en Bioliffe Moringa.",
    category: "Testimonios",
    tags: ["testimonio", "diamante", "liderazgo"],
    youtubeId: "rr21s82syXA",
    thumbnail: ytThumb("rr21s82syXA"),
    duration: "—",
    date: "2026-07-26",
    featured: true,
  },
  {
    id: "testimonio-yessenia-benito",
    title: "Testimonio de Yessenia Benito — Rango Diamante",
    description: "Yessenia Benito comparte cómo construyó su equipo hasta llegar a Diamante.",
    category: "Testimonios",
    tags: ["testimonio", "diamante", "equipo"],
    youtubeId: "KuaXuo69cFk",
    thumbnail: ytThumb("KuaXuo69cFk"),
    duration: "—",
    date: "2026-07-26",
    featured: true,
  },
  {
    id: "testimonio-victor-garcia",
    title: "Víctor García — Bioliffe Moringa",
    description: "La experiencia de Víctor García con los productos y el sistema Bioliffe.",
    category: "Testimonios",
    tags: ["testimonio", "experiencia"],
    youtubeId: "SKv79J2QDNg",
    thumbnail: ytThumb("SKv79J2QDNg"),
    duration: "—",
    date: "2026-07-26",
  },
  {
    id: "testimonio-anastacio",
    title: "Anastacio de la Cruz — Bioliffe Moringa",
    description: "Anastacio de la Cruz cuenta su experiencia dentro de la comunidad Bioliffe.",
    category: "Testimonios",
    tags: ["testimonio", "comunidad"],
    youtubeId: "FVVY8T8U454",
    thumbnail: ytThumb("FVVY8T8U454"),
    duration: "—",
    date: "2026-07-26",
  },
  {
    id: "testimonio-dora-riva",
    title: "Dora Riva — Testimonio Bioliffe",
    description: "Dora Riva comparte los resultados que obtuvo con los productos Bioliffe.",
    category: "Testimonios",
    tags: ["testimonio", "resultados"],
    youtubeId: "yNfjJixIZ_I",
    thumbnail: ytThumb("yNfjJixIZ_I"),
    duration: "—",
    date: "2026-07-26",
  },
  {
    id: "testimonio-flor",
    title: "Testimonio de Flor",
    description: "El testimonio de Flor sobre su experiencia con Bioliffe Moringa.",
    category: "Testimonios",
    tags: ["testimonio"],
    youtubeId: "1Rgg4eAlh5w",
    thumbnail: ytThumb("1Rgg4eAlh5w"),
    duration: "—",
    date: "2026-06-25",
  },
  {
    id: "testimonio-general",
    title: "Testimonio Bioliffe",
    description: "Un testimonio más de la comunidad Bioliffe Moringa.",
    category: "Testimonios",
    tags: ["testimonio", "comunidad"],
    youtubeId: "nllZZ6QEof0",
    thumbnail: ytThumb("nllZZ6QEof0"),
    duration: "—",
    date: "2026-06-25",
  },

  /* ─────────────── BONOS ─────────────── */
  {
    id: "bono-auto-1",
    title: "Bono Auto Bioliffe Moringa",
    description: "El bono auto de Bioliffe: cómo se alcanza y qué significa dentro del plan.",
    category: "Bonos",
    tags: ["bono", "auto", "reconocimiento"],
    youtubeId: "ZN9Vr8sYvfU",
    thumbnail: ytThumb("ZN9Vr8sYvfU"),
    duration: "—",
    date: "2026-07-26",
    featured: true,
  },
  {
    id: "bono-auto-2",
    title: "Bono Auto Bioliffe Moringa 2",
    description: "Más entregas del bono auto a líderes de la red Bioliffe.",
    category: "Bonos",
    tags: ["bono", "auto", "logros"],
    youtubeId: "3vyZja-qxWo",
    thumbnail: ytThumb("3vyZja-qxWo"),
    duration: "—",
    date: "2026-07-26",
  },
  {
    id: "bono-auto-3",
    title: "Bono Auto Bioliffe Moringa 3",
    description: "Tercera entrega del bono auto dentro de la comunidad Bioliffe.",
    category: "Bonos",
    tags: ["bono", "auto", "reconocimiento"],
    youtubeId: "sqa1RoTYrbA",
    thumbnail: ytThumb("sqa1RoTYrbA"),
    duration: "—",
    date: "2026-07-26",
  },

  /* ─────────────── LIDERAZGO ─────────────── */
  {
    id: "liderazgo-nace-o-se-hace",
    title: "Liderazgo: ¿un líder nace o se hace?",
    description: "Una reflexión sobre desarrollo del potencial humano y liderazgo dentro del equipo.",
    category: "Liderazgo",
    tags: ["liderazgo", "desarrollo personal"],
    youtubeId: "f4nA5uisg-A",
    thumbnail: ytThumb("f4nA5uisg-A"),
    duration: "—",
    date: "2023-01-09",
    featured: true,
  },
  {
    id: "emprendes-o-dependes",
    title: "¿Emprendés o dependés?",
    description: "Motivación y mentalidad: la decisión que separa a quien emprende de quien depende.",
    category: "Liderazgo",
    tags: ["motivación", "mentalidad", "emprender"],
    youtubeId: "opPvpHegeLE",
    thumbnail: ytThumb("opPvpHegeLE"),
    duration: "—",
    date: "2024-02-17",
  },
  {
    id: "abundancia",
    title: "Abundancia",
    description: "Un mensaje de agradecimiento a la comunidad que hizo crecer el movimiento.",
    category: "Liderazgo",
    tags: ["comunidad", "agradecimiento", "mentalidad"],
    youtubeId: "BOfC5rqkFf4",
    thumbnail: ytThumb("BOfC5rqkFf4"),
    duration: "—",
    date: "2023-01-02",
  },

  /* ─────────────── CAPACITACIONES / ACADEMIA ─────────────── */
  {
    id: "capacitacion-productos",
    title: "Capacitación de productos Bioliffe",
    description:
      "Capacitación completa sobre el catálogo de productos: para qué es cada uno y cómo presentarlo.",
    category: "Capacitaciones",
    tags: ["capacitación", "productos", "formación"],
    youtubeId: "d8nU93Y9R3I",
    thumbnail: ytThumb("d8nU93Y9R3I"),
    duration: "—",
    date: "2025-01-24",
    featured: true,
  },
  {
    id: "diamantes-formando-diamantes",
    title: "Diamantes formando diamantes",
    description: "Transmisión en vivo del programa de formación de líderes Diamante.",
    category: "Academia",
    tags: ["academia", "formación", "diamante", "en vivo"],
    youtubeId: "ksbHNpDBczc",
    thumbnail: ytThumb("ksbHNpDBczc"),
    duration: "—",
    date: "2022-12-26",
    featured: true,
  },

  /* ─────────────── EVENTOS ─────────────── */
  {
    id: "momentum-onetrillion",
    title: "Bolivia — Momentum One Trillion",
    description: "El evento Momentum One Trillion en Bolivia, con la comunidad Bioliffe Moringa.",
    category: "Eventos",
    tags: ["evento", "bolivia", "momentum"],
    youtubeId: "PNB8Rc22yBA",
    thumbnail: ytThumb("PNB8Rc22yBA"),
    duration: "—",
    date: "2023-10-15",
    featured: true,
  },
  {
    id: "encuentro-julio",
    title: "Encuentro de julio",
    description: "Resumen del encuentro de julio con el equipo Bioliffe.",
    category: "Eventos",
    tags: ["evento", "encuentro", "equipo"],
    youtubeId: "VwGJusqnKAk",
    thumbnail: ytThumb("VwGJusqnKAk"),
    duration: "—",
    date: "2026-07-19",
  },

  /* ─────────────── DISTRIBUCIÓN ─────────────── */
  {
    id: "visita-chilca",
    title: "Visita a la planta de Chilca",
    description: "Recorrido por Chilca: producción y distribución de los productos Bioliffe.",
    category: "Distribución",
    tags: ["planta", "producción", "distribución"],
    youtubeId: "1RUBsOVXzi0",
    thumbnail: ytThumb("1RUBsOVXzi0"),
    duration: "—",
    date: "2026-06-25",
    featured: true,
  },
  {
    id: "soporte-onetrillion",
    title: "Soporte One Trillion",
    description:
      "El objetivo detrás de los productos: generar resultados reales en la vida de cada consumidor.",
    category: "Distribución",
    tags: ["soporte", "respaldo", "compañía"],
    youtubeId: "0ZP_cQRpNuA",
    thumbnail: ytThumb("0ZP_cQRpNuA"),
    duration: "—",
    date: "2023-10-15",
  },

  /* ─────────────── VIAJES ─────────────── */
  {
    id: "viaje-cusco",
    title: "Viaje a Cusco",
    description: "El viaje a Cusco con el equipo: uno de los reconocimientos de la comunidad Bioliffe.",
    category: "Viajes",
    tags: ["viaje", "cusco", "reconocimiento"],
    youtubeId: "2XaKMe6kE6w",
    thumbnail: ytThumb("2XaKMe6kE6w"),
    duration: "—",
    date: "2026-07-17",
    featured: true,
  },

  /* ─────────────── CANAL / MARCA ─────────────── */
  {
    id: "bioliffe-paraguay",
    title: "Bioliffe Moringa Paraguay",
    description: "Presentación de Bioliffe Moringa en Paraguay.",
    category: "Canal",
    tags: ["paraguay", "marca", "presentación"],
    youtubeId: "5sIfM7kNdq8",
    thumbnail: ytThumb("5sIfM7kNdq8"),
    duration: "—",
    date: "2026-08-25",
    featured: true,
  },
  {
    id: "bioliffe-2026",
    title: "Bioliffe 2026",
    description: "Lo que viene para Bioliffe Moringa este año.",
    category: "Canal",
    tags: ["marca", "2026"],
    youtubeId: "ww4F8HkUh30",
    thumbnail: ytThumb("ww4F8HkUh30"),
    duration: "—",
    date: "2026-06-25",
  },
  {
    id: "bioliffe-bolivia",
    title: "Bioliffe Moringa Bolivia",
    description: "La comunidad Bioliffe Moringa en Bolivia.",
    category: "Canal",
    tags: ["bolivia", "comunidad"],
    youtubeId: "mjwNWpomAT0",
    thumbnail: ytThumb("mjwNWpomAT0"),
    duration: "—",
    date: "2026-08-12",
  },
];

/*
 * NOTA: el canal tiene además un video de otro autor ("Este es el principal
 * beneficio de la moringa", de Oswaldo Restrepo). No se incluye acá a
 * propósito: es contenido de un tercero y mostrarlo dentro del catálogo
 * oficial lo presentaría como material propio de Bioliffe. Sigue estando en
 * tu canal de YouTube — no se borró nada.
 */

export const videoCategories: VideoCategory[] = [
  "Testimonios",
  "Productos",
  "Moringa",
  "Negocio",
  "Liderazgo",
  "Capacitaciones",
  "Academia",
  "Eventos",
  "Bonos",
  "Distribución",
  "Viajes",
  "Canal",
];

export function getVideosByCategory(category: VideoCategory): VideoEntry[] {
  return videos.filter((v) => v.category === category);
}

export function getFeaturedVideos(): VideoEntry[] {
  return videos.filter((v) => v.featured);
}

export function getVideoById(id: string): VideoEntry | undefined {
  return videos.find((v) => v.id === id);
}
