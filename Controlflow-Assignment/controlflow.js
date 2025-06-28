// 1. Write code that checks if the variable `num` is greater than 10. If it is, print "Greater than 10".
//    let num = 15;  // You can change this value to test



// let num = 15; 

// if (num > 10) {
//   console.log("Number is Greater than 10");
// }


                // Ya


// let num  = prompt("Enter the value");
// if(num>10){
//     console.log("Number is greater than 10");
// }else if(num == 10){
//   console.log("Number is Equal to 10");
// }else if (num < 10){
//   console.log("Number is Lessthan 10");
// }else{
//   console.log("Enter the correct value");
// }

// 2. Write code that checks if the variable `num` is greater than or equal to 0. If it is, print "Non-negative"; otherwise, print "Negative".
//    let num = -3;  // You can change this value to test
  
// let num = -3;

// if(num >=0 ){
//     console.log("Number is Non-negative");
// }else{
//     console.log("Number is Negative");
// }


                // Ya 

// let num1 = prompt("Enter a value");
// if(num1>=0){
//     console.log("Number is Positive");
// }else{
//     console.log("Number is Negative");
// }

// 3. Write code that checks the variable `score` and prints a grade based on the following criteria:
//    - "Excellent" for scores 90 and above
//    - "Good" for scores between 70 and 89
//    - "Needs Improvement" for scores below 70
//    let score = 85;  // You can change this value to test

// let score =85; // You can change this value to test

// if (score >= 90) {
//   console.log("Excellent");
// } else if (score >= 70 && score <= 89) {
//   console.log("Good");
// } else {
//   console.log("Needs Improvement");
// }

                //  YA

// let per = prompt("Enter percentage");
//  if(per >= 90 && per <= 100){
//     console.log("Excellent");
//  }else if(per >= 70 && per < 90){
//     console.log("Good");
//  }else if(per >= 40 && per < 70){
//     console.log("Need Improvement");
//  }else{
//     console.log("Please enter valid percentage");
//  }


// 4. Write code that uses a `switch` statement to print the name of the day based on the variable `day`. Use the following values:
//    - 1 for "Monday"
//    - 2 for "Tuesday"
//    - 3 for "Wednesday"
//    - 4 for "Thursday"
//    - 5 for "Friday"
//    - 6 for "Saturday"
//    - 7 for "Sunday"
//    let day = 4;  // You can change this value to test


// let day = parseInt(prompt("Enter day number"));

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
//         console.log("Sutarday");
//     break;

//     default:
//         console.log("Enter the valid week day");
// }

// 5. Write code that checks if the variable `num` is between 10 and 20 (inclusive). Print "In range" if it is, otherwise print "Out of range".
//    let num = 15;  // You can change this value to test

// let num = parseInt(prompt("Enter the range and non range number"));

// if(num>=10 && num<=20){
//     console.log("The number in range 10 and 20");
// }else{
//     console.log("the number is not a range in 10 and 20");
// }

// 6. Write code that checks if the variable `num` is positive. If it is, then check if it is greater than 100. Print "Large Positive" if it is greater than 100; otherwise, print "Small Positive".
//    let num = 120;  // You can change this value to test

// let num = 120; 

// if (num > 0) {
//   if (num > 100) {
//     console.log("Large Positive");
//   } else {
//     console.log("Small Positive");
//   }
// } else {
//   console.log("Not Positive");
// }

                  //  Ya

// let num100 = parseInt(prompt("Enter the number"))

// if(num100 > 0){
//   if(num100 > 100){
//     console.log("Large Positive");
//   }else{
//     console.log("Small Positive");
//   }
// }else{
//   console.log("Enter Valid Number");
// }

   
//    7.Write code that checks if the variable `num` is even or odd. Print "Even" if it is even, and "Odd" if it is odd.

//    let num = 5;  // You can change this value to test

//    if (num %2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

            //  Get User Number Odd and Even 

// let oddEven = parseInt(prompt("Enter Any Number"));

// if(oddEven %2 === 0){
//   console.log("Even Number");
// }else{
//   console.log("Odd Number");
// }


            //  Get User Number 100 hw many different Odd and Even  

// let userNumber = parseInt(prompt("Enter a number:"));

// // Arrays to store even and odd numbers
// let evenNumbers = [];
// let oddNumbers = [];

// for (let i = 1; i <= userNumber; i++) {
//     if (i % 2 === 0) {
//         evenNumbers.push(i);
//     } else {
//         oddNumbers.push(i);
//     }
// }

// console.log("Even Numbers:", evenNumbers);
// console.log("Odd Numbers:", oddNumbers);



            //    FUNTION SE ODD OR EVEN NUMBER RECIEVE 

// function checkEvenOrOdd() {
//     // Get user input and convert it to a number
//     let num = parseFloat(prompt("Enter a number:"));
  
//     // Check if the input is a valid number
//     if (num %2 === 0) {
//       console.log("Even");
//     }else {
//       console.log("Odd");
//     }
//   }
  
//   // Call the function
//   checkEvenOrOdd();
  

// 8. Write code that uses a `switch` statement to print the type of vehicle based on the variable `vehicleType`. Use the following values:
//    - "car" for "Car"
//    - "bike" for "Bike"
//    - "truck" for "Truck"
//    - "other" for "Other"

//    Make sure to include a `default` case for any other value.

//    let vehicleType = "plane";  // You can change this value to test

// let vehicletype = prompt("Enter name") 

// switch(vehicletype){

//     case"car":
//     console.log("Car");
//     break;

//     case"bike":
//     console.log("Bike");
//     break;

//     case"truck":
//     console.log("Truck");
//     break;

//     case"other":
//     console.log("Other");
//     break;

//     default:{
//         console.log("Enter the valide name");
//     }

// }


// 9.Write code that classifies the age of a person based on the variable `age` and prints:
//    - "Child" for ages less than 13
//    - "Teenager" for ages between 13 and 19
//    - "Adult" for ages 20 and above

// let age = prompt("Enter the age");

// if(age<=13){
//     console.log("Child");
// }else if(age>13 && age<=19){
//     console.log("Teenager");
// }else{
//     console.log("Adult");
// }



// 10.Write code that uses a `switch` statement to print a message based on the variable `month`. Use the following values:
    // - 1 for "January"
    // - 2 for "February"
    // - 3 for "March"
    // - 4 for "April"
    // - 5 for "May"
    // - 6 for "June"
    // - 7 for "July"
    // - 8 for "August"
    // - 9 for "September"
    // - 10 for "October"
    // - 11 for "November"
    // - 12 for "December"


    // let month = 7;  // You can change this value to test


    // let month = prompt("Enter the month number");

    // switch (month){
    //     case "1":
    //         console.log("January");
    //     break;

    //     case "2":
    //         console.log("Fruary");
    //     break;

    //     case "3":
    //         console.log("March");
    //     break;

    //     case "4":
    //         console.log("April");
    //     break;        

    //     case "5":
    //         console.log("may");
    //     break;

    //     case "6":
    //         console.log("June");
    //     break;

    //     case "7":
    //         console.log("July");
    //     break;

    //     case "8":
    //         console.log("August");
    //     break;

    //     case "9":
    //         console.log("September");
    //     break;

    //     case "10":
    //         console.log("Ouktuber");
    //     break;

    //     case "11":
    //         console.log("Nobember");
    //     break;

    //     case "12":
    //         console.log("Desember");
    //     break;

    //     default:{
    //         console.log("Enter the valide month number");
    //     }

    // }

// 11.Write code that classifies the age of a person/student based on the variable `student working` `leraning person` and prints:

// let studentAge = 18;

// if(studentAge >= 18 && studentAge <= 24){
//     console.log("He is a student");
//     console.log("He is a learning computer science");
// }

// 12.Write code that classifies the user name get the user age of a person based on the variable `working` `Professional ` get the user and prints:

// let userName = prompt("please enter your Name");
// let userAge = prompt("please enter your Age");

// if(userAge >= 25 && userAge <= 45){
//     console.log(userName,"is a working Professional ");
//     console.log("He is a web Developer");
// }



// 13.Write code that classifies the name age gender of a person based on the variable `working` `Professional` get the user and prints:
// // He/she part can also be doen with the help of if else, i have tried 


// const name = prompt('enter you name')  || ('Educational')
// const age = prompt('enter you age') || (25) 
// const gen  = prompt('enter you gender as Male or Female') || (`Others`)

// console.log( `Name of the Student is : ${name}`)
// console.log (`User Age is': ${age}`)
// console.log (`Gender: ${gen}`)

// if(gen == 'male') {
//     console.log('He reads newspaper daily')
// }
// else if(gen == 'female')
// {
//     console.log('She reads newspaper daily')
// }else{
//     console.log("Others");
// }


// 14. Write code that uses a `if` statement to print the name of the day based on the variable `dayNumber`. Use the following values:
//    - 1 for "Monday"
//    - 2 for "Tuesday"
//    - 3 for "Wednesday"
//    - 4 for "Thursday"
//    - 5 for "Friday"
//    - 6 for "Saturday"
//    - 7 for "Sunday"

// const dayNumber = parseFloat(prompt("Enter day number"))

// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

// .15 Write code that checks the variable `score` and prints a grade based on the following criteria:
//    - "Excellent" for scores 90 and above
//    - "Good" for scores between 70 and 89
//    - "Needs Improvement" for scores below 70


// const grade = prompt("Enter the grade");

// switch (grade) {
//   case 'a':
//     console.log('Your score is between 85% to 100%.')
//     break
//   case 'b':
//     console.log('Your score is between 75% to 85%')
//     break
//   case 'c':
//     console.log('Your score is between 60% to 75%')
//     break
//   case 'd':
//     console.log('Your score is between 50% to 60%')
//     break
//   case 'e':
//     console.log('Your score is between 30% to 50%')
//     break
//   default:
//     console.log('Sorry, you are failed.')
// }

                //   Example----2 Start

// let userName = prompt("Enter user name")
// let grade = parseFloat(prompt("Enter the grade/percentage"));

// // Classify the grade into a range

// let range;

// if (grade >= 85 && grade <= 100) {
//   range = 'A';
// } else if (grade >= 75 && grade < 85) {
//   range = 'B';
// } else if (grade >= 60 && grade < 75) {
//   range = 'C';
// } else if (grade >= 50 && grade < 60) {
//   range = 'D';
// } else if (grade >= 30 && grade < 50) {
//   range = 'E';
// } else {
//   range = 'F';
// }

// // Use the switch statement with the categorized range

// switch (range) {
//   case 'A':
//     console.log(`${userName} Your score is between 85% to 100%.`);
//     break;
//   case 'B':
//     console.log(`${userName} Your score is between 75% to 85%.`);
//     break;
//   case 'C':
//     console.log(`${userName} Your score is between 60% to 75%.`);
//     break;
//   case 'D':
//     console.log(`${userName} Your score is between 50% to 60%.`);
//     break;
//   case 'E':
//     console.log(`${userName} Your score is between 30% to 50%.`);
//     break;
//   default:
//     console.log(`${userName} Sorry, you failed.`);
// }

                //   Example----2 END


// 16. Write code that checks the variable `age` and prints a grade based on the following criteria:
// Get user input

// let username = prompt("Enter your name:");
// let userAge = parseInt(prompt("Enter your age:"), 10);

// // Validate the userAge input
// if (isNaN(userAge) || userAge < 0 || userAge > 120) {
//   console.log("Please enter a valid age between 0 and 120.");
// } else {
//   // Use switch with true to handle range-based conditions
//   switch (true) {
//     case userAge >= 0 && userAge <= 4:
//       console.log(`${username} is a kid.`);
//       break;
//     case userAge >= 5 && userAge <= 17:
//       console.log(`${username} is a school student.`);
//       break;
//     case userAge >= 18 && userAge <= 24:
//       console.log(`${username} is a college student.`);
//       break;
//     case userAge > 24 && userAge <= 45:
//       console.log(`${username} is a working professional.`);
//       break;
//     case userAge > 45 && userAge <= 120:
//       console.log(`${username} is retired.`);
//       break;
//     default:
//       console.log("Please enter a valid age.");
//   }
// }

// 4. Write code that uses a `if else` statement to print the name of the day based on the variable `day`. Use the following values:

// let day = parseInt(prompt("Enter a number(1 to 7):"));

// if(day === 1){
//     console.log("Sunday");
// }else if(day === 2){
//     console.log("Monday");
// }else if(day === 3){
//     console.log("Tuesday");
// }else if(day === 4){
//     console.log("Wednesday");
// }else if(day === 5){
//     console.log("Thursday");
// }else if(day === 6){
//     console.log("Friday");
// }else if(day === 5){
//     console.log("Saturday");
// }else{
//      alert("Invalid input! Please enter a number between 1 and 7.");
// }