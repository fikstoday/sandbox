const staticCacheName = 'assets-v1';
const assetsToCache = [
'./',
'./styles.css',
'./index.html',
'./logo.png'
];

// install event
self.addEventListener('install', function(event) {
  //console.log('service worker installed');
  event.waitUntil(
    caches.open(staticCacheName).then( function(cache) {
      console.log('caching shell assets');
      cache.addAll(assetsToCache);
    })
  );
});

// activate event
self.addEventListener('activate', function(event) {
  //console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', function(event) {
  //console.log('fetch event', event);
  event.respondWith(
    caches.match(event.request).then( function(cacheResponse) {
      return cacheResponse || fetch(event.request);
    })
  );
});
