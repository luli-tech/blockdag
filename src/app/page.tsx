"use client";

import AnimatedBackground from "@/components/animated-background";
import NavigationMenu from "@/components/navigation-menu";
import PresaleSection from "@/components/presale-section";
import ArrowButtons from "@/components/arrowAnchor";
import CarouselDots from "@/components/carouselDots";

export default function Home() {
  // Handle navigation click

  return (
    <div>
      <main className="min-h-screen text-white overflow-hidden relative">
        {/* Background image with animation */}
        <AnimatedBackground />

        {/* Navigation */}
        <NavigationMenu />

        <div className="absolute 2-111111 carousel-control lg:bottom-[50%] w-full">
          <ArrowButtons />
        </div>

        {/* Presale section */}
        <div className="absolute z-10 bottom-10 w-full">
          <PresaleSection />
        </div>
        <div className="absolute z-20000 w-full bottom-4">
          <CarouselDots />
        </div>
        {/* </div> */}
      </main>
    </div>
  );
}
