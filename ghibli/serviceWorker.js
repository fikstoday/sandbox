const cacheName = 'assets-v1';
const assetsToCache = [
'./',
'./styles.css',
'./index.html',
  './logo.png'
];

self.addeventListener('install', event => {
  event.waitUntil(
    console.log('[Sevice worker] install');
caches.open(cacheName).then(cache =>{
return cache.addAll(assetsToCache);
});
    );
});

self.addEventListener('fetch', event=>{
event.respondWith( caches.open(cacheName).then(cache => {
  return cache.match(event.request)
  .then(function(response){
    if(response){
    return response;
    }
    return fetch(event.request);
  }
        )})
                  );
