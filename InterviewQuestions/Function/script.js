//  Function hoisting
// sayHi();

// function sayHi() {
//   console.log("Hi");
// }

// Output: Hi Reason: Function declarations hoist hoti hain.

// Function expression hoisting

// sayHello();

// var sayHello = function () {
//   console.log("Hello");
// };

// Output: TypeError: sayHello is not a function Sirf variable hoist hota hai, function assign nahi hota.

// Arrow function hoisting

// test();

// const test = () => {
//   console.log("Test");
// };

// Output: ReferenceError const hoist hota hai but TDZ me hota hai.

// this in normal vs arrow function

// const obj = {
//   value: 10,
//   normal() {
//     console.log(this.value);
//   },
//   arrow: () => {
//     console.log(this.value);
//   }
// };

// obj.normal();
// obj.arrow();

// Output:10 undefined Arrow function ka this parent scope se aata hai.

// Arguments object

// function sum(a, b) {
//   arguments[0] = 5;
//   console.log(a + b);
// }
// sum(1, 2);

// Output: 7 Non-strict mode me arguments linked hota hai.

// Default parameters

// function test(a = 10, b = a) {
//   console.log(a, b);
// }
// test(undefined, 5);

// Output: 10 5

// Function length property

// function demo(a, b = 2, c) {}
// console.log(demo.length);

// Output: 1 length sirf default se pehle ke params count karta hai.

// IIFE tricky

// (function(x) {
//   return (function(y) {
//     console.log(x);
//   })(2);
// })(1);

// Output: 1 Closure preserve hota hai.

// Named function expression

// var fn = function test() {
//   console.log(typeof test);
// };
// fn();
// console.log(typeof test);

// Output: function undefined

// Function + return

// function a() {
//   return
//   {
//     name: "JS"
//   };
// }
// console.log(a());

// Output:undefined Automatic Semicolon Insertion (ASI)

// call, apply, bind

// function show() {
//   console.log(this.name);
// }
// const obj = { name: "Anil" };

// show.call(obj);

// Output: Anil

//Arrow function & arguments
// const test = () => {
//   console.log(arguments);
// };
// test(1,2);

// Output: ReferenceError Arrow functions ke paas arguments nahi hota.

// Function returning function

// function outer(x) {
//   return function inner(y) {
//     return x + y;
//   };
// }
// console.log(outer(5)(3));

// Output: 8

// Rest parameter

// function sum(...args) {
//   console.log(args.length);
// }
// sum(1,2,3,4);

// Output: 4

// this with bind

// const obj = {
//   x: 10,
//   getX() {
//     return this.x;
//   }
// };

// const fn = obj.getX;
// console.log(fn());
// console.log(fn.bind(obj)());

// Output: undefined 10

// Real interview coding questions

// Reverse a string (without built-in reverse)

// function reverseString(str) {
//   let res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i];
//   }
//   return res;
// }

// Check palindrome

// function isPalindrome(str) {
//   let l = 0, r = str.length - 1;
//   while (l < r) {
//     if (str[l] !== str[r]) return false;
//     l++; r--;
//   }
//   return true;
// }

// Remove duplicates from array

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// Find missing number

// function missingNumber(arr, n) {
//   const total = n * (n + 1) / 2;
//   const sum = arr.reduce((a, b) => a + b, 0);
//   return total - sum;
// }

// Flatten array

// function flatten(arr) {
//   let res = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       res = res.concat(flatten(item));
//     } else {
//       res.push(item);
//     }
//   }
//   return res;
// }

// Count frequency

// function frequency(arr) {
//   return arr.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, {});
// }

// Debounce function

// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(this, args), delay);
//   };
// }

// Throttle function

// function throttle(fn, limit) {
//   let flag = true;
//   return function (...args) {
//     if (!flag) return;
//     flag = false;
//     fn.apply(this, args);
//     setTimeout(() => flag = true, limit);
//   };
// }

// Polyfill for map

// Array.prototype.myMap = function (cb) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push(cb(this[i], i, this));
//   }
//   return res;
// };

// Deep clone object

// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") return obj;
//   let copy = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     copy[key] = deepClone(obj[key]);
//   }
//   return copy;
// }

// Currying

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     }
//     return (...next) => curried(...args, ...next);
//   };
// }

// Once function

// function once(fn) {
//   let called = false;
//   let result;
//   return function (...args) {
//     if (!called) {
//       called = true;
//       result = fn.apply(this, args);
//     }
//     return result;
//   };
// }

// Memoization

// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cache[key]) return cache[key];
//     return cache[key] = fn.apply(this, args);
//   };
// }

// Promise.all polyfill

// Promise.myAll = function (promises) {
//   return new Promise((resolve, reject) => {
//     let res = [], count = 0;
//     promises.forEach((p, i) => {
//       Promise.resolve(p)
//         .then(val => {
//           res[i] = val;
//           count++;
//           if (count === promises.length) resolve(res);
//         })
//         .catch(reject);
//     });
//   });
// };

// Output-based (very common)

// console.log(sum(1)(2)(3));

// function sum(a) {
//   return function (b) {
//     if (!b) return a;
//     return sum(a + b);
//   };
// }

// Output: 6

