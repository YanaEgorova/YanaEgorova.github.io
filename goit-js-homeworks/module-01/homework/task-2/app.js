'use strict';

const credits = 23580;

const pricePerDroid = 3000;

const quantity = 3;

const totalPrice = pricePerDroid * quantity;


let message;

if (totalPrice > credits) {
  message = `Недостаточно средств на счету!`;
} else {
  message = `Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
}

console.log(message);