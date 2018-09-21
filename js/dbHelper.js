class DBhelper {
    // returns a random integer between two values, 
    // the higher value not inclusive
    static getRandomIndex(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    // displays proverbs on the screen
    static getProverb() {
        const length = proverbs.length;
        const index = DBhelper.getRandomIndex(0, length);

        document.querySelector('.yoruba p').textContent = proverbs[index].yor;
        document.querySelector('.literal p').textContent = proverbs[index].lit;
        document.querySelector('.meaning p').textContent = proverbs[index].eng;
    }
    // initialize database
    static initializeDB() {
        const dbPromise = idb.open('ilu-owe', 1, upgradeDb=>{
            switch(upgradeDb.oldVersion){
              case 0:
                upgradeDb.createObjectStore('proverbs', {keyPath: 'yor'});
           }    
        });
        
        return dbPromise;
    }
    // register service worker
    static registerSW() {
        navigator.serviceWorker.register('sw.js').then(reg=>{
            if(!navigator.serviceWorker.controller)return;
            console.log('sw registered')
          });
    }
    //post proverbs to indexDB
    static postProverbToIdb() {
        const proverb = {
            yor : document.querySelector('.yoruba p').textContent ,
            mea : document.querySelector('.meaning p').textContent 
        }
        
        const dbPromise = DBhelper.initializeDB();

        dbPromise.then(db=>{
          if(!db) return;
  
          const tx = db.transaction('proverbs', 'readwrite').objectStore('proverbs');
  
          tx.put(proverb);
  
          return tx.complete;
        }).catch(err=> console.log(err));
    }
    // get proverb from database
    static getProverbFromIDB() {
        const dbPromise = DBhelper.initializeDB();

        dbPromise.then(db=>{
            const tx = db.transaction('proverbs', 'readwrite');
            const store = tx.objectStore('proverbs');

            return store.openCursor();
            }).then(cursor=>{
                if(!cursor) return;

                return cursor;
            }).then(function postTweet(cursor) {
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
    //post tweet
    static postTweet() {
        // we are definitely offline
        if(!navigator.onLine){
            DBhelper.postProverbToIdb();
            return;
        }

        // create a promise object
        const promiseTweet = new Promise((resolve, reject)=>{
            const proverb = `${document.querySelector('.yoruba p').textContent } - ${document.querySelector('.meaning p').textContent}`;
            resolve(proverb);
        });

        promiseTweet.then(proverb=>{
            window.open(`https://twitter.com/intent/tweet?text=${proverb}`, 'tab');
        }).catch(err=>{
            // we are not connecting to the server
            // lie-fi i guess
            // send proverb to database
            DBhelper.postProverbToIdb();
        })
    }
};