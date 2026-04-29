const Footer = () => {
  return (
    <footer className="bg-forest-deep border-t border-primary-foreground/10 py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-2xl text-primary-foreground">MPG</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">
            Monster Project Group
          </span>
        </div>
        <div className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/50">
          © {new Date().getFullYear()} · Fort Lauderdale, FL · All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
