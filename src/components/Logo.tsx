import React from 'react';
import { currentBrand } from '../lib/brand';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-12 flex items-center justify-center">
        {/* Sombra inferior */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-[#7a92c7] opacity-60 rounded-full" />
        
        {/* Imagen del Logo Dinámica */}
        <img 
          src={currentBrand.logoUrl} 
          alt={`${currentBrand.name} Logo`} 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-lexend font-black text-xl text-[#2f50a3]">
            {currentBrand.name}
          </span>
        </div>
      )}
    </div>
  );
};
