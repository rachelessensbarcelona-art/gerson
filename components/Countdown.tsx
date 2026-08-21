'use client';

import { useEffect, useState } from 'react';
import { config, countdown } from '@/lib/content';

/**
 * Cuánto queda de oferta, en milisegundos.
 *
 * Devuelve null hasta que el componente monta en el navegador. Es a
 * propósito: el reloj del servidor y el del visitante no marcan lo mismo, y
 * si pintáramos la cuenta ya en el HTML, React se quejaría al hidratar de
 * que lo que había no coincide con lo que calcula.
 *
 * null = "todavía no lo sé"; 0 = "se acabó".
 */
export function useOfferLeft(): number | null {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const end = new Date(config.offerEndsAt).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return left;
}

/** ¿Sigue viva la oferta? Antes de montar decimos que sí, para que el
 *  precio tachado salga ya en el primer pintado y no aparezca de golpe. */
export function useOfferOn(): boolean {
  const left = useOfferLeft();
  return left === null || left > 0;
}

function split(ms: number) {
  const total = Math.floor(ms / 1000);
  return [
    { n: Math.floor(total / 86400), u: countdown.units.d },
    { n: Math.floor(total / 3600) % 24, u: countdown.units.h },
    { n: Math.floor(total / 60) % 60, u: countdown.units.m },
    { n: total % 60, u: countdown.units.s },
  ];
}

/**
 * El cronómetro de la oferta.
 *
 * Mientras no sabemos la hora del visitante pinta guiones en vez de números:
 * así el bloque ya ocupa su sitio y la pantalla no pega un salto cuando
 * arranca la cuenta. Si la oferta ya expiró, no pinta nada.
 */
export default function Countdown() {
  const left = useOfferLeft();
  if (left === 0) return null;

  const blocks = split(left ?? 0);

  return (
    <div className="cdown">
      <span className="cdown__title">{countdown.title}</span>
      <div className="cdown__blocks">
        {blocks.map((b) => (
          <div key={b.u[1]} className="cdown__b">
            <span className="cdown__n">{left === null ? '––' : String(b.n).padStart(2, '0')}</span>
            <span className="cdown__u">{b.n === 1 ? b.u[0] : b.u[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
