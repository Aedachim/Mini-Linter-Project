let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
// split texts in to single words
const storyWords = story.split(' ');
console.log(storyWords.length);
/* filter the unnecessary words in the array and assign them */
const betterWords = storyWords.filter((word) => {
  return !unnecessaryWords.includes(word);
});

// count overused words
let oneCount = 0;
let twoCount = 0;
let threeCount = 0;

// Calculate the counting overused words 
for (word of storyWords) {

  if (word === 'really') {
    oneCount += 1;
  } else if (word === 'very') {
    twoCount += 1;
  } else if (word === 'basically') {
    threeCount += 1;
  }
};

// Count sentences
let sentences = 0;

// Counting the number of sentences
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences += 1;
  }
});

/* log the numbers of word/ sentence/ and overused words in One go */

const logInfo = (param1, param2, param3, param4, param5) => {
// Word count
param1 = storyWords.length
console.log('Word count:' + param1);
// sentence count
console.log(`The number of sentences in storyWords are: ${param2}`);
// count overused words in 3 different variable
console.log('really count: ' + param3);
console.log('very count: ' + param4);
console.log('basically count: ' + param5);
};

logInfo (storyWords.length, sentences, oneCount, twoCount, threeCount);

console.log(betterWords.join(' '));
/* define an index of to choose a word from a set of arrays and replacing overused words */
let randomIndex = Math.floor(Math.random() * 4);

/* replace "really"  and printing out the text */
while (storyWords.indexOf('really') != -1) {
  const reallyReplacement = ['truly', 'absolutely', 'certainly'];
  storyWords.splice(storyWords.indexOf('really'), 1, reallyReplacement[randomIndex]);
}
// The same game with "very"
while (storyWords.indexOf('very') != -1) {
  const veryReplacement = ['tremendously', 'greatly', 'decidely'];
  storyWords.splice(storyWords.indexOf('very'), 1, veryReplacement[randomIndex]);
}
// The same game with "basically"
while (storyWords.indexOf('basically') != -1) {
  const basicallyReplacement = ['essentially', 'fundamentally', 'primarily'];
  storyWords.splice(storyWords.indexOf('basically'), 1, basicallyReplacement[randomIndex]);
}
/* printing out the array in a text format separated by spaces inbetween */
console.log(storyWords.join(' '));

/* printing out the most frequent word in the text */
console.log(findMostRepeatedWord(story));
/* find the most frequent word in the story array */
let findMostRepeatedWord = story => {
  const regex = /[A-Z]/g;
  let words = story.match(/[A-Z]/g); /* <- match() = matching a string to a regular string */
  console.log(words);
}

// create an object contains every word with their matching number
let occurances = {};

// looping through the words array to count every words frequency
for (let word of words) {
  if (occurances[word]) {
    occurances[word]++;
  } else {
    occurances[word] = 1;
  }
}
/* printing out the frequency of each word in the text */
console.log(occurances);

// finding out the most repeated word in the text
let max = 0;
let mostRepeatedWord = '';

for (let word of words) {
  if (occurances[word] > max) {
    max = occurances[word];
    mostRepeatedWord = word;
  }

return `The most repeated word in the text is: ${mostRepeatedWord}`;
}