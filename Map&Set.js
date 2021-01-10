'use strict';


// MAP

// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

let map = new Map([
  ['orange', 'fruit'],
  ['pumpkin', 'vegetable']
]);
// or like this ^
map.set("cake", "bakery");    // строка в качестве ключа
map.set(1, "number");      // цифра как ключ
map.set(true, "bool");  // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"
console.log(map.size); // 3
console.log(map); // collection {"orange" => "fruit", "pumpin" => "vegetable", "1" => "str1", 1 => "num1", true => "bool1"}
console.log(typeof map); // object

// if you need to convert collection to simple oject you can make it like this use Object.fromEntries()
let obj = Object.fromEntries(map);
console.log(obj); // {1: "num1", orange: "fruit", pumpin: "vegetable", true: "bool1"}


// SET

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let mark = 'Mark';

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
set.add(mark);

// set хранит только 4 уникальных значения
console.log(set); // {{…}, {…}, {…}, "Mark"}
