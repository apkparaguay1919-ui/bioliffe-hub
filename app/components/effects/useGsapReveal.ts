"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Hook con GSAP + ScrollTrigger para animar la entrada de un elemento
 * (usado en encabezados de sección: eyebrow, título, línea decorativa).
 * Se mantiene separado de Framer Motion para que ambas librerías convivan
 * sin pisarse: Framer Motion controla las tarjetas y reveals generales,
 * GSAP controla estas animaciones de encabezado tipo "cinematográficas".
 */
export function useGsapReveal<T extends HTMLElement>(options?: { y?: number; delay?: number }) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: options?.y ?? 30, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          delay: options?.delay ?? 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [options?.y, options?.delay]);

  return ref;
}
