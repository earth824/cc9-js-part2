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
