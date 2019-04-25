'use strict';




const formatString = function (str) {

  if (str.length <= 40) {
    return str;
  }

  if (str.length > 40) {

    const strLength = str.substr(0, 40);

    return `${strLength} ...`

  }

}


// // Вызовы функции для проверки
console.log(
  formatString("Curabitur ligula sapien, tincidunt non.")
); // вернется оригинальная строка

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
); // вернется форматированная строка

console.log(
  formatString("Curabitur ligula sapien.")
); // вернется оригинальная строка

console.log(
  formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
); // вернется форматированная строка