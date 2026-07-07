'use client';

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from './container';
import { SlArrowRightCircle } from "react-icons/sl";




export interface ShowcaseCredit {
  label: string;
  href: string;
}

export interface ShowcaseItem {
  id: string;
  colorClass: string;
  imageUrl: string;
  /** left panel e dekhano custom content (line/text/heading etc.) */
  content?: ReactNode;
  credit?: ShowcaseCredit;
  title: React.ReactNode;
  desc: string;
  color: string
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

/** c: -100 (fully visible) -> 100 (fully hidden), line: x - y = c
 *  Ekhon eta ekta SINGLE element (text+image wrapper) er upor apply hocche,
 *  tai x,y coordinate 0-100 mane full combined box (dui half mile)-r
 *  percentage. Fole ekta e continuous diagonal cut hobe, dui half e alada
 *  alada offset lagbe na. */
function clipPathFromC(cRaw: number): string {
  const c = Math.min(100, Math.max(-100, cRaw));

  if (c <= -100) return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
  if (c >= 100) return 'polygon(100% 0%, 100% 0%, 100% 0%)';

  if (c < 0) {
    const yLeft = -c;
    const xBottom = c + 100;
    return `polygon(0% 0%, 100% 0%, 100% 100%, ${xBottom}% 100%, 0% ${yLeft}%)`;
  }

  const xTop = c;
  const yRight = 100 - c;
  return `polygon(${xTop}% 0%, 100% 0%, 100% ${yRight}%)`;
}

/** p:0->1 -> c:-100->100, ekdom simple linear map. Kono offset lagbe na
 * karon amra ekhon puro (text+image) wrapper ekta e clip kortesi. */
function globalC(p: number): number {
  return -100 + 200 * Math.min(1, Math.max(0, p));
}

export default function ScrollShowcase({
  items,
  className = '',
  showProgressLine = true,
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
      // Ekhon shudhu EKTA type of element ache: pura item wrapper
      // (text + image duitai er bhitore).
      const wrapEls = gsap.utils.toArray<HTMLDivElement>(
        '[data-showcase-wrap]:not([data-showcase-static])'
      );

      gsap.set('[data-showcase-wrap]', {
        // pehle item shobar upore thakbe, pore items niche stack hobe
        zIndex: (i, _target, targets) => targets.length - i,
      });

      const applyClip = (el: HTMLElement, c: number) => {
        const clip = clipPathFromC(c);
        el.style.clipPath = clip;
        el.style.setProperty('-webkit-clip-path', clip);
      };

      // shuru te shob fully visible
      wrapEls.forEach((el) => applyClip(el, -100));

      wrapEls.forEach((wrapEl, i) => {
        const state = { p: 0 };

        gsap.timeline({
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: () => `top -${window.innerHeight * i}`,
            end: () => `+=${window.innerHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).to(state, {
          p: 1,
          ease: 'none',
          onUpdate: () => {
            const C = globalC(state.p);
            applyClip(wrapEl, C); // pura wrapper (text+image) ekbare clip
          },
        }, 0);
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

  const text = "SHOP NOW";

  return (
    <div ref={rootRef} className={`relative font-["Signika_Negative",sans-serif] ${className}`}>
      <section
        ref={showcaseRef}
        className="relative flex items-stretch justify-around"
        style={{ height: `${items.length * 100}vh` }}
      >
        <div
          ref={imageWrapRef}
          className="relative mt-[10vh] h-[80vh] w-full  overflow-hidden rounded-md"
        >
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <div
                key={item.id}
                data-showcase-wrap
                data-showcase-static={isLast ? 'true' : undefined}
                className="absolute inset-0 flex"
              >
                <div className="absolute top-0 left-0 z-2 w-full     ">
                  <Container>

                    <div className="max-w-2xl  mt-30 ">

                      {item.title}

                      <p className="text-base text-white mt-10  ">{item.desc}</p>

                      <button
                        className="
                        group relative 
                        flex items-center
                        overflow-hidden
                        rounded-full 
                        bg-black 
                        px-6 py-3
                        min-w-[150px]
                        mt-10
                      "
                      >
                        {/* Icon */}
                        <SlArrowRightCircle
                          className="
                          absolute
                          left-4
                          text-white
                          transition-all
                          duration-500
                          ease-[cubic-bezier(.34,1.56,.64,1)]

                          group-hover:left-[calc(100%-35px)]
                        "
                        />

                        {/* Text */}
                        <span
                          className="
                            ml-7
                            group-hover:ml-0
                            flex
                            transition-all
                            duration-500
                            group-hover:-translate-x-2
                          "
                        >
                          {text.split("").map((letter, index) => (
                            <span
                              key={index}
                              className="wave-letter text-white"
                              style={{
                                animationDelay: `${index * 70}ms`,
                              }}
                            >
                              {letter === " " ? "\u00A0" : letter}
                            </span>
                          ))}
                        </span>
                      </button>


                      <div className="overflow-hidden whitespace-nowrap mt-10 md:mt-20 lg:mt-30 xl:mt-40  ">
                        <div className="flex w-max marquee">
                          {[1, 2].map((item) => (
                            <p
                              key={item}
                              className="
                              ml-2
                              pr-20
                              font-bold
                              text-transparent
                              text-[90px]
                              [-webkit-text-stroke:1px_#000000]
                            "
                            >
                              Up to 50% off Storewide
                            </p>
                          ))}
                        </div>
                      </div>

                    </div>

                  </Container>

                </div>
                {/* Left half: custom text/line content */}
                <div
                  style={{
                    background: item.color,
                  }}
                  className={`flex h-full w-1/2 flex-col justify-center bg-gray-200 px-10 relative ${item.colorClass}`}
                >

                </div>

                {/* Right half: image */}
                <div
                  className="h-full w-1/2 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}