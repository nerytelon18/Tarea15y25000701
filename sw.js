// Nombre del almacenamiento en caché de la aplicación
const CACHE_NAME = 'raoults-mist-cache-v1';

// Recursos estáticos que se guardarán localmente para permitir el acceso offline
const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://static.wixstatic.com/media/ce35a6_6238472a58874e879580b1984889e892~mv2.jpeg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_avif,quality_auto/ce35a6_6238472a58874e879580b1984889e892~mv2.jpeg',
  'https://static.wixstatic.com/media/ce35a6_3f95ccf56b7f4ab881be8f4bd9dbce0b~mv2.jpeg/v1/fill/w_266,h_355,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-05-11%20at%208_59_33%20PM.jpeg',
  'https://www.galileo.edu/facti/files/2026/05/Fotos-para-articulos-Galileo-18.png',
  'https://www.galileo.edu/facti/wp-content/themes/galileo-theme/img/logo-header.png'
];

// Evento de instalación: se descarga y almacena en caché la interfaz esencial de la app
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Guardando recursos estáticos en caché');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Evento de activación: limpia cualquier versión de caché anterior
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Eliminando caché antigua obsoleta', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Evento fetch: intercepta peticiones y aplica estrategia Cache-First con fallback de red
self.addEventListener('fetch', event => {
  // Evitar procesar peticiones que no sean del protocolo http o https (ej. extensiones del navegador)
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Si el recurso ya existe en el almacenamiento caché, lo servimos de inmediato
        if (cachedResponse) {
          return cachedResponse;
        }

        // Si no existe, lo solicitamos a la red
        return fetch(event.request).then(networkResponse => {
          // Validamos que sea una respuesta válida antes de guardarla dinámicamente
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Clonamos la respuesta y la almacenamos en caché para futuras visitas offline
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        }).catch(() => {
          // Fallback offline en caso de que falle la red y no tengamos el recurso en caché
          if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('index.html');
          }
        });
      })
  );
});