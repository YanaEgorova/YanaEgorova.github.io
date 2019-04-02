'use strict';

const entrance = 'Введите пароль';

let userChoise = prompt(entrance);

const ADMIN_PASSWORD = 'm4ng0h4ckz';



let message;

if (userChoise === null) {
  message = 'Отменено пользователем!';

} else if (userChoise === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';

} else {
  message = 'Доступ запрещен, неверный пароль!';

}

alert(message);