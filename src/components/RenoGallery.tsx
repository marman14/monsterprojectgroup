import kitchenImg from "@/assets/reno-hero-kitchen.png";
import bathroomImg from "@/assets/reno-bathroom.png";
import exteriorImg from "@/assets/reno-exterior.png";
import livingRoomImg from "@/assets/reno-living-room.png";
import bananaImg from "@/assets/reno-banana.png";

const projects = [
  {
    img: kitchenImg,
    title: "Fort Lauderdale Kitchen Transformation",
    result: "Completed in 3 Weeks",
    desc: "Navy cabinetry, white marble countertops, and gold fixtures brought this kitchen to life.",
  },
  {
    img: bathroomImg,
    title: "Boca Raton Master Suite Remodel",
    result: "$128K Value Unlocked",
    desc: "Freestanding tub, marble tile, and a custom double vanity transformed this master bath.",
  },
  {
    img: exteriorImg,
    title: "Coral Springs Exterior Renovation",
    result: "Sold in 4 Weeks",
    desc: "Fresh stucco, new impact windows, and full landscaping created incredible curb appeal.",
  },
  {
    img: bananaImg,
    title: "Modern Designer 'Nano Banana' Lounge",
    result: "Featured Showcase",
    desc: "A custom high-end lounge transformation featuring contemporary neon pop art and premium minimalist finishes.",
  },
  {
    img: livingRoomImg,
    title: "Weston Open-Concept Living Room",
    result: "$165K Profit",
    desc: "Built-in shelving, hardwood floors, and custom millwork turned this into a dream space.",
  },
];

const RenoGallery = () => {
  return (
    <section className="bg-white py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121C24] leading-tight">
            Our Recent Projects
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[#54595F] max-w-2xl mx-auto leading-relaxed">
            A selection of renovations we've managed across Miami-Dade, Broward, and Palm Beach counties.
          </p>
        </div>

        {/* Project cards — large images, readable captions */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Big image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Result badge */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm text-[#121C24] text-sm font-bold px-5 py-2.5 rounded-full shadow-md">
                  {p.result}
                </div>
              </div>
              {/* Caption — always visible, large text */}
              <div className="p-8 bg-white">
                <h3 className="text-xl md:text-2xl font-bold text-[#121C24] mb-2">{p.title}</h3>
                <p className="text-base text-[#54595F] leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-[#1A3EFF] text-white font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#1533CE] hover:shadow-xl"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default RenoGallery;
