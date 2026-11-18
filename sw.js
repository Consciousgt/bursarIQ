/**
 * BursarIQ Service Worker v1.0
 * Offline-first caching for robust mobile experience
 */
const CACHE_NAME = 'bursariq-v1';
const OFFLINE_URL = './index.html';

// Assets to pre-cache for offline use
const PRE_CACHE = [
  './index.html',
  './login.html',
  './dashboard.html',
  './teacher-login.html',
  './teacher-portal.html',
  './cbt/index.html',
  './school.config.js',
  './js/data.js',
  './js/app.js',
  './js/auth.js',
  './manifest.json',
];

// Install: pre-cache shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRE_CACHE.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting()) // Don't block install if offline resources fail
  );
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for HTML/JS, cache-first for CDN assets
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET, chrome-extension, and cross-origin requests (CDN — let them through)
  if (request.method !== 'GET') return;
  if (!url.origin.startsWith(self.location.origin.substring(0, 5)) && !url.origin.includes('localhost')) return;

  // Network first, fall back to cache (for local files)
  if (url.origin === self.location.origin || url.hostname === 'localhost') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request).then(r => r || caches.match(OFFLINE_URL)))
    );
  }
});
