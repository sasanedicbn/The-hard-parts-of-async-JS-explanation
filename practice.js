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

function useState(initialValue) {
  let state = initialValue;

  function setState(newValue) {
    state = newValue;
  }

  return [state, setState];
}

const [count, setCount] = useState(0);

console.log(count); // 0
setCount(5); // State updated to: 5
console.log(count); // 5 (ovo neće raditi kako očekujemo zbog jednostavnosti primjera)
