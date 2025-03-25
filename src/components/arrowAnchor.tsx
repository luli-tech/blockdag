import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCarousel } from "@/lib/carouselContext";

const ArrowButtons = () => {
  const { nextSlide, prevSlide } = useCarousel();
  return (
    <div className="flex z-10000000 justify-between px-5">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className=" bg-white  cursor-pointer rounded shadow-md hover:bg-gray-200"
      >
        <ChevronLeft className=" text-black" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="bg-white cursor-pointer rounded shadow-md hover:bg-gray-200"
      >
        <ChevronRight className=" text-black" />
      </button>
    </div>
  );
};

export default ArrowButtons;
