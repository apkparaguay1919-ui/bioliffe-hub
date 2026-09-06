import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import WhatsAppPopup from "./components/WhatsAppPopup";
import ScrollProgressBar from "./components/effects/ScrollProgressBar";
import BackToTop from "./components/effects/BackToTop";

export const metadata: Metadata = {
  title: "Bioliffe Moringa Perú | Productos Naturales Premium",
  description: "Bioliffe Moringa Perú — Productos naturales premium con moringa, sistema de negocio y mentoría 24/7. Distribuidor certificado Business For Home. Perú, Paraguay y Latinoamérica.",
  keywords: "moringa, bioliffe, moringa peru, productos naturales, moringa oleifera, bienestar, salud natural, negocio moringa, Javier Quintana",
  authors: [{ name: "Javier Quintana Mendoza" }],
  openGraph: {
    title: "Bioliffe Moringa Perú",
    description: "Productos naturales premium con moringa. Sistema de negocio y mentoría 24/7.",
    url: "https://www.bioliffemoringaperu.com",
    siteName: "Bioliffe Moringa Perú",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bioliffe Moringa Perú",
    description: "Productos naturales premium con moringa. Sistema de negocio y mentoría 24/7.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ScrollProgressBar />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <WhatsAppPopup />
        <BackToTop />
      </body>
    </html>
  );
}