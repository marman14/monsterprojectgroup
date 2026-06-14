import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly does a construction project manager do?",
    a: "A construction project manager coordinates every party involved in your build — general contractor, subcontractors, architects, engineers, and material suppliers — and enforces the timeline, budget, and contract terms you agreed to. MPG documents progress, flags issues before they hit your budget or schedule, and reports directly to you.",
  },
  {
    q: "How is MPG different from a general contractor?",
    a: "A general contractor builds. MPG manages the build on your behalf. We have no contract with the GC and no incentive to cut corners or rush work — every decision we make is in your financial interest. We can work alongside your existing GC or help you select one.",
  },
  {
    q: "What types of projects does MPG manage?",
    a: "High-end residential new construction, luxury renovations, waterfront developments, and commercial fit-outs across South Florida — Miami-Dade, Broward, and Palm Beach counties. Projects typically range from $500K custom renovations to multi-million-dollar ground-up developments.",
  },
  {
    q: "How does MPG charge for its services?",
    a: "Two options: a flat monthly retainer or a percentage of total construction value — whichever fits the project type and duration. You get a full written proposal after an initial consultation. No hidden fees. No kickbacks from contractors.",
  },
  {
    q: "When in the process should I bring in MPG?",
    a: "The earlier the better — ideally during design and permitting, before contractors are selected. That's when we can vet GCs, review plans for buildability, and set the documentation framework. We also step into mid-project builds that are over budget or behind schedule.",
  },
  {
    q: "Do I still need to be involved if MPG is managing my project?",
    a: "You decide. Every client gets a written weekly summary, gets consulted on major decisions, and has a direct line to a senior MPG contact. Some clients stay hands-off; others stay involved in every detail. We work either way.",
  },
  {
    q: "What areas of South Florida does MPG serve?",
    a: "Miami-Dade, Broward, and Palm Beach counties — including Miami, Coral Gables, Coconut Grove, Brickell, Fort Lauderdale, Boca Raton, Delray Beach, and Palm Beach. For projects outside these areas, contact us — we evaluate case by case.",
  },
  {
    q: "Can MPG help if my current contractor is behind schedule or over budget?",
    a: "Yes. We run a 72-hour project audit, identify the root causes of delay or cost overrun, restructure the work plan, and put accountability systems in place to get the build back on track.",
  },
  {
    q: "What is an owner's representative in construction?",
    a: "An owner's representative is a professional hired by the project owner — separate from the general contractor — to manage the build on the owner's behalf. The OR attends design meetings, reviews contracts and pay applications, tracks budget and schedule, and ensures the project is executed as specified. MPG serves as owner's representative for luxury residential and commercial builds across South Florida.",
  },
  {
    q: "How do I know if I need a project manager?",
    a: "If you're not experienced in managing a construction project, or simply don't have the time to oversee it day-to-day, an owner's representative can provide clarity, accountability, and peace of mind. We coordinate teams, track commitments, and help keep your project on schedule, on budget, and moving forward. Most importantly, we keep the decisions in your hands while providing the information and oversight needed to make them with confidence.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative bg-cream py-28 md:py-36">
      <div className="container max-w-4xl">
        <div className="text-center mb-14 reveal">
          <span className="eyebrow justify-center">FAQ</span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
            Frequently asked <span className="italic text-forest">questions.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Everything you need to know about working with Monster Project Group.
          </p>
        </div>

        <div className="reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-sm bg-card px-6 md:px-8 shadow-soft"
              >
                <AccordionTrigger className="text-left font-serif text-lg md:text-xl text-foreground py-6 hover:no-underline hover:text-forest transition-colors duration-500">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
