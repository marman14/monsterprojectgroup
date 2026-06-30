import heroImg from "@/assets/reno-hero-poster.png";

const RenoHero = () => {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden">
      {/* Full-bleed background with Ken Burns animation */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Beautifully renovated open-concept home by Monster Project Group"
          className="h-full w-full object-cover animate-ken-burns"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content — centered like reference */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-6 text-center">
        {/* Main headline — big, bold, and readable */}
        <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl mx-auto mb-8">
          Design, Construction, and Management:
          <span className="block text-[#7BBFE8] mt-2 text-3xl sm:text-4xl md:text-5xl font-light">
            Our local experts simplify the process to make the most out of your home.
          </span>
        </h1>

        {/* CTA */}
        <a
          href="#contact"
          id="hero-cta"
          className="inline-block bg-[#1A3EFF] text-white font-bold text-base md:text-lg uppercase tracking-wider px-12 py-5 rounded-full shadow-2xl shadow-blue-600/30 transition-all duration-300 hover:bg-[#1533CE] hover:scale-105"
        >
          Get Started
        </a>

        {/* Two cards — like reference */}
        <div className="grid sm:grid-cols-2 gap-6 mt-16 max-w-3xl w-full">
          <a href="#services" className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-left transition-all duration-300 hover:bg-white/20 hover:border-white/40">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">Renovate to Stay</h2>
            <p className="text-white/70 text-base leading-relaxed">Love your home now and build future equity.</p>
            <span className="inline-block mt-4 text-[#7BBFE8] font-semibold text-sm uppercase tracking-wider group-hover:underline">Learn More →</span>
          </a>
          <a href="#services" className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-left transition-all duration-300 hover:bg-white/20 hover:border-white/40">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">Renovate to Sell</h2>
            <p className="text-white/70 text-base leading-relaxed">Designed to sell faster and for maximum profit.</p>
            <span className="inline-block mt-4 text-[#7BBFE8] font-semibold text-sm uppercase tracking-wider group-hover:underline">Learn More →</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
      </div>
    </section>
  );
};

export default RenoHero;
