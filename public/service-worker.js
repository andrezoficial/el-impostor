// v2: se cambia el nombre de caché para forzar el borrado de la caché
// vieja (v1) en los dispositivos que ya habían instalado el service worker
// anterior. Si vuelves a tener este problema en el futuro, sube este número.
const CACHE_NAME = 'el-impostor-cache-v2';
const urlsToCache = [
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
  self.skipWaiting();
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

self.addEventListener('fetch', (event) => {
  // Solo interceptamos peticiones GET
  if (event.request.method !== 'GET') return;

  // Network-first para el documento HTML (navegación) y para index.html /
  // '/'. Este es el "app shell": debe pedirse siempre a la red primero para
  // que cada deploy nuevo se refleje de inmediato. Si no hay red, se usa la
  // copia en caché como respaldo offline.
  const isNavigation =
    event.request.mode === 'navigate' ||
    event.request.destination === 'document' ||
    event.request.url.endsWith('/') ||
    event.request.url.endsWith('/index.html');

  if (isNavigation) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          return response;
        })
        .catch(() =>
          caches.match(event.request).then((cached) => cached || caches.match('/index.html'))
        )
    );
    return;
  }

  // Cache-first para el resto de assets estáticos (JS/CSS con hash en el
  // nombre, imágenes, etc.). Estos SÍ son seguros de cachear de forma
  // agresiva porque su nombre de archivo cambia cuando cambia su contenido.
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => caches.match('/index.html'));
    })
  );
});
