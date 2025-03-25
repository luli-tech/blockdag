import { useState, useEffect } from "react";

// Type definition for time left state
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Function to calculate the time left
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5); // Set target date to 5 days from now
    targetDate.setHours(targetDate.getHours() + 23); // Add 23 hours
    targetDate.setMinutes(targetDate.getMinutes() + 55); // Add 55 minutes
    targetDate.setSeconds(targetDate.getSeconds() + 53); // Add 53 seconds

    const difference = targetDate.getTime() - new Date().getTime(); // Time difference
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60), // Fix for seconds calculation
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    // Update the countdown every second (1000ms)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // 1000ms for 1 second

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, []);

  // Adding default values if timeLeft is undefined
  const timeData = [
    {
      time: timeLeft.days !== undefined ? timeLeft.days : 0,
      text: "DAYS",
    },
    {
      time: timeLeft.hours !== undefined ? timeLeft.hours : 0,
      text: "HOURS",
    },
    {
      time: timeLeft.minutes !== undefined ? timeLeft.minutes : 0,
      text: "MINUTES",
    },
    {
      time: timeLeft.seconds !== undefined ? timeLeft.seconds : 0,
      text: "SECONDS",
    },
  ];

  // Helper function to format numbers to be 2 digits
  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <div className="text-white rounded-lg text-left mx-auto">
      <h2 className="text-[4rem] font-bold">LIMITED TIME!</h2>
      <p className="text-8xl font-extrabold">
        USE <span className="text-blue-400">BDAG800</span>
      </p>
      <p className="text-6xl font-bold">
        FOR <span className="text-blue-400">400%</span> BONUS!
      </p>

      <div className="flex justify-left space-x-2 mt-4">
        {timeData.map((data) => (
          <div
            className="bg-black/20 border p-3 rounded text-center"
            key={data.text}
          >
            <p className="text-3xl font-bold">{formatTime(data.time)}</p>
            <p className="text-sm">{data.text}</p>
          </div>
        ))}
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 rounded-[10px] text-2xl text-white font-bold py-4 px-10 mt-6">
        Don’t Miss Out!
      </button>
    </div>
  );
};

export default CountdownTimer;
