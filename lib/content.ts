/**
 * TODOS los textos de la web viven aquí.
 *
 * La web son 8 pantallas. Cada bloque de abajo es una pantalla, en orden.
 *
 * El tono: Gerson hablándole a una persona, de tú, como si estuvieran
 * tomando un café. Explica, no vende. Si una frase suena a folleto o a
 * agencia, se reescribe.
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

/** Nombre corto de cada pantalla — sale al pasar el ratón por los puntitos. */
export const slideNames = [
  'Inicio',
  'Quién soy',
  'Cómo lo hago',
  'El plan',
  'Tu ayudante',
  'Tu parte',
  'Precio',
  'Empezar',
];

// ─── 1 · Portada ────────────────────────────────────────────────────────────

export const s1 = {
  line1: 'Hoy todos sabemos que hay que estar en digital.',
  line2: 'Casi nadie lo hace bien.',
  /** Presenta el slider: por qué hacerlo bien no es tan fácil. */
  before: 'Porque hacerlo bien significa controlar de todo esto:',
  /** Van rotando en la portada, uno detrás de otro. */
  crafts: ['Marketing', 'Publicidad', 'Inteligencia artificial', 'Ventas', 'Campañas', 'Editar vídeo'],
  /** La frase clave: de esto va la web. Lo que el visitante se lleva. */
  summary: 'Yo me encargo de todo eso por ti:',
  /** Las cuatro cosas que recibe, en una línea cada una. */
  gets: [
    'La estrategia de seis meses',
    'Los guiones de lo que grabas',
    'Los vídeos ya editados',
    'Un ayudante que contesta tus mensajes',
  ],
  after: 'Tú solo tienes que ponerle la cara.',
  cta: 'Cuéntame tu caso',
  scroll: 'Sigue',
};

// ─── 2 · Quién soy ──────────────────────────────────────────────────────────

export const s2 = {
  tag: 'Quién te escribe',
  hello: 'Hola, soy Gerson.',
  story: [
    'Llevo años metido en esto, trabajando con equipos digitales. Por el camino monté mi consultoría y mi propio equipo de edición.',
    'Y he visto el mismo error mil veces: gente con un negocio que funciona quemando dinero en anuncios antes de saber qué quería oír su gente.',
    'Así que le di la vuelta al orden.',
  ],
  punch: 'Primero averiguamos qué funciona.',
  punchAccent: 'Y solo entonces gastamos.',
  role: 'Consultor de comunicación digital',
};

// ─── 3 · Cómo lo hago ───────────────────────────────────────────────────────

export const s3 = {
  tag: 'Cómo lo hago',
  line1: 'Primero probamos.',
  line2: 'Después gastamos.',
  lead: 'Suena de cajón, pero casi nadie lo hace así. Y justo ahí es donde se va el dinero de la mayoría.',
  wrong: {
    label: 'Lo que suele pasar',
    items: [
      'Pagas anuncios desde el primer día',
      'Pruebas a ver si suena la flauta',
      'Cuando ves que no funciona, el presupuesto ya voló',
    ],
  },
  right: {
    label: 'Lo que hacemos aquí',
    items: [
      'Publicamos y medimos sin pagar nada',
      'Vemos qué temas mueven a tu gente',
      'Y solo entonces ponemos dinero detrás',
    ],
  },
  punch: 'Los dos primeros meses no gastas un euro en publicidad.',
};

// ─── 4 · El plan ────────────────────────────────────────────────────────────

export const s4 = {
  tag: 'El plan',
  title: 'Seis meses. Tres pasos.',
  lead: 'Te cuento qué pasa en cada uno.',
  steps: [
    {
      n: '1',
      months: 'Mes 1 y 2',
      name: 'Probar',
      text: 'Averiguamos qué le interesa a tu gente. Tú grabas con guiones que yo te escribo, publicamos sin fallar y medimos pieza a pieza. Todavía sin poner un euro en anuncios.',
    },
    {
      n: '2',
      months: 'Mes 3 y 4',
      name: 'Construir',
      text: 'Ya sabemos qué funciona, así que lo repetimos y le subimos el nivel: tus colores, tu letra, tu forma de contarlo. Empiezas a parecer una marca y no publicaciones sueltas.',
    },
    {
      n: '3',
      months: 'Mes 5 y 6',
      name: 'Crecer',
      text: 'Ahora sí ponemos dinero, pero solo detrás de lo que ya te funcionó gratis. Por eso no se quema presupuesto probando: se invierte en llegar a más gente.',
    },
  ],
  punch: 'Yo pongo el plan, los guiones y los vídeos. Tú pones la cara.',
};

// ─── 5 · Tu ayudante ────────────────────────────────────────────────────────

export const s5 = {
  tag: 'Y algo más',
  title: 'Te dejo un ayudante\nque contesta por ti.',
  lead: 'Te escriben a las once de la noche preguntando el precio. Cuando lo ves al día siguiente, esa persona ya ha comprado en otro sitio. Eso se acaba.',
  bullets: [
    'Contesta precios, horarios y las dudas de siempre',
    'A cualquier hora, también los domingos',
    'Con tus palabras, porque se las enseño yo',
    'Y cuando la conversación se pone seria, te avisa',
  ],
  note: 'Está montado con Skills de Claude, la IA de Anthropic. No es un bot genérico con tu logo: te configuro uno con tu forma de trabajar, tus precios y hasta las cosas que nunca dirías.',
  core: 'Claude',
};

// ─── 6 · Tu parte ───────────────────────────────────────────────────────────

export const s6 = {
  tag: 'Tu parte',
  title: 'Tú solo haces tres cosas.',
  lead: 'El resto corre de mi cuenta. No tienes que aprender ninguna herramienta.',
  items: [
    { big: '1 hora', when: 'una vez', text: 'Nos sentamos y me cuentas tu negocio: qué vendes, a quién y qué te ha funcionado hasta ahora.' },
    { big: '1 tarde', when: 'al mes', text: 'Grabas con el móvil. Con el guion ya escrito, para que no te quedes mirando la cámara sin saber qué decir.' },
    { big: '5 min', when: 'a la semana', text: 'Entras, miras lo que hay preparado y le das al botón. Si algo no te convence, lo dices y se cambia.' },
  ],
  punch: 'Ni editar, ni pelearte con la app, ni pensar qué subir el lunes.',
};

// ─── 7 · Precio ─────────────────────────────────────────────────────────────

export const s7 = {
  tag: 'Lo que cuesta',
  title: 'Se entiende en una línea.',
  lead: 'Una cuota fija por el plan, más los vídeos que quieras ese mes. Ya está: sin extras ni sorpresas a final de mes.',
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
  included: ['La estrategia de 6 meses', 'Los guiones', 'Tu ayudante', 'Publicar solo', 'Tus números explicados'],
  free: 'Sin permanencia: si un mes no te encaja, lo dejas y ya. El plan es tuyo y te lo llevas.',
};

// ─── 8 · Empezar ────────────────────────────────────────────────────────────

export const s8 = {
  tag: 'Empezar',
  title: 'La primera charla\nes gratis.',
  lead: 'Media hora. Me cuentas qué vendes, te digo qué haría yo con lo tuyo y cuánto te costaría. Si veo que no encaja, te lo digo y tan amigos.',
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
