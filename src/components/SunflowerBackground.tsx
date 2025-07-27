
import React from 'react';

const SunflowerBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating sunflower petals */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <div className="w-6 h-6 bg-gradient-to-br from-sunflower-300 to-sunflower-500 rounded-full animate-petal-fall" />
          </div>
        ))}
      </div>
      
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
