'use strict';

// make new date 
let date = new Date();
console.log(date.getDate());

let new_date = date.getDate() - 15;
console.log(new_date);

// set date by hand
date.setDate(1);
console.log(date);  // задать первое число месяца

// if we need to measure time
let start = new Date(); // начинаем отсчёт времени

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // заканчиваем отсчёт времени

console.log( `Цикл отработал за ${end.getTime() - start.getTime()} миллисекунд` );

// parsing of the date
let pars = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

console.log(pars);
