// var vs let in loop
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// Output:333 var function-scoped hota hai, loop complete hone ke baad i = 3.

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// Output:012

// break vs continue
// for (let i = 0; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// Output:0124

// Loop + closure trap
// const arr = [];
// for (var i = 0; i < 3; i++) {
//   arr.push(() => i);
// }
// console.log(arr[0](), arr[1](), arr[2]());

// Output:3 3 3 Sab functions same i ko reference kar rahe hain.

// for...in vs for...of
// const arr = [10, 20, 30];

// for (let i in arr) console.log(i);
// for (let i of arr) console.log(i);

// Output:0 1 2 10 20 30

// Loop stops or not?
// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   i++;
// }

// Output: 024 Loop ke andar bhi i++ ho raha hai.

// while loop trick
// let i = 5;
// while (i--) {
//   console.log(i);
// }

// Output: 43210 i-- pehle check hota hai, baad me decrement.

// forEach + async/await

// [1,2,3].forEach(async (n) => {
//   await new Promise(r => setTimeout(r, 1000));
//   console.log(n);
// });

// Output: 123 BUT delay ka wait nahi hota

// for (const n of [1,2,3]) {
//   await new Promise(r => setTimeout(r, 1000));
//   console.log(n);
// }

// Can we break forEach?
// [1,2,3].forEach(n => {
//   if (n === 2) break;
// });

// let loop + async
// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), i * 1000);
// }

// Output: 123 let block-scoped



// forEach + return

// [1,2,3].forEach(n => {
//   if (n === 2) return;
//   console.log(n);
// });

// Output:13 return sirf callback se bahar aata hai, loop se nahi
