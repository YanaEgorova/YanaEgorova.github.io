'use strict';



const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];





const isLoginValid = function (login) {


  const isLoginValid = login.length;


  const rightLogin = isLoginValid >= 4 && isLoginValid <= 16;

  return rightLogin

};

//console.log(isLoginValid('hgfhgfgfh'))

const isLoginUnique = function (allLogins, login) {


  const isLoginUnique = allLogins.includes(login);



  return !isLoginUnique

};


//console.log(isLoginUnique(logins, 'Aj4xnhvhnv1sBozz'))


const addLogin = function (allLogins, login) {


  let result;

  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login)
      result = console.log('Логин успешно добавлен!')
    } else {
      result = console.log('Такой логин уже используется!')


    }
  } else {
    result = console.log('Ошибка! Логин должен быть от 4 до 16 символов')


  }

  return result

};








// // Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'


//console.log(logins)