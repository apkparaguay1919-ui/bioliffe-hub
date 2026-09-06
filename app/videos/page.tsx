import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import VideoLibrary from "../components/sections/VideoLibrary";
import LeadCTA from "../components/forms/LeadCTA";
import { videos, videoCategories, ytUrl } from "../data/videos";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Centro de conocimiento: videos y capacitaciones",
  description:
    "Todo el canal de Bioliffe Moringa Paraguay en un solo lugar: testimonios reales, capacitaciones de producto, presentaciones de negocio, moringa, eventos y bonos.",
  alternates: { canonical: `${SITE.url}/videos` },
  openGraph: {
    title: "Centro de conocimiento Bioliffe",
    description:
      "Testimonios, capacitaciones, presentaciones de negocio y todo el contenido del canal, ordenado por categoría.",
    url: `${SITE.url}/videos`,
    type: "website",
  },
};

/** Datos estructurados: cada video como VideoObject para que Google los indexe. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Centro de conocimiento Bioliffe Moringa Paraguay",
  numberOfItems: videos.length,
  itemListElement: videos
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

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Centro de conocimiento"
        title="Todo nuestro canal, en un solo lugar"
        description={`${videos.length} videos ordenados por categoría: testimonios reales, capacitaciones de producto, presentaciones de negocio, moringa, eventos y bonos.`}
        image="/images/pexels-mehul-patel-829985-18697894.webp"
      />

      {/* Categorías en texto — ayuda a Google a entender de qué trata la página */}
      <section className="bg-[#0a0a0a] px-6 pt-6">
        <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-white/30">
          {videoCategories.join(" · ")}
        </p>
      </section>

      <VideoLibrary />

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-5 text-4xl font-black leading-tight text-white">
            ¿Viste algo que te interesó?
          </h2>
          <p className="mb-10 leading-relaxed text-white/55">
            Escribinos y te contamos más sobre el producto, la formación o la
            oportunidad de negocio que viste en el video.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <LeadCTA
              label="Quiero más información"
              origen="/videos"
              className="rounded-xl bg-green-500 px-10 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-green-400"
            />
            <a
              href={SITE.youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/25 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
            >
              Ir al canal de YouTube
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
