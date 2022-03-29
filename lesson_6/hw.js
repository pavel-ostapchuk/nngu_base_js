// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// const isNumberInRange = (num) => {
//   if (num > 0 && num < 10) {
//     return true;
//   }
//   return false;
// };

// 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// const numsArray = [12, 2, -5, 9, 4];

// const newArr = [];

// for (let i = 0; i < numsArray.length; i++) {
//   if (isNumberInRange(numsArray[i])) {
//     newArr.push(numsArray[i]);
//   }
// }

// console.log(newArr);

// 10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// const getDigitsSum = (num) => {
//   const stringifiedNum = num.toString();
//   let result = 0;
//   for (let i = 0; i < stringifiedNum.length; i++) {
//     result += +stringifiedNum[i];
//   }

//   return result;
// };

// 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// const foundYears = [];

// for (let i = 1; i <= 2020; i++) {
//   if (getDigitsSum(i) === 13) {
//     foundYears.push(i);
//   }
// }

// 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// const isEven = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// };

// 13.  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// const myArr = [1, 4, 5, 2, 11, 23, 44, 50];
// const arrayOfEvenNums = [];

// for (let i = 0; i < myArr.length; i++) {
//   if (isEven(myArr[i])) {
//     arrayOfEvenNums.push(myArr[i]);
//   }
// }

// 14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// const getDivisors = (num) => {
//   let divisorsArray = [];

//   for (let i = num; i > 0; i--) {
//     if (num % i === 0) {
//       divisorsArray.push(i);
//     }
//   }

//   return divisorsArray;
// };

// 15. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// const myNum = 269949;

// const countRecJobs = (num) => {
//   let countRec = 0;

//   const testRecursion = (num) => {
//     const digitsSum = getDigitsSum(num);

//     if (digitsSum > 9) {
//       countRec += 1;
//       testRecursion(num - 1);
//       return `Рекурсия отработала: ${countRec}. ${digitsSum}`;
//     }
//     return digitsSum;
//   };

//   return testRecursion(num);
// };

// console.log(countRecJobs(myNum));

// 16. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.

// const isPalindrome = (str) => {
//   const strToLowerCase = str.toLowerCase();

//   const reversedStr = strToLowerCase.split("").reverse().join("");

//   if (strToLowerCase === reversedStr) {
//     return true;
//   }
//   return false;
// };

//Через цикл

// const newIsPalindrome = (str) => {
//   for (let firstIndex = 0, j = str.length - 1; i < j; i++, j--) {
//     if (str[i] != str[j]) return false;
//   }
//   return true;
// };

// 1
// const myFunc = (min, max) => {
//   return Math.random().toFixed(1) * (max - min) + min;
// };

// console.log(myFunc(2, 4));

// 2
// const isCharBig = (str, element) => {
//   if (!str[element]) {
//     return "ошибка";
//   }
//   console.log(str[element]);

//   if (str[element] === str[element].toUpperCase()) {
//     return true;
//   }
//   return true;
// };

// console.log(isCharBig("aweerwr", 2));

// const myConst = "aweo awo ea eak eq find oaw k awkea eoke find";

// const replaceFunc = (str) => {
//   return str.replaceAll("find", "hi");
// };

// console.log(replaceFunc(myConst));
