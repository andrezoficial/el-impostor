const CACHE_NAME = 'el-impostor-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png',
  '/logo512-maskable.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  // No llamamos self.skipWaiting() aquí directamente: esperamos el mensaje
  // SKIP_WAITING (ver abajo), que dispara serviceWorkerRegistration.js
  // cuando detecta una versión nueva. Así evitamos mezclar código viejo
  // y nuevo en pestañas que ya están abiertas.
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// Permite que la app le pida al Service Worker nuevo que se active de
// inmediato, sin esperar a que se cierren todas las pestañas.
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // El documento principal (index.html) siempre se pide primero a la red
  // ("network-first"). Así el usuario recibe el HTML más reciente, que
  // apunta a los archivos JS/CSS de la última compilación, en vez de
  // quedarse pegado sirviendo una versión vieja desde el cache.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  // Para el resto de recursos (JS/CSS con hash, imágenes, etc.) usamos
  // "stale-while-revalidate": se responde rápido con lo que haya en cache,
  // y en paralelo se pide la versión más reciente a la red para dejarla
  // lista para la próxima vez.
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          }
          return response;
        })
        .catch(() => cachedResponse);

      return cachedResponse || networkFetch;
    })
  );
});
