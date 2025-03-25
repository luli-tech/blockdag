import { useEffect, useState } from "react";

const KeyNote = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-left text-white text-left">
      <h1 className="text-5xl font-bold">KEYNOTE 3</h1>
      <h2 className="text-4xl font-bold">COMING MARCH 2025</h2>
      <p className="text-lg">Created by a Hollywood Producer!</p>
      <div className="flex gap-2 mt-2 text-2xl font-bold">
        <div className="p-2 bg-gray-800">
          <span>{String(timeLeft.days).padStart(2, "0")}</span>
          <p className="text-sm">DAYS</p>
        </div>
        <span>:</span>
        <div className="p-2 bg-gray-800">
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>
          <p className="text-sm">HOURS</p>
        </div>
        <span>:</span>
        <div className="p-2 bg-gray-800">
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <p className="text-sm">MINUTES</p>
        </div>
        <span>:</span>
        <div className="p-2 bg-gray-800">
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          <p className="text-sm">SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export default KeyNote;
