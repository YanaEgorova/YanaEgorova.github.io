'use strict';


/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };
//  Решение =============================
// let max = 0;

// let name;

// const keys = Object.keys(tasksCompleted);

// console.log(keys)

// for (const key of keys) {
//   //console.log(key);



//   //console.log(tasksCompleted[key])

//   if (max < tasksCompleted[key]) {
//     max = tasksCompleted[key];
//     name = key;
//   }


// }


// console.log(`${name} : ${max}`)

// Функция =========================


// const findPersonWithMaxTask = function (stats) {
//   let max = 0;

//   let name;

//   const keys = Object.keys(stats);

//   console.log(keys)

//   for (const key of keys) {
//     //console.log(key);



//     //console.log(tasksCompleted[key])

//     if (max < stats[key]) {
//       max = stats[key];
//       name = key;
//     }


//   }
//   return console.log(`${name} : ${max}`)
// }


// console.log(findPersonWithMaxTask(tasksCompleted));


// Решение через функцию с entries ================


const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
};



const findPersonWithMaxTask = function (stats) {
  let name;

  let max = 0;

  const entries = Object.entries(tasksCompleted);

  //console.table(entries);

  for (let entry of entries) {
    //console.log(entry);




    //console.log(entry[1]);



    if (max < entry[1]) {
      max = entry[1]

      name = entry[0];


    }

  }
  return console.log(`${name} : ${max}`)
}

console.log(findPersonWithMaxTask(tasksCompleted));