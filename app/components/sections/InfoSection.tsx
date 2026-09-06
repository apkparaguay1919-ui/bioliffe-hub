import RevealOnScroll from "../effects/RevealOnScroll";
import LeadCTA from "../forms/LeadCTA";

/**
 * Sección "Quiero información ahora" de la home.
 *
 * Es el aterrizaje del botón principal del Hero: tres puertas de entrada
 * (salud, formación, emprendimiento) y un único llamado a la acción que
 * abre el formulario de captación.
 */

const TARJETAS = [
  {
    icon: "🌿",
    eyebrow: "Salud y bienestar",
    title: "Productos naturales premium",
    text: "Conocé los beneficios de productos naturales elaborados con ingredientes seleccionados para acompañar un estilo de vida saludable.",
    href: "/productos",
    cta: "Ver productos",
  },
  {
    icon: "🎓",
    eyebrow: "Formación",
    title: "Academia Bioliffe",
    text: "Aprendé mediante nuestra academia con contenidos exclusivos, capacitaciones y acompañamiento permanente.",
    href: "/academia",
    cta: "Entrar a la Academia",
  },
  {
    icon: "🚀",
    eyebrow: "Emprendimiento",
    title: "Sistema de negocio",
    text: "Construí una oportunidad comercial con un sistema diseñado para personas que buscan independencia.",
    href: "/emprender",
    cta: "Ver la oportunidad",
  },
];

export default function InfoSection() {
  return (
    <section id="informacion" className="scroll-mt-24 bg-white px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-green-600">
            Quiero información ahora
          </p>
          <h2 className="text-4xl font-black leading-tight text-gray-900 md:text-5xl">
            Descubrí cómo Bioliffe Moringa puede transformar tu bienestar y abrir
            nuevas oportunidades
          </h2>
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {TARJETAS.map((t) => (
            <RevealOnScroll key={t.eyebrow}>
              <article className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-10 transition-all duration-300 hover:border-green-200 hover:shadow-xl">
                <div className="mb-6 text-5xl" aria-hidden="true">
                  {t.icon}
                </div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-green-600">
                  {t.eyebrow}
                </p>
                <h3 className="mb-4 text-2xl font-black text-gray-900">{t.title}</h3>
                <p className="mb-8 flex-1 text-sm leading-relaxed text-gray-500">{t.text}</p>
                <a
                  href={t.href}
                  className="text-sm font-bold text-green-600 transition-colors hover:text-green-700"
                >
                  {t.cta} →
                </a>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <div className="rounded-3xl bg-[#0b0b0b] px-8 py-14 text-center">
          <h3 className="mb-4 text-3xl font-black leading-tight text-white md:text-4xl">
            ¿Preferís que te lo expliquemos?
          </h3>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-white/60">
            Dejanos tus datos y un asesor te escribe por WhatsApp con la
            información que necesites: productos, precios, formación o negocio.
          </p>
          <LeadCTA
            label="Hablar con un asesor"
            origen="/#informacion"
            className="rounded-xl bg-green-500 px-12 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-green-400 hover:shadow-[0_0_30px_4px_rgba(34,197,94,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
