'use client';

import { useEffect, useRef } from 'react';

/**
 * Campo de partículas de la portada.
 *
 * Puntos flotando muy despacio, con líneas finas entre los que están cerca.
 * Reacciona al ratón: las partículas cercanas se apartan un poco.
 *
 * Se apaga solo si el usuario pide menos movimiento o si la pantalla es
 * pequeña (en móvil no aporta y gasta batería).
 */
export default function Particles({ count = 46 }: { count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 760) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    const pointer = { x: -9999, y: -9999 };

    type Dot = { x: number; y: number; vx: number; vy: number; r: number };
    let dots: Dot[] = [];

    function size() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.5,
      }));
    }

    function frame() {
      ctx!.clearRect(0, 0, w, h);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;

        // Rebote suave en los bordes.
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;

        // El ratón empuja lo que tiene cerca.
        const dx = d.x - pointer.x;
        const dy = d.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120 && dist > 0) {
          const push = (120 - dist) / 120;
          d.x += (dx / dist) * push * 1.4;
          d.y += (dy / dist) * push * 1.4;
        }

        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(217,45,32,${0.16 + d.r * 0.16})`;
        ctx!.fill();
      }

      // Líneas entre partículas próximas: da sensación de red, no de confeti.
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist > 130) continue;
          ctx!.beginPath();
          ctx!.moveTo(dots[i].x, dots[i].y);
          ctx!.lineTo(dots[j].x, dots[j].y);
          ctx!.strokeStyle = `rgba(217,45,32,${(1 - dist / 130) * 0.13})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }
      }

      raf = requestAnimationFrame(frame);
    }

    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    }
    function onLeave() {
      pointer.x = -9999;
      pointer.y = -9999;
    }

    size();
    seed();
    frame();

    const ro = new ResizeObserver(() => {
      size();
      seed();
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
    };
  }, [count]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}
    />
  );
}
