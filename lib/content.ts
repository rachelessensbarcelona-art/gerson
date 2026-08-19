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
  line1: 'Tu negocio tiene que estar en redes.',
  line2: 'Nadie te ha explicado cómo.',
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
  lead: 'De tanto ver lo mismo, acabé dando con una estrategia que le da la vuelta al orden: primero comprobamos si tu idea funciona de verdad, y solo entonces se pone dinero encima. Así pruebas sin arriesgar y te ahorras lo que cuesta averiguarlo por las malas.',
  /** Las tres cosas que consigue la estrategia, en una palabra cada una. */
  wins: [
    { word: 'Validar', text: 'Saber si tu idea aguanta antes de apostar por ella' },
    { word: 'Ahorrar', text: 'No quemar presupuesto en anuncios que aún no tocaban' },
    { word: 'Probar', text: 'Ver qué funciona con datos, no con corazonadas' },
  ],
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
    { label: 'La estrategia completa', href: '/estrategia' },
    { label: 'Portafolio', href: config.portfolioUrl, external: true },
    { label: 'Reservar', href: config.bookUrl, external: true },
    { label: 'Aviso legal', href: '#' },
    { label: 'Privacidad', href: '#' },
  ],
  copyright: '© 2026 Gerson',
  place: 'Hecho en España',
};

// ─── Página aparte: la estrategia completa ──────────────────────────────────
// Vive en /estrategia y se enlaza desde el pie. Aquí va el detalle que en la
// portada sobraría: las tres fases semana a semana y todo lo que entra.

export const strategy = {
  back: 'Volver',
  kicker: 'La estrategia completa',
  title: 'Seis meses,\npaso a paso.',
  lead: 'Esto es lo que pasa desde el día que empezamos hasta el mes seis. Sin humo: qué hago yo, qué haces tú y qué tienes al final de cada fase.',
  idea: {
    title: 'La idea de fondo',
    body: 'Casi todo el mundo empieza produciendo y pagando anuncios antes de saber qué le interesa a su gente. Aquí se hace al revés: primero averiguamos qué funciona sin gastar, y solo entonces se pone dinero detrás. Eso es lo que te ahorra tiempo y presupuesto.',
  },
  phases: [
    {
      tag: 'Fase 1 · Meses 1 y 2',
      name: 'Probar',
      motto: 'Escuchar antes de hablar',
      desc: 'Los dos primeros meses no van de gustarle a todo el mundo. Van de averiguar qué le importa de verdad a quien te podría comprar. Se prueba, se mide y se descarta. Sin gastar un euro en publicidad.',
      steps: [
        'Consultoría inicial: quién eres, qué vendes y a quién',
        'Definimos tu mensaje y las líneas de contenido a explorar',
        'Montamos tu ayudante y conectamos tus canales',
        'Empiezas a grabar, con los guiones ya escritos',
        'Se publica constante y se recogen datos de cada pieza',
      ],
      outcome: 'Al terminar sabemos qué contar, cómo contarlo y qué días funciona mejor.',
      outcomeSub: 'Información concreta sobre tu negocio, no consejos genéricos de internet.',
    },
    {
      tag: 'Fase 2 · Meses 3 y 4',
      name: 'Construir',
      motto: 'Ahora sí, en bonito',
      desc: 'Con los datos delante se deja de probar. Se refuerza lo que ya demostró que interesa y se sube el nivel de acabado, porque a partir de aquí sí importa cómo se ve.',
      steps: [
        'Elegimos los temas y formatos que mejor respondieron',
        'Las piezas pasan a acabado pro: tus colores, tu letra, animaciones',
        'Ordenamos tu perfil para que quien llegue entienda qué vendes',
        'El ayudante empieza a filtrar y clasificar a quien te escribe',
        'Revisión mensual con los números explicados y decisiones para el mes siguiente',
      ],
      outcome: 'Al terminar tienes un perfil que crece con contenido que ya sabemos que funciona.',
      outcomeSub: 'Y empiezan a llegar conversaciones de gente que ya sabe lo que haces antes de escribirte.',
    },
    {
      tag: 'Fase 3 · Meses 5 y 6',
      name: 'Crecer',
      motto: 'Gasolina a lo que ya arde',
      desc: 'Solo ahora se pone dinero en publicidad, y únicamente detrás de lo que ya demostró que interesa sin pagar. Por eso no se quema presupuesto probando.',
      steps: [
        'Montamos las campañas sobre las piezas que mejor rindieron',
        'Definimos el presupuesto contigo y vigilamos el coste por cliente',
        'Se ajusta cada semana: se para lo que no rinde, se amplía lo que sí',
        'El ayudante absorbe el aumento de mensajes sin que se pierda ninguno',
        'Cierre de los seis meses con un plan para los siguientes',
      ],
      outcome: 'Al terminar tu comunicación deja de ser un gasto y pasa a ser un canal que trae clientes.',
      outcomeSub: 'Y por primera vez puedes decir cuánto te cuesta conseguir uno.',
    },
  ],
  includesTitle: 'Todo lo que entra',
  includesHead: ['Qué', 'En qué consiste', 'Cuándo'],
  includes: [
    ['Consultoría inicial', 'Nos sentamos a entender tu negocio y construimos el plan a tu medida.', 'Semana 1'],
    ['Plan de comunicación', 'Tu mensaje, tus líneas de contenido y los canales que tienen sentido para ti.', 'Semana 2'],
    ['Calendario', 'Qué se publica, qué día, en qué canal y para qué. Ya cargado, no un PDF que se pierde.', 'Semana 2'],
    ['Tu ayudante montado', 'Skills de Claude configurados con tu forma de hablar y conectados a tus canales.', 'Semana 2'],
    ['Guiones', 'Te digo exactamente qué grabar y cómo empezarlo para que enganche.', 'Cada semana'],
    ['Publicación', 'Sale solo, en la fecha y hora marcadas. Tú solo apruebas.', 'Cada semana'],
    ['Lectura de números', 'Qué funcionó, qué no y qué cambiamos. En cristiano, no en jerga.', 'Cada mes'],
    ['Campañas', 'Montaje, vigilancia y ajuste de tus anuncios. El presupuesto lo pones tú.', 'Desde el mes 5'],
  ],
  ctaTitle: '¿Lo vemos con lo tuyo?',
  ctaLead: 'Media hora, gratis. Te digo qué haría con tu negocio y cuánto costaría.',
  cta: 'Reservar mi media hora',
};
