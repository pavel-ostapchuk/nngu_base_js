// const goToThePlace = (place) => {
//   console.log(`Иду в ${place}! Хэхэй`);
// };

// const user = {
//   name: "Ivan",
//   age: 18,
//   goToUniversity: () => goToThePlace("универ"),
// };

// user.goToUniversity();

// const user = {
//   name: "Ivan",
//   age: 18,
// };

// user.education = "programmer";

// console.log(user);

// const myFavoriteFilm = {
//   name: "Pulp Fiction",
//   releaseYear: 1995,
//   director: "Tarantino",
//   country: "USA",
// };

// myFavoriteFilm.income = 1000000;
// myFavoriteFilm.showName = () => console.log(myFavoriteFilm.name);
// delete myFavoriteFilm.releaseYear;

// console.log(myFavoriteFilm);

// const myNumber = 10.126123;

// console.log(Object.getPrototypeOf(myNumber));

// console.log(myNumber.toFixed(2));

// parseInt - для целых числе
// parseFloat - для дробных чисел

// console.log(parseInt("12345a23"));
// console.log(parseFloat("12.345a23"));
// console.log(parseInt("123", 8));

// const myNumber = 123.32834879287947982437894237892;

// if (typeof myNumber === "number") console.log("Число!");
// if (isNaN(myNumber)) console.log(" Не число!");

// console.log(Math.ceil(myNumber)); // ceil = "потолок", то есть округление в большую сторну
// console.log(Math.floor(myNumber)); // floor = "пол", то есть округление в меньюшую сторону

// console.log(Math.random());

// const myArray = [1, 4, 10, 20, 14, 15];

// console.log(Math.max(...myArray)); // ...myArray - то же самое, что 1, 4, 10, 20 и так далее
// console.log(Math.min(...myArray));

// const myString = 'Вася вошел в класс и сказал: \u00A9 "привет всем"';
// console.log(myString);

// const myName = "  Vasya";
// console.log(myName);
// console.log(myName.trim()); // "схлопывает" пробелы по краям строки

// const myString = "with id";

// const idIndex = myString.indexOf("id");
// const newString = myString.slice(idIndex);

// const myString = "строка, это моя строка";
// const myFunc = (str, find, replace) => {
//   str[pos];
// };

// myFunc(myString, "строка", "машина");

//1.

// const myFunc = (min, max) => {
//   const result = Math.random() * (max - min) + min;
//   return result.toFixed();
// };

// console.log(myFunc(1, 20));

//2.

// const myStr = "сТрока";

// const isCharBig = (str, pos) => {
//   if (!str[pos]) {
//     return "Ошибка";
//   }

//   if (str[pos] === str[pos].toUpperCase()) {
//     return "Заглавная";
//   }
//   return "Не заглавная";
// };

// console.log(isCharBig(myStr, 10));

//3.

// const myConst = "awije aj wa ds word asokd word aks";

// const replaceFunc = (str, findValue, replaceValue) => {
//   return str.replaceAll(findValue, replaceValue);
// };

// const replaceAll = (str, subStr, replaceStr) => {
//   for (let i = 0; i < str.length; i++) {
//     let foundIndex = str.indexOf(subStr);
//     if (foundIndex === -1) return str;
//     str =
//       str.slice(0, foundIndex) +
//       replaceStr +
//       str.slice(foundIndex + subStr.length);
//   }
//   return str;
// };

// console.log(replaceAll("widget for id", "id", "xxx"));
