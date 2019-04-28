'use strict';



const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];





const isLoginValid = function (login) {


  const isLoginValid = login.length;


  if (isLoginValid < 4 || isLoginValid > 16) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
  }

  return true;
};


console.log(isLoginValid(login))

const isLoginUnique = function (allLogins, login) {


  const isLoginUnique = allLogins.includes(login);

  if (isLoginUnique) {
    console.log('Такой логин уже используется!');
    return false;
  }

  return true;

};


console.log(isLoginUnique(logins, login))




const addLogin = function (allLogins, login) {

  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {

    console.log('Логин успешно добавлен!');
    allLogins.push(login);
  }



};




// // Вызовы функции для проверки
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'








// while (isLoginValid(login)) {


//   const isLoginValid = function (login) {


//     const isLoginValid = login.length > 4 && login.length < 16;


//     return isLoginValid;
//   };


//   if (isLoginUnique(allLogins, login)) {


//     const isLoginUnique = function (allLogins, login) {

//       const isLoginUnique = allLogins.includes(login);


//       return !isLoginUnique;

//     };


//     allLogins.push(login);
//     console.log('Логин успешно добавлен!');
//   } else {


//     console.log('Такой логин уже используется!');
//   }


// }

// console.log('Ошибка! Логин должен быть от 4 до 16 символов')