/* IRON TRACK — Service Worker
   Estratégias:
   - navegação/HTML  → network-first (o app atualiza sozinho; cai para o cache quando offline)
   - CDN e fontes    → stale-while-revalidate (abre rápido e atualiza em segundo plano)
   - ícones/manifest → cache-first
*/

const VERSION = 'v2';
const CORE_CACHE = `iron-track-core-${VERSION}`;
const ASSET_CACHE = `iron-track-assets-${VERSION}`;

// Caminhos relativos (./) por causa do GitHub Pages
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Terceiros usados pelo app — cacheados sob demanda, nunca bloqueiam a instalação
const CDN_HOSTS = [
  'cdn.tailwindcss.com',
  'unpkg.com',
  'cdn.jsdelivr.net',
  'fonts.googleapis.com',
  'fonts.gstatic.com'
];

const isCdn = (url) => CDN_HOSTS.includes(url.hostname);

/* ---------- INSTALL ---------- */
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CORE_CACHE);
    // addAll falha inteiro se um único arquivo faltar (ex.: ícone ausente).
    // Aqui cada item é independente: o que existir entra no cache.
    await Promise.all(CORE_ASSETS.map(async (url) => {
      try {
        await cache.add(new Request(url, { cache: 'reload' }));
      } catch (err) {
        console.warn('[sw] não foi possível pré-cachear', url, err);
      }
    }));
    await self.skipWaiting();
  })());
});

/* ---------- ACTIVATE ---------- */
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keep = [CORE_CACHE, ASSET_CACHE];
    const names = await caches.keys();
    await Promise.all(names.map((n) => (keep.includes(n) ? null : caches.delete(n))));
    if (self.registration.navigationPreload) {
      try { await self.registration.navigationPreload.enable(); } catch (err) { }
    }
    await self.clients.claim();
  })());
});

/* ---------- FETCH ---------- */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Só GET http(s). Evita chrome-extension:// e POSTs.
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // 1. Navegação e HTML: rede primeiro, cache como rede de segurança
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(networkFirst(event));
    return;
  }

  // 2. Bibliotecas e fontes externas: responde do cache e revalida em segundo plano
  if (isCdn(url)) {
    event.respondWith(staleWhileRevalidate(event, ASSET_CACHE));
    return;
  }

  // 3. Arquivos próprios (ícones, etc.): cache primeiro
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(req, CORE_CACHE));
  }
});

/* ---------- ESTRATÉGIAS ---------- */
async function networkFirst(event) {
  const req = event.request;
  const cache = await caches.open(CORE_CACHE);
  try {
    const preload = event.preloadResponse ? await event.preloadResponse : null;
    const fresh = preload || await fetch(req);
    if (fresh && fresh.ok) cache.put('./index.html', fresh.clone());
    return fresh;
  } catch (err) {
    const cached = await cache.match(req) || await cache.match('./index.html') || await cache.match('./');
    if (cached) return cached;
    return new Response(
      '<!doctype html><meta charset="utf-8"><body style="background:#050505;color:#fff;font-family:system-ui;display:grid;place-items:center;height:100vh;margin:0;text-align:center"><div><h1 style="letter-spacing:.1em">IRON TRACK</h1><p style="color:#A1A1AA">Sem conexão e sem cópia offline ainda. Abra o app uma vez conectado.</p></div></body>',
      { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }
}

async function staleWhileRevalidate(event, cacheName) {
  const req = event.request;
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);

  const network = fetch(req).then((res) => {
    // Respostas opacas (no-cors, como as fontes) têm status 0 e ainda servem offline
    if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
    return res;
  }).catch(() => null);

  if (cached) {
    // mantém a revalidação viva sem segurar a resposta ao usuário
    try { event.waitUntil(network); } catch (err) { }
    return cached;
  }
  const fresh = await network;
  return fresh || Response.error();
}

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (err) {
    return cached || Response.error();
  }
}

/* ---------- MENSAGENS ---------- */
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});