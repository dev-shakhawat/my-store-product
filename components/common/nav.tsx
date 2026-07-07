"use client";
import Link from "next/link";
import { Container } from "./container";
import { TNavLink } from "@/types";
import { IoSearchOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import { Devider } from "./liner";
import { useEffect, useRef, useState } from "react";

export function Nav() {
  const navLinks: TNavLink[] = [
    { label: "Home", href: "/" },
    { label: "Catalog", href: "/catalog" },
    { label: "Contact", href: "/contact" },
  ];

  const lastScrollY = useRef(0);

  const [showNav, setShowNav] = useState(true);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // একদম top এ
      if (currentY <= 10) {
        setIsTop(true);
        setShowNav(true);
      } else {
        setIsTop(false);

        if (currentY > lastScrollY.current) {
          // scrolling down
          setShowNav(false);
        } else {
          // scrolling up
          setShowNav(true);
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
    fixed left-0 z-50 w-full bg-white text-black
    transition-all duration-300 ease-in-out
    shadow border-b border-black/5
    ${
      isTop
        ? "top-10 translate-y-0"
        : showNav
          ? "top-0 translate-y-0"
          : "-translate-y-30"
    }
  `}
    >
      <Container>
        <div className="flex items-center justify-between  ">
          <Link href={`/`}>My Store</Link>

          <ul className="flex items-center gap-4   ">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="font-oswald ">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-8 ">
            <button>
              <IoSearchOutline size={22} />
            </button>
            <Devider className="rotate-180 h-15 w-px!  " />
            <button>
              <LuUserRound size={22} />
            </button>
            <Devider className="rotate-180 h-15 w-px!  " />
            <button>
              <BsHandbag size={22} />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
