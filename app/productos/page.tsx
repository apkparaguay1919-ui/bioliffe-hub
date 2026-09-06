import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ProductCatalog from "../components/sections/ProductCatalog";
import LeadCTA from "../components/forms/LeadCTA";
import { products } from "../data/products";
import { SITE } from "../lib/site";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description:
    "Catálogo oficial de productos Bioliffe Moringa en Paraguay: Eficlax Detox y ALKA-M. Ingredientes, beneficios, modo de uso y asesoría por WhatsApp.",
  alternates: { canonical: `${SITE.url}/productos` },
  openGraph: {
    title: "Productos Bioliffe Moringa Paraguay",
    description:
      "Suplementos naturales con moringa. Ingredientes, beneficios y asesoría personalizada por WhatsApp.",
    url: `${SITE.url}/productos`,
    type: "website",
  },
};

/** Datos estructurados: le dice a Google que esto es un listado de productos. */
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Catálogo Bioliffe Moringa Paraguay",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.fullName ?? p.name,
    url: `${SITE.url}/productos/${p.slug}`,
  })),
};

export default function ProductosPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <PageHero
        eyebrow="Catálogo oficial"
        title="Productos Bioliffe Moringa"
        description="Suplementos naturales formulados con moringa. Conocé los ingredientes, los beneficios y cómo incorporarlos a tu rutina."
        image="/images/pexels-chaitaastic-1796727.webp"
      />

      <ProductCatalog />

      {/* Asesoría */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-600">
            ¿No sabés cuál elegir?
          </p>
          <h2 className="mb-6 text-4xl font-black leading-tight text-gray-900">
            Te ayudamos a elegir el producto correcto
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-600">
            Contanos qué estás buscando y te asesoramos sin compromiso: qué
            producto se adapta mejor a tu rutina, cómo usarlo y cómo recibirlo
            en tu ciudad.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <LeadCTA
              label="Hablar con un asesor"
              origen="/productos"
              defaultInterest="Comprar productos"
              title="Hablar con un asesor"
              subtitle="Dejanos tus datos y te escribimos por WhatsApp con la recomendación que mejor se adapte a vos."
              className="rounded-xl bg-green-500 px-10 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-green-400"
            />
            <a
              href={createWhatsAppLink(WA_MESSAGES.producto)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-300 px-10 py-4 text-center text-sm font-bold uppercase tracking-widest text-gray-700 transition-all hover:border-green-400 hover:text-green-700"
            >
              Escribir directo
            </a>
          </div>
          <p className="mx-auto mt-10 max-w-lg text-xs leading-relaxed text-gray-400">
            {SITE.legal.disclaimer}
          </p>
        </div>
      </section>
    </main>
  );
}
