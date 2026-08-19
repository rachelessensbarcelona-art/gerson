'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/* ─── Revelado al hacer scroll ────────────────────────────────────────────
   El contenido se renderiza visible en el HTML (bueno para SEO y para quien
   navegue sin JS). Solo cuando el componente monta se "arma" el estado
   oculto, y a partir de ahí entra al asomar por pantalla. */

export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'p';
  className?: string;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setArmed(true);

    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          setTimeout(() => setShown(true), delay);
          io.unobserve(e.target);
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -60px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref}
      className={`reveal ${className}`.trim()}
      data-armed={armed ? 'true' : undefined}
      data-shown={shown ? 'true' : undefined}
      {...rest}
    >
      {children}
    </Component>
  );
}

/* ─── Barra de progreso de lectura ──────────────────────────────────────── */

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 2,
        width: '100%',
        background: 'var(--red)',
        transform: 'scaleX(0)',
        transformOrigin: '0 50%',
        zIndex: 95,
      }}
    />
  );
}

/* ─── Estela del cursor ─────────────────────────────────────────────────────
   Línea suave que sigue al ratón con inercia, más una onda al hacer clic.
   Solo en escritorio con ratón de verdad. */

export function CursorTrail() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 1200) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const RGB = '217,45,32';
    const EASE = 0.11; // más bajo = más suave y perezoso
    const FADE = 0.035; // a qué ritmo se recoge la cola al parar

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = window.innerWidth;
    let h = window.innerHeight;
    let target: { x: number; y: number } | null = null;
    let head: { x: number; y: number } | null = null;
    let points: { x: number; y: number }[] = [];
    let ripples: { x: number; y: number; radius: number; alpha: number }[] = [];
    let life = 0;
    let raf = 0;

    function size() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onMove(e: MouseEvent) {
      target = { x: e.clientX, y: e.clientY };
      if (!head) head = { x: e.clientX, y: e.clientY };
      life = 1;
    }
    function onDown(e: MouseEvent) {
      ripples.push({ x: e.clientX, y: e.clientY, radius: 0, alpha: 0.9 });
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      if (target && head) {
        head.x += (target.x - head.x) * EASE;
        head.y += (target.y - head.y) * EASE;
        points.push({ x: head.x, y: head.y });
        if (points.length > 26) points.shift();

        if (points.length > 3) {
          const first = points[0];
          const last = points[points.length - 1];
          const grad = ctx!.createLinearGradient(first.x, first.y, last.x, last.y);
          grad.addColorStop(0, `rgba(${RGB},0)`);
          grad.addColorStop(1, `rgba(${RGB},${(0.85 * life).toFixed(3)})`);

          ctx!.beginPath();
          ctx!.moveTo(first.x, first.y);
          for (let i = 1; i < points.length - 1; i++) {
            const mx = (points[i].x + points[i + 1].x) / 2;
            const my = (points[i].y + points[i + 1].y) / 2;
            ctx!.quadraticCurveTo(points[i].x, points[i].y, mx, my);
          }
          ctx!.strokeStyle = grad;
          ctx!.lineWidth = 2;
          ctx!.lineCap = 'round';
          ctx!.lineJoin = 'round';
          ctx!.shadowColor = `rgba(${RGB},.45)`;
          ctx!.shadowBlur = 12;
          ctx!.stroke();
          ctx!.shadowBlur = 0;

          ctx!.beginPath();
          ctx!.arc(last.x, last.y, 2.6, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${RGB},${(0.95 * life).toFixed(3)})`;
          ctx!.fill();
        }

        // En reposo la cola se recoge poco a poco en vez de desaparecer.
        if (Math.abs(target.x - head.x) < 0.4 && Math.abs(target.y - head.y) < 0.4) {
          life = Math.max(life - FADE, 0);
          if (points.length > 2) points.shift();
          if (life === 0) points = [];
        }
      }

      for (let j = ripples.length - 1; j >= 0; j--) {
        const r = ripples[j];
        ctx!.beginPath();
        ctx!.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(${RGB},${Math.max(r.alpha, 0)})`;
        ctx!.lineWidth = 1.4;
        ctx!.stroke();
        r.radius += 1.5;
        r.alpha -= 0.013;
        if (r.alpha <= 0) ripples.splice(j, 1);
      }

      raf = requestAnimationFrame(draw);
    }

    size();
    draw();
    window.addEventListener('resize', size);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', size);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 70 }}
    />
  );
}

/* ─── Tarjeta con foco de luz ───────────────────────────────────────────────
   Escribe la posición del ratón en --mx/--my; el degradado vive en el CSS. */

export function SpotlightCard({
  children,
  className = '',
  accent = false,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`card card--spot ${accent ? 'card--accent' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}

/* ─── Botón magnético ───────────────────────────────────────────────────────
   Al acercar el ratón, el botón se desplaza un poco hacia él. Detalle pequeño
   pero es de esos que hacen que una web "se sienta" cara. */

export function Magnetic({
  children,
  strength = 0.28,
  className = '',
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    function onMove(e: MouseEvent) {
      const r = el!.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const range = Math.max(r.width, r.height) * 0.9;
      if (dist < range) {
        el!.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      } else {
        el!.style.transform = '';
      }
    }
    function onLeave() {
      el!.style.transform = '';
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
    };
  }, [strength]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-flex', transition: 'transform .25s var(--ease)', willChange: 'transform' }}
    >
      {children}
    </span>
  );
}

/* ─── Contador que sube al entrar en pantalla ───────────────────────────── */

export function CountUp({ to, duration = 1200 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;

    setValue(0);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            // easeOutCubic: arranca rápido y frena al final.
            setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{value}</span>;
}
