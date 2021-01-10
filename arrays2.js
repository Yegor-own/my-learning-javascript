'use strict';

let fruits = [
  'Orange',
  'Mango',
  'Apple',
  'Pumpkin'
];

console.log('Original: ' + fruits );

fruits.splice( 1, 2, 'Grape', 'Limon' );
// arr.splice(from, to, elem1, ..., elemN) deletes elments from 1: Orange to 2: Mango, Orange replaces to Grape and Mango replaces to Limon
console.log( String(fruits) ); // deduces ["Apple", "Grape", "Limon"]

console.log( String(fruits.slice(1)) ); // returns gap from 1 to last element of array

console.log( String(fruits.concat(['Raspberry', 'Blackberry'], 'Banana')) ); // returns new array with base array - fruits and arguments in contact

console.log( fruits.includes('Orange') ); // retuns true if item Orange is in array fruits

console.log( fruits.indexOf('Limon') ); // returns index of item Limon

console.log( fruits.lastIndexOf('Pumpkin') ); // returns last index of Pumpkin

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

let user = users.find(item => item.id == 2);

console.log( user.name ); // outputs Петя

let lengths = fruits.map(item => item.length); // method map calls function for every items in array

console.log( String(lengths) );

console.log( String(fruits) );
