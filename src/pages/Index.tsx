import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Monster Project Group · Owner's Representation in South Florida";
    const desc = "MPG delivers disciplined owner's representation for high-end residential, hospitality, and commercial projects across South Florida.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Approach />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
