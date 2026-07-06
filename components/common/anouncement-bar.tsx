
"use client"
import Link from "next/link";
import {
  Store, 
  Earth,
} from "lucide-react";
import { IoLogoFacebook } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import CurrencyLanguageSelector from "./currency-lng";
import { useEffect, useRef, useState } from "react";
import { Container } from "./container";
import { XIcon } from "../icons/x-icon";

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
    icon: <IoLogoFacebook size={20} />,
    label: "Facebook",
  },
  {
    id: 2,
    href: "#",
    icon: <FaInstagram size={20} />,
    label: "Instagram"
  },
  {
    id: 3,
    href: "#",
    icon: <IoLogoYoutube size={19} />,
    label: "YouTube",
  },
  {
    id: 4,
    href: "#",
    icon: <FaTiktok size={16} />,
    label: "TikTok",
  },

  {
    id: 5,
    href: "#",
    icon: <XIcon className="bg-white rounded-full text-black w-5 h-5 grid place-items-center     "   />,
    label: "X",
  },
];
type ActiveMenu = "currency" | "language" | null;

export default function AnnouncementBar() {

  const [currency, setCurrency] = useState<string>("BDT")

  const [lng, setLng] = useState<string>("EN")

  const boxRef = useRef<HTMLDivElement>(null)
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);





  return (
    <div className="w-full bg-[#000000] text-white! text-base py-0.5 relative ">
      <Container>

        <div className="mx-auto flex h-9 items-center justify-between  ">
          {/* Left */}
          <div className="flex items-center gap-4">

            <div className="hidden items-center gap-3 sm:flex">
              {socialLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-label={item.label}
                  className="transition hover:text-blue-400"
                >
                  {item.icon}
                </Link>
              ))}
            </div>

            <span className="font-medium tracking-wide">
              0123456780
            </span>
          </div>

          {/* Center */}
          <div className="hidden md:block">
            <p className="font-medium">
              New customers{" "}
              <span className="font-semibold text-white">
                10% off
              </span>{" "}
              with <span className="">WELCOME</span>
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-blue-400"
            >
              <Store size={20} />
              <span className="hidden sm:inline">Stores</span>
            </Link>

            <button
              type="button"
              className="flex items-center gap-1 hover:text-blue-400"
            >
              <Earth size={20} />

              <div ref={boxRef} className="">
                <div className="flex items-center gap-1 text-sm   " >
                  <span
                    onClick={() =>
                      setActiveMenu((prev) =>
                        prev === "currency" ? null : "currency"
                      )
                    }
                    className="">
                    {currency}
                  </span>
                  /
                  <span
                    onClick={() =>
                      setActiveMenu((prev) =>
                        prev === "language" ? null : "language"
                      )
                    }
                    className="">
                    {lng}
                  </span>
                </div>

                <div

                  className={` absolute top-10 transition-all duration-300 w-1/5 flex justify-end  ${activeMenu ? "right-0" : "-right-50  "}    `}>

                  <CurrencyLanguageSelector
                    showCurrency={activeMenu === "currency"}
                    showLanguage={activeMenu === "language"}
                    currency={currency}
                    lng={lng}
                    menuIsOpen={activeMenu}
                    onSelect={(data: { currency_code: string; language_code: string; }) => {
                      if (data.currency_code) setCurrency(data.currency_code)
                      if (data.language_code) setLng(data.language_code)
                    }}
                  />
                </div>
              </div>
            </button>
          </div>
        </div >
      </Container>
    </div >
  );
}