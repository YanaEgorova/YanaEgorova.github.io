'use strict';






let userChoice = prompt('Введите число больше 100!');

const rightInput = 100;


console.log(userChoice);


while (Number(userChoice) <= rightInput || userChoice === ' ') {



  if (userChoice === null) {

    break;
  }

  userChoice = prompt('Введите еще раз!');

  const isValid = userChoice >= rightInput;

  if (isValid) {
    alert('Вы ввели правильное число');

  }

}