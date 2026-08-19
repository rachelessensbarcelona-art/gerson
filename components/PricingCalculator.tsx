'use client';

import { useState } from 'react';
import { config, pricing } from '@/lib/content';
import { Reveal, Magnetic } from './Interactions';

/**
 * Calculadora de precios: cuota fija + (nº de vídeos × acabado).
 *
 * Un único estado {qty, unit} manda sobre las tres zonas — la fórmula de
 * arriba, los planes preparados y el configurador — así que tocar cualquiera
 * de ellas actualiza el resto.
 */
export default function PricingCalculator() {
  const [qty, setQty] = useState(4);
  const [unit, setUnit] = useState(10);

  const videosCost = qty * unit;
  const total = config.basePrice + videosCost;

  return (
    <>
      {/* Fórmula: cuota + vídeos = total */}
      <Reveal className="formula">
        <div className="formula__cell">
          <div className="formula__big">{config.basePrice} €</div>
          <div className="formula__label">{pricing.formula.base}</div>
        </div>
        <div className="formula__op">+</div>
        <div className="formula__cell">
          <div className="formula__big tabular">
            {qty} × {unit} €
          </div>
          <div className="formula__label">{pricing.formula.videos}</div>
        </div>
        <div className="formula__op">=</div>
        <div className="formula__cell">
          <div className="formula__big tabular accent">{total} €</div>
          <div className="formula__label">{pricing.formula.total}</div>
        </div>
      </Reveal>

      {/* Franja de lanzamiento */}
      {config.showLaunch && (
        <Reveal className="launch">
          <span className="launch__badge">{pricing.launch.badge}</span>
          <div className="launch__body">
            <h3>{pricing.launch.title}</h3>
            <p>
              {pricing.launch.body.replace(' van incluidas en cualquier plan.', ' ')}
              <s>{pricing.launch.struck}</s> <b className="accent">{pricing.launch.included}</b> en cualquier plan.
            </p>
          </div>
          <div className="launch__price">
            <div className="launch__amount">{pricing.launch.amount}</div>
            <div className="launch__amount-sub">{pricing.launch.amountSub}</div>
          </div>
        </Reveal>
      )}

      {/* Planes preparados */}
      <Reveal as="p" className="block-title">
        {pricing.plansTitle}
      </Reveal>
      <Reveal as="p" className="block-sub">
        {pricing.plansSub}
      </Reveal>

      <div className="grid-auto plans">
        {pricing.plans.map((plan) => {
          const active = qty === plan.qty && unit === plan.unit;
          return (
            <button
              key={plan.name}
              type="button"
              onClick={() => {
                setQty(plan.qty);
                setUnit(plan.unit);
              }}
              aria-pressed={active}
              className={`plan ${active ? 'is-active' : ''}`}
            >
              {plan.featured && <span className="plan__flag">{plan.featured}</span>}
              <span className="plan__name">{plan.name}</span>
              <span className="plan__tagline">{plan.tagline}</span>
              <span className="plan__price">
                {config.basePrice + plan.qty * plan.unit} €<small>/mes</small>
              </span>
              <span className="plan__detail">{plan.detail}</span>
              <span className="plan__bullets">
                {plan.bullets.map((b) => (
                  <span key={b}>
                    <i className="accent">✓</i>
                    {b}
                  </span>
                ))}
              </span>
              <span className="plan__cta">{active ? 'Elegido' : 'Ver cómo se monta'}</span>
            </button>
          );
        })}
      </div>

      {/* Configurador libre */}
      <Reveal as="p" className="block-title">
        {pricing.calcTitle}
      </Reveal>
      <Reveal as="p" className="block-sub">
        {pricing.calcSub}
      </Reveal>

      <Reveal className="calc">
        <div className="calc__panel">
          <div>
            <div className="calc__row">
              <span className="calc__label">{pricing.qtyLabel}</span>
              <b className="calc__value tabular">{qty}</b>
            </div>
            <div className="calc__chips">
              {pricing.qtyOptions.map((n) => (
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

          <div>
            <div className="calc__label" style={{ marginBottom: 16 }}>
              {pricing.unitLabel}
            </div>
            <div className="calc__tiers">
              {pricing.unitOptions.map((o) => (
                <button
                  key={o.label}
                  type="button"
                  onClick={() => setUnit(o.price)}
                  aria-pressed={unit === o.price}
                  className={`tier ${unit === o.price ? 'is-active' : ''}`}
                >
                  <span className="tier__name">{o.label}</span>
                  <span className="tier__price">{o.price} € cada uno</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="calc__label" style={{ marginBottom: 16 }}>
              {pricing.alwaysTitle}
            </div>
            <ul className="calc__always">
              {pricing.always.map((a) => (
                <li key={a}>
                  <i className="accent">✓</i>
                  {a}
                </li>
              ))}
              <li className="calc__always-star">
                <i className="accent">★</i>
                <span>
                  {pricing.alwaysStar.text} · <s>{pricing.alwaysStar.struck}</s>{' '}
                  <b className="accent">{pricing.alwaysStar.included}</b>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Resumen */}
        <div className="calc__summary">
          <div className="calc__summary-label">{pricing.summary.label}</div>
          <div className="calc__total tabular">
            {total}€<small>{pricing.summary.per}</small>
          </div>
          <div className="calc__lines">
            <div>
              <span>{pricing.summary.base}</span>
              <b>{config.basePrice} €</b>
            </div>
            <div>
              <span>
                {qty} vídeos × {unit} €
              </span>
              <b>{videosCost} €</b>
            </div>
            <div>
              <span>{pricing.summary.strategy}</span>
              <b className="accent">{pricing.summary.strategyValue}</b>
            </div>
          </div>
          <Magnetic>
            <a href={config.bookUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary calc__cta">
              {pricing.cta}
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </>
  );
}
