'use strict';





const findLargestNumber = function (array) {

  let largestNumber = array[0];

  for (const number of array) {

    if (number > largestNumber) {

      largestNumber = number;
    }
  }

  return largestNumber;
}


// Вызовы функции для проверки
console.log(
  findLargestNumber([1, 2, 3])
); // 3

console.log(
  findLargestNumber([27, 12, 18, 5])
); // 27

console.log(
  findLargestNumber([31, 128, 14, 74])
); // 128