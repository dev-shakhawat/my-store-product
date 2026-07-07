"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

import { ArrowRight, Globe } from "lucide-react";
import { IconType } from "react-icons";
import { XIcon } from "../icons/x-icon";
import MouseParallax from "../common/mouse-paralax";
import { Container } from "../common/container";

type SocialLink = {
  name: string;
  href: string;
  icon: IconType;
};

type FooterLink = {
  label: string;
  href: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
  {
    name: "TikTok",
    href: "#",
    icon: FaTiktok,
  },
  {
    name: "X",
    href: "#",
    icon: XIcon,
  },
];

const aboutLinks: FooterLink[] = [
  {
    label: "Search",
    href: "/search",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <footer
      ref={ref}
      className="relative z-10 bg-[#1e1f26] rounded-tl-[50px] rounded-tr-[50px] py-20  text-white"
    >
      <Container>

        <div className="grid gap-14 lg:grid-cols-[1fr_2fr]">
          {/* Left */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
              className="max-w-sm text-sm leading-7 text-gray-400"
            >
              This is a demonstration store. This demo product is not available
              for purchase. The product images have been taken from Freepik.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.15}
              className="mt-8 flex flex-wrap gap-4"
            >
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <MouseParallax
                  key={name}
                  strength={8}
                >

                  <Link

                    href={href}
                    aria-label={name}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-600 transition-all duration-300     "
                  >
                    <Icon size={20} className={`${name === "X" ? "bg-gray-400 p-1 rounded-full text-black   " : ""}`} />
                  </Link>
                </MouseParallax>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div>
            <h2
              className="max-w-3xl text-3xl font-bold leading-tight"
            >
              Introducing our New Fashion Collection, where contemporary style
              meets timeless elegance.
            </h2>

            <div className="my-10 border-t border-gray-700" />

            <div className="grid gap-10 md:grid-cols-2">
              {/* About */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.45}
              >
                <h3 className="text-2xl font-semibold">About Links</h3>

                <ul className="mt-6 space-y-4">
                  {aboutLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-gray-400 transition hover:text-yellow-400"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.6}
              >
                <h3 className="text-2xl font-semibold">
                  Subscribe to our newsletter
                </h3>

                <p className="mt-3 text-gray-400">
                  Stay in the loop, with exclusive offers and product previews.
                </p>

                <form className="mt-8">
                  <div className="flex items-center gap-3   pb-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                    />

                    <button
                      type="submit"
                      className="grid place-items-center min-h-12! min-w-12! items-center justify-center rounded-full bg-yellow-400 text-black transition duration-300 hover:-rotate-40 cursor-pointer  "
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.8}
          className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-gray-700 pt-8 text-sm text-gray-400 md:flex-row"
        >
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <span>৳ BDT / EN</span>
          </div>

          <Link
            href="/privacy-policy"
            className="transition hover:text-white"
          >
            Privacy Policy
          </Link>

          <p>Copyright © 2026 My Store Powered by Shopify</p>
        </motion.div>
      </Container>
    </footer>
  );
}