'use strict';




const message = "Proin sociis natoque et magnis parturient montes mus";

const cost = 10;



const words = message.split(' ');

console.log(words);


console.log(words.length);




let total = 0;

for (let i = 0; i < words.length; i += 1) {
  total += cost;
}

console.log(total);