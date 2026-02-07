import { useEffect, useState } from "react";

const weddingDate = new Date("2026-04-11");

export default function Countdown() {
  const [time, setTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = weddingDate - new Date();
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-white">
      <h1 className="mb-4">Our Forever Begins In 💍</h1>
      <div className="d-flex gap-4 fs-4 justify-content-center">
        <div>{time.days} Days</div>
        <div>{time.hours} Hrs</div>
        <div>{time.minutes} Min</div>
        <div>{time.seconds} Sec</div>
      </div>
    </div>
  );
}
