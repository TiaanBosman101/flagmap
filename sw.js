importScripts('data.js');
const CACHE = 'flagmap-v1';
const CORE = [
  './', 'index.html', 'data.js', 'manifest.json', 'icon.svg',
  'https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js',
  'https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js',
  'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json',
];
const IDS = REGIONS.flatMap(([, cs]) => cs.flatMap(([, s]) => s.split(',').map(e => e.slice(0, 2))));
const FLAGS = IDS.flatMap(id => [`https://flagcdn.com/${id}.svg`, `https://flagcdn.com/w1280/${id}.png`]); // svg for cards, png for map fills

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil((async () => {
  await clients.claim();
  const c = await caches.open(CACHE);
  await Promise.all(FLAGS.map(async u => { try { if (!(await c.match(u))) await c.put(u, await fetch(u, { mode: 'no-cors' })); } catch {} }));
})()));

// app files: network first (so updates show up); CDN + flags: cache first
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const put = res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res; };
  e.respondWith(new URL(e.request.url).origin === location.origin
    ? fetch(e.request).then(put).catch(() => caches.match(e.request, { ignoreSearch: true }))
    : caches.match(e.request).then(r => r || fetch(e.request).then(put)));
});
