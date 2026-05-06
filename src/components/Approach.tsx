import blueprintImg from "@/assets/approach-blueprints.jpg";
import { Target, Eye, Lightbulb } from "lucide-react";

const whyMpg = [
  {
    icon: Target,
    t: "Aligned Interests",
    d: "We work for you — not the contractor. Every decision we make is in your financial interest. No kickbacks. No hidden relationships. Just pure accountability.",
  },
  {
    icon: Eye,
    t: "Total Transparency",
    d: "You'll never wonder what's happening on your site. Weekly reports, real-time issue escalation, and direct access to a senior MPG team member are standard on every project.",
  },
  {
    icon: Lightbulb,
    t: "Proactive Problem Solving",
    d: "Construction is inherently complex. We don't wait for problems to surface — we anticipate them. Our job is to resolve issues before they cost you time or money.",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="relative bg-cream py-28 md:py-36">
      <div className="container">
        {/* Value Proposition */}
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="lg:col-span-5 reveal">
            <div className="image-reveal relative aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
              <img
                src={blueprintImg}
                alt="Architect reviewing detailed construction plans on a warm wooden desk"
                loading="lazy"
                width={1080}
                height={1350}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span>Design + Build</span>
              <span className="font-serif italic text-foreground/70">— Precision in every line</span>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7 reveal">
            <span className="eyebrow">About MPG</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
              Built for clients who demand
              <br />
              <span className="italic text-forest">more than a contractor.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
              Monster Project Group was founded on a simple belief: the people building
              your vision should be accountable to you — not the other way around. We
              serve high-net-worth homeowners, developers, and institutional clients
              navigating complex residential and commercial builds across South Florida.
            </p>
            <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
              Our team brings disciplined project management, transparent communication,
              and quiet confidence to every engagement. We don't just track progress.
              We protect your investment, your timeline, and your peace of mind.
            </p>
          </div>
        </div>

        {/* Why MPG */}
        <div className="mt-28 reveal">
          <div className="text-center mb-14">
            <span className="eyebrow justify-center">Why MPG</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-foreground">
              What makes us <span className="italic text-forest">different.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-border overflow-hidden rounded-sm">
            {whyMpg.map((item) => (
              <div
                key={item.t}
                className="bg-cream group p-8 md:p-10 transition-colors duration-500 hover:bg-card"
              >
                <item.icon className="h-7 w-7 text-accent mb-5" />
                <div className="font-serif text-xl md:text-2xl text-foreground">{item.t}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
