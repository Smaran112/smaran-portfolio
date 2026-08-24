import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Learning from "@/components/Learning";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Learning />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}