'use strict';



/*
 * Есть два массива names и prices с именами и ценами товаров.
 * Напишите функцию combine(names, prices), которая получает 
 * эти два массива и возвращает массив объектов со свойствами name и price. 
 */

const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// const products = combine(names, prices);
// console.log(products); // массив объектов со свойствами name и price


// const combine = function (names, prices) {
//   const result = [];

//   //console.table(names)
//   //console.table(prices)

//   for (let i = 0; i < names.length; i += 1) {
//     //console.log(names[i]);
//     //console.log(prices[i]);


//     const object = {
//       name: names[i],
//       price: prices[i],
//     }

//     result.push(object)

//   }


//   return result
// }

// const products = combine(names, prices);
// console.table(products); // массив объектов со свойствами name и price



// Переделать функцию чтобы вернула обьект===============


const combine = function (names, prices) {

  //console.log(names)

  //console.log(prices)

  let obj = {}



  for (let i = 0; i < names.length; i += 1) {


    let name = names[i];

    let price = prices[i];


    //console.log(names[i]);
    //console.log(prices[i]);


    obj[name] = price

  }





  console.table(obj)

}


const products = combine(names, prices);
console.table(products); // массив объектов со свойствами name и price