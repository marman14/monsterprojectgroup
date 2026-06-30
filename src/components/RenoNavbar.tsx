import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const RenoNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        id="reno-navbar"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span
              className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? "text-[#1a2e44]" : "text-white"
              }`}
            >
              MPG
            </span>
            <span
              className={`hidden sm:inline text-[10px] uppercase tracking-[0.28em] transition-colors duration-300 ${
                scrolled ? "text-[#1a2e44]/60" : "text-white/70"
              }`}
            >
              Monster Project Group
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[11px] uppercase tracking-[0.22em] font-medium transition-colors duration-300 hover:text-[#1A3EFF] ${
                  scrolled ? "text-[#1a2e44]/80" : "text-white/90"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#1A3EFF] text-white text-[11px] uppercase tracking-[0.22em] font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#1533CE] hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              Get Started
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </a>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
                scrolled ? "text-[#1a2e44]" : "text-white"
              }`}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="pt-24 px-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-[#1a2e44] border-b border-stone-100 pb-4 hover:text-[#1A3EFF] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#1A3EFF] text-white text-center text-sm uppercase tracking-widest font-bold px-8 py-4 rounded-full"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default RenoNavbar;
