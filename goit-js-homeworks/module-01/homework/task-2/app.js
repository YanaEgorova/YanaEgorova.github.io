'use strict';

const credits = 23580;

const pricePerDroid = 3000;

const quantity = 3;

const totalPrice = pricePerDroid * quantity;

const enoughMoney = credits / totalPrice;

const balance = credits - totalPrice;

let message;

if (totalPrice > credits) {
  message = `Недостаточно средств на счету!`;
} else {
  message = `Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.`;
}

console.log(message);