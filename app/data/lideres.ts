/**
 * LÍDERES DE BIOLIFFE MORINGA PARAGUAY
 * ====================================
 *
 * ── CÓMO AGREGAR O COMPLETAR UN LÍDER ─────────────────────────────────
 *   Copiá un bloque, cambiá los datos y guardá. Aparece solo en /lideres.
 *
 *   foto:     ruta a una imagen en /public/images, o la miniatura de su
 *             video de testimonio con ytThumb("IDdelVideo").
 *             Si la dejás vacía se muestran sus iniciales sobre verde.
 *   historia: su recorrido, contado en 2 o 3 frases.
 *   logros:   lista corta de reconocimientos concretos.
 *   redes:    solo las que existan de verdad. Si no tenés el link, no lo pongas.
 *
 * ⚠️ Los campos `historia` de los líderes Diamante están vacíos a propósito:
 * no invento la trayectoria de una persona real. Completalos con lo que
 * ellos mismos te cuenten, o dejalos vacíos — la tarjeta se adapta y muestra
 * igual su video de testimonio, que ya dice bastante.
 */

import { ytThumb } from "./videos";

export interface RedSocial {
  nombre: "YouTube" | "Facebook" | "Instagram" | "TikTok" | "WhatsApp" | "Business For Home";
  url: string;
}

export interface Lider {
  id: string;
  nombre: string;
  rango: string;
  ubicacion: string;
  /** Imagen o miniatura. Vacío = se muestran las iniciales. */
  foto?: string;
  /** 2 o 3 frases sobre su recorrido. Vacío = no se muestra el párrafo. */
  historia?: string;
  logros: string[];
  /** ID del video de YouTube donde cuenta su experiencia. */
  videoId?: string;
  redes: RedSocial[];
  /** El líder principal se muestra destacado arriba de todo. */
  principal?: boolean;
}

export const lideres: Lider[] = [
  {
    id: "javier-quintana",
    nombre: "Javier Quintana Mendoza",
    rango: "Distribuidor Recomendado",
    ubicacion: "Paraguay",
    historia:
      "Fundador de Bioliffe Moringa Paraguay, listado como Recommended Distributor en Business For Home, la plataforma internacional de ventas directas. Lidera un sistema de mentoría activa 24/7 para acompañar a cada nuevo distribuidor desde el primer día.",
    logros: [
      "Recommended Distributor en Business For Home",
      "Mentoría 24/7 para todo el equipo",
      "Distribución en todo el territorio paraguayo",
    ],
    redes: [
      {
        nombre: "Business For Home",
        url: "https://www.businessforhome.org/recommended-distributor/javier-quintana-mendoza/",
      },
    ],
    principal: true,
  },
  {
    id: "katy-vilca",
    nombre: "Katy Vilca",
    rango: "Rango Diamante",
    ubicacion: "Bioliffe Moringa",
    foto: ytThumb("rr21s82syXA"),
    logros: ["Rango Diamante"],
    videoId: "rr21s82syXA",
    redes: [],
  },
  {
    id: "yessenia-benito",
    nombre: "Yessenia Benito",
    rango: "Rango Diamante",
    ubicacion: "Bioliffe Moringa",
    foto: ytThumb("KuaXuo69cFk"),
    logros: ["Rango Diamante"],
    videoId: "KuaXuo69cFk",
    redes: [],
  },
  {
    id: "victor-garcia",
    nombre: "Víctor García",
    rango: "Distribuidor",
    ubicacion: "Bioliffe Moringa",
    foto: ytThumb("SKv79J2QDNg"),
    logros: [],
    videoId: "SKv79J2QDNg",
    redes: [],
  },
  {
    id: "anastacio-de-la-cruz",
    nombre: "Anastacio de la Cruz",
    rango: "Distribuidor",
    ubicacion: "Bioliffe Moringa",
    foto: ytThumb("FVVY8T8U454"),
    logros: [],
    videoId: "FVVY8T8U454",
    redes: [],
  },
  {
    id: "dora-riva",
    nombre: "Dora Riva",
    rango: "Distribuidora",
    ubicacion: "Bioliffe Moringa",
    foto: ytThumb("yNfjJixIZ_I"),
    logros: [],
    videoId: "yNfjJixIZ_I",
    redes: [],
  },
];

export const liderPrincipal = lideres.find((l) => l.principal);
export const equipo = lideres.filter((l) => !l.principal);

/** Iniciales para el avatar cuando no hay foto. */
export function iniciales(nombre: string): string {
  return nombre
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}
