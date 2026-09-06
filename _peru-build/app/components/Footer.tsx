import { Facebook, Instagram, Music2, Send, Youtube } from "lucide-react";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";
import { YOUTUBE_CHANNEL_SEARCH_URL } from "../data/videos";

// TODO: reemplazar estos enlaces de redes por las URLs exactas de cada perfil
// oficial de Bioliffe Moringa Perú apenas estén disponibles. Mientras
// tanto usan búsquedas/enlaces genéricos para no quedar nunca rotos.
const SOCIAL_LINKS = [
  { icon: Youtube, label: "YouTube", href: YOUTUBE_CHANNEL_SEARCH_URL },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/search/top?q=Bioliffe%20Moringa%20Peru" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/explore/search/keyword/?q=Bioliffe%20Moringa%20Peru" },
  { icon: Music2, label: "TikTok", href: "https://www.tiktok.com/search?q=Bioliffe%20Moringa%20Peru" },
  { icon: Send, label: "Telegram", href: "https://t.me/s/BioliffeMoringaPeru" },
];

const FOOTER_COLUMNS: { title: string; links: { label: string; href: string; soon?: boolean }[] }[] = [
  {
    title: "La empresa",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "La Moringa", href: "/moringa" },
      { label: "Centro de descargas", href: "/descargas" },
    ],
  },
  {
    title: "Productos",
    links: [
      { label: "Catálogo completo", href: "/#productos" },
      { label: "Cómo comprar", href: "/#productos" },
      { label: "Preguntas de producto", href: "/#faq" },
    ],
  },
  {
    title: "Negocio",
    links: [
      { label: "Oportunidad de negocio", href: "/#negocio" },
      { label: "Mentoría", href: "/#mentoria" },
      { label: "Academia Bioliffe", href: "/academia" },
      { label: "Liderazgo", href: "/#liderazgo" },
      { label: "Líderes", href: "/lideres" },
    ],
  },
  {
    title: "Contenido",
    links: [
      { label: "Videos", href: "/#video" },
      { label: "Testimonios", href: "/#testimonios" },
      { label: "Eventos", href: "/#eventos" },
      { label: "Blog", href: "/blog" },
      { label: "Preguntas Frecuentes", href: "/#faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-green-400 py-16 px-6 border-t border-green-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-3">Bioliffe Moringa Perú</h3>
            <p className="text-green-500 text-sm leading-relaxed mb-6">
              Plataforma de bienestar, formacion y oportunidad de negocio.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-green-950/60 border border-green-900 flex items-center justify-center text-green-400 hover:text-white hover:bg-green-700 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-bold mb-3">{col.title}</h3>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-yellow-400 inline-flex items-center gap-2">
                      {link.label}
                      {link.soon && (
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#c9a84c]/80 border border-[#c9a84c]/30 rounded-full px-1.5 py-0.5">
                          Pronto
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-white font-bold mb-3">Contacto</h3>
            <a
              href={createWhatsAppLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-full text-sm transition-colors"
            >
              WhatsApp
            </a>
            <ul className="space-y-2 text-sm mt-4">
              <li><a href="/#negocio" className="hover:text-yellow-400">Distribuidores</a></li>
              <li><a href="/#faq" className="hover:text-yellow-400">Soporte</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-green-700 text-xs max-w-3xl text-center md:text-left">
            Producto de bienestar. No sustituye diagnostico ni tratamiento medico. Resultados pueden variar. 2026 Bioliffe Moringa Perú.
          </p>
          <div className="flex gap-5 text-green-700 text-xs">
            <a href="/#faq" className="hover:text-yellow-400">Políticas de privacidad</a>
            <a href="/#faq" className="hover:text-yellow-400">Términos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
