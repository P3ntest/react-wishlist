import { useState, useEffect } from "react";

const COUNTDOWN_ENDS_ON = new Date("2024-03-07T00:00:00").getTime();

export function CountDownText() {
  const [timeLeft, setTimeLeft] = useState(
    COUNTDOWN_ENDS_ON - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(COUNTDOWN_ENDS_ON - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
