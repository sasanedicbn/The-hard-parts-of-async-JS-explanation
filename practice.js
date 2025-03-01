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

//hoisting with var

// console.log(x);  => undefined
// var x = 5; => inicijalizovano
// console.log(x); => 5

// hoisting with let and const

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// console.log(y); // 10
