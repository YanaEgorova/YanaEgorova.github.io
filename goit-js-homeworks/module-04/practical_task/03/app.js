'use strict';



/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({
//     a: 1,
//     b: 3,
//     c: 'hello'
//   })
// ); // 3





const countProps = function (obj) {
  const numberOfProperties = Object.entries(obj)


  return numberOfProperties.length

}

console.log(
  countProps({})
); // 0

console.log(
  countProps({
    a: 1,
    b: 3,
    c: 'hello'
  })
); // 3