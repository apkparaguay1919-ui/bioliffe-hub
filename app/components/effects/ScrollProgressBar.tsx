"use client";
import { motion, useScroll, useSpring } from "framer-motion";

/** Barra de progreso fina en la parte superior, sigue el avance del scroll. */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-green-400 via-emerald-400 to-[#c9a84c] z-[60]"
      style={{ scaleX }}
    />
  );
}
