"use client";

import React, { useEffect, useRef } from "react";

type ProjectWaveCardProps = {
  tag: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  status?: string;
};

export default function ProjectWaveCard({
  tag,
  title,
  description,
  ctaText,
  href,
  status = "Live",
}: ProjectWaveCardProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const waveData = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
    }));

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    const updateWaveData = () => {
      waveData.forEach((data) => {
        if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // dark panel background
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      waveData.forEach((data, i) => {
        const freq = data.value * 7;
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x++) {
          const nx = (x / canvas.width) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py =
            Math.sin(px * 10 + time) *
            Math.cos(px * 2) *
            freq *
            0.1 *
            ((i + 1) / 8);
          const y = (py + 1) * canvas.height * 0.5;

          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        const intensity = Math.min(1, freq * 0.3);
        const r = 79 + intensity * 100;
        const g = 70 + intensity * 130;
        const b = 229;

        ctx.lineWidth = 1 + i * 0.3;
        ctx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
        ctx.shadowBlur = 5;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    };

    let raf = 0;
    const animate = () => {
      time += 0.02;
      updateWaveData();
      draw();
      raf = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-lg">
      {/* visual area */}
      <div className="relative h-44">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {/* subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "15px 15px",
          }}
        />
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* content */}
      <div className="p-5">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 border border-indigo-400/30 text-indigo-300 bg-white/5">
          {tag}
        </span>

        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

        <p className="text-white/70 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-200 transition flex items-center text-sm font-medium px-3 py-2 rounded-lg border border-indigo-400/30 bg-white/5"
          >
            {ctaText}
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <span className="text-white/60 text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}