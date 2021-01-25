'use strict';

let count = 1;
let interval = setInterval(() => console.log('tick tak ' + count++), 1000);

setTimeout(() => {clearInterval(interval); console.log('stop');}, 5900);