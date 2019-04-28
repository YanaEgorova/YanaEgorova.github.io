'use strict';




const findLongestWord = function (str) {

  str = str.split(' ');

  let longestWord = str[0];

  for (const word of str) {

    if (word.length > longestWord.length) {

      longestWord = word;
    }
  }

  return longestWord;
}


console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // 'Google'

console.log(
  findLongestWord("May the force be with you")
); // 'force'