import React, { useMemo } from 'react';

export const MysticBackground: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: `${((i * 19.3) % 100).toFixed(2)}%`,
      top: `${((i * 27.7) % 100).toFixed(2)}%`,
      size: (i % 4 === 0 ? 2 : 1.2),
      opacity: 0.15 + ((i % 5) * 0.08),
      duration: `${4 + (i % 5)}s`,
      delay: `${(i % 4) * 0.9}s`
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#0c0a09]">
      
      {/* Subtle Warm Macro Light Spot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.02),transparent_70%)]" />

      {/* Minimalist Geometric Orbit Hairlines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1000px] h-[800px] sm:h-[1000px] rounded-full border border-[#292524]/50 animate-spin-slow opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full border border-dashed border-[#292524]/40 animate-spin-slow [animation-direction:reverse] [animation-duration:45s] opacity-30" />

      {/* Discrete Twinkling Star Nodes */}
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `pulse ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay
          }}
          className="absolute rounded-full bg-[#f5f5f4]"
        />
      ))}
    </div>
  );
};
