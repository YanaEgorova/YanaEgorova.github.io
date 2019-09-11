'use strict';


// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) 
// и возвращает самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.


//преобразовать строку в массив
//сделать предположение что первый элемент массива это самое длинное слово
//сравнить слова и перезаписать



const findLongestWord = function (string) {


  const array = string.split(' ');
  //console.log(array);
  let longestWord = array[0];
  //console.log(array[0]);

  for (const word of array) {

    if (word.length > longestWord.length) {
      longestWord = word;

    }
  }

  return longestWord;
}









console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'