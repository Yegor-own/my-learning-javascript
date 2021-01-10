'use strict';

function sumSalaries(obj) {
  let sal = Object.values(obj);
  let result = 0;
  sal.forEach((value) => {result += value})
  return result;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650

function count(obj) {
  return Object.keys(obj).length
}

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2