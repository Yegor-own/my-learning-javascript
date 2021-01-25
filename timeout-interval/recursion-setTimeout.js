'use strict';

let interval = setTimeout(function tick(count=1) {
  console.log('tick ' + count++);
  alert();
  interval = setTimeout(tick, 1000, count);
}, 1000);