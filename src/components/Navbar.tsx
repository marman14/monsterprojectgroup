import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container flex h-20 items-center justify-between">
        <a href="#" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-tight text-primary-foreground drop-shadow-sm">MPG</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-primary-foreground/70">
            Monster Project Group
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.22em] text-primary-foreground/80 hover:text-accent transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-all duration-500 hover:bg-accent hover:text-accent-foreground hover:border-accent"
        >
          Get Started
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-45" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
