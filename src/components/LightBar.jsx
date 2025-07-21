import React, { useEffect, useRef, useState } from "react";

const LightBar = ({ color = "#22d3ee", glow = "#22d3ee", headingRef, widthOffset = 40 }) => {
  const [expanded, setExpanded] = useState(false);
  const [barWidth, setBarWidth] = useState(60);

  useEffect(() => {
    if (!headingRef?.current) return;
    const handleScroll = () => {
      const rect = headingRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headingRef]);

  useEffect(() => {
    if (headingRef?.current && expanded) {
      setBarWidth(headingRef.current.offsetWidth + widthOffset); // wider than heading
    } else {
      setBarWidth(60);
    }
  }, [expanded, headingRef, widthOffset]);

  return (
    <div className="relative w-full flex justify-center mb-8" style={{ minHeight: 60 }}>
      {/* The glowing effect */}
      <div
        className="absolute left-0 right-0 mx-auto transition-all duration-700"
        style={{
          top: 0,
          height: "60px",
          width: `${barWidth}px`,
          background: `radial-gradient(ellipse at top, ${glow} 60%, transparent 100%)`,
          filter: "blur(8px)",
          opacity: 0.7,
          zIndex: 0,
          transition: "width 0.7s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
      {/* The light bar */}
      <div
        className="relative transition-all duration-700"
        style={{
          width: `${barWidth}px`,
          height: "4px",
          background: color,
          borderRadius: "2px",
          zIndex: 1,
          transition: "width 0.7s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </div>
  );
};

export default LightBar; 