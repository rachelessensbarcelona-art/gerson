'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { config, strategy } from '@/lib/content';
import { In, rise, riseBig, stagger } from '@/components/Deck';

/**
 * Página aparte con el detalle completo de la estrategia.
 *
 * A diferencia de la portada, esta NO va por pantallas: es una página normal
 * de leer del tirón, porque quien llega aquí ya está interesado y quiere el
 * detalle. Se enlaza desde el pie.
 */
export default function Estrategia() {
  return (
    <main className="doc">
      <div className="doc__glow" />

      <div className="doc__shell">
        <Link href="/" className="doc__back">
          ← {strategy.back}
        </Link>

        <motion.header
          className="doc__head"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <In variants={rise} className="doc__kicker">
            {strategy.kicker}
          </In>
          <In variants={riseBig} as="h1" className="doc__title">
            {strategy.title}
          </In>
          <In variants={rise} as="p" className="doc__lead">
            {strategy.lead}
          </In>
          {/* El precio, arriba del todo: quien entra aquí ya quiere saberlo. */}
          <In variants={rise} className="sprice doc__price">
            <div className="sprice__left">
              <span className="sprice__label">{strategy.price.label}</span>
              <span className="sprice__detail">{strategy.videosNote}</span>
            </div>
            <div className="sprice__right">
              <span className="sprice__num">{config.strategyPrice} €</span>
              <span className="sprice__note">{strategy.price.note}</span>
            </div>
          </In>
        </motion.header>

        <motion.section
          className="doc__idea"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <In variants={rise} className="doc__idea-title">
            {strategy.idea.title}
          </In>
          <In variants={rise} as="p" className="doc__idea-body">
            {strategy.idea.body}
          </In>
        </motion.section>

        {strategy.phases.map((phase, i) => (
          <motion.section
            key={phase.name}
            className="doc__phase"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <In variants={rise} className="doc__phase-bar">
              <span style={{ width: `${((i + 1) / 3) * 100}%` }} />
            </In>
            <In variants={rise} className="doc__phase-tag">
              {phase.tag}
            </In>
            <In variants={riseBig} as="h2" className="doc__phase-name">
              {phase.name}
              <small>{phase.motto}</small>
            </In>
            <In variants={rise} as="p" className="doc__phase-desc">
              {phase.desc}
            </In>

            <div className="doc__phase-split">
              <In variants={rise}>
                <h3 className="doc__micro">Qué pasa durante estas semanas</h3>
                <ul className="doc__steps">
                  {phase.steps.map((st) => (
                    <li key={st}>
                      <span className="doc__dot" />
                      {st}
                    </li>
                  ))}
                </ul>
              </In>
              <In variants={rise} className="doc__outcome">
                <h3 className="doc__micro">A dónde llegamos</h3>
                <p className="doc__outcome-big">{phase.outcome}</p>
                <p className="doc__outcome-sub">{phase.outcomeSub}</p>
              </In>
            </div>
          </motion.section>
        ))}

        <motion.section
          className="doc__table-wrap"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <In variants={riseBig} as="h2" className="doc__h2">
            {strategy.includesTitle}
          </In>
          <In variants={rise} className="doc__table">
            <div className="doc__tr doc__tr--head">
              {strategy.includesHead.map((h, n) => (
                <div key={h} className={n === 2 ? 'right' : ''}>
                  {h}
                </div>
              ))}
            </div>
            {strategy.includes.map(([what, desc, when]) => (
              <div key={what} className="doc__tr">
                <div className="doc__what">{what}</div>
                <div className="doc__desc">{desc}</div>
                <div className="doc__when">{when}</div>
              </div>
            ))}
          </In>
        </motion.section>

        <motion.section
          className="doc__cta"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <In variants={riseBig} as="h2" className="doc__h2">
            {strategy.ctaTitle}
          </In>
          <In variants={rise} as="p" className="doc__lead">
            {strategy.ctaLead}
          </In>
          <In variants={rise}>
            <motion.a
              href={config.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--xl"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {strategy.cta}
            </motion.a>
          </In>
        </motion.section>
      </div>
    </main>
  );
}
