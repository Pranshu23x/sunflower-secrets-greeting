
import React from 'react';

const SunflowerBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced floating elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-3xl animate-float opacity-20 ${
              i % 3 === 0 ? 'animate-pulse' : i % 3 === 1 ? 'animate-bounce' : ''
            }`}
            style={{
              left: `${(i * 7 + 5) % 95}%`,
              top: `${(i * 11 + 3) % 85}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${5 + (i % 4)}s`,
              filter: 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.4))'
            }}
          >
            {i % 5 === 0 ? '🌻' : i % 5 === 1 ? '🌸' : i % 5 === 2 ? '✨' : i % 5 === 3 ? '🦋' : '💛'}
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-sunflower-200/30 via-transparent to-orange-200/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sunflower-100/15 to-amber-100/40" />
      <div className="absolute inset-0 bg-gradient-radial from-sunflower-300/10 via-transparent to-transparent" />
      
      {/* Decorative sunflower SVGs */}
      <div className="absolute top-10 left-10 opacity-10 animate-float">
        <SunflowerSVG size={80} />
      </div>
      <div className="absolute top-20 right-20 opacity-10 animate-float-slow">
        <SunflowerSVG size={60} />
      </div>
      <div className="absolute bottom-20 left-20 opacity-15 animate-float">
        <SunflowerSVG size={100} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 animate-float-slow">
        <SunflowerSVG size={70} />
      </div>
    </div>
  );
};

const SunflowerSVG = ({ size = 60 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="fill-current text-sunflower-400">
    {/* Sunflower petals */}
    <g>
      {[...Array(12)].map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="20"
          rx="8"
          ry="20"
          fill="currentColor"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
    </g>
    {/* Center */}
    <circle cx="50" cy="50" r="15" fill="#92400e" />
    <circle cx="50" cy="50" r="10" fill="#78350f" />
  </svg>
);

export default SunflowerBackground;
