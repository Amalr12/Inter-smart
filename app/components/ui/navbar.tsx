"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { div } from "framer-motion/client";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className={`${poppins.variable} bg-transparent text-[#F1F1F1] md:p-10 absolute top-0 left-0 w-full z-50`}>
            <div className="flex items-center justify-between p-5 mb-4">
                <div className="cursor-pointer">
                    <Image src="/logo.png" alt="logo" width={180} height={70} className="object-contain" />
                </div>

                <div className={`space-x-10 hidden md:flex items-center ${poppins.className}`}>
                    <a href="/services" className="text-[#F1F1F1] md:text-[16px] font-medium hover:text-gray-300 cursor-pointer">Services</a>
                    <a href="/solutions" className="text-[#F1F1F1] md:text-[16px] font-medium hover:text-gray-300 cursor-pointer">Solutions</a>
                    <a href="/virtualteam" className="text-[#F1F1F1] md:text-[16px] font-medium hover:text-gray-300 cursor-pointer">Virtual team</a>
                    <a href="/company" className="text-[#F1F1F1] md:text-[16px] font-medium hover:text-gray-300 cursor-pointer">Company</a>
                    <a href="/aboutus" className="text-[#F1F1F1] md:text-[16px] font-medium hover:text-gray-300 cursor-pointer">About us</a>
                    <Link href="/contact">
                        <button className="bg-[#F1F1F1] text-[#182434] px-4 py-2 rounded-3xl hover:bg-gray-200 cursor-pointer">Get in touch</button>
                    </Link>
                </div>

                <IoMenu
                    onClick={() => setOpen(!open)}
                    className="h-7 w-7 md:hidden flex cursor-pointer text-white"
                />
            </div>

            {open && (
                <div className={`md:hidden text-center absolute top-16 left-0 w-full bg-[#182434] p-4 ${poppins.className}`}>
                    <a href="/services" className="block text-[#F1F1F1] text-[12px] font-medium hover:text-gray-300 cursor-pointer py-2">Services</a>
                    <a href="/solutions" className="block text-[#F1F1F1] text-[12px] font-medium hover:text-gray-300 cursor-pointer py-2">Solutions</a>
                    <a href="/virtualteam" className="block text-[#F1F1F1] text-[12px] font-medium hover:text-gray-300 cursor-pointer py-2">Virtual team</a>
                    <a href="/company" className="block text-[#F1F1F1] text-[12px] font-medium hover:text-gray-300 cursor-pointer py-2">Company</a>
                    <a href="/aboutus" className="block text-[#F1F1F1] text-[12px] font-medium hover:text-gray-300 cursor-pointer py-2">About us</a>
                    <Link href="/contact">
                        <button className="bg-[#F1F1F1] text-[#182434] px-4 py-2 rounded-3xl hover:bg-gray-200 cursor-pointer mt-2 text-[12px]">Get in touch</button>
                    </Link>
                </div>
            )}
        </nav>
    );
}