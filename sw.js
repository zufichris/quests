// Seventy-Five Days: offline cache. Network first for the page, cache first for fonts.
const CACHE = "s75-v1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  const isFont = url.hostname.endsWith("gstatic.com") || url.hostname.endsWith("googleapis.com");
  if (isFont) {
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })));
    return;
  }
  if (url.origin === location.origin) {
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then(hit => hit || caches.match("./index.html"))));
  }
});
