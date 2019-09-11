'use strict';


const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

users.shift();

// Удалить первый элемент массива
console.log(users); // ["Poly", "Ajax", "Chelsey"]


users.pop();
// Удалить последний элемент массива
console.log(users); // ["Poly", "Ajax"]


users.unshift("Lux");
// Добавить в начало массива пользователя "Lux"
console.log(users); // ["Lux", "Poly", "Ajax"]


users.push("Jay", "Kiwi");
// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

const idx = users.indexOf('Ajax');
users.splice(idx, 1)
// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = 'Ajax';
console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

const userToInsert = 'Kong';
const insertBefore = 'Jay';
const beforeIdx = users.indexOf(insertBefore);
//console.log(beforeIdx);
users.splice(beforeIdx, 0, userToInsert);
// Добавить в массив пользователя хранящегося в переменной userToInsert,
// перед пользователем хранящимся в переменной insertBefore

console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]