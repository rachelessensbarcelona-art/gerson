'use client';

import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { slideNames } from '@/lib/content';

/* ───────────────────────────────────────────────────────────────────────────
   Piezas de animación compartidas.

   Todo entra con el mismo lenguaje: sube un poco, se desenfoca menos y
   aparece. Al usar variantes y `staggerChildren`, los elementos de una
   pantalla entran en cascada sin tener que calcular retrasos a mano.
   ─────────────────────────────────────────────────────────────────────────── */

const EASE = [0.16, 1, 0.3, 1] as const;

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const rise: Variants = {
  hidden: { opacity: 0, y: 34, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: EASE } },
};

export const riseBig: Variants = {
  hidden: { opacity: 0, y: 70, filter: 'blur(14px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: EASE } },
};

export const pop: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

/** Envoltorio para cualquier trozo que deba entrar al aparecer en pantalla. */
export function In({
  children,
  variants = rise,
  className,
  as = 'div',
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  as?: 'div' | 'p' | 'h1' | 'h2' | 'li' | 'span';
}) {
  const M = motion[as] as typeof motion.div;
  return (
    <M variants={variants} className={className}>
      {children}
    </M>
  );
}

/* ───────────────────────────────────────────────────────────────────────────
   Una pantalla completa.

   Cada Slide ocupa el alto de la ventana y se engancha al hacer scroll
   (scroll-snap), así se pasa de una a otra como en una presentación.
   `whileInView` dispara la cascada cada vez que la pantalla entra.
   ─────────────────────────────────────────────────────────────────────────── */

export function Slide({
  children,
  id,
  className = '',
  tag,
}: {
  children: ReactNode;
  id: string;
  className?: string;
  tag?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  // once: la pantalla entra una vez y se queda; si no, el contenido
  // desaparecería al volver hacia arriba, que marea.
  // La primera pantalla ya está en pantalla al cargar, así que esto se
  // dispara solo en el montaje sin necesitar ningún caso especial.
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const show = reduce || inView;

  return (
    <section id={id} className={`slide ${className}`.trim()}>
      <motion.div
        ref={ref}
        className="slide__inner"
        variants={stagger}
        initial={reduce ? 'show' : 'hidden'}
        animate={show ? 'show' : 'hidden'}
      >
        {tag && (
          <motion.div variants={rise} className="slide__tag">
            {tag}
          </motion.div>
        )}
        {children}
      </motion.div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────────
   Puntitos de navegación.

   Marcan en qué pantalla estás y permiten saltar a cualquiera. Se ocultan
   en móvil, donde el pulgar ya hace ese trabajo.
   ─────────────────────────────────────────────────────────────────────────── */

export function SlideDots({ ids }: { ids: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    // La pantalla "activa" es la que más superficie ocupa en la ventana.
    const io = new IntersectionObserver(
      (entries) => {
        let best = -1;
        let bestRatio = 0;
        for (const e of entries) {
          if (e.intersectionRatio > bestRatio) {
            bestRatio = e.intersectionRatio;
            best = sections.indexOf(e.target as HTMLElement);
          }
        }
        if (best >= 0 && bestRatio > 0.4) setActive(best);
      },
      { threshold: [0.4, 0.6, 0.8] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);

  return (
    <nav className="dots" aria-label="Secciones">
      {ids.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          className={`dots__item ${i === active ? 'is-active' : ''}`}
          aria-label={slideNames[i] ?? id}
          aria-current={i === active ? 'true' : undefined}
        >
          <span className="dots__label">{slideNames[i] ?? id}</span>
          <span className="dots__mark" />
        </a>
      ))}
    </nav>
  );
}
