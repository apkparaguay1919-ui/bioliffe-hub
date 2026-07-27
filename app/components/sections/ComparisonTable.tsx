import RevealOnScroll from "../effects/RevealOnScroll";
import GsapHeading from "../effects/GsapHeading";

const ROWS: { aspect: string; bioliffe: string; traditional: string }[] = [
  { aspect: "Ingredientes principales", bioliffe: "Base de moringa y extractos naturales", traditional: "Varía según marca y fórmula" },
  { aspect: "Presentación", bioliffe: "Cuidada, pensada para el día a día", traditional: "Varía según fabricante" },
  { aspect: "Sistema de acompañamiento", bioliffe: "Mentoría 24/7 incluida", traditional: "Generalmente no incluida" },
  { aspect: "Comunidad de apoyo", bioliffe: "Red activa de distribuidores y líderes", traditional: "Poco común" },
  { aspect: "Variedad de productos", bioliffe: "Catálogo en expansión constante", traditional: "Depende del proveedor" },
  { aspect: "Soporte post-compra", bioliffe: "Seguimiento personalizado por WhatsApp", traditional: "Limitado o inexistente" },
  { aspect: "Oportunidad de negocio", bioliffe: "Sistema de distribución y duplicación", traditional: "No suele ofrecerse" },
  { aspect: "Formación incluida", bioliffe: "Academia con módulos y capacitaciones", traditional: "No suele ofrecerse" },
];

/**
 * Comparativa general Bioliffe vs. suplementos tradicionales.
 * Aspectos generales (ingredientes, presentación, comunidad, soporte,
 * variedad) — sin afirmaciones médicas ni comparaciones de eficacia.
 */
export default function ComparisonTable() {
  return (
    <section className="relative py-32 px-6 bg-[#050505]" id="comparativa">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Comparativa</p>
            <GsapHeading className="text-5xl font-black text-white mb-4">Bioliffe vs. suplementos tradicionales</GsapHeading>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Una mirada general a aspectos organizativos y de experiencia — no a resultados o eficacia.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-5 text-white/40 text-xs font-bold uppercase tracking-widest">Aspecto</th>
                  <th className="p-5 text-green-400 text-xs font-bold uppercase tracking-widest">Bioliffe Moringa</th>
                  <th className="p-5 text-white/40 text-xs font-bold uppercase tracking-widest">Suplemento tradicional</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="p-5 text-white/70 text-sm font-semibold border-t border-white/5">{row.aspect}</td>
                    <td className="p-5 text-white text-sm border-t border-white/5">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-black shrink-0">✓</span>
                        {row.bioliffe}
                      </span>
                    </td>
                    <td className="p-5 text-white/40 text-sm border-t border-white/5">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/30 text-xs mt-6 max-w-2xl mx-auto text-center">
            Comparación general y organizativa. No representa afirmaciones médicas ni garantías de resultado;
            los productos de bienestar no sustituyen diagnóstico ni tratamiento médico.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
