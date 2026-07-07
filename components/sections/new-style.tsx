"use client";
import { motion } from "motion/react";
import { Container } from "../common/container";
import ProductCard from "../common/product-card";
import ProductImage from "@/public/images/product _image.png";
import ProductImage2 from "@/public/images/product_image_2.png";
import ProductImage3 from "@/public/images/product_image_3.webp";

export default function NewStyle({}: {}) {
  return (
    <div className="py-25 relative z-10 bg-white ">
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
          New Season ,
          <span className=" font-dancing-script font-medium ml-1    ">
            New Styles
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          <ProductCard image={ProductImage} />
          <ProductCard image={ProductImage2} />
          <ProductCard image={ProductImage3} />
          <ProductCard image={ProductImage} />
        </div>
      </Container>
    </div>
  );
}
