import { CheckCircle } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Tell Us About Your Home",
    desc: "Reach out with your renovation goals, timeline, and budget. We listen, ask the right questions, and assess your project scope — no obligation, no pressure.",
  },
  {
    n: "02",
    title: "Tour & Estimate",
    desc: "We visit your home, take measurements, and develop a detailed estimate. You'll know exactly what to expect — no surprises.",
  },
  {
    n: "03",
    title: "Expert Design, Streamlined",
    desc: "Your dedicated designer focuses on smart updates and selects materials within your budget. What typically takes months, we do in days.",
  },
  {
    n: "04",
    title: "Project Launch",
    desc: "On average, projects are completed in just a few weeks. Receive real-time updates and finish on time and on budget.",
  },
];

const RenoHowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#121C24] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            How it Works
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            We take the stress out of renovation. Monster Project Group manages your project from first call to final walkthrough.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.n}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1A3EFF] flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{step.n}</span>
                </div>
                <CheckCircle className="h-5 w-5 text-[#7BBFE8]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-base text-white/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-[#1A3EFF] text-white font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#1533CE] hover:shadow-xl"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default RenoHowItWorks;
