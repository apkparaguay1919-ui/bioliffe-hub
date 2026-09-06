import type { Metadata } from "next";
import LeadForm from "../components/forms/LeadForm";
import { SITE, WHATSAPP_DISPLAY } from "../lib/site";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá al equipo de Bioliffe Moringa Paraguay por WhatsApp. Asesoría sobre productos, formación y oportunidad de negocio en todo el país.",
  alternates: { canonical: `${SITE.url}/contacto` },
  openGraph: {
    title: "Contacto",
    description: "Escribinos por WhatsApp. Respondemos el mismo día.",
    url: `${SITE.url}/contacto`,
    type: "website",
  },
};

const CANALES = [
  {
    icon: "💬",
    title: "WhatsApp",
    desc: "La vía más rápida. Respondemos el mismo día.",
    value: WHATSAPP_DISPLAY,
    href: createWhatsAppLink(WA_MESSAGES.general),
    external: true,
  },
  {
    icon: "🛒",
    title: "Comprar productos",
    desc: "Catálogo, precios y envíos dentro de Paraguay.",
    value: "Ver catálogo",
    href: "/productos",
    external: false,
  },
  {
    icon: "🚀",
    title: "Sumarte al equipo",
    desc: "Formación, mentoría y sistema de negocio.",
    value: "Ver la oportunidad",
    href: "/emprender",
    external: false,
  },
];

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-400">
              Estamos para ayudarte
            </p>
            <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-6xl">
              Hablemos
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/55">
              Contanos qué necesitás y te respondemos por WhatsApp: productos,
              precios, envíos, formación o la oportunidad de negocio.
            </p>
          </div>

          <div className="mb-20 grid gap-6 md:grid-cols-3">
            {CANALES.map((c) => (
              <a
                key={c.title}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:-translate-y-1 hover:border-green-400/40"
              >
                <div className="mb-5 text-4xl" aria-hidden="true">
                  {c.icon}
                </div>
                <h2 className="mb-2 text-xl font-black text-white">{c.title}</h2>
                <p className="mb-5 text-sm leading-relaxed text-white/45">{c.desc}</p>
                <span className="text-sm font-bold text-green-400">{c.value} →</span>
              </a>
            ))}
          </div>

          <div className="grid items-start gap-14 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-black leading-tight text-white">
                Dejanos tus datos
              </h2>
              <p className="mb-8 leading-relaxed text-white/55">
                Completá el formulario y se abre WhatsApp con tu consulta ya
                escrita. Así no tenés que explicar todo de nuevo.
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-green-400">
                  Tu asesor
                </p>
                <p className="text-lg font-black text-white">{SITE.advisor.name}</p>
                <p className="text-sm text-white/45">
                  {SITE.advisor.role} · {SITE.advisor.location}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <LeadForm origen="/contacto" submitLabel="Enviar consulta" tone="dark" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
