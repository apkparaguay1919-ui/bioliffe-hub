import RevealOnScroll from "./effects/RevealOnScroll";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}

/** Hero compacto reutilizable para páginas internas (Nosotros, La Moringa, Descargas, etc). */
export default function PageHero({ eyebrow, title, description, image }: Props) {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">{eyebrow}</p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">{title}</h1>
          {description && <p className="text-white/60 text-lg max-w-2xl mx-auto">{description}</p>}
        </RevealOnScroll>
      </div>
    </section>
  );
}
