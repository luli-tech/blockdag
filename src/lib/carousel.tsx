import BonusPromo from "@/components/carouselContent/bonusPromo";
import Security from "@/components/carouselContent/security";
import CountdownTimer from "@/components/carouselContent/bonusTimer";
import Raised from "@/components/carouselContent/raised";
import CounterComponent from "@/components/counterComponent";

const carousel = [
  {
    bg: "/download.jpeg",
    content: <CounterComponent />,
  },
  { bg: "/downloaded.jpeg", content: <BonusPromo /> },

  { bg: "/file.svg", content: <Security /> },

  { bg: "/globe.svg", content: <CountdownTimer /> },

  { bg: "/images.jpeg", content: <Raised /> },
];
export default carousel;
