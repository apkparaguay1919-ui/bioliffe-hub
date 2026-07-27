// Catálogo de video de Bioliffe Moringa Paraguay.
//
// Este archivo alimenta la Movie Ribbon, la galería de videos, la sección de
// testimonios en video y la Academia. Está diseñado para conectarse
// automáticamente al canal de YouTube de Bioliffe apenas se configuren las
// variables de entorno YOUTUBE_API_KEY y YOUTUBE_CHANNEL_ID (ver app/lib/youtube.ts).
//
// Mientras esa conexión no esté activa, se usa este catálogo de respaldo con
// contenido real (el video de producto ya disponible en /videos/producto.mp4)
// y entradas "próximamente" para las categorías que se completarán
// automáticamente desde el canal — así ninguna tarjeta enlaza a un video que
// no es de Bioliffe.

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
  /** ID de YouTube si el video ya está publicado y confirmado. */
  youtubeId?: string;
  /** Video local propio (mp4 ya presente en /public/videos). */
  localSrc?: string;
  /** Miniatura grande para la tarjeta. */
  thumbnail: string;
  duration: string;
  date: string;
  /** true = todavía no conectado a un video real, muestra estado "próximamente". */
  comingSoon?: boolean;
}

export const YOUTUBE_CHANNEL_SEARCH_URL =
  "https://www.youtube.com/results?search_query=Bioliffe+Moringa+Paraguay";

export const videos: VideoEntry[] = [
  {
    id: "producto-1",
    title: "Descubre Bioliffe Paraguay",
    description:
      "Conoce de cerca la calidad y el cuidado detrás de cada producto Bioliffe Moringa, directamente desde nuestro contenido oficial.",
    category: "Productos",
    tags: ["moringa", "productos premium", "bienestar"],
    localSrc: "/videos/producto.mp4",
    thumbnail: "/images/eficlax.jpeg",
    duration: "—",
    date: "2026",
  },
  {
    id: "moringa-1",
    title: "El árbol de la vida: la moringa",
    description:
      "Origen, cultivo y nutrientes de la moringa, la planta base de toda la línea Bioliffe.",
    category: "Moringa",
    tags: ["moringa", "cultivo", "nutrientes"],
    thumbnail: "/images/pexels-jahratreza-37937214.jpg",
    duration: "—",
    date: "2026",
    comingSoon: true,
  },
  {
    id: "testimonio-1",
    title: "Testimonios de clientes Bioliffe",
    description: "Experiencias reales de clientes que incorporaron Bioliffe a su rutina diaria.",
    category: "Testimonios",
    tags: ["clientes", "experiencias", "resultados"],
    thumbnail: "/images/pexels-beckesbestphotos-2782969.jpg",
    duration: "—",
    date: "2026",
    comingSoon: true,
  },
  {
    id: "distribuidor-1",
    title: "Testimonios de distribuidores",
    description: "Distribuidores Bioliffe cuentan cómo construyeron su negocio con el sistema.",
    category: "Distribución",
    tags: ["distribuidores", "negocio", "duplicación"],
    thumbnail: "/images/pexels-allphoto-bangkok-1628521-13612693.jpg",
    duration: "—",
    date: "2026",
    comingSoon: true,
  },
  {
    id: "bono-1",
    title: "Bonos y reconocimientos Bioliffe",
    description: "Conoce los bonos y reconocimientos alcanzados por líderes de la red.",
    category: "Bonos",
    tags: ["bonos", "reconocimientos", "logros"],
    thumbnail: "/images/pexels-ian-panelo-4884823.jpg",
    duration: "—",
    date: "2026",
    comingSoon: true,
  },
  {
    id: "viaje-1",
    title: "Viajes de la comunidad Bioliffe",
    description: "Los viajes y experiencias que vive la comunidad Bioliffe al alcanzar sus metas.",
    category: "Viajes",
    tags: ["viajes", "comunidad", "metas"],
    thumbnail: "/images/pexels-wanderinglenses-32198643.jpg",
    duration: "—",
    date: "2026",
    comingSoon: true,
  },
  {
    id: "evento-1",
    title: "Eventos Bioliffe Paraguay",
    description: "Resumen de los eventos presenciales y encuentros de la comunidad Bioliffe.",
    category: "Eventos",
    tags: ["eventos", "encuentros", "comunidad"],
    thumbnail: "/images/pexels-jahratreza-37911594.jpg",
    duration: "—",
    date: "2026",
    comingSoon: true,
  },
  {
    id: "liderazgo-1",
    title: "Liderazgo Bioliffe",
    description: "Historias y aprendizajes de los líderes que guían a la comunidad Bioliffe.",
    category: "Liderazgo",
    tags: ["liderazgo", "mentoría", "equipo"],
    thumbnail: "/images/pexels-bernahanim_-1173268160-32664637.jpg",
    duration: "—",
    date: "2026",
    comingSoon: true,
  },
  {
    id: "negocio-1",
    title: "Oportunidad de negocio Bioliffe",
    description: "Cómo funciona el sistema de negocio, el plan de compensación y la duplicación.",
    category: "Negocio",
    tags: ["negocio", "plan de compensación", "duplicación"],
    thumbnail: "/images/pexels-chaitaastic-1796727.jpg",
    duration: "—",
    date: "2026",
    comingSoon: true,
  },
  {
    id: "capacitacion-1",
    title: "Capacitación de productos",
    description: "Sesión de capacitación detallada sobre el catálogo completo de productos.",
    category: "Capacitaciones",
    tags: ["capacitación", "productos", "formación"],
    thumbnail: "/images/pexels-mehul-patel-829985-18697894.jpg",
    duration: "—",
    date: "2026",
    comingSoon: true,
  },
  {
    id: "academia-1",
    title: "Academia Bioliffe: primeros pasos",
    description: "Curso introductorio de la Academia Bioliffe para nuevos distribuidores.",
    category: "Academia",
    tags: ["academia", "curso", "mentoría"],
    thumbnail: "/images/pexels-anibal-pabon-253091036-13834221.jpg",
    duration: "—",
    date: "2026",
    comingSoon: true,
  },
];

export const videoCategories: VideoCategory[] = [
  "Testimonios",
  "Productos",
  "Eventos",
  "Viajes",
  "Bonos",
  "Liderazgo",
  "Moringa",
  "Negocio",
  "Capacitaciones",
  "Academia",
  "Distribución",
];

export function getVideosByCategory(category: VideoCategory): VideoEntry[] {
  return videos.filter((v) => v.category === category);
}
