import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    t: "Pre-Construction Planning",
    headline: "Set your project up to succeed before construction starts.",
    d: "The most expensive mistakes in construction happen before construction begins. MPG joins your project during the design and planning phase to review plans for buildability, identify scope gaps, and establish clear accountability between you and the contractor.",
    items: [
      "Contractor vetting & selection support",
      "Contract review & negotiation guidance",
      "Schedule development & milestone mapping",
      "Budget validation & contingency planning",
      "Permit coordination & compliance review",
    ],
  },
  {
    n: "02",
    t: "Active Construction Management",
    headline: "On-site oversight, so you don't have to be.",
    d: "During active construction, MPG is on-site to document progress, catch deficiencies, and hold the contractor to the schedule. We attend all critical inspections, manage RFIs and submittals, and maintain the paper trail that protects your interests.",
    items: [
      "Scheduled & unscheduled site visits",
      "Weekly progress reports with photos",
      "Real-time budget tracking & variance reporting",
      "Change order review & negotiation",
      "Quality control & punch list management",
    ],
  },
  {
    n: "03",
    t: "Owner's Representation",
    headline: "Your interests. Represented at every meeting, on every call.",
    d: "An owner's representative acts as the professional extension of you throughout your project — attending design meetings, representing your interests in contractor negotiations, and ensuring your plans are executed as specified.",
    items: [
      "Clients who travel or live out of state",
      "Investors managing multiple properties",
      "First-time custom home builders",
      "Complex, multi-phase developments",
    ],
  },
  {
    n: "04",
    t: "Project Recovery",
    headline: "Your project is behind schedule and over budget. We fix that.",
    d: "When a build goes off the rails — missed milestones, contractor disputes, runaway costs — we step in to stabilize and recover. Our team conducts a rapid audit, identifies root causes, and restructures the work plan.",
    items: [
      "72-hour project audit & root cause analysis",
      "Contractor performance assessment",
      "Revised schedule & budget development",
      "Dispute documentation & resolution support",
    ],
  },
];

const marqueeItems = [
  "Pre-Construction Planning",
  "Construction Management",
  "Owner's Representation",
  "Project Recovery",
  "Budget Oversight",
  "Contract Negotiation",
  "Quality Assurance",
  "Permit Coordination",
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
              What we
              <br />
              <span className="italic text-gold">manage.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-primary-foreground/70 leading-relaxed">
            From the first design meeting to the final punch list, MPG manages every
            phase of your project. Every client receives dedicated oversight,
            structured weekly reporting, and direct access to a senior MPG team
            member.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/10 rounded-sm overflow-hidden reveal">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative bg-forest-deep p-8 md:p-10 transition-all duration-700 hover:bg-forest"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-xl text-gold">{s.n}</span>
                <ArrowUpRight className="h-5 w-5 text-primary-foreground/40 transition-all duration-500 group-hover:text-accent group-hover:rotate-45" />
              </div>
              <h3 className="mt-6 font-serif text-2xl md:text-3xl text-primary-foreground">
                {s.t}
              </h3>
              <p className="mt-2 font-serif italic text-sm text-gold/80">{s.headline}</p>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">{s.d}</p>
              <ul className="mt-6 space-y-2">
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
