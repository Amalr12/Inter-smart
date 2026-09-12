import { Poppins } from "next/font/google";
import Image from "next/image";
import Services from "./services";
import AboutServices from "./services";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});
export default function About() {
    return (
        <div>
            <div className="md:m-20 m-5">
                <h1 className={`text-[25px] md:text-[35px] font-medium text-center ${poppins.className}`}>Our Artificial Intelligence Services</h1>
                <p className={`text-[13px] md:text-[18px] font-normal text-center ${poppins.className}`}>As one of India's leading AI development companies, SysAlly offers the following services to businesses.</p>
                <div className="h-1 w-30 bg-blue-500 mx-auto my-4"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 m-10 ">
                <div className="md:p-5 p-2">
                    <Image src="/about.png"
                        alt="about"
                        width={500}
                        height={580}
                        className="h-full w-full object-cover" />
                </div>
                <div>
                   <AboutServices />
                </div>
            </div>
            <div className="text-center my-10">
                <button className={`bg-[#182434] hover:bg-white hover:text-[#182434] hover:border hover:border-[#182434] cursor-pointer rounded-3xl text-white py-2 px-6  md:text-[16px] text-[12px]  ${poppins.className}`}>
                    View all services
                </button>
            </div>
        </div>
    );
}