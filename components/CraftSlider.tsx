'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/**
 * Los seis oficios, pasando uno detrás de otro en la portada.
 *
 * La gracia es que el visitante no lee una lista: ve cómo van cayendo, uno
 * tras otro, y entiende el peso sin que se lo expliquen.
 *
 * Se para al pasar el ratón por encima, para poder leerlos con calma. Y con
 * "reducir movimiento" activado se muestran todos a la vez, sin rotación.
 */
export default function CraftSlider({ items, interval = 2000 }: { items: string[]; interval?: number }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % items.length), interval);
    return () => clearInterval(t);
  }, [reduce, paused, items.length, interval]);

  // Sin animación: la lista entera, que se lee igual de bien.
  if (reduce) {
    return (
      <ul className="cslider cslider--static">
        {items.map((it, n) => (
          <li key={it}>
            <span className="cslider__n">{String(n + 1).padStart(2, '0')}</span>
            {it}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      className="cslider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="cslider__stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={items[i]}
            className="cslider__item"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="cslider__n">{String(i + 1).padStart(2, '0')}</span>
            {items[i]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Barritas de avance: se ve cuántos quedan */}
      <div className="cslider__bars" aria-hidden="true">
        {items.map((it, n) => (
          <button
            key={it}
            type="button"
            className={`cslider__bar ${n === i ? 'is-active' : ''}`}
            onClick={() => setI(n)}
            tabIndex={-1}
          >
            {n === i && !paused && (
              <motion.span
                className="cslider__fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: interval / 1000, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Para lectores de pantalla: la lista completa, sin rotación. */}
      <ul className="visually-hidden">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
