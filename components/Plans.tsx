'use client';

import { motion } from 'framer-motion';
import { config, s3, s5 } from '@/lib/content';
import { In, rise, stagger } from './Deck';

/** Formatea a la española: 10,4 en vez de 10.4 */
const eur = (n: number) => n.toFixed(1).replace('.', ',').replace(',0', '');

/**
 * Los tres planes de vídeo.
 *
 * La idea que tienen que transmitir es el descuento por volumen: la estrategia
 * se basa en probar mucho, así que cuantos más vídeos, menos cuesta cada uno.
 * Por eso el precio por vídeo se calcula y se muestra en cada tarjeta.
 */
export default function Plans() {
  return (
    <motion.div variants={stagger} className="plans">
      {s5.plans.map((p) => (
        <motion.a
          key={p.name}
          href={config.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          variants={rise}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`plan ${p.featured ? 'plan--featured' : ''}`}
        >
          {p.featured && <span className="plan__flag">Recomendado</span>}
          <span className="plan__name">{p.name}</span>
          <span className="plan__videos">{p.videos} vídeos al mes</span>
          <span className="plan__price">
            {p.price}
            <small>€/mes</small>
          </span>
          <span className="plan__per">{eur(p.price / p.videos)} € por vídeo</span>
          <span className="plan__freq">{p.freq}</span>
        </motion.a>
      ))}
    </motion.div>
  );
}

/** Tarjeta del precio de la estrategia. Va en la pantalla 3. */
export function StrategyPrice() {
  return (
    <In variants={rise} className="sprice">
      <div className="sprice__left">
        <span className="sprice__label">{s3.price.label}</span>
        <span className="sprice__detail">{s3.price.detail}</span>
      </div>
      <div className="sprice__right">
        <span className="sprice__num">{config.strategyPrice} €</span>
        <span className="sprice__note">{s3.price.note}</span>
      </div>
    </In>
  );
}
