'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { config, s1, s2, s3, s4, s5, s6, s7, s8, footer } from '@/lib/content';
import Particles from '@/components/Particles';
import CraftSlider from '@/components/CraftSlider';
import Plans, { StrategyPrice } from '@/components/Plans';
import SkillCore from '@/components/SkillCore';
import { CursorTrail } from '@/components/Interactions';
import { Slide, SlideDots, ScrollProgress, In, rise, riseBig, pop, stagger } from '@/components/Deck';

const IDS = ['inicio', 'problema', 'estrategia', 'meses', 'videos', 'skill', 'equipo', 'empezar'];

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
      <ScrollProgress />
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

        {/* El resumen de la oferta, en una línea */}
        <In variants={rise} as="p" className="hero__offer">
          {s1.offer}
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

      {/* ───────── 6 · Tu Skill ───────── */}
      <Slide id="skill" tag={s6.tag} className="slide--skill">
        <div className="skill">
          <div className="skill__text">
            <In variants={riseBig} as="h2" className="big big--mid">
              {s6.title}
            </In>
            <In variants={rise} as="p" className="body">
              {s6.lead}
            </In>

            <In variants={rise} className="skill__works">
              <span className="skill__works-title">{s6.worksTitle}</span>
              <span className="skill__chips">
                {s6.works.map((w) => (
                  <span key={w} className="skill__chip">
                    {w}
                  </span>
                ))}
              </span>
            </In>

            <In variants={rise} className="note">
              {s6.note}
            </In>
          </div>

          <In variants={pop} className="skill__viz">
            <SkillCore core={s6.core} tasks={s6.tasks} />
          </In>
        </div>
      </Slide>

      {/* ───────── 7 · El equipo ───────── */}
      <Slide id="equipo" tag={s7.tag} className="slide--team">
        <In variants={riseBig} as="h2" className="big big--mid">
          {s7.title}
        </In>
        <In variants={rise} className="lead">
          {s7.lead}
        </In>
        <motion.div variants={stagger} className="facts">
          {s7.facts.map((f) => (
            <motion.div key={f.label} variants={rise} className="fact">
              <span className="fact__big accent">{f.big}</span>
              <span className="fact__label">{f.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </Slide>

      {/* ───────── 8 · Empezar ───────── */}
      <Slide id="empezar" tag={s8.tag} className="slide--end" bg={<div className="end__glow" />}>
        <In variants={riseBig} as="h2" className="big">
          {s8.title}
        </In>
        <In variants={rise} className="lead">
          {s8.lead}
        </In>
        <In variants={rise} className="actions">
          <Book big>{s8.cta}</Book>
        </In>
        <In variants={rise} className="small">
          {s8.small}
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
