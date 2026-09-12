import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export default function HomeContact() {
  return (
    
   <div className={`bg-[#C9D6D6]  ${poppins.className} md:px-15 px-5`}>
       <div className="md:px-10 py-20 grid md:grid-cols-2 grid-cols-1 gap-4  ">
       <div className=" pe-5  text-center">
       <h1  className=" flex text-justify font-semibold text-[#182434] md:text-[38px] text-[17px]   pe-5 md:mt-10">Let’s talk about how digital initiatives can transform your business</h1>
       <p className=" flex text-justify font-normal text-[#182434] md:text-[18px] text-[12px]  text-xs flex text-justify">We’ll happily assist in exploring what will work best for you. Like, really best.</p>
     </div>
     <div className=" ">
       <h1 className="md:text-[30px] font-medium text-[#182434]">Schedule Meeting</h1>
       <input className="w-full mt-4 p-2 border border-[#182434] rounded bg-white text-[#182434]" type="text" placeholder="Your Name" />
       <input className="w-full mt-4 p-2 border border-[#182434] rounded bg-white text-[#182434]" type="email" placeholder="Your Email" />
       <textarea className="w-full mt-4 p-2 border border-[#182434] rounded bg-white text-[#182434]" placeholder="Your Message" rows={4} />
       <button className="mt-4 bg-[#182434] hover:bg-white md:text-[16px] text-[12px]  cursor-pointer hover:text-[#182434] hover:border hover:border-[#182434] text-white py-2 px-6 rounded-3xl ">
         Submit
       </button>
     </div>
     </div>
     </div>
  );
}