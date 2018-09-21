// Register service worker
DBhelper.registerSW();

// change the content every 60 secs
let proverbInterval = window.setInterval(DBhelper.getProverb, 60000);

// tweet proverb
document.getElementById('tweet').addEventListener('click', ()=>{
    DBhelper.postProverbToIdb();
    //enough time to get tweet posted to database
    window.setTimeout(DBhelper.syncSW, 1000);
});