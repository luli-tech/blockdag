"use client";
import { useRef, useEffect, useState } from "react";

import CounterComponent from "./counterComponent";

export default function AnimatedBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="relative w-full h-[100vh]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        className={`absolute w-full mx-auto left-[0%] md:top-[20%] md:left-[0%] ${
          isMobile ? "top-[12%] right-[20%]" : "top-[10%] right-[0%]"
        } z-1 `}
      >
        <CounterComponent />
      </div>
    </div>
  );
}
