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
// let arr6 = [1,2,3].map(x => x * 2); // [2,4,6]
// console.log(arr6);
// 12. filter()
// let arr7 = [1,2,3,4].filter(x => x > 2); // [3,4]
// console.log(arr7);
// 13. reduce()
// let arr8 = [1,2,3].reduce((sum,x)=>sum+x,0); // 6
// console.log(arr8);
// 14. some()
// let arr9 = [1,2,3].some(x => x > 2); // true
// console.log(arr9);
// 15. every()
// let arr10 = [2,4,6].every(x => x % 2 === 0); // true
// console.log(arr10);
// Convert
// 16. join()
// let arr11 = ["a","b","c"].join("-"); // "a-b-c"
// console.log(arr11)
// 17. toString()
// let arr12 = [1,2,3].toString(); // "1,2,3"
// console.log(arr12)
// 18. flat()
// let arr13 = [1,[2,3]].flat(); // [1,2,3]
// console.log(arr13)
// Order / Arrange
// 19. sort()
// let arr14 = [3,1,2].sort(); // [1,2,3]
// console.log(arr14)
// 20. reverse()
// let arr15 = [1,2,3].reverse(); // [3,2,1]
// console.log(arr15)
// 21. slice() (no change original)
// let arr16 = [1,2,3,4].slice(1,3); // [2,3]
// console.log(arr16)
// 22. concat()
// let arr17 = [1,2].concat([3,4]); // [1,2,3,4]
// console.log(arr17)
// Special / Interview Tricky
// 23. isArray()
// let arr18 = Array.isArray([1,2]); // true
// console.log(arr18)
// 24. fill()
// let arr19 = [1,2,3].fill(0); // [0,0,0]
// console.log(arr19)
// 25. copyWithin()
// let arr20 = [1,2,3,4].copyWithin(1,2); // [1,3,4,4]
// console.log(arr20)
// 26. entries()
// let arr21 = [10,20].entries(); // iterator
// console.log(arr21)
// 27. keys()
// let arr22 = [10,20].keys(); // index iterator
// console.log(arr22)
// 28. values()
// let arr23 = [10,20].values(); // value iterator
// console.log(arr23)

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
// This Method compulsory used in our program 