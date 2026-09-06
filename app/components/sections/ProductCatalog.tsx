"use client";

import { useMemo, useState } from "react";
import ProductCard from "../ProductCard";
import RevealOnScroll from "../effects/RevealOnScroll";
import { products, categories } from "../../data/products";

/**
 * Catálogo con filtro por categoría.
 *
 * El filtro se arma solo, leyendo las categorías que existan en
 * app/data/products.ts. Cuando agregues productos de otras categorías
 * (Energía, Cuidado personal, etc.) los botones aparecen automáticamente:
 * no hay que tocar este archivo.
 */
export default function ProductCatalog() {
  const [active, setActive] = useState<string>("Todos");

  const filtros = useMemo(() => ["Todos", ...categories], []);

  const visibles = useMemo(
    () => (active === "Todos" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section className="bg-white px-6 py-24" id="catalogo">
      <div className="mx-auto max-w-6xl">
        {/* El filtro solo tiene sentido con más de una categoría cargada. */}
        {categories.length > 1 && (
          <div
            className="no-scrollbar mb-12 flex gap-3 overflow-x-auto pb-2"
            role="tablist"
            aria-label="Filtrar productos por categoría"
          >
            {filtros.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={`shrink-0 rounded-full border px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
                  active === f
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-gray-200 bg-white text-gray-500 hover:border-green-300 hover:text-green-700"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        <p className="mb-8 text-sm text-gray-400">
          {visibles.length} {visibles.length === 1 ? "producto disponible" : "productos disponibles"} en Paraguay
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((product) => (
            <RevealOnScroll key={product.id}>
              <ProductCard product={product} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
