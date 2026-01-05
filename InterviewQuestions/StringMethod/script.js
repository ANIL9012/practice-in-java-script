// 1. substring() vs slice()
let substr = "frontend".substring(-3, 4);
console.log(substr); //Answer:"front" substring() negative value ko 0 maan leta hai
let slice = "frontend".slice(-3, 4)
console.log(slice) //Answer: "" slice() negative ko end se count karta hai

// 2. String immutable hoti hai?

let str = "React";
str[0] = "r";
console.log(str); //Answer:"React" Strings immutable hoti hain, change nahi hoti

// 3. indexOf() vs includes()

let indexOf = "JavaScript".indexOf("Java") > -1
console.log(indexOf); //Answer: true indexOf() → index return karta hai
let include = "JavaScript".includes("Java")
console.log(include); //Answer: true includes() → boolean return karta hai

// 4. split("") vs Array.from()

let split = "👋😊".split("");
console.log(split); //Answer: ["�", "�", "�", "�"] split("") emoji break kar deta hai
let Array = Array.from("👋😊")
console.log(Array); //Answer: ["👋", "😊"] Array.from() unicode safe hai

// 5. charAt() vs []

let charAt = "JS".charAt(10);
console.log(charAt); //Answer:""
let js10 = "JS"[10]
console.log(js10); //Answer: undefined

// 6. replace() vs replaceAll()

let replace = "js js js".replace("js", "JS");
console.log(replace);//Answer: "JS js js"
let replaceAll = "js js js".replaceAll("js", "JS")
console.log(replaceAll) //Answer: "JS JS JS"

// 7. Case conversion tricky behavior

let toUpperCase = "ß".toUpperCase()
console.log(toUpperCase) //Answer:"SS"

// Unicode ka effect

// 8. trim() kya remove karta hai?

let reactN = "  React\n".trim()
console.log(reactN); //Answer:"React" spaces + new lines dono

// 9. startsWith() vs regex

let startsWith = "frontend".startsWith("end", 5)
console.log(startsWith); //Answer:true Second parameter start index hota hai

// 10. String ko reverse karne ka best tarika?

let splitRevers = "hello".split("").reverse().join("")
console.log(splitRevers); //Problem:Emoji & unicode fail kar deta hai  Better:[... "hello"].reverse().join("")

// Bonus Interview Question

// "0" truthy hai ya falsy?

// Answer: Boolean("0") // true
