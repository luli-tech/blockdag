"use client";
import { createContext, useState, useContext } from "react";
import carousel from "@/lib/carousel";

interface CarouselContextType {
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
  setCurrentSlide: (index: number) => void; // Add setCurrentSlide here
}

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

export const CarouselProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carousel.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carousel.length) % carousel.length);
  };

  return (
    <CarouselContext.Provider
      value={{ currentSlide, nextSlide, prevSlide, setCurrentSlide }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};
