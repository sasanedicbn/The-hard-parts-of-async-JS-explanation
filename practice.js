// // HIGHT ORDER FUNCTION EXAMPLES
// // 1. FUNCTION AS ARGUMENT
// const numbers = [1, 2, 3, 4, 5];

// const doubleFN = (x) => x * 2;
// const doubledNumbers = numbers.map(doubleFN);

// // 2. FUNCTION RETURN FUNCTION

// // 3. HIHGT ORDER FUNCTION => CALLBACK
// const fetchData = (callback) => {
//   setTimeout(() => {
//     const data = { name: "Sasa", coutry: "SRB" };
//     callback(data);
//   }, 2000);
// };

// const callbackFn = (user) => {
//   return console.log(user);
// };

// fetchData(callbackFn);

// 4.
// function createMultiplier(multiplier) {
//   return function unutrasnja(number) {
//     return number * multiplier;
//   };
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double);
// console.log(triple(5));

// =================================================================
// HOISTING

//-----hoisting with var

// console.log(x);  => undefined
// var x = 5; => inicijalizovano
// console.log(x); => 5

//------hoisting with let and const

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// console.log(y); // 10

//-------hoisting with classic function

// pozdrav(); // "Zdravo!"

// function pozdrav() {
//     console.log("Zdravo!");
// }

// ======== hoisting with function expression

// pozdrav(); // TypeError: pozdrav is not a function

// var pozdrav = function() {
//     console.log("Zdravo!");
// };

// ======== redosled hoistinga
//  prvo idu funkcije pa onda varijable, ako imaju isti naziv npr ponovo prednost imaju funkcije
// console.log(typeof mojaFunkcija); // "function"

// var mojaFunkcija = 5;

// function mojaFunkcija() {
//     console.log("Ovo je funkcija!");
// }

// console.log(typeof mojaFunkcija); // "number"

// Hoisting u blokovskim opsezima (let i const su fazon taj blokovski opsezi)

// if (true) {
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
//     let x = 10;
// }

// DEEP AND SHALLOW COPY

// PRIMITIVE TYPES => STRING, BOOLEEAN, NUMBER, SYMBOLS, NULL, UNDEFINED,
// SLOZENI TIPOVI => ARRAY, OBJECT

// let a = 5;
// let b = a; //5
// b = 10;

// let isChecked = true;
// let orange = isChecked;
// orange = false;

const user = {
  name: "Sasa",
  country: "SRB",
};
const user2 = { ...user };
user2.name = "Radovan";

console.log("user", user);
console.log("user2", user2);
