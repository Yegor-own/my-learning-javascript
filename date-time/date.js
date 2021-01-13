'use strict';

let today = new Date();

console.log(today);
console.log(Date.now() + ' time elapsed from 1970 in milleseconds (the same as getTime)');
console.log(today.getMilliseconds() + ' milleseconds');
console.log(today.getSeconds() + ' seconds');
console.log(today.getMinutes() + ' minutes');
console.log(today.getHours() + ' hours');
console.log(today.getTime() + ' time elapsed from 1970 in milleseconds');
console.log(today.getDate() + ' today date');
console.log(today.getDay() + ' today day of the week');
console.log(today.getMonth() + ' month'); // from 0 to 11
console.log(today.getFullYear() + ' year in 4 symbols');

const begin = new Date(0);
console.log(begin); // Thu Jan 01 1970 05:00:00
