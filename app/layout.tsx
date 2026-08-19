import type { Metadata, Viewport } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import './sections.css';

// next/font descarga la fuente en build y la sirve desde el propio dominio:
// sin petición a Google en producción y sin salto de texto al cargar.
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gerson · Estrategia de comunicación digital',
  description:
    'Te monto la estrategia de seis meses, te digo qué grabar cada semana y te dejo un agente de IA con Skills de Claude que contesta como tú. Suscripción mensual, sin permanencia.',
  openGraph: {
    title: 'Gerson · Estrategia de comunicación digital',
    description:
      'Estrategia de seis meses, guiones cada semana y tu propio agente con Skills de Claude. Sin permanencia.',
    locale: 'es_ES',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={figtree.variable}>
      <body>
        {/* Grano sobre todo el sitio */}
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
