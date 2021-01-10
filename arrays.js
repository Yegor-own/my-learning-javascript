'use strict';

let fruits = [
  'Apple',
  'Orange',
  'Mango',
];

fruits.vegetables = 'Pumpkin'; // we can do it because ay is an object
fruits[10] = 'io'; // makes 7 empty elements in the array

fruits.push('Limon'); // adds new element to the end of the array <= FAST METHOD
fruits.unshift('Grape'); // adds new element to the beginning of the array <= SLOW METHOD

console.log(fruits);

console.log(fruits.pop() + ' - pop method'); // deletes and returns last element in array <= FAST METHOD

console.log(fruits.shift() + ' - shift method'); // deletes and returns first element in array <= SLOW METHOD

console.log(fruits); // ["Orange", "Mango"]

console.log(fruits[0].length); // returns lengh of 'Apple' -> 5

for (let i of fruits) {
  console.log(i);
}
// returns:
// Apple
// Orange
// Mango

console.log('or another array');

// or like this
fruits.forEach(element => {
  console.log(element);
});
// returns:
// Apple
// Orange
// Mango

fruits.length = 0; // clear the array
console.log(fruits); // returns [vegetables: "pumpkin"]


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] ); // 5, центральный элемент


function sumInput() {
  let sumArr = [];
  let summa = 0;
  while (true) {
    let val = prompt('Value: ');
    if (val == null) {
      break;
    }
    else {
      sumArr.push(val);
    }
  }
  sumArr.forEach(element => {
    summa += +element;
  });
  return summa;
}

console.log(sumInput());
