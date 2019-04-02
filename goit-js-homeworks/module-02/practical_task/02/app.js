'use strict';



const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];





users[0] = `1 - ${users[0]}`;

users[1] = `2 - ${users[1]}`;

users[2] = `3 - ${users[2]}`;

users[3] = `4 - ${users[3]}`;

users[4] = `5 - ${users[4]}`;

users[5] = `6 - ${users[5]}`;

let counter = 0;




while (counter < users.length) {

  console.log(users[counter]);

  counter += 1;
}