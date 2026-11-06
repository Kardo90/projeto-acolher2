const CACHE_NAME = 'acolher-v1';
const RECURSOS = [
  './',
  './index.html',
  './app.js',
  './manifest.json'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(RECURSOS);
    })
  );
});

// Resposta rápida de carregamento
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
