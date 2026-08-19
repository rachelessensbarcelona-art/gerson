'use client';

import { motion } from 'framer-motion';
import { config, s1, s2, s3, s4, s5, s6, s7, s8, footer } from '@/lib/content';
import Particles from '@/components/Particles';
import Price from '@/components/Price';
import CraftSlider from '@/components/CraftSlider';
import { CursorTrail } from '@/components/Interactions';
import { Slide, SlideDots, In, rise, riseBig, pop, stagger } from '@/components/Deck';

const IDS = ['inicio', 'gerson', 'como', 'plan', 'ayudante', 'tu', 'precio', 'empezar'];

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

        {/* Por qué no le funciona: lo digital cambia */}
        <In variants={rise} className="lead">
          {s1.lead}
        </In>

        <In variants={rise} className="hero__before">
          {s1.before}
        </In>

        {/* Los seis oficios, rotando */}
        <In variants={rise}>
          <CraftSlider items={s1.crafts} />
        </In>

        {/* De esto va la web: qué recibe si trabaja con el equipo */}
        <In variants={rise} className="hero__summary">
          {s1.summary}
        </In>
        <motion.ul variants={stagger} className="hero__gets">
          {s1.gets.map((g) => (
            <motion.li key={g} variants={rise}>
              <i className="accent">✓</i>
              {g}
            </motion.li>
          ))}
        </motion.ul>
        <In variants={rise} className="hero__after">
          {s1.after}
        </In>

        <In variants={rise} className="actions">
          <Book big>{s1.cta}</Book>
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

      {/* ───────── 2 · Quién soy ───────── */}
      <Slide id="gerson" tag={s2.tag} className="slide--me">
        {/* Retrato pequeño y redondo, con un anillo girando alrededor: el
            mismo lenguaje que la órbita del ayudante, para que la web se
            sienta de una sola pieza. */}
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

        <In variants={riseBig} as="h2" className="big big--mid">
          {s2.hello}
        </In>
        <In variants={rise} className="avatar__role">
          {s2.role}
        </In>

        {s2.story.map((l) => (
          <In key={l} variants={rise} as="p" className="body body--center">
            {l}
          </In>
        ))}

        <In variants={rise} className="punch">
          {s2.punch}
          <br />
          <span className="accent">{s2.punchAccent}</span>
        </In>
      </Slide>

      {/* ───────── 3 · Cómo lo hago ───────── */}
      <Slide id="como" tag={s3.tag}>
        <motion.h2 variants={stagger} className="big">
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

        {/* Las tres cosas que consigue la estrategia, de un vistazo */}
        <motion.ul variants={stagger} className="wins">
          {s3.wins.map((w) => (
            <motion.li key={w.word} variants={rise}>
              <span className="wins__word">{w.word}</span>
              <span className="wins__text">{w.text}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div variants={stagger} className="versus">
          <motion.div variants={rise} className="versus__col versus__col--wrong">
            <div className="versus__label">{s3.wrong.label}</div>
            <ul>
              {s3.wrong.items.map((i) => (
                <li key={i}>
                  <i>✕</i>
                  {i}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={rise} className="versus__col versus__col--right">
            <div className="versus__label">{s3.right.label}</div>
            <ul>
              {s3.right.items.map((i) => (
                <li key={i}>
                  <i className="accent">✓</i>
                  {i}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <In variants={rise} className="punch punch--sm">
          {s3.punch}
        </In>
      </Slide>

      {/* ───────── 4 · El plan ───────── */}
      <Slide id="plan" tag={s4.tag}>
        <In variants={riseBig} as="h2" className="big big--mid">
          {s4.title}
        </In>
        <In variants={rise} className="lead">
          {s4.lead}
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

      {/* ───────── 5 · Tu ayudante ───────── */}
      <Slide id="ayudante" tag={s5.tag} className="slide--split">
        <div className="split split--rev">
          <div className="split__text">
            <In variants={riseBig} as="h2" className="big big--mid">
              {s5.title}
            </In>
            <In variants={rise} as="p" className="body">
              {s5.lead}
            </In>
            <motion.ul variants={stagger} className="ticks">
              {s5.bullets.map((b) => (
                <motion.li key={b} variants={rise}>
                  <i className="accent">✓</i>
                  {b}
                </motion.li>
              ))}
            </motion.ul>
            <In variants={rise} className="note">
              {s5.note}
            </In>
          </div>
          <In variants={pop} className="split__media split__media--orbit">
            <div className="orbit">
              <div className="orbit__glow" />
              <motion.div
                className="orbit__ring orbit__ring--1"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="orbit__ring orbit__ring--2"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <div className="orbit__ring orbit__ring--3" />
              <motion.div
                className="orbit__core"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {s5.core}
              </motion.div>
            </div>
          </In>
        </div>
      </Slide>

      {/* ───────── 6 · Tu parte ───────── */}
      <Slide id="tu" tag={s6.tag}>
        <In variants={riseBig} as="h2" className="big big--mid">
          {s6.title}
        </In>
        <In variants={rise} className="lead">
          {s6.lead}
        </In>
        <motion.div variants={stagger} className="steps">
          {s6.items.map((it) => (
            <motion.div key={it.big} variants={rise} className="step step--you">
              <div className="step__big accent">{it.big}</div>
              <div className="step__when">{it.when}</div>
              <p className="step__text">{it.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <In variants={rise} className="punch punch--sm">
          {s6.punch}
        </In>
      </Slide>

      {/* ───────── 7 · Precio ───────── */}
      <Slide id="precio" tag={s7.tag} className="slide--price">
        <In variants={riseBig} as="h2" className="big big--mid">
          {s7.title}
        </In>
        <In variants={rise} className="lead">
          {s7.lead}
        </In>
        <Price />
        <In variants={rise} className="price__free">
          {s7.free}
        </In>
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
            {footer.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(('external' in l && l.external) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {l.label}
              </a>
            ))}
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
