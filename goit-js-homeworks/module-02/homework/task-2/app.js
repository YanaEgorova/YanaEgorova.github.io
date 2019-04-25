'use strict';


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];


let attemptsLeft = 3;


let userInput;




do {

  userInput = prompt('Введите пароль');

  if (userInput === null) {
    alert('Отменено пользователем');
    break;
  }

  if (passwords.includes(userInput)) {
    alert('Добро пожаловать!');
    break;
  }



  attemptsLeft -= 1;

  if (!attemptsLeft) {
    alert('У вас закончились попытки, аккаунт заблокирован!')
    break;
  }

  alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);

} while (attemptsLeft);