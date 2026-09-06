/**
 * CURSOS DE LA ACADEMIA BIOLIFFE
 * ==============================
 *
 * ── CÓMO AGREGAR UN CURSO ─────────────────────────────────────────────
 *   Copiá un bloque, cambiá los datos y guardá. Aparece solo en /academia.
 *
 *   videoId:     ID del video de YouTube donde está la clase. Si lo ponés,
 *                el curso queda disponible y se puede ver en el momento.
 *   disponible:  false = se muestra como "Próximamente" y el botón lleva a
 *                WhatsApp para anotarse. Es honesto: no promete un contenido
 *                que todavía no existe.
 *
 * Los cursos marcados como disponibles apuntan a videos REALES de tu canal.
 * Los otros dos esperan a que grabes el contenido.
 */

import { ytThumb } from "./videos";

export type Nivel = "Inicial" | "Intermedio" | "Avanzado";

export interface Curso {
  id: string;
  titulo: string;
  descripcion: string;
  nivel: Nivel;
  duracion: string;
  icono: string;
  /** Video de YouTube con la clase. */
  videoId?: string;
  /** Portada. Si hay videoId se usa la miniatura de YouTube. */
  imagen?: string;
  disponible: boolean;
}

export const cursos: Curso[] = [
  {
    id: "introduccion-moringa",
    titulo: "Introducción a la moringa",
    descripcion:
      "Qué es la moringa, de dónde viene, por qué se la llama el árbol de la vida y cuáles son sus aportes nutricionales. La base para poder hablar del producto con criterio.",
    nivel: "Inicial",
    duracion: "1 clase",
    icono: "🌿",
    videoId: "hjE1noho1yQ",
    imagen: ytThumb("hjE1noho1yQ"),
    disponible: true,
  },
  {
    id: "productos-bioliffe",
    titulo: "Productos Bioliffe",
    descripcion:
      "Capacitación completa del catálogo: para qué sirve cada producto, qué ingredientes tiene y cómo presentarlo sin prometer lo que no corresponde.",
    nivel: "Inicial",
    duracion: "1 clase",
    icono: "📦",
    videoId: "d8nU93Y9R3I",
    imagen: ytThumb("d8nU93Y9R3I"),
    disponible: true,
  },
  {
    id: "negocio-red-mercadeo",
    titulo: "Cómo funciona una red de mercadeo",
    descripcion:
      "Las variables que hay que mirar antes de elegir una compañía: producto, plan de compensación, respaldo y momento del mercado. Para entender dónde estás parado.",
    nivel: "Intermedio",
    duracion: "1 clase",
    icono: "📊",
    videoId: "8iVh_4Ob6Jw",
    imagen: ytThumb("8iVh_4Ob6Jw"),
    disponible: true,
  },
  {
    id: "liderazgo",
    titulo: "Liderazgo",
    descripcion:
      "¿Un líder nace o se hace? Desarrollo del potencial humano aplicado a la construcción y conducción de tu propio equipo.",
    nivel: "Avanzado",
    duracion: "1 clase",
    icono: "🏆",
    videoId: "f4nA5uisg-A",
    imagen: ytThumb("f4nA5uisg-A"),
    disponible: true,
  },
  {
    id: "desarrollo-personal",
    titulo: "Desarrollo personal y mentalidad",
    descripcion:
      "Emprender o depender: la mentalidad que sostiene el negocio cuando la motivación del principio ya se agotó.",
    nivel: "Inicial",
    duracion: "1 clase",
    icono: "🧠",
    videoId: "opPvpHegeLE",
    imagen: ytThumb("opPvpHegeLE"),
    disponible: true,
  },
  {
    id: "ventas-seguimiento",
    titulo: "Ventas y seguimiento por WhatsApp",
    descripcion:
      "Cómo presentar, hacer seguimiento y cerrar sin presionar. Guiones, tiempos y errores comunes.",
    nivel: "Intermedio",
    duracion: "En preparación",
    icono: "💬",
    disponible: false,
  },
  {
    id: "marketing-digital",
    titulo: "Marketing digital para distribuidores",
    descripcion:
      "Qué publicar, cada cuánto y cómo usar tus redes para atraer clientes sin saturar a tus contactos.",
    nivel: "Intermedio",
    duracion: "En preparación",
    icono: "📱",
    disponible: false,
  },
];

export const cursosDisponibles = cursos.filter((c) => c.disponible);

export function getCursoById(id: string): Curso | undefined {
  return cursos.find((c) => c.id === id);
}
