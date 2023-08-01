import _ from "lodash";

//Проверка наличия свойства объекта:
const object = { a: 1, b: 2 };
let res = _.has(object, "a");
// true
let res2 = _.has(object, "c");
// false
console.log(res, res2);

// Проверка пустоты коллекции:
const array = [1, 2, 3];
_.isEmpty(array);
// false

const emptyArray = [];
_.isEmpty(emptyArray);
// true

// Сортировка массива объектов по полю:

const users = [
  { name: "Alice", age: 26 },
  { name: "Bob", age: 24 },
  { name: "Charlie", age: 28 },
];

const sortedUsers = _.sortBy(users, "age");
console.log(sortedUsers);
/*
   [
     { name: 'Bob', age: 24 },
     { name: 'Alice', age: 26 },
     { name: 'Charlie', age: 28 }
   ]
   */

// Объединение двух объектов:

const object1 = { a: 1 };
const object2 = { b: 2 };

const mergedObject = _.merge(object1, object2);
console.log(mergedObject);
// { a: 1, b: 2 }

// Получение уникальных значений из массива:

const array2 = [1, 2, 3, 2, 4, 1, 3];

const uniqueArray = _.uniq(array2);
console.log(uniqueArray);
// [1, 2, 3, 4]

// Фильтрация массива объектов по условию:
const users2 = [
  { name: "Alice", age: 26 },
  { name: "Bob", age: 24 },
  { name: "Charlie", age: 28 },
];

const filteredUsers = _.filter(users2, { age: 26 });
console.log(filteredUsers);
/*
   [
     { name: 'Alice', age: 26 }
   ]
   */

// Обратный порядок элементов массива:

const array3 = [1, 2, 3, 4, 5];

const reversedArray = _.reverse(array3);
console.log(reversedArray);
// [5, 4, 3, 2, 1]

// Сумма значений числового массива:

const array4 = [1, 2, 3, 4, 5];

const sum = _.sum(array4);
console.log(sum);
// 15

// Генерация уникального идентификатора:

const uniqueId = _.uniqueId();
console.log(uniqueId);
// '1'

// Группировка объектов массива по полю:

const users3 = [
  { name: "Alice", age: 26 },
  { name: "Bob", age: 24 },
  { name: "Charlie", age: 28 },
];

const groupedUsers = _.groupBy(users3, "age");
console.log(groupedUsers);
/*
    {
      '24': [{ name: 'Bob', age: 24 }],
      '26': [{ name: 'Alice', age: 26 }],
      '28': [{ name: 'Charlie', age: 28 }]
    }
    */

// Проверка наличия элемента в массиве:

const array5 = [1, 2, 3, 4, 5];

const hasElement = _.includes(array5, 3);
console.log(hasElement);
// true

const hasElement2 = _.includes(array5, 6);
console.log(hasElement2);
// false

// Объединение массивов:

const array6 = [1, 2, 3];
const array7 = [4, 5, 6];

const mergedArray = _.concat(array6, array7);
console.log(mergedArray);
// [1, 2, 3, 4, 5, 6]

// Обрезка массива:

const array8 = [1, 2, 3, 4, 5];

const slicedArray = _.slice(array8, 1, 3);
console.log(slicedArray);
// [2, 3]

// Поиск максимального/минимального значения в массиве:

const array9 = [1, 5, 3, 2, 4];

const maxNum = _.max(array9);
console.log(maxNum);
// 5

const minNum = _.min(array9);
console.log(minNum);
// 1

// Количество элементов, удовлетворяющих условию:

const array10 = [1, 2, 3, 4, 5];

const count = _.countBy(array10, (num) => num > 2);
console.log(count);
// { false: 2, true: 3 }

// Объединение объектов в один:

const object4 = { a: 1 };
const object5 = { b: 2 };
const object6 = { c: 3 };

const mergedObject2 = _.assign({}, object4, object5, object6);
console.log(mergedObject2);
// { a: 1, b: 2, c: 3 }

// Проверка равенства двух объектов:

const object7 = { a: 1, b: 2 };
const object8 = { a: 1, b: 2 };

const isEqual = _.isEqual(object7, object8);
console.log(isEqual);
// true

// Фильтрация массива с использованием функции-предиката:

const array11 = [1, 2, 3, 4, 5];

const filteredArray = _.filter(array11, (num) => num > 3);
console.log(filteredArray);
// [4, 5]

// Разбиение строки на подстроки по разделителю:

const string = "Hello, World!";

const splitString = _.split(string, " ");
console.log(splitString);
// ['Hello,', 'World!']

// Группировка элементов массива по условию:

const array12 = [1, 2, 3, 4, 5];

const groupedArray = _.groupBy(array12, (num) =>
  num % 2 === 0 ? "even" : "odd"
);
console.log(groupedArray);
// { odd: [1, 3, 5], even: [2, 4] }

// Поиск первого элемента, удовлетворяющего условию:

const array13 = [1, 2, 3, 4, 5];

const foundElement = _.find(array13, (num) => num > 3);
console.log(foundElement);
// 4

// Перевод строки в верхний/нижний регистр:

const string2 = "Hello, World!";

const upperCaseString = _.toUpper(string2);
console.log(upperCaseString);
// 'HELLO, WORLD!'

const lowerCaseString = _.toLower(string);
console.log(lowerCaseString);
// 'hello, world!'

// Проверка, является ли значение массивом:

const array14 = [1, 2, 3];

const isArray = _.isArray(array14);
console.log(isArray);
// true

// Генерация случайного числа в заданном диапазоне:

const randomNum = _.random(1, 10);
console.log(randomNum);
// случайное число от 1 до 10

//Удаление элемента из массива по индексу:

const array16 = [1, 2, 3, 4, 5];

_.remove(array16, (num, index) => index === 2);
console.log(array16);
// [1, 2, 4, 5]

// Подсчет количества элементов с использованием функции-предиката:

const array17 = [1, 2, 3, 4, 5];

const count2 = _.countBy(array17, (num) => (num % 2 === 0 ? "even" : "odd"));
console.log(count2);
// { odd: 3, even: 2 }

// Получение подмассива из массива по условию:

const array18 = [1, 2, 3, 4, 5];

const filteredArray2 = _.takeWhile(array18, (num) => num < 4);
console.log(filteredArray2);
// [1, 2, 3]

// Получение случайного элемента из массива:

const array20 = [1, 2, 3, 4, 5];

const randomElement = _.sample(array20);
console.log(randomElement);
// случайный элемент из массива

// Проверка, все ли элементы массива удовлетворяют условию:

const array21 = [1, 2, 3, 4, 5];

const allPass = _.every(array21, (num) => num > 0);
console.log(allPass);
// true

const allEven = _.every(array21, (num) => num % 2 === 0);
console.log(allEven);
// false

// Проверка, хотя бы один элемент массива удовлетворяет условию:

const array22 = [1, 2, 3, 4, 5];

const anyPass = _.some(array22, (num) => num > 3);
console.log(anyPass);
// true

const anyEven = _.some(array22, (num) => num % 2 === 0);
console.log(anyEven);
// true

// Клонирование объекта:

const object3 = { a: 1, b: 2 };

const clone = _.clone(object3);
console.log(clone);
// { a: 1, b: 2 }

// Проверка, является ли значение числом:

const number = 123;

const isNumber = _.isNumber(number);
console.log(isNumber);
// true

// Проверка, является ли значение функцией:

const func = () => {};

const isFunction = _.isFunction(func);
console.log(isFunction);
// true

// Удаление свойства из объекта:

const object9 = { a: 1, b: 2 };

_.unset(object9, "b");
console.log(object9);
// { a: 1 }

//Разбиение массива на части определенного размера:

const array23 = [1, 2, 3, 4, 5, 6, 7];

const chunkedArray = _.chunk(array23, 3);
console.log(chunkedArray);
// [[1, 2, 3], [4, 5, 6], [7]]

// Генерация рандомного цвета:

const randomColor = _.sample(["red", "blue", "green"]);
console.log(randomColor);
// случайный цвет из списка

// Группировка объектов массива по нескольким полям:

const users4 = [
  { name: "Alice", age: 26, gender: "female" },
  { name: "Bob", age: 24, gender: "male" },
  { name: "Charlie", age: 28, gender: "male" },
  { name: "Daisy", age: 26, gender: "female" },
];

const groupedUsers2 = _.groupBy(users4, ["age", "gender"]);
console.log(groupedUsers2);
/*
    {
      '26': {
        'female': [{ name: 'Alice', age: 26, gender: 'female' }],
        'male': [{ name: 'Daisy', age: 26, gender: 'female' }]
      },
      '24': {
        'male': [{ name: 'Bob', age: 24, gender: 'male' }]
      },
      '28': {
        'male': [{ name: 'Charlie', age: 28, gender: 'male' }]
      }
    }
    */

// Подсчет суммы значений определенного поля в массиве объектов:

const users5 = [
  { name: "Alice", age: 26, salary: 2500 },
  { name: "Bob", age: 25, salary: 3000 },
  { name: "Charlie", age: 28, salary: 4000 },
];

const totalSalary = _.sumBy(users5, "salary");
console.log(totalSalary);
// 9500

//Удаление повторяющихся элементов из массива:

const array24 = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray2 = _.uniq(array24);
console.log(uniqueArray2);
// [1, 2, 3, 4, 5]

// Получение первого элемента массива:

const array25 = [1, 2, 3, 4, 5];

const firstElement = _.head(array25);
console.log(firstElement);
// 1

// Получение последнего элемента массива:

const array26 = [1, 2, 3, 4, 5];

const lastElement = _.last(array26);
console.log(lastElement);
// 5

// Выбор случайной строки из массива строк:

const array27 = ["hello", "world", "lodash"];

const randomString = _.sample(array27);
console.log(randomString);
// случайная строка из массива
