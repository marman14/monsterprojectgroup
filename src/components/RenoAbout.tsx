import exteriorImg from "@/assets/reno-exterior.png";

const testimonials = [
  {
    quote: "MPG turned our outdated kitchen into something out of a design magazine. They managed everything — we barely had to worry. Absolutely worth every penny.",
    author: "Sarah & James T.",
    location: "Fort Lauderdale, FL",
    project: "Kitchen + Living Room Renovation",
  },
  {
    quote: "As a real estate agent, I recommend MPG to every client who wants to maximize their home value before listing. The ROI is incredible.",
    author: "Maria González",
    location: "Coral Gables, FL",
    project: "Pre-Listing Home Refresh",
  },
  {
    quote: "Our bathroom remodel was completed on time and exactly on budget. The quality of the tile work and fixtures is stunning. Highly recommend.",
    author: "David K.",
    location: "Boca Raton, FL",
    project: "Master Bathroom Remodel",
  },
];

const RenoAbout = () => {
  return (
    <>
      {/* About / Local Matters section — like reference */}
      <section id="about" className="bg-[#F7F5F2] py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Big image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={exteriorImg}
                alt="South Florida home renovation by Monster Project Group"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121C24] leading-tight mb-8">
                Local Matters
              </h2>
              <p className="text-lg md:text-xl text-[#54595F] leading-relaxed mb-8">
                Locally owned and operated, we understand the unique needs of the communities we serve. We're on-site and on call throughout the entire project.
              </p>
              <p className="text-lg text-[#54595F] leading-relaxed mb-8">
                Monster Project Group was built on one principle: the homeowner deserves an expert in their corner. We bring contractor-level knowledge to the owner's side of the table — protecting your time, money, and vision.
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[#1A3EFF]">15+</div>
                  <div className="mt-1 text-sm text-[#54595F]">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[#1A3EFF]">200+</div>
                  <div className="mt-1 text-sm text-[#54595F]">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[#1A3EFF]">A+</div>
                  <div className="mt-1 text-sm text-[#54595F]">BBB Rating</div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-block mt-10 bg-[#1A3EFF] text-white font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#1533CE] hover:shadow-xl"
              >
                Find Your Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#121C24] py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#F5C842] text-lg">★</span>
                  ))}
                </div>
                <blockquote className="text-white/80 leading-relaxed text-base mb-8">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-white/10 pt-5">
                  <div className="font-bold text-white text-base">{t.author}</div>
                  <div className="text-sm text-[#7BBFE8] mt-1">{t.location}</div>
                  <div className="text-sm text-white/40 mt-1">{t.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RenoAbout;
