"use strict";

/*
  Напиши функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
// */

// const filterFromArray = function (arr) {

// };

// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]



const filterFromArray = function (arr) {
  console.log(arguments);
  const newArrey = arr.slice();
  // console.log(newArrey);
  for (let element of arguments) {
    // console.log(element);

    let findIndexNum = arr.indexOf(element);
    // console.log(findIndexNum);

    if (findIndexNum === -1) {
      continue;
    } else {
      newArrey.splice(findIndexNum, 1);
    }
  }

  return newArrey;
};


console.log(
  filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // [12, 8, 17]



// Вызовы функции для проверки
console.log(
  filterFromArray([1, 2, 3, 4, 5], 2, 4)
); // [1, 3, 5]

console.log(
  filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // [12, 8, 17]