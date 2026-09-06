import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/effects/RevealOnScroll";
import GsapHeading from "../components/effects/GsapHeading";
import AnimatedCounter from "../components/effects/AnimatedCounter";
import { mentorshipModules } from "../data/modules";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

export const metadata: Metadata = {
  title: "Academia Bioliffe | Bioliffe Moringa Perú",
  description:
    "Academia Bioliffe: módulos de formación en mentalidad, ventas, seguimiento y liderazgo para distribuidores de Bioliffe Moringa Perú.",
  openGraph: {
    title: "Academia Bioliffe | Bioliffe Moringa Perú",
    description: "Módulos de formación para distribuidores Bioliffe Moringa Perú.",
    url: "https://www.bioliffemoringaperu.com/academia",
  },
};

const TRACKS = [
  {
    name: "Fundamentos",
    desc: "La base para empezar con mentalidad y dirección correcta.",
    moduleIds: [1, 2],
  },
  {
    name: "Ventas y seguimiento",
    desc: "Cómo presentar productos y hacer seguimiento sin presionar.",
    moduleIds: [3, 4, 6],
  },
  {
    name: "Redes y equipo",
    desc: "Contenido, formación de equipo y duplicación del sistema.",
    moduleIds: [5, 7, 8],
  },
];

const STATS = [
  { value: mentorshipModules.length, suffix: "", label: "Módulos" },
  { value: 24, suffix: "/7", label: "Mentoría" },
  { value: 100, suffix: "%", label: "Práctico" },
  { value: 1, suffix: "er día", label: "Acceso desde" },
];

export default function AcademiaPage() {
  return (
    <main className="text-gray-900 min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="Academia Bioliffe"
        title="Formación real para crecer"
        description="Módulos prácticos, pensados por y para distribuidores, con acompañamiento constante de tu mentor."
        image="/images/pexels-chaitaastic-1796727.jpg"
      />

      {/* STATS */}
      <section className="relative py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <RevealOnScroll key={s.label}>
              <AnimatedCounter value={s.value} suffix={s.suffix} className="text-4xl font-black text-green-400" />
              <p className="text-white/40 text-xs mt-2 tracking-widest uppercase">{s.label}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* TRACKS */}
      {TRACKS.map((track, ti) => (
        <section key={track.name} className={`relative py-24 px-6 ${ti % 2 === 1 ? "bg-white/[0.02] border-y border-white/5" : ""}`}>
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="mb-12">
                <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-3">Track {ti + 1}</p>
                <GsapHeading className="text-3xl md:text-4xl font-black text-white mb-3">{track.name}</GsapHeading>
                <p className="text-white/50 max-w-2xl">{track.desc}</p>
              </div>
            </RevealOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentorshipModules
                .filter((m) => track.moduleIds.includes(m.id))
                .map((m, i) => (
                  <RevealOnScroll key={m.id} delay={i * 0.08}>
                    <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-400/30 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-green-500/15 text-green-400 flex items-center justify-center text-xl">
                          {m.icon}
                        </div>
                        <span className="text-white/30 text-xs font-bold uppercase tracking-widest">Módulo {m.id}</span>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2">{m.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed mb-3">{m.desc}</p>
                      <p className="text-green-400/80 text-xs font-semibold">{m.action}</p>
                    </div>
                  </RevealOnScroll>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-24 px-6 text-center">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto bg-green-700/20 border border-green-500/20 rounded-3xl py-14 px-8">
            <h3 className="text-3xl font-black text-white mb-4">Empezá tu formación en la Academia Bioliffe</h3>
            <p className="text-white/60 mb-8">Acceso guiado por tu mentor, módulo por módulo.</p>
            <a
              href={createWhatsAppLink(WA_MESSAGES.academia)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-green-500 hover:bg-green-400 text-white font-black px-10 py-4 rounded-xl text-sm tracking-widest uppercase transition-all"
            >
              Quiero empezar
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
