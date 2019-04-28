'use strict';



const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];





const isLoginValid = function (login) {


  const isLoginValid = login.length;


  if (isLoginValid >= 4 && isLoginValid <= 16) {
    return true;
  } else {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
  }
};




const isLoginUnique = function (allLogins, login) {


  const isLoginUnique = allLogins.includes(login);

  if (isLoginUnique) {
    console.log('Такой логин уже используется!');
    return false;
  } else {
    return true;
  }



};






const addLogin = function (allLogins, login) {

  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {

    allLogins.push(login);
    console.log('Логин успешно добавлен!');


  }



};




// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'