'use strict';



let userChoice = `Введите страну`;


const country = prompt(userChoice);

const CHINA = 'Китай';
const SOUTHAMERICA = 'Южная Америка';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';



let message;



switch (country) {
  case CHINA:
    message = `Доставка в ${country} будет стоить 100 кредитов`;
    break;

  case SOUTHAMERICA:
    message = `Доставка в ${country} будет стоить 250 кредитов`;
    break;

  case AUSTRALIA:
    message = `Доставка в ${country} будет стоить 170 кредитов`;
    break;

  case INDIA:
    message = `Доставка в ${country} будет стоить 80 кредитов`;
    break;

  case JAMAICA:
    message = `Доставка в ${country} будет стоить 120 кредитов`;
    break;

  default:
    message = 'В вашей стране доставка не доступна';
}


console.log(message);