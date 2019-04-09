'use strict';




const message = 'May the force be with you';

const words = message.split(' ');

let longestWord = words[0];


for (let i = 1; i < words.length; i += 1) {


  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}







console.log(longestWord);