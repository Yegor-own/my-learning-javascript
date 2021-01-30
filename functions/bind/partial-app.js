'use strict';

function mul(a, b) {
  return a * b
}

let double = mul.bind(null, 2);

console.log(double(3)); // 6
console.log(double(1554)); // 3108

let triple = mul.bind(null, 3);

console.log(triple(3)); // 9
console.log(triple(1554)); // 4662