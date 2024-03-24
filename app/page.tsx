import About from "./components/about";
import Intro from "./components/intro";
import Contact from "./components/contact";
import SectionDivider from "./components/section-divider";

import { motion } from "framer-motion";

function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider />
      <About />
      <Contact/>
    </main>
  );

}

export default Home;
