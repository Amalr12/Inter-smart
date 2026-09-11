import Image from "next/image";
import Hero from "./components/pages/home/hero";
import About from "./components/pages/about/about-section";
import Workflow from "./components/pages/home/workflow";
import HomeContact from "./components/pages/home/contact";

export default function Home() {
  return (
   <div>
       <Hero />
       <About />
       <Workflow />
       <HomeContact />
     </div>
  );
}
