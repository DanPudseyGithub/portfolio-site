"use client";

import { useEffect, useRef } from "react";

const defaultFooterHeight = 320;

export const ParticleFooterBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const numParticles = 100;

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = defaultFooterHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Random colour generator with a minimum brightness
    const getRandomColor = () => {
      const min = 100; // ensure each channel is at least this bright
      const r = Math.floor(Math.random() * (256 - min) + min);
      const g = Math.floor(Math.random() * (256 - min) + min);
      const b = Math.floor(Math.random() * (256 - min) + min);
      return `rgb(${r},${g},${b})`;
    };

    // Particle class
    class Particle {
      x!: number;
      y!: number;
      vx!: number;
      vy!: number;
      color!: string;

      constructor() {
        if (canvas) {
          this.x = canvas.width * Math.random();
          this.y = canvas.height * Math.random();
        }
        this.vx = 4 * Math.random() - 2;
        this.vy = 4 * Math.random() - 2;
        this.color = getRandomColor();
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 2, 2);
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (canvas) {
          if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
          if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        }
      }
    }

    // Init particles
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};
