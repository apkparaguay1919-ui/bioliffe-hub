import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import WhatsAppPopup from "./components/WhatsAppPopup";
import ScrollProgressBar from "./components/effects/ScrollProgressBar";
import BackToTop from "./components/effects/BackToTop";

export const metadata: Metadata = {
  title: "Bioliffe Moringa Paraguay | Productos Naturales Premium",
  description: "Bioliffe Moringa Paraguay — Productos naturales premium con moringa, sistema de negocio y mentoría 24/7. Distribuidor certificado Business For Home. Paraguay, Perú y Latinoamérica.",
  keywords: "moringa, bioliffe, moringa paraguay, productos naturales, moringa oleifera, bienestar, salud natural, negocio moringa, Javier Quintana",
  authors: [{ name: "Javier Quintana Mendoza" }],
  openGraph: {
    title: "Bioliffe Moringa Paraguay",
    description: "Productos naturales premium con moringa. Sistema de negocio y mentoría 24/7.",
    url: "https://www.biolifemoringaparaguay.com",
    siteName: "Bioliffe Moringa Paraguay",
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bioliffe Moringa Paraguay",
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