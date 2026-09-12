import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function HomeProjects() {
  return (
    <section className="py-10 md:py-16">
      <div className="md:mx-20 mx-5">
        <div className="mb-8 text-center">
          <h1 className={`text-[25px] md:text-[35px] font-medium ${poppins.className}`}>Our Recent AI Projects</h1>
          <p className={`text-[13px] md:text-[18px] font-normal ${poppins.className}`}>As one of India's leading AI development companies, SysAlly offers the following services to businesses.</p>
          <div className="h-1 w-30 bg-blue-500 mx-auto my-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center md:px-8 lg:px-2">
          <div className="flex justify-center md:p-4">
            <Image src="/project-4.png" alt="project1" width={500} height={580} className="object-cover w-full max-w-[500px] h-auto" />
          </div>
          <div className="flex justify-center md:p-4">
            <Image src="/project-5.avif" alt="project2" width={500} height={680} className="object-cover w-full max-w-[500px] h-auto" />
          </div>
        </div>

        <div className="text-center my-10">
          <button className={`bg-[#182434] hover:bg-white hover:text-[#182434] hover:border hover:border-[#182434] text-white font-normal md:text-[16px] py-2 px-6 rounded cursor-pointer rounded-3xl transition ${poppins.className}`}>
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
}