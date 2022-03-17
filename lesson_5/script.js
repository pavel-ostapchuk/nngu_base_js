"use strict";
// Function Declaration - объявление функции
// Function Expression - функциональное выражение
// Arrow Function - стрелочная функция

// function showMessage() {
//   console.log("hello");
// }

// showMessage();

// let user;

// function greetUser(name = "гость") {
//   console.log(`Привет, ${name}`);
// }

// greetUser(user);

// const user = {
//   name: "Vasya",
//   age: 18,
// };

// // Function Declaration
// function checkAccess(age) {
//   if (age < 18) {
//     showDeniedMsg();
//   } else {
//     showAllowedMsg();
//   }
// }

// // Function Expression
// const showAllowedMsg = function () {
//   console.log("Доступ разрешен");
// };

// const showDeniedMsg = function () {
//   console.log("Доступ запрещен");
// };

// checkAccess(user.age);

//Директива return

// function calcValue(a, b) {
//   const result = a + b;
//   return result;
// }

// const result = calcValue(3, 5);

// console.log(result);

// const user = {
//   name: "Vasya",
// };

// const greetMsg = "Привет";

// function getName(user) {
//   return user.name || "гость";
// }

// function sayHi(text, name = getName()) {
//   console.log(`${text}, ${name}!`);
// }

// sayHi(greetMsg, getName(user));

// Функция, используемая внутри функции, называется callback

// function showMsg() {
//   const myVar = 1;
//   console.log(myVar);
// }

// showMsg();

// console.log(myVar);

// const calcPower = function (num, power = 1) {
//   return num ** power;
// };

// const result = calcPower(2, 3);

// console.log(result);

// const myArray = [];

// const calcAverageValue = function (arr) {
//   if (!arr.length) {
//     return "Пустой массив";
//   }
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// };

// console.log(calcAverageValue(myArray));

// Arrow functions

// function calcValue(a, b) {
//   const result = a + b;
//   return result;
// }

// const calcValue = (a, b) => a + b;
// то же самое, что:
// const calcValue = (a, b) => {
//   const result = a + b;
//   return result;
// };

// const result = calcValue(3, 5);
// console.log(result);

//1
// const msgsAmount = 10;
// const message = "Сообщение";

// const showMessage = (msg, count) => {
//   for (let i = 1; i <= count; i++) {
//     console.log(`${msg} ${count}`);
//   }
// };

// showMessage(message, msgsAmount);

//2

// const myChar = "н";

// const isMyCharVowel = (char) => {
//   const vowels = "ауоыэяюёие";

//   if (vowels.includes(char)) {
//     return "Гласная!";
//   }

//   return "Не гласная!";
// };

// console.log(isMyCharVowel(myChar));

// const num = 2;

// switch (num) {
//   case 1:
//     result = "Зима";
//     break;
//   case 2:
//     result = "Весна";
//     break;
//   case 3:
//     result = "Лето";
//     break;
//   case 4:
//     result = "Осень";
//     break;
// }
// console.log(result);

const a = 1;
let b = "";

if (a === 1) {
  b = "да";
  return b;
}
console.log(b);
