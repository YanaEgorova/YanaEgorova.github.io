'use strict';



const getPx = function (str) {

  if (typeof str === 'string') {

    return Number.parseFloat(str);
  }

  if (typeof str !== 'string') {
    return null;
  }
}



console.log(getPx("10px") === 10); // true
console.log(getPx("10.5") === 10.5); // true
console.log(getPx("0") === 0); // true
console.log(getPx(-1)); // null
console.log(getPx(10)); // null