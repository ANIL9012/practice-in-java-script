// Array reference trap

// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// console.log(a);

// Output: [1, 2, 3, 4] Arrays reference se copy hote hain.

// Shallow copy using spread

// const arr1 = [{ x: 1 }];
// const arr2 = [...arr1];
// arr2[0].x = 5;
// console.log(arr1[0].x);

// Output: 5

// Length manipulation

// let arr = [1, 2, 3, 4];
// arr.length = 2;
// console.log(arr);

// Output:[1, 2]

// Sparse array

// const arr = [1, , 3];
// console.log(arr.length);
// console.log(arr[1]);

// Output: 3 undefined

// delete vs splice

// const arr = [1, 2, 3];
// delete arr[1];
// console.log(arr, arr.length);

// Output: [1, empty, 3] 3 delete hole banata hai, length change nahi hoti.

// map vs forEach

// const res = [1,2,3].map(x => x * 2);
// const res2 = [1,2,3].forEach(x => x * 2);
// console.log(res, res2);

// Output: [2,4,6] undefined

// filter truthy trap

// console.log([0, 1, 2].filter(Boolean));

// Output: [1, 2]

// reduce tricky

// const sum = [1,2,3].reduce((a,b) => a + b);
// console.log(sum);

// Output: 6

// Array comparison

// console.log([1,2] == [1,2]);

// Output: false

//  Flatten array

// console.log([1, [2, [3]]].flat(2));

// Output: [1,2,3]

// sort trap
// console.log([10, 2, 5].sort());

// Output: [10, 2, 5] Lexicographical sorting

// [10, 2, 5].sort((a,b) => a - b);

// includes vs indexOf

// console.log([NaN].includes(NaN));
// console.log([NaN].indexOf(NaN));

// Output: true -1

// Array destructuring skip

// const [ , , third ] = [1,2,3];
// console.log(third);

// Output: 3

// Modify during iteration

// const arr = [1,2,3];
// arr.forEach((x, i) => {
//   arr.push(x * 2);
// });
// console.log(arr);

// Output: [1,2,3,2,4,6] forEach original length tak hi chalta hai.

// Array.isArray

// console.log(typeof []);
// console.log(Array.isArray([]));

// Output: object true

// fill
// const arr = new Array(3).fill([]);
// arr[0].push(1);
// console.log(arr);

// Output: [ [1], [1], [1] ] Same reference fill hota hai.

// concat vs push

// let a = [1,2];
// let b = a.push(3);
// console.log(a, b);

// Output: [1,2,3] 3

// Remove duplicates

// console.log([...new Set([1,2,2,3])]);

// Output: [1,2,3]

// every vs some

// console.log([1,2,3].every(x => x > 2));
// console.log([1,2,3].some(x => x > 2));

// Output: false true

// Array constructor

// console.log(new Array(5));
// console.log(new Array(1,2));

// Output: [empty × 5] [1,2]

// const arr = [1,2,2,3,4,4,5];
// const unique = [...new Set(arr)];
// console.log(unique);

// 10. Shallow copy vs deep copy?

// let a = [1, {x: 10}];
// let b = [...a];
// b[1].x = 99;
// console.log(a[1].x);

// const arr = [1, 2, [3, [4, 5]]];
// console.log(arr.flat());          // [1, 2, 3, [4, 5]]
// console.log(arr.flat(2));         // [1, 2, 3, 4, 5]

// const phrases = ["hello world", "good morning"];
// console.log(phrases.flatMap(p => p.split(" ")));
// ['hello', 'world', 'good', 'morning']

// Bad - creates intermediate arrays
// const arr = [1, 2, 3, 4, 5];
// const result = arr.filter(x => x > 2).map(x => x * 2).slice(0, 2);

// // Good - single pass with reduce
// const result2 = arr.reduce((acc, x) => {
//   if (x > 2 && acc.length < 2) acc.push(x * 2);
//   return acc;
// }, []);

// const sparse = [1, , , 4];
// console.log(sparse.length);           // 4
// console.log(sparse[1]);               // undefined
// console.log(Object.keys(sparse));     // ['0', '3'] - only indices with values

// // map skips empty slots
// console.log(sparse.map(x => x * 2));  // [2, empty, empty, 8]

// // Shallow copy methods
// const original = [1, 2, [3, 4]];

// // Method 1: spread operator
// const copy1 = [...original];

// // Method 2: slice()
// const copy2 = original.slice();

// // Method 3: Array.from()
// const copy3 = Array.from(original);

// // Method 4: concat()
// const copy4 = [].concat(original);

// // Shallow copy issues
// copy1[2][0] = 99;
// console.log(original[2][0]); // 99 (nested array is shared)

// // Deep copy methods
// // Method 1: JSON (limitations)
// const deepCopy1 = JSON.parse(JSON.stringify(original));

// // Method 2: structuredClone (modern)
// const deepCopy2 = structuredClone(original);

// // Method 3: recursive function
// function deepCopy(arr) {
//     return arr.map(item => 
//         Array.isArray(item) ? deepCopy(item) : item
//     );
// }
