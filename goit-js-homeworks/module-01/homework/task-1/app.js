'use strict';

const entrance = 'Введите пароль';

let userChoise = prompt(entrance);

const ADMIN_PASSWORD = 'm4ng0h4ckz';

const canceled = 'Отменено пользователем!';

const welcome = 'Добро пожаловать!';

const accessIsDenied = 'Доступ запрещен, неверный пароль!';


let message;

if (userChoise === null) {
  alert(canceled);
} else if (userChoise === ADMIN_PASSWORD) {
  alert(welcome);
} else {
  alert(accessIsDenied);
}