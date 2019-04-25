'use strict';



let input;


const numbers = [];



do {

  input = prompt('Введите число');



  if (input === null) {
    alert('Отменено пользователем');
    break;

  }

  if (!Number.isNaN(Number(input))) {


    numbers.push(Number(input));

  } else {
    alert('Было введено не число, попробуйте еще раз');
  }

  console.log(numbers);


} while (input !== null);



let total = 0;

for (const number of numbers) {



  if (numbers.length !== 0) {

    total += number;


  }

}

console.log(`Общая сумма чисел равна ${total}`);