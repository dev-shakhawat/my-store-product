import Image, { StaticImageData } from "next/image";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import MouseParallax from "./mouse-paralax";

export default function ProductCard({image}: { image: string | StaticImageData }) {
  const colorOptions = [
    { code: "#FFEBD3" },
    { code: "#F9E8A2" },
    { code: "#88BDA4" },
    { code: "#827148" },
    { code: "#9D6638" },
  ];

  return (
    <div className="border border-black/10 rounded-2xl group overflow-hidden bg-black/5 relative   ">
      <Image
        src={image}
        alt="Product Image"
        width={1000}
        height={1000}
        className=" w-full h-100 object-contain rounded-2xl"
      />

      <div className="p-4 relative bg-white z-3 ">
        <p className="text-sm text-gray-500">Example product title</p>

        <h2 className="font-bold  text-base ">Tk 19.99 BDT</h2>

        <button className=" transition-all duration-600  w-15 h-15 bg-gray-400 rounded-full grid place-items-center text-white absolute top-1/2 -right-40 group-hover:right-4 -translate-y-1/2        ">
          <HiOutlineShoppingBag size={20} />
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl transition-all duration-500 absolute -bottom-40 left-1/2 -translate-x-1/2 h-50 w-[96%] group-hover:bottom-0 z-2 pb-65    ">
        <h2 className="font-bold  text-base font-oswald  ">Size</h2>

        <div className="flex items-center gap-2 mt-4    ">
          <MouseParallax strength={10}>
            <button className=" border border-black/50 p-2 rounded-xl w-10      ">
              S
            </button>
          </MouseParallax>
          <MouseParallax strength={10}>
            <button className=" border border-black/50 p-2 rounded-xl w-10       ">
              M
            </button>
          </MouseParallax>
          <MouseParallax strength={10}>
            <button className=" border border-black/50 p-2 rounded-xl w-10       ">
              L
            </button>
          </MouseParallax>
        </div>

        <h2 className="font-bold  text-base font-oswald mt-5 ">Color</h2>

        <div className="flex gap-1.5 mt-3 ">
          {colorOptions.map((color, index) => (
            <div
              key={index}
              className="h-5 w-5 rounded-full border-2 border-transparent transition-all duration-200 hover:border-white hover:ring-2 hover:ring-black hover:ring-offset-1 hover:ring-offset-white"
              style={{ backgroundColor: color.code }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
