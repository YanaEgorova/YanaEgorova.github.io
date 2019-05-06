'use strict';



/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({
//     a: 1
//   })
// ); // false

// console.log(
//   isObjectEmpty({
//     a: 1,
//     b: 2
//   })
// ); // false


const i = {
  a: 45,
  ok: 78,
}

const numberOfProperties = Object.entries(i)

//console.log(numberOfProperties.length)




const isObjectEmpty = function (obj) {

  const numberOfProperties = Object.entries(obj)

  //console.log(numberOfProperties)


  if (numberOfProperties.length) {
    return false
  }


  return true

}

console.log(
  isObjectEmpty({})
); // true

console.log(
  isObjectEmpty({
    a: 1
  })
); // false

console.log(
  isObjectEmpty({
    a: 1,
    b: 2
  })
); // false