import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
        <img
          src="/path-to-your-logo.png"
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
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
          // Mobile View (Presale section for smaller screens)
          <div className="flex h-full sm:flex items-center w-full mx-auto justify-between">
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

        <div className="flex mx-auto justify-center gap-2">
          {["Ξ", "₮", "₿", "VISA", "MC", "G Pay", "aPay"].map((item, index) => (
            <div
              key={index}
              className="bg-gray-700/80 rounded-md p-2 w-12 h-12 flex items-center justify-center text-white text-xs md:text-sm font-bold"
            >
              {item === "MC" ? (
                <div className="flex flex-col items-center">
                  <div className="w-4 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-2 bg-yellow-500 rounded-full -mt-0.5"></div>
                </div>
              ) : (
                item
              )}
            </div>
          ))}
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
