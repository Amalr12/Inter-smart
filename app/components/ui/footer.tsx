import { Poppins } from "next/font/google";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export default function Footer() {
    return (

            <div>
 <div className={`    grid md:grid-cols-3 grid-cols-1 gap-4 md:px-20 px-5 py-10 bg-[#182434] text-[#F1F1F1] ${poppins.className}`}>
            <div className="space-y-10">
                <h1 className="md:text-[24px] text-[18px] font-medium">Services</h1>
                  <div className="md:text-[16px]  text-[13px] space-y-10">
                <p >Hyperparameter model tuning

</p>
                <p>PoC of AI Solutions</p>
                <p>AI Model Optimization</p>
                  </div>
                
               
            </div>
            <div className="space-y-10 ">
                <h1 className="md:text-[24px] text-[18px] md:mt-0 mt-5 font-medium">Pages</h1>
                 <div className="md:text-[16px] text-[13px] space-y-10 ">
                <Link href={"/services"}>
                    <p className="cursor-pointer mb-10" >Services</p>
                    
                    
                </Link >
              <Link href={"/technology"}>
                  <p className="cursor-pointer mb-10">Technology</p>
              </Link >
               <Link href={"/about"}>
                 <p className="cursor-pointer mb-10">Portfolio</p>
               </Link >
                <Link href={"/virtual-team"}>
                    <p className="cursor-pointer mb-10">Virtual team</p>
                </Link >
                <Link href={"/contact"}>
                    <p className="cursor-pointer mb-5">Contact us</p>
                </Link >
                 </div>
            </div>
            <div className="space-y-10 ">
                <h1 className="md:text-[24px] text-[18px] font-medium md:mt-0 mt-5 ">Stay connected</h1>
                <div className="md:text-[28px] text-[20px]  md:justify-start text-center md:ps-1 flex space-x-5 ">
             <Link href={"https://www.facebook.com/Intersmart-110882646187091"} target="_blank">
                  <FaFacebookSquare className="cursor-pointer"/>
             </Link >
          <Link href={"https://www.instagram.com/intersmart.ai/"} target="_blank">
              <IoLogoInstagram className="cursor-pointer"/>
          </Link>
                <Link href={"https://www.linkedin.com/company/intersmart"} target="_blank">
                    <FaLinkedin className="cursor-pointer" />
                </Link>
               <Link href={"https://twitter.com/intersmartai"} target="_blank">
                   <FaSquareXTwitter className="cursor-pointer" />
               </Link>
              
                 </div>
            </div>
        </div>
        <div className={`md:px-20 px-5 py-10 flex md:justify-between text-center bg-[#182434] md:text-[16px] text-[12px] text-[#F1F1F1] ${poppins.className}`}>
        <p>© 2026 Intersmart Ltd. All rights reserved.</p>
        <p>Privacy Policy | GDPR Policy | Terms of Service</p>
        </div>
            </div>
       

    );
}