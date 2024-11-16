// 1.Create variables for a first name, last name, and age. Apply camelCase naming convention .

let firstName = "Anil";
let lastName = "Kumar";
let age = 20;

console.log(firstName);
console.log(lastName);
console.log(age);

// 2.What will the following code output?


// console.log(typeof 42); //Answer Number     
// console.log(typeof 'Hello'); // Answer  String 
// console.log(typeof true);      // Answer Boolean    
// console.log(typeof { name: 'John' }); // Answer Object
// console.log(typeof [1, 2, 3]);    //Answer  Object

   
// 3.Create two variables, a and b, and assign them values. Use the > and < operators to compare a and b. Log whether a is greater than, less than, or equal to b.

// let a = 20;
// let b = 16;

// if(a > b){
//     console.log("A is greater than B");
// }else if(a < b){
//     console.log("A is less than B");
// }else if (a == b){
//     console.log("A and B is equal");
// }else{
//     console.log("Not comparesion A and B");
// }

// 4.Create a variable value and assign it a numeric value. Use the pre-increment (++value), post-increment (value++), pre-decrement (--value), and post-decrement (value--) operators. Log the value of value before and after each operation.
// let value = 7;
// console.log(++value); Answer 8
// console.log(value);   Answer  8
// console.log(value++); Answer  8
// console.log(value);  Answer   9
// console.log(--value); Answer   8
// console.log(value);  Answer   8
// console.log(value--); Answer   8
// console.log(value);  Answer   7

// 5.Assign `a = 15` and `b = 20`. Log whether `a` is greater than, less than, or equal to `b`.  

// let a = 15;
// let b = 20;

// if(a > b){
//     console.log("A is greater than B");
// }else if(a < b){
//     console.log("A is less than B");
// }else if(a == b){
//     console.log("A is equal to b");
// }else{
//     console.log("Not equal and greater than and less than A and B");
// }

// 6.Assign `age = 22`. Use a ternary operator to log `'Adult'` if `age` is 18 or older, and `'Minor'` otherwise.  

// let age = 22;

// console.log(age > 15 ? "Adult" : "Minor");


// 7. print pyramid pattern 
//      *
//     ***
//    *****
//   ******* 


// row              space             star
// 1. i = 4          j = 1  n-i        k = 1
// 2. i = 4          j = 2  n-i        k = 3
// 3. i = 4          j = 3  n-i        k = 5
// 4. i = 4          j = 4  n-i        k = 7

// let n = 4;
// let m = 7;

// for(let i=1; i<=4; i++){
//     let str = "";
//     for(let j=1; j<=n-i+1; j++){
//         str = str+ " ";
//     }
//     for(let k=1; k<=2*i-1; k++){
//         str = str+ "*"
//     }
//     console.log(str);
// }

// 8.Write code that checks if the variable `num` is even or odd. num value is taken by user Print "Even" if it is even, and "Odd" if it is odd.

// function Hello(){

//     let num = prompt("Enter the value");

// if(num%2==0){
//     console.log("Evnen");
// }else{
//     console.log("Odd");
// }

// }

// Hello();


// 9.Write code that checks the variable `score` and prints a grade based on the following criteria:
//  - "Excellent" for scores 90 and above  
//  - "Good" for scores between 70 and 89
//  - "Needs Improvement" for scores below 70

//   let score = 85;

//   if(score >= 90){
//     console.log("Excellent");
//   }else if(score >= 70 && score <= 89){
//     console.log("Good");
//   }else {
//     console.log("Needs Improvement");
//   }


