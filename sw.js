// Nombre de la caché para esta versión del Service Worker
const CACHE_NAME = 'pwa-cache-v1';

// Archivos y recursos que queremos guardar en caché en la instalación
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
  // Puedes añadir aquí tus hojas de estilo, imágenes y scripts adicionales
];

// Evento de instalación: Se ejecuta cuando el Service Worker se registra por primera vez
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Guardando recursos iniciales en caché...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => {
      // Obliga al Service Worker en espera a convertirse en el activo de inmediato
      return self.skipWaiting();
    })
  );
});

// Evento de activación: Se ejecuta tras la instalación y limpia las cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Eliminando caché antigua obsoleta:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      // Permite al Service Worker tomar el control de la página de forma inmediata
      return self.clients.claim();
    })
  );
});

// Evento de recuperación (fetch): Intercepta las solicitudes de red para servir recursos desde la caché
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Si el recurso ya existe en la caché, lo devolvemos para ahorrar red
      if (cachedResponse) {
        return cachedResponse;
      }

      // Si no está en caché, intentamos obtenerlo a través de la red
      return fetch(event.request).then((response) => {
        // Validamos que la respuesta sea correcta antes de guardarla
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clonamos la respuesta para guardarla en la caché y enviarla al navegador simultáneamente
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      }).catch(() => {
        console.log('[Service Worker] Error de red y recurso no disponible en caché local.');
      });
    })
  );
});
