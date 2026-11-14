// ============================================================
// 🚀 Dashboard Inicial — Service Worker
// Cache-first: carrega offline após a primeira visita
// ============================================================

const CACHE_NAME = 'tiyu-dash-v1.0.0';

const ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/script.js',
    './img/icone.png',
    './manifest.json'
];

// Instala e cacheia os arquivos estáticos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

// Remove caches antigos quando uma nova versão é ativada
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

// Cache-first: retorna do cache; se não tiver, vai na rede e cacheia
self.addEventListener('fetch', event => {
    // Ignora requisições não-GET e chrome-extension
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith('http')) return;

    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;

            return fetch(event.request).then(response => {
                // Só cacheia respostas válidas e do mesmo domínio
                if (
                    !response ||
                    response.status !== 200 ||
                    response.type === 'opaque'
                ) return response;

                const toCache = response.clone();
                caches.open(CACHE_NAME).then(cache =>
                    cache.put(event.request, toCache)
                );
                return response;
            });
        })
    );
});
