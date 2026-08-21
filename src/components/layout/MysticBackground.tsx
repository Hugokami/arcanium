import React, { useEffect, useRef } from 'react';

export const MysticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate stars
    const starCount = Math.floor((width * height) / 8000);
    const stars: {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      baseAlpha: number;
      twinkleSpeed: number;
      color: string;
    }[] = [];

    const colors = ['#f5dfa8', '#dfb76c', '#c4b5fd', '#ffffff', '#93c5fd'];

    for (let i = 0; i < starCount; i++) {
      const baseAlpha = Math.random() * 0.7 + 0.2;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.4,
        alpha: baseAlpha,
        baseAlpha,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Render stars
      for (const star of stars) {
        star.alpha = star.baseAlpha + Math.sin(time * star.twinkleSpeed * 100 + star.x) * 0.3;
        const clampedAlpha = Math.max(0.05, Math.min(1, star.alpha));

        ctx.save();
        ctx.globalAlpha = clampedAlpha;
        ctx.fillStyle = star.color;
        ctx.shadowBlur = star.radius > 1 ? 6 : 0;
        ctx.shadowColor = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#06060a]">
      {/* Dynamic Cosmic Gradient Mesh */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-radial from-amber-500/10 via-purple-900/15 to-transparent blur-3xl opacity-70 animate-celestial-glow" />
      <div className="absolute top-1/3 -left-[10%] w-[600px] h-[600px] rounded-full bg-radial from-violet-700/10 via-indigo-950/20 to-transparent blur-3xl opacity-50" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-radial from-amber-600/8 via-rose-950/15 to-transparent blur-3xl opacity-60" />

      {/* Subtle Sacred Geometry Watermark Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-amber-500/5 rounded-full pointer-events-none animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-400/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-purple-500/5 rounded-full pointer-events-none" />

      {/* Canvas for Twinkling Stars */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
