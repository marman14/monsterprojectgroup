import { useState } from "react";
import kitchenImg from "@/assets/reno-hero-kitchen.png";
import bathroomImg from "@/assets/reno-bathroom.png";
import exteriorImg from "@/assets/reno-exterior.png";
import livingRoomImg from "@/assets/reno-living-room.png";

const categories = ["All", "Kitchens", "Bathrooms", "Exteriors", "Living Spaces"];

const projects = [
  {
    img: kitchenImg,
    cat: "Kitchens",
    title: "Fort Lauderdale Kitchen Transformation",
    meta: "Navy cabinetry · White marble · Gold fixtures",
    tag: "Recently Completed",
  },
  {
    img: bathroomImg,
    cat: "Bathrooms",
    title: "Boca Raton Master Suite Remodel",
    meta: "Freestanding tub · Marble tile · Double vanity",
    tag: "Featured",
  },
  {
    img: exteriorImg,
    cat: "Exteriors",
    title: "Coral Springs Exterior Renovation",
    meta: "Fresh stucco · New windows · Full landscaping",
    tag: "Before & After",
  },
  {
    img: livingRoomImg,
    cat: "Living Spaces",
    title: "Weston Open-Concept Living Room",
    meta: "Built-in shelving · Hardwood floors · Custom millwork",
    tag: null,
  },
];

const RenoGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.cat === activeFilter);

  return (
    <section id="gallery" className="bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#1A3EFF] font-semibold">Our Work</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[#121C24] leading-[1.05]">
              Project{" "}
              <span className="italic font-light text-[#42687B]">gallery.</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-[#54595F] leading-relaxed">
            A selection of renovations we've managed across Miami-Dade, Broward, and Palm Beach counties.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[10px] uppercase tracking-[0.22em] font-bold px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#1A3EFF] text-white border-[#1A3EFF]"
                  : "bg-transparent text-[#54595F] border-[#CACAC5] hover:border-[#1A3EFF] hover:text-[#1A3EFF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className={`overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121C24]/80 via-[#121C24]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Tag */}
              {p.tag && (
                <div className="absolute top-4 left-4 bg-[#1A3EFF] text-white text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full">
                  {p.tag}
                </div>
              )}

              {/* Info on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#7BBFE8] font-semibold mb-1">{p.cat}</div>
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <p className="text-white/70 text-sm mt-1">{p.meta}</p>
              </div>

              {/* Static caption below on mobile */}
              <div className="p-5 md:hidden">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#1A3EFF] font-semibold mb-1">{p.cat}</div>
                <h3 className="text-lg font-bold text-[#121C24]">{p.title}</h3>
                <p className="text-[#54595F] text-sm mt-0.5">{p.meta}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#54595F] mb-6">Ready to see what we can do for your home?</p>
          <a
            href="#contact"
            id="gallery-cta"
            className="inline-flex items-center gap-2 bg-[#1A3EFF] text-white text-[11px] uppercase tracking-[0.22em] font-bold px-10 py-4 rounded-full transition-all duration-300 hover:bg-[#1533CE] hover:shadow-lg hover:shadow-blue-500/30 group"
          >
            Start Your Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RenoGallery;
