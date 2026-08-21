'use client';

import { motion } from 'framer-motion';
import { config, s3, s5 } from '@/lib/content';
import Countdown, { useOfferOn } from './Countdown';
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

/**
 * El precio de la estrategia: el de antes tachado, el de ahora al lado y el
 * descuento en una etiqueta.
 *
 * El porcentaje no se escribe a mano, se saca de los dos precios: así nunca
 * puede quedarse desfasado si algún día se cambia alguno de los dos.
 *
 * Se usa en la pantalla 3 y en la página de la estrategia, por eso va suelto.
 */
export function PriceTag({ note }: { note: string }) {
  const on = useOfferOn();
  const before = config.strategyPriceBefore;
  const now = config.strategyPrice;
  const sale = on && before > now;
  const off = Math.round((1 - now / before) * 100);

  return (
    <div className="sprice__right">
      {sale && (
        <span className="sprice__was-row">
          <span className="sprice__off">−{off} %</span>
          <s className="sprice__was">
            <span className="visually-hidden">Antes: </span>
            {before} €
          </s>
        </span>
      )}
      <span className="sprice__num">{now} €</span>
      <span className="sprice__note">{note}</span>
    </div>
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
      <PriceTag note={s3.price.note} />
      <Countdown />
    </In>
  );
}
