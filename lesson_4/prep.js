// const intervalOne = 5;
// const intervalTwo = 8;
// const intervalThree = 18;

// if (intervalOne > intervalTwo && intervalOne > intervalThree) {
//   console.log(`${intervalOne} - самый большой отрезок`);
// } else if (intervalTwo > intervalOne && intervalTwo > intervalThree) {
//   console.log(`${intervalTwo} - самый большой отрезок`);
// } else if (intervalThree > intervalOne && intervalThree > intervalTwo) {
//   console.log(`${intervalThree} - самый большой отрезок`);
// }

// console.log(null || 0 || "" || undefined);
// console.log("яблоко" &&ща true && null && 1);
// console.log(0 || (true && "false") || null);
// console.log((0 && true) || ("false" && null));
// console.log(!0 && !!1);
// console.log(!(null || (!"апельсин" && true)));

//1

// let interationText = "Итерация";

// let counter = 0;
// const limit = 5;

// while (counter <= limit) {
//   console.log(`${interationText} - ${counter}`);
//   counter++;
// }

// do {
//   console.log(`${interationText} - ${counter}`);
//   counter++;
// } while (counter <= limit);

// for (let counter = 0; counter <= limit; counter++) {
//   console.log(`${interationText} - ${counter}`);
// }

//2

// let carsAmount = 60;
// const minCarsAmount = 10;

// for (let i = 1; carsAmount > minCarsAmount; i++) {
//   carsAmount /= 2;

//   if (carsAmount < minCarsAmount) {
//     console.log(`На ${3} день`);
//   }
// }

//3

// год, номер которого кратен 400, — високосный;
// остальные годы, номер которых кратен 100, — НЕвисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
// остальные годы, номер которых кратен 4, — високосные[5].

const startYear = 1800;
const endYear = 2020;

let leapYearsAmount = 0;

const firstSapceTripYear = 1961;

for (let i = startYear; i <= endYear; i++) {
  if (i === firstSapceTripYear) {
    console.log(
      `${firstSapceTripYear} - год, когда человек первый раз полетел в космос`
    );
    console.log(`Количество итераций - ${i - startYear}`);
    return;
  }
}

// for (let i = startYear; i <= endYear; i++) {
//   if (i % 400 === 0 || (i % 100 !== 0 && i % 4 === 0)) {
//     console.log(i);
//     leapYearsAmount += 1;
//   }

//   if (i === endYear) {
//     console.log(
//       `Количество высокосных годов в промежутке - ${leapYearsAmount}`
//     );
//     console.log(`Количество итераций - ${i - startYear}`);
//   }
// }
