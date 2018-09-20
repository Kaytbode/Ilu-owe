const staticCacheName = 'ilu-owe-v1';

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
// addEventListener('sync', event=>{
//     /*if service worker is aware
//      about the pending form submission*/
//     if (event.tag == 'syncForms') event.waitUntil(postTweet());

// });

// const postTweet = ()=> {
//   const dbPromise = DBHelper.initializeDatabase();

//   dbPromise.then(db=>{
//     const tx = db.transaction('reviews', 'readwrite');
//     const store = tx.objectStore('reviews');

//     return store.openCursor();
//     }).then(cursor=>{
//         if(!cursor) return;

//         return cursor;
//     }).then(function postReview(cursor){
//         if(!cursor) return;

//         const formReview = JSON.stringify(cursor.value);
//         /*
//          Go through the database and post to the server
//          all that's in there
//         */
//         fetch("http://localhost:1337/reviews/",{
//           method: 'POST',
//           body: formReview
//          })
//          .then(()=> {
//              console.log('done');
//          })
//          .catch((err)=> {
//              console.log(err);
//              return;
//          })

//          //remove cursor from database when done
//          cursor.delete();
//          //move to the next item in the database
//         return cursor.continue().then(postReview);
//     });
// }
