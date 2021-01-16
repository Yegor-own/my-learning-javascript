'use strict';

function palindrom(s) {
  if (s.length <= 1) {
    return true;
  }
  if (s[0] != s[s.length - 1]) {
    return false;
  }
  return palindrom(s.slice(1, s[s.length - 1]))
}

console.log(palindrom('asdffdsa'));