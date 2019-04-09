'use strict';



let input;


const numbers = [];



do {

  input = prompt('Введите число');



  if (input === null) {
    alert('Отменено пользователем');
    continue;

  } else if (Number.isNaN(Number(input)) === false && input !== '' && input.trim() !== '') {


    numbers.push(Number(input));

  } else {
    alert('Было введено не число, попробуйте еще раз');
  }

  console.log(numbers);


} while (input !== null);



let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}


console.log(`Общая сумма чисел равна ${total}`);