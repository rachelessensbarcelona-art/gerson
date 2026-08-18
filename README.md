# Gerson — web premium

Sitio de una sola página para la consultoría de comunicación digital de Gerson.
HTML/CSS/JS estático, sin build ni dependencias — se puede servir tal cual
(por ejemplo con GitHub Pages apuntando a `main` / raíz).

## Estructura

- `index.html` — la web completa (una sola página).
- `assets/`
  - `site.js` — lógica de la página: enlaces de reserva, estados `hover`,
    calculadora de precios, revelado al hacer scroll, acordeón de dudas y
    barra de progreso.
  - `cursor-trail.js` — estela del cursor (se desactiva sola en móvil / sin
    ratón o con "reducir movimiento" activado).
  - `gerson.webp` — foto de Gerson usada en la sección "Quién está detrás".
- `design/` — bundle original exportado desde Claude Design (transcripciones
  de chat, prototipo `.dc.html`, capturas). Se conserva como referencia del
  diseño; no hace falta para servir el sitio.

## Antes de publicar

- **Enlace de reserva**: cambia `BOOK_URL` al principio de `assets/site.js`
  (ahora mismo apunta a `https://cal.com/gerson`, un valor de ejemplo).
- **Aviso legal / Privacidad**: los enlaces del footer están vacíos (`href="#"`)
  a falta de esas páginas.
- **Franja de lanzamiento**: la sección "Los 10 primeros se llevan la
  estrategia..." está siempre visible; bórrala en `index.html` (bloque con la
  etiqueta "Lanzamiento") cuando ya no aplique.

## Desarrollo local

No requiere instalación. Para verlo:

```
python3 -m http.server 8000
```

y abrir `http://localhost:8000`.
