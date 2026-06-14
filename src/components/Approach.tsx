import blueprintImg from "@/assets/approach-blueprints.jpg";

const pillars = [
  {
    n: "01",
    t: "Disciplined oversight",
    d: "Every meeting guided. Every decision documented. Every commitment tracked.",
  },
  {
    n: "02",
    t: "Independent representation",
    d: "We sit on your side of the table, protecting your interests at every stage.",
  },
  {
    n: "03",
    t: "Clear execution",
    d: "Organized leadership that keeps teams accountable and projects moving forward.",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="relative bg-cream py-28 md:py-36">
      <div className="container">
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
            <span className="eyebrow">Our Approach</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
              Bringing clarity to
              <br />
              <span className="italic text-forest">complex projects.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
              Complex projects break down between teams. We keep communication
              aligned, decisions documented, and execution progressing from
              preconstruction through closeout.
            </p>

            {/* 3 pillars */}
            <div className="mt-14 grid sm:grid-cols-3 gap-x-8 gap-y-10 max-w-2xl">
              {pillars.map((p, i) => (
                <div
                  key={p.n}
                  className={
                    i === 0
                      ? ""
                      : "sm:border-l sm:border-border sm:pl-8"
                  }
                >
                  <span className="font-serif text-sm text-accent">{p.n}</span>
                  <h3 className="mt-6 font-serif text-lg md:text-xl text-foreground leading-snug">
                    {p.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
