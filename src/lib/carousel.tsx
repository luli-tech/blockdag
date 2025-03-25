import BonusPromo from "@/components/carouselContent/bonusPromo";
import Security from "@/components/carouselContent/security";
import CountdownTimer from "@/components/carouselContent/bonusTimer";
import KeyNote from "@/components/carouselContent/keynote";
import Raised from "@/components/carouselContent/raised";
let carousel = [
  {
    bg: "/download.jpeg",
    content: <KeyNote />,
  },
  { bg: "/downloaded.jpeg", content: <BonusPromo /> },

  { bg: "/file.svg", content: <Security /> },

  { bg: "/globe.svg", content: <CountdownTimer /> },

  { bg: "/images.jpeg", content: <Raised /> },
];
export default carousel;
