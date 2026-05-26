import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    t: "Preconstruction Advisory",
    d: "Team assembly, scope alignment, budgeting, planning, and procurement strategy before work begins.",
    items: [
      "Design Coordination",
      "Budget Development",
      "Contractor Selection",
    ],
  },
  {
    n: "02",
    t: "Construction Oversight",
    d: "Meeting leadership, site coordination, schedule tracking, issue resolution, and reporting throughout delivery.",
    items: [
      "Schedule Tracking",
      "Site Coordination",
      "Quality Assurance",
    ],
  },
  {
    n: "03",
    t: "Owner Advocacy",
    d: "Independent representation focused on your interests across quality, cost, contracts, and decision-making.",
    items: [
      "Contract Negotiation",
      "Owner Interest Protection",
      "Guidance & Advisory",
    ],
  },
];

const marqueeItems = [
  "Preconstruction Advisory",
  "Construction Oversight",
  "Owner Advocacy",
  "Design Coordination",
  "Budget Development",
  "Contract Negotiation",
  "Contractor Selection",
  "Owner Interest Protection",
];

const Services = () => {
  return (
    <section id="services" className="relative bg-forest-deep py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 gold-rule opacity-60" />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 reveal">
          <div className="lg:col-span-7">
            <span className="eyebrow text-primary-foreground/70">Services</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-primary-foreground text-balance">
              Monster <span className="italic text-gold">Services.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-primary-foreground/70 leading-relaxed">
            Tailored owner's representation for discerning clients who expect
            both polish and performance — from a single villa to a portfolio of
            capital projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 rounded-sm overflow-hidden reveal">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative bg-forest-deep p-8 md:p-10 transition-all duration-700 hover:bg-forest"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-xl text-gold">{s.n}</span>
                <ArrowUpRight className="h-5 w-5 text-primary-foreground/40 transition-all duration-500 group-hover:text-accent group-hover:rotate-45" />
              </div>
              <h3 className="mt-8 font-serif text-2xl md:text-3xl text-primary-foreground">
                {s.t}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">{s.d}</p>
              <ul className="mt-8 space-y-3">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary-foreground/60"
                  >
                    <span className="h-px w-4 bg-gold/60" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-24 border-y border-primary-foreground/10 py-6 overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((m, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="font-serif italic text-3xl md:text-4xl text-primary-foreground/40">
                {m}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
