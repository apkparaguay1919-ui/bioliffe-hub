import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import DownloadsGrid from "../components/sections/DownloadsGrid";
import { downloads } from "../data/downloads";

export const metadata: Metadata = {
  title: "Centro de Descargas | Bioliffe Moringa Perú",
  description: "Catálogos, presentaciones, plan de negocio y material de apoyo para distribuidores Bioliffe Moringa Perú.",
  openGraph: {
    title: "Centro de Descargas | Bioliffe Moringa Perú",
    description: "Catálogos, presentaciones y material de apoyo para distribuidores.",
    url: "https://www.bioliffemoringaperu.com/descargas",
  },
};

export default function DescargasPage() {
  return (
    <main className="text-gray-900 min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="Centro de Descargas"
        title="Material listo para usar"
        description="Catálogos, presentaciones, plan de negocio y recursos de apoyo para tu día a día como distribuidor."
        image="/images/pexels-mehul-patel-829985-18697894.jpg"
      />
      <DownloadsGrid items={downloads} />
    </main>
  );
}
