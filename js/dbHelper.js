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
            return reg.sync.getTags();
          }).then(tags=>{
              if(tags.includes('syncTweets')) console.log('background sync pending');
          }).catch(err=>{
              console.log('sync not supported or flag not enabled');
              console.log(err.message);
        });
    }
    // sync servicw worker
    static syncSW() {
        navigator.serviceWorker.ready.then(swRegistration=>{
            console.log('service worker ready')
            return swRegistration.sync.register('syncTweets');
           })
          .then(()=> console.log('syncTweets registered'))
          .catch(()=> {
            console.log('syncTweets failed');
        })
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
};