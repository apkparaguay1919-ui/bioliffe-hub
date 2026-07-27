import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/effects/RevealOnScroll";
import GsapHeading from "../components/effects/GsapHeading";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

export const metadata: Metadata = {
  title: "La Moringa | Bioliffe Moringa Paraguay",
  description:
    "Historia, origen, cultivo y nutrientes generales de la moringa (Moringa oleifera). Información educativa general, sin afirmaciones médicas.",
  openGraph: {
    title: "La Moringa | Bioliffe Moringa Paraguay",
    description: "Historia, origen, cultivo y nutrientes generales de la moringa.",
    url: "https://www.biolifemoringaparaguay.com/moringa",
  },
};

const NUTRIENTS = [
  { icon: "🅰️", title: "Vitaminas", desc: "Se le reconoce contenido de vitaminas como A, C y varias del complejo B, según fuentes de nutrición general." },
  { icon: "⚙️", title: "Minerales", desc: "Aporta minerales como calcio, potasio y hierro, comunes en el perfil nutricional de sus hojas." },
  { icon: "🛡️", title: "Antioxidantes", desc: "Contiene compuestos antioxidantes de origen vegetal, como distintos tipos de plantas de hoja verde." },
  { icon: "🌾", title: "Proteína vegetal", desc: "Sus hojas son valoradas por su contenido proteico en comparación con otras plantas de hoja." },
];

export default function MoringaPage() {
  return (
    <main className="text-gray-900 min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="Beneficios de la Moringa"
        title="El árbol de la vida"
        description="Historia, origen, cultivo y nutrientes generales de una de las plantas más estudiadas del mundo."
        image="/images/pexels-jahratreza-37937214.jpg"
      />

      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Historia y origen</p>
            <GsapHeading className="text-4xl font-black text-white mb-6">Una planta con siglos de uso</GsapHeading>
            <p className="text-white/60 text-lg leading-relaxed mb-4">
              La Moringa oleifera es un árbol originario del sur del Himalaya, en el norte de la India, donde se
              utiliza desde hace siglos en la alimentación y en distintas tradiciones locales. Con el tiempo, su
              cultivo se extendió a regiones tropicales y subtropicales de África, Asia y América Latina.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Es conocida popularmente como "árbol de la vida" o "árbol milagroso" por la cantidad de partes
              aprovechables que tiene: hojas, semillas, flores y raíces se usan de distintas formas según la región.
              Esta es información general sobre la planta; no describe ni reemplaza las características específicas
              de ningún producto en particular.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Cultivo</p>
            <GsapHeading className="text-4xl font-black text-white mb-6">Cómo se cultiva</GsapHeading>
            <p className="text-white/60 text-lg leading-relaxed">
              Es un árbol de crecimiento rápido y muy resistente, capaz de adaptarse a suelos pobres y a climas con
              poca disponibilidad de agua. Puede alcanzar varios metros de altura en su primer año y suele
              cosecharse por sus hojas, que se secan y procesan para distintos usos. Esta resistencia es una de las
              razones por las que su cultivo se ha expandido en regiones tropicales como Paraguay.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Perfil nutricional general</p>
              <GsapHeading className="text-4xl font-black text-white">Nutrientes de la moringa</GsapHeading>
              <p className="text-white/50 text-lg max-w-2xl mx-auto mt-4">
                Información general sobre la planta, no específica de los productos Bioliffe.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {NUTRIENTS.map((n, i) => (
              <RevealOnScroll key={n.title} delay={i * 0.08}>
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-400/30 transition-colors">
                  <div className="text-3xl mb-4">{n.icon}</div>
                  <h4 className="text-white font-bold text-lg mb-2">{n.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{n.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/50 text-sm leading-relaxed">
              La información de esta página es general y educativa sobre la planta Moringa oleifera. No constituye
              consejo médico ni implica que los productos Bioliffe curen, traten o prevengan enfermedades. Ante
              cualquier condición de salud, consultá con un profesional.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className="relative py-24 px-6 text-center">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto bg-green-700/20 border border-green-500/20 rounded-3xl py-14 px-8">
            <h3 className="text-3xl font-black text-white mb-4">Conocé los productos con moringa de Bioliffe</h3>
            <p className="text-white/60 mb-8">Fórmulas premium elaboradas con moringa y extractos naturales.</p>
            <a
              href={createWhatsAppLink(WA_MESSAGES.producto)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-green-500 hover:bg-green-400 text-white font-black px-10 py-4 rounded-xl text-sm tracking-widest uppercase transition-all"
            >
              Ver productos
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
