'use client';

import { useEffect, useState } from 'react';
import { config } from '@/lib/content';
import { Magnetic } from './Interactions';

/**
 * Botón de reserva flotante.
 *
 * Sustituye al header: no hay barra fija arriba, pero la página es larga y
 * quien se engancha a mitad necesita poder reservar sin volver arriba.
 * Aparece al pasar la portada y se esconde al llegar al pie (donde ya hay
 * un CTA grande y estorbaría).
 *
 * ¿No lo quieres? Borra <FloatingCta /> de app/page.tsx y fuera.
 */
export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearEnd = y + window.innerHeight > document.documentElement.scrollHeight - 900;
      setVisible(y > window.innerHeight * 0.9 && !nearEnd);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`floating-cta ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
      <Magnetic strength={0.2}>
        <a
          href={config.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary btn--sm"
          tabIndex={visible ? 0 : -1}
        >
          <span className="floating-cta__dot" aria-hidden="true" />
          Reservar consultoría
        </a>
      </Magnetic>
    </div>
  );
}
