'use srict';

// function printNumbers(from, to) {
//   to++;
//   setInterval(() => {
//     (from != to) ? console.log(from++) : clearInterval()
//   }, 1000);
// }

// printNumbers(1, 5)

function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// использование:
printNumbers(5, 10);

