"use client";

import { Container } from "../common/container";
import { motion } from "motion/react";

import productImage from "@/public/images/product _image.png";
import productImage2 from "@/public/images/product_image_2.png";
import productImage3 from "@/public/images/product_image_3.webp"; 
import Image, { StaticImageData } from "next/image";

export default function FashionCollection({}: {}) {
  const allProDucts: { title: string; image: string | StaticImageData }[] = [
    { title: "Swimwear", image: productImage },
    { title: "Trending", image: productImage2 },
    { title: "New Arrivals", image: productImage3 },
    { title: "Best Sellers", image: productImage },
  ];

  return (
    <div className="mt-25 ">
      <Container>
        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-bold font-oswald text-5xl text-black"
        >
          Fashion
          <span className="ml-2 font-bold text-transparent [-webkit-text-stroke:1px_#000000]">
            Collection
          </span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: -40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
          className="mt-4 max-w-125 text-base"
        >
          Featuring cutting-edge designs and trendsetting pieces, this
          collection is curated to keep you looking chic and modern.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8    ">
          {allProDucts.map((product, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden bg-black/15"
            >
              <motion.div
                initial={{
                  y: 100,
                }}
                whileInView={{
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-9/10 mx-auto  h-100 object-contain "
                />
              </motion.div>

              <h3 className="absolute bottom-5 left-5 text-lg text-white font-oswald font-semibold">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
