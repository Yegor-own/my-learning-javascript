// Exersise

'use strict';

function camelize(str) {
  let arr = str.split('-');
  let newarr = arr.map((item) => item[0].toUpperCase() + item.slice(1));
  newarr[0] = newarr[0].toLowerCase();
  return newarr.join('');
}

console.log(camelize("background-color"));


function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b)) // this method filters by arguments
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 5);

console.log(filtered); // 3,1 (совпадающие значения)

console.log(arr); // 5,3,8,1 (без изменений)