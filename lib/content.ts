/**
 * TODOS los textos de la web viven aquí.
 *
 * La web son 9 pantallas. Cada bloque de abajo es una pantalla, en orden.
 * Si quieres cambiar una frase, se cambia aquí y ya está.
 *
 * Regla al escribir: frases cortas, palabras normales. Si una frase no se
 * entiende leyéndola en voz alta a la primera, sobra algo.
 */

// ─── Ajustes rápidos ────────────────────────────────────────────────────────

export const config = {
  /** Enlace de reserva. Cámbialo por tu Calendly / Cal.com real. */
  bookUrl: 'https://cal.com/gerson',
  /** Enlace al portafolio. Ponlo cuando lo tengas publicado. */
  portfolioUrl: '#',
  /** Cuota fija mensual (el plan). */
  basePrice: 40,
};

/** Nombre corto de cada pantalla — sale en los puntitos de la derecha. */
export const slideNames = [
  'Inicio',
  'El lío',
  'Quién soy',
  'La idea',
  'El plan',
  'Tu robot',
  'Tú qué haces',
  'Precio',
  'Empezar',
];

// ─── 1 · Portada ────────────────────────────────────────────────────────────

export const s1 = {
  badge: 'Desde 80 € al mes',
  line1: 'Publicas.',
  line2: 'Y no pasa nada.',
  sub: 'No es culpa tuya. Es que nadie te dio un plan.',
  cta: 'Hablamos gratis',
  scroll: 'Baja',
};

// ─── 2 · El lío (los seis oficios) ──────────────────────────────────────────

export const s2 = {
  tag: 'El lío',
  title: 'Para que funcione\nhay que saber de seis cosas.',
  crafts: ['Marketing', 'Publicidad', 'Inteligencia artificial', 'Ventas', 'Campañas', 'Editar vídeo'],
  punch: 'Nadie tiene tiempo para eso.',
};

// ─── 3 · Quién soy ──────────────────────────────────────────────────────────

export const s3 = {
  tag: 'Quién soy',
  hello: 'Hola, soy Gerson.',
  lines: [
    'Llevo años trabajando con equipos digitales.',
    'Monté mi consultoría y mi equipo de edición.',
  ],
  punch: 'Y siempre veía el mismo fallo:',
  punchAccent: 'gastar antes de saber.',
  role: 'Consultor de comunicación digital',
};

// ─── 4 · La idea ────────────────────────────────────────────────────────────

export const s4 = {
  tag: 'La idea',
  line1: 'Primero probamos.',
  line2: 'Después gastamos.',
  sub: 'Casi todo el mundo lo hace al revés. Por eso quema el dinero.',
  // Las dos columnas del "antes / después"
  wrong: { label: 'Como se hace normalmente', items: ['Pagas anuncios', 'A ver si suena la flauta', 'Se va el dinero'] },
  right: { label: 'Como lo hacemos', items: ['Probamos sin pagar', 'Vemos qué funciona', 'Ahí ponemos el dinero'] },
};

// ─── 5 · El plan ────────────────────────────────────────────────────────────

export const s5 = {
  tag: 'El plan',
  title: 'Seis meses. Tres pasos.',
  steps: [
    {
      n: '1',
      months: 'Mes 1 y 2',
      name: 'Probar',
      text: 'Vemos qué le gusta a tu gente. Sin pagar un euro en anuncios.',
    },
    {
      n: '2',
      months: 'Mes 3 y 4',
      name: 'Construir',
      text: 'Repetimos lo que funcionó. Y ahora sí, en bonito.',
    },
    {
      n: '3',
      months: 'Mes 5 y 6',
      name: 'Crecer',
      text: 'Ponemos dinero solo detrás de lo que ya funciona.',
    },
  ],
  punch: 'Yo pongo el plan, los guiones y los vídeos. Tú pones la cara.',
};

// ─── 6 · Tu robot ───────────────────────────────────────────────────────────

export const s6 = {
  tag: 'Tu robot',
  title: 'Y te dejo un robot\nque habla como tú.',
  bullets: [
    'Contesta precios y horarios.',
    'A las tres de la mañana.',
    'Con tus palabras, no con las de un manual.',
    'Si la cosa se pone seria, te avisa.',
  ],
  note: 'Está hecho con Skills de Claude, la IA de Anthropic. Se lo enseño yo, uno a uno, con tu forma de trabajar.',
  core: 'Claude',
};

// ─── 7 · Tú qué haces ───────────────────────────────────────────────────────

export const s7 = {
  tag: 'Tú qué haces',
  title: 'Tú solo haces tres cosas.',
  items: [
    { big: '1 hora', when: 'una vez', text: 'Me cuentas tu negocio.' },
    { big: '1 tarde', when: 'al mes', text: 'Grabas con el móvil. Con el guion ya escrito.' },
    { big: '5 min', when: 'a la semana', text: 'Miras lo que hay hecho y dices que sí.' },
  ],
  punch: 'El resto lo llevo yo.',
};

// ─── 8 · Precio ─────────────────────────────────────────────────────────────

export const s8 = {
  tag: 'Precio',
  title: 'Se entiende en una línea.',
  base: 'el plan',
  videosLabel: 'los vídeos',
  totalLabel: 'al mes',
  qtyLabel: '¿Cuántos vídeos al mes?',
  qtyOptions: [4, 8, 12, 16, 20, 24],
  unitLabel: '¿Cómo de currados?',
  unitOptions: [
    { label: 'Normal', price: 10 },
    { label: 'Pro', price: 26 },
    { label: 'Animado', price: 60 },
  ],
  includedTitle: 'El plan siempre incluye',
  included: ['La estrategia de 6 meses', 'Los guiones', 'Tu robot', 'Publicar solo', 'Tus números explicados'],
  free: 'Sin permanencia. Te vas cuando quieras.',
  cta: 'Hablamos gratis',
};

// ─── 9 · Empezar ────────────────────────────────────────────────────────────

export const s9 = {
  tag: 'Empezar',
  title: 'La primera charla\nes gratis.',
  sub: 'Media hora. Te digo qué haría con lo tuyo y cuánto costaría. Ya está.',
  cta: 'Reservar mi media hora',
  small: 'No se cobra nada hasta después de hablar.',
};

// ─── Pie ────────────────────────────────────────────────────────────────────

export const footer = {
  links: [
    { label: 'Portafolio', href: config.portfolioUrl, external: true },
    { label: 'Reservar', href: config.bookUrl, external: true },
    { label: 'Aviso legal', href: '#' },
    { label: 'Privacidad', href: '#' },
  ],
  copyright: '© 2026 Gerson',
  place: 'Hecho en España',
};
