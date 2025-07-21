import React from 'react';

const lines = [
  // LEFT SIDE
  { top: '8%', side: 'left', left: '0%', width: 'w-32', color: 'bg-[#22d3ee]' },
  { top: '8%', side: 'left', left: '36%', width: 'w-16', color: 'bg-[#22d3ee]/70' },

  { top: '18%', side: 'left', left: '0%', width: 'w-24', color: 'bg-[#3EC5D7]' },
  { top: '18%', side: 'left', left: '28%', width: 'w-12', color: 'bg-[#3EC5D7]/70' },

  { top: '32%', side: 'left', left: '0%', width: 'w-40', color: 'bg-[#818cf8]' },
  { top: '32%', side: 'left', left: '45%', width: 'w-20', color: 'bg-[#818cf8]/70' },

  // RIGHT SIDE
  { top: '12%', side: 'right', right: '0%', width: 'w-36', color: 'bg-[#f472b6]' },
  { top: '12%', side: 'right', right: '36%', width: 'w-20', color: 'bg-[#f472b6]/70' },

  { top: '25%', side: 'right', right: '0%', width: 'w-32', color: 'bg-[#22d3ee]' },
  { top: '25%', side: 'right', right: '28%', width: 'w-16', color: 'bg-[#22d3ee]/70' },

  { top: '45%', side: 'right', right: '0%', width: 'w-40', color: 'bg-[#3EC5D7]' },
  { top: '45%', side: 'right', right: '45%', width: 'w-20', color: 'bg-[#3EC5D7]/70' },
];

const DecorativeLines = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {lines.map((line, i) => (
      <div
        key={i}
        className={`
          absolute
          ${line.width}
          h-3
          ${line.color}
          opacity-20
          rounded-full
          animate-pulse
        `}
        style={{
          top: line.top,
          ...(line.side === 'left' ? { left: line.left } : { right: line.right }),
        }}
      />
    ))}
  </div>
);

export default DecorativeLines;
