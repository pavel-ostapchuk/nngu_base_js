//1.
// const myArr = [1, 2, 4, 6, -1, -4];

// const calcPositiveElements = (arr) => {
//   const result = arr
//     .filter((el) => el > 0)
//     .reduce((acc, current) => acc + current);

//   return result;
// };

// console.log(calcPositiveElements(myArr));

//2.

// const myArr = [1, 2, 4, 4, 10, 15, 13, 13, 12, 1, 4];

// const getUniqueElements = (arr) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

// console.log(getUniqueElements(myArr));

// 3.

// const myArr1 = [1, 2, 3, 4, 5, 6];
// const myArr2 = [1, 2, 3, 4, 5, 6];

// const isArraysEqual = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }

//   return true;
// };

// console.log(isArraysEqual(myArr1, myArr2));

// 1.

// const myObj = { name: "Vasya" };

// const newObj = Object.assign({}, myObj);
// const newObj = { ...myObj };
// newObj.name = "Petya";
// console.log(myObj, newObj);

// 2.

// const countArgsSum = (...args) => {
//   let result = 0;

//   for (key in args) {
//     if (key % 2 !== 0) {
//       result += args[key];
//     }
//   }
//   return result;
// };

// console.log(countArgsSum(1, 2, 3, 4));

// 3.

// const getUniqueElements = (arr) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

// const myArr1 = [1, 4, 5, 10, 22, 6, 4];
// const myArr2 = [1, 6, 8, 3, 4, 4];

// const getCommonElements = (arr1, arr2) => {
//   const newArr = [];

//   if (arr1.length >= arr1.length) {
//     for (variable of arr1) {
//       arr2.includes(variable) && newArr.push(variable);
//     }
//     return getUniqueElements(newArr);
//   }

//   for (variable of arr2) {
//     arr1.includes(variable) && newArr.push(variable);
//   }
//   return getUniqueElements(newArr);
// };

// console.log(getCommonElements(myArr1, myArr2));
