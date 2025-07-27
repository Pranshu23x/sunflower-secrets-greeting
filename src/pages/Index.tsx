
import React from 'react';
import SunflowerBackground from '@/components/SunflowerBackground';
import GreetingCard from '@/components/GreetingCard';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SunflowerBackground />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          <GreetingCard />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sunflower-300 rounded-full opacity-30 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-sunflower-400 rounded-full opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-sunflower-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-sunflower-500 rounded-full opacity-30 animate-pulse" />
      </div>
    </div>
  );
};

export default Index;
