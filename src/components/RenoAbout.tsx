import exteriorImg from "@/assets/reno-exterior.png";

const reasons = [
  {
    icon: "🏆",
    title: "Owner-First Philosophy",
    desc: "We represent YOU, not the contractor. Every decision we make protects your investment and keeps your interests front and center.",
  },
  {
    icon: "📋",
    title: "Expert Project Management",
    desc: "Certified project managers with 15+ years of experience in South Florida renovation. We handle the complexity so you don't have to.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    desc: "No hidden fees, no surprises. We provide detailed cost breakdowns and manage your budget with complete transparency.",
  },
  {
    icon: "⏱️",
    title: "On-Time Delivery",
    desc: "We hold contractors accountable to their commitments. Your project finishes when it's supposed to — or we make it right.",
  },
  {
    icon: "✅",
    title: "Quality Guaranteed",
    desc: "We don't accept mediocre workmanship. Every project passes our multi-point quality inspection before final delivery.",
  },
  {
    icon: "📍",
    title: "Local South Florida Experts",
    desc: "Deep relationships with top contractors, suppliers, and designers across Miami-Dade, Broward, and Palm Beach counties.",
  },
];

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
      {/* Why MPG section */}
      <section id="about" className="bg-[#F7F5F2] py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
                <img
                  src={exteriorImg}
                  alt="South Florida home renovation transformation by Monster Project Group"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {/* Floating stat card */}
                <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-lg text-center w-28">
                  <div className="text-3xl font-bold text-[#1A3EFF]">A+</div>
                  <div className="text-[9px] uppercase tracking-[0.18em] text-[#54595F] mt-0.5">BBB Rating</div>
                </div>
                <div className="absolute bottom-6 left-6 bg-[#1A3EFF] rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-[9px] uppercase tracking-[0.18em] text-white/70 mt-0.5">Years in FL</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#1A3EFF] font-semibold">Why Choose MPG</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#121C24] leading-[1.05] mb-6">
                South Florida's trusted{" "}
                <span className="italic font-light text-[#42687B]">renovation partner.</span>
              </h2>
              <p className="text-[#54595F] leading-relaxed mb-12 text-lg">
                Monster Project Group was built on one principle: the homeowner deserves an expert in their corner. We bring contractor-level knowledge to the owner's side of the table — protecting your time, money, and vision.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {reasons.map((r) => (
                  <div key={r.title} className="group flex gap-4">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{r.icon}</span>
                    <div>
                      <h3 className="font-bold text-[#121C24] mb-1 group-hover:text-[#1A3EFF] transition-colors duration-300">{r.title}</h3>
                      <p className="text-sm text-[#54595F] leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#121C24] py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7BBFE8] font-semibold">Testimonials</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-[1.05]">
              What our{" "}
              <span className="italic font-light text-[#7BBFE8]">clients say.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-[#1A3EFF]/30 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#F5C842] text-sm">★</span>
                  ))}
                </div>
                <blockquote className="text-white/80 leading-relaxed italic mb-6 text-sm">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-white/10 pt-5">
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#7BBFE8] mt-0.5">{t.location}</div>
                  <div className="text-[10px] text-white/40 mt-1">{t.project}</div>
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
