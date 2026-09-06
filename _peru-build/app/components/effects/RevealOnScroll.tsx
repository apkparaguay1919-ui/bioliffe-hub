"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  /** 0-1, cuánto del elemento debe verse antes de animar */
  amount?: number;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

/**
 * Envoltorio reutilizable de scroll-reveal (fade + slide + escala sutil).
 * Se usa en toda la web para las animaciones de "aparece al hacer scroll"
 * sin repetir la configuración de Framer Motion en cada sección.
 */
export default function RevealOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  amount = 0.2,
}: Props) {
  const offset = offsets[direction];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.98, ...offset }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
