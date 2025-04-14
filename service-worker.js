
const CACHE_NAME = 'scan-pick-v1';
const urlsToCache = [
  '/',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
  '/firebase.js'
];

// Telepítés
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Kérés elfogása
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
