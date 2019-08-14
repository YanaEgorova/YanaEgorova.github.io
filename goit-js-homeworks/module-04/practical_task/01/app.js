'use strict';



/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};


user.mood = 'happy';

console.log(user);

user.hobby = 'javascript';

console.log(user);

user.premium = false;

console.log(user);

let keys = Object.keys(user);

for (let key of keys) {

  console.log(`${key} : ${user[key]}`)
}

let entries = Object.entries(user)

console.table(entries)


for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}