import residential from "@/assets/project-residential.jpg";
import hospitality from "@/assets/project-hospitality.jpg";
import office from "@/assets/project-office.jpg";

const projects = [
  {
    img: residential,
    cat: "Residential",
    title: "Luxury ground-up estates",
    meta: "Private estates · Renovations · Additions",
  },
  {
    img: hospitality,
    cat: "Hospitality",
    title: "Boutique hospitality & amenity",
    meta: "Lobbies · Spas · Restaurants",
  },
  {
    img: office,
    cat: "Workplace",
    title: "Executive office interiors",
    meta: "HQ build-outs · Premium tenant improvement",
  },
];

const types = [
  "Luxury residential ground-up homes",
  "Estate renovations and additions",
  "Boutique hospitality and amenity spaces",
  "Executive office and workplace interiors",
  "Mixed-use and development support",
  "Selective portfolio and capital project oversight",
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-cream-warm py-28 md:py-36">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 reveal">
          <div className="lg:col-span-7">
            <span className="eyebrow">Project Types</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
              Before they call,
              <br />
              <span className="italic text-forest">I will answer.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
            From private estates to premium tenant improvements, MPG is structured on
            the details that matter — and the steady presence that keeps every
            stakeholder aligned.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group hover-lift bg-card rounded-sm overflow-hidden shadow-soft"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="image-reveal aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={1600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span>{p.cat}</span>
                  <span className="text-accent">0{i + 1}</span>
                </div>
                <h3 className="mt-3 font-serif text-2xl text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.meta}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Type list */}
        <div className="mt-20 grid md:grid-cols-2 gap-x-12 gap-y-px reveal">
          {types.map((t, i) => (
            <div
              key={t}
              className="group flex items-baseline justify-between gap-6 border-b border-border py-5 transition-colors duration-500 hover:border-accent"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-xl md:text-2xl text-foreground">{t}</span>
              </div>
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                South FL
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
