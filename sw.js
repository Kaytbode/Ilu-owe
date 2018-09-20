importScripts('./js/dbHelper.js');
importScripts('./js/idb.js');

const staticCacheName = 'ilu-owe-v2';

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
                'https://fonts.googleapis.com/css?family=Kosugi|Raleway|Bad+Script|Inconsolata',
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

//Background service worker sync
addEventListener('sync', event=>{
    /*if service worker is aware
     about the pending tweet*/
    if (event.tag == 'syncTweets') event.waitUntil(getProverb());
});

const getProverb= ()=> {
  dbPromise.then(db=>{
    const tx = db.transaction('proverbs', 'readwrite');
    const store = tx.objectStore('proverbs');

    return store.openCursor();
    }).then(cursor=>{
        if(!cursor) return;

        return cursor;
    }).then(function postTweet(cursor){
        if(!cursor) return;
        //post tweet
        const proverb = `${cursor.value.yor} - ${cursor.value.mea}`;
        window.open(`https://twitter.com/intent/tweet?text=${proverb}`, 'tab');
        //remove cursor from database when done
         cursor.delete();
         //move to the next item in the database
        return cursor.continue().then(postTweet);
    });
}
