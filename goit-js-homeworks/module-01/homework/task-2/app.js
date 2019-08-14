'use strict';

const credits = 23580;

const pricePerDroid = 3000;

const userInput = prompt("Сколько дроидов вы хотите купить?")



const totalPrice = Number(userInput) * pricePerDroid



if (userInput === null) {
  console.log('Отменено пользователем!')
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!')
} else {
  console.log(`Вы купили ${Number(userInput)} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
}