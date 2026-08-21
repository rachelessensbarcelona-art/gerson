'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { config, s1, s2, s3, s4, s5, s6, s7, footer } from '@/lib/content';
import Particles from '@/components/Particles';
import CraftSlider from '@/components/CraftSlider';
import Plans, { StrategyPrice } from '@/components/Plans';
import { CursorTrail } from '@/components/Interactions';
import { Slide, SlideDots, In, rise, riseBig, pop, stagger } from '@/components/Deck';

const IDS = ['inicio', 'problema', 'estrategia', 'meses', 'videos', 'equipo', 'empezar'];

/** Botón de reserva. Se repite en varias pantallas. */
function Book({ children, big = false }: { children: React.ReactNode; big?: boolean }) {
  return (
    <motion.a
      href={config.bookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn--primary ${big ? 'btn--xl' : ''}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.a>
  );
}

export default function Home() {
  return (
    <>
      <CursorTrail />
      <SlideDots ids={IDS} />

      {/* ───────── 1 · Portada ───────── */}
      <Slide
        id="inicio"
        className="slide--hero"
        bg={
          <>
            <div className="hero__glow" />
            <Particles />
          </>
        }
      >
        <motion.h1 variants={stagger} className="big">
          <In variants={riseBig} as="span">
            <span className="big__line">{s1.line1}</span>
          </In>
          <In variants={riseBig} as="span">
            <span className="big__line accent">{s1.line2}</span>
          </In>
        </motion.h1>

        <In variants={rise} className="lead">
          {s1.lead}
        </In>

        {/* Qué hacemos, en tres golpes */}
        <motion.ul variants={stagger} className="hero__gets">
          {s1.gets.map((g) => (
            <motion.li key={g} variants={rise}>
              <i className="accent">→</i>
              {g}
            </motion.li>
          ))}
        </motion.ul>
        <In variants={rise} className="hero__after">
          {s1.after}
        </In>

        <In variants={rise} className="actions">
          <Book big>{s1.cta}</Book>
          <Link href="/estrategia" className="btn btn--ghost btn--xl">
            {s1.ctaGhost}
          </Link>
        </In>

        <motion.div
          className="scroll-hint"
          variants={rise}
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <span>{s1.scroll}</span>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </Slide>

      {/* ───────── 2 · El problema ───────── */}
      <Slide id="problema" tag={s2.tag}>
        <In variants={riseBig} as="h2" className="big big--mid">
          {s2.title}
        </In>
        <In variants={rise} className="lead">
          {s2.lead}
        </In>
        <In variants={rise}>
          <CraftSlider items={s2.crafts} />
        </In>
        <In variants={rise} className="punch punch--sm">
          {s2.punch}
        </In>
      </Slide>

      {/* ───────── 3 · La estrategia ───────── */}
      <Slide id="estrategia" tag={s3.tag}>
        <motion.h2 variants={stagger} className="big big--mid">
          <In variants={riseBig} as="span">
            <span className="big__line">{s3.line1}</span>
          </In>
          <In variants={riseBig} as="span">
            <span className="big__line accent">{s3.line2}</span>
          </In>
        </motion.h2>
        <In variants={rise} className="lead">
          {s3.lead}
        </In>

        <motion.ul variants={stagger} className="wins">
          {s3.wins.map((w) => (
            <motion.li key={w.word} variants={rise}>
              <span className="wins__word">{w.word}</span>
              <span className="wins__text">{w.text}</span>
            </motion.li>
          ))}
        </motion.ul>

        <StrategyPrice />

        <In variants={rise}>
          <Link href="/estrategia" className="textlink">
            {s3.price.link} →
          </Link>
        </In>
      </Slide>

      {/* ───────── 4 · Los seis meses ───────── */}
      <Slide id="meses" tag={s4.tag}>
        <In variants={riseBig} as="h2" className="big big--mid">
          {s4.title}
        </In>
        <motion.div variants={stagger} className="steps">
          {s4.steps.map((st) => (
            <motion.div key={st.n} variants={rise} className="step">
              <div className="step__n">{st.n}</div>
              <div className="step__months">{st.months}</div>
              <div className="step__name">{st.name}</div>
              <p className="step__text">{st.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <In variants={rise} className="punch punch--sm">
          {s4.punch}
        </In>
      </Slide>

      {/* ───────── 5 · Los vídeos ───────── */}
      <Slide id="videos" tag={s5.tag}>
        <In variants={riseBig} as="h2" className="big big--mid">
          {s5.title}
        </In>
        <In variants={rise} className="lead">
          {s5.lead}
        </In>
        <Plans />
        <In variants={rise} className="plans__foot">
          <span>{s5.includes}</span>
          <span className="plans__note">{s5.note}</span>
        </In>
      </Slide>

      {/* ───────── 6 · El equipo ───────── */}
      <Slide id="equipo" tag={s6.tag} className="slide--team">
        <div className="team">
          <In variants={pop} className="avatar">
            <motion.span
              className="avatar__ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            />
            <span className="avatar__glow" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/gerson.webp" alt="Gerson" width={506} height={890} />
          </In>

          <div className="team__text">
            <In variants={riseBig} as="h2" className="big big--mid">
              {s6.title}
            </In>
            <In variants={rise} className="avatar__role">
              {s6.role}
            </In>
            {s6.story.map((l) => (
              <In key={l} variants={rise} as="p" className="body">
                {l}
              </In>
            ))}
          </div>
        </div>

        {/* El ayudante, que antes ocupaba una pantalla entera */}
        <In variants={rise} className="extra">
          <span className="extra__title">{s6.extra.title}</span>
          <span className="extra__text">{s6.extra.text}</span>
        </In>
      </Slide>

      {/* ───────── 7 · Empezar ───────── */}
      <Slide id="empezar" tag={s7.tag} className="slide--end" bg={<div className="end__glow" />}>
        <In variants={riseBig} as="h2" className="big">
          {s7.title}
        </In>
        <In variants={rise} className="lead">
          {s7.lead}
        </In>
        <In variants={rise} className="actions">
          <Book big>{s7.cta}</Book>
        </In>
        <In variants={rise} className="small">
          {s7.small}
        </In>

        <motion.footer variants={rise} className="foot">
          <div className="foot__links">
            {footer.links.map((l) =>
              'external' in l && l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              ),
            )}
          </div>
          <div className="foot__meta">
            <span>{footer.copyright}</span>
            <span>{footer.place}</span>
          </div>
        </motion.footer>
      </Slide>
    </>
  );
}
