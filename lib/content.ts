/**
 * TODOS los textos de la web viven aquí.
 *
 * La web son 7 pantallas. Cada bloque de abajo es una pantalla, en orden.
 *
 * Tono: el equipo hablando de tú, en plural ("nosotros"), con seguridad y
 * sin florituras. Profesional, no coloquial. Frases cortas. Cero relleno:
 * si una línea no aporta información nueva, sobra.
 */

// ─── Ajustes rápidos ────────────────────────────────────────────────────────

export const config = {
  /** Enlace de reserva. Cámbialo por tu Calendly / Cal.com real. */
  bookUrl: 'https://cal.com/gerson',
  /** Enlace al portafolio. Ponlo cuando lo tengas publicado. */
  portfolioUrl: '#',
  /** Precio de la estrategia completa de 6 meses. Pago único. */
  strategyPrice: 199,
};

/** Nombre de cada pantalla — sale al pasar el ratón por los puntitos. */
export const slideNames = [
  'Inicio',
  'El problema',
  'La estrategia',
  'Los 6 meses',
  'Los vídeos',
  'El equipo',
  'Empezar',
];

// ─── 1 · Portada ────────────────────────────────────────────────────────────

export const s1 = {
  line1: 'Tu negocio ya está en redes.',
  line2: 'Los resultados, no.',
  lead: 'Lo digital cambia cada pocos meses. Lo que funcionaba el año pasado hoy ya no mueve a nadie.',
  /** Qué hacemos, en tres golpes. */
  gets: ['Diseñamos tu estrategia de seis meses', 'Te decimos exactamente qué grabar', 'Producimos y publicamos los vídeos'],
  after: 'Tú pones la cara.',
  cta: 'Reservar consultoría',
  ctaGhost: 'Ver la estrategia',
  scroll: 'Sigue',
};

// ─── 2 · El problema ────────────────────────────────────────────────────────

export const s2 = {
  tag: 'El problema',
  title: 'No es falta de constancia.\nEs falta de método.',
  lead: 'Para que las redes traigan clientes hay que dominar seis disciplinas a la vez:',
  crafts: ['Marketing', 'Publicidad', 'Inteligencia artificial', 'Ventas', 'Campañas', 'Edición de vídeo'],
  punch: 'Nadie puede con las seis. Para eso está el equipo.',
};

// ─── 3 · La estrategia ──────────────────────────────────────────────────────

export const s3 = {
  tag: 'La estrategia',
  line1: 'Primero probamos.',
  line2: 'Después invertimos.',
  lead: 'Dos meses midiendo qué funciona en tu caso concreto, sin gastar un euro en publicidad. El dinero entra cuando ya hay datos que lo justifiquen.',
  wins: [
    { word: 'Validar', text: 'Comprobar qué mueve a tu público antes de apostar' },
    { word: 'Ahorrar', text: 'Cero presupuesto quemado en campañas prematuras' },
    { word: 'Escalar', text: 'Invertir solo en lo que ya ha demostrado que funciona' },
  ],
  /** La tarjeta de precio de la estrategia. */
  price: {
    label: 'Estrategia completa de 6 meses',
    note: 'Pago único',
    detail: 'Plan, guiones, calendario y revisiones mensuales.',
    link: 'Ver todo lo que incluye',
  },
};

// ─── 4 · Los seis meses ─────────────────────────────────────────────────────

export const s4 = {
  tag: 'El recorrido',
  title: 'Seis meses. Tres fases.',
  steps: [
    { n: '1', months: 'Mes 1–2', name: 'Probar', text: 'Publicamos, medimos y descartamos. Sin publicidad.' },
    { n: '2', months: 'Mes 3–4', name: 'Construir', text: 'Reforzamos lo que funcionó y subimos el acabado.' },
    { n: '3', months: 'Mes 5–6', name: 'Escalar', text: 'Campañas solo detrás de lo que ya rinde.' },
  ],
  punch: 'Al terminar sabes cuánto te cuesta conseguir un cliente.',
};

// ─── 5 · Los vídeos ─────────────────────────────────────────────────────────

export const s5 = {
  tag: 'La producción',
  title: 'La estrategia pide volumen.',
  lead: 'Probar en serio significa publicar mucho. Por eso los planes van por cantidad: cuantos más vídeos, menos cuesta cada uno.',
  /** Los tres planes. El precio por vídeo se calcula solo. */
  plans: [
    { name: 'Probar', videos: 8, price: 83, per: 'semana', freq: '2 vídeos por semana' },
    { name: 'Ritmo', videos: 16, price: 157, per: 'semana', freq: '4 vídeos por semana', featured: true },
    { name: 'Máximo', videos: 24, price: 217, per: 'semana', freq: '6 vídeos por semana' },
  ],
  includes: 'Guion, grabación guiada, edición y publicación incluidos.',
  note: 'Suscripción mensual. Sin permanencia.',
};

// ─── 6 · El equipo ──────────────────────────────────────────────────────────

export const s6 = {
  tag: 'El equipo',
  title: 'Detrás hay un equipo.',
  role: 'Gerson · Consultor de comunicación digital',
  story: [
    'Consultoría propia y equipo de edición en plantilla.',
    'Años viendo negocios quemar presupuesto en anuncios antes de saber qué quería oír su público. Por eso invertimos el orden.',
  ],
  /** El ayudante, resumido: era una pantalla entera y ahora es un apunte. */
  extra: {
    title: 'Y un ayudante que responde por ti',
    text: 'Contesta precios y horarios a cualquier hora, con tus palabras, y te avisa cuando la conversación se pone seria. Montado a medida con Skills de Claude.',
  },
};

// ─── 7 · Empezar ────────────────────────────────────────────────────────────

export const s7 = {
  tag: 'Empezar',
  title: 'Empecemos por una llamada.',
  lead: 'Treinta minutos. Analizamos tu caso, te decimos qué haríamos y cuánto costaría.',
  cta: 'Reservar consultoría',
  small: 'Sin coste y sin compromiso.',
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

// ─── Página aparte: /estrategia ─────────────────────────────────────────────

export const strategy = {
  back: 'Volver',
  kicker: 'La estrategia completa',
  title: 'Seis meses,\npaso a paso.',
  lead: 'Qué ocurre desde el primer día hasta el mes seis: qué hacemos nosotros, qué haces tú y qué tienes al terminar cada fase.',
  price: {
    label: 'Estrategia completa de 6 meses',
    note: 'Pago único',
  },
  idea: {
    title: 'El principio',
    body: 'Lo habitual es producir y pagar anuncios antes de saber qué le interesa a tu público. Aquí el orden se invierte: primero medimos qué funciona sin gastar, y solo entonces se invierte. Eso es lo que ahorra tiempo y presupuesto.',
  },
  phases: [
    {
      tag: 'Fase 1 · Meses 1 y 2',
      name: 'Probar',
      motto: 'Escuchar antes de hablar',
      desc: 'Los dos primeros meses no van de gustar a todo el mundo, sino de averiguar qué le importa a quien te puede comprar. Se prueba, se mide y se descarta. Sin publicidad.',
      steps: [
        'Consultoría inicial: qué vendes, a quién y con qué diferencia',
        'Definimos el mensaje y las líneas de contenido a explorar',
        'Configuramos tu ayudante y conectamos los canales',
        'Empiezas a grabar con los guiones ya escritos',
        'Publicación constante y datos de cada pieza',
      ],
      outcome: 'Al terminar sabemos qué contar, cómo contarlo y qué días funciona mejor.',
      outcomeSub: 'Datos de tu negocio, no consejos genéricos.',
    },
    {
      tag: 'Fase 2 · Meses 3 y 4',
      name: 'Construir',
      motto: 'Del dato a la marca',
      desc: 'Con los datos delante se deja de probar. Se refuerza lo que ya demostró interés y sube el nivel de acabado, porque a partir de aquí sí importa cómo se ve.',
      steps: [
        'Seleccionamos los temas y formatos que mejor respondieron',
        'Las piezas pasan a acabado profesional: tus colores, tu tipografía',
        'Ordenamos el perfil para que quien llegue entienda qué vendes',
        'El ayudante empieza a filtrar y clasificar contactos',
        'Revisión mensual con los números y las decisiones del mes siguiente',
      ],
      outcome: 'Al terminar tienes un perfil que crece con contenido validado.',
      outcomeSub: 'Y llegan conversaciones de gente que ya sabe qué haces.',
    },
    {
      tag: 'Fase 3 · Meses 5 y 6',
      name: 'Escalar',
      motto: 'Invertir sobre seguro',
      desc: 'Solo ahora entra la publicidad, y únicamente detrás de lo que ya funcionó sin pagar. Por eso no se quema presupuesto probando.',
      steps: [
        'Montamos las campañas sobre las piezas que mejor rindieron',
        'Definimos presupuesto contigo y vigilamos el coste por cliente',
        'Ajuste semanal: se para lo que no rinde, se amplía lo que sí',
        'El ayudante absorbe el aumento de mensajes',
        'Cierre de los seis meses con el plan de los siguientes',
      ],
      outcome: 'Al terminar tu comunicación deja de ser un gasto y pasa a ser un canal.',
      outcomeSub: 'Y por primera vez puedes decir cuánto cuesta conseguir un cliente.',
    },
  ],
  includesTitle: 'Todo lo que incluye',
  includesHead: ['Qué', 'En qué consiste', 'Cuándo'],
  includes: [
    ['Consultoría inicial', 'Sesión uno a uno para entender el negocio y construir el plan.', 'Semana 1'],
    ['Plan de comunicación', 'Mensaje, líneas de contenido y canales con sentido para ti.', 'Semana 2'],
    ['Calendario', 'Qué se publica, qué día, en qué canal y para qué.', 'Semana 2'],
    ['Ayudante configurado', 'Skills de Claude con tu forma de hablar, conectado a tus canales.', 'Semana 2'],
    ['Guiones', 'Qué grabar y cómo abrirlo para que enganche.', 'Cada semana'],
    ['Revisión de números', 'Qué funcionó, qué no y qué se cambia. En lenguaje claro.', 'Cada mes'],
    ['Plan de campañas', 'Estructura, presupuesto y control del coste por cliente.', 'Desde el mes 5'],
  ],
  videosNote: 'La producción de vídeo se contrata aparte, desde 83 € al mes.',
  ctaTitle: '¿Lo vemos con tu caso?',
  ctaLead: 'Treinta minutos, sin coste. Te decimos qué haríamos y cuánto costaría.',
  cta: 'Reservar consultoría',
};
