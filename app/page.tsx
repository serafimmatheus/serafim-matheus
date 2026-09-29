import { Hero } from "./components/Hero";
import { About } from "./components/About";

import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { Features } from "./components/Features";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Features />
      <About />

      <Process />
      <Projects />
      <Contact />
    </div>
  );
}
