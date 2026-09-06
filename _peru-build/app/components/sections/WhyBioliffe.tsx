"use client";
import { motion } from "framer-motion";
import RevealOnScroll from "../effects/RevealOnScroll";
import GsapHeading from "../effects/GsapHeading";

const REASONS = [
  { icon: "🌿", title: "100% Natural", desc: "Fórmulas basadas en moringa y extractos naturales, sin ingredientes que se aparten de ese estándar." },
  { icon: "💎", title: "Calidad Premium", desc: "Cada producto pasa por procesos de cuidado y control antes de llegar a tus manos." },
  { icon: "🏭", title: "Producción", desc: "Procesos productivos cuidados de principio a fin, priorizando la calidad sobre el volumen." },
  { icon: "🎓", title: "Mentoría", desc: "Acompañamiento 24/7 con un sistema de formación estructurado en 8 módulos." },
  { icon: "🚚", title: "Distribución", desc: "Presencia en Perú, Paraguay y Latinoamérica, con logística pensada para llegar a más ciudades." },
  { icon: "🌎", title: "Negocio Internacional", desc: "Un sistema de negocio pensado para escalar más allá de una sola ciudad o país." },
  { icon: "🤝", title: "Comunidad", desc: "Una red de distribuidores y líderes que comparten aprendizajes y se apoyan mutuamente." },
  { icon: "📈", title: "Resultados", desc: "Historias reales de constancia, disciplina y crecimiento dentro del sistema Bioliffe." },
];

/** Sección "¿Por qué Bioliffe?" — 8 tarjetas con ícono animado. */
export default function WhyBioliffe() {
  return (
    <section className="relative py-32 px-6 bg-[#050505]" id="por-que-bioliffe">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Nuestra propuesta</p>
            <GsapHeading className="text-5xl font-black text-white mb-4">¿Por qué Bioliffe?</GsapHeading>
            <p className="text-white/50 text-lg max-w-xl mx-auto">Ocho razones por las que la comunidad Bioliffe sigue creciendo</p>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, i) => (
            <RevealOnScroll key={reason.title} delay={i * 0.06} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-400/30 hover:bg-white/[0.07] transition-colors"
              >
                <motion.div
                  className="text-5xl mb-5 inline-block"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  {reason.icon}
                </motion.div>
                <h3 className="text-white font-black text-lg mb-2">{reason.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
