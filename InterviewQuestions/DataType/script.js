// let null = null;
//  console.log(typeof null) //object // null actually primitive hai lekin JS ka Old bug hone ki bajah se "object" return karta hai

// let NaN = NaN
// console.log(typeof NaN) //"number" // NaN Not a Number hai lekin type "number" hi hota hai

// let arr = [] == []
// console.log(arr) //false // kyuki arrays reference type hote hai value compare nahi hoti

// let arr2 = [] == ![];
// console.log(arr2); //true

// let function = function(){}
// console.log(typeof function) ; //"function" // JS mai function bhi object hota hai, lekin typeof alag value deta hai।

// let undefinedNull = undefined == null
// console.log(undefinedNull); //true

// let undefinedNull2 =  undefined === null;
// console.log(undefinedNull2) //false

// let obj = {} + {} ; //"[object Object][object Object]"
// lekin browser console mai NaN bhi dikha sakta hai (context par depend karta hai)

// JavaScript me total kitne data types hote hain?

// 8 Data Types

// String

// Number

// Boolean

// Undefined

// Null

// Symbol

// BigInt

// Object

// console.log("a" < "b");
// console.log("A" < "a");
// console.log("10" < "2");
// console.log("abc" < "ab");

// let str = "Hello 123 World 456";
// console.log(str.match(/\d+/g));
// console.log(str.split(/\d+/));
// console.log(str.replace(/\d+/, "NUM"));
