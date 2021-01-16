'use strict';

function fib(x) {
  if (x == 1) {
    return 1
  }
  if (x == 2) {
    return 1
  }
  return fib(x-1) + fib(x-2)
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));