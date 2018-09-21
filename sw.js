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
                'https://fonts.gstatic.com/s/badscript/v6/6NUT8F6PJgbFWQn47_x7pOskzP9Ddt0.woff2',
                'https://fonts.gstatic.com/s/inconsolata/v16/QldKNThLqRwH-OJ1UHjlKGlZ5qhExfHw.woff2',
                'https://fonts.gstatic.com/s/kosugi/v1/pxiFyp4_v8FCjlI4Mbr8f1sHNv2pIig0ywDN1ZcQ_RTatRAh4ITLsBMU10F85RXF0VxEtYOtOBQj.98.woff2',
                'https://fonts.gstatic.com/s/kosugi/v1/pxiFyp4_v8FCjlI4Mbr8f1sHNv2pIig0ywDN1ZcQ_RTatRAh4ITLsBMU10F85RXF0VxEtYOtOBQj.118.woff2',
                'https://fonts.gstatic.com/s/kosugi/v1/pxiFyp4_v8FCjlI4Mbr8f1sHNv2pIig0ywDN1ZcQ_RTatRAh4ITLsBMU10F85RXF0VxEtYOtOBQj.119.woff2',
                'https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2',
                'https://use.fontawesome.com/releases/v5.3.1/css/all.css'
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
                if(response.status === 404){
                    return caches.match('/page404.html');
                }
                return response;
            });
        })
    );    
});
