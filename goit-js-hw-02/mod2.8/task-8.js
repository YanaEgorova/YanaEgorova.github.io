'use strict';





// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
//  Принцип единственной ответственности функции - каждая функция делает что-то одно. 
// Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.





const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function (allLogins, login) {


  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      console.log('Логин успешно добавлен!');
    } else {
      console.log('Такой логин уже используется!');
    }


  } else {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');

  }
};


addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'