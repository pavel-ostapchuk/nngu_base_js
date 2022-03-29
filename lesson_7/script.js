// const myArr = [1, () => console.log("123"), "string"];

// console.log(myArr);
// console.log(typeof myArr);
// console.log(Array.isArray(myArr));

// const newArray = new Array(5);
// newArray[6] = 1;
// console.log(newArray);

// const user = {
//   id: 1,
//   name: "Vasya",
//   data: [1, 2, 3, 4],
// };

// const users = [
//   { id: 1, name: "Vasya" },
//   { id: 2, name: "Petya" },
//   { id: 3, name: "Lena" },
//   { id: 4, name: "Olga" },
//   { id: 5, name: "Gennadiy" },
// ];

// Многомерные массивы

// const myArr = [
//   ["один", "два"], // индекс 0
//   ["три", "четыре"], // иднекс 1
//   ["пять", "шесть", ["семь", "восемь"]], // индекс 2
// ];

// console.log(myArr[2][2]);

// const myArr = [1, 2, 3, 4, 5];

// myArr[1000] = 10;

// console.log(myArr);

// const myArr = ["один", "два", "три", "четыре", "пять"];

// myArr.push("шесть", "семь"); //добавляет элемент в конец массива
// myArr.unshift("ноль"); //добавляет элемент в начала массива
// myArr.shift(); //удаляет элемент и начала массива (с индексом 0)
// myArr.pop(); // удаляет элемент в конце массива

// myArr.reverse().push("ноль").reverse();

// reversedArray.reverse();

// console.log(myArr);

// Полезные методы массивов

// find

// const myArr = ["один", "два", "три", "четыре"];
// const users = [
//   { id: 1, name: "Vasya" },
//   { id: 2, name: "Olga" },
//   { id: 3, name: "Igor" },
//   { id: 4, name: "Lena" },
//   { id: 5, name: "Petya" },
// ];

// const foundUser = users.find((user) => user.id === 1);

// let foundItem = "";

// for (let i = 0; i < myArr.length; i++) {
//   if (myArr[i] === "два") foundItem = myArr[i];
// }

// console.log(foundUser);

// filter

// const users = [
//   { id: 1, name: "Vasya", isAdmin: false },
//   { id: 2, name: "Olga", isAdmin: false },
//   { id: 3, name: "Igor", isAdmin: false },
//   { id: 4, name: "Lena", isAdmin: true },
//   { id: 5, name: "Petya", isAdmin: false },
// ];

// const numbers = [1, 2, 3, 4, 5];
// const notAdminUsers = users.filter((user) => !user.isAdmin);

// let nonAdminUsers = [];

// for (let i = 0; i < users.length; i++) {
//   if (!users[i].isAdmin) nonAdminUsers.push(users[i]);
// }
// console.log(nonAdminUsers);

// const evenNumbersArr = numbers.filter((number) => number % 2 === 0);

// console.log(evenNumbersArr);

// map

// const users = [
//   { id: 1, name: "Vasya", isAdmin: false },
//   { id: 2, name: "Olga", isAdmin: false },
//   { id: 3, name: "Igor", isAdmin: false },
//   { id: 4, name: "Lena", isAdmin: true },
//   { id: 5, name: "Petya", isAdmin: false },
// ];

// const modifiedUsers = users.map((user) => {
//   return { ID: user.id, userName: user.name };
// });

// console.log(modifiedUsers);

// forEach

// const users = [
//   { id: 1, name: "Vasya", isAdmin: false },
//   { id: 2, name: "Olga", isAdmin: false },
//   { id: 3, name: "Igor", isAdmin: false },
//   { id: 4, name: "Lena", isAdmin: true },
//   { id: 5, name: "Petya", isAdmin: false },
// ];
