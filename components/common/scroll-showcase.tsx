'use client';

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

 

export interface ShowcaseCredit {
  label: string;
  href: string;
}

export interface ShowcaseItem { 
  id: string; 
  colorClass: string; 
  imageUrl: string; 
  credit?: ShowcaseCredit;
}

export interface ScrollShowcaseProps { 
  items: ShowcaseItem[]; 
  heading?: ReactNode; 
  footer?: ReactNode; 
  className?: string; 
  showProgressLine?: boolean; 
  progressTrackClassName?: string; 
  progressFillClassName?: string;
}

let pluginRegistered = false;

export default function ScrollShowcase({
  items,
  heading,
  footer,
  className = '',
  showProgressLine = true,
  progressTrackClassName = 'stroke-neutral-200',
  progressFillClassName = 'stroke-green-600',
}: ScrollShowcaseProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    if (!pluginRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      pluginRegistered = true;
    }

    const ctx = gsap.context(() => {
      const imageEls = gsap.utils.toArray<HTMLDivElement>(
        '[data-showcase-image]:not([data-showcase-static])'
      );
 
      gsap.set('[data-showcase-image]', {
        zIndex: (i, _target, targets) => targets.length - i,
      });

      imageEls.forEach((image, i) => {
        const nextImage = image.nextElementSibling as HTMLElement | null;
        if (!nextImage) return;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: showcaseRef.current,
              start: () => `top -${window.innerHeight * i}`,
              end: () => `+=${window.innerHeight}`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          })
          .fromTo(
            image,
            { height: '100%', y: 0 },
            { height: '0%', y: -50, ease: 'none' },
            0
          )
          .fromTo(nextImage, { y: 50 }, { y: 0, ease: 'none' }, 0);
      });

      ScrollTrigger.create({
        trigger: showcaseRef.current,
        start: 'top top',
        end: () => `+=${items.length * window.innerHeight}`,
        pin: imageWrapRef.current,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
 
      if (showProgressLine) {
        ScrollTrigger.create({
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => setProgress(self.progress),
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, [items.length, showProgressLine]);

  return (
    <div ref={rootRef} className={`relative font-["Signika_Negative",sans-serif] ${className}`}>
      {showProgressLine && (
        <svg
          aria-hidden
          className="pointer-events-none fixed inset-0 z-50 h-screen w-screen"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        > 
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="0"
            className={progressTrackClassName}
            strokeWidth="0.3"
            vectorEffect="non-scaling-stroke"
          /> 
          <line
            x1="0"
            y1="100"
            x2={progress * 100}
            y2={100 - progress * 100}
            className={progressFillClassName}
            strokeWidth="0.6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}

      <section className="flex h-screen items-center justify-center bg-neutral-100">
        {heading}
      </section>

      <section
        ref={showcaseRef}
        className="relative flex items-stretch justify-around"
        style={{ height: `${items.length * 100}vh` }}
      >
        {/* Text column: stays left, order left -> right preserved */}
        <div className="relative h-full w-[450px] max-w-[80vw] overflow-hidden">
          <div className="relative h-full w-full">
            {items.map((item) => (
              <div
                key={item.id}
                className={`relative flex h-screen w-full flex-col items-center justify-center bg-white text-center text-3xl font-black uppercase sm:text-4xl ${item.colorClass}`}
              >
                {item.id}
                {item.credit && (
                  <a
                    href={item.credit.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-lg font-normal normal-case text-neutral-300 transition-colors hover:text-neutral-500"
                  >
                    {item.credit.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
 
        <div
          ref={imageWrapRef}
          className="relative mt-[10vh] h-[80vh] w-[450px] max-w-[80vw] overflow-hidden rounded-md"
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              data-showcase-image
              data-showcase-static={i === items.length - 1 ? 'true' : undefined}
              className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            />
          ))}
        </div>
      </section>

      <section className="flex h-screen items-center justify-center bg-neutral-100">
        {footer}
      </section>
    </div>
  );
}