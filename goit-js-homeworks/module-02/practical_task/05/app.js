'use strict';



const num = 10;
const matched = [];

const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];

for (let i = 0; i < numbers.length; i += 1) {


  if (numbers[i] >= num) {
    matched.push(numbers[i])
  }

}
console.log(matched);