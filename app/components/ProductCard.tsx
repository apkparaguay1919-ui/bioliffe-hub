"use client";
import { useState } from "react";
import { Product } from "../data/products";
interface P { product: Product }
export default function ProductCard({ product }: P) {
  const [e, sE] = useState(false);
  const w = "https://wa.me/51950639288";
  return (
    <div className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-green-100 transition-all duration-300">
      <div className="w-full aspect-square bg-gray-50 flex items-center justify-center">
        {!e ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-contain p-6" onError={() => sE(true)} />
        ) : (
          <span className="text-4xl">🌿</span>
        )}
      </div>
      <div className="flex flex-col p-6 gap-4">
        <h3 className="text-gray-900 font-black text-xl">{product.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
        <a href={w} target="_blank" className="w-full text-center bg-green-500 hover:bg-green-400 text-white font-bold text-sm py-3 rounded-xl transition-all">
          Consultar WhatsApp
        </a>
      </div>
    </div>
  );
}