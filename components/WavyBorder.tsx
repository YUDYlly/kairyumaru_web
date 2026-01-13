'use client';

import React from 'react';

interface WavyBorderProps {
  className?: string;
  fill?: string;
  reverse?: boolean;
}

const WavyBorder: React.FC<WavyBorderProps> = ({ 
  className = "", 
  fill = "currentColor",
  reverse = false 
}) => {
  // Wave Path Definitions
  // Designed to be seamless: Start (0,60) -> End (1440,60) with matching tangents.
  const pathData = "M0,60 C320,0 420,0 720,60 C1020,120 1120,120 1440,60 V120 H0 Z";

  return (
    <div className={`relative w-full h-[60px] md:h-[100px] overflow-hidden leading-[0] transform translate-z-0 ${className}`}>
      {/* 
        Single Wave Layer
        Animation: 20s loop (Medium speed for a natural feel)
      */}
      <div className="absolute top-0 left-0 w-[200%] h-full flex animate-wave-medium opacity-100 z-10 pointer-events-none">
        <svg 
          className={`w-1/2 h-full ${reverse ? 'transform scale-x-[-1]' : ''}`}
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={pathData} fill={fill} />
        </svg>
        <svg 
          className={`w-1/2 h-full ${reverse ? 'transform scale-x-[-1]' : ''}`}
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={pathData} fill={fill} />
        </svg>
      </div>
    </div>
  );
};

export default WavyBorder;