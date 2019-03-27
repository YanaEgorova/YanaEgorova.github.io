'use strict';

const entrance = 'Введите пароль';

let userChoise = prompt(entrance);

const ADMIN_PASSWORD = 'm4ng0h4ckz';


let message;

if (userChoise === null) {
  alert(message = 'Отменено пользователем!');
} else if (userChoise === ADMIN_PASSWORD) {
  alert(message = 'Добро пожаловать!');
} else {
  alert(message = 'Доступ запрещен, неверный пароль!');
}