'use strict';



const users = ["Mango", "Poly", "Ajax", "Chelsey"];

users.shift()

console.log(users);

users.pop();

console.log(users);

users.unshift('Lux');

console.log(users);

users.push('Jay', 'Kiwi');


console.log(users);

const userToDelete = "Ajax";


const index = users.indexOf(userToDelete);

const user = users.splice(index, 1);

console.log(users);


const userToInsertBefore = "Jay";

const indexuserToInsertBefore = users.indexOf(userToInsertBefore);


users.splice(indexuserToInsertBefore, 0, 'Kong');

console.log(users);