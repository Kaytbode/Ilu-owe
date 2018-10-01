const staticCacheName = 'ilu-owe-v4';

addEventListener('install', event=>{
    event.waitUntil(
        caches.open(staticCacheName).then(cache=>{
            return cache.addAll([
                '/',
                '/css/main.css',
                '/css/medium.css',
                '/css/large.css',
                '/js/main.js',
                '/js/data.js',
                '/js/idb.js',
                '/js/dbHelper.js',
                'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
                'https://fonts.googleapis.com/css?family=Kosugi|Raleway|Bad+Script|Inconsolata'
            ]).then(()=> self.skipWaiting())
        })
    );
});

addEventListener('activate', event=>{
    event.waitUntil(
        caches.keys().then(cacheNames=>{
            return Promise.all(
                cacheNames.filter(cacheName=>{
                    return cacheName.startsWith('ilu-owe')&&
                    cacheName !== staticCacheName;
                }).map(cacheName=> caches.delete(cacheName))
            );
        })
    );

    return self.clients.claim();
});

addEventListener('fetch', event=>{
    event.respondWith(
        caches.match(event.request).then(response=> {
            if(response) return response
            
            return fetch(event.request).then(response=>{
                if(response.status === 404) return caches.match('/page404.html');
                
                return response; 
            });
        })
    );    
});
