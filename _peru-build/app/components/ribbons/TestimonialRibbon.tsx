"use client";
import { useState } from "react";
import InfiniteMarquee from "../effects/InfiniteMarquee";
import VideoCard from "../video/VideoCard";
import VideoModal from "../video/VideoModal";
import { videos, type VideoEntry } from "../../data/videos";

const TESTIMONIAL_CATEGORIES = ["Testimonios", "Distribución", "Bonos", "Viajes"] as const;

/** Cinta horizontal infinita solo con testimonios en video, resultados, bonos y viajes. */
export default function TestimonialRibbon() {
  const [playing, setPlaying] = useState<VideoEntry | null>(null);
  const items = videos.filter((v) => (TESTIMONIAL_CATEGORIES as readonly string[]).includes(v.category));

  return (
    <div className="w-full py-4">
      <InfiniteMarquee speed={45} reverse>
        {items.map((video) => (
          <VideoCard key={video.id} video={video} onPlay={setPlaying} />
        ))}
      </InfiniteMarquee>
      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </div>
  );
}
