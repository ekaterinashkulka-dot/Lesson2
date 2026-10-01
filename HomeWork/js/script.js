// Якщо змінна більше нуля - виведіть true, менше - false

//Перевірте це на варіантах  1, 0, -3.

// const number = 1;
// if (number >= 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// true

// const number = 0;
// if (number >= 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// true

// const number = -3;
// if (number >= 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// false

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// const value = "test";
// if (value == "test") {
//   console.log(true);
// }

// true

// const value = "qwerty";
// if (value == "test") {
//   console.log(true);
// }

// const value = true;
// if (value == "test") {
//   console.log(true);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// const value = 1;
// if (value >= 10) {
//   console.log(value - 5);
// } else {
//   console.log(value + 5);
// }

// 6

// const value = 10;
// if (value >= 10) {
//   console.log(value - 5);
// } else {
//   console.log(value + 5);
// }

// 5

// const value = 13;
// if (value >= 10) {
//   console.log(value - 5);12

// } else {
//   console.log(value + 5);
// }

// 8

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const num = prompt("Введіть число");
// if (num == 1) {
//   console.log("січень");
// } else if (num == 2) {
//   console.log("лютий");
// } else if (num == 3) {
//   console.log("березень");
// } else if (num == 4) {
//   console.log("квітень");
// } else if (num == 5) {
//   console.log("травень");
// } else if (num == 6) {
//   console.log("червень");
// } else if (num == 7) {
//   console.log("липень");
// } else if (num == 8) {
//   console.log("серпень");
// } else if (num == 9) {
//   console.log("вересень");
// } else if (num == 10) {
//   console.log("жовтень");
// } else if (num == 11) {
//   console.log("листопад");
// } else if (num == 12) {
//   console.log("грудень");
// }

// або

// const num = prompt("Введіть число");
// let month;
// switch (Number(num)) {
//   case 1:
//     month = "january";
//     alert(`the Month of ${month}`);
//     break;
//   case 2:
//     month = "february";
//     alert(`the Month of ${month}`);
//     break;
//   case 3:
//     month = "march";
//     alert(`the Month of ${month}`);
//     break;
//   case 4:
//     month = "april";
//     alert(`the Month of ${month}`);
//     break;
//   case 5:
//     month = "may";
//     alert(`the Month of ${month}`);
//     break;
//   case 6:
//     month = "june";
//     alert(`the Month of ${month}`);
//     break;
//   case 7:
//     month = "july";
//     alert(`the Month of ${month}`);
//     break;
//   case 8:
//     month = "august";
//     alert(`the Month of ${month}`);
//     break;
//   case 9:
//     month = "september";
//     alert(`the Month of ${month}`);
//     break;
//   case 10:
//     month = "october";
//     alert(`the Month of ${month}`);
//     break;
//   case 11:
//     month = "november";
//     alert(`the Month of ${month}`);
//     break;
//   case 12:
//     month = "december";
//     alert(`the Month of ${month}`);
//     break;
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const num = prompt("Введіть тризначне число");
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
// alert(sum);
