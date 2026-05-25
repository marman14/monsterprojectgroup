import heroImg from "@/assets/hero-mansion.jpg";
import { ArrowDown, ArrowUpRight, MapPin, Clock, UserCheck } from "lucide-react";

const trustItems = [
  { icon: MapPin, label: "South Florida Based" },
  { icon: Clock, label: "24-Hour Response Guarantee" },
  { icon: UserCheck, label: "Dedicated Senior Contact" },
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
            Your project, managed
            <br />
            with <span className="italic text-gold">precision.</span>
          </h1>

          <p
            className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-primary-foreground/80 animate-fade-in"
            style={{ animationDelay: "320ms" }}
          >
            MPG brings executive-level oversight and rigorous accountability to
            luxury construction and development across South Florida. We identify
            problems before they hit your budget or schedule.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in"
            style={{ animationDelay: "480ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-xs uppercase tracking-[0.22em] text-accent-foreground shadow-gold transition-all duration-500 hover:bg-gold-soft"
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </a>
            <a
              href="#approach"
              className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/30 px-7 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-all duration-500 hover:border-accent hover:text-accent"
            >
              See How We Work
            </a>
          </div>
        </div>

        {/* Trust Bar */}
        <div
          className="mt-16 flex flex-wrap items-center gap-6 md:gap-10 animate-fade-in"
          style={{ animationDelay: "640ms" }}
        >
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 text-primary-foreground/60">
              <item.icon className="h-4 w-4 text-gold/70" />
              <span className="text-[10px] uppercase tracking-[0.2em]">{item.label}</span>
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
