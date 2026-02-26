"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set deadline to 7 days from now (persistent would use localStorage)
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 7);
    deadline.setHours(23, 59, 59, 0);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-3 md:gap-5">
        {["Days", "Hours", "Mins", "Secs"].map((label) => (
          <div key={label} className="text-center">
            <div
              className="w-16 h-16 md:w-20 md:h-20 
                            border border-gold/30 
                            flex items-center justify-center
                            bg-gold/5"
            >
              <span className="font-serif text-heading-3 md:text-heading-2 text-gold">
                --
              </span>
            </div>
            <span className="text-caption text-neutral-warm/40 mt-2 block">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5">
      {units.map((unit, i) => (
        <div key={unit.label} className="text-center">
          <div
            className="w-16 h-16 md:w-20 md:h-20 
                          border border-gold/30 
                          flex items-center justify-center
                          bg-gold/5 backdrop-blur-sm
                          transition-all duration-300"
          >
            <span className="font-serif text-heading-3 md:text-heading-2 text-gold tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-caption text-neutral-warm/40 mt-2 block tracking-[0.15em]">
            {unit.label}
          </span>
          {i < units.length - 1 && (
            <span className="hidden" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}