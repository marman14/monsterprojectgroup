import heroImg from "@/assets/hero-mansion.jpg";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const heroFacts = [
  { title: "Owner's Rep", sub: "Preconstruction to closeout" },
  { title: "High-End Focus", sub: "Residential & commercial" },
  { title: "Fort Lauderdale", sub: "Serving all South Florida" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-forest-deep">
      {/* Background image with subtle ken-burns */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury oceanfront estate at golden hour in Fort Lauderdale"
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-hero-side" />
        <div className="absolute inset-0 bg-gradient-hero-corner" />
      </div>

      {/* Content */}
      <div className="relative container flex min-h-screen flex-col justify-end pb-24 pt-32">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-3 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-float-slow" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/80">
              Monster Project Group · Fort Lauderdale, FL
            </span>
          </div>

          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-primary-foreground text-balance animate-fade-in-slow"
            style={{ animationDelay: "120ms" }}
          >
            Owner's representation
            <br />
            for projects that
            <br />
            <span className="italic text-gold">demand precision.</span>
          </h1>

          <p
            className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-primary-foreground/80 animate-fade-in"
            style={{ animationDelay: "320ms" }}
          >
            MPG provides clear oversight for high-standard projects across South
            Florida. From preconstruction to closeout, we keep projects aligned
            and accountable.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in"
            style={{ animationDelay: "480ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-xs uppercase tracking-[0.22em] text-accent-foreground shadow-gold transition-all duration-500 hover:bg-gold-soft"
            >
              Schedule a Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/30 px-7 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-all duration-500 hover:border-accent hover:text-accent"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Hero Fact Cards */}
        <div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-md animate-fade-in"
          style={{ animationDelay: "640ms" }}
        >
          {heroFacts.map((fact) => (
            <div
              key={fact.title}
              className="bg-forest-deep/40 px-6 py-6"
            >
              <div className="font-serif text-xl text-primary-foreground">
                {fact.title}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                {fact.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-float-slow" />
      </div>
    </section>
  );
};

export default Hero;
