import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/effects/RevealOnScroll";
import GsapHeading from "../components/effects/GsapHeading";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé la historia, misión, visión y valores de Bioliffe Moringa Paraguay: bienestar, liderazgo y oportunidad de negocio.",
  openGraph: {
    title: "Nosotros",
    description: "Historia, misión, visión y valores de Bioliffe Moringa Paraguay.",
    url: "https://www.biolifemoringaparaguay.com/nosotros",
  },
};

const VALUES = [
  { icon: "🌿", title: "Naturalidad", desc: "Creemos en fórmulas basadas en ingredientes naturales, empezando por la moringa." },
  { icon: "🤝", title: "Comunidad", desc: "Construimos junto a distribuidores y clientes, no solo para ellos." },
  { icon: "📚", title: "Formación constante", desc: "La mentoría y el aprendizaje continuo son parte central de nuestro sistema." },
  { icon: "🎯", title: "Constancia", desc: "Creemos en resultados que se construyen con disciplina y tiempo, no en atajos." },
  { icon: "🌎", title: "Visión regional", desc: "Pensamos en Paraguay, Perú y Latinoamérica como una sola comunidad en crecimiento." },
  { icon: "💚", title: "Transparencia", desc: "Comunicamos con honestidad lo que nuestros productos son y lo que no son." },
];

const TIMELINE = [
  {
    year: "Nov 2025",
    title: "Reconocimiento internacional",
    desc: "Javier Quintana Mendoza es listado como Recommended Distributor en Business For Home, la plataforma internacional de ventas directas.",
  },
  {
    year: "2025 – 2026",
    title: "Crecimiento de la comunidad",
    desc: "El sistema de mentoría 24/7 y los módulos de formación se consolidan para acompañar a nuevos distribuidores desde el primer día.",
  },
  {
    year: "2026",
    title: "Bioliffe Moringa Paraguay Hub",
    desc: "Lanzamiento de esta plataforma digital: productos, formación, videos y oportunidad de negocio en un solo lugar.",
  },
  {
    year: "Hoy",
    title: "Expansión continua",
    desc: "Seguimos sumando distribuidores, productos y contenido para la comunidad en Paraguay, Perú y el resto de Latinoamérica.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="text-gray-900 min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="Bioliffe Moringa Paraguay"
        title="Nuestra historia"
        description="Bienestar, liderazgo y oportunidad — la misión detrás de cada producto y cada mentoría."
        image="/images/pexels-allphoto-bangkok-1628521-13927802.webp"
      />

      {/* HISTORIA */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Nuestra historia</p>
            <GsapHeading className="text-4xl font-black text-white mb-6">De una idea a una comunidad</GsapHeading>
            <p className="text-white/60 text-lg leading-relaxed mb-4">
              Bioliffe Moringa Paraguay nace de la convicción de que el bienestar y la oportunidad de negocio pueden
              ir de la mano. Combinamos productos premium elaborados con moringa con un sistema de mentoría pensado
              para acompañar a cada distribuidor desde el primer contacto hasta la construcción de su propio equipo.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Hoy somos una comunidad activa en Paraguay y Perú, liderada por Javier Quintana Mendoza, distribuidor
              reconocido internacionalmente por Business For Home, y seguimos creciendo con la misma base: productos
              cuidados, formación constante y acompañamiento real.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* MISION / VISION / VALORES */}
      <section className="relative py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <RevealOnScroll>
            <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-10">
              <div className="text-4xl mb-5">🎯</div>
              <h3 className="text-white font-black text-2xl mb-4">Misión</h3>
              <p className="text-white/60 leading-relaxed">
                Acompañar a personas y familias a mejorar sus hábitos de bienestar y a construir una oportunidad de
                negocio real, con productos de calidad y mentoría constante.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-10">
              <div className="text-4xl mb-5">🔭</div>
              <h3 className="text-white font-black text-2xl mb-4">Visión</h3>
              <p className="text-white/60 leading-relaxed">
                Ser la comunidad de bienestar y negocio de referencia en Paraguay y Latinoamérica, reconocida por la
                calidad de sus productos y la solidez de su sistema de formación.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-10">
              <div className="text-4xl mb-5">🌟</div>
              <h3 className="text-white font-black text-2xl mb-4">Objetivos</h3>
              <p className="text-white/60 leading-relaxed">
                Expandir la distribución en la región, fortalecer la Academia Bioliffe y seguir invirtiendo en
                contenido y mentoría para que cada distribuidor tenga las herramientas para crecer.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* VALORES */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Lo que nos guía</p>
              <GsapHeading className="text-4xl font-black text-white">Nuestros valores</GsapHeading>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.06}>
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-400/30 transition-colors">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h4 className="text-white font-bold text-lg mb-2">{v.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Línea de tiempo</p>
              <GsapHeading className="text-4xl font-black text-white">Nuestro camino</GsapHeading>
            </div>
          </RevealOnScroll>
          <div className="relative pl-8 border-l border-white/10 space-y-12">
            {TIMELINE.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.08} direction="left">
                <div className="relative">
                  <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-500/20" />
                  <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">{item.year}</p>
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto bg-green-700/20 border border-green-500/20 rounded-3xl py-14 px-8">
            <h3 className="text-3xl font-black text-white mb-4">¿Querés ser parte de esta historia?</h3>
            <p className="text-white/60 mb-8">Sumate a la comunidad Bioliffe Moringa Paraguay hoy mismo.</p>
            <a
              href={createWhatsAppLink(WA_MESSAGES.negocio)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-green-500 hover:bg-green-400 text-white font-black px-10 py-4 rounded-xl text-sm tracking-widest uppercase transition-all"
            >
              Quiero emprender
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
