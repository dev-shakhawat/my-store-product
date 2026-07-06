import Link from "next/link";
import { Container } from "./container";
import { TNavLink } from "@/types";
import { IoSearchOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import { Devider } from "./liner";



export function Nav() {

    const navLinks: TNavLink[] = [
        { label: "Home", href: "/" },
        { label: "Catalog", href: "/catalog" },
        { label: "Contact", href: "/contact" },
    ]

    return (
        <nav className="bg-white text-black     ">

            <Container>

                <div className="flex items-center justify-between  ">
                    <Link
                        href={`/`}
                    >
                        My Store
                    </Link>

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
                            <IoSearchOutline  size={22} />
                        </button>
                        <Devider className="rotate-180 h-15 w-0.25!  " />
                        <button>
                            <LuUserRound size={22}  />
                        </button>
                        <Devider className="rotate-180 h-15 w-0.25!  " />
                        <button>
                            <BsHandbag size={22}  />
                        </button>
                    </div>




                </div>

            </Container>


        </nav>
    )
}

