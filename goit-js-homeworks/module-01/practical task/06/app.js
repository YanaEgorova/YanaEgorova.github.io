'use strict';

const promptLabel = `Введите произвольное целое число`;


const input = prompt(promptLabel);

Number(input);



if (input === null) {
  alert('Ну и ладно, пока!');
} else if (Number(input) % 1 === 0) {
  alert('Спасибо!');
} else {
  alert('Необходимо было ввести целое число!');
}