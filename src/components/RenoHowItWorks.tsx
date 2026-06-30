import { CheckCircle } from "lucide-react";
import teamImg from "@/assets/reno-team.png";

const steps = [
  {
    n: "01",
    title: "Tell Us About Your Project",
    desc: "Reach out with your renovation goals, timeline, and budget. We listen, ask the right questions, and assess your project scope — no obligation, no pressure.",
    items: ["Free consultation call", "Site visit & assessment", "Detailed project scope"],
  },
  {
    n: "02",
    title: "Design & Planning",
    desc: "Our team coordinates with designers, architects, and contractors to build a detailed plan — including materials, timeline, and transparent cost breakdown.",
    items: ["Design coordination", "Budget development", "Contractor selection"],
  },
  {
    n: "03",
    title: "Expert Construction Management",
    desc: "We manage every aspect of your renovation. Daily site oversight, quality checks, schedule tracking, and regular owner updates keep everything running smoothly.",
    items: ["Daily site oversight", "Schedule & budget tracking", "Quality assurance"],
  },
  {
    n: "04",
    title: "Final Walkthrough & Closeout",
    desc: "We conduct a thorough punch list walkthrough with you, ensure all work meets our standards, and hand you the keys to your transformed space.",
    items: ["Punch list completion", "Final inspections", "Project documentation"],
  },
];

const RenoHowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#1A3EFF] font-semibold">How It Works</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[#121C24] leading-[1.05]">
              Renovation made{" "}
              <span className="italic font-light text-[#42687B]">simple.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <p className="text-lg text-[#54595F] leading-relaxed">
              We take the stress out of renovation. Monster Project Group manages your project from first call to final walkthrough — so you get the results you want, without the headaches.
            </p>
          </div>
        </div>

        {/* Steps + Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className={`group relative py-8 ${i !== steps.length - 1 ? "border-b border-stone-100" : ""}`}
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1A3EFF]/8 flex items-center justify-center group-hover:bg-[#1A3EFF] transition-colors duration-300">
                    <span className="text-[11px] font-bold text-[#1A3EFF] group-hover:text-white transition-colors duration-300">
                      {step.n}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#121C24] mb-2 group-hover:text-[#1A3EFF] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[#54595F] leading-relaxed mb-4 text-sm">
                      {step.desc}
                    </p>
                    <ul className="space-y-2">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#42687B] font-medium">
                          <CheckCircle className="h-3.5 w-3.5 text-[#1A3EFF] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src={teamImg}
                alt="MPG team reviewing renovation plans in South Florida"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[#54595F] font-medium">Average Project Timeline</div>
                    <div className="text-2xl font-bold text-[#121C24] mt-0.5">8–14 Weeks</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[#54595F] font-medium">Response Time</div>
                    <div className="text-lg font-bold text-[#1A3EFF] mt-0.5">1 Business Day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenoHowItWorks;
