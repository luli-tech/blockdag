import React from "react";
import Image from "next/image";
const Security = () => {
  return (
    <div className="relative text-white p-6 md:p-12 flex items-center justify-center text-left">
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold uppercase">
          SECURITY AUDITS <br />
          ARE COMPLETED
        </h2>
        <h3 className="text-3xl md:text-8xl font-bold text-blue-300">
          Use Code <span className="text-blue-500">BDAG800</span>
        </h3>
        <h3 className="text-3xl md:text-2xl font-semibold text-blue-300">
          For a <span className="text-blue-500">400%</span> Bonus!
        </h3>

        {/* Logos */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <Image
            src="/path-to-certik-logo.png"
            alt="Certik Logo"
            className="h-6 md:h-8"
          />
          <Image
            src="/path-to-hilborn-logo.png"
            alt="Hilborn Logo"
            className="h-6 md:h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
