import Image from "next/image";
import Hero from "./components/pages/home/hero";
import About from "./components/pages/about/about-section";

export default function Home() {
  return (
   <div>
       <Hero />
       <About />
     </div>
  );
}
