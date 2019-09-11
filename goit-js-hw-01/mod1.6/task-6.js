'use strict';



let input;
let total = 0;

let userChoice;




while (userChoice !== null) {

  userChoice = prompt('Введите число');



  if (Number.isNaN(Number(userChoice))) {

    alert('Было введено не число, попробуйте еще раз');
  } else {


    total = total + Number(userChoice);
  }

}


console.log(`Общая сумма чисел равна ${total}`)