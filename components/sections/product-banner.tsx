"use client"

import Image from "next/image";
import { Container } from "../common/container";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { FaPinterest } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import productImage from "@/public/images/product _image.png"
import { useState } from "react";
import { XIcon } from "../icons/x-icon";
import { IoLogoFacebook } from "react-icons/io";
import Link from "next/link";

export function ProductBanner() {

  const [count, setCount] = useState<number>(1)

  const handleCount = (type: "minus" | "plus") => {
    if (type === "minus" && count > 1) {
      setCount(count - 1)
    }
    if (type === "plus") {
      setCount(count + 1)
    }
  }

  return (
    <div className="bg-black/10 py-10 sm:py-16 lg:py-20">
      <Container>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <Image
              src={productImage}
              alt="product image"
              width={1000}
              height={1000}
              className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex justify-center md:justify-end">
            <div className="shadow-lg bg-white p-5 sm:p-8 lg:p-10 rounded-2xl w-full max-w-[520px]">

              <h2 className="font-oswald font-bold text-2xl sm:text-3xl lg:text-4xl">
                Sample
              </h2>

              <p className="text-xl sm:text-2xl mt-4">
                Tk 286.00
              </p>

              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Experience a harmonious blend of premium sound quality and ergonomic design that allows.
              </p>

              {/* QUANTITY */}
              <h3 className="mt-5 text-sm sm:text-base font-bold font-oswald">
                Quantity
              </h3>

              <div className="mt-3 p-2 rounded-xl border border-black flex w-fit items-center gap-6 sm:gap-10 py-2 sm:py-3 px-4">
                <button onClick={() => handleCount("minus")}>
                  <LuMinus />
                </button>

                <span className="text-sm sm:text-base">
                  {count}
                </span>

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
  )
}