"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle floating-blobs background animation.
 * Uses pure CSS keyframes — zero canvas, zero jank.
 * Drop inside any page wrapper with `relative overflow-hidden`.
 */
export default function AnimatedBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  /* Randomly stagger each blob's animation on mount */
  useEffect(() => {
    const blobs = wrapperRef.current?.querySelectorAll<HTMLDivElement>(".anim-blob");
    blobs?.forEach((b) => {
      const delay = -(Math.random() * 20);          // negative = start mid-animation
      const duration = 18 + Math.random() * 14;     // 18-32 s
      b.style.animationDelay = `${delay}s`;
      b.style.animationDuration = `${duration}s`;
    });
  }, []);

  const blobs = [
    // [top%, left%, w-class, color]
    ["5%",  "10%", "w-72 h-72", "rgba(183,122,0,0.07)"],
    ["60%", "5%",  "w-56 h-56", "rgba(37,99,235,0.07)"],
    ["15%", "75%", "w-80 h-80", "rgba(37,99,235,0.06)"],
    ["70%", "70%", "w-64 h-64", "rgba(183,122,0,0.06)"],
    ["40%", "42%", "w-48 h-48", "rgba(16,185,129,0.05)"],
  ];

  return (
    <>
      <div
        ref={wrapperRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden z-0"
      >
        {blobs.map(([top, left, size, color], i) => (
          <div
            key={i}
            className={`anim-blob absolute ${size} rounded-full`}
            style={{
              top,
              left,
              background: color as string,
              filter: "blur(60px)",
              animationName: "blobDrift",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDirection: i % 2 === 0 ? "alternate" : "alternate-reverse",
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes blobDrift {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(30px, -20px) scale(1.05); }
          66%  { transform: translate(-20px, 25px) scale(0.97); }
          100% { transform: translate(15px, -10px) scale(1.03); }
        }
      `}</style>
    </>
  );
}
