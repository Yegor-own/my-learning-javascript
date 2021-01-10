// Exersise

'use strict';

function unique(arr) {
  let uniq = new Set();
  for (let item of arr) {
    uniq.add(item);
  }
  let uniqarr = [];
  for (let iterator of uniq) {
    uniqarr.push(iterator);
  }
  return uniqarr;
}

// laconic solution

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O