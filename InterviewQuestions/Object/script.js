// Object key coercion

// const obj = {};
// obj[1] = "one";
// obj["1"] = "string one";
// console.log(obj);

// Output: { "1": "string one" } Object keys hamesha string me convert ho jaati hain.

// Object reference vs copy

// const a = { x: 10 };
// const b = a;
// b.x = 20;
// console.log(a.x);

// Output: 20 Objects reference se copy hote hain.

// Shallow copy trap

// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { ...obj1 };
// obj2.b.c = 5;
// console.log(obj1.b.c);

// Output: 5 Spread operator shallow copy karta hai.

// this inside object method

// const user = {
//   name: "Anil",
//   getName() {
//     return this.name;
//   }
// };
// console.log(user.getName());

// Output: Anil

// Method lost this

// const user = {
//   name: "JS",
//   getName() {
//     return this.name;
//   }
// };

// const fn = user.getName;
// console.log(fn());

// Output: undefined this lost ho jaata hai jab method alag se call hota hai.

// Fix this
// console.log(fn.call(user));

// Output: JS

// Object destructuring rename

// const obj = { a: 10, b: 20 };
// const { a: x, b: y } = obj;
// console.log(x, y);

// Output: 10 20

// Computed property

// const key = "age";
// const user = {
//   name: "Anil",
//   [key]: 25
// };
// console.log(user.age);

// Output: 25

// delete operator

// const obj = { a: 1, b: 2 };
// delete obj.a;
// console.log(obj);

// Output: { b: 2 }

// Object.freeze

// const obj = { a: 1 };
// Object.freeze(obj);
// obj.a = 10;
// console.log(obj.a);

// Output: 1 Strict mode me error aata hai.

// Object.seal

// const obj = { a: 1 };
// Object.seal(obj);
// obj.a = 5;
// obj.b = 10;
// console.log(obj);

// Output: { a: 5 } New properties add nahi hoti.

// Check property exists

// const obj = { a: undefined };
// console.log("a" in obj);
// console.log(obj.hasOwnProperty("a"));

// Output: true true

// for...in loop

// const obj = Object.create({ x: 1 });
// obj.y = 2;

// for (let key in obj) {
//   console.log(key);
// }

// Output: y x for...in inherited properties bhi deta hai.

// JSON stringify trick

// const obj = {
//   a: 1,
//   b: undefined,
//   c: function(){}
// };
// console.log(JSON.stringify(obj));

// Output: {"a":1}

// Object comparison

// const a = { x: 1 };
// const b = { x: 1 };
// console.log(a === b);

// Output: false Reference compare hota hai, value nahi.

// Deep compare (basic)

// function isEqual(a, b) {
//   return JSON.stringify(a) === JSON.stringify(b);
// }

// Interview me limitations batana zaroori hai.

// Optional chaining

// const user = {};
// console.log(user.profile?.name);

// Output: undefined

// Nullish coalescing

// const user = { age: 0 };
// console.log(user.age ?? 18);

// Output: 0

// TCS / Infosys / Wipro (Service-Based)

// Output based (very common)

// const obj = { a: 1 };
// const arr = [obj];
// arr[0].a = 10;
// console.log(obj.a);

// Output: 10 Concept: Objects reference se pass hote hain.

// Delete property

// const emp = { name: "A", salary: 5000 };
// delete emp.salary;
// console.log(emp.salary);

// Output: undefined

// Object length?

// const obj = { a: 1, b: 2 };
// console.log(obj.length);

// Output: undefined

// Object.keys(obj).length

// Key exists or not

// const obj = { a: undefined };
// console.log(obj.a);
// console.log("a" in obj);

// Output: undefined true

// Accenture / Cognizant / Capgemini

//Freeze vs modify

// const user = { name: "JS" };
// Object.freeze(user);
// user.name = "React";
// console.log(user.name);

// Output: JS

// Shallow copy trap

// const a = { x: { y: 1 } };
// const b = Object.assign({}, a);
// b.x.y = 5;
// console.log(a.x.y);

// Output: 5

// for...in inherited property

// const parent = { a: 1 };
// const child = Object.create(parent);
// child.b = 2;

// for (let key in child) {
//   console.log(key);
// }

// Output: b a

// JSON stringify trick

// const obj = {
//   a: 1,
//   b: undefined,
//   c: function(){}
// };
// console.log(JSON.stringify(obj));

// Output: {"a":1}

// Product-Based (Flipkart / Amazon / Paytm)

// Object comparison

// const a = { x: 1 };
// const b = { x: 1 };
// console.log(a == b);

// Output: false

// Convert object to array

// const obj = { a: 1, b: 2 };
// console.log(Object.entries(obj));

// Output: [ ["a",1], ["b",2] ]

// Dynamic keys

// const key = "score";
// const player = {
//   name: "Anil",
//   [key]: 100
// };
// console.log(player.score);

// Output: 100

// Object destructuring default

// const user = { name: "JS" };
// const { name, age = 25 } = user;
// console.log(age);

// Output: 25

// this interview favorite

// const obj = {
//   name: "JavaScript",
//   getName() {
//     return this.name;
//   }
// };

// const fn = obj.getName;
// console.log(fn());

// Output: undefined

// fn.bind(obj)()

// Merge objects

// const a = { x: 1 };
// const b = { y: 2 };
// const c = { ...a, ...b };
// console.log(c);

// Output: { x:1, y:2 }

// Tricky update

// let obj = { a: 1 };
// obj = null;
// console.log(obj?.a);

// Output: undefined
