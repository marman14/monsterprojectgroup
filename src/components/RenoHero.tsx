import { ArrowUpRight, ArrowDown } from "lucide-react";
import heroKitchen from "@/assets/reno-hero-kitchen.png";

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "$500M+", label: "Managed in Projects" },
];

const RenoHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={heroKitchen}
          alt="Luxury renovated kitchen by Monster Project Group"
          className="h-full w-full object-cover"
        />
        {/* Strong dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121C24]/85 via-[#121C24]/60 to-[#121C24]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121C24]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center min-h-screen pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <span className="h-px w-12 bg-[#1A3EFF]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/70 font-medium">
              Fort Lauderdale, FL · South Florida
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.02] mb-6 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            Renovations that{" "}
            <span className="block italic text-[#7BBFE8] font-light">
              elevate your home.
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-xl animate-fade-in"
            style={{ animationDelay: "250ms" }}
          >
            Monster Project Group delivers expert owner's representation and renovation management for kitchens, bathrooms, and full home transformations across South Florida — on time, on budget, every time.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#contact"
              id="hero-get-started"
              className="group inline-flex items-center gap-3 bg-[#1A3EFF] text-white text-[11px] uppercase tracking-[0.22em] font-bold px-8 py-4 rounded-full transition-all duration-400 hover:bg-[#1533CE] hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-0.5"
            >
              Get a Free Estimate
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-3 border border-white/40 text-white text-[11px] uppercase tracking-[0.22em] font-medium px-8 py-4 rounded-full transition-all duration-400 hover:border-white hover:bg-white/10"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 px-6 py-5 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/55 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
};

export default RenoHero;
