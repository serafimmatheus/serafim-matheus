import { Hero } from "./components/Hero";
import { About } from "./components/About";

import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { Features } from "./components/Features";
import { Contact } from "./components/Contact";


export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <Features />
      <About />
      <Process />
      <Projects />
      <Contact />
    </main>
  );
}
