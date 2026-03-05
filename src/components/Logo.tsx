import React from 'react';

export const Logo = ({ className = "w-9 h-9", showText = true, textClassName = "text-xl", isWhite = false }: { className?: string, showText?: boolean, textClassName?: string, isWhite?: boolean }) => {
  // Brand Blue: #0038cc
  const brandBlue = "#0038cc";
  const hexColor = isWhite ? "white" : brandBlue;
  const innerColor = isWhite ? brandBlue : "white";

  return (
    <div className="flex items-center gap-2">
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Hexagon Shape */}
          <path 
            d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" 
            fill={hexColor} 
          />
          {/* Horizontal Split Line */}
          <rect x="10" y="49.5" width="80" height="1" fill={innerColor} />
          {/* Stylized 'm' shape on top */}
          <path 
            d="M25 35 L25 60 C25 75 35 85 50 85 C65 85 75 75 75 60 L75 35 L85 35 L85 60 C85 80 70 95 50 95 C30 95 15 80 15 60 L15 35 Z" 
            fill={innerColor}
            transform="scale(0.6) translate(33, 33)"
          />
          <rect x="42" y="45" width="16" height="15" fill={innerColor} transform="scale(0.6) translate(33, 33)" />
        </svg>
      </div>
      {showText && (
        <span className={`${textClassName} font-black tracking-tighter ${isWhite ? "text-white" : "text-[#0038cc]"} lowercase leading-none`}>
          maco
        </span>
      )}
    </div>
  );
};

