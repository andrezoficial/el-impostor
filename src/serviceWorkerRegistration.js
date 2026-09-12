// Registra el service worker que vive en public/service-worker.js
// Esto habilita cacheo básico offline y es necesario para que el sitio
// pase el criterio de "instalabilidad" que usan Chrome y PWABuilder.
//
// Además, detecta automáticamente cuando hay una versión nueva publicada
// (nuevo service-worker.js en el servidor), la activa y recarga la página
// una sola vez — sin que el usuario tenga que borrar caché ni datos de
// la app manualmente.

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log('Service Worker registrado con éxito:', registration.scope);

          // Si ya hay un Service Worker nuevo esperando (por ejemplo, se
          // publicó una actualización mientras la app estaba cerrada),
          // lo activamos de inmediato.
          if (registration.waiting) {
            registration.waiting.postMessage('SKIP_WAITING');
          }

          // Cuando se detecta un Service Worker nuevo instalándose...
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (!newWorker) return;

            newWorker.addEventListener('statechange', () => {
              // ...y termina de instalarse mientras ya hay otro SW activo
              // controlando la página, le pedimos que tome el control ya
              // mismo en vez de esperar a que se cierren todas las pestañas.
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                newWorker.postMessage('SKIP_WAITING');
              }
            });
          });

          // Revisa si hay una versión nueva cada vez que la app vuelve a
          // primer plano, para no depender solo de que el usuario recargue
          // manualmente después de un rato.
          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
              registration.update();
            }
          });
        })
        .catch((error) => {
          console.error('Error al registrar el Service Worker:', error);
        });

      // Cuando el Service Worker nuevo toma el control de la página,
      // recargamos una sola vez para que se carguen los archivos nuevos.
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
