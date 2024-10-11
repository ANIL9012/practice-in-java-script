// 1.Imagine you are building a simple program to manage a book inventory. Each book has attributes such as title, author, publication year, and price. Your task is to define meaningful variable names for these attributes.

// let bookTitle;
// let bookAuthor;
// let publicationYear;
// let bookPrice;


// 2.Write a program that declares three variables (one for each data type: string, number, and boolean), assigns values to them, and then prints the values and types of these variables.

// let a = "This is a string value";
// let b = 123;
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// 3.Write a program that declares a variable and initializes it with an integer value. Perform both pre-increment and post-increment operations on the variable and print the results.

// let pre_inc = 50;
// console.log(pre_inc);

// ++pre_inc;
// console.log(++pre_inc); //pre-increment

// pre_inc++;
// console.log(pre_inc++); //post-increment


// 4.Create a program that calculates and displays the area of a rectangle. Prompt the user for the length and width of the rectangle, store the values in variables, and use them to calculate the area.


// let length = prompt("Enter the length value");
// let width = prompt("Enter the width value");

// console.log("Area of rectangle", length * width);


// 5.Write a program that takes a user's first name, last name, and age as input and then outputs a message using variables to concatenate and format the strings.


// let fname = prompt("Enter your first name");
// let lname = prompt("Enter your last name");
// let age = prompt("Enter your age");

// let message = "Hello"+ " " + fname + " " + lname + " " + age;

// console.log(message);


// 6.Write a program that takes two numbers as input from the user and performs arithmetic operations (addition, subtraction, multiplication, division). Display the results of each operation.

// let num1 = parseFloat(prompt("Enter first number: "));
// let num2 = parseFloat(prompt("Enter second number: "));

// let addition = num1 + num2;
// let subtrection = num1 - num2;
// let multiplication = num1 * num2;
// let division = num1 / num2;
// let modulas = num1 % num2;

// console.log( "Get are the value of user =",`Addition= ${addition} and Subtraction= ${subtrection} and Multiplication= ${multiplication} and Division= ${division} and Modulas= ${modulas}`);


// 7.Create a program that compares two numbers entered by the user using comparison operators. Output whether the first number is greater than, less than, or equal to the second number.

// let number1 = parseInt(prompt("Enter a nuemeric value: 1"))
// let number2 = parseInt(prompt("Enter a nuemeric value: 2"))

// if(number1 > number2){
//     console.log("The first number is greater than the second number");
// }else if(number1 < number2){
//     console.log("The first number is less than the second number");

// }else{
//     console.log("The first number is == second number");
// }


// 8.Implement a program that checks if a user-entered number is divisible by 
//    both 3 and 5. Use logical AND (&&) to make this determination.

// let number = parseInt(prompt("Enter a number divided 3 and 5"));

// if(number % 3 == 0 && number % 5 == 0){
//     console.log("The number is divisible by both 3 and 5.");
// }else{
//     console.log("The number is not divisible by both 3 and 5.");
// }


// 9.Create a program that calculates the total price of items in a shopping cart. Prompt the user for the price of an item and the quantity, then use the assignment operators to update the total price.

// let totalprice = 0;

// let price = parseInt(prompt("Enter the price of the product"))
// let quantity = parseInt(prompt("Enter the quantity of the product"))

// let = totalprice = price + quantity;

// console.log("Totale price of items = ", totalprice);

// 10.Implement a program that takes an integer as input and determines whether it is even or odd using the modulus operator.

// let odd_even_number = parseInt(prompt("Enter an any  number"));

// if(odd_even_number % 2 == 0){
//     console.log("The number is even");
// }else{
//     console.log("The number is odd");
// }

// 11.Write a program that checks whether a user-entered number is positive, negative, or zero using the if-else statement. Display the result accordingly.

// let numberposition = parseInt(prompt("Enter a number"));

// if(numberposition > 0){
//     console.log("The number is positive");
// }else if(numberposition < 0){
//     console.log("The number is negative");
// }else{
//     console.log("Number is zero");
// }


// 12.Write a JavaScript program that classifies students into different grade categories based on their exam scores. Prompt the user to enter a numeric score, and then use if-else if-else statements to determine and display the corresponding grade category.

// let grade = parseFloat(prompt("Enter percentage"));

// if(grade >= 90 && grade <= 100){
//     console.log("Exellent");
// }else if(grade >= 70 && grade <= 89){
//     console.log("Good");
// }else if(grade >= 40 && grade <= 70){
//     console.log("Need Improvement");
// }else if(grade >= 33 && grade <= 40){
//     console.log("You are Fail");
// }else{
//     console.log("Enter valid percentage");
// }

// 13.Create a program that prompts the user to enter a day of the week (as a number, e.g., 1 for Monday). Use a switch statement to output the corresponding day name.

// let day = parseInt(prompt("Enter Week day number"));

// switch(day){
//     case 1:
//         console.log("Sunday");
//     break;

//     case 2:
//         console.log("Monday");
//     break;

//     case 3:
//         console.log("Tuesday");
//     break;

//     case 4:
//         console.log("Wednesday");
//     break;

//     case 5:
//         console.log("Thursday");
//     break;

//     case 6:
//         console.log("Friday");
//     break;

//     case 7:
//         console.log("Saturday");
//     break;

//     default:{
//         console.log("Enter valid week day");
//     }
// }



// 14.Implement a program that uses a while loop to print the numbers from 1 to 10.

// let loop_number = 1;

// while(loop_number <= 10){
//     document.write("Anil kumar" + "<br>");
//     // console.log("Anil Kumar");
//     loop_number = loop_number + 1;
// }

// 15.Write a JavaScript program that uses a for loop to print the squares of numbers from 1 to 20.  then use a for loop to calculate and print the square of each number.

                    //  Sir ke liye quation 

// let number = parseInt(prompt("Enter an integer number")) //user se value le tab anannt tak jaye value

// for(let i = 1; i <= 20; i++){

//     let square = i * i;
//     // console.log("number square", number,square);
//     console.log(`number= ${number} i= ${i} squar= ${square}`);

// }


// 16.Write a JavaScript program that prompts the user to enter a number and generates the multiplication table for that number. Use a for loop to calculate and display the multiplication table from 1 to 10 for the entered number.

// let number = parseInt(prompt("Enter the number multiplication table"))

// for(let i=1; i<=10; i++){
//     let result = number * i;
//     console.log(`number= ${number} and i= ${i} and result= ${result}`);
// }



// 17.Write a JavaScript program that defines a function called  greet which takes a person's name as a parameter and displays a personalized greeting message. Then, call this function with a user-provided name and show the greeting message.

// function greet(name){
//     console.log(name);
// }

// let username = prompt("Enter your name")

// greet(username)



// 18.Write a JavaScript program that defines a function called EvenOrOdd which takes an integer as a parameter and displays whether the number is even or odd. Then, call this function with a user-provided integer.

// function evenodd(number){
//     if(number%2===0){
//         console.log("number is even");
//     }else{
//         console.log("Number is odd");
//     }
// }

// let usernumber = prompt("Enter number");

// evenodd(usernumber)


// 19.Write a JavaScript program that defines a function called RepeatCharacter which takes a character and a number as parameters and displays a string composed of the repeated character. Then, call this function with a user-provided character and number.

// function RepeatCharacter(char, num) {
//     let result = ""; // Start with an empty string
//     for (let i = 0; i < num; i++) {
//         result += char; // Add the character to the result each time
//     }
//     return result;
// }
// // Asking the user for input
// let character = prompt("Enter a character to repeat:");
// let number = parseInt(prompt("Enter how many times to repeat it:"));
// // Calling the function and showing the result
// let result = RepeatCharacter(character, number);
// console.log(result); // Print the repeated character string
// function RepeatCharacter(char, count) {
//     console.log(char.repeat(count));
// }
// let character = prompt("Enter a character:");
// let repeatCount = parseInt(prompt("Enter a number:"));
// RepeatCharacter(character, repeatCount);



// 20.Write a JavaScript program that defines a recursive function called calculateFactorial which takes a positive integer as a parameter and calculates its factorial. Then, call this function with a user-provided positive integer.

// function calculateFactorial(n) {
//     if (n <= 1) return 1;
//     return n * calculateFactorial(n - 1);
// }
// let num = parseInt(prompt("Enter a positive integer:"));
// console.log("Factorial:", calculateFactorial(num));