'use stict';

{
  // сделать какую-нибудь работу с локальными переменными, которые не должны быть видны снаружи

  let message = "Hello";

  console.log(message); // Hello
}

console.log(message); // Ошибка: переменная message не определена