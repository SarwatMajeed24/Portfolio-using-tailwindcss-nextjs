import Hero from "./components/hero";
import Contact from "./components/contact";
import Projects from "./components/projects";
import About from "./components/about";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
