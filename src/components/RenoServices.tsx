import teamImg from "@/assets/reno-team.png";

const pillars = [
  {
    title: "Experts",
    desc: "Locally owned and operated, we understand the unique needs of the communities we serve. Your expert will guide you to make the most impactful renovations and deliver results you will love.",
  },
  {
    title: "Experience",
    desc: "Design, Construction, and Management: Our streamlined process delivers a stunning renovation in just a few weeks. You can relax knowing we are on-site, on time and on budget for the entire project.",
  },
  {
    title: "Design",
    desc: "What typically takes months, we do in days. Your dedicated designer focuses on smart updates and selects materials within your budget. Together, we create a custom design that transforms your house into a dream home.",
  },
];

const RenoServices = () => {
  return (
    <section id="services" className="bg-white py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* 3-Pillar Grid — like reference Experts / Experience / Design */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-24">
          {pillars.map((p) => (
            <div key={p.title} className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#121C24] mb-4">{p.title}</h3>
              <p className="text-base md:text-lg text-[#54595F] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Services detail with big image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={teamImg}
              alt="Monster Project Group team member reviewing renovation blueprints"
              loading="lazy"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>

          {/* Service list */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#121C24] leading-tight mb-8">
              Hassle-Free Renovations with Proven Results
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Kitchen Renovations",
                  desc: "Custom cabinetry, countertops, appliances, lighting, and layout redesign — all managed under one roof.",
                },
                {
                  title: "Bathroom Remodels",
                  desc: "Walk-in showers, freestanding tubs, vanity installations, and complete tile work — done right the first time.",
                },
                {
                  title: "Home Refreshes",
                  desc: "Fresh paint, flooring, fixtures, and strategic updates that dramatically increase your home's appeal and value.",
                },
                {
                  title: "Full Home Renovations",
                  desc: "Complete home transformations managed end-to-end. Owner's representation, contractor management, and quality oversight.",
                },
              ].map((s) => (
                <div key={s.title} className="border-b border-stone-200 pb-5">
                  <h4 className="text-xl font-bold text-[#121C24] mb-2">{s.title}</h4>
                  <p className="text-base text-[#54595F] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block mt-10 bg-[#1A3EFF] text-white font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#1533CE] hover:shadow-xl"
            >
              Get an Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenoServices;
