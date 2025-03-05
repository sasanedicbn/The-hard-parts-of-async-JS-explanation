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

// ======================= DEEP AND SHALLOW COPY

// PRIMITIVE TYPES => STRING, BOOLEEAN, NUMBER, SYMBOLS, NULL, UNDEFINED,
// SLOZENI TIPOVI => ARRAY, OBJECT, FN

// let a = 5;
// let b = a; //5
// b = 10;

// let isChecked = true;
// let orange = isChecked;
// orange = false;

// const user = {
//   name: "Sasa",
//   country: "SRB",
// };
// const user2 = { ...user };
// user2.name = "Radovan";

// let original = { a: 1, b: { c: 2 }, d: [3, 4] };
// let copied = structuredClone(original);

// copied.b.c = 150;
// console.log("original", original);
// console.log("copied", copied);

// =========================== Difference between (let, const i var)
// VAR
// function checkVar() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x, "var");
// }

// checkVar();
// // -Funckionalni scope dostupna unutar funkcije

// console.log(x) => undefined
// var x = 10;
// cl(x) => 10

// Hoisting deklaracija se dize na vrh scope a inicijalizacija se desava clasicno

// var num = 10
// var num = 20
// console.log(20) => dozvoljava deklarisanje unutar istog opsega

// LET

// //function example() {
//     if (true) {
//         let x = 10;
//         console.log(x); // 10
//     }
//     console.log(x); // ReferenceError: x is not defined (x nije dostupan van if bloka)
// }
// example();

// LET IMA BLOK SCOPE

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 5;
// console.log(y); // 5

// let promenljive su takođe hoistovane, ali nisu inicijalizovane dok se ne dođe do linije gde su deklarisane.

// let z = 10;
// let z = 20; // SyntaxError: Identifier 'z' has already been declared
// ne mozes ponovo deklarisati unutar istog scopa.

// CONST

//CONST IMA ISTO BLOK SCOPE KAO I LET
//HOISTING ISTO KOA I LET
//const promenljive ne mogu biti ponovo dodeljene (ne mogu im se menjati vrednosti). Međutim,
// ako je const promenljiva objekat ili niz, njegovi unutrašnji elementi mogu biti promenjeni.

// ========================= JavaScript Object Prototype

// const obj = {
//   name: "Sasa",
// };
// console.log(obj);

// ====================== JS MODULES

// -Moduli omogućavaju organizovanje koda u zasebne fajlove.
// -export se koristi za izvoz vrednosti, funkcija ili objekata.
// -import se koristi za uvoz iz drugih modula.
// -Postoje named export i default export.
// -Moduli imaju svoj opseg (scope) i ne zagaduju globalni opseg.
// -Dinamički uvoz omogućava učitavanje modula po potrebi

// math.js

// const calc = () => 2+2
// export default calc => default export
// export const calc2 = () => 3+3  -Named export

// export
// import calc, {calc2} from 'math.js'

// ==================== Arrow function

// Arrow funcija nema arguments
// Arrow fn ima kracu sintaksu
//Arrow funkcije nemaju svoj this kontekst => uzima this is svog opsega
// function Timer() {
//   //   this.seconds = 0;

//   // Regularna funkcija
//   setInterval(function () {
//     let seconds = 0;
//     this.seconds++; // this nije Timer objekat!
//     console.log(this.seconds); // NaN
//   }, 1000);

// Arrow funkcija
//   setInterval(() => {
//     this.seconds++; // this je Timer objekat!
//     console.log(this.seconds); // 1, 2, 3, ...
//   }, 1000);
// }

// Regularna funkcija(this)
// Pozvana globalno? ➝ this je window (ili undefined u strict mode).
// Pozvana kao metoda objekta? ➝ this je taj objekat.
// Pozvana sa new? ➝ this je novi objekat.
// Callback funkcija (setTimeout, event listener)? ➝ Zavisno od toga kako je pozvana.

// const obj = {
//   name: "SASA",
//   calcuclateAge: function () {
//     console.log(this.name + "15 godina");
//   },
// };

// obj.calcuclateAge();

// ===================== CLOUSERS
// sve pozicnje kad funckija vraca funkciju i mi pozivamo "prvu" funkciju

// function createMultiplier(multiplier) {
//   return function unutrasnja(number) {
//     return number * multiplier;
//   };
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(10));
// console.log(triple(5));

// ================== Async

// function addTwo() {
//   console.log("Andjela");
// }
// function blocCode() {
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(arr[i]);
//   }
// }
// blocCode();
// setTimeout(addTwo, 0);
// console.log("Jovan");

// Promises

// const displayData = (data) => {
//   console.log(data);
// };

// const fetchData = fetch("https://www.opensanctum.com/v1/churches/id/2")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// function then(callback) {
//   return new Promise((resolve, reject) => {
//     // Čekamo da se trenutni Promise resolved
//     this.onFulfilled = (result) => {
//       // Pozivamo callback sa rezultatom
//       const newResult = callback(result);
//       resolve(newResult); // Resolvujemo novi Promise sa rezultatom callback-a
//     };
//     this.onRejected = (error) => {
//       reject(error); // Ako je došlo do greške, reject-ujemo
//     };
//   });
// }

// const fetchsomeData = async () => {
//   try {
//     const response = await fetch(
//       "https://www.opensanctum.com/v1/churches/id/2"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     throw new Error(error.msg || "Something went wrong");
//   }
// };
// fetchsomeData();

// USEEFFECT

// ponasa se kao setTimeout npr kad pozovem i ide isto u makrotask queue(2.) i radi sa event loopom
//sav se znaci kod sinhroni izvrsi dok on proradi ako se npr state updejtuje unutar useeffecta onda se vrsi jos jedan render
//naravno izmedju sihronom i ovo useeffecta updajtuje se dom,
// ako je useffect [], sve isto ide samo se dom nece updejtovati jer nemam updejta
//ako imam vise dependecies on ih grupise i oni se pokrecu samo jednom

// Usestate

// function useState(initialValue) {
//   let state = initialValue;

//   function setState(newValue) {
//     state = newValue;
//   }

//   return [state, setState];
// }

// const [count, setCount] = useState(0);

// some basic exercieses
// ============== 1
// function createButton() {
//   const btn = document.createElement("button");
//   btn.classList.add("btn");
//   btn.textContent = "Klikni me";
//   document.body.appendChild(btn);
//   return btn;
// }

// function addParagraph(tekst) {
//   const contentDiv = document.getElementById("content");
//   const p = document.createElement("p");
//   p.textContent = tekst;
//   contentDiv.appendChild(p);
// }

// let brojKlikova = 0;

// const btn = createButton();

// btn.addEventListener("click", (e) => {
//   brojKlikova++;

//   addParagraph("Kliknuto!");

//   if (brojKlikova >= 5) {
//     btn.disabled = true;
//     btn.textContent = "Dostignut limit klikova";
//   }
// });
// =================== 2
// const fetchData = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("doslo je do greske" + response.status);
//     }
//     response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log(error);
//   });
// ==================== 3
// function processUser(users) {
//   const usersAbove18 = users.filter((user) => user.age > 18);

//   return usersAbove18.map((user) => {
//     return { name: user.name, email: user.email };
//   });
// }

// const users = [
//   { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
//   { id: 2, name: "Bob", age: 17, email: "bob@example.com" },
//   { id: 3, name: "Charlie", age: 30, email: "charlie@example.com" },
// ];

// const usersAbove18 = processUser(users);
// console.log(usersAbove18);

// function getActiveUsers(users) {
//   const activeUser = users
//     .filter((user) => user.isActive === true)
//     .map((acUser) => {
//       return { name: acUser.name, age: acUser.age };
//     });
//   return activeUser;
// }
// const users = [
//   { id: 1, name: "Alice", age: 25, isActive: true },
//   { id: 2, name: "Bob", age: 17, isActive: false },
//   { id: 3, name: "Charlie", age: 30, isActive: true },
// ];
// const activeUsers = getActiveUsers(users);
// console.log(activeUsers);

// ===================== 5
// function sortProducts(products) {
//   return products.sort((a, b) => a.price - b.price);
// }
// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Shirt", price: 20 },
//   { id: 3, name: "Headphones", price: 150 },
// ];

// const sortedData = sortProducts(products);
// console.log(sortedData);

//  ===================== 6
// function calcuclateProducts(products) {
//   return products.reduce((acc, prod) => {
//     const allProducts = acc + prod.price * prod.quantity;
//     return allProducts;
//   }, 0);
// }

// const products = [
//   { id: 1, name: "Laptop", price: 1000, quantity: 2 },
//   { id: 2, name: "Shirt", price: 20, quantity: 5 },
//   { id: 3, name: "Headphones", price: 150, quantity: 1 },
// ];

// const result = calcuclateProducts(products);

// console.log(result);

// ================= 7

// const findMostFrequentCategory = (products) => {
//   const categoryCount = {};
//   products.forEach((product) => {
//     const { category } = product;
//     if (categoryCount[category]) {
//       categoryCount[category]++;
//     } else {
//       categoryCount[category] = 1;
//     }
//   });
// };

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics" },
//   { id: 2, name: "Shirt", category: "Clothing" },
//   { id: 3, name: "Headphones", category: "Electronics" },
//   { id: 4, name: "Shoes", category: "Clothing" },
//   { id: 5, name: "Smartphone", category: "Electronics" },
// ];

// findMostFrequentCategory(products);

// =================== 8
// const users = [
//   { id: 1, name: "Alice", email: "alice@example.com" },
//   { id: 2, name: "Bob", email: "bob@example.com" },
//   { id: 3, name: "Charlie", email: "charlie@example.com" },
// ];

// const userWithLongestName = users.reduce((longest, user) => {
//   return user.name.length > longest.name.length ? user : longest;
// });

// console.log(userWithLongestName);

// ========================== 9
// const doubleArray = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i <= doubleArray.length - 1; i++) {
//   const evenNum = doubleArray[i] % 2 === 0;

//   if (evenNum) {
//     doubleArray[i] = doubleArray[i] * 2;
//   }

//   console.log(evenNum);
//   console.log(doubleArray[i]);
// }

// const string = "Jovan";

// function reverseString(name) {
//   return name.split("").reverse().join("");
// }
// const names = reverseString(string);
// console.log(names);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1.

// function checkEvenNumber(number) {
//   if (number % 2 === 0) {
//     console.log("broj je paran");
//   } else {
//     console.log("broj nije paran");
//   }
// }
// checkEvenNumber(5);

// 2
// function biggestNumber(a, b, c) {
//   let najveci = a;
//   if (b > najveci) {
//     najveci = b;
//   }
//   if (c > najveci) {
//     najveci = c;
//   }
//   return najveci;
// }
// const number = biggestNumber(2, 5, 6);
// console.log(number, "nnum");

// 3.
function sumNumbers(numbers) {
  console.log("samo numbers", numbers);
  let allNumbers = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    allNumbers += numbers[i];
  }
  return allNumbers;
}

const result = sumNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);
