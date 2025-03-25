"use client"; // Required in Next.js (App Router)

import { Carousel } from "flowbite-react";
import Image from "next/image";
import carousel from "@/lib/carousel";

const FlowbiteCarousel = () => {
  return (
    <div className="w-full h-56 md:h-96">
      <Carousel slideInterval={3000}>
        {carousel.map((item, index) => (
          <Image
            key={index}
            src={item.bg}
            width={800}
            height={400}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default FlowbiteCarousel;
