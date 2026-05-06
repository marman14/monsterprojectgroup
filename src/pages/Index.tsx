import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Monster Project Group | Luxury Construction Management, South Florida";
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Approach />
      <Services />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
