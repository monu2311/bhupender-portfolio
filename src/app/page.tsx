import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Projects from "@/components/site/Projects";
import Skills from "@/components/site/Skills";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import Certificates from "@/components/site/Certificates";
import Experience from "@/components/site/Experience";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
