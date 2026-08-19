/** @type {import('next').NextConfig} */

// GitHub Pages sirve el sitio bajo /<nombre-repo>/, mientras que Vercel o un
// dominio propio lo sirven en la raíz. El workflow de deploy define
// NEXT_PUBLIC_BASE_PATH; en local y en la raíz queda vacío.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  // Export estático: genera HTML plano en out/, sin servidor.
  output: 'export',
  basePath,
  // Rutas como /gerson/ en lugar de /gerson — GitHub Pages sirve
  // carpeta/index.html, así que los enlaces necesitan la barra final.
  trailingSlash: true,
  images: {
    // El optimizador de imágenes necesita servidor; en export va sin él.
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
