'use strict';

const hotelSelection = `Выберете отель:  
1 - Хостелы 
2 - Бюджетных отели
3 - Отели ***
4 - Отели ****"
5 - Лучшие отели`

let userChoice = prompt(hotelSelection);


const HOSTELLIST = 1;
const CHEAPESTHOTELSLIST = 2;
const THREESTARSHOTELSLIST = 3;
const FOURSTARSHOTELSLIST = 4;
const EXPENSIVEHOTELSLIST = 5;

let message;

if (userChoice === null) {
  alert(message = `Очень жаль, приходите еще!`);
} else {
  userChoice = Number(userChoice);
  switch (userChoice) {
    case HOSTELLIST:
      alert(message = `Каталог хостелов`);
      break;

    case CHEAPESTHOTELSLIST:
      alert(message = `Каталог бюджетных отелей`);
      break;

    case THREESTARSHOTELSLIST:
      alert(message = `Каталог отелей ***`);
      break;

    case FOURSTARSHOTELSLIST:
      alert(message = `Каталог отелей ****`);
      break;

    case EXPENSIVEHOTELSLIST:
      alert(message = `Каталог лучших отелей`);
      break

    default:
      alert(message = 'Неверный ввод, возможные варианты 1 - 5!');

  }
}