"use client";

import { useMemo } from "react";

export default function FloatingHearts() {
  const hearts = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 18; i++) {
      arr.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 12,
        size: 10 + Math.random() * 12,
        opacity: 0.08 + Math.random() * 0.16,
      });
    }
    return arr;
  }, []);

  return (
    <div className="hearts" aria-hidden="true">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}vw`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            width: `${h.size}px`,
            height: `${h.size}px`,
            opacity: h.opacity,
          }}
        />
      ))}
    </div>
  );
}
