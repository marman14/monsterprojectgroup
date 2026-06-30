import { useRef, useState, useCallback, useEffect } from "react";
import beforeImg from "@/assets/reno-before.png";
import afterImg from "@/assets/reno-after.png";

const BeforeAfterSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPos(pct);
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch support
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        updatePosition(e.touches[0].clientX);
      }
    };
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => container.removeEventListener("touchmove", onTouchMove);
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden cursor-col-resize select-none shadow-2xl"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After (full background) */}
      <img
        src={afterImg}
        alt="After renovation — modern kitchen"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImg}
          alt="Before renovation — outdated kitchen"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${containerRef.current?.offsetWidth || 0}px`, maxWidth: "none" }}
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full pointer-events-none">
        Before
      </div>
      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-[#121C24] text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full pointer-events-none">
        After
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-10"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      />

      {/* Slider handle */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{ left: `${sliderPos}%`, top: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div className="w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#121C24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 15 12 9 6" transform="translate(6,0)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const RenoBeforeAfter = () => {
  return (
    <section id="gallery" className="bg-[#F7F5F2] py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121C24] leading-tight">
            Real People, Real Results
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[#54595F] max-w-2xl mx-auto leading-relaxed">
            Drag the slider left and right to see the transformation. Our renovations speak for themselves.
          </p>
        </div>

        {/* Slider */}
        <BeforeAfterSlider />

        {/* Stats underneath */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { value: "3 Weeks", label: "Average Timeline" },
            { value: "$143K", label: "Avg. Value Unlocked" },
            { value: "200+", label: "Projects Completed" },
            { value: "100%", label: "On-Time Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1A3EFF]">{stat.value}</div>
              <div className="mt-2 text-sm text-[#54595F] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RenoBeforeAfter;
