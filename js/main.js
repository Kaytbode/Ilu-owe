
//grab the yoruba section of the page
let yoruba = document.querySelector('.yoruba p');

// the literal translation
let literal = document.querySelector('.literal p');

//grab the meaning section of the page
let meaning = document.querySelector('.meaning p');

// get length of the proverbs array
let length = proverbs.length;

// returns a random integer between two values, 
// the higher value not inclusive

const getRandomIndex = (min, max)=> Math.floor(Math.random() * (max - min)) + min;
    
// displays proverbs on the screen
const displayProverb = ()=>{
    const index = getRandomIndex(0, length);
    yoruba.textContent = proverbs[index].yor;
    literal.textContent = proverbs[index].lit
    meaning.textContent = proverbs[index].eng;
}

// change the content every 60 secs
let proverbInterval = window.setInterval(displayProverb, 60000);
