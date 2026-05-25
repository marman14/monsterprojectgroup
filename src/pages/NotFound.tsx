import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found · Monster Project Group";

    // Tell crawlers this URL is not indexable
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    return () => {
      // Restore default robots directive when navigating away
      robots?.setAttribute(
        "content",
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      );
    };
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-forest-deep text-primary-foreground px-6">
      <div className="text-center max-w-lg">
        <span className="eyebrow text-primary-foreground/70">Error 404</span>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05]">
          Page <span className="italic text-gold">not found.</span>
        </h1>
        <p className="mt-6 text-primary-foreground/70 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Head back
          to the home page, or reach us directly if you were looking for
          something specific.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-xs uppercase tracking-[0.22em] text-accent-foreground shadow-gold transition-all duration-500 hover:bg-gold-soft"
          >
            Return Home
          </a>
          <a
            href="mailto:office@monsterprojectgroup.com"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-primary-foreground/30 px-8 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-all duration-500 hover:border-accent hover:text-accent"
          >
            Email Us
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
