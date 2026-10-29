// Remove course archives cached by older versions of the generic API strategy.
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    if (!await caches.has('api-cache')) return;
    const cache = await caches.open('api-cache');
    const requests = await cache.keys();
    await Promise.all(requests.filter((request) =>
      /^\/api\/content\/courses\/[^/]+\/export(?:-preview)?\/?$/.test(new URL(request.url).pathname)
    ).map((request) => cache.delete(request)));
  })());
});
