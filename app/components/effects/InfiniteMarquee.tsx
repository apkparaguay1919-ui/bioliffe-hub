"use client";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode[];
  /** segundos que tarda un ciclo completo — más alto = más lento */
  speed?: number;
  gap?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Cinta horizontal de desplazamiento infinito (Movie Ribbon / cinta cinematográfica).
 * Reutiliza el mismo patrón de animación en CSS puro que ya usa <Ticker />, así
 * el movimiento es fluido, nunca se detiene y no depende de JS en cada frame.
 */
export default function InfiniteMarquee({ children, speed = 50, gap = 24, reverse = false, className = "" }: Props) {
  const track = [...children, ...children];

  return (
    <div className={`relative w-full overflow-hidden group ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

      <div
        className="flex w-max group-hover:[animation-play-state:paused]"
        style={{
          gap,
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {track.map((child, i) => (
          <div key={i} className="shrink-0">
            {child}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
