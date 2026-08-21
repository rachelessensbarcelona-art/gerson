/**
 * TODOS los textos de la web viven aquí.
 *
 * La web son 7 pantallas. Cada bloque de abajo es una pantalla, en orden.
 *
 * Tono: el equipo hablando de tú, en plural ("nosotros"), con seguridad.
 *
 * Quien lee NO es del sector: tiene una peluquería, un gimnasio, una clínica.
 * Así que nada de jerga — ni "validar", ni "escalar", ni "volumen", ni
 * "método", ni "producción". Se dice con las palabras de siempre: subir
 * vídeos, pagar anuncios, saber qué funciona, conseguir clientes.
 *
 * Frases cortas. Si una línea no aporta un dato nuevo, sobra.
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
  'Los seis meses',
  'Los vídeos',
  'El equipo',
  'Empezar',
];

// ─── 1 · Portada ────────────────────────────────────────────────────────────

export const s1 = {
  line1: 'Ya subes vídeos a tus redes.',
  line2: 'Pero no te llegan clientes.',
  lead: 'Casi siempre pasa lo mismo: se sube lo que uno cree que gusta, sin saber si a tu gente le interesa.',
  /** Qué hacemos, en tres golpes. Verbos concretos, nada de jerga. */
  gets: ['Te decimos qué grabar cada semana', 'Editamos y publicamos por ti', 'Y miramos qué funciona de verdad'],
  after: 'Tú solo grabas.',
  cta: 'Reservar consultoría',
  ctaGhost: 'Ver la estrategia',
  scroll: 'Sigue',
};

// ─── 2 · El problema ────────────────────────────────────────────────────────

export const s2 = {
  tag: 'El problema',
  title: 'Hacerlo bien no es\nsolo grabar vídeos.',
  lead: 'Detrás hay seis trabajos distintos. Y hay que saber de los seis:',
  crafts: ['Marketing', 'Anuncios', 'Ventas', 'Editar vídeos', 'Inteligencia artificial', 'Medir resultados'],
  punch: 'Nadie puede con los seis a la vez. Para eso estamos.',
};

// ─── 3 · La estrategia ──────────────────────────────────────────────────────

export const s3 = {
  tag: 'La estrategia',
  line1: 'Primero probamos.',
  line2: 'Después gastamos.',
  lead: 'Los dos primeros meses no pagamos ni un euro en anuncios. Subimos vídeos, miramos cuáles funcionan y nos quedamos con esos.',
  /** Las tres ventajas, en lenguaje normal. */
  wins: [
    { word: 'Sabes qué funciona', text: 'Antes de gastar nada en anuncios' },
    { word: 'No tiras dinero', text: 'Nada de pagar por probar a ciegas' },
    { word: 'Creces sobre seguro', text: 'El dinero va a lo que ya te funciona' },
  ],
  price: {
    label: 'La estrategia completa de 6 meses',
    note: 'Pago único',
    detail: 'El plan, los guiones, el calendario y una revisión cada mes.',
    link: 'Ver qué incluye',
  },
};

// ─── 4 · Los seis meses ─────────────────────────────────────────────────────

export const s4 = {
  tag: 'Los seis meses',
  title: 'Tres pasos, uno detrás de otro.',
  steps: [
    { n: '1', months: 'Mes 1 y 2', name: 'Probar', text: 'Subimos muchos vídeos y vemos cuáles gustan. Sin pagar anuncios.' },
    { n: '2', months: 'Mes 3 y 4', name: 'Mejorar', text: 'Repetimos lo que funcionó, y mejor hecho.' },
    { n: '3', months: 'Mes 5 y 6', name: 'Crecer', text: 'Ahora sí pagamos anuncios, solo de lo que ya funciona.' },
  ],
  punch: 'Al final sabes cuánto te cuesta conseguir un cliente.',
};

// ─── 5 · Los vídeos ─────────────────────────────────────────────────────────

export const s5 = {
  tag: 'Los vídeos',
  title: 'Cuantos más vídeos,\nantes das con el bueno.',
  lead: 'Para saber qué funciona hay que probar mucho. Por eso, cuantos más vídeos al mes, más barato sale cada uno.',
  plans: [
    { name: 'Empezar', videos: 8, price: 83, per: 'semana', freq: '2 vídeos por semana' },
    { name: 'Ritmo', videos: 16, price: 157, per: 'semana', freq: '4 vídeos por semana', featured: true },
    { name: 'Máximo', videos: 24, price: 217, per: 'semana', freq: '6 vídeos por semana' },
  ],
  includes: 'Te decimos qué grabar, lo editamos y lo publicamos.',
  note: 'Se paga mes a mes. Lo dejas cuando quieras.',
};

// ─── 6 · El equipo ──────────────────────────────────────────────────────────

export const s6 = {
  tag: 'El equipo',
  title: 'Detrás hay un equipo.',
  role: 'Gerson · Consultor de comunicación digital',
  story: [
    'Consultoría propia y editores en plantilla.',
    'Llevamos años viendo negocios gastar en anuncios sin saber si servían de algo. Por eso empezamos al revés.',
  ],
  extra: {
    title: 'Y un ayudante que contesta por ti',
    text: 'Responde precios y horarios a cualquier hora, con tus palabras. Cuando alguien va en serio, te avisa. Lo montamos a tu medida con la IA de Claude.',
  },
};

// ─── 7 · Empezar ────────────────────────────────────────────────────────────

export const s7 = {
  tag: 'Empezar',
  title: 'Hablemos media hora.',
  lead: 'Nos cuentas qué vendes y te decimos qué haríamos con tu negocio.',
  cta: 'Reservar consultoría',
  small: 'Gratis y sin compromiso.',
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
  lead: 'Qué pasa desde el primer día hasta el mes seis: qué hacemos nosotros, qué haces tú y qué tienes al terminar cada parte.',
  price: {
    label: 'Estrategia completa de 6 meses',
    note: 'Pago único',
  },
  idea: {
    title: 'La idea',
    body: 'Lo normal es empezar pagando anuncios sin saber todavía qué le interesa a tu gente. Aquí se hace al revés: primero miramos qué funciona sin gastar nada, y solo después se pone dinero. Eso es lo que te ahorra tiempo y dinero.',
  },
  phases: [
    {
      tag: 'Fase 1 · Meses 1 y 2',
      name: 'Probar',
      motto: 'Escuchar antes de hablar',
      desc: 'Los dos primeros meses no van de gustar a todo el mundo, sino de averiguar qué le interesa a quien te puede comprar. Se prueba, se mira qué tal fue y se descarta lo que no. Sin pagar anuncios.',
      steps: [
        'Una primera charla: qué vendes, a quién y qué te hace distinto',
        'Decidimos qué vas a contar y de qué temas',
        'Dejamos listo tu ayudante y lo conectamos a tus redes',
        'Empiezas a grabar con los guiones ya escritos',
        'Se publica sin fallar y se mira cómo fue cada vídeo',
      ],
      outcome: 'Al terminar sabemos qué contar, cómo contarlo y qué días funciona mejor.',
      outcomeSub: 'Números de tu negocio, no consejos de internet.',
    },
    {
      tag: 'Fase 2 · Meses 3 y 4',
      name: 'Construir',
      motto: 'Repetir lo que funcionó',
      desc: 'Ya sabemos qué gusta, así que dejamos de probar. Repetimos lo que funcionó y lo hacemos mejor, porque a partir de aquí sí importa cómo se ve.',
      steps: [
        'Elegimos los temas y formatos que mejor fueron',
        'Los vídeos pasan a acabado bueno: tus colores y tu letra',
        'Ordenamos el perfil para que quien llegue entienda qué vendes',
        'El ayudante empieza a separar quién va en serio',
        'Cada mes te explicamos los números y qué cambiamos',
      ],
      outcome: 'Al terminar tienes un perfil que crece con vídeos que ya sabemos que funcionan.',
      outcomeSub: 'Y te escribe gente que ya sabe a qué te dedicas.',
    },
    {
      tag: 'Fase 3 · Meses 5 y 6',
      name: 'Crecer',
      motto: 'Pagar sobre seguro',
      desc: 'Ahora sí entran los anuncios, y solo detrás de los vídeos que ya funcionaron sin pagar. Por eso no se tira el dinero probando.',
      steps: [
        'Montamos los anuncios con los vídeos que mejor fueron',
        'Decidimos contigo cuánto poner y vigilamos lo que cuesta cada cliente',
        'Cada semana: se para lo que no va y se amplía lo que sí',
        'El ayudante absorbe el aumento de mensajes',
        'Cerramos los seis meses con el plan de los siguientes',
      ],
      outcome: 'Al terminar, tus redes dejan de ser un gasto y empiezan a traer clientes.',
      outcomeSub: 'Y por fin sabes cuánto te cuesta conseguir uno.',
    },
  ],
  includesTitle: 'Todo lo que incluye',
  includesHead: ['Qué', 'En qué consiste', 'Cuándo'],
  includes: [
    ['Primera charla', 'Nos sentamos contigo para entender el negocio y montar el plan.', 'Semana 1'],
    ['El plan', 'Qué vas a contar, de qué temas y en qué redes.', 'Semana 2'],
    ['El calendario', 'Qué se sube, qué día y en qué red.', 'Semana 2'],
    ['Tu ayudante', 'Contesta con tus palabras, conectado a tus redes.', 'Semana 2'],
    ['Los guiones', 'Qué grabar y cómo empezarlo para que enganche.', 'Cada semana'],
    ['Los números', 'Qué funcionó, qué no y qué cambiamos. Explicado en claro.', 'Cada mes'],
    ['Los anuncios', 'Los montamos, decidimos el gasto y vigilamos el coste por cliente.', 'Desde el mes 5'],
  ],
  videosNote: 'Los vídeos se contratan aparte, desde 83 € al mes.',
  ctaTitle: '¿Lo vemos con tu caso?',
  ctaLead: 'Media hora, gratis. Te decimos qué haríamos y cuánto costaría.',
  cta: 'Reservar consultoría',
};
