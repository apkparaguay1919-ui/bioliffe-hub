"use client";
import InfiniteMarquee from "../effects/InfiniteMarquee";
import { products } from "../../data/products";
import { createWhatsAppLink, WA_MESSAGES } from "../../lib/whatsapp";

/** Cinta horizontal infinita de productos destacados, debajo del Hero. */
export default function ProductRibbon() {
  return (
    <div className="w-full bg-black/40 py-10 border-y border-white/5">
      <InfiniteMarquee speed={38}>
        {products.map((product) => (
          <div
            key={product.id}
            className="group w-[280px] shrink-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-green-400/40 hover:-translate-y-1 transition-all duration-500"
          >
            <div className="aspect-square bg-white/5 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                      loading="lazy"
                      decoding="async"
                alt={product.name}
                className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <span className="text-green-400 text-[10px] font-bold tracking-widest uppercase">{product.category}</span>
              <h4 className="text-white font-black text-lg mt-1">{product.name}</h4>
              <p className="text-white/40 text-xs mt-2 line-clamp-2 leading-relaxed">{product.description}</p>
              <div className="flex gap-2 mt-4">
                <a
                  href="#productos"
                  className="flex-1 text-center bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  Ver más
                </a>
                <a
                  href={createWhatsAppLink(WA_MESSAGES.producto)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-green-500 hover:bg-green-400 text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </InfiniteMarquee>
    </div>
  );
}
