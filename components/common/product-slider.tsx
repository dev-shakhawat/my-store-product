import { TProduct } from "@/types";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";
import ArrowBtn from "./arrow-btn";

export function ProductSlider({ allProDucts, setCurrentSlide }: { allProDucts: TProduct[], setCurrentSlide: React.Dispatch<React.SetStateAction<number>> }) {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 2,
        spacing: 3,
      },
      breakpoints: {
        "(max-width: 1020px)": {
          slides: {
            perView: 1,
            spacing: 3,
          },
        },

        "(max-width: 640px)": {
          slides: {
            perView: 1,
            spacing: 3,
          },
        },
      },

      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      // add plugins here
    ],
  );


  return (
    <div className=" ">
      <div ref={sliderRef} className="keen-slider relative   ">
        {allProDucts.map((product, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-black/5 md:py-20    "
          >
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={1000}
              className=" w-full max-w-150 h-auto object-contain rounded-2xl"
            />
          </div>
        ))}
        {loaded && instanceRef.current ? (
          <div className="flex gap-2  absolute bottom-10  left-0  ">
            <ArrowBtn
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              dir="left"
            />
            <ArrowBtn
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              dir="right"
            />
          </div>
        ) : null}
      </div>

    </div>
  );
}
