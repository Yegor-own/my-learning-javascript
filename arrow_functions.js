'use strict'

// FOURTH LESSON ARROW FUNCTIONS
// this is arrow func
let sum = (a, b) => summa(a, b)

let first = prompt('Enter first value')
let second = prompt('Enter second value')
alert(sum(first, second))

// let sum = (a, b) => +a + +b
// the same as
// let sum = function(a, b) {
//   return +a + +b
// }

function summa(x, y){
  return +x - +y
}


