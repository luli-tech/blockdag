"use client";
import { useRef } from "react";
import { useCarousel } from "@/lib/carouselContext";
import carousel from "@/lib/carousel";
import FlowbiteCarousel from "./test";

export default function AnimatedBackground() {
  const { currentSlide } = useCarousel();
  const backgroundRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={backgroundRef}
      className="relative w-full h-[100vh]"
      style={{
        backgroundImage: `url(${carousel[currentSlide].bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="absolute z-1 top-[12%] left-[6%]">
        {carousel[currentSlide].content}
      </div>
    </div>
  );
}
