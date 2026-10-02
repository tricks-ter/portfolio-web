import React from 'react';

export default function Logo({ className = "w-12 h-12" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="inkmind-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" /> {/* Blue 400 */}
          <stop offset="50%" stopColor="#818CF8" /> {/* Indigo 400 */}
          <stop offset="100%" stopColor="#C084FC" /> {/* Purple 400 */}
        </linearGradient>
        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g filter="url(#neon-glow)">
        {/* Outer Brain Lobes (Neural Network) */}
        <path 
          d="M 50 25 C 20 10, 15 45, 30 55 C 30 70, 45 80, 50 90 C 55 80, 70 70, 70 55 C 85 45, 80 10, 50 25 Z" 
          stroke="url(#inkmind-gradient)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="url(#inkmind-gradient)"
          fillOpacity="0.05"
        />
        
        {/* Fountain Pen Nib (Inner Base) */}
        <path 
          d="M 50 90 L 38 65 Q 50 55 62 65 Z" 
          stroke="url(#inkmind-gradient)" 
          strokeWidth="3" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="url(#inkmind-gradient)"
          fillOpacity="0.2"
        />
        
        {/* Pen Slit & Breathing Hole */}
        <line x1="50" y1="85" x2="50" y2="70" stroke="url(#inkmind-gradient)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="65" r="3" stroke="url(#inkmind-gradient)" strokeWidth="3" fill="none" />

        {/* Neural Circuit Branches */}
        <path d="M 47 62 C 35 55, 30 40, 35 30" stroke="url(#inkmind-gradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 53 62 C 65 55, 70 40, 65 30" stroke="url(#inkmind-gradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 40 45 L 25 40" stroke="url(#inkmind-gradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 60 45 L 75 40" stroke="url(#inkmind-gradient)" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Glowing Neural Nodes */}
        <circle cx="35" cy="30" r="2.5" fill="#C084FC" />
        <circle cx="65" cy="30" r="2.5" fill="#60A5FA" />
        <circle cx="25" cy="40" r="2" fill="#818CF8" />
        <circle cx="75" cy="40" r="2" fill="#818CF8" />
        <circle cx="40" cy="45" r="1.5" fill="#C084FC" />
        <circle cx="60" cy="45" r="1.5" fill="#60A5FA" />
      </g>
    </svg>
  );
}
