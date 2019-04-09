'use strict';



const numbers = [12, 15, 25, 37, 41, 62, 74, 83];

let userInput;

const min = numbers[0];

const max = numbers[numbers.length - 1];



while (true) {
  userInput = prompt(`Введите цифру между ${min} и ${max}`);

  if (userInput === null) {
    alert('Отменено пользователем');
    break;
  }

  if (numbers.includes(Number(userInput))) {
    alert('Поздравляем, вы угадали!');
    break;
  }

  if (numbers.includes(Number(userInput)) === false) {
    alert('Сожалеем, вы не угадали');
    break;
  }

}