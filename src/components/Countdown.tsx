"use client";

import React, { useEffect, useState } from "react";
import { weddingConfig } from "@/config/wedding";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function calculateTimeLeft(targetIso: string): TimeLeft {
  const targetMs = new Date(targetIso).getTime();
  const nowMs = Date.now();
  const diff = targetMs - nowMs;

  if (diff <= 0 || Number.isNaN(diff)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, expired: false };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => {
      setTimeLeft(calculateTimeLeft(weddingConfig.countdown.targetIso));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    {
      value: timeLeft ? String(timeLeft.days).padStart(2, "0") : "--",
      label: weddingConfig.countdown.labels.days,
    },
    {
      value: timeLeft ? String(timeLeft.hours).padStart(2, "0") : "--",
      label: weddingConfig.countdown.labels.hours,
    },
    {
      value: timeLeft ? String(timeLeft.minutes).padStart(2, "0") : "--",
      label: weddingConfig.countdown.labels.minutes,
    },
    {
      value: timeLeft ? String(timeLeft.seconds).padStart(2, "0") : "--",
      label: weddingConfig.countdown.labels.seconds,
    },
  ];

  return (
    <section
      aria-labelledby="countdown-heading"
      className="px-5 py-6 text-center"
    >
      <h2
        id="countdown-heading"
        lang="ta"
        className="font-tamil-serif text-xl font-semibold text-[#8B1A1A]"
      >
        {weddingConfig.countdown.headingTa}
      </h2>
      <p lang="en" className="text-sm text-[#3B2A20]/75 mt-0.5 mb-5">
        {weddingConfig.countdown.headingEn}
      </p>

      {timeLeft?.expired ? (
        <div className="py-5 px-4 border border-[#B8860B]/45 rounded-2xl bg-[#FFF8EC]">
          <p
            lang="ta"
            className="font-tamil-serif text-2xl font-semibold text-[#8B1A1A]"
          >
            {weddingConfig.countdown.completedTa}
          </p>
          <p lang="en" className="text-base text-[#3B2A20] mt-1">
            {weddingConfig.countdown.completedEn}
          </p>
        </div>
      ) : (
        <div
          className="grid grid-cols-4 gap-2.5"
          aria-live="polite"
          aria-atomic="false"
        >
          {units.map((unit) => (
            <div
              key={unit.label}
              className="py-3 px-1.5 rounded-xl border border-[#B8860B]/40 bg-[#FFF8EC]"
            >
              <div className="font-tamil-serif text-2xl font-semibold text-[#8B1A1A] tabular-nums leading-tight">
                {unit.value}
              </div>
              <div
                lang="ta"
                className="text-sm font-medium text-[#3B2A20] mt-1"
              >
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
