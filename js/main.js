// Register service worker
DBhelper.registerSW();

// change the content every 60 secs
let proverbInterval = window.setInterval(DBhelper.getProverb, 60000);

// tweet proverb
document.getElementById('tweet').addEventListener('click', DBhelper.postTweet);

// check if user is online, post proverb stored in database if any
window.addEventListener('online', DBhelper.getProverbFromIDB);