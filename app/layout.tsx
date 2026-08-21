import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import './sections.css';

// next/font descarga la fuente en build y la sirve desde el propio dominio:
// sin petición a Google en producción y sin salto de texto al cargar.
//
// DM Sans es variable: pide el rango entero y así los titulares pueden ir en
// un peso ligero (que a 90 px se ve mucho más elegante) sin cargar un archivo
// por peso.
const dmSans = DM_Sans({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gerson · Estrategia de comunicación digital',
  description:
    'Tu negocio ya está en redes, pero no llegan los resultados. Nuestro equipo se encarga de la estrategia de seis meses, los guiones, los vídeos editados y un ayudante que contesta tus mensajes. Sin permanencia.',
  openGraph: {
    title: 'Gerson · Estrategia de comunicación digital',
    description:
      'Estrategia de seis meses, guiones, vídeos editados y un ayudante que contesta por ti. Sin permanencia.',
    locale: 'es_ES',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={dmSans.variable}>
      <head>
        {/* Sin JavaScript, Framer Motion deja el contenido en opacity:0.
            Esto lo fuerza visible para que la web se lea igual. */}
        <noscript>
          <style>{`.slide__inner, .slide__inner * { opacity: 1 !important; filter: none !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body>
        {/* Grano sobre todo el sitio */}
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
