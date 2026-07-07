"use client";

import Link from "next/link";
import {
  Store,
  Earth,
} from "lucide-react";

import { IoLogoFacebook } from "react-icons/io";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { Container } from "./container";
import { XIcon } from "../icons/x-icon";
import CurrencyLanguageSelector from "./currency-lng";

import { useEffect, useRef, useState } from "react";


type SocialLink = {
  id: number;
  href: string;
  icon: React.ReactNode;
  label: string;
};


const socialLinks: SocialLink[] = [
  {
    id: 1,
    href: "#",
    icon: <IoLogoFacebook size={18} />,
    label: "Facebook",
  },
  {
    id: 2,
    href: "#",
    icon: <FaInstagram size={17} />,
    label: "Instagram",
  },
  {
    id: 3,
    href: "#",
    icon: <IoLogoYoutube size={18} />,
    label: "YouTube",
  },
  {
    id: 4,
    href: "#",
    icon: <FaTiktok size={15} />,
    label: "TikTok",
  },
  {
    id: 5,
    href: "#",
    icon: (
      <XIcon
        className="
        bg-white 
        rounded-full 
        text-black 
        w-5 
        h-5
        p-1
        "
      />
    ),
    label: "X",
  },
];


type ActiveMenu = "currency" | "language" | null;


export default function AnnouncementBar() {

  const [currency, setCurrency] = useState("BDT");
  const [lng, setLng] = useState("EN");

  const [activeMenu, setActiveMenu] =
    useState<ActiveMenu>(null);

  const boxRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {

      if (
        boxRef.current &&
        !boxRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }

    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);



  return (
    <div
      className="
      w-full
      bg-black
      text-white
      py-1
      relative
      "
    >

      <Container>

        <div
          className="
          flex
          h-9
          items-center
          justify-between
          gap-3
          "
        >


          {/* LEFT */}

          <div
            className="
            flex
            items-center
            gap-3
            shrink-0
            "
          >

            {/* social */}
            <div
              className="
              hidden
              lg:flex
              items-center
              gap-3
              "
            >

              {
                socialLinks.map((item)=>(
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-label={item.label}
                    className="
                    transition
                    hover:text-blue-400
                    "
                  >
                    {item.icon}
                  </Link>
                ))
              }

            </div>


            <span
              className="
              text-sm
              sm:text-base
              font-medium
              tracking-wide
              whitespace-nowrap
              "
            >
              0123456780
            </span>


          </div>





          {/* CENTER */}

          <div
            className="
            hidden
            xl:block
            flex-1
            text-center
            "
          >

            <p
              className="
              font-medium
              text-sm
              "
            >
              New customers{" "}
              <span className="font-semibold">
                10% off
              </span>{" "}
              with WELCOME
            </p>

          </div>






          {/* RIGHT */}

          <div
            className="
            flex
            items-center
            gap-3
            sm:gap-5
            shrink-0
            "
          >


            <Link
              href="#"
              className="
              flex
              items-center
              gap-1
              hover:text-blue-400
              "
            >

              <Store size={18}/>

              <span
                className="
                hidden
                sm:inline
                text-sm
                "
              >
                Stores
              </span>

            </Link>




            {/* Currency */}

            <div
              ref={boxRef}
              className="relative"
            >

              <button
                type="button"
                className="
                flex
                items-center
                gap-1
                hover:text-blue-400
                "
              >

                <Earth size={18}/>


                <div
                  className="
                  flex
                  items-center
                  gap-1
                  text-sm
                  "
                >

                  <span
                    onClick={() =>
                      setActiveMenu(
                        activeMenu==="currency"
                        ? null
                        : "currency"
                      )
                    }
                    className="cursor-pointer"
                  >
                    {currency}
                  </span>


                  <span>
                    /
                  </span>


                  <span
                    onClick={() =>
                      setActiveMenu(
                        activeMenu==="language"
                        ? null
                        : "language"
                      )
                    }
                    className="cursor-pointer"
                  >
                    {lng}
                  </span>


                </div>


              </button>




              {/* dropdown */}

              <div
                className={`
                absolute
                right-0
                top-10
                z-50

                w-[260px]
                sm:w-[320px]

                transition-all
                duration-500

                ${
                  activeMenu
                  ?
                  "opacity-100 translate-y-0 visible"
                  :
                  "opacity-0 -translate-y-5 invisible"
                }
                `}
              >

                <div
                  className="
                  h-auto
                  max-h-[360px]
                  overflow-hidden
                  rounded-lg
                  bg-black
                  p-2
                  "
                >

                  <CurrencyLanguageSelector
                    className="bg-black"
                    showCurrency={
                      activeMenu==="currency"
                    }
                    showLanguage={
                      activeMenu==="language"
                    }
                    currency={currency}
                    lng={lng}
                    menuIsOpen={activeMenu}
                    onSelect={(data)=>{
                      if(data.currency_code)
                        setCurrency(data.currency_code);

                      if(data.language_code)
                        setLng(data.language_code);
                    }}
                  />

                </div>


              </div>



            </div>


          </div>


        </div>


      </Container>

    </div>
  );
}