// Lab 1.1
// function sayHelloWorld() {
//   alert('Hello World');
// }

// sayHelloWorld();

// Lab 1.2
// const input = prompt('Enter your name');
// const input2 = prompt('Enter your name too')

// function sayHelloUser() {
//   alert(`Hello ${input}`);
// }

// function sayHelloUser2() {
//   alert(`Hello ${input2}`);
// }

// sayHelloUser();
// sayHelloUser2();

// function sayHelloUser(name) {
//   alert(`Hello ${name}`);
// }

// sayHelloUser(input);
// sayHelloUser(input2)

// Lab 1.6
// console.log(multiply(2, 3));

// function multiply(a, b) {
//   return a * b;
// }

// Lab 1.7
// วิธีที่ 1
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// วิธีที่ 2
// function min(a, b) {
//   if (a < b) return a;
//   return b;
// }
// วิธีที่ 3
// function min(a, b) {
//   return a < b ? a : b;
// }

// Lab 1.8
// วิธีที่ 1
// function login(username, password) {
//   if (username === 'admin' && password === 'P@ssw0rd') return true;
//   return false;
// }
// // วิธีที่ 2
// function login(username, password) {
//   return username === 'admin' && password === 'P@ssw0rd';
// }

// Lab 1.9
// function isPrime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// }

// function logPrimeNumber(number) {
//   for (let i = 2; i <= number; i++) {
//     if (isPrime(i)) console.log(i);
//   }
// }

// Lab 1.12
// function getLongText() {
//   return (
//     'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
// }

// console.log(getLongText()); // *

// Lab 1.13
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// function checkAge(age) {
//   if (age > 18) return true;
//   return confirm('Did parents allow you?');
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Did parents allow you?');
// }

// function checkAge(age) {
//   return age > 18 || confirm('Did parents allow you?');
// }

// Lab 1.14
// function max(a, b, c, d) {
//   if (a === undefined) {
//     return;
//   } else {
//     if (b === undefined) {
//       return isNumeric(a) ? +a : NaN;
//     } else {
//       if (c === undefined) {
//         return isNumeric(a) && isNumeric(b) ? (a > b ? a : b) : NaN;
//       } else {
//         if (d === undefined) {
//           if (isNumeric(a) && isNumeric(b) && isNumeric(c)) {
//             if (a > b && a > c) return a;
//             return b > c ? b : c;
//           } else {
//             return NaN;
//           }
//         } else {
//           if (isNumeric(a) && isNumeric(b) && isNumeric(c) && isNumeric(d)) {
//             if (a > b && a > c && a > d) return a;
//             if (b > c && b > d) return b;
//             return c > d ? c : d;
//           } else {
//             return NaN;
//           }
//         }
//       }
//     }
//   }
// }

// function isNumeric(number) {
//   return !(!number || number.trim() === '' || !+number);
// }

// ลอง log ฟังก์ชันแบบมีวงเล็บตามหลังชื่อฟังก์ชันกับไม่มีวงเล็บตามหลังชื่อฟังก์ชัน
// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum); // (*)
// console.log(sum(2, 5)); // (**)

// ลองทดสอบ callback function
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// function showOk() {
//   alert('You agreed.');
// }
// function showCancel() {
//   alert('You canceled the execution.');
// }
// // functions showOk, showCancel are passed as arguments to ask
// ask('Do you agree?', showOk, showCancel);

// Lab 2.1
// const multiply = function (a, b) {
//   return a * b;
// };

// Lab 2.3
// const checkPermission = function (role, success, reject) {
//   if (role === 'ADMIN') return success();
//   return reject();
// };

// checkPermission(
//   'ADMIN',
//   function () {
//     alert('ACCESS GRANTED');
//   },
//   function () {
//     alert('ACCESS DENIED');
//   }
// );

// Lab 2.4
// function magic() {
//   return function (x) {
//     return x * 42;
//   };
// }
// const answer = magic();
// // answer = function(x) {
// //   return x * 42;
// // }

// console.log(answer); // *
// console.log(answer(1337)); // **
// console.log(magic(1337)(42)); // ***

// console.log(multiply(17, 7));

// Lab 3.1
// const multiply = (a, b) => a * b;
// console.log(multiply(23, 9));

// Lab 3.6
// const convertDayToSecond = day => day * 24 * 60 * 60;

// Lab 3.7
// const modSeven = number => (number % 7 === 0 ? true : false);
// shorter version
// const modSeven = number => number % 7 === 0;

// Lab 3.8
// const calcFootballPoint = (win, draw) => win * 3 + draw;

// // Lab 3.9
// const isLeapYear = year => {
//   if (year % 100 === 0) {
//     return year % 400 === 0;
//   }
//   return year % 4 === 0;
// };

// Lab 3.10
// const calcAge = birthYear => {
//   let day = 0;
//   for (let i = birthYear; i <= 2020; i++) {
//     day += isLeapYear(i) ? 366 : 365;
//   }
//   return day;
// };

// console.log(calcAge(2019));

// Lab 3.11
// const convertFarenheitToCelsius = fah => ((fah - 32) * 5) / 9;

// Lab 3.12
// const factorial = n => {
//   let result = 1;
//   for (let i = n; i > 0; i--) {
//     result *= i;
//   }
//   return result;
// };

// const factorial = n => {
//   if (n === 1 || n === 0) return 1;
//   return n * factorial(n - 1);
// };

// console.log(factorial(5));

// การประกาศ Object
// const brand = 'Mercedez Benz';

// const car = {
//   brand, // brand: brand
//   color: 'Blue',
//   model: 'C220',
//   distributor: {
//     name: 'Benz Thonglor',
//     address: {
//       road: 'Sukhumvit',
//       district: 'Wattana',
//       province: 'Bangkok'
//     }
//   }
// };

// for in กับ key ของ object
// let i = 0;
// for (let key in car) {
//   console.log(`keyname: ${key} has value: ${car[key]}`);
//   i++;
// }

// car.distributor.address.province = 'Trat';

// car.price = 1000;
// console.log(car);

// car.color = 'Red';
// console.log(car);

// delete car.color;
// console.log(car);

// Object.assign and merge object
// const user = {};
// const permission1 = { canView: true };
// const permission2 = { canEdit: false };

// user = {
//   canView: true,
//   canEdit: false
// }

// Object.assign(user, permission1, permission2);
// first step merge permission1 เข้ากับ permission2
// result { canEdit: false, canView: true  }
// second step merge result เข้ากับ user แล้วเก็บไว้ใน user
// final result result { canEdit: false, canView: true  }

// this keyword demo
// const user = {
//   name: 'Earth',
//   introduce: function () {
//     alert(`Heloo. My name is ${this.name}`);
//   }
// };

// user.introduce();

// const admin = {
//   name: 'Admin'
// };

// admin.introduce = user.introduce;
// // admin.introduce();

// function sayHello() {
//   console.log(this);
// }

// sayHello();

// Lab 4.1
// const person = {
//   name: 'Earth',
//   age: 30,
//   gender: 'Male',
//   address: '75/5 Banthadthong Rd. Pathumwan Bangkok',
//   phoneNumber: '021121150'
// }

// Lab 4.2
// const user = {};
// user.name = 'John';
// user['surname'] = 'Doe';
// user.name = 'Matt';
// delete user.name;

// Lab 4.3
// function testObjectIsEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// Lab 4.4
// const calcSumSalaries = function (obj) {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// };

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// console.log(calcSumSalaries(salaries));
// console.log(calcSumSalaries({}));

// Lab 4.5
// const multiplyNumeric = (obj, num) => {
//   const result = {};
//   for (let key in obj) {
//     if (isNaN(obj[key])) {
//       result[key] = obj[key];
//     } else {
//       result[key] = obj[key] * num;
//     }
//   }
//   return result;
// };

// Lab 4.6
// const username = prompt('Enter username');
// const email = prompt('Enter email');
// const password = prompt('Enter password');

// const user = {
//   username: username,
//   email: email,
//   password: password
// };

// // shorthand
// const user = {
//   username,
//   email,
//   password
// };

// Lab 4.7
// let obj = {};

// while (1) {
//   const key = prompt('Enter key');
//   if (key === 'stop') break;
//   const value = prompt('Enter value');
//   if (value === 'stop') break;

//   if (key && key.trim()) {
//     obj[key] = value;
//   } else {
//     alert('Invalid key');
//   }
// }

// console.log(obj);

// Lab 4.8
// let fruits = {};

// while (1) {
//   const key = prompt('Enter fruit');
//   if (key === 'stop') break;
//   const value = prompt('Enter amount');
//   if (value === 'stop') break;

//   if (key && key.trim()) {
//     if (value > 1) {
//       fruits[`${key}s`] = value;
//     } else {
//       fruits[key] = value;
//     }
//   } else {
//     alert('Invalid key')
//   }
// }

// Lab 4.9
// const name = prompt('Enter product name');
// const amount = prompt('Enter amount');
// const price = prompt('Enter price');
// const discount = prompt('Enter discount');

// const product = {
//   name,
//   amount,
//   price
// };

// if (discount !== 0) {
//   product.discount = discount;
// }

// function calcNetPrice(obj) {
//   // ใช้ if
//   if (obj.discount) {
//     return (obj.price * obj.amount * (100 - obj.discount)) / 100;
//   }
//   return obj.price * obj.amount;
//   // ใช้ truthy value
//   // return obj.price * obj.amount * (100 - obj.discount || 0) / 100
// }

// console.log(calcNetPrice(product));

// Lab 4.10
// const employees = {
//   john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
//   peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
//   mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
//   sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
// };

// const name = prompt('Enter employee name');

// if (employees[name]) {
//   console.log(
//     `Name: ${name}, salary: ${employees[name].salary}, address: ${employees[name].address.district}, ${employees[name].address.province}`
//   );
// } else {
//   console.log('Not found');
// }
// result
// Name: john, salary: 1000, address: Ratchathewi, Bangkok
