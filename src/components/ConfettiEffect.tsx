
import React, { useEffect, useState } from 'react';

const ConfettiEffect = () => {
  const [confettiPieces, setConfettiPieces] = useState<Array<{ id: number; color: string; left: number; delay: number }>>([]);

  useEffect(() => {
    const pieces = [];
    const colors = ['#f59e0b', '#fbbf24', '#fcd34d', '#fde68a', '#d97706', '#b45309'];
    
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        left: Math.random() * 100,
        delay: Math.random() * 3,
      });
    }
    
    setConfettiPieces(pieces);
    
    // Clean up after animation
    const timer = setTimeout(() => {
      setConfettiPieces([]);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 rounded-full animate-confetti-fall"
          style={{
            backgroundColor: piece.color,
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;
