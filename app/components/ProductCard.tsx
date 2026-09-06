"use client";

import { useState } from "react";
import { Product } from "../data/products";
import { productWhatsAppLink } from "../lib/whatsapp";
import { formatGs, hasPrice } from "../lib/format";

/**
 * Tarjeta de producto.
 *
 * Cambios respecto de la versión anterior:
 *  · el número de WhatsApp ya no está escrito a mano acá (venía duplicado y
 *    podía desincronizarse con lib/whatsapp.ts) — ahora sale de lib/site.ts;
 *  · el mensaje de WhatsApp llega precargado con el nombre del producto;
 *  · muestra precio en guaraníes cuando está cargado;
 *  · enlaza a la ficha completa /productos/<slug>.
 */
export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-green-100 hover:shadow-xl">
      <a
        href={`/productos/${product.slug}`}
        className="flex aspect-square w-full items-center justify-center overflow-hidden bg-gray-50"
        aria-label={`Ver ficha de ${product.name}`}
      >
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={`${product.fullName ?? product.name} — Bioliffe Moringa Paraguay`}
            loading="lazy"
            className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-4xl" aria-hidden="true">
            🌿
          </span>
        )}
      </a>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-green-600">
          {product.category}
        </span>

        <h3 className="text-xl font-black text-gray-900">
          <a href={`/productos/${product.slug}`} className="hover:text-green-600">
            {product.name}
          </a>
        </h3>

        <p className="text-sm leading-relaxed text-gray-500">{product.tagline}</p>

        <p
          className={`text-lg font-black ${
            hasPrice(product.priceGs) ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {formatGs(product.priceGs)}
        </p>

        <div className="mt-auto flex flex-col gap-2 pt-2">
          <a
            href={`/productos/${product.slug}`}
            className="w-full rounded-xl border border-gray-200 py-3 text-center text-sm font-bold text-gray-700 transition-all hover:border-green-300 hover:text-green-700"
          >
            Ver detalles
          </a>
          <a
            href={productWhatsAppLink(product.fullName ?? product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-xl bg-green-500 py-3 text-center text-sm font-bold text-white transition-all hover:bg-green-400"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
