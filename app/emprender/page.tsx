import type { Metadata } from "next";
import LeadForm from "../components/forms/LeadForm";
import YouTubeEmbed from "../components/video/YouTubeEmbed";
import RevealOnScroll from "../components/effects/RevealOnScroll";
import { SITE } from "../lib/site";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

export const metadata: Metadata = {
  title: "Emprender: oportunidad de negocio",
  description:
    "Construí tu negocio de bienestar en Paraguay con productos naturales, formación y mentoría 24/7. Conocé el sistema Bioliffe paso a paso.",
  alternates: { canonical: `${SITE.url}/emprender` },
  openGraph: {
    title: "Emprender con Bioliffe Moringa Paraguay",
    description:
      "Un sistema acompañado: productos premium, formación constante y comunidad. Empezá hoy.",
    url: `${SITE.url}/emprender`,
    type: "website",
  },
};

const RAZONES = [
  {
    icon: "🌿",
    title: "Producto premium",
    desc: "Suplementos naturales formulados con moringa, con respaldo de marca y una historia real detrás de cada fórmula.",
  },
  {
    icon: "🧭",
    title: "Sistema probado",
    desc: "No improvisás. Recibís un método claro de prospección, presentación, seguimiento y cierre, listo para duplicar.",
  },
  {
    icon: "🎓",
    title: "Capacitación constante",
    desc: "Módulos de formación, capacitaciones semanales por Zoom y material listo para publicar en tus redes.",
  },
  {
    icon: "🤝",
    title: "Comunidad",
    desc: "Un equipo activo con mentoría 24/7 por WhatsApp. Nunca arrancás solo ni te quedás trabado sin respuesta.",
  },
];

const PASOS = [
  {
    n: "01",
    title: "Registrate",
    desc: "Te ayudamos con el alta y elegís el paquete de inicio que se adapta a tu presupuesto y a tus objetivos.",
  },
  {
    n: "02",
    title: "Aprendé",
    desc: "Entrás a la Academia: producto, mentalidad, ventas sin presionar y seguimiento por WhatsApp.",
  },
  {
    n: "03",
    title: "Compartí",
    desc: "Empezás con tu círculo cercano usando los guiones y las piezas gráficas que te damos hechas.",
  },
  {
    n: "04",
    title: "Crecé",
    desc: "Formás tu propio equipo y duplicás el sistema. Tu mentor te acompaña en cada etapa.",
  },
];

export default function EmprenderPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-28 pt-40">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/pexels-allphoto-bangkok-1628521-13612693.webp" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-green-400">
            Oportunidad de negocio
          </p>
          <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
            Construí tu propio negocio de bienestar con Bioliffe
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-white/70">
            Un sistema acompañado, con productos, formación y comunidad.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#formulario"
              className="rounded-xl bg-green-500 px-10 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-green-400"
            >
              Quiero empezar
            </a>
            <a
              href={createWhatsAppLink(WA_MESSAGES.negocio)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/30 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* POR QUÉ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-600">
              Por qué con nosotros
            </p>
            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              ¿Por qué emprender con Bioliffe?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {RAZONES.map((r) => (
              <RevealOnScroll key={r.title}>
                <div className="h-full rounded-3xl border border-gray-100 bg-white p-8 transition-all hover:border-green-200 hover:shadow-lg">
                  <div className="mb-5 text-4xl" aria-hidden="true">
                    {r.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-black text-gray-900">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{r.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO DE PRESENTACIÓN */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-green-600">
            Presentación oficial
          </p>
          <h2 className="mb-10 text-center text-4xl font-black text-gray-900">
            Mirá la presentación de negocio
          </h2>
          <YouTubeEmbed
            videoId="ZhGc2zTDPnU"
            title="Presentación de negocio Bioliffe Moringa Paraguay"
          />
        </div>
      </section>

      {/* PROCESO */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-600">
              El proceso
            </p>
            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Cuatro pasos, sin vueltas
            </h2>
          </div>

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PASOS.map((p) => (
              <li key={p.n}>
                <RevealOnScroll>
                  <div className="group relative h-full rounded-3xl border border-gray-100 bg-white p-8 transition-all hover:shadow-lg">
                    <span
                      className="absolute right-6 top-6 text-6xl font-black text-gray-100 transition-colors group-hover:text-green-50"
                      aria-hidden="true"
                    >
                      {p.n}
                    </span>
                    <h3 className="relative mb-3 text-xl font-black text-gray-900">{p.title}</h3>
                    <p className="relative text-sm leading-relaxed text-gray-500">{p.desc}</p>
                  </div>
                </RevealOnScroll>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="formulario" className="scroll-mt-24 bg-[#0b0b0b] px-6 py-24">
        <div className="mx-auto grid max-w-5xl items-start gap-14 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-400">
              Empezá hoy
            </p>
            <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-5xl">
              Contanos de vos y armamos tu arranque
            </h2>
            <p className="mb-10 leading-relaxed text-white/60">
              Completá el formulario y te escribimos por WhatsApp con el plan de
              inicio, los paquetes disponibles y la primera capacitación. Sin
              compromiso y sin costo.
            </p>

            <ul className="space-y-4">
              {[
                "Respuesta el mismo día por WhatsApp",
                "Te explicamos el plan de compensación completo",
                "Acceso a la Academia desde el primer día",
                "Mentoría 24/7 con tu equipo",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-[11px] font-black text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <LeadForm
              withExperience
              defaultInterest="Emprender un negocio"
              origen="/emprender"
              submitLabel="Quiero empezar"
              tone="dark"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-gray-400">
          {SITE.legal.incomeDisclaimer} {SITE.legal.disclaimer}
        </p>
      </section>
    </main>
  );
}
