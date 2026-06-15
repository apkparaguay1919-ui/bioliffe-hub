export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "eficlax",
    name: "Eficlax",
    category: "Detox",
    description: "Apoya el equilibrio digestivo y el bienestar interno con extractos naturales. Limpieza profunda del colon en 5 días.",
    benefits: ["Limpieza profunda del colon", "Elimina toxinas y parásitos", "Reduce la inflamación abdominal", "Mejora la digestión", "Aumenta tu energía vital"],
    image: "/images/eficlax.jpeg",
    featured: true,
  },
  {
    id: "alkam",
    name: "Alkam",
    category: "Nutrición",
    description: "Suplemento premium con moringa y extractos naturales para apoyar el equilibrio del organismo.",
    benefits: ["Equilibrio natural", "Rico en nutrientes", "Fórmula exclusiva"],
    image: "/images/alkam.png",
    featured: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
export const categories = [...new Set(products.map((p) => p.category))];