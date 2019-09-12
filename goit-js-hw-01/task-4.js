'use strict';



const credits = 23580;

const pricePerDroid = 3000;

let totalPrice;

const userChoice = prompt('Сколько дроидов Вы хотите купить?');

if (userChoice === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = Number(userChoice) * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!')
  } else {
    console.log(`Вы купили ${userChoice} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
  }
}