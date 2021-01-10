'use strict';

function compareNumeric(a, b) { // sort function
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let nums = [1, 85, 5, 3, 48];

nums.sort(compareNumeric); // normal sorting

console.log(nums);

nums.reverse(); // normal reverse sorting

console.log(nums);

let names = 'Вася, Петя, Маша';

let nms = names.split(', '); // split elements by ,

for (let name of nms) {
  console.log(`Сообщение получат: ${name}.`);
}
console.log(String(nms));

let num = [1, 2, 3, 4, 5];

// убрано начальное значение (нет 0 в конце)
let result = num.reduce((sum, current) => sum + current);

console.log(result); // 15

// checkig array

let arr = [1, 3, 'df'];

let obj = {
  first: 'smth',
  second: 'ggh'
}

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // flase