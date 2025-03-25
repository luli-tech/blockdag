import React from "react";

const BonusPromo = () => {
  return (
    <div className="relative text-white p-6 md:p-12 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/mnt/data/image.png"
          alt="Inter Milan Players"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-lg md:text-xl font-bold flex items-center gap-2">
          <span className="text-blue-500">&#x1F3C6;</span> INTER OFFICIAL
          PARTNER
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold mt-4">USE CODE</h1>
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-500">
          BDAG800
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold mt-4">
          FOR <span className="text-blue-500">400%</span> BONUS!
        </h1>
      </div>
    </div>
  );
};

export default BonusPromo;
