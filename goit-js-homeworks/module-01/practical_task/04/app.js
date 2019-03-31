'use strict';

let logIn = prompt('Введите пароль доступа');


const answer = logIn === null;

const correctPassword = 'jqueryismyjam';

const correctAnswer = logIn === 'jqueryismyjam';

const corectPassword = 'Доступ в секретный бункер разрешен!';

const messageProtection = 'Активирована система защиты!';

let message;

if (answer) {
  let message = prompt('Ожидаю ввода пароля!');
} else if (correctAnswer) {
  alert(corectPassword);
} else {
  alert(messageProtection);
}