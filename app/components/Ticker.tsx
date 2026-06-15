export default function Ticker() {
  const items = [
    "🌿 Moringa Premium",
    "💰 Negocio Real",
    "🏆 Mentoría 24/7",
    "✦ Recommended Distributor — Business For Home",
    "🌎 Paraguay · Perú · Latinoamérica",
    "⭐ Distribuidor Certificado Internacional",
    "🌱 20+ Productos Naturales",
    "💚 Bienestar con Moringa",
    "🚀 Sistema Duplicable",
    "✦ Javier Quintana Mendoza — BFH 2025",
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="w-full bg-[#1a5c2a] overflow-hidden py-2.5 border-y border-[#c9a84c]/20">
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{
          animation: "ticker 35s linear infinite",
          width: "max-content",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-[11px] font-bold tracking-[2px] uppercase text-white flex items-center gap-3"
          >
            {item}
            <span className="text-[#c9a84c] opacity-60">|</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}