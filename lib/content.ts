/**
 * TODOS los textos de la web viven aquí.
 *
 * Si quieres cambiar una frase, un precio o una pregunta frecuente, se cambia
 * en este archivo y ya está — no hace falta tocar ningún componente.
 */

// ─── Ajustes rápidos ────────────────────────────────────────────────────────

export const config = {
  /** Enlace de reserva. Cámbialo por tu Calendly / Cal.com real. */
  bookUrl: 'https://cal.com/gerson',
  /** Enlace al portafolio. Ponlo cuando lo tengas publicado. */
  portfolioUrl: '#',
  /** Cuota fija mensual (la estrategia). */
  basePrice: 40,
  /** Pon a false para ocultar la franja de lanzamiento. */
  showLaunch: true,
};

// ─── Portada ────────────────────────────────────────────────────────────────

export const hero = {
  badge: 'Desde 80 € al mes',
  aside: 'Plazas limitadas',
  headline: [
    { text: 'Sabes que tienes que estar en digital.' },
    { text: 'Lo que nadie te dijo es que' },
    { text: 'eso son seis oficios.', accent: true },
  ],
  sub: 'Marketing, publicidad, inteligencia artificial, ventas, campañas y edición de vídeo. O los dominas todos, o lo que publicas no acaba de servir para nada.',
  cards: [
    { kind: 'bars', title: 'El plan', sub: '6 meses, cerrados' },
    { kind: 'scripts', title: 'Los guiones', sub: 'qué grabar cada semana' },
    { kind: 'orbit', title: 'Tu agente', sub: 'Skills de Claude, a tu medida' },
  ],
  ctaPrimary: 'Reservar consultoría gratis',
  ctaSecondary: 'Ver cómo funciona',
};

export const marquee = [
  'Primero validar, después gastar',
  'Estrategia de 6 meses',
  'Guiones cada semana',
  'Tu agente con Skills de Claude',
  'Vídeos si te hacen falta',
  'Sin permanencia',
];

// ─── 01 · Los seis oficios ──────────────────────────────────────────────────

export const wall = {
  num: '01',
  kicker: 'Lo que hay detrás',
  aside: 'El problema',
  title: 'Publicar es solo la punta',
  intro:
    'Estar en redes lo tiene claro todo el mundo. El problema llega después: para que eso traiga clientes de verdad hay que saber de seis cosas a la vez, y ninguna se aprende en un fin de semana.',
  // Los seis oficios. El número lo pinta el componente.
  crafts: [
    { name: 'Marketing', desc: 'Saber a quién le hablas y qué le mueve a comprar.' },
    { name: 'Publicidad', desc: 'Dónde poner el dinero y, sobre todo, cuándo no ponerlo.' },
    { name: 'Inteligencia artificial', desc: 'Qué herramienta, para qué y cómo configurarla para tu negocio.' },
    { name: 'Ventas', desc: 'Convertir una conversación suelta en un cliente que paga.' },
    { name: 'Campañas', desc: 'Montarlas, medirlas y corregirlas cada semana sin quemar presupuesto.' },
    { name: 'Edición de vídeo', desc: 'Que lo que subes se vea y se oiga como algo serio.' },
  ],
  triedTitle: 'Y seguro que ya lo has intentado por tu cuenta',
  tried: [
    { n: '01', text: 'Te tragaste veinte reels de «cómo crecer en redes»', result: 'y cada uno decía lo contrario' },
    { n: '02', text: 'Compraste el curso', result: 'vas por el módulo 3' },
    { n: '03', text: 'Publicaste un mes entero seguido', result: 'y luego, la vida' },
  ],
  punch: ['Seis oficios.', 'Y un negocio que atender'],
};

// ─── 02 · Hola, soy Gerson ──────────────────────────────────────────────────

export const gerson = {
  num: '02',
  kicker: 'Quién te lo cuenta',
  aside: 'Gerson',
  title: 'Hola, soy Gerson',
  name: 'Gerson',
  role: 'Consultor de comunicación digital',
  // Cada párrafo es un bloque. El primero se ve más grande.
  story: [
    'Llevo años aprendiendo y trabajando con equipos digitales. Por el camino monté mi propia consultoría y un equipo de edición, y me he pasado media vida viendo el mismo error repetirse: negocios buenos gastando dinero en publicidad antes de saber qué quería oír su gente.',
    'De ahí salió esto. Entre la consultoría y yo dimos con una estrategia que primero valida tu idea de negocio y solo después gasta. Así no se te va lo primero, el tiempo, ni lo segundo, el dinero en campañas que todavía no tocaban.',
  ],
  // La frase que resume su forma de trabajar.
  quote: 'Primero se valida. Después se gasta. Casi todo el mundo lo hace al revés.',
  tags: [
    'Consultoría propia',
    'Equipo propio de edición',
    'Estrategia de contenidos',
    'Campañas de pago',
    'Agentes con Skills de Claude',
  ],
  closing: 'Lo que hago es meterme esos seis oficios en la mochila para que tú no tengas que aprendértelos.',
  stats: [
    { value: 6, suffix: '', label: 'Oficios que dejas de tener que aprender' },
    { value: 3, suffix: '', label: 'Fases hasta que traiga clientes' },
    { value: 6, suffix: '', label: 'Meses planificados desde el primer día' },
    { value: 0, suffix: '', label: 'Permanencia. Te vas cuando quieras' },
  ],
};

// ─── 03 · El método ─────────────────────────────────────────────────────────

export const method = {
  num: '03',
  kicker: 'La estrategia',
  aside: 'Seis meses',
  title: 'Primero validar.\nDespués gastar.',
  intro:
    'Casi todo el mundo empieza por el final: produce, publica y paga anuncios antes de saber qué le interesa a su gente. Aquí se hace al revés. Dos meses averiguando qué funciona, dos construyendo sobre lo que ya demostró que interesa y dos poniendo dinero solo detrás de eso.',
  chart: {
    left: 'Gente que te ve',
    right: 'Mes 1 → Mes 6',
    legend: [
      { months: 'Meses 1 y 2', name: 'Validar' },
      { months: 'Meses 3 y 4', name: 'Construir' },
      { months: 'Meses 5 y 6', name: 'Crecer' },
    ],
  },
  phases: [
    {
      tag: 'Fase 1 · Meses 1 y 2',
      name: 'Validar',
      motto: 'Escuchar antes de hablar',
      progress: 33,
      desc: 'Los dos primeros meses no van de gustarle a todo el mundo. Van de averiguar qué le importa de verdad a quien te podría comprar. Se prueba, se mide y se descarta. Y sin gastar un euro en publicidad.',
      steps: [
        'Consultoría inicial: quién eres, qué vendes y a quién',
        'Definimos tu mensaje y las líneas de contenido a explorar',
        'Montamos tu agente y conectamos tus canales',
        'Empiezas a grabar, con los guiones ya escritos',
        'Se publica constante y se recogen datos de cada pieza',
      ],
      outcome: 'Al terminar sabemos qué contar, cómo contarlo y qué días funciona mejor.',
      outcomeSub:
        'Información concreta sobre tu negocio, no consejos genéricos de internet. Y sin haber puesto un euro en anuncios.',
    },
    {
      tag: 'Fase 2 · Meses 3 y 4',
      name: 'Construir',
      motto: 'Ahora sí, en bonito',
      progress: 66,
      desc: 'Con los datos delante se deja de probar. Se refuerza lo que ya demostró que interesa y se sube el nivel de acabado, porque a partir de aquí sí importa cómo se ve. Empiezas a parecer una marca y no publicaciones sueltas.',
      steps: [
        'Elegimos los temas y formatos que mejor respondieron',
        'Las piezas pasan a acabado pro: tus colores, tu letra, animaciones',
        'Ordenamos tu perfil para que quien llegue entienda qué vendes',
        'El agente empieza a filtrar y clasificar a quien te escribe',
        'Revisión mensual con los números explicados y decisiones para el mes siguiente',
      ],
      outcome: 'Al terminar tienes un perfil que crece con contenido que ya sabemos que funciona.',
      outcomeSub: 'Y empiezan a llegar conversaciones de gente que ya sabe lo que haces antes de escribirte.',
    },
    {
      tag: 'Fase 3 · Meses 5 y 6',
      name: 'Crecer',
      motto: 'Gasolina a lo que ya arde',
      progress: 100,
      desc: 'Solo ahora se pone dinero en publicidad, y únicamente detrás de lo que ya demostró que interesa sin pagar. Por eso no se quema presupuesto probando: se invierte en llegar a más gente con algo que ya funciona.',
      steps: [
        'Montamos las campañas sobre las piezas que mejor rindieron',
        'Definimos el presupuesto contigo y vigilamos el coste por cliente',
        'Se ajusta cada semana: se para lo que no rinde, se amplía lo que sí',
        'El agente absorbe el aumento de mensajes sin que se pierda ninguno',
        'Cierre de los seis meses con un plan para los siguientes',
      ],
      outcome: 'Al terminar tu comunicación deja de ser un gasto y pasa a ser un canal que trae clientes.',
      outcomeSub: 'Y por primera vez puedes decir cuánto te cuesta conseguir uno.',
    },
  ],
};

// ─── 04 · Qué entra ─────────────────────────────────────────────────────────

export const includes = {
  num: '04',
  kicker: 'Qué recibes',
  aside: 'La estrategia',
  title: 'Todo lo que entra, sin letra pequeña',
  head: ['Qué', 'En qué consiste', 'Cuándo'],
  rows: [
    ['Consultoría inicial', 'Nos sentamos a entender tu negocio y construimos el plan a tu medida.', 'Semana 1'],
    ['Plan de comunicación', 'Tu mensaje, tus líneas de contenido y los canales que tienen sentido para ti.', 'Semana 2'],
    ['Calendario', 'Qué se publica, qué día, en qué canal y para qué. Ya cargado, no un PDF que se pierde.', 'Semana 2'],
    ['Tu agente montado', 'Skills de Claude configurados con tu forma de hablar y conectados a tus canales.', 'Semana 2'],
    ['Guiones', 'Te digo exactamente qué grabar y cómo empezarlo para que enganche.', 'Cada semana'],
    ['Publicación', 'Sale solo, en la fecha y hora marcadas. Tú solo apruebas.', 'Cada semana'],
    ['Lectura de números', 'Qué funcionó, qué no y qué cambiamos. En cristiano, no en jerga.', 'Cada mes'],
    ['Campañas', 'Montaje, vigilancia y ajuste de tus anuncios. El presupuesto lo pones tú.', 'Desde el mes 5'],
  ],
};

// ─── 05 · El agente (Skills de Claude) ──────────────────────────────────────

export const agent = {
  num: '05',
  kicker: 'Tu agente',
  aside: 'Skills de Claude',
  title: 'Un agente que habla como tú.\nPorque se lo enseñé yo.',
  explainer: {
    title: '¿Qué es un Skill?',
    body: 'Piensa en un manual de instrucciones muy concreto. Claude —la IA de Anthropic— lo lee y a partir de ahí hace esa tarea exactamente como la harías tú. No es un chatbot genérico con tu logo encima: es tu manera de trabajar, escrita para que una máquina pueda seguirla.',
  },
  pitch:
    'A cada cliente le construyo los suyos. Tus precios, tu forma de escribir, tus horarios, tus manías y las tres cosas que nunca dirías.',
  skills: [
    {
      name: 'Responder mensajes',
      desc: 'Contesta precios, horarios y las dudas de siempre. Con tus palabras, a cualquier hora. Y cuando la cosa se pone seria, te la pasa a ti.',
    },
    {
      name: 'Filtrar quién va en serio',
      desc: 'Separa al curioso del que quiere comprar y te lo deja ordenado, para que no pierdas la mañana.',
    },
    {
      name: 'Proponer guiones',
      desc: 'Sugiere qué grabar la semana que viene según lo que ya te funcionó, no según lo que se lleva.',
    },
    {
      name: 'Leer los números',
      desc: 'Te cuenta cómo ha ido la semana en cristiano: qué subió, qué bajó y qué conviene tocar.',
    },
  ],
  note: 'Se configura contigo, contándome cómo trabajas. No hay dos agentes iguales.',
};

// ─── 06 · Los vídeos ────────────────────────────────────────────────────────

export const videos = {
  num: '06',
  kicker: 'Si no quieres editar',
  aside: 'Tres acabados',
  title: 'Los vídeos, solo si te hacen falta',
  sub: 'Lo que contratas es la estrategia. Los vídeos son un extra: los montas tú o te los monto yo. Y puedes mezclar acabados según la pieza.',
  tiers: [
    { name: 'Básico', price: 10, desc: 'Cortes, subtítulos y música · para el día a día', style: 'plain' },
    { name: 'Pro', price: 26, desc: 'Tu marca, animaciones y color · para lo que importa', style: 'accent' },
    { name: 'Motion', price: 60, desc: 'Gráficos animados · para lanzamientos', style: 'motion' },
  ],
};

// ─── 07 · ¿Es para ti? ──────────────────────────────────────────────────────

export const fit = {
  num: '07',
  kicker: 'Antes de seguir',
  aside: '¿Es para ti?',
  title: 'Esto no es para todo el mundo',
  sub: 'Mejor decírtelo ahora que dentro de dos meses.',
  yes: {
    title: 'Esto es para ti si…',
    items: [
      'Tienes algo que vender, aunque acabes de empezar',
      'Estás dispuesto a salir en cámara',
      'Puedes sacar una tarde al mes para grabar',
      'Entiendes que esto se construye en meses, no en semanas',
    ],
    note: 'La primera consultoría te sirve aunque luego no contrates nada.',
  },
  no: {
    title: 'Esto no es para ti si…',
    items: [
      'Quieres hacerte viral el mes que viene',
      'No piensas salir en cámara ni de lejos',
      'Todavía no tienes claro qué vendes',
      'Solo quieres vídeos sueltos, sin plan detrás',
    ],
    note: 'Si te ves aquí, te lo diré en la llamada. No cojo a todo el mundo.',
  },
  commitment: [
    { big: '1h', title: 'Una consultoría al empezar', text: 'Una conversación tranquila para entender tu negocio. No prepares nada.' },
    { big: '1 tarde', title: 'Grabar, una vez al mes', text: 'Con el móvil y los guiones ya escritos. Se graba todo del tirón.' },
    { big: '5 min', title: 'Aprobar, cada semana', text: 'Entras, miras lo que hay preparado y le das al botón. Ya está.' },
  ],
  why: {
    title: '¿Por qué seis meses si puedo irme cuando quiera?',
    body: [
      'Porque validar lleva su tiempo. Los dos primeros meses son para averiguar qué funciona en tu caso, y esa información es justo la que hace que los cuatro siguientes no sean a ciegas. Cada pieza apoya a la siguiente y los datos de un mes deciden el siguiente.',
      'Eso no significa que te comprometas a seis meses de pago. La suscripción es mensual y sin permanencia, y el plan que construimos es tuyo: si te vas, te lo llevas.',
    ],
  },
};

// ─── 08 · Precios ───────────────────────────────────────────────────────────

export const pricing = {
  num: '08',
  kicker: 'Lo que cuesta',
  aside: 'Precios',
  title: 'Se entiende en una línea',
  sub: 'Una cuota fija —la estrategia— más los vídeos que quieras. Ya está.',
  formula: { base: 'la cuota fija', videos: 'tus vídeos', total: 'al mes' },
  launch: {
    badge: 'Lanzamiento',
    title: 'Los 10 primeros se llevan la estrategia completa de 6 meses incluida',
    body: 'Abro ahora y arranco con pocos negocios para poder currármelo. La estrategia de seis meses y las campañas ',
    struck: '70 €/mes',
    included: 'van incluidas',
    amount: '420 €',
    amountSub: 'que no pagas',
  },
  plansTitle: 'Elige por dónde empezar',
  plansSub: 'Toca uno y verás cómo se monta.',
  plans: [
    { name: 'Empezar', tagline: 'Para coger el hábito.', qty: 4, unit: 10, detail: '4 vídeos al mes · acabado básico', bullets: ['1 vídeo por semana', 'Estrategia completa incluida'] },
    { name: 'Ritmo', tagline: 'Donde esto empieza a moverse.', qty: 8, unit: 26, detail: '8 vídeos al mes · acabado pro', bullets: ['2 vídeos por semana', 'Estrategia completa incluida'], featured: 'El que recomiendo' },
    { name: 'A tope', tagline: 'Para apretar el acelerador.', qty: 16, unit: 26, detail: '16 vídeos al mes · acabado pro', bullets: ['4 vídeos por semana', 'Estrategia completa incluida'] },
  ],
  calcTitle: '¿Quieres otra combinación?',
  calcSub: 'Móntalo tú.',
  qtyLabel: '¿Cuántos vídeos al mes?',
  qtyOptions: [4, 8, 12, 16, 20, 24],
  unitLabel: '¿Cómo de trabajados?',
  unitOptions: [
    { label: 'Básico', price: 10 },
    { label: 'Pro', price: 26 },
    { label: 'Motion', price: 60 },
  ],
  alwaysTitle: 'Lo que entra siempre, elijas lo que elijas',
  always: [
    'Consultoría al empezar',
    'Tu agente con Skills a medida',
    'Guiones de lo que vas a grabar',
    'Se publica solo',
    'Tus números explicados cada mes',
  ],
  alwaysStar: { text: 'Estrategia de 6 meses y campañas', struck: '70 €', included: 'incluida' },
  summary: { label: 'Te queda en', per: 'al mes', base: 'Cuota fija (estrategia)', strategy: 'Estrategia de 6 meses', strategyValue: 'incluida' },
  cta: 'Reservar consultoría gratis',
  pills: [
    ['Pago con tarjeta por', 'Stripe'],
    ['Se cobra', 'cada mes', ', no por adelantado'],
    ['Cancelas tú mismo,', 'sin llamar a nadie'],
    ['La consultoría es', 'gratis', ' y sin compromiso'],
  ],
  footnote: 'No se cobra nada hasta después de la consultoría.',
};

// ─── 09 · Dudas ─────────────────────────────────────────────────────────────

export const faq = {
  num: '09',
  kicker: 'Dudas',
  aside: 'Preguntas',
  title: 'Lo que más me preguntan',
  items: [
    {
      q: '¿Tengo que grabar yo los vídeos?',
      a: 'Sí, tu cara es lo que vende. Pero solo grabas: te mando qué decir, lo grabas con el móvil y lo subes. A partir de ahí no tocas nada.',
    },
    {
      q: '¿Y si acabo de empezar y no tengo nada?',
      a: 'Mejor: no hay nada que deshacer. Si no tienes perfiles, se crean en las dos primeras semanas y arrancamos desde cero con el plan ya hecho.',
    },
    {
      q: '¿Qué significa eso de «validar» antes de gastar?',
      a: 'Que durante los dos primeros meses no ponemos dinero en anuncios. Publicamos, medimos y averiguamos qué temas y formatos mueven a tu gente. Solo cuando algo ya funciona sin pagar, se le pone presupuesto detrás. Así no se quema dinero probando.',
    },
    {
      q: 'Eso del agente con «Skills de Claude», ¿qué es exactamente?',
      a: 'Claude es una IA (de Anthropic). Un Skill es un manual de instrucciones muy concreto que le escribo para que haga una tarea como la harías tú: responder precios, filtrar mensajes, proponerte guiones. Te construyo los tuyos a medida durante las dos primeras semanas.',
    },
    {
      q: '¿Se nota que contesta un robot?',
      a: 'Contesta lo de siempre: precios, horarios, enlaces para reservar. Habla con tus palabras porque se las he enseñado yo. Y en cuanto la conversación se pone seria, te la pasa a ti.',
    },
    {
      q: '¿El dinero de la publicidad va incluido?',
      a: 'No. Ese dinero lo pones tú en tu cuenta y decides cuánto. Lo que va incluido es que las campañas las monte y las vigile alguien que sabe.',
    },
    {
      q: '¿Puedo contratar solo la estrategia, sin vídeos?',
      a: 'Sí. La cuota fija es la estrategia: plan, guiones, agente, publicación y lectura de números. Los vídeos son un extra que añades solo si no quieres editarlos tú.',
    },
    {
      q: '¿Puedo irme cuando quiera?',
      a: 'Sí, mes a mes y sin permanencia. El plan es tuyo y te lo llevas.',
    },
  ],
};

// ─── CTA final ──────────────────────────────────────────────────────────────

export const cta = {
  eyebrow: 'Primera consultoría gratis',
  title: 'Te cuento qué haría con lo tuyo',
  sub: 'Media hora. Qué haríamos, en qué orden y cuánto costaría. Sin compromiso y sin powerpoint.',
  primary: 'Reservar mi hora',
  secondary: 'Ver la estrategia',
};

// ─── Pie ────────────────────────────────────────────────────────────────────

export const footer = {
  tagline: 'Estrategia de comunicación y un agente que la ejecuta, para negocios sin departamento de marketing.',
  columns: [
    {
      title: 'La estrategia',
      links: [
        { label: 'Cómo funciona', href: '#metodo' },
        { label: 'Las tres fases', href: '#metodo' },
        { label: 'Qué recibes', href: '#metodo' },
      ],
    },
    {
      title: 'El servicio',
      links: [
        { label: 'Tu agente', href: '#agente' },
        { label: 'Los vídeos', href: '#precios' },
        { label: 'Precios', href: '#precios' },
      ],
    },
    {
      title: 'Gerson',
      links: [
        { label: 'Ver mi portafolio', href: config.portfolioUrl, external: true },
        { label: 'Reservar consultoría', href: config.bookUrl, external: true },
        { label: 'Dudas frecuentes', href: '#dudas' },
      ],
    },
  ],
  legal: [
    { label: 'Aviso legal', href: '#' },
    { label: 'Privacidad', href: '#' },
  ],
  copyright: '© 2026 Gerson',
  place: 'Hecho en España',
};
