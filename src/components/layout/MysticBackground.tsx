import React, { useMemo } from 'react';

export const MysticBackground: React.FC = () => {
  // Generate deterministic stars to avoid hydration mismatch and CPU overhead
  const stars = useMemo(() => {
    return Array.from({ length: 90 }).map((_, i) => ({
      id: i,
      left: `${((i * 19.3) % 100).toFixed(2)}%`,
      top: `${((i * 27.7) % 100).toFixed(2)}%`,
      size: (i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1.2),
      opacity: 0.25 + ((i % 7) * 0.1),
      duration: `${3 + (i % 6)}s`,
      delay: `${(i % 5) * 0.8}s`,
      isGold: i % 4 === 0
    }));
  }, []);

  const stardust = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${(i * 8.3 + 4).toFixed(1)}%`,
      top: `${(20 + ((i * 13) % 65)).toFixed(1)}%`,
      size: 4 + (i % 3) * 2,
      duration: `${14 + (i % 8)}s`,
      delay: `${(i * 1.2).toFixed(1)}s`
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#07040f]">
      
      {/* Deep Cosmic Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(65,30,120,0.35),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_110%,rgba(138,92,246,0.18),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(212,175,55,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(157,78,221,0.08),transparent_50%)]" />

      {/* Rotating Sacred Celestial Geometry Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full border border-[#d4af37]/10 animate-spin-slow opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full border border-dashed border-[#d4af37]/15 animate-spin-slow [animation-direction:reverse] [animation-duration:35s] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] rounded-full border border-[#9d4edd]/15 animate-pulse-slow opacity-40" />

      {/* Floating Golden Stardust Nodes */}
      {stardust.map((dust) => (
        <div
          key={dust.id}
          style={{
            left: dust.left,
            top: dust.top,
            width: `${dust.size}px`,
            height: `${dust.size}px`,
            animation: `celestial-drift ${dust.duration} ease-in-out infinite`,
            animationDelay: dust.delay
          }}
          className="absolute rounded-full bg-gradient-to-tr from-amber-400 to-yellow-100 opacity-40 blur-[0.5px] shadow-[0_0_12px_rgba(212,175,55,0.8)]"
        />
      ))}

      {/* Twinkling Starfield */}
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
          className={`absolute rounded-full ${
            star.isGold
              ? 'bg-amber-300 shadow-[0_0_8px_rgba(245,223,168,0.9)]'
              : 'bg-white shadow-[0_0_6px_rgba(255,255,255,0.7)]'
          }`}
        />
      ))}

      {/* Fine Cosmic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,4,15,0.85)_100%)]" />
    </div>
  );
};
