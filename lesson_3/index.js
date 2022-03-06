// Примитивные типы данных:

// Number
// console.log(1 / 0);

// console.log(1); NaN = Not a Number (не число), но тип NaN = число

// Оператор typeof показывает тип данных, указанный после typeof
// Оператор typeof показывает тип данных, указанный после typeof
// Оператор typeof показывает тип данных, указанный после typeof
// Оператор typeof показывает тип данных, указанный после typeof
// Оператор typeof показывает тип данных, указанный после typeof
// Оператор typeof показывает тип данных, указанный после typeof
// Оператор typeof показывает тип данных, указанный после typeof
// Оператор typeof показывает тип данных, указанный после typeof

// String

// const myString = "строка";

// const anotherString = 'текст: "текст" текст';

// const templateString = `шаблонная строка ${anotherString}`;

// console.log(templateString);

// Boolean

// const isAdmin = true;
// const isUser = false;

// Null
// const emptyVariable = null;

// undefined
// const userName ;
// console.log(userName);

// Непримитивные типы данных
// Object - объект

// const someName = "Petya";

// const user = {
//   Name: someName,
//   lastName: "Inanov",
//   age: 23,
//   citizenship: "Russia",
// };

// const abrakatabra = user.Name;

// console.log(abrakatabra);

// Оператор typeof

// typeof null - всегда объект! Ошибка JS

// console.log(typeof null);

// Преобразование типов данных
// Строковое преобразование

// const myVar = true;

// const myVarToSring = String(myVar);
// console.log(myVarToSring);

// Численное преобразование

// const myVar = "aoe123";

// const myVarToNumber = +myVar;

// console.log(myVarToNumber);

// Логическое преобразование

// const myVar = "0";

// console.log(!!myVar);

// Математические операторы
// Бинарный плюс

// const myNumber = 1;
// const newNumber = 2;
// const myString = "строка";

// console.log(myNumber + myString);

// Сравнение строк
// const string1 = "сТрока";
// const string2 = "солнце";

// console.log(string1 > string2);

// unicode

// const userTypes = {
//   admin: "admin",
//   user: "user",
//   teacher: "teacher",
//   contentManager: "contentManager",
// };

// const { admin } = userTypes;

// const serverDataUserType = "user";

// if (serverDataUserType === userTypes.admin) {
//   console.log("показать весь контент");
// } else {
//   console.log("показать ограниченный контент");
// }

// const myNumber = 1;
// const myString = "1";

// console.log(myNumber == myString);
// console.log(" \t \n" - 2);

// console.log("");

// const myString = "vasya";

// console.log(myString.split(""));

// ---------------------------------------------------------------- HOMEWORK + повторение ---------------------------------------------------------------- //

// Почему нельзя использовать var?
// Разница let/const?
// Можно ли менять поля в объекте, который объявлен через const? Как это сделать?

// Number
console.log(1, typeof 1);
console.log(5 - "2", typeof (5 - "2"));
console.log(5 - "123abc", typeof (5 - "123abc"));

console.log("\n");

// BigInt
console.log(
  BigInt(0b11111111111111111111111111111111111111111111111111111),
  typeof BigInt(0b11111111111111111111111111111111111111111111111111111)
);

console.log("\n");

//String
console.log("Строка", typeof "Строка");
console.log("2" + 3, typeof ("2" + 3));

console.log("\n");

//Boolean
console.log(true, typeof true);
console.log(!0, typeof !0);
console.log(!!2, typeof !!2);
console.log(Boolean(""), typeof Boolean(""));

console.log("\n");

//Null, undefined
console.log(null, typeof null);
console.log(null + 0, typeof (null + 0));
console.log(null - "2", typeof (null - "2"));
console.log(null + "123", typeof (null + "123"));
console.log(null === undefined);
console.log(null == undefined);

console.log("\n");

//Symblol
console.log(Symbol("123"), typeof Symbol("123"));

console.log("\n");

//Object
const newUser = {
  name: "Vasya",
  age: 23,
  role: {
    id: 1,
    type: "admin",
  },
};

console.log(typeof newUser);
newUser.type = "normal_user";
console.log(newUser);

// Сравнение типов

console.log("кот" > "код");
console.log("2" + 2 * "2");
console.log(undefined == null);
console.log(undefined != null);
console.log(null == 0);
console.log(2 > "3");
console.log(null - false + true);
console.log(1 / "l");
console.log("2" * "3");
console.log(4 + 5 + "O");
console.log("l" + 4 + 5);
console.log("4" - 2);
console.log("4" - "4x");
console.log("23" == 23);
console.log(null == false);
console.log(" -4 " / 0 + 1);
console.log(null + 1);
console.log(undefined + null);
console.log(1 === "1");
console.log("2" > 10);
console.log(NaN == undefined);

console.log(undefined === undefined);
