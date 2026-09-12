import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export default function Navbar() {
    return (
        <nav className={`${poppins.variable} bg-transparent text-[#F1F1F1] md:p-10 absolute top-0 left-0 w-full z-50`}>
            <div className="flex items-center justify-between">
                <div className="cursor-pointer">
                    <Image src="/logo.png" alt="logo" width={180} height={70} className="object-contain" />
                </div>
                <div className={`space-x-10 hidden md:flex items-center ${poppins.className}`}>
                    <a href="/services" className="text-[#F1F1F1] md:text-[16px] font-medium hover:text-gray-300 cursor-pointer">Services</a>
                    <a href="/solutions" className="text-[#F1F1F1] md:text-[16px] font-medium hover:text-gray-300 cursor-pointer">Solutions</a>
                    <a href="/virtualteam" className="text-[#F1F1F1] md:text-[16px] font-medium hover:text-gray-300 cursor-pointer">Virtual team</a>
                    <a href="/company" className="text-[#F1F1F1] md:text-[16px] font-medium hover:text-gray-300 cursor-pointer">Company</a>
                    <a href="/aboutus" className="text-[#F1F1F1] md:text-[16px] font-medium hover:text-gray-300 cursor-pointer">About us</a>
                    <Link href="/contact "> <button className="bg-[#F1F1F1] text-[#182434] px-4 py-2 rounded-3xl hover:bg-gray-200 cursor-pointer">Get in touch</button>
                    </Link>

                </div>
            </div>
        </nav>
    );
}