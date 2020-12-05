'use strict';

let name = prompt('Введи своё имя!!', 'Например: Макс');

// (name == null | name == 'Например: Макс' | name == '')?
// alert('Ты идиот???', name) : alert(`Привет ${name}!!!`);

while (name == null || name == 'Например: Макс' || name == ''){
    alert('Ты идиот???', name);
    name = prompt('Введи своё имя !!');
}
alert(`Привет ${name} !!!`);


document.getElementsByTagName('p').html('Hello');
