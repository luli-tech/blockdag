import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import applelogo from "../public/appplepaylogo.svg";
import binaceLOgo from "../public/binanceLogo.jpg";
import ethLogo from "../public/gpaylogo.png";
import gpaylogog from "../public/gpaylogo.png";
import usdtlogo from "../public/usdt.png";
import visalogo from "../public/visalogo.jpg";

export default function PresaleSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mx-auto py-2">
      {/* Header Section */}
      <div className="flex mb-5 mx-auto w-[fit-content] items-center rounded-lg">
        <Image src="" alt="Logo" className="w-12 h-12 rounded-full" />
        <div className="w-px h-20 bg-white mx-4"></div>
        <p className="text-white font-semibold text-[8px]">
          OFFICIAL BLOCKCHAIN
          <br />
          PARTNER
        </p>
      </div>

      {/* Conditional Rendering Based on Screen Width */}
      <div
        className={`flex ${
          isMobile ? "flex-row" : "flex-col"
        } md:flex- px-2 w-fit mx-auto lg:flex-row md:flex-col items-center justify-center gap-4 bg-black/20 py-2 rounded-lg`}
      >
        {!isMobile && (
          <div className="flex h-full  sm:flex items-center w-full mx-auto justify-between">
            <div className="text-xl md:text-2xl font-bold">
              Presale is <span className="text-green-400">Live</span>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 md:px-8 rounded-md">
              Buy Now
            </Button>
          </div>
        )}
        {isMobile && (
          <div className="text-xl md:text-2xl font-bold text-center">
            Presale is <span className="text-green-400">Live</span>
          </div>
        )}

        <div className="flex bg-gray-700/50 p-2 mx-auto justify-center gap-1">
          {[applelogo, binaceLOgo, ethLogo, gpaylogog, usdtlogo, visalogo].map(
            (icon, index) => (
              <div
                key={index}
                className="bg-gray-700/80 rounded-md p-1 w-15 flex items-center justify-center"
              >
                <Image src={icon} alt="Payment Icon" className="w-4 h-4" />
              </div>
            )
          )}
        </div>

        {isMobile && (
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 md:px-8 rounded-md mt-2 md:mt-0">
            Buy Now
          </Button>
        )}
      </div>
    </div>
  );
}
