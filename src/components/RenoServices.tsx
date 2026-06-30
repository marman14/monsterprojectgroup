import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Kitchen Renovations",
    desc: "Transform your kitchen into the heart of your home. Custom cabinetry, countertops, appliances, lighting, and layout redesign — all managed under one roof.",
    highlight: "Most popular service",
    color: "from-[#1A3EFF]/5 to-[#D3E7EF]/30",
    tag: "bg-[#1A3EFF]/10 text-[#1A3EFF]",
    items: ["Custom cabinetry & millwork", "Countertop & backsplash", "Appliance coordination", "Lighting design"],
  },
  {
    n: "02",
    title: "Bathroom Remodels",
    desc: "Spa-quality bathrooms built to last. Walk-in showers, freestanding tubs, vanity installations, and complete tile work — done right the first time.",
    highlight: null,
    color: "from-[#A99F8F]/8 to-[#DED9CA]/30",
    tag: "bg-[#A1684A]/10 text-[#A1684A]",
    items: ["Shower & tub installation", "Vanity & fixture work", "Tile & flooring", "Plumbing coordination"],
  },
  {
    n: "03",
    title: "Home Refreshes",
    desc: "Refresh your entire home without the full renovation cost. Fresh paint, flooring, fixtures, and strategic updates that dramatically increase appeal and value.",
    highlight: "Best ROI",
    color: "from-[#42687B]/5 to-[#D3E7EF]/20",
    tag: "bg-[#42687B]/10 text-[#42687B]",
    items: ["Interior paint & finishes", "Flooring replacement", "Fixture upgrades", "Staging coordination"],
  },
  {
    n: "04",
    title: "Full Home Renovations",
    desc: "Complete home transformations managed end-to-end. Owner's representation, contractor management, and quality oversight from demo day through final walkthrough.",
    highlight: null,
    color: "from-[#213342]/5 to-[#CACAC5]/20",
    tag: "bg-[#213342]/10 text-[#213342]",
    items: ["Full scope management", "Architect & designer coordination", "Permit assistance", "Budget oversight"],
  },
];

const marqueeItems = [
  "Kitchen Renovations",
  "Bathroom Remodels",
  "Home Refreshes",
  "Owner Representation",
  "Budget Management",
  "Contractor Oversight",
  "Design Coordination",
  "Quality Assurance",
];

const RenoServices = () => {
  return (
    <section id="services" className="bg-[#F7F5F2] py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#1A3EFF] font-semibold">Our Services</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[#121C24] leading-[1.05]">
              What we{" "}
              <span className="italic font-light text-[#42687B]">build for you.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="group self-start md:self-auto inline-flex items-center gap-2 border-2 border-[#121C24] text-[#121C24] text-[11px] uppercase tracking-[0.22em] font-bold px-7 py-3 rounded-full transition-all duration-300 hover:bg-[#121C24] hover:text-white"
          >
            Get an Estimate
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article
              key={s.n}
              className={`group relative bg-gradient-to-br ${s.color} border border-[#CACAC5]/40 rounded-2xl p-8 md:p-10 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A99F8F]">{s.n}</span>
                {s.highlight && (
                  <span className={`text-[10px] uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full ${s.tag}`}>
                    {s.highlight}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#121C24] mb-3 group-hover:text-[#1A3EFF] transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-[#54595F] leading-relaxed mb-6 text-sm">{s.desc}</p>

              {/* Items */}
              <ul className="grid grid-cols-2 gap-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[11px] text-[#54595F]">
                    <span className="h-px w-3 bg-[#1A3EFF]/50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="h-6 w-6 text-[#1A3EFF]" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 border-y border-[#CACAC5]/50 py-6 overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((m, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-2xl md:text-3xl font-light italic text-[#A99F8F]">{m}</span>
              <span className="h-2 w-2 rounded-full bg-[#1A3EFF]/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RenoServices;
