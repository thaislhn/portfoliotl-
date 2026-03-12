import { useState } from 'react';

interface SimpleImageRippleProps {
  className?: string;
  imageUrl?: string;
}

export default function SimpleImageRipple({ 
  className = '',
  imageUrl = 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwbmV1dHJhbHxlbnwxfHx8fDE3NzE1MTExNzh8MA&ixlib=rb-4.1.0&q=80&w=600'
}: SimpleImageRippleProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div 
      className={`relative overflow-hidden bg-white/5 border border-white/20 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image principale */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: isHovered 
            ? `translate(${(mousePos.x - 50) * 0.02}px, ${(mousePos.y - 50) * 0.02}px) scale(1.05)` 
            : 'translate(0, 0) scale(1)',
          filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
        }}
      />

      {/* Effet de brillance suivant la souris */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.4 : 0,
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Effet grain texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0.05) 2px),
            repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.03) 1px, rgba(0,0,0,0.03) 2px)
          `,
        }}
      />
    </div>
  );
}