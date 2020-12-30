'use strict';

//FIRST LESSON I LEARN MESSAGES, ALERTS ETC.

let name = prompt('Введи своё имя!!', 'Например: Макс')


while (name == null || name == 'Например: Макс' || name == ''){
    alert('Ты идиот???', name);
    name = prompt('Введи своё имя !!')
}
alert(`Привет ${name} !!!`)

