const staticCacheName = 'ilu-owe-v4';

addEventListener('install', event=>{
    event.waitUntil(
        caches.open(staticCacheName).then(cache=>{
            return cache.addAll([
                '/Ilu-owe',
                '/Ilu-owe/css/main.css',
                '/Ilu-owe/css/medium.css',
                '/Ilu-owe/css/large.css',
                '/Ilu-owe/js/main.js',
                '/Ilu-owe/js/data.js',
                '/Ilu-owe/js/idb.js',
                '/Ilu-owe/js/dbHelper.js',
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
            return response || fetch(event.request);
            /* 
            return fetch(event.request).then(response=>{
                if(response.status === 404){
                    return caches.match('/page404.html');
                }
                return response; */
           // });
        })
    );    
});
