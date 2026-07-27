import AnimatedCounter from "../effects/AnimatedCounter";
import RevealOnScroll from "../effects/RevealOnScroll";

const STATS = [
  { value: 10, suffix: "+", label: "Productos" },
  { value: 500, suffix: "+", label: "Clientes" },
  { value: 50, suffix: "+", label: "Distribuidores" },
  { value: 1, suffix: "+", label: "Años" },
  { value: 12, suffix: "+", label: "Eventos" },
  { value: 20, suffix: "+", label: "Videos" },
];

/** Franja de contadores animados, cifras generales del negocio. */
export default function Counters() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#0a2011] to-[#050505] border-y border-green-900/40">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl md:text-5xl font-black text-green-400"
                />
                <p className="text-white/40 text-xs mt-2 tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
