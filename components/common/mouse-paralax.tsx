"use client";

import { ReactElement, useRef } from "react";

interface MouseParallaxProps {
  children: ReactElement;
  strength?: number;
}

export default function MouseParallax({
  children,
  strength = 20,
}: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    ref.current.style.transform = `translate(${x * strength}px, ${
      y * strength
    }px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;

    ref.current.style.transform = "translate(0,0)";
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave} 
    >
      {children &&
        (() => {
          const child = children;
          return (
            <div
              ref={ref}
              className="transition-transform duration-300 ease-out will-change-transform"
            >
              {child}
            </div>
          );
        })()}
    </div>
  );
}