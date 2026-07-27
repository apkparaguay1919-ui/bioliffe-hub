"use client";
import type { ReactNode } from "react";
import { useGsapReveal } from "./useGsapReveal";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
}

/** Título de sección animado con GSAP + ScrollTrigger (blur-in + subida). */
export default function GsapHeading({ children, className, as = "h2" }: Props) {
  const ref = useGsapReveal<HTMLHeadingElement>({ y: 24 });
  const Tag = as;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
