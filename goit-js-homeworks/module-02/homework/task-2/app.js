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

  if (passwords.includes(userInput) === false) {
    attemptsLeft -= 1;

    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);

  }

  if (attemptsLeft < 1) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    break;
  }


  if (passwords.includes(userInput)) {
    alert('Добро пожаловать!');
    break;
  }



} while (userInput !== null);