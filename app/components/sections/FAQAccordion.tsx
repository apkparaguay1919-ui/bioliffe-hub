"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import RevealOnScroll from "../effects/RevealOnScroll";
import GsapHeading from "../effects/GsapHeading";
import { faqs, faqCategories } from "../../data/faq";

/** FAQ enorme (40+ preguntas) con acordeón animado, categorías y buscador interno. */
export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null);
  const [category, setCategory] = useState<string>("Todas");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchesCategory = category === "Todas" || f.category === category;
      const matchesQuery =
        query.trim() === "" ||
        f.question.toLowerCase().includes(query.toLowerCase()) ||
        f.answer.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section className="relative py-32 px-6 bg-[#050505]" id="faq">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Resolvemos tus dudas</p>
            <GsapHeading className="text-5xl font-black text-white mb-4">Preguntas frecuentes</GsapHeading>
            <p className="text-white/50 text-lg">Más de 40 respuestas sobre productos, negocio, mentoría y compras.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="relative mb-6">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar en las preguntas frecuentes..."
              className="w-full bg-white/5 border border-white/10 focus:border-green-400/50 outline-none text-white text-sm rounded-xl pl-11 pr-4 py-3.5 placeholder:text-white/30 transition-colors"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-6 no-scrollbar">
            {["Todas", ...faqCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
                  category === cat
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <div className="space-y-3">
          {filtered.length === 0 && (
            <p className="text-white/40 text-sm text-center py-10">No encontramos preguntas que coincidan con tu búsqueda.</p>
          )}
          {filtered.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="text-white font-semibold text-sm">{faq.question}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 text-green-400">
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-white/50 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
