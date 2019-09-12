'use strict';



let userChoice = prompt('Укажите Вашу страну');

let message;


const CHINA = 'китай';
const CHILI = 'чили';
const AUSTRALIA = 'австралия';
const INDIA = 'индия';
const YAMAYKA = 'ямайка';







if (userChoice === null) {
  message = 'Отменено пользователем';
} else {

  userChoice = userChoice.toLowerCase();

  switch (userChoice) {


    case CHINA:

      message = `Доставка в ${CHINA} будет стоить 100 кредитов`;
      break;

    case CHILI:
      message = `Доставка в ${CHILI} будет стоить 250 кредитов`;
      break;

    case AUSTRALIA:
      message = `Доставка в ${AUSTRALIA} будет стоить 170 кредитов`;
      break;

    case INDIA:
      message = `Доставка в ${INDIA} будет стоить 80 кредитов`;
      break;


    case YAMAYKA:
      message = `Доставка в ${YAMAYKA} будет стоить 120 кредитов`;
      break;

    default:
      alert('В вашей стране доставка не доступна');

  }





}



console.log(message);