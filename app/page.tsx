'use client';

import { motion } from 'framer-motion';
import { config, s1, s2, s3, s4, s5, s6, s7, s8, s9, footer } from '@/lib/content';
import Particles from '@/components/Particles';
import Price from '@/components/Price';
import { CursorTrail } from '@/components/Interactions';
import { Slide, SlideDots, In, rise, riseBig, pop, stagger } from '@/components/Deck';

const IDS = ['inicio', 'lio', 'gerson', 'idea', 'plan', 'robot', 'tu', 'precio', 'empezar'];

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
      <Slide id="inicio" className="slide--hero">
        <div className="hero__glow" />
        <Particles />

        <In variants={rise} className="hero__badge">
          <span className="hero__pulse" />
          {s1.badge}
        </In>

        <motion.h1 variants={stagger} className="big">
          <In variants={riseBig} as="span">
            <span className="big__line">{s1.line1}</span>
          </In>
          <In variants={riseBig} as="span">
            <span className="big__line accent">{s1.line2}</span>
          </In>
        </motion.h1>

        <In variants={rise} className="lead">
          {s1.sub}
        </In>

        <In variants={rise} className="actions">
          <Book big>{s1.cta}</Book>
        </In>

        {/* Pista de que hay más abajo */}
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

      {/* ───────── 2 · El lío ───────── */}
      <Slide id="lio" tag={s2.tag}>
        <In variants={riseBig} as="h2" className="big big--mid">
          {s2.title}
        </In>
        <motion.ul variants={stagger} className="crafts">
          {s2.crafts.map((c, i) => (
            <motion.li key={c} variants={pop} className="crafts__item">
              <span className="crafts__n">{String(i + 1).padStart(2, '0')}</span>
              {c}
            </motion.li>
          ))}
        </motion.ul>
        <In variants={rise} className="punch">
          {s2.punch}
        </In>
      </Slide>

      {/* ───────── 3 · Quién soy ───────── */}
      <Slide id="gerson" tag={s3.tag} className="slide--split">
        <div className="split">
          <In variants={pop} className="split__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/gerson.webp" alt="Gerson" width={546} height={859} />
            <span className="split__role">{s3.role}</span>
          </In>
          <div className="split__text">
            <In variants={riseBig} as="h2" className="big big--mid">
              {s3.hello}
            </In>
            {s3.lines.map((l) => (
              <In key={l} variants={rise} as="p" className="lead">
                {l}
              </In>
            ))}
            <In variants={rise} className="punch punch--left">
              {s3.punch}
              <br />
              <span className="accent">{s3.punchAccent}</span>
            </In>
          </div>
        </div>
      </Slide>

      {/* ───────── 4 · La idea ───────── */}
      <Slide id="idea" tag={s4.tag}>
        <motion.h2 variants={stagger} className="big">
          <In variants={riseBig} as="span">
            <span className="big__line">{s4.line1}</span>
          </In>
          <In variants={riseBig} as="span">
            <span className="big__line accent">{s4.line2}</span>
          </In>
        </motion.h2>
        <In variants={rise} className="lead">
          {s4.sub}
        </In>

        <motion.div variants={stagger} className="versus">
          <motion.div variants={rise} className="versus__col versus__col--wrong">
            <div className="versus__label">{s4.wrong.label}</div>
            <ul>
              {s4.wrong.items.map((i) => (
                <li key={i}>
                  <i>✕</i>
                  {i}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={rise} className="versus__col versus__col--right">
            <div className="versus__label">{s4.right.label}</div>
            <ul>
              {s4.right.items.map((i) => (
                <li key={i}>
                  <i className="accent">✓</i>
                  {i}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Slide>

      {/* ───────── 5 · El plan ───────── */}
      <Slide id="plan" tag={s5.tag}>
        <In variants={riseBig} as="h2" className="big big--mid">
          {s5.title}
        </In>
        <motion.div variants={stagger} className="steps">
          {s5.steps.map((st) => (
            <motion.div key={st.n} variants={rise} className="step">
              <div className="step__n">{st.n}</div>
              <div className="step__months">{st.months}</div>
              <div className="step__name">{st.name}</div>
              <p className="step__text">{st.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <In variants={rise} className="punch">
          {s5.punch}
        </In>
      </Slide>

      {/* ───────── 6 · Tu robot ───────── */}
      <Slide id="robot" tag={s6.tag} className="slide--split">
        <div className="split split--rev">
          <div className="split__text">
            <In variants={riseBig} as="h2" className="big big--mid">
              {s6.title}
            </In>
            <motion.ul variants={stagger} className="ticks">
              {s6.bullets.map((b) => (
                <motion.li key={b} variants={rise}>
                  <i className="accent">✓</i>
                  {b}
                </motion.li>
              ))}
            </motion.ul>
            <In variants={rise} className="note">
              {s6.note}
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
                {s6.core}
              </motion.div>
            </div>
          </In>
        </div>
      </Slide>

      {/* ───────── 7 · Tú qué haces ───────── */}
      <Slide id="tu" tag={s7.tag}>
        <In variants={riseBig} as="h2" className="big big--mid">
          {s7.title}
        </In>
        <motion.div variants={stagger} className="steps">
          {s7.items.map((it) => (
            <motion.div key={it.big} variants={rise} className="step step--you">
              <div className="step__big accent">{it.big}</div>
              <div className="step__when">{it.when}</div>
              <p className="step__text">{it.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <In variants={rise} className="punch">
          {s7.punch}
        </In>
      </Slide>

      {/* ───────── 8 · Precio ───────── */}
      <Slide id="precio" tag={s8.tag} className="slide--price">
        <In variants={riseBig} as="h2" className="big big--mid">
          {s8.title}
        </In>
        <Price />
        <In variants={rise} className="price__free">
          {s8.free}
        </In>
      </Slide>

      {/* ───────── 9 · Empezar ───────── */}
      <Slide id="empezar" tag={s9.tag} className="slide--end">
        <div className="end__glow" />
        <In variants={riseBig} as="h2" className="big">
          {s9.title}
        </In>
        <In variants={rise} className="lead">
          {s9.sub}
        </In>
        <In variants={rise} className="actions">
          <Book big>{s9.cta}</Book>
        </In>
        <In variants={rise} className="small">
          {s9.small}
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
