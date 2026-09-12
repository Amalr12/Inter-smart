"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "/services", label: "Services" },
        { href: "/solutions", label: "Solutions" },
        { href: "/virtualteam", label: "Virtual team" },
        { href: "/company", label: "Company" },
        { href: "/aboutus", label: "About us" },
    ];

    return (
        <nav className={`${poppins.variable} absolute top-0 left-0 z-50 w-full bg-transparent text-[#F1F1F1]`}>
            <div className="flex items-center justify-between px-5 py-4 md:px-10 md:py-8 lg:px-16">
                <Link href="/" className="cursor-pointer shrink-0">
                    <Image src="/logo.png" alt="logo" width={180} height={70} className="h-auto w-[120px] object-contain md:w-[150px] lg:w-[180px]" />
                </Link>

                <div className={`hidden items-center gap-8 lg:flex ${poppins.className}`}>
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="text-[16px] font-medium text-[#F1F1F1] transition hover:text-gray-300">
                            {link.label}
                        </a>
                    ))}
                    <Link href="/contact">
                        <button className="cursor-pointer rounded-3xl bg-[#F1F1F1] px-4 py-2 text-[14px] font-medium text-[#182434] transition  hover:bg-[#182434] hover:text-white hover:outline hover:outline-white">
                            Get in touch
                        </button>
                    </Link>
                </div>

                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                    className="flex cursor-pointer rounded-full border border-white/50 p-2 text-white transition hover:bg-white/10 lg:hidden"
                >
                    {open ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
                </button>
            </div>

            {open && (
                <div className={`absolute left-0 right-0 top-full w-full bg-[#182434] p-4 shadow-lg lg:hidden ${poppins.className}`}>
                    <div className="flex flex-col items-center">
                        {links.map((link) => (
                            <a key={link.href} href={link.href} className="block w-full py-2 text-center text-[12px] font-medium text-[#F1F1F1] transition hover:text-gray-300">
                                {link.label}
                            </a>
                        ))}
                        <Link href="/contact">
                            <button className="mt-2 rounded-3xl bg-[#F1F1F1] px-4 py-2 text-[12px] font-medium text-[#182434] transition  hover:bg-[#182434] hover:text-white hover:outline hover:outline-white">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}