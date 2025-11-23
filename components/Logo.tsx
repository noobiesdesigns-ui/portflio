import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="fixed top-8 left-8 z-[60] select-none pointer-events-none mix-blend-difference text-white">
      <div className="relative flex flex-col items-start">
        <h1 className="font-cursive text-7xl md:text-8xl leading-none relative z-10">
          noobies
        </h1>
        <span className="font-display font-black text-sm md:text-lg tracking-[0.4em] uppercase absolute -bottom-3 left-10 md:left-12 z-20 mix-blend-difference">
          Design
        </span>
      </div>
    </div>
  );
};