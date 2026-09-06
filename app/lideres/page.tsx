import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/effects/RevealOnScroll";
import GsapHeading from "../components/effects/GsapHeading";
import { leadershipPillars, mentorshipModules } from "../data/modules";
import EquipoLideres from "../components/sections/EquipoLideres";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

export const metadata: Metadata = {
  title: "Líderes",
  description:
    "Conocé al liderazgo de Bioliffe Moringa Paraguay y el sistema de mentoría que forma nuevos líderes cada mes.",
  openGraph: {
    title: "Líderes",
    description: "El liderazgo y el sistema de mentoría de Bioliffe Moringa Paraguay.",
    url: "https://www.biolifemoringaparaguay.com/lideres",
  },
};

export default function LideresPage() {
  return (
    <main className="text-gray-900 min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="Liderazgo Bioliffe"
        title="Líderes que forman líderes"
        description="Un sistema de mentoría real, pensado para acompañar a cada distribuidor desde el primer paso hasta la construcción de su propio equipo."
        image="/images/pexels-brett-sayles-1002797.webp"
      />

      {/* LIDER PRINCIPAL */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white font-black text-lg">
                      JQ
                    </div>
                    <div>
                      <h3 className="font-black text-white text-xl">Javier Quintana Mendoza</h3>
                      <p className="text-xs text-green-400 font-bold uppercase mt-0.5">Distribuidor Recomendado</p>
                      <p className="text-xs text-white/40 mt-0.5">Paraguay</p>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-6">
                    Fundador de Bioliffe Moringa Paraguay, listado como Recommended Distributor en Business For Home,
                    la plataforma internacional de ventas directas. Lidera un sistema de mentoría activa 24/7 para
                    acompañar a cada nuevo distribuidor.
                  </p>
                  <a
                    href={createWhatsAppLink(WA_MESSAGES.lideres)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center bg-green-500 hover:bg-green-400 text-white font-bold text-sm py-3 px-6 rounded-xl transition-colors"
                  >
                    Contactar a Javier por WhatsApp
                  </a>
                </div>
                <div className="p-10 flex flex-col justify-center bg-white/[0.02]">
                  <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">
                    Respaldo internacional
                  </p>
                  <h4 className="text-white font-black text-2xl mb-3">Business For Home</h4>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    Plataforma internacional número 1 en ventas directas, con más de 650,000 usuarios. Javier está
                    listado como Recommended Distributor.
                  </p>
                  <a
                    href="https://www.businessforhome.org/recommended-distributor/javier-quintana-mendoza/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center border border-green-400/40 text-green-400 hover:bg-green-500/10 font-bold text-sm py-3 px-6 rounded-xl transition-colors"
                  >
                    Ver perfil oficial en BFH
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* EQUIPO — se edita en app/data/lideres.ts */}
      <EquipoLideres />

      {/* PILARES DE LIDERAZGO */}
      <section className="relative py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Lo que forma a un líder</p>
              <GsapHeading className="text-4xl font-black text-white">Pilares de liderazgo Bioliffe</GsapHeading>
              <p className="text-white/50 text-lg max-w-2xl mx-auto mt-4">
                La misma base que guía a cada mentor y distribuidor que crece dentro de la comunidad.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipPillars.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 0.06}>
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-400/30 transition-colors text-center">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h4 className="text-white font-bold text-lg mb-2">{p.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CAMINO A LIDER */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Tu camino</p>
              <GsapHeading className="text-4xl font-black text-white">Cómo se forma un líder Bioliffe</GsapHeading>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <RevealOnScroll delay={0}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 mx-auto rounded-xl bg-green-500/15 text-green-400 flex items-center justify-center font-black mb-4">1</div>
                <h4 className="text-white font-bold mb-2">Formación</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Recorré los {mentorshipModules.length} módulos de mentoría y aprendé el sistema paso a paso.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 mx-auto rounded-xl bg-green-500/15 text-green-400 flex items-center justify-center font-black mb-4">2</div>
                <h4 className="text-white font-bold mb-2">Práctica acompañada</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Aplicá lo aprendido con seguimiento real de tu mentor, 24/7 por WhatsApp.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.16}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 mx-auto rounded-xl bg-green-500/15 text-green-400 flex items-center justify-center font-black mb-4">3</div>
                <h4 className="text-white font-bold mb-2">Duplicación</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Formá tu propio equipo enseñando el mismo sistema que te formó a vos.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto bg-green-700/20 border border-green-500/20 rounded-3xl py-14 px-8">
            <h3 className="text-3xl font-black text-white mb-4">¿Querés convertirte en líder Bioliffe?</h3>
            <p className="text-white/60 mb-8">Empezá tu formación hoy y contá con mentoría real desde el día uno.</p>
            <a
              href={createWhatsAppLink(WA_MESSAGES.lideres)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-green-500 hover:bg-green-400 text-white font-black px-10 py-4 rounded-xl text-sm tracking-widest uppercase transition-all"
            >
              Quiero formarme como líder
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
