'use client';

import { useEffect, useRef } from 'react';

/* Piezas visuales pequeñas. Todo SVG/CSS: sin imágenes que cargar y nítido
   en cualquier pantalla. */

/** Barras del plan (portada). */
export function BarsGraphic() {
  const heights = [34, 52, 44, 70, 60, 100];
  return (
    <div className="mini mini--bars" aria-hidden="true">
      {heights.map((h, i) => (
        <span key={i} style={{ height: `${h}%`, background: i < 2 ? 'var(--red)' : 'rgba(255,255,255,.16)' }} />
      ))}
    </div>
  );
}

/** Guiones: tres líneas de texto insinuadas. */
export function ScriptsGraphic() {
  return (
    <div className="mini mini--scripts" aria-hidden="true">
      <span style={{ width: '82%', background: 'var(--red)' }} />
      <span style={{ width: '58%' }} />
      <span style={{ width: '70%' }} />
      <span style={{ width: '40%' }} />
    </div>
  );
}

/** Órbita del agente. */
export function OrbitGraphic() {
  return (
    <div className="mini mini--orbit" aria-hidden="true">
      <span className="mini__ring" />
      <span className="mini__ring mini__ring--2" />
      <span className="mini__core" />
    </div>
  );
}

/** Tarjeta "folio en blanco": muchas grabadas, pocas publicadas. */
export function BlankGraphic() {
  return (
    <div className="bars-row" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <i key={i} style={{ background: i < 7 ? 'var(--red)' : 'rgba(255,255,255,.09)' }} />
      ))}
    </div>
  );
}

/** Tarjeta "ley del jueves": constancia que se apaga. */
export function DecayGraphic() {
  const alphas = [1, 0.5, 0.25, 0.09, 0.05];
  return (
    <div className="pills-row" aria-hidden="true">
      {alphas.map((a, i) => (
        <i
          key={i}
          style={{ background: a > 0.2 ? `rgba(217,45,32,${a})` : `rgba(255,255,255,${a})` }}
        />
      ))}
    </div>
  );
}

/** Tarjeta "números mudos": línea que no dice nada. */
export function FlatGraphic() {
  return (
    <svg viewBox="0 0 220 46" preserveAspectRatio="none" className="flat-svg" aria-hidden="true">
      <path d="M0,24 H220" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1" strokeDasharray="3 4" />
      <path
        d="M2,30 C20,18 30,38 48,27 C66,16 76,36 94,26 C112,17 122,37 140,28 C158,19 168,35 186,27 C200,21 210,29 218,25"
        fill="none"
        stroke="var(--red)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Curva de crecimiento de los seis meses.
 * La línea se dibuja sola al entrar en pantalla.
 */
export function GrowthChart() {
  const ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = ref.current;
    if (!path) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      path.style.strokeDashoffset = '0';
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          path.style.animation = 'draw 2.2s cubic-bezier(.16,1,.3,1) .15s forwards';
          io.unobserve(e.target);
        }
      },
      { threshold: 0.2 },
    );
    io.observe(path);
    return () => io.disconnect();
  }, []);

  const d =
    'M20,272 C70,268 110,276 165,265 C220,254 275,262 330,254 C390,238 415,214 465,197 C515,180 560,163 610,141 C660,119 690,97 740,79 C790,61 840,48 880,38';

  return (
    <svg viewBox="0 0 900 300" preserveAspectRatio="none" className="growth" aria-label="Crecimiento a lo largo de los seis meses">
      <defs>
        <linearGradient id="growthArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d92d20" stopOpacity=".34" />
          <stop offset="100%" stopColor="#d92d20" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="rgba(255,255,255,.07)" strokeWidth="1">
        <line x1="0" y1="70" x2="900" y2="70" />
        <line x1="0" y1="140" x2="900" y2="140" />
        <line x1="0" y1="210" x2="900" y2="210" />
        <line x1="0" y1="278" x2="900" y2="278" />
      </g>
      <g stroke="rgba(255,255,255,.14)" strokeWidth="1" strokeDasharray="4 6">
        <line x1="330" y1="20" x2="330" y2="278" />
        <line x1="610" y1="20" x2="610" y2="278" />
      </g>
      <path fill="url(#growthArea)" d={`${d} L880,278 L20,278 Z`} />
      <path
        ref={ref}
        pathLength={1}
        style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
        fill="none"
        stroke="var(--red)"
        strokeWidth="3"
        strokeLinecap="round"
        d={d}
      />
    </svg>
  );
}

/** Miniaturas 9:16 de los acabados de vídeo. */
export function VideoThumbs({ style }: { style: 'plain' | 'accent' | 'motion' }) {
  if (style === 'accent') {
    return (
      <div className="thumbs" aria-hidden="true">
        {[78, 56, 68].map((w, i) => (
          <div key={i} className="thumb thumb--accent">
            {i === 0 && <span className="thumb__dot" />}
            <span className="thumb__bar" style={{ width: `${w}%`, background: 'var(--red)' }} />
          </div>
        ))}
      </div>
    );
  }
  if (style === 'motion') {
    return (
      <div className="thumbs" aria-hidden="true">
        <div className="thumb">
          <span className="thumb__circle" />
          <span className="thumb__bar thumb__bar--fade" />
        </div>
        <div className="thumb">
          <span className="thumb__blob" />
          <span className="thumb__bar" style={{ width: '60%', background: 'var(--red)' }} />
        </div>
        <div className="thumb">
          <span className="thumb__square" />
          <span className="thumb__bar thumb__bar--fade" style={{ width: '72%' }} />
        </div>
      </div>
    );
  }
  return (
    <div className="thumbs" aria-hidden="true">
      {[70, 50, 62].map((w, i) => (
        <div key={i} className="thumb">
          <span className="thumb__bar" style={{ width: `${w}%`, background: 'rgba(255,255,255,.35)' }} />
        </div>
      ))}
    </div>
  );
}

/** Órbita grande del agente (sección Skills). */
export function AgentOrbit() {
  return (
    <div className="orbit" aria-hidden="true">
      <div className="orbit__glow" />
      <div className="orbit__ring orbit__ring--1" />
      <div className="orbit__ring orbit__ring--2" />
      <div className="orbit__ring orbit__ring--3" />
      <div className="orbit__core">Claude</div>
    </div>
  );
}
