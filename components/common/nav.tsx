"use client";

import Link from "next/link";
import { Container } from "./container";
import { TNavLink } from "@/types";

import { IoSearchOutline } from "react-icons/io5";
import { LuUserRound, LuMenu, LuX } from "react-icons/lu";
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
  const [openMenu, setOpenMenu] = useState(false);



  useEffect(() => {

    const handleScroll = () => {

      const currentY = window.scrollY;


      if(currentY <= 10){

        setIsTop(true);
        setShowNav(true);

      }else{

        setIsTop(false);


        if(currentY > lastScrollY.current){
          setShowNav(false);
          setOpenMenu(false);
        }
        else{
          setShowNav(true);
        }

      }


      lastScrollY.current = currentY;

    };


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive:true
      }
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );


  },[]);



  return (

    <nav
      className={`
      fixed 
      left-0 
      z-50 
      w-full 
      bg-white 
      text-black

      shadow
      border-b
      border-black/5

      transition-all
      duration-300
      ease-in-out

      ${
        isTop
        ?
        "top-10 translate-y-0"
        :
        showNav
        ?
        "top-0 translate-y-0"
        :
        "-translate-y-full -top-0"
      }
      `}
    >

      <Container>


        <div
          className="
          flex
          h-20
          items-center
          justify-between
          "
        >


          {/* Logo */}

          <Link
            href="/"
            className="
            text-xl
            font-bold
            whitespace-nowrap
            "
          >
            My Store
          </Link>




          {/* Desktop Menu */}

          <ul
            className="
            hidden
            md:flex
            items-center
            gap-8
            "
          >

            {
              navLinks.map((link)=>(
                <li key={link.label}>

                  <Link
                    href={link.href}
                    className="
                    font-oswald
                    text-sm
                    transition
                    hover:text-gray-500
                    "
                  >
                    {link.label}
                  </Link>

                </li>
              ))
            }

          </ul>





          {/* Desktop Icons */}

          <div
            className="
            hidden
            md:flex
            items-center
            gap-6
            "
          >

            <button>
              <IoSearchOutline size={22}/>
            </button>


            <Devider
              className="
              rotate-180
              h-10
              w-px!
              "
            />


            <button>
              <LuUserRound size={22}/>
            </button>


            <Devider
              className="
              rotate-180
              h-10
              w-px!
              "
            />


            <button>
              <BsHandbag size={22}/>
            </button>


          </div>






          {/* Mobile Right */}

          <div
            className="
            flex
            md:hidden
            items-center
            gap-5
            "
          >

            <button>
              <BsHandbag size={22}/>
            </button>


            <button
              onClick={()=>setOpenMenu(!openMenu)}
            >

              {
                openMenu
                ?
                <LuX size={26}/>
                :
                <LuMenu size={26}/>
              }

            </button>


          </div>


        </div>





        {/* Mobile Menu */}

        <div
          className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300

          ${
            openMenu
            ?
            "max-h-60 pb-6"
            :
            "max-h-0"
          }
          `}
        >

          <ul
            className="
            flex
            flex-col
            gap-5
            pt-5
            "
          >

            {
              navLinks.map((link)=>(
                <li key={link.label}>

                  <Link
                    href={link.href}
                    onClick={()=>setOpenMenu(false)}
                    className="
                    font-oswald
                    "
                  >
                    {link.label}
                  </Link>

                </li>
              ))
            }


            <li className="flex gap-5 pt-3">

              <button>
                <IoSearchOutline size={22}/>
              </button>


              <button>
                <LuUserRound size={22}/>
              </button>


            </li>


          </ul>


        </div>


      </Container>


    </nav>

  );
}