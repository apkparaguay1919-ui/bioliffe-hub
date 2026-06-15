"use client";
import { useState } from "react";
import { Product } from "../data/products";
interface P { product: Product }
export default function ProductCard({ product }: P) {
  const [e, sE] = useState(false);
  const w = "https://wa.me/51950639288";
  return (
    <div className="flex flex-col bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl overflow-hidden hover:border-[#c9a84c] transition-all">
      <div className="w-full aspect-square bg-[#111] flex items-center justify-center">
        {!e ? (<img src={product.image} alt={product.name} className="w-full h-full object-contain p-4" onError={() => sE(true)} />) : (<span className="text-4xl">??</span>)}
      </div>
      <div className="flex flex-col p-5 gap-3">
        <h3 className="text-white font-bold text-lg">{product.name}</h3>
        <p className="text-[#888] text-sm">{product.description}</p>
        <a href={w} target="_blank" className="w-full text-center bg-[#c9a84c] text-black font-bold text-sm py-3 rounded-xl">Consultar WhatsApp</a>
      </div>
    </div>
  );
}
