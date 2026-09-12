import Image from "next/image";
import Hero from "./components/pages/home/hero";
import About from "./components/pages/about/about-section";
import Workflow from "./components/pages/home/workflow";
import HomeContact from "./components/pages/home/contact";
import HomeProjects from "./components/pages/home/projects";

export default function Home() {
  return (
   <div>
       <Hero />
       <About />
       <Workflow />
       <HomeContact />
       <HomeProjects  />
     </div>
  );
}
