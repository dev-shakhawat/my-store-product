

import Link from "next/link";
import {
  Store,
  Globe,
  Menu,
} from "lucide-react";
import { IoLogoFacebook } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

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
    icon: <IoLogoFacebook size={14} />,
    label: "Facebook",
  },
  {
   id: 2,
   href: "#" ,
   icon: <FaInstagram />,
   label: "Instagram"
  },
    {
    id: 2,
    href: "#",
    icon: <IoLogoYoutube size={14} />,
    label: "YouTube",
  },
  {
    id: 1,
    href: "#",
    icon: <FaTiktok size={14} />,
    label: "TikTok",
  },

  {
    id: 3,
    href: "#",
    icon: <RiTwitterXFill size={14} />,
    label: "X",
  },
];

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#0B1F36] text-white text-sm">
      <div className="mx-auto flex h-9 items-center justify-between px-3 lg:px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            className="rounded bg-[#2A82FF] px-2 py-1 text-xs font-medium"
            type="button"
          >
            <Menu size={14} />
          </button>

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
            with <span className="font-bold">WELCOME</span>
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <Link
            href="#"
            className="flex items-center gap-1 hover:text-blue-400"
          >
            <Store size={15} />
            <span className="hidden sm:inline">Stores</span>
          </Link>

          <button
            type="button"
            className="flex items-center gap-1 hover:text-blue-400"
          >
            <Globe size={15} />
            <span>BDT / EN</span>
          </button>
        </div>
      </div>
    </div>
  );
}