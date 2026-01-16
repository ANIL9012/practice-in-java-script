// 1. Promise vs setTimeout (Event Loop Trick)
// console.log("start");

// setTimeout(() => console.log("timeout"), 0);

// Promise.resolve().then(() => console.log("promise"));

// console.log("end");

// Answer:
// start
// end
// promise
// timeout

// Microtask (Promise) pehle execute hota hai
// Macrotask (setTimeout) baad me

// 2. Multiple .then() ka behavior
// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => x + 1)
//   .then(x => console.log(x));

// Answer: 3 Har .then() new Promise return karta hai

// 3. .then() //ke andar Promise return kare to?
// Promise.resolve(10)
//   .then(x => {
//     return new Promise(res => res(x * 2));
//   })
//   .then(console.log);

// Answer:20 Promise chain flatten ho jaati hai

// 4. .then() vs .catch() trick
// Promise.reject("Error")
//   .then(() => console.log("then"))
//   .catch(() => console.log("catch"))
//   .then(() => console.log("after catch"));

// Answer:
// catch
// after catch //catch() ke baad chain normal continue hoti hai

// 5. throw vs reject
// Promise.resolve()
//   .then(() => {
//     throw "Error";
//   })
//   .catch(err => console.log(err));

// Answer: Error throw internally reject ban jaata hai

// 6. Promise constructor trap
// new Promise((resolve, reject) => {
//   resolve("done");
//   reject("error");
// }).then(console.log).catch(console.log);

// Answer: done Promise sirf ek baar settle hoti hai

// 7. Promise inside Promise
// Promise.resolve(
//   Promise.resolve("React")
// ).then(console.log);

// Answer: React // Nested Promise automatically unwrap ho jaati hai

// 8. Promise.all() tricky case
// Promise.all([
//   Promise.resolve("A"),
//   Promise.reject("B"),
//   Promise.resolve("C")
// ]).then(console.log).catch(console.log);

// Answer:B //Ek bhi reject = poora Promise.all fail 

// 9. Promise.race() vs Promise.any()
// Promise.any([
//   Promise.reject("Err"),
//   Promise.resolve("Success")
// ]).then(console.log);

// Answer:Success //any() first fulfilled promise ko leta hai

// 10. finally() return value
// Promise.resolve("JS")
//   .finally(() => "React")
//   .then(console.log);

// Answer:JS finally() ka return ignore hota hai

// 11. Async / Await trick
// async function test() {
//   return "Frontend";
// }

// test().then(console.log);

// Answer:Frontend //async function always Promise return karta hai

// 12. await vs normal value
// async function demo() {
//   let x = await 10;
//   console.log(x);
// }
// demo();

// Answer:10 //await non-promise ko bhi Promise bana deta hai

// 13. Error inside setTimeout
// Promise.resolve()
//   .then(() => {
//     setTimeout(() => {
//       throw new Error("Oops");
//     });
//   })
//   .catch(() => console.log("caught"));
// Answer: caught nahi hoga


                        //  Live coding interview tasks

// STEP 1: Delay Function (Promise basics)
// Task: n milliseconds ke baad promise resolve ho.

// Solution
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(1000).then(() => console.log("Done"));

// STEP 2: Fake API Call (Promise resolve)
// Task: 2 sec baad user data return karo.

// Solution
// function getUser() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Anil" });
//     }, 2000);
//   });
// }

// getUser().then(user => console.log(user.name));

// STEP 3: String Reverse using Promise
// Task: Promise ke andar string reverse karo.

// Solution
// function reverseString(str) {
//   return new Promise(resolve => {
//     resolve(str.split("").reverse().join(""));
//   });
// }

// reverseString("react").then(console.log);

// STEP 4: Sequential Promise Execution
// Task: Tasks ko order me run karna hai.

// Solution
// function task1() {
//   return Promise.resolve("Task 1 done");
// }
// function task2() {
//   return Promise.resolve("Task 2 done");
// }
// function task3() {
//   return Promise.resolve("Task 3 done");
// }

// task1()
//   .then(res => {
//     console.log(res);
//     return task2();
//   })
//   .then(res => {
//     console.log(res);
//     return task3();
//   })
//   .then(console.log);

// STEP 5: Parallel API Calls (Promise.all)
// Task: Multiple promises ek saath run karo.

// Solution
// function fetchUsers() {
//   const p1 = Promise.resolve("User1");
//   const p2 = Promise.resolve("User2");
//   const p3 = Promise.resolve("User3");

//   return Promise.all([p1, p2, p3]);
// }

// fetchUsers().then(console.log);

// STEP 6: Promise with Timeout
// Task: Agar promise time me resolve na ho → reject.

// Solution
// function promiseWithTimeout(promise, ms) {
//   const timeout = new Promise((_, reject) =>
//     setTimeout(() => reject("Timeout"), ms)
//   );

//   return Promise.race([promise, timeout]);
// }

// promiseWithTimeout(
//   new Promise(res => setTimeout(res, 2000)),
//   1000
// ).catch(console.log);

// STEP 7: Retry Promise (Very Common Interview Task)
// Task: Fail hone par 3 baar retry.

// Solution
// function retry(fn, retries) {
//   return fn().catch(err => {
//     if (retries === 0) {
//       return Promise.reject(err);
//     }
//     return retry(fn, retries - 1);
//   });
// }

// Example
// let count = 0;
// function apiCall() {
//   return new Promise((resolve, reject) => {
//     count++;
//     count < 3 ? reject("Fail") : resolve("Success");
//   });
// }

// retry(apiCall, 3).then(console.log);

// STEP 8: Cancel Promise (AbortController)
// Task: API request cancel karni hai.

// Solution
// function cancelableFetch(url) {
//   const controller = new AbortController();
//   fetch(url, { signal: controller.signal });
//   return controller;
// }

// Usage
// const controller = cancelableFetch("https://api.example.com");
// controller.abort();

// STEP 9: Promise Queue (Concurrency Control)
// Task: Ek time par sirf 2 promises run ho.

// Solution
// async function promiseQueue(tasks, limit) {
//   const results = [];
//   const executing = [];

//   for (const task of tasks) {
//     const p = Promise.resolve().then(task);
//     results.push(p);

//     if (limit <= tasks.length) {
//       const e = p.then(() => executing.splice(executing.indexOf(e), 1));
//       executing.push(e);
//       if (executing.length >= limit) {
//         await Promise.race(executing);
//       }
//     }
//   }
//   return Promise.all(results);
// }

// STEP 10: Custom Promise.all Implementation 
// Task: Promise.all khud implement karo.

// Solution
// function myPromiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     const results = [];
//     let completed = 0;

//     promises.forEach((p, index) => {
//       Promise.resolve(p)
//         .then(value => {
//           results[index] = value;
//           completed++;
//           if (completed === promises.length) {
//             resolve(results);
//           }
//         })
//         .catch(reject);
//     });
//   });
// }

// Test
// myPromiseAll([
//   Promise.resolve(1),
//   Promise.resolve(2),
//   Promise.resolve(3)
// ]).then(console.log);