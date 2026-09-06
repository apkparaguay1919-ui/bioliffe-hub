/** Utilidades de formato para Paraguay (guaraníes, fechas). */

/**
 * Formatea un precio en guaraníes: 180000 → "Gs. 180.000".
 * Si el precio es null todavía no está cargado y se muestra "Consultar precio".
 */
export function formatGs(priceGs: number | null | undefined): string {
  if (priceGs === null || priceGs === undefined) return "Consultar precio";
  return `Gs. ${priceGs.toLocaleString("es-PY")}`;
}

/** true si el producto tiene un precio cargado. */
export function hasPrice(priceGs: number | null | undefined): priceGs is number {
  return typeof priceGs === "number" && priceGs > 0;
}

/** "2026-06-25T05:19:01Z" → "25 de junio de 2026" */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("es-PY", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
