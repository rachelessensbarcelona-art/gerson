'use client';

import { useState } from 'react';
import { faq } from '@/lib/content';

/** Acordeón de dudas. Solo una abierta a la vez. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq">
      {faq.items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="faq__item">
            <button
              type="button"
              className="faq__btn"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {item.q}
              <span className={`faq__icon ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                +
              </span>
            </button>
            {/* grid-template-rows 0fr→1fr anima la altura sin medir nada a mano. */}
            <div className={`faq__panel ${isOpen ? 'is-open' : ''}`}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
