const CACHE_NAME = 'chitarre-app-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through standard per lasciare gestire le API HTTP/CORS a QuintaDB
  event.respondWith(fetch(event.request));
});
