'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config, s8 } from '@/lib/content';
import { In, rise } from './Deck';

/**
 * Calculadora de precio, versión corta: el plan fijo más los vídeos que elijas.
 *
 * El total cambia con un pequeño salto (AnimatePresence sobre la cifra) para
 * que se note que acabas de cambiar algo.
 */
export default function Price() {
  const [qty, setQty] = useState(4);
  const [unit, setUnit] = useState(10);
  const total = config.basePrice + qty * unit;

  return (
    <>
      <In variants={rise} className="price__formula">
        <div className="price__cell">
          <span className="price__num">{config.basePrice}€</span>
          <span className="price__lbl">{s8.base}</span>
        </div>
        <span className="price__op">+</span>
        <div className="price__cell">
          <span className="price__num tabular">
            {qty}×{unit}€
          </span>
          <span className="price__lbl">{s8.videosLabel}</span>
        </div>
        <span className="price__op">=</span>
        <div className="price__cell">
          {/* La cifra se cambia por completo en cada cambio, y así puede
              animar la salida de la anterior y la entrada de la nueva. */}
          <span className="price__num price__num--total tabular accent">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={total}
                initial={{ y: 22, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -22, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'inline-block' }}
              >
                {total}€
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="price__lbl">{s8.totalLabel}</span>
        </div>
      </In>

      <In variants={rise} className="price__controls">
        <div className="price__group">
          <div className="price__q">{s8.qtyLabel}</div>
          <div className="price__chips">
            {s8.qtyOptions.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setQty(n)}
                aria-pressed={qty === n}
                className={`chip ${qty === n ? 'is-active' : ''}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="price__group">
          <div className="price__q">{s8.unitLabel}</div>
          <div className="price__chips">
            {s8.unitOptions.map((o) => (
              <button
                key={o.label}
                type="button"
                onClick={() => setUnit(o.price)}
                aria-pressed={unit === o.price}
                className={`chip chip--wide ${unit === o.price ? 'is-active' : ''}`}
              >
                {o.label} <b>{o.price}€</b>
              </button>
            ))}
          </div>
        </div>
      </In>

      <In variants={rise} className="price__included">
        <span className="price__included-title">{s8.includedTitle}</span>
        <ul>
          {s8.included.map((i) => (
            <li key={i}>
              <i className="accent">✓</i>
              {i}
            </li>
          ))}
        </ul>
      </In>
    </>
  );
}
