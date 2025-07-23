import React, { useEffect, useRef, useState } from "react";

/**
 * LightBar component
 * Props:
 * - headingRef: React ref to the heading element (for positioning)
 * - widthOffset: number (optional, px to add/subtract from heading width)
 */
const LightBar = ({ headingRef, widthOffset = 0 }) => {
  const barRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(match.matches);
    const handler = (e) => setIsDark(e.matches);
    match.addEventListener('change', handler);
    return () => match.removeEventListener('change', handler);
  }, []);

  // Set bar width based on heading
  useEffect(() => {
    if (headingRef && headingRef.current) {
      const headingWidth = headingRef.current.offsetWidth;
      setBarWidth(headingWidth + widthOffset);
    }
  }, [headingRef, widthOffset, headingRef?.current?.offsetWidth]);

  // Intersection Observer to show/hide bar
  useEffect(() => {
    if (!headingRef || !headingRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting || entry.intersectionRatio > 0);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // 30% of heading visible
      }
    );
    observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, [headingRef]);

  const barColor = isDark ? "#22d3ee" : "#000";
  const barGlow = isDark ? "#22d3ee" : "#000";

  return (
    <div className="relative flex justify-center items-center mb-2" style={{ minHeight: 12 }}>
      <div
        ref={barRef}
        className="rounded-full transition-all duration-700"
        style={{
          width: visible ? (barWidth || 120) : 0,
          height: 8,
          background: barColor,
          boxShadow: visible ? `0 0 24px 4px ${barGlow}, 0 0 48px 8px ${barGlow}80` : 'none',
          opacity: visible ? 1 : 0,
          transition: 'width 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s',
        }}
      />
    </div>
  );
};

export default LightBar; 