"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  lines: string[]; // ekhon string na, string[] - protita line alada
  className?: string;
  lineClassName?: string;
  overlap?: number; // 0 to 1, koto % overlap hobe (default 0.5)
}

export default function TextReveal({
  lines,
  className = "",
  lineClassName = "",
  overlap = 0.5,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    const overlays = overlayRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!overlays.length) return;

    gsap.set(overlays, { clipPath: "inset(0 100% 0 0)" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    overlays.forEach((el, i) => {
      tl.to(
        el,
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
          duration: 1, // relative unit, timeline normalize kore dibe
        },
        // eita hocche overlap-er magic:
        // proti line-er start position = previous line-er (1 - overlap) point e
        i === 0 ? 0 : `-=${overlap}`
      );
    });

    return () => {
      tl.kill();
      tl.scrollTrigger?.kill();
    };
  }, [overlap]);

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {lines.map((line, i) => (
        <div key={i} className={`relative ${lineClassName}`}>
          {/* Base line */}
          <div className="text-neutral-300">{line}</div>

          {/* Reveal overlay */}
          <div
            ref={(el) => {
              overlayRefs.current[i] = el;
            }}
            className="absolute inset-0 text-[#000000] pointer-events-none"
          >
            {line}
          </div>
        </div>
      ))}
    </div>
  );
}