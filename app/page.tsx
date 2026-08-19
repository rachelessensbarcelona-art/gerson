import {
  config,
  hero,
  marquee,
  problem,
  tried,
  turn,
  method,
  includes,
  agent,
  videos,
  fit,
  pricing,
  about,
  faq,
  cta,
  footer,
} from '@/lib/content';

import Particles from '@/components/Particles';
import Faq from '@/components/Faq';
import PricingCalculator from '@/components/PricingCalculator';
import FloatingCta from '@/components/FloatingCta';
import { Reveal, SpotlightCard, Magnetic, CountUp, ScrollProgress, CursorTrail } from '@/components/Interactions';
import {
  BarsGraphic,
  ScriptsGraphic,
  OrbitGraphic,
  BlankGraphic,
  DecayGraphic,
  FlatGraphic,
  GrowthChart,
  VideoThumbs,
  AgentOrbit,
} from '@/components/Graphics';

/** Cabecera de sección reutilizable: número, título y etiqueta. */
function SectionHead({
  num,
  kicker,
  aside,
  title,
  intro,
}: {
  num: string;
  kicker: string;
  aside: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="sec-head">
      <div className="meta">
        <span className="kicker">
          <b>{num} /</b> {kicker}
        </span>
        <span className="aside">{aside}</span>
      </div>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  );
}

const heroGraphics = { bars: BarsGraphic, scripts: ScriptsGraphic, orbit: OrbitGraphic };
const problemGraphics = { blank: BlankGraphic, decay: DecayGraphic, flat: FlatGraphic };

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorTrail />
      <FloatingCta />

      {/* ─── Portada ─────────────────────────────────────────────────── */}
      <section id="top" className="hero">
        <div className="hero__glow" />
        <div className="hero__grid" />
        <Particles />

        <div className="shell hero__inner">
          <div className="hero__badge">
            <span className="hero__pulse" />
            <span className="hero__badge-text">{hero.badge}</span>
            <span className="hero__rule" />
            <span className="hero__aside">{hero.aside}</span>
          </div>

          <h1 className="hero__title">
            {hero.headline.map((line, i) => (
              <span key={line.text} className="hero__line">
                <span className="hero__line-in" style={{ animationDelay: `${0.05 + i * 0.1}s` }}>
                  {line.accent ? <em className="accent">{line.text}</em> : line.text}
                </span>
              </span>
            ))}
          </h1>

          <div className="hero__body">
            <div>
              <p className="hero__sub">{hero.sub}</p>
              <div className="hero__cards">
                {hero.cards.map((card) => {
                  const G = heroGraphics[card.kind as keyof typeof heroGraphics];
                  return (
                    <div key={card.title} className="hero__card">
                      <G />
                      <div className="hero__card-title">{card.title}</div>
                      <div className="hero__card-sub">{card.sub}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hero__actions">
              <Magnetic>
                <a href={config.bookUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  {hero.ctaPrimary}
                </a>
              </Magnetic>
              <a href="#metodo" className="btn btn--ghost">
                {hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Marquesina ──────────────────────────────────────────────── */}
      <div className="marquee">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div key={copy} className="marquee__group" aria-hidden={copy === 1}>
              {marquee.map((item) => (
                <span key={item} className="marquee__item">
                  {item}
                  <i className="accent">✳</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── 01 · El problema ────────────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <SectionHead num={problem.num} kicker={problem.kicker} aside={problem.aside} title={problem.title} />
          <div className="grid-auto">
            {problem.cards.map((card, i) => {
              const G = problemGraphics[card.graphic as keyof typeof problemGraphics];
              return (
                <Reveal key={card.title} delay={i * 80}>
                  <SpotlightCard>
                    <div className="tag">{card.tag}</div>
                    <h3 className="card__title">{card.title}</h3>
                    <p className="card__text">{card.text}</p>
                    <div className="card__foot">
                      <G />
                      <div className="card__caption">{card.caption}</div>
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
          <Reveal as="p" className="punch">
            {problem.punch[0]}
            <br />
            <span className="accent">{problem.punch[1]}</span>.
          </Reveal>
        </div>
      </section>

      {/* ─── 02 · Lo que ya probaste ─────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <SectionHead num={tried.num} kicker={tried.kicker} aside={tried.aside} title={tried.title} />
          <div className="tried">
            {tried.rows.map((row, i) => (
              <Reveal key={row.n} delay={i * 80} className="tried__row">
                <span className="tried__n">{row.n}</span>
                <span className="tried__text">
                  {row.text}
                  <span className="tried__strike" />
                </span>
                <span className="tried__result">{row.result}</span>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="punch">
            {tried.punch[0]}
            <br />
            {tried.punch[1]} <span className="accent">·</span>
          </Reveal>
        </div>
      </section>

      {/* ─── El giro ─────────────────────────────────────────────────── */}
      <section className="turn">
        <div className="turn__glow" />
        <div className="shell turn__inner">
          <Reveal as="div" className="turn__kicker">
            {turn.kicker}
          </Reveal>
          <Reveal as="div">
            <h2 className="turn__title">
              {turn.title.split(turn.accent)[0]}
              <span className="accent">{turn.accent}</span>
              {turn.title.split(turn.accent)[1]}
            </h2>
          </Reveal>
          <Reveal as="p" className="turn__sub">
            {turn.sub}
          </Reveal>
          <Reveal as="p" className="turn__note">
            {turn.note}
          </Reveal>
        </div>
      </section>

      {/* ─── 03 · El método ──────────────────────────────────────────── */}
      <section id="metodo" className="section anchor">
        <div className="shell">
          <SectionHead
            num={method.num}
            kicker={method.kicker}
            aside={method.aside}
            title={method.title}
            intro={method.intro}
          />

          <Reveal className="chart-card">
            <div className="chart-card__head">
              <span>{method.chart.left}</span>
              <span>{method.chart.right}</span>
            </div>
            <GrowthChart />
            <div className="chart-card__legend">
              {method.chart.legend.map((l, i) => (
                <div key={l.name} className={`legend ${i === 0 ? 'is-active' : ''}`}>
                  <div className="legend__months">{l.months}</div>
                  <div className="legend__name">{l.name}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {method.phases.map((phase) => (
            <Reveal key={phase.name} className="phase">
              <div className="phase__head">
                <div className="phase__progress" style={{ width: `${phase.progress}%` }} />
                <div className="phase__tag">{phase.tag}</div>
                <div className="phase__title-row">
                  <h3 className="phase__name">{phase.name}</h3>
                  <span className="phase__motto">{phase.motto}</span>
                </div>
                <p className="phase__desc">{phase.desc}</p>
              </div>
              <div className="phase__split">
                <div className="phase__steps">
                  <h4 className="micro-title">Qué pasa durante estas semanas</h4>
                  <ul>
                    {phase.steps.map((s) => (
                      <li key={s}>
                        <span className="dot" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="phase__outcome">
                  <h4 className="micro-title">A dónde llegamos</h4>
                  <div className="phase__outcome-big">{phase.outcome}</div>
                  <p className="phase__outcome-sub">{phase.outcomeSub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── 04 · Qué entra ──────────────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <SectionHead num={includes.num} kicker={includes.kicker} aside={includes.aside} title={includes.title} />
          <Reveal className="table">
            <div className="table__head">
              {includes.head.map((h, i) => (
                <div key={h} className={i === 2 ? 'right' : ''}>
                  {h}
                </div>
              ))}
            </div>
            {includes.rows.map(([what, desc, when]) => (
              <div key={what} className="table__row">
                <div className="table__what">{what}</div>
                <div className="table__desc">{desc}</div>
                <div className="table__when">{when}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── 05 · El agente (Skills de Claude) ───────────────────────── */}
      <section id="agente" className="section anchor">
        <div className="shell">
          <SectionHead num={agent.num} kicker={agent.kicker} aside={agent.aside} title={agent.title} />

          <Reveal className="agent">
            <div className="agent__left">
              <div className="explainer">
                <div className="explainer__title">{agent.explainer.title}</div>
                <p className="explainer__body">{agent.explainer.body}</p>
              </div>
              <p className="agent__pitch">{agent.pitch}</p>
              <div className="agent__note">{agent.note}</div>
            </div>
            <div className="agent__right">
              <AgentOrbit />
            </div>
          </Reveal>

          <div className="grid-auto skills">
            {agent.skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 70}>
                <SpotlightCard className="skill">
                  <div className="skill__chip">Skill</div>
                  <h3 className="skill__name">{skill.name}</h3>
                  <p className="skill__desc">{skill.desc}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 06 · Los vídeos ─────────────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <SectionHead
            num={videos.num}
            kicker={videos.kicker}
            aside={videos.aside}
            title={videos.title}
            intro={videos.sub}
          />
          <div className="grid-auto">
            {videos.tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <SpotlightCard accent={tier.style === 'accent'}>
                  <VideoThumbs style={tier.style as 'plain' | 'accent' | 'motion'} />
                  <div className="tier-row">
                    <div className="tier-row__name">{tier.name}</div>
                    <div className="tier-row__price accent">{tier.price} €</div>
                  </div>
                  <p className="card__text">{tier.desc}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 07 · ¿Es para ti? ───────────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <SectionHead num={fit.num} kicker={fit.kicker} aside={fit.aside} title={fit.title} intro={fit.sub} />

          <div className="fit">
            <Reveal>
              <div className="card card--accent fit__col">
                <h3 className="fit__title">
                  <span className="fit__mark fit__mark--yes">✓</span>
                  {fit.yes.title}
                </h3>
                <ul className="fit__list">
                  {fit.yes.items.map((it) => (
                    <li key={it}>
                      <i className="accent">✓</i>
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="fit__note">{fit.yes.note}</div>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="card fit__col">
                <h3 className="fit__title">
                  <span className="fit__mark fit__mark--no">✕</span>
                  {fit.no.title}
                </h3>
                <ul className="fit__list fit__list--muted">
                  {fit.no.items.map((it) => (
                    <li key={it}>
                      <i>✕</i>
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="fit__note">{fit.no.note}</div>
              </div>
            </Reveal>
          </div>

          <div className="grid-auto commitment">
            {fit.commitment.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <SpotlightCard>
                  <div className="commitment__big accent">{c.big}</div>
                  <h3 className="commitment__title">{c.title}</h3>
                  <p className="card__text">{c.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="card card--accent why">
            <h3 className="why__title">{fit.why.title}</h3>
            {fit.why.body.map((p) => (
              <p key={p} className="why__body">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── 08 · Precios ────────────────────────────────────────────── */}
      <section id="precios" className="section anchor">
        <div className="shell">
          <SectionHead
            num={pricing.num}
            kicker={pricing.kicker}
            aside={pricing.aside}
            title={pricing.title}
            intro={pricing.sub}
          />
          <PricingCalculator />

          <Reveal className="pills">
            {pricing.pills.map((p, i) => (
              <span key={i} className="pill">
                {p[0]} <b>{p[1]}</b>
                {p[2] ?? ''}
              </span>
            ))}
          </Reveal>
          <Reveal as="p" className="footnote">
            {pricing.footnote}
          </Reveal>
        </div>
      </section>

      {/* ─── 09 · Quién está detrás ──────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <SectionHead num={about.num} kicker={about.kicker} aside={about.aside} title={about.title} />

          <div className="about">
            <Reveal className="about__photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gerson.webp" alt={`${about.name}, ${about.role.toLowerCase()}`} width={546} height={859} />
              <div className="about__caption">
                <div className="about__name">{about.name}</div>
                <div className="about__role">{about.role}</div>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <blockquote className="about__quote">{about.quote}</blockquote>
              <p className="about__bio">{about.bio}</p>
              <div className="about__tags">
                {about.tags.map((t) => (
                  <span key={t} className="tagpill">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="stats">
            {about.stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat__value accent">
                  <CountUp to={s.value} />
                  {s.suffix}
                </div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── 10 · Dudas ──────────────────────────────────────────────── */}
      <section id="dudas" className="section anchor">
        <div className="shell">
          <SectionHead num={faq.num} kicker={faq.kicker} aside={faq.aside} title={faq.title} />
          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* ─── CTA final ───────────────────────────────────────────────── */}
      <section className="section cta-section">
        <div className="shell">
          <Reveal className="cta">
            <div className="cta__eyebrow">{cta.eyebrow}</div>
            <h2 className="cta__title">{cta.title}</h2>
            <p className="cta__sub">{cta.sub}</p>
            <div className="cta__actions">
              <Magnetic>
                <a href={config.bookUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  {cta.primary}
                </a>
              </Magnetic>
              <a href="#metodo" className="btn btn--ghost">
                {cta.secondary}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Pie ─────────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="shell">
          <div className="footer__grid">
            <div>
              <div className="footer__logo">
                Gerson<span className="accent">_</span>
              </div>
              <p className="footer__tagline">{footer.tagline}</p>
            </div>
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h5 className="footer__col-title">{col.title}</h5>
                <ul className="footer__links">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(('external' in l && l.external) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer__bottom">
            <span>{footer.copyright}</span>
            <span className="footer__legal">
              {footer.legal.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </span>
            <span>{footer.place}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
