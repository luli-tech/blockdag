import { useCarousel } from "@/lib/carouselContext";
import carousel from "@/lib/carousel";

const CarouselDots = () => {
  const { currentSlide, setCurrentSlide } = useCarousel(); // Get setCurrentSlide from context

  // Handle dot click to navigate to the corresponding slide
  const handleDotClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    setCurrentSlide(index); // Update current slide to clicked index
    console.log("Clicked button innerHTML:", event.target); // Log innerHTML of clicked button
  };

  return (
    <div className="flex cursor-pointer justify-center overflow-hidden rounded-[2px] space-x-2">
      {carousel.map((_, index) => (
        <button
          key={index}
          onClick={(event) => handleDotClick(event, index)} // Pass event to handler
          className={`w-3 cursor-pointer rounded-[2px] h-3 w-4 ${
            index === currentSlide ? "bg-white" : "bg-black/40"
          }`}
        ></button>
      ))}
    </div>
  );
};

export default CarouselDots;
