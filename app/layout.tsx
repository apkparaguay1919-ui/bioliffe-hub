import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import WhatsAppPopup from "./components/WhatsAppPopup";
import ScrollProgressBar from "./components/effects/ScrollProgressBar";
import BackToTop from "./components/effects/BackToTop";
import { SITE } from "./lib/site";

export const metadata: Metadata = {
  /**
   * metadataBase resuelve las URLs relativas de Open Graph y Twitter.
   * Sin esto, Next avisaba en cada build y las imágenes para compartir en
   * redes apuntaban a localhost:3000 (o sea: no se veían al compartir).
   */
  metadataBase: new URL(SITE.url),
  title: {
    default: "Bioliffe Moringa Paraguay | Bienestar, productos naturales y emprendimiento",
    /** Cada página pone su título y se le agrega la marca al final. */
    template: "%s | Bioliffe Moringa Paraguay",
  },
  description:
    "Descubrí productos naturales con moringa, formación y oportunidades de negocio con Bioliffe Moringa Paraguay. Asesoría por WhatsApp y mentoría 24/7.",
  keywords: [
    "moringa",
    "bioliffe",
    "moringa paraguay",
    "productos naturales paraguay",
    "moringa oleifera",
    "eficlax detox",
    "alka-m",
    "suplementos naturales",
    "negocio moringa",
    "emprender paraguay",
    "Javier Quintana",
  ],
  authors: [{ name: SITE.advisor.name }],
  creator: SITE.advisor.name,
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Bioliffe Moringa Paraguay",
    description:
      "Productos naturales premium con moringa, formación y sistema de negocio. Mentoría 24/7.",
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bioliffe Moringa Paraguay",
    description:
      "Productos naturales premium con moringa, formación y sistema de negocio. Mentoría 24/7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/** Datos estructurados de la organización — se muestran una sola vez, en el layout. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description:
    "Distribuidor de productos naturales Bioliffe Moringa en Paraguay: suplementos con moringa, formación y sistema de negocio.",
  areaServed: { "@type": "Country", name: "Paraguay" },
  founder: { "@type": "Person", name: SITE.advisor.name },
  sameAs: [SITE.youtube.channelUrl],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PY">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Salto directo al contenido — accesibilidad para teclado y lectores de pantalla */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-green-500 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          Saltar al contenido
        </a>
        <ScrollProgressBar />
        <Navbar />
        <div id="contenido">{children}</div>
        <Footer />
        <WhatsAppFloat />
        <WhatsAppPopup />
        <BackToTop />
      </body>
    </html>
  );
}
