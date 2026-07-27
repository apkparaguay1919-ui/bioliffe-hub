/**
 * Curación manual de los videos del canal de YouTube que se reflejan en la
 * web. Esto NO afecta a tu canal de YouTube en sí — solo controla qué se
 * muestra reflejado acá en biolifemoringaparaguay.com.
 *
 * Para ocultar del sitio un video que no sea de Bioliffe (viajes
 * personales, pruebas, contenido ajeno al negocio, etc.), agregá una
 * palabra clave en minúsculas a HIDDEN_TITLE_KEYWORDS. Cualquier video cuyo
 * título contenga esa palabra desaparece de la web, pero sigue existiendo
 * normalmente en tu canal de YouTube — no se borra nada.
 */
export const HIDDEN_TITLE_KEYWORDS: string[] = ["cusco", "viaje"];

export function isHiddenVideo(title: string): boolean {
  const lower = title.toLowerCase();
  return HIDDEN_TITLE_KEYWORDS.some((kw) => lower.includes(kw));
}

/** Videos cuyo título contiene "testimonio" se destacan primero en la grilla del canal. */
export function isTestimonialVideo(title: string): boolean {
  return /testimonio/i.test(title);
}
