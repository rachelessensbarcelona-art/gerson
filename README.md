# Gerson — web

Web de una sola página para la consultoría de comunicación digital de Gerson.
Hecha en **Next.js** (App Router) y exportada como sitio estático, así que se
puede alojar en GitHub Pages gratis.

---

## Cómo cambiar los textos

**Todo el copy está en un único archivo: [`lib/content.ts`](lib/content.ts).**

Ahí dentro está cada titular, cada párrafo, cada pregunta frecuente y cada
precio, ordenados igual que aparecen en la web. Para cambiar una frase se edita
ahí y ya está — no hace falta tocar ningún componente.

Arriba del todo de ese archivo está lo que más se toca:

```ts
export const config = {
  bookUrl: 'https://cal.com/gerson',  // ← tu enlace de reservas
  basePrice: 40,                       // ← la cuota fija mensual
  showLaunch: true,                    // ← false oculta la franja de lanzamiento
};
```

---

## Trabajar en local

Hace falta [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install     # solo la primera vez
npm run dev     # abre http://localhost:3000
```

Los cambios se ven al instante al guardar.

Para generar la versión final:

```bash
npm run build   # deja el sitio listo en la carpeta out/
```

---

## Publicar

Está conectado a **Vercel**: cada vez que se sube algo a `main`, Vercel
recompila y publica la web sola. No hay que hacer nada más.

---

## Cómo está organizado

```
app/
  layout.tsx        tipografía, metadatos y grano de fondo
  page.tsx          la página: monta las secciones en orden
  globals.css       sistema de diseño (colores, tipos, botones, tarjetas)
  sections.css      estilos de cada sección
components/
  Interactions.tsx  revelados, estela del cursor, foco de luz, botón magnético,
                    barra de progreso y contadores
  Particles.tsx     campo de partículas de la portada
  Graphics.tsx      gráficos SVG (curva de 6 meses, miniaturas, órbita…)
  PricingCalculator.tsx   calculadora de precios
  Faq.tsx           acordeón de dudas
  FloatingCta.tsx   botón de reserva flotante
lib/
  content.ts        ← TODOS LOS TEXTOS
public/
  gerson.webp       la foto
design/             bundle original de Claude Design (solo referencia)
```

### Detalles de diseño

La web lleva partículas conectadas en la portada, un foco de luz que sigue al
ratón dentro de las tarjetas, botones que se acercan al cursor, estela del
ratón, grano sobre todo el sitio, contadores que suben al aparecer, la curva de
los seis meses que se dibuja sola y tachados que se pintan al hacer scroll.

Todo eso se desactiva solo si el visitante tiene activado *reducir movimiento*
en su sistema, y las partículas y la estela ni se cargan en móvil.

---

## Pendiente

- [ ] Poner el enlace real de reservas en `lib/content.ts` (`config.bookUrl`)
- [ ] Escribir las páginas de **Aviso legal** y **Privacidad** (en el pie los
      enlaces están vacíos)
- [ ] Quitar la franja de lanzamiento cuando ya no aplique (`config.showLaunch`)
