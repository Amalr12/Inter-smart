import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden md:min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <main className="relative z-10 grid min-h-[70vh] w-full items-center md:min-h-screen md:grid-cols-[4fr_2fr] md:px-10 px-3">
        <div className="flex flex-col items-start justify-center space-y-4 px-5 py-12 text-white md:space-y-6 md:px-8 md:py-16 lg:px-16">
          <h1 className={`max-w-3xl text-balance text-xl mt-5 font-semibold leading-tight md:text-5xl lg:text-6xl ${poppins.className}`}>
            AI development company In India
          </h1>

          <p className={`max-w-2xl text-xs  font-medium leading-7 text-justify md:text-lg lg:text-xl ${poppins.className}`}>
            One of the leading AI development companies in India with remarkable expertise in artificial intelligence solutions. Our forte in AI technologies spans diverse verticals like machine learning (ML).....
          </p>

          <button className={`rounded-3xl bg-white px-6 py-3 cursor-pointer text-xs md:text-sm font-semibold uppercase text-[#182434] transition hover:bg-[#182434] hover:text-white hover:outline hover:outline-white md:px-8 md:py-3 md:text-base ${poppins.className}`}>
            Reach us
          </button>
        </div>

        <div className="hidden md:block" />
      </main>
    </section>
  );
}
