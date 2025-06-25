
// 1. Declare variables using let, var, and const to store a name, age, and favorite color.

// var name = "Anil Kumar"; //var is a global variable
// let color = "#f928c4"; //let is a local variavle
// const age = "21";  //const is a local variable

// console.log(name);
// console.log(color);
// console.log(age);


// 2. Create variables inside and outside a block ({}) using let and const.


// Outside

// let outside = 420;
// const outsideTwo = "outside"
// console.log(outside);
// console.log(outsideTwo);

// // inside-block

// {
//     let inside = "Inside-Block"
//     let insideTwo = "Inside-Block-Const"
//     console.log(inside);
//     console.log(insideTwo);
// }

// 3. Follow JavaScript naming conventions to create variables for a username, email address, and password. 

// var userName = "Anil Kumar";
// var userE_male = "9012kumaranil@gmail.com";
// var _Password = 34564246;

// console.log(userName);
// console.log(userE_male);
// console.log(_Password);

// 4. Use let to declare a variable inside a block ({}) and try accessing it outside. Explain the result.

// inside-Block-variable
// {
//     let AccessingResult = "Result"
//     console.log(AccessingResult);
// }

// console.log(AccessingResult);

// 5. Declare a constant variable for the value of Pi (π). Attempt to reassign a new value to it and write the error.

// const pi = 3.14;
// pi = 3.143;
// console.log(pi);

// 6. Create a global variable named count and a local variable with the same name inside a block ({}). Output both values to observe variable.

// let count = 10; // Global variable

// {
//   let count = 5; // Local variable within block scope
//   console.log("Local count inside block:", count); // Outputs the local variable (5)
// }

// console.log("Global count outside block:", count); // Outputs the global variable (10)


// 7. Declare a variable with let for a number. Then assign it a string value and console.

// let value = 42; // Initially assigned a number
// console.log("Number value:", value); // Outputs 42

// value = "Hello, world!"; // Reassigning it to a string
// console.log("String value:", value); // Outputs "Hello, world!"

// 8. Try creating variables with names that start with numbers or contain special characters. Discuss why some names are invalid.

// let 1name = "Alice";      // Invalid - starts with a number
// let $name = "Bob";        // Valid - starts with a dollar sign
// let _name = "Charlie";    // Valid - starts with an underscore
// let name# = "David";      // Invalid - contains a special character '#'
// let firstName = "Eve";    // Valid - camelCase with letters only
// let name! = "Frank";      // Invalid - contains a special character '!'

// console.log(1name);
// console.log($name);
// console.log(_name);
// console.log(name#);
// console.log(firstName);
// console.log(name!);

// 9. Declare variables with let and const in different scopes (e.g., global scope, block scope). Discuss their visibility and scope.

// let globalVar = "I am global";  // Global scope variable with let
// const globalConst = "I am a global constant";  // Global scope constant with const

// console.log("Global scope - globalVar:", globalVar);        // Accessible here
// console.log("Global scope - globalConst:", globalConst);    // Accessible here

// {
//   let blockVar = "I am in a block";  // Block scope variable with let
//   const blockConst = "I am a block constant";  // Block scope constant with const

//   console.log("Inside block - blockVar:", blockVar);         // Accessible here
//   console.log("Inside block - blockConst:", blockConst);     // Accessible here
//   console.log("Inside block - globalVar:", globalVar);       // Accessible here
//   console.log("Inside block - globalConst:", globalConst);   // Accessible here
// }

// // Trying to access block-scoped variables outside the block
// console.log("Outside block - blockVar:", typeof blockVar);      // undefined
// console.log("Outside block - blockConst:", typeof blockConst);  // undefined


// 10. Declare a variable without assigning a value.

// var Anil;
// let kumar;
// const constValue;

// 11. Create variables for a first name, last name, and age. Apply camelCase naming convention .

// var firstName = "Anil";
// var last_Name = "Kumar";
// var age22 = "22";
// console.log(age22);
