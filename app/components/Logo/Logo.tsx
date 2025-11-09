'use client';

import Link from 'next/link';
import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer';
  showIcon?: boolean;
}

const Logo: React.FC<LogoProps> = ({ variant = 'navbar', showIcon = true }) => {

  // Icon component - gradient sphere with complete full circles
  const LogoIcon = () => {
    const iconSize = variant === 'navbar' ? 40 : 48;
    const uniqueId = React.useId();
    const gradientId = `stacksphere-gradient-${uniqueId}`;
    const gradientIdFooter = `stacksphere-gradient-footer-${uniqueId}`;
    
    // Use same gradient for navbar in both light and dark mode
    // Footer uses yellow gradient for visibility on dark background
    const useFooterGradient = variant === 'footer';
    const activeGradientId = useFooterGradient ? gradientIdFooter : gradientId;
    
    // Same stroke width in all modes
    const outerStrokeWidth = 3;
    const innerStrokeWidth = 2;
    
    return (
      <div className="relative flex items-center justify-center mr-3">
        <svg 
          width={iconSize} 
          height={iconSize} 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <defs>
            {/* Pink → Purple → Blue Gradient (Same for light and dark mode navbar) */}
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B9D" stopOpacity="1" />
              <stop offset="50%" stopColor="#9C27B0" stopOpacity="1" />
              <stop offset="100%" stopColor="#2196F3" stopOpacity="1" />
            </linearGradient>
            
            {/* Yellow/Gold Gradient (Footer only - for dark background) */}
            <linearGradient id={gradientIdFooter} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFEB3B" stopOpacity="1" />
              <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFEB3B" stopOpacity="1" />
            </linearGradient>
          </defs>
          
          {/* Outer complete circle (thicker ring) */}
          <circle 
            cx="20" 
            cy="20" 
            r="14" 
            fill="none"
            stroke={`url(#${activeGradientId})`}
            strokeWidth={outerStrokeWidth}
          />
          
          {/* Inner complete circle (thinner ring) */}
          <circle 
            cx="20" 
            cy="20" 
            r="10" 
            fill="none"
            stroke={`url(#${activeGradientId})`}
            strokeWidth={innerStrokeWidth}
          />
          
          {/* Central solid circle with gradient */}
          <circle 
            cx="20" 
            cy="20" 
            r="6" 
            fill={`url(#${activeGradientId})`}
          />
        </svg>
      </div>
    );
  };

  const logoContent = (
    <div className={`flex items-center ${variant === 'navbar' ? 'cursor-pointer transition-transform duration-200 hover:scale-105' : ''}`}>
      {showIcon && <LogoIcon />}
      <span 
        className={`font-bold tracking-tight 
          ${variant === 'navbar' 
            ? 'text-xl' 
            : 'text-2xl'
          }`}
        style={{
          background: variant === 'footer'
            ? 'linear-gradient(to right, #FFEB3B, #FFD700, #FFEB3B)'
            : 'linear-gradient(to right, #FF6B9D, #9C27B0, #2196F3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        StackSphere
      </span>
    </div>
  );

  if (variant === 'navbar') {
    return (
      <Link href="/" className="flex items-center">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;

