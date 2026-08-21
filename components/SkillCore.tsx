'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * El núcleo de la Skill.
 *
 * Un centro que late, tres anillos girando y unas cuantas partículas en
 * órbita unidas al centro por hilos finos. Alrededor, las cosas que la Skill
 * hace, colocadas sobre el anillo exterior.
 *
 * Las partículas van en canvas (son muchas y se mueven todo el rato); los
 * anillos y las etiquetas, en DOM, para que el texto se pueda leer y
 * seleccionar.
 */
export default function SkillCore({ core, tasks }: { core: string; tasks: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduce) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let size = 0;
    let raf = 0;

    // Cada partícula gira alrededor del centro a su propio radio y velocidad.
    const dots = Array.from({ length: 34 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 0.18 + Math.random() * 0.32, // fracción del ancho
      speed: (Math.random() * 0.4 + 0.15) * (Math.random() < 0.5 ? 1 : -1),
      r: Math.random() * 1.7 + 0.7,
    }));

    function resize() {
      const box = canvas!.parentElement;
      if (!box) return;
      size = box.offsetWidth;
      canvas!.width = size * dpr;
      canvas!.height = size * dpr;
      canvas!.style.width = `${size}px`;
      canvas!.style.height = `${size}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    let last = performance.now();
    function frame(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx!.clearRect(0, 0, size, size);
      const c = size / 2;

      for (const d of dots) {
        d.angle += d.speed * dt;
        const x = c + Math.cos(d.angle) * d.radius * size;
        const y = c + Math.sin(d.angle) * d.radius * size;

        // Hilo hacia el centro: cuanto más lejos, más tenue.
        const fade = 1 - d.radius / 0.5;
        ctx!.beginPath();
        ctx!.moveTo(c, c);
        ctx!.lineTo(x, y);
        ctx!.strokeStyle = `rgba(217,45,32,${0.1 * fade})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();

        ctx!.beginPath();
        ctx!.arc(x, y, d.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(217,45,32,${0.35 + d.r * 0.2})`;
        ctx!.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    resize();
    raf = requestAnimationFrame(frame);
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [reduce]);

  const spin = (secs: number, reverse = false) =>
    reduce ? {} : { animate: { rotate: reverse ? -360 : 360 }, transition: { duration: secs, repeat: Infinity, ease: 'linear' as const } };

  return (
    <div className="core">
      <canvas ref={canvasRef} className="core__canvas" aria-hidden="true" />

      <div className="core__glow" aria-hidden="true" />
      <motion.div className="core__ring core__ring--1" {...spin(38)} aria-hidden="true" />
      <motion.div className="core__ring core__ring--2" {...spin(26, true)} aria-hidden="true" />
      <motion.div className="core__ring core__ring--3" {...spin(18)} aria-hidden="true" />

      {/* Las tareas, repartidas por el anillo exterior. El contenedor gira y
          cada etiqueta gira al revés, así el texto se queda derecho. */}
      <motion.div className="core__orbit" {...spin(60)} >
        {tasks.map((t, i) => {
          const angle = (360 / tasks.length) * i;
          return (
            <div
              key={t}
              className="core__slot"
              style={{ transform: `rotate(${angle}deg) translateY(-50%)` }}
            >
              <motion.span
                className="core__task"
                {...(reduce ? {} : { animate: { rotate: -360 }, transition: { duration: 60, repeat: Infinity, ease: 'linear' as const } })}
                style={{ rotate: -angle }}
              >
                {t}
              </motion.span>
            </div>
          );
        })}
      </motion.div>

      <motion.div
        className="core__center"
        animate={reduce ? {} : { scale: [1, 1.06, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>{core}</span>
      </motion.div>
    </div>
  );
}
