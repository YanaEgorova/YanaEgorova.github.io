'use strict';

const credits = 23580;

const pricePerDroid = 3000;

const quantity = 3;

const totalPrice = pricePerDroid * quantity;



if (totalPrice > credits) {
  console.log(`Недостаточно средств на счету!`);
} else {
  console.log(`Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
}