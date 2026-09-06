import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import TestimonialGallery from "../components/sections/TestimonialGallery";
import LeadCTA from "../components/forms/LeadCTA";
import { getVideosByCategory, ytUrl } from "../data/videos";
import { SITE } from "../lib/site";

const testimonioVideos = getVideosByCategory("Testimonios");

export const metadata: Metadata = {
  title: "Testimonios reales",
  description:
    "Testimonios en video de la comunidad Bioliffe Moringa: distribuidores, líderes rango Diamante y clientes que cuentan su experiencia con los productos y el sistema.",
  alternates: { canonical: `${SITE.url}/testimonios` },
  openGraph: {
    title: "Testimonios reales",
    description:
      "Historias en video de distribuidores, líderes y clientes de la comunidad Bioliffe Moringa.",
    url: `${SITE.url}/testimonios`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Testimonios Bioliffe Moringa Paraguay",
  itemListElement: testimonioVideos
    .filter((v) => v.youtubeId)
    .map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        name: v.title,
        description: v.description,
        thumbnailUrl: v.thumbnail,
        uploadDate: v.date,
        contentUrl: ytUrl(v.youtubeId as string),
        embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
      },
    })),
};

export default function TestimoniosPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Resultados reales"
        title="Historias de nuestra comunidad"
        description="Distribuidores, líderes rango Diamante y clientes contando en primera persona cómo les fue con Bioliffe Moringa."
        image="/images/pexels-beckesbestphotos-2782969.webp"
      />

      <TestimonialGallery />

      <section className="border-t border-white/10 px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-5 text-4xl font-black leading-tight text-white">
            ¿Querés escribir la próxima historia?
          </h2>
          <p className="mb-10 leading-relaxed text-white/55">
            Empezá con acompañamiento desde el primer día: productos, formación
            y un equipo que responde.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <LeadCTA
              label="Quiero empezar"
              origen="/testimonios"
              className="rounded-xl bg-green-500 px-10 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-green-400"
            />
            <a
              href="/emprender"
              className="rounded-xl border border-white/25 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
            >
              Ver la oportunidad
            </a>
          </div>
          <p className="mx-auto mt-12 max-w-xl text-xs leading-relaxed text-white/30">
            {SITE.legal.disclaimer} {SITE.legal.incomeDisclaimer}
          </p>
        </div>
      </section>
    </main>
  );
}
