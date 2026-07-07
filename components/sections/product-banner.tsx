"use client";

import Image from "next/image";
import { Container } from "../common/container";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { FaPinterest } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import productImage from "@/public/images/product _image.png";
import productImage2 from "@/public/images/product_image_2.png";
import productImage3 from "@/public/images/product_image_3.webp";
import { useState } from "react";
import { XIcon } from "../icons/x-icon";
import { IoLogoFacebook } from "react-icons/io";
import Link from "next/link";

import React from "react";
import { ProductSlider } from "../common/product-slider";
import { TProduct } from "@/types";

export function ProductBanner() {
  const [count, setCount] = useState<number>(1);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const handleCount = (type: "minus" | "plus") => {
    if (type === "minus" && count > 1) {
      setCount(count - 1);
    }
    if (type === "plus") {
      setCount(count + 1);
    }
  };

  const allProDucts: TProduct[] = [
    {
      name: "Product 1",
      price: 286.0,
      image: productImage,
      desc: "Experience a harmonious blend of premium sound quality and ergonomic design that allows.",
    },
    {
      name: "Product 2",
      price: 206.0,
      image: productImage2,
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Product 3",
      price: 308.0,
      image: productImage3,
      desc: "Adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Product 4",
      price: 286.0,
      image: productImage,
      desc: "Experience a harmonious blend of premium sound quality and ergonomic design that allows.",
    },
  ];

return (
  <div className="bg-black/5">
    <Container>
      <div className="relative bg-white flex flex-col lg:block">
        <ProductSlider
          allProDucts={allProDucts}
          setCurrentSlide={setCurrentSlide}
        />

        {/* RIGHT CONTENT */}
        <div className="lg:absolute lg:top-35 lg:right-0 mt-6 lg:mt-0 flex justify-center lg:justify-end px-4 lg:px-0">
          <div className="shadow-lg bg-white p-5 sm:p-8 lg:p-10 rounded-2xl w-full max-w-130">
            
            <h2 className="font-oswald font-bold text-2xl sm:text-3xl lg:text-4xl">
              Sample
            </h2>

            <p className="text-xl sm:text-2xl mt-4">
              Tk {allProDucts[currentSlide]?.price.toFixed(2)}
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              {allProDucts[currentSlide]?.desc}
            </p>

            {/* QUANTITY */}
            <h3 className="mt-5 text-sm sm:text-base font-bold font-oswald">
              Quantity
            </h3>

            <div className="mt-3 p-2 rounded-xl border border-black flex w-fit items-center gap-6 sm:gap-10 py-2 sm:py-3 px-4">
              <button onClick={() => handleCount("minus")}>
                <LuMinus />
              </button>

              <span className="text-sm sm:text-base">{count}</span>

              <button onClick={() => handleCount("plus")}>
                <GoPlus />
              </button>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button className="bg-black text-white font-oswald py-3 flex-1 rounded-full">
                Add to cart
              </button>

              <button className="bg-black text-white font-oswald py-3 flex-1 rounded-full">
                Buy it now
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex flex-wrap items-center gap-3 mt-6 text-gray-700">
              <IoLogoFacebook size={22} />

              <XIcon className="bg-black rounded-full text-white w-5 h-5 grid place-items-center" />

              <FaPinterest size={20} />

              <IoIosSend size={22} />

              <MdEmail size={22} />

              <Link href="#" className="underline ml-auto sm:ml-6">
                Need help?
              </Link>
            </div>

          </div>
        </div>
      </div>
    </Container>
  </div>
);
}
