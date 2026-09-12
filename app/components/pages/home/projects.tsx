import Image from "next/image";

export default function HomeProjects() {
  return (
    <section className="py-10 md:py-16">
      <div className="md:px-10 px-5">
        <div className="mb-8 text-center">
          <h1 className="text-[25px] md:text-[35px] font-medium">Our Recent AI Projects</h1>
          <p className="text-[13px] md:text-[18px] font-normal">As one of India's leading AI development companies, SysAlly offers the following services to businesses.</p>
          <div className="h-1 w-30 bg-blue-500 mx-auto my-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center">
            <Image src="/project-4.png" alt="project1" width={500} height={580} className="object-cover w-full max-w-[450px] h-auto" />
          </div>
          <div className="flex justify-center md:px-4">
            <Image src="/project-5.avif" alt="project2" width={500} height={680} className="object-cover w-full max-w-[450px] h-auto" />
          </div>
        </div>

        <div className="text-center my-10">
          <button className="bg-[#182434] hover:bg-white hover:text-[#182434] hover:border hover:border-[#182434] text-white font-normal md:text-[16px] text-[12px] py-2 px-6 rounded cursor-pointer rounded-3xl transition">
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
}