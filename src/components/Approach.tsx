import blueprintImg from "@/assets/approach-blueprints.jpg";

const principles = [
  {
    n: "01",
    t: "Disciplined oversight",
    d: "Every meeting led, every decision documented, every commitment tracked.",
  },
  {
    n: "02",
    t: "Independent counsel",
    d: "We sit on your side of the table — protecting your interests at every step.",
  },
  {
    n: "03",
    t: "Quiet execution",
    d: "Calm, clear leadership that lets craftsmanship and craftsmen do their best work.",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="relative bg-cream py-28 md:py-36">
      <div className="container grid gap-16 lg:grid-cols-12 lg:gap-20 items-center">
        {/* Image column */}
        <div className="lg:col-span-5 reveal">
          <div className="image-reveal relative aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
            <img
              src={blueprintImg}
              alt="Architect reviewing detailed plans on a warm wooden desk"
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
          <span className="eyebrow">Our Approach</span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
            Making progress
            <br />
            <span className="italic text-forest">manageable.</span>
          </h2>
          <p className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
            Complex projects fail in the seams between teams. We close those seams —
            translating design intent, contract language, and field reality into a
            single, calm, executable plan.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-px bg-border overflow-hidden rounded-sm">
            {principles.map((p) => (
              <div
                key={p.n}
                className="bg-cream group p-7 transition-colors duration-500 hover:bg-card"
              >
                <div className="font-serif text-2xl text-accent">{p.n}</div>
                <div className="mt-4 font-serif text-xl text-foreground">{p.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
