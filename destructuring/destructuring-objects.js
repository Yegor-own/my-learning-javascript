'use strict';

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

console.log(title);  // Menu
console.log(w);      // 100
console.log(h);      // 200


let tools = {
  begin: "Start"
};

let {len = 100, tall = 200, begin} = tools;

console.log(begin);  // start
console.log(len);  // 100
console.log(tall); // 200