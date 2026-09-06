import type { ReactNode } from "react";

/**
 * Maqueta compartida para las páginas legales (privacidad y términos).
 * Fondo claro y ancho de lectura cómodo — es texto para leer, no para vender.
 */
export default function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="border-b border-gray-100 bg-gray-50 px-6 pb-16 pt-40">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-600">
            {eyebrow}
          </p>
          <h1 className="mb-4 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
            {title}
          </h1>
          <p className="text-sm text-gray-400">Última actualización: {updated}</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div
          className="mx-auto max-w-3xl space-y-10
            [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-gray-900
            [&_p]:leading-relaxed [&_p]:text-gray-600
            [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc [&_li]:leading-relaxed [&_li]:text-gray-600
            [&_a]:font-semibold [&_a]:text-green-600 hover:[&_a]:text-green-700"
        >
          {children}
        </div>
      </section>
    </main>
  );
}
