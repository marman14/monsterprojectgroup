const RenoFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#121C24] border-t border-white/10">
      {/* CTA Banner */}
      <div className="bg-[#1A3EFF] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to transform your home?
            </h3>
            <p className="text-white/70 mt-2">Get your free estimate — no obligation, responds in 1 business day.</p>
          </div>
          <a
            href="#contact"
            id="footer-cta"
            className="flex-shrink-0 bg-white text-[#1A3EFF] text-[11px] uppercase tracking-[0.22em] font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">MPG</span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/50">Monster Project Group</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Expert owner's representation and renovation management for South Florida homeowners. From kitchen renovations to full home transformations.
            </p>
            <div className="mt-6">
              <a href="mailto:office@monsterprojectgroup.com" className="text-[#7BBFE8] hover:text-white transition-colors duration-300 text-sm font-medium">
                office@monsterprojectgroup.com
              </a>
            </div>
            <div className="mt-2 text-white/50 text-sm">
              Fort Lauderdale, FL · South Florida
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-white/40 font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {["Kitchen Renovations", "Bathroom Remodels", "Home Refreshes", "Full Home Renovations", "Owner Representation"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.28e] text-white/40 font-semibold mb-5 tracking-[0.28em]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Gallery", href: "#gallery" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Free Estimate", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/30">
            © {year} Monster Project Group · All rights reserved
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[11px] uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RenoFooter;
