import { Poppins } from "next/font/google";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export default function Hero() {
    return (
        <div className="flex min-h-[60vh] md:min-h-screen pt-30  justify-center  " style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 "></div>
            <main className="grid md:grid-cols-[4fr_2fr] md:p-10 text-white z-10">
                <div className=" space-y-4 md:space-y-6 flex flex-col justify-center items-start p-5 md:p-5">
                    <h1 className={`text-white text-4xl md:text-6xl font-semibold z-10 ${poppins.className}`}>AI development company In India</h1>
                    <p className={`text-white text-xl md:text-medium font-medium text-justify flex z-10 ${poppins.className} pe-10`}>
                        One of the leading AI development companies in India with remarkable expertise in artificial intelligence solutions. Our forte in AI technologies spans diverse verticals like machine learning (ML).....
                    </p>
                    <button className={`bg-white text-[#182434] px-6 py-3 rounded-3xl hover:bg-[#182434] hover:text-white hover:border hover:border-white  ${poppins.className}`}>reach us</button>
                </div>
                <div></div>

            </main>

        </div>
    );
}
