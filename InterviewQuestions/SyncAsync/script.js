// 2. Call Stack order (Very common)
// Q: Output kya hoga?

// console.log("A");
// console.log("B");
// console.log("C");

// Answer:A,B,C Sab synchronous → order same

// 3. setTimeout(0) trick 
// console.log("start");

// setTimeout(() => console.log("timeout"), 0);

// console.log("end");

// Answer:start,end,timeout setTimeout(0) bhi asynchronous hota hai

// 4. Promise vs setTimeout (Microtask vs Macrotask)
// console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

// Answer:1,4,3,2 Promise → microtask (pehle run hota hai)

// 5. Blocking synchronous code
// console.log("Start");

// for (let i = 0; i < 1e9; i++) {}

// console.log("End");

// Answer:Start,End   // bahut delay ke baad  Heavy synchronous code UI block kar deta hai

// 6. Async function always Promise
// async function test() {
//   return "Hello";
// }

// console.log(test());

// Answer:Promise { "Hello" } async function Promise return karta hai

// 7. await stops execution?
// async function demo() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
// }

// demo();
// console.log("C");

// Answer:A,C,B await ke baad ka code async ho jaata hai

// 8. Synchronous error vs async error
// try {
//   setTimeout(() => {
//     throw new Error("Error");
//   }, 0);
// } catch (e) {
//   console.log("Caught");
// }


// Answer: Caught nahi hoga Async errors ko try-catch nahi pakad sakta

// 9. Promise chain sync or async?
// Promise.resolve()
//   .then(() => console.log("then"));

// console.log("sync");

// Answer: sync,then.then() always async hota hai

// 10. setTimeout inside Promise
// Promise.resolve().then(() => {
//   setTimeout(() => console.log("timeout"), 0);
//   console.log("promise");
// });


// Answer:promise,timeout

// 11. Synchronous recursion vs async recursion
// function syncRec() {
//   syncRec();
// }
// syncRec();


// Answer:Stack overflow

// function asyncRec() {
//   setTimeout(asyncRec, 0);
// }
// asyncRec();


// Answer: ✔ No stack overflow

// 12. Blocking vs Non-blocking difference
// Q:Difference between sync & async?

// Answer:

// Synchronous	Asynchronous
// Blocking	Non-blocking
// Line by line	Background execution
// UI freeze	UI responsive

// 13. Real interview trick

// Q:fetch() synchronous hai ya async?

// Answer: Asynchronous, returns a Promise

// 14. Output based mega trick 
// console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve()
//   .then(() => console.log("3"))
//   .then(() => console.log("4"));

// console.log("5");


// Answer:
// 1
// 5
// 3
// 4
// 2