'use strict';

// WeakMap и WeakSet автоматически удаляют элементы если их удалили

// В WeakMap присутствуют только следующие методы:
// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // работает (объект в качестве ключа)

// нельзя использовать строку в качестве ключа
// weakMap.set("test", "Whoops"); // Ошибка, потому что "test" не объект