import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly does a construction project manager do?",
    a: "A construction project manager acts as your eyes, ears, and advocate on-site. MPG coordinates every party involved in your build — the general contractor, subcontractors, architects, engineers, and material suppliers — while enforcing timelines, managing your budget, and flagging problems before they become expensive. Think of us as the CEO of your construction project, reporting directly to you.",
  },
  {
    q: "How is MPG different from a general contractor?",
    a: "A general contractor builds. MPG manages. We work on your behalf — not the contractor's — to hold every party accountable to the scope, schedule, and budget you agreed to. Because we have no financial incentive to cut corners or rush work, our interests are 100% aligned with yours. We can work alongside your existing GC or help you select the right one.",
  },
  {
    q: "What types of projects does MPG manage?",
    a: "We specialize in high-end residential new construction, luxury renovations, waterfront developments, and commercial fit-outs across South Florida — including Miami-Dade, Broward, and Palm Beach counties. Projects typically range from $500K custom renovations to multi-million dollar ground-up developments.",
  },
  {
    q: "How does MPG charge for its services?",
    a: "Our fee structure is transparent and project-specific. We typically charge a flat monthly retainer or a percentage of the total construction value — whichever best fits the project type and duration. We provide a full proposal after an initial consultation. There are no hidden fees and no cost overruns on our end.",
  },
  {
    q: "When in the process should I bring in MPG?",
    a: "The earlier the better. Ideally, you bring us in during the design and permitting phase — before construction begins — so we can help vet contractors, review plans for buildability, set up proper documentation, and establish clear milestones. That said, we can also step in mid-project to course-correct a troubled build.",
  },
  {
    q: "Do I still need to be involved if MPG is managing my project?",
    a: "We handle the day-to-day complexity so you don't have to. You'll receive a clear weekly summary, be consulted on major decisions, and always have direct access to your dedicated MPG contact. Most of our clients remain as involved as they want to be — from hands-off to actively engaged — and we adapt to your preference.",
  },
  {
    q: "What areas of South Florida does MPG serve?",
    a: "We operate across Miami-Dade, Broward, and Palm Beach counties, including Miami, Coral Gables, Coconut Grove, Brickell, Fort Lauderdale, Boca Raton, Delray Beach, Palm Beach, and surrounding areas. Contact us if you're outside these areas — we evaluate projects on a case-by-case basis.",
  },
  {
    q: "Can MPG help if my current contractor is behind schedule or over budget?",
    a: "Yes — rescuing challenged projects is one of our specialties. We conduct a rapid project audit, identify the root causes of delay or cost overrun, restructure the work plan, and implement accountability systems to get your build back on track. We've stepped into difficult situations and delivered.",
  },
  {
    q: "What is an owner's representative in construction?",
    a: "An owner's representative (OR) is a professional hired to act as the client's advocate throughout a construction project. The OR attends design meetings, reviews contracts, manages the contractor relationship, tracks budget and schedule, and ensures the project reflects the client's original vision. MPG serves as owner's representative for luxury residential and commercial builds across South Florida.",
  },
  {
    q: "How do I know if my project needs a construction project manager?",
    a: "If your project involves a budget over $250K, multiple subcontractors, a compressed timeline, or you won't be able to be on-site regularly, you need professional project management. The cost of MPG's oversight is almost always less than the cost of a single significant delay, rework, or contractor dispute — and it protects you from those outcomes.",
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
