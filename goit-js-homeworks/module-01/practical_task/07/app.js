'use strict';

const value = Number.parseInt(Math.random() * 100);


const type = value % 2 ? 'odd' : 'even';


console.log(`${value} is ${type}`);