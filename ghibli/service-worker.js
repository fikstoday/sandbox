const cacheName = 'assets-v1';
const assets = [
'./',
'./styles.css',
'./index.html'
];

self.addeventListener('install', event => {
caches.open(cacheName).then((cache) =>{
cache.addAll(assets);
})
});

self.addEventListener('fetch', event=>{
event.respondWith( caches.open(cacheName).then(cache => {
  return cache.match(event.request) || fetch(event.request);
  })
}))

} );
