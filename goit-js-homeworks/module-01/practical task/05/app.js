'use strict';


const total = 100;


const ordered = 50;

const orderedBigger = ordered > total;

const theSame = ordered === total;

if (orderedBigger) {
  console.log('На складе недостаточно товаров!');
} else if (theSame) {
  console.log('Вы забираете весь товар cо склада!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}