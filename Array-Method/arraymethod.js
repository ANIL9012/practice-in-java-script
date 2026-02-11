// 1. Add / Remove methods

// Used to insert or delete elements:

// push()

// pop()

// shift()

// unshift()

// splice()

// 2. Access / Search methods

// Used to find elements:

// indexOf()

// lastIndexOf()

// includes()

// find()

// findIndex()

// 3. Iteration methods (looping)

// Used to loop through array:

// forEach()

// map()

// filter()

// reduce()

// some()

// every()

// 4. Convert methods

// Used to convert array:

// join()

// toString()

// flat()

// 5. Order / Arrange methods

// Used to change order:

// sort()

// reverse()

// slice()

// concat()

// Add / Remove Methods
// 1. push() – end me add
// let a = [1, 2];
// console.log(a)
// a.push(3); // [1,2,3]
// console.log(a)

// 2. pop() – end se remove
// a.pop(); // removes last element

// 3. unshift() – start me add
// a.unshift(0); // [0,1,2]
// console.log(a)

// 4. shift() – start se remove
// a.shift(); // removes first element
// console.log(object)

// 5. splice() – add/remove anywhere (changes original)
// a.splice(1, 1); // remove 1 element from index 1
// console.log(a)

// Access / Search
// 6. indexOf()
// let arr1 = [10, 20, 30].indexOf(20); // 1
// console.log(arr1)
// 7. includes()
// let arr2 = [1, 2, 3].includes(2); // true
// console.log(arr2);

// 8. find()
// let arr3 = [5, 10, 15].find(x => x > 10); // 15
// console.log(arr3)
// 9. findIndex()
// let arr4 = [5, 10, 15].findIndex(x => x > 10); // 2
// console.log(arr4);

// Iteration (looping)
// 10. forEach()
// let arr5 = [1, 2, 3].forEach(x => console.log(x));
// console.log(arr5);
// 11. map()
// [1,2,3].map(x => x * 2); // [2,4,6]

// 12. filter()
// [1,2,3,4].filter(x => x > 2); // [3,4]

// 13. reduce()
// [1,2,3].reduce((sum,x)=>sum+x,0); // 6

// 14. some()
// [1,2,3].some(x => x > 2); // true

// 15. every()
// [2,4,6].every(x => x % 2 === 0); // true

// Convert
// 16. join()
// ["a","b","c"].join("-"); // "a-b-c"

// 17. toString()
// [1,2,3].toString(); // "1,2,3"

// 18. flat()
// [1,[2,3]].flat(); // [1,2,3]

// Order / Arrange
// 19. sort()
// [3,1,2].sort(); // [1,2,3]

// 20. reverse()
// [1,2,3].reverse(); // [3,2,1]

// 21. slice() (no change original)
// [1,2,3,4].slice(1,3); // [2,3]

// 22. concat()
// [1,2].concat([3,4]); // [1,2,3,4]

// Special / Interview Tricky
// 23. isArray()
// Array.isArray([1,2]); // true

// 24. fill()
// [1,2,3].fill(0); // [0,0,0]

// 25. copyWithin()
// [1,2,3,4].copyWithin(1,2); // [1,3,4,4]

// 26. entries()
// [10,20].entries(); // iterator

// 27. keys()
// [10,20].keys(); // index iterator

// 28. values()
// [10,20].values(); // value iterator

// MOST IMPORTANT (Interview focus)

// map()

// filter()

// reduce()

// forEach()

// find()

// some()

// every()

// slice() vs splice()

// push() vs pop()