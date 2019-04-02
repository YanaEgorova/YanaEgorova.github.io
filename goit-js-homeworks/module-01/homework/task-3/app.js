'use strict';



let userChoice = `Введите страну`;

const country = prompt(userChoice);




const chinaPrice = 100;

const southAmericaPrice = 250;

const australiaPrice = 170;

const indiaPrice = 80;

const jamaicaPrice = 120;


if (country === null) {
  console.log('Отменено пользователем');
} else {
  const inLowerCase = country.toLowerCase();
  switch (inLowerCase) {
    case 'китай':
      console.log(`Доставка в ${country} будет стоить ${chinaPrice} кредитов`);
      break;

    case 'южная америка':
      console.log(`Доставка в ${country} будет стоить ${southAmericaPrice} кредитов`);
      break;

    case 'австралия':
      console.log(`Доставка в ${country} будет стоить ${australiaPrice} кредитов`);
      break;

    case 'индия':
      console.log(`Доставка в ${country} будет стоить ${indiaPrice} кредитов`);
      break;

    case 'ямайка':

      console.log(`Доставка в ${country} будет стоить ${jamaicaPrice} кредитов`);
      break;

    default:
      console.log(`В вашей стране доставка не доступна`);
  }
}