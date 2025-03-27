import React, { useState, useEffect, useCallback } from "react";

const CounterComponent = () => {
  const [days, setDays] = useState("01");
  const [hours, setHours] = useState("08");
  const [minutes, setMinutes] = useState("20");
  const [seconds, setSeconds] = useState("03");
  const [key, setKey] = useState(0);
  // const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth > 1000);
  //   };
  //   handleResize(); // Set initial state
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // Countdown logic
  const updateCountdown = useCallback(() => {
    setSeconds((prevSeconds) => {
      const sec = Number(prevSeconds);
      if (sec > 0) return String(sec - 1).padStart(2, "0");

      setMinutes((prevMinutes) => {
        const min = Number(prevMinutes);
        if (min > 0) return String(min - 1).padStart(2, "0");

        setHours((prevHours) => {
          const hr = Number(prevHours);
          if (hr > 0) return String(hr - 1).padStart(2, "0");

          setDays((prevDays) => {
            const d = Number(prevDays);
            return d > 0 ? String(d - 1).padStart(2, "0") : "00";
          });

          return "23";
        });

        return "59";
      });

      return "59";
    });

    setKey((prev) => prev + 1); // Force re-render for animation
  }, []);

  useEffect(() => {
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [updateCountdown]);

  return (
    <div className="container w-full relative z-20">
      <div className="flex gap-8 justify-center lg:justify-left md:justify-left">
        <div className="text-white lg:text-left text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl md:text-5xl font-bold py-1">
            KEYNOTE 3
            <br />
            COMING
            <br />
            MARCH 2025
          </h1>

          <div className="text-[15px] md:text-4xl font-bold py-2">
            USE CODE <span className="text-[#0099ff]">BDAG800</span> FOR{" "}
            <span className="text-[#0099ff]">400%</span> BONUS!
          </div>

          {/* Countdown Timer */}
          <div className="flex md:space-x-4 mx-auto mb-12" key={key}>
            {[
              { label: "DAYS", value: days },
              { label: "HOURS", value: hours },
              { label: "MINUTES", value: minutes },
              { label: "SECONDS", value: seconds },
            ].map(({ label, value }, index) => (
              <React.Fragment key={label}>
                <div className="bg-[#041a4a] border border-[#0a2a6a] rounded-md md:w-24 text-center">
                  <div className="relative overflow-hidden">
                    <div className="text-3xl md:text-5xl font-bold">
                      {value}
                    </div>
                  </div>
                  <div className="text-xs md:text-sm mt-1">{label}</div>
                </div>
                {index < 3 && (
                  <div className="text-3xl px-1 md:text-5xl font-bold self-center">
                    :
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
