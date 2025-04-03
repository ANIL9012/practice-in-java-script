// 1. NESTED LOOP

// 1.
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


// let n = 5;
// let m = 5;

// for(let i=1; i<=n; i++){
//     let str = ""
//     for(let j=1; j<=i; j++){
//         str = str+j+ " "
//     }
//     console.log(str);
// }


// 2.

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5


// let n = 5;
// let m = 5;

// for(let i=1; i<=n; i++){
//     let str = ""
//     for(let j=1; j<=i; j++){
//         str = str+i+ " "
//     }
//     console.log(str);
// }

// 3.

// 5 5 5 5 5 
// 4 4 4 4
// 3 3 3
// 2 2
// 1


// let n = 5;
// let m = 5;

// for(let i=n; i>=1; i--){
//     let str = ""
//     for(let j=1; j<=i; j++){
//         str = str+i+ " "
//     }
//     console.log(str);
// }

// 4.

// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1


// let n = 5;
// let m = 5;

// for(let i=n; i>=1; i--){
//     let str = ""
//     for(let j=i; j>=1; j--){
//         str = str+j+ " "
//     }
//     console.log(str);
// }


// 5.
// *****
// ****
// ***
// **
// *


// let n = 5;
// let m = 5;

// for(let i=n; i>=1; i--){
//     let str = "";
//     for(let j=1; j<=i; j++){
//         str = str+"*";
//     }
//     console.log(str);
// }

// 6.
// *****
//  ***
//   *


 // row      space      star      
    // i=3        j= 0 n-i    k=5
    // 2       j= 1  n-i   k=3
    // 1       j= 2   n-i  k=1

// let n = 3;
// let m = 5;

// for(let i=n; i>=1; i--){
//     let str = "";
//     for(let j=1; j<=n-i+1; j++){
//         str = str+" ";
//     }
//     for(let k = 1; k<=2*i-1; k++){
//         str = str+"*"
//     }
//     console.log(str);
// }

// 7.
//  1
//  2 3
//  4 5 6
//  7 8 9 10 


// let n = 1;
// let m = 4;

// for(let i=1; i<=4; i++){
//     let str = "";
//     for(let j=1; j<=i; j++){
//         str = str + n +" ";
//         n++;
//     }
//     console.log(str);
// }


//  8.
//     *
//    **
//   ***
//  ****

// let n = 4;
// let m = 4;

// for(let i=1; i<=n; i++){
//     let str = "";
//     for(let j=1; j<=n-i+1; j++){
//         str = str+ " ";
//     }
//     for(let k=1; k<=i; k++){
//         str = str+ "*"
//     }
//     console.log(str);
// }

//  9.
//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1


// let n = 5;
// let m = 5;

// for(let i=5; i>=1; i--){
//     let str = "";
//     for(let j=1; j<=i; j++){
//         str = str+ j+" ";
//     }
//     console.log(str);
// }

//  10.
//  *****
//  *   *
//  *   *
//  *****



// let n = 4;
// let m = 5;

// for(let i=1; i<=n; i++){
//    let str ="";
//    for(let j=1; j<=m; j++){
//     if(i===1||i===n||j===1||j===m){
//         str = str+ "*"
//     }else{
//         str = str+ " "
//     }
//    }
//    console.log(str);
// }


// 3.CONTROLFLOW-STETMENT-START 

// 1. Write code that checks if the variable `num` is greater than 10. If it is, print "Greater than 10".
//    let num = 15;  // You can change this value to test

// let num = prompt("Enter the value");

// if(num > 10){
//     console.log("Number is Greater than 10");
// }else if(num < 10){
//     console.log("Number is less than 10");
// }

// 2. Write code that checks if the variable `num` is greater than or equal to 0. If it is, print "Non-negative"; otherwise, print "Negative".
//    let num = -3;  // You can change this value to test

// let num1 = prompt("Enter the value");

// if(num1>0){
//     console.log("Number is positive greater than 0");
// }else if(num1<0){
//     console.log("Number is less than 0 number is negative");
// }else{
//     console.log("Enter the value");
// }

// 3. Write code that checks the variable `score` and prints a grade based on the following criteria:
//    - "Excellent" for scores 90 and above
//    - "Good" for scores between 70 and 89
//    - "Needs Improvement" for scores below 70
//    let score = 85;  // You can change this value to test

// let grade= prompt("Enter the percentage");


// if(grade >=90 && grade <= 100){
//     console.log("Excellent");
// }else if(grade >= 70 && grade <= 89){
//     console.log("Good");
// }else if(grade >= 40 && grade <= 70){
//     console.log("Needs Improvement");
// }else{
//     console.log("Enter the valid percentage");
// }

// 4. Write code that uses a `switch` statement to print the name of the day based on the variable `day`. Use the following values:
//    - 1 for "Monday"
//    - 2 for "Tuesday"
//    - 3 for "Wednesday"
//    - 4 for "Thursday"
//    - 5 for "Friday"
//    - 6 for "Saturday"
//    - 7 for "Sunday"
//    let day = 4;  // You can change this value to test

// let day = prompt("Enter the day");


// switch(day){

//     case "1":
//         console.log("Sunday");
//     break;

//     case "2":
//         console.log("Monday");
//     break;

//     case "3":
//         console.log("Tuesday");
//     break;

//     case "4":
//         console.log("Wednesday");
//     break;

//     case "5":
//         console.log("Thursday");
//     break;

//     case "6":         console.log("Friday");
//     break;

//     case "7":
//         console.log("Sutarday");
//     break;

//     default:{
//         console.log("Enter the valide week day number");
//     }
//  }

// 5. Write code that checks if the variable `num` is between 10 and 20 (inclusive). Print "In range" if it is, otherwise print "Out of range".
//    let num = 15;  // You can change this value to test

// let range = prompt("Enter the value");

// if(range >= 10 && range <= 20){
//     console.log("The number is range 10 and 20");
// }else{
//     console.log("Enter the valid value");
// }

// 6. Write code that checks if the variable `num` is positive. If it is, then check if it is greater than 100. Print "Large Positive" if it is greater than 100; otherwise, print "Small Positive".
//    let num = 120;  // You can change this value to test

// let num3 = prompt("Enter the value");

// if(num3>100){
//     console.log("Number is greater than 100 positive");
// }else if(num3<=100){
//     console.log("Number is less than 100 positive");
// }

//    7.Write code that checks if the variable `num` is even or odd. Print "Even" if it is even, and "Odd" if it is odd.

// let num = 5;  // You can change this value to test

// if (num %2 === 0) {
//  console.log("Even");
// } else {
//  console.log("Odd");
// }

// 8. Write code that uses a `switch` statement to print the type of vehicle based on the variable `vehicleType`. Use the following values:
//    - "car" for "Car"
//    - "bike" for "Bike"
//    - "truck" for "Truck"
//    - "other" for "Other"


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

// if(age<13){
//     console.log("Child");
// }else if(age>=13 && age<=19){
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


// 10.what is switch controlflow statement in javaScript with example in calculator


// function calculator(num1, num2, operator) {
//     let result;
  
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//       case 'x': // 'x' can also be used for multiplication
//         result = num1 * num2;
//         break;
//       case '/':
//         if (num2 !== 0) {
//           result = num1 / num2;
//         } else {
//           return "Error: Division by zero is not allowed.";
//         }
//         break;
//       default:
//         return "Error: Invalid operator.";
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const num1 = 10;
//   const num2 = 5;
  
//   console.log(calculator(num1, num2, '+')); // Output: 15
//   console.log(calculator(num1, num2, '-')); // Output: 5
//   console.log(calculator(num1, num2, '*')); // Output: 50
//   console.log(calculator(num1, num2, 'x')); // Output: 50
//   console.log(calculator(num1, num2, '/')); // Output: 2
//   console.log(calculator(num1, 0, '/'));    // Output: Error: Division by zero is not allowed.
//   console.log(calculator(num1, num2, '%')); // Output: Error: Invalid operator.
  

// 11.what is switch controlflow statement in javaScript with example in calculator value Get user input for numbers and operatoruser 

// exam.1 

// function calculator() {
//     // Get user input for numbers and operator
//     const num1 = parseFloat(prompt("Enter the first number:"));
//     const num2 = parseFloat(prompt("Enter the second number:"));
//     const operator = prompt("Enter the operator (+, -, *, /, %, **):");
  
//     let result;
  
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '%':
//         result = num1 % num2
//         break;
//       case '*':
//       case 'x': // allowing 'x' for multiplication
//         result = num1 * num2;
//         break;
//       case '/':
//         if (num2 !== 0) {
//           result = num1 / num2;
//         } else {
//           return "Error: Division by zero is not allowed.";
//         }
//         break;
//       default:
//         return "Error: Invalid operator.";
//     }
  
//     return `The result of ${num1} ${operator} ${num2} is: ${result}`;
//   }
  
//   // Run the calculator
//   console.log(calculator());
  

// exam.2

//   function calculator2(){
//     let number1 = parseInt(prompt("Enter the first value"));
//     let number2 = parseInt(prompt("Enter the second value"));
//     let operaror2 = prompt("+, -, *, /, %, x,");
//     let result2;

//     switch(operaror2){
//         case '+':
//             result2 = number1 + number2;
//         break;

//         case '-':
//             result2 = number1 - number2;
//         break;

//         case '*':
//             result2 = number1 * number2;
//         break;

//         case '%':
//             result2 = number1 + number2;
//         break;

//         case '/':
//             if(number2 !==0){
//                 result2 = number1/number2
//             }else{
//                 return` zero devisiable not allowed`
//             }
//         break;

//         default:
//             "return the invalid operator"
        
//     }
//     return`"The calculator totale value = first value= ${number1} Second value= ${number2} operator{ ${operaror2} } and result2= ${result2}`
//   }

// console.log(calculator2());




// 1. ARRAY ALL CONCEPT START 

                // 0        1    2     3 ye array ke index number he 
// let array = ["Himanshu", 8, "Male", 4];

// console.log(array);
// console.log(array[0]);


// 1. multidimensional Array start 

// var array1 = [
//     ["Name", "age", "Gendar", "Class"],
//     ["Himanshu", 8, "Male", 4],
//     ["Monika", 15, "Female", 10],
//     ["Harry", 28, "Male", "B.com"],
//     ["Sunny", 29, "Male", "B.ed"]
// ];
// console.log(array1 [0]);
// console.log(array1 [1]);
// console.log(array1 [2]);
// console.log(array1 [3]);
// console.log(array1 [4]);

// document.write("<table border='1px' cellspacing='4px'>");
// for(let a=0; a<5; a++){
//     document.write("<tr>");
//     for(let b=0; b<4; b++){
//         document.write("<td>" + array1[a][b] + "</td>");
//     }
//    document.write("</tr>");
// }
// document.write("</table>");


// let array2 = [
//     ["Name", "age", "gender", "class"],
//     ["Sunjana", 3, "Female", "LKG"],
//     ["Monika", 3, "Female", 1],
//     ["Himanshu", "5", "Male", 1],
//     ["Anil", 22, "Male", "MCA"]
// ];
// //document.write(array2.length);
// document.write("<table border='1px' cellspacing='0'>");
// for(let a=0; a<5; a++){
//     document.write("<tr>");
//     for(let b=0; b<4; b++){
//         document.write("<td>" + array2[a][b] + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");


// 2. MODIFY & DELETE ARRAY START

// var e =["Rahul", 34, "PHD"];

// console.log(e)

// //MODIFY
// e[0] = "Mohan";
// console.log(e);

// // DELETE
// var e =["Rahul", 34, "PHD"];
// delete e[1];
// console.log(e)
// console.log(e[1])

//MODIFY
// var r = [
//     ["Eritik", "Manoj", "Rishabh", "Daibik"],
//     ["Tilak Verma", "Anil", "Ajay", "Dinesh"],
//     ["Rinkesh", "Nikil", "Harshit", "Dolly"],
//     ["Kartik", "Sunjeev", "Rajeev", "Bikki"]
// ];

// console.log(r);

// r[0][0,1,2,3] = ["Rinkesh", "Nikil", "Harshit", "Dolly"];
// console.log(r)

// //DELETE
// var r = [
//     ["Eritik", "Manoj", "Rishabh", "Daibik"],
//     ["Tilak Verma", "Anil", "Ajay", "Dinesh"],
//     ["Rinkesh", "Nikil", "Harshit", "Dolly"],
//     ["Kartik", "Sunjeev", "Rajeev", "Bikki"]
// ];
// delete r[2];
// console.log(r);
// console.log(r[1]);

// ARRAY METHOD START 

//1. SORT & REVERSE
 
// let method = ["Ritu", "Mohan", "Raman", "PHD",4,7,9,3,2,6,51,1]

// console.log(method);

// // // //SORT:- sort method ka use sequense ya number  by kisi bhi  data ko represent karne ka hota he 1,2,3 ya a,b,c // sort elements aphabetically in string and number in asecending order.
// let sortmethod = method.sort();
// console.log(sortmethod);


// // REVERSE:-reverse method ka use sequense by kisi bhi data ko reverse state me represent karne me hota he
// let method = ["Ritu", "Mohan", "Raman", "PHD"]
// console.log(method);
// let reversemethod = method.reverse();
// console.log(reversemethod);

// 2. POP & PUSH 

// // POP:- pop method ka use array ki last bali value ko delete karne me hota he 

// let method2 = ["Kartik", "Sunjeev", "Rajeev", "Bikki"];
// console.log(method2);
// let popmethod = method2.pop();
// console.log(popmethod);
// console.log(method2);

// // PUSH:- push method ka use array ke last me value ko push ya anay value ko addd  karne me hota he 

// let method2 = ["Kartik", "Sunjeev", "Rajeev", "Bikki"];
// console.log(method2);
// let pushmethod = method2.push("Harshit");
// console.log(method2);


// 3. SHIFT & UNSHIFT 

// // SHIFT:- shift method ka use array ki start bali value ko delete karne me hota he

// let metod3 = ["Tilak", "Anil", "Ajay", "Dinesh"];
// console.log(metod3);

// let shiftmethod = metod3.shift();
// console.log(metod3);

// //UNSHIFT:- unshift method ka use array ke start me value ko unshift ya kisi bhi value ko add  karne me hota he 

// let metod3 = ["Tilak", "Anil", "Ajay", "Dinesh"];
// console.log(metod3);
// let unshiftmethod = metod3.unshift("Prembabu");
// console.log(unshiftmethod);


// 4. CONCAT & JOIN

// CONCAT:- concat method ka use multiple array ko concat karana ya marge karne me hota he 

// let a = ["Anil","keshav","Rohit","Hitesh"];
// let b = ["Somveer","Vebhab","Tilak","Lucky"];
// let c = [87,90,45,60];
// let d = ["Lovekush","Lakshay","Subhnesh",true];

// let e = a.concat(b,c,d);
// console.log(e)

// JOIN:- join method ka use array me di gayi kisi bhi value ko ek string ke roop me represent karna hota he or hum chahe to eske beech me koi bhi sighn ya space create kar sakte he 


// let a = ["Anil","keshav","Rohit","Hitesh"];
// let b = ["Somveer","Vebhab","Tilak","Lucky"];
// let c = [87,90,45,60];
// let d = ["Lovekush","Lakshay","Subhnesh",true];

// let e = a.concat(b,c,d);
// console.log(e)
// let f = e.join(" / ")
// console.log(f)


// 5. SLICE & SPLICE 

// SLICE:- slice method ka use kisi bhi array ki index value ka use karke us array me se indexing me di gaye value se us index ki length ko nikalna me hota he 

// slice (start,end) //(executed karta he value ko)

// let a = ["Anil","keshav","Rohit","Hitesh","Jaiswal","Aniket","Rodash"];
// console.log(a);
// let b = a.slice(0,4)
// console.log(b)

// SPLICE:- splice method ka use array me di gaye  kisi bhi value ke beech me or value ko add karna ya end ya start ya beech bali value ko delete karne me hota he  

// splice(index, howmanydelet, "new value")

// let a = ["Anil","keshav","Rohit","Hitesh"];
// console.log(a)
// a.splice(2,0,"Rajeev","Shorabh")
// console.log(a)
// // delete ke liye use splice 
// a.splice(0,4,"Rajeev","Shorabh")
// console.log(a)


// 6. ISARRAY

// IsArray:- isarray method ka use karke hum ye pta lga sakte he ki kisi bhi variable me de gaye value array he ya nahi

// let a = ["Somveer","Vebhab","Tilak","Lucky"];
// // let a = 20;
// console.log(a)
// let b = Array.isArray(a);
// console.log(b)

        //  YA

// let a = ["Somveer","Vebhab","Tilak","Lucky"]
// let a = 20;
// let a = "Anil";

// if(Array.isArray(a)){
//     console.log("This is an Array");
// }else{
//     console.log("This is not an Araay");
// }


// 7. INDEXOF & LASTINDEXOF

// INDEXOF:- indexOf method ka use array me di gaye kisi bhi value ka index number nikalne ke liye hota he chahe usme value ka name ya value same de rakhi ho 

// let a = ["Anil","keshav","Rohit","Hitesh","lovlesh","keshav","Mohit","Nakul"];
// console.log(a);
// let b = a.indexOf("keshav"2)
// console.log(b);
 

// // LASTINDEXOF:- lastIndexOf method ka use array me di gaye value ke last bali value se suru karta he

// let a = ["Anil","keshav","Rohit","Hitesh","lovlesh","keshav","Mohit","Nakul"];
// console.log(a);
// let c = a.lastIndexOf("keshav",5)
// console.log(c);

// 8. INCLUDES

// INCLUDES:- includes method ka use karke array ke kisi bhi value ka pta laga sakte he ki bo value us array me he ke nahi

// let a = ["Anil","keshav","Rohit","Hitesh","lovelesh","keshav","Mohit","Nakul"];
// console.log(a);

// let b = a.includes("lovelesh")
// console.log(b);

// 9.SOME & EVERY

// SOME:- some method ka use array me di gaye value me yeh check karnne ka hota he jo bhi value array me di gaye he bo us value se adult he ya == he ya di gaye condition ke anushar answer.

// let ages = [10,13,15,18,20];
// console.log(ages);

// let b = ages.some(checkAdult)
// console.log(b);

// function checkAdult(age){
//     return age < 12;
// }


                //   Ya

// let age2 = [10,30,40,15,20];

// let someResult = age2.some((oddNum,index)=>{
//         if(oddNum %2 === 1){
//                 console.log(`Oddnumber = ${oddNum} OddnumberIndex = ${index}`);
//         }

//         return oddNum %2 === 1
// })

// console.log(someResult);

// EVERY:- every method ka use array me di gaye sabhi value chekAdult ke age se ya to == ho ya Grater ho tabhi ervey method work karega ya di gaye conditon ko pass karle

// let ages = [12,14,15,19,34,45,18,20,];
// console.log(ages);

// let b = ages.every(checkAdult)
// console.log(b);

// function checkAdult(age){
//     return age > 9;
// }

        //     Ya 

// const evenNumbers = [4, 2, 10, 4, 60, 8]


// const result2 = evenNumbers.every((num, index) => {
//         if(num % 2 === 0) {
//         console.log(`EvenNumbar = ${num} EvenNumberIndex = ${index}`);
//         }
//         return num % 2 === 1
// })

// console.log(result2);
        

// 10. FIND & FINDINDEX

// FIND:- find method ka use array me di gaye value ko funtion me di gaye condition value ko pass karne ke bad value ko print karana 

// let ages = [10,13,15,18,20,56,90];
// console.log(ages);

// let b = ages.find(checkAdult)
// console.log(b);

// function checkAdult(ages){
//     return ages > 15;
// }

// FINDINDEX:- finindex method ka use array me di gaye kisi bhi value ko funtion me di gaye conditon ko pass karke us value ka index number provide karna hota he 

// let ages = [10,13,4,130,15,18,20];
// console.log(ages);

// let b = ages.findIndex(checkAdult)
// console.log(b);

// function checkAdult(age){
//     return age >= 18;
// }


// 11. FILTER

// FILTER:- filter method ka use array me di gaye value ko function me di gaye condition ke anushar value ko filter karna 

// let ages = [50,12,19,15,20,9,13,4,8];
// console.log(ages);

// let b = ages.filter(checkadult);
// console.log(b);

// function checkadult(filtersone){
//     return filtersone > 13
// }

// 12. forEach

// forEach:- forEach method ka use array ki all value ko print karane me hota he.

// let forEacharray = ["Raghav","Shonu","Mithlesh","Umakant","Alfaz"];

// let print = forEacharray.forEach(forlooparray);
// function forlooparray(val,index,arry){
//     console.log(`value=${val} and index= ${index} and array= ${arry} `);
//     // console.log(val,index,arry);
// }


            //    YA
         
                   
// let num = [1,23,4,55,54,3,98,08,3];

// let newnum = num.forEach(numberarray);

// function numberarray(val,index,array){
//     let sq = val*val;
//        console.log(`Value = ${val} Burg = ${sq} index= ${index} array = ${array}`);
// }



// 13.MAP  

// let numbermap = [1,34,54,45,6,65,6,2,4,6,66,77];

// let sum = 0;
// let newnumbermap = numbermap.map((val)=>{
//     sum = sum + val;
// })
// console.log(`sum= ${sum}`);

        //      Ya

// let arrayww = [3,23,45,34,254,35,54];

// let b = arrayww.map(mapsfun);

// function mapsfun(multiply){
//         return multiply * 10;
// }
// console.log(b);



// 14.multidimantional array

// let multiplearray = [
//     ["Anil","Raju","Mohan",["Python","Mongodb"],"Harshit","Lovekush"],
//     ["Aniket","Sontu","Kumkum","Lovely",["Java","JavaScript","c++",["Simran","Anjli","Mahek"]]],
//     ["Lokendra","Sakshi","Namritra",[1,34,4,6,6,2,56,45,["Local","tree",[2,4,45,334,2,5,6,78,["Dbms","iot","Desctop"]]]]]
// ]
// console.log(multiplearray);
// console.log(multiplearray[2][3][8][2][8][1]);




// 15.iterating

// let studentdata1=[
//     ['jack',23],
//     ['sara',25]
// ];
// // // 1. iterating over studentdata 

// studentdata1.forEach((val)=>{
//         val.forEach((data,ind)=>{
//             // console.log("name is ",data,"  index is ",ind)
//             console.log(`data= ${data} index= ${ind}`);
//         })

// })


// let student = [
//     ["Anil",22],
//     ["Lokesh",28],
// ]

// console.log(student);

// student.forEach((val)=>{
//     val.forEach((data,ind)=>{
//                 console.log(`data = ${data} index= ${ind}`);
//             })
// });


// 2. iterating over studentdeta

// let studentdata2 = [
//     ["Anil",20],
//     ["Afzal",23]
// ]
// studentdata2.forEach((val)=>{
//     val.forEach((data2,ind,ary)=>{
//         console.log(data2,ind,ary);
//     })
// })

// 3. iterating over studentdata for-----of

// let studentdata=[
//     ['sam',23],
//     ['jesica',25]
// ];
// for (let i of studentdata){
//     for (let j of i){
//         console.log(j)
//     }
// }


// 16. toString , value , fill method 

// toString:- toString method ka use array me di gaye value ko string me convert karne me hota he 

// let s = ["Rakesh","Manoj","Prem","Raju"];
// console.log(s);

// let r = s.toString();
// console.log(r);



// Reduce method in Array 


// Reduce:- Array ke reduce method ka use array me di gayi value ki accumulation and current value or 
// array ki indexvalue ko get karne me hota he 

// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum); 


// Exa--2.

// Flatten an Array 

// let nestedArray = [[1, 2], [3, 4], [5, 6]];

// let flattened = nestedArray.reduce((accumulator, currentValue) => {
//     return accumulator.concat(currentValue);
// }, []);

// console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]


// Exam---3

// Count Occurrences

// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let fruitCount = fruits.reduce((accumulator, currentValue) => {
//     accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
//     return accumulator;
// }, {});

// console.log(fruitCount); 

// // Output: { apple: 3, banana: 2, orange: 1 }



// Exam---4

// Create an Object from an Array

// let keyValuePairs = [["name", "John"], ["age", 30], ["city", "New York"]];
// debugger
// let obj = keyValuePairs.reduce((accumulator, currentValue) => {
//     accumulator[currentValue[0]] = currentValue[1];
//     return accumulator;
// }, {});

// console.log(obj); 


// // Output: { name: 'John', age: 30, city: 'New York' }


        //     ARGUMENT CONVERT TO ARRAY  With Example 

// Exam---1

// function convertToArray() {
// let argsArray = [...arguments];
// console.log(argsArray); // Logs the arguments as an array
// }
        
// convertToArray(1, 2, 3, 4);


// Exam--2

// function convertToArray() {
// let argsArray = [];
// for (let i = 0; i < arguments.length; i++) {
//         argsArray.push(arguments[i]);
// }
// console.log(argsArray); // Logs the arguments as an array
// }

// convertToArray(1, 2, 3, 4,39,78,20,34); // Output: [1, 2, 3, 4]
    

        //    Use Spread Oprator


// const nums1 = [1, 2, 3, 4]
// const nums2 = [5, 6, 7, 8, 9]

// // (...) Three ... jo he bo he spread operator
// const joinedArray = [...nums1, ...nums2]

// let sum = 0;

// for(let i = 0; i < joinedArray.length; i++){
//         sum = sum + joinedArray[i]
// }
// console.log(sum);



          // Use rest params

// let numberarray = [23,4,6,2,3,4,5]

// function add(...nums) {
// return nums.reduce((acc, curr) => acc + curr)
// }

// const result = add(...numberarray)
// console.log(result);


// let animals = ["dog", "cat", "rabbit"];
// let removedAnimals = animals.splice(1, 1, "lion", "tiger"); 
// console.log(animals); // Output: ["dog", "lion", "tiger", "rabbit"]
// console.log(removedAnimals); // Output: ["cat"]





// STRING METHOD START 

// 1.LENGTH 

// LENGTH:- string ke length method ka use kisi bhi variabal me di gaye value ki length ko pta karna se hota he 

// let str = "JavaScript is a GREAT Language"
// // console.log(str);
// let a = str.length;
// console.log(a);


// 2.toLowerCase

// toLowerCase:- string ke toLowerCase method ka use kisi bhi variabal me di gaye value ko lower case me ya bole o small case me karne ka 

// let str = "JAVASCRIPT IS A GREAT LANGUAGE"
// // console.log(str);
// let a = str.toLowerCase();
// console.log(a);


// 3. toUpperCase

// toUpperCase:- string ke toUpperCase method ka use kisi bhi variabal me di gaye value ko uppercase me convert karne ka hota he 


// let str = "javascript is a great language"
// // console.log(str);
// let a = str.toUpperCase();
// console.log(a);


// 4.Includes 

// Includes:- string ke includes method ka use kisi bhi variabal me di gaye vakue me ye pta karna hota he ki variabal me bo value he ya nahi


// let str = "JavaScript is a GREAT Language"
// // console.log(str);
// let a = str.includes("is");
// console.log(a);


// 5.startWith 

// startWith:- string ke startWith method ka use variabal me di gaye kisi bhi value ke start bali value ko print karna 


// let str = "JavaScript is a GREAT Language"
// // console.log(str);
// let a = str.startsWith("J");
// console.log(a);


// 6.endWith

// endWith:- string ke  endWith method ka use kisi bhi variabal me di gaye gaye value ke end bale part ko print karna 


// let str = "JavaScript is a GREAT Language"
// // console.log(str);
// let a = str.endsWith("e");
// console.log(a);

// 7.search

// search:-string ke serch method ka use kisi bhi variabal me di gaye value ka index number provide karna 


// let str = "JavaScript is a GREAT Language"
// // console.log(str);
// let a = str.search("Language");
// console.log(a);

// 8.match

// match:- string ke match method ka use kisi bhi variabal me di gaye value ko array me convert karna ya 


// let str = "JavaScript is a  is GREAT Language"
// // console.log(str);
// let a = str.match(/is/g);
// console.log(a);

// 9.indexOf 

// indexOf:- string ke indexOf method ka use kisi bhi variabal me di gaye value ki index number batana 

// let str = "JavaScript is a  is GREAT Language"
// // console.log(str);
// let a = str.indexOf("is");
// console.log(a);

// 10.lastIndexOf 

// lastIndexOf:- string ke lastIndexOf method ka use kisi bhi variabal me di gaye value ke last index number ko batana

// let str = "JavaScript is a is GREAT Language"
// // console.log(str);
// let a = str.lastIndexOf("a");
// console.log(a);

// 11.replace

// replace:- string ke replace method ka use kisi bhi variabal me di gaye value ko replace karne me hota he 

// let str = "JavaScript is a GREAT Language"
// // console.log(str);
// let a = str.replace("JavaScript","PHP");
// console.log(a);

// let str = "JavaScript is a  is GREAT Language"
// // console.log(str);
// let a = str.replace(/is/g ,"PHP"); //globl tarike se value ko replace karna
// console.log(a);

// 12.trim

// trim:- string ke trim method ka use kisi bhi variabal me di gaye value ke beech bale space ko remove karne me hota he 

// let str = "        JavaScript is a  is GREAT Language   "
// // console.log(a);
// let a = str.trim();
// alert(a);

// 13.charAt 

// charAt:- string ke charAt method ka use kisi bhi variabal me di gaye value ka koi bhi index numbar dekar yeh pta karna hota he ki es index number per kon se value de hue he 

// let str = "JavaScript is a  is GREAT Language"
// // console.log(str);
// let a = str.charAt(14);
// console.log(a);


// 14.charCodeAt

// charCodeAt:- string ke charcodeat method ka use kisi bhi variable me di gaye value ka charcodeat print karane me hota he 

// let str = "JavaScript is a is GREAT Language"
// // console.log(str);
// let a = str.charCodeAt(22);
// console.log(a);

// 15.fromCharCode

// fromCharCode:- string ke fromcharcode method ka use kisi bhi variable me di gaye value ascii table ka nuber sighn ya number print karana hota he 

// let str = "JavaScript is a  is GREAT Language"
// console.log(str);
// let a = String.fromCharCode(34);
// console.log(a);

// 16.concat 

// concat:- string ke concat method ka use kisi bhi variable me di gaye value ko concat karna

// let str = "JavaScript is a  is GREAT Language"
// let str2 = "Python is a machine learning  Language"
// // console.log(str);
// let a = str.concat(" "+str2);
// console.log(a);

// 17.split   (converting string  to an array)

// split:- string ke split method ka use variable me di gaye vlue ko split karna ya bole to todna 

// let str = "JavaScript is a  is GREAT Language"
// console.log(str);
// let a = str.split("a");
// document.write(a)
// console.log(a);

                //      Ya 

                let str = "Red Green Blue Yellow";
                let colors = str.split(" ", 2);
                
                console.log(colors); // ["Red", "Green"]
                

// 18.repeat

// repeat:- string ke repeat method ka use variable me di gaye value ko repeat karbane ke liye hota he 

// let str = "JavaScript is a  is GREAT Language"
// // console.log(str);
// let a = str.repeat(2);
// console.log(a);

// 19.slice (slice value ko execute karta he)

// slice:- string ke slice method ka use variable me di gaye value index value de kar us value ko git karna ya prapt karna 

// let str = "JavaScript is a  is GREAT Language"
// // console.log(str);
// let a = str.slice(2,9);
// console.log(a);

// 20.substr (substr value ko execut karta he) or (extracts a part of string.2.does not change the original array.(include))

// substr:- string ke substr method ka use kisi bhi variable me di gaye value ko index number de kar value ko prapt karna hota he 

// let str = "JavaScript is a  is GREAT Language"
// // console.log(str);
// let a = str.substr(1,10);
// console.log(a);

// 21.substring

// substring:- string ke substring method ka use kisi bhi variable me di gaye value ko index number dekar us value ko prapt karna hota he 

// let str = "JavaScript is a  is GREAT Language"
// // console.log(str);
// let a = str.substring(2,12);
// console.log(a);

// 22.toString

// tostring:- string ke tostring method ka use variable me di gaye value ko string me convert karna hota he 

// let str = 234;
// let str2 = 50;
// // console.log(str);
// let a = str+str2.toString();
// console.log(a);

// 23. replaceAll 

// replaec:-string replaceAll method ka use di gayi string ko all replace karne me hota he 

// let str = "I love Java. Java is great!";
// console.log(str.replaceAll("Java", "JavaScript")); // "I love JavaScript. JavaScript is great!"


    //    Number Method Start 

// 1.NUMBER 

// Number:- number method ke number method ka use karke variable me string ke roop me diye gaye stringnumber ko number me convert karne me hota he

// let string = "100";
// console.log(typeof (string));

//         // Conbert to number 

// let num = Number(string);
// console.log(typeof (num));


// 2.parseInt 

// parseInt:- number method ke parseInt method ka use kisi bhi variable me di gaye decimal value ko Integer me conbert karne me hota he 

// let decimal = "10.33";

// let conInteger = Number.parseInt(decimal);

// console.log(conInteger);


// 3.parseFloat

// parseFloat:- Number method ke parseFloat method ka use kisi bhi variable me de gaye value jo decimal ke roop me he use  parseFloatdecimal me hi print karta he 

// let decimal2 = "90.3445";

// let flot = Number.parseFloat(decimal2);
// console.log(flot);


// 4.isFinite

// isFinite:- number method ke isFinite method ka use kisi bhi variable me di gaye number value ko count (di gaye number value countable he ya nahi) karne me hota he 

// let num2 = "100";

// let count = Number.isFinite(num2);
// console.log(count); // False examle ho gaya
// console.log(typeof count); // False examle ho gaya
 
// let num3 = Infinity;

// let count3 = Number.isFinite(num3);
// console.log(count3); // False examle ho gaya
// console.log(typeof count3); // False examle ho gaya


      // true ke liye example 

// let num4 = 100;

// let count4 = Number.isFinite(num4);
// console.log(count4);
// console.log(typeof count4);
 

// 5.isInteger 

// isInteger:- number method ke isInteger method ka use kisi bhi variable me di value ko count karne liye hota he (yadi value decimal number ya string me di gaye hogi to count nahi karega)

        //  False ke liye

// let isInt = "20";
// isInt = 50.34;
// let countInt = Number.isInteger(isInt);

// console.log(countInt);

//         //    True value ke liye 

// let isInt1 = -345;

// let countInt1 = Number.isInteger(isInt1);

// console.log(countInt1);


// 6.toFixed 

// toFixed:- Number method ke toFixed method ka use kisi bhi variable me di gaye decimale value ko index number dekar value ke point me se tiFixed badi se badi value ko leta he 

// let tofixed = 20.56789;

// let aberage = tofixed.toFixed(2)
// console.log(aberage);


// 7.toPrecision

// toPrecision:- Number method ke toPrecision method ka use kisi bhi variable me di gaye decimale value ko index number dekar value ke point me badi se badi value ko leta he 

// let toPrecision = 39.75869;

// let aberage2 = toPrecision.toFixed(2)
// console.log(aberage2);


        //   MATH METHODS START 

// 1.CEIL

// ceil:- MATH method ke ceil method ka use number float ke roop me di gaye value ko upper value pirdan karega jab value non negative hogi (yadi value negative form hogi to down me value dega). 

// let ceil1 = Math.ceil(1.78); //value 3 aayi
// console.log(ceil1);

// //         // negative ke liye 

// let ceilnega = Math.ceil(-3.34)   
// console.log(ceilnega);     // value -3 aayi


// 2.FLOOR

 // floor:- MATH method ke floor method ka use number float ke roop me di gaye value ko down afferd value pirdan karega jub value non negative hogi (yadi value negative form hogi to upper afferd me value dega). 

// let floor1 = Math.floor(2.93); //value 2 aayi
// console.log(floor1);

//        // negative ke liye 

// let floornega = Math.floor(-5.34)   
// console.log(floornega);     // value -6 aayi


// 3.ROUND

// round:- Math method ke round method ka use decimal number float ki di gaye value me .50 se kam hogi to ye niche bali value dega yadi .50 hue ya .50 se jyada hue to ye jyada bali value dega 

// let round1 = Math.round(2.33); //value 2 aayi (jub value .50 se kam thi)
// console.log(round1);


// let round2 = Math.round(2.63); //value 3 aayi (jub value .50 se jyada thi)
// console.log(round2);


// 4.TRUNC

// trunc:- Math ke trunc method ka use decimal number float value kisi bhi variable me di gaye ho per trunc jo he bo integer value hi dega 

// let trunc1 = Math.trunc(2.34);
// console.log(trunc1);


// 5.MAX 

// max:- Math ke max method ka use kisi bhi variable me di gaye multiple value me se max value ko lega (ya bole to jyada bali value lega)

        //  max method jo he bo (x axes or y axes per kam karta he)          

//      let max1 = Math.max(32, 4, 87.999, 34,90.234, 76,)
//      console.log(max1);
 
    //   negative value 

//       let max2 = Math.max(-76.234,-32.324,)
//       console.log(max2);
 

// 5.MIN 

// min:- Math ke min method ka use kisi bhi variable me di gaye multiple value me se min value ko lega (ya bole to sabse chhoti bali value lega)

        // min method jo he bo (x axes or y axes per kam karta he)          


// let min1 = Math.min(32, 4, 87, 34,90, 76,)
// console.log(min1);


// let min2 = Math.min(-10, -2,)
// console.log(min2);


// 6.SQRT

// sqrt:- Math ke sqrt method ka use kisi bhi value ka squar ya burg nikalne me kiya jata he 

// let sqrt1 = Math.sqrt(25); // 5 ka sqr he 
// console.log(sqrt1);

// let sqrt2 = Math.sqrt(144); // 12 ka sqr he 
// console.log(sqrt2);



// 6.CBRT

// cbrt:- Math ke cbrt method ka use kisi bhi value ka cbrt ya bole to kisi bhi value ka 3 ki ghat nikalne me kiya jata he 

// let cbrt1 = Math.cbrt(125); // 5 ka sqr he 
// console.log(cbrt1);

// let cbrt2 = Math.cbrt(27); // 3 ka sqr he 
// console.log(cbrt2);


// 7.POW

// pow:- Math ke pow method ka use kisi bhi value ka power nikalne me kiya jata he 

// let pow1 = Math.pow(2,5); // 2 ka sqr he 5
// console.log(pow1);

// let pow2 = Math.pow(4,3); // 4 ka sqr he 3
// console.log(pow2);


// 8.RANDOM 

// random:- Math method ke random method ka kisi bhi variable me di gaye value chahe bo value 0 ya 100 ke beech ki kyu na ho random method jo bo random hi value provide karega 

// let random1 = Math.random(); //yadi random me koi value na de to bo 0. se random value dega
// console.log(random1);
 
//         //       or 

// let random2 =Math.floor(Math.random() * 10) + 10 // aap chaho to kisi bhi value ko (+) kar sakte ho 
// console.log(random2);       

//         //    ya

// let random3 = Math.floor(Math.random()*100)
// console.log(random3);


// 9.ABS 

// abs:- Math method ke abs method ka use kisi bhi variable me di gaye value ka absolut value dega 

// let abs1 = Math.abs(3.43);
// console.log(abs1);

// //        or 

// let abs2 = Math.abs(null);
// console.log(abs2);
        
// //        or 

// let abs3 = Math.abs(true);
// console.log(abs3);
         
// //        or 

// let abs4 = Math.abs("Anil");
// console.log(abs4);



// 9. PI 

// PI:- Math method ke PI metho ka use PI ki value ko represent karne ke liye hota he 

// let pi1 = Math.PI; // PI is not a function
// console.log(pi1);



        //    DATE MATHOD START 

// 1.DATE METHOD KE LIKHNE KA TARIKA 

// let now = new Date();
// console.log(now);

// 1. toDateString

// toDateString:- Date method ke toDateString method ka use kisi bhi date ko print karne me hota he 

// let now = new Date();
// console.log(now.toDateString());


// 2.getDate 

// getDate:- Date method ke getDate method ka use kisi bhi date ko print karne me hota he 

// let now1 = new Date();
// console.log(now1.getDate());


// 3.getMonth

// getMonth:-Date method ke getMonth method ka use kisi bhi month ko print karne me hota he 

// let now3 = new Date();
// console.log(now3.getMonth()); //Month ya day ka index number he bo 0 se leta he

// let now33 = new Date('march 05 2009');
// console.log(now33.getMonth()); 

// 4.getFullYear

// getFullYear:-Date method ke getFullYear method ka use kisi bhi year ke full year ko print karne me hota he 

// let now4 = new Date();
// console.log(now4.getFullYear());


// 5.getDay

// getDay:-Date method ke getDay method ka use day ko print karne me hota he 

// let now5 = new Date();
// console.log(now5.getDay());

// let now6 = new Date('january 5 2010'); // 5 january 2010 ko tuesday tha
// console.log(now6.getDay());

// let now7 = new Date('january 5 2030'); // 5 january 2030 ko saturday hoga
// console.log(now7.getDay());

// 6.getHours

// getHours:- Date method ke getHours method ka use time me hours ka print karne me hota he 

// let hours1 = new Date();
// console.log(hours1.getHours());

// let hours2 = new Date('febuary 04 2012');
// console.log(hours2.getHours());

// 7.getMinutes

// getMinutes:- Date method ke getMinuts method ka use minuts ko print karne ke liye hota he 

// let minutes1 = new Date();
// console.log(minutes1.getMinutes());

// let minutes2 = new Date('march 10 2023');
// console.log(minutes2.getMinutes());

// 8.getSecondes

// getSeconds:- Date method ke getSeconds method ko use secondes ko print karne ke liye hota he 

// let seconds1 = new Date();
// console.log(seconds1.getSeconds());

// let seconds2 = new Date('january 06 2013');
// console.log(seconds2.getSeconds());


// 9.getMilliseconds

// getMilliseconds:- Date method ke getMilliseconds ka use Milliseconds ko print karne me use hota he 

// let milliseconds1 = new Date();
// console.log(milliseconds1.getMilliseconds());

// let milliseconds1 = new Date('may 30 2009');
// console.log(milliseconds1.getMilliseconds());


// 10.setDate

// setDate:- Date method ke setDate method ka use date ko set karne ke liye use kiya jata he 

// let setdate1 = new Date();

// setdate1.setDate(20);

// console.log(setdate1);


// 11.setFullYear

// setFullYear:-Date method ke setFullYear method ka use Year ko full set karne me hota he 

// let setyear1 = new Date();

// setyear1.setFullYear(2026)

// console.log(setyear1);


// 12.setMonth

// setMonth:-Date method ke setMonth method ka use month ko set karne me hota he 

// let setmonth1 = new Date();
// setmonth1.setMonth(4)

// console.log(setmonth1);


// 13.setHours

// setHours:- Date method ke setHours method ka use hours ko set karne me hota he 

// let sethours1 = new Date();

// sethours1.setHours(15);

// console.log(sethours1);


// 14.setMinutes 

// setMinutes:- Date method ke set setMinutes method ka use minutes ko set karne me hota

// let setminut1 = new Date();

// setminut1.setMinutes(24)
// console.log(setminut1);


// 15.setSeconds

// setSeconds:-Date method ke setSeconds method ka seconds set karne me ota he

// let setseconds1 = new Date();
// setseconds1.setSeconds(23);
// console.log(setseconds1);


// 16.setMilliSeconde 

// setMilliSeconde:- Date method ke setMillseconds method ka use milliseconds ko set karne me hota he 

// let setmillise1 = new Date();
// setmillise1.setMilliseconds(254);
// console.log(setmillise1);

        // DATE METHODS KE ACTUAL LIFE ME USE 


        //     let nowall = new Date();

        //     console.log(nowall.getDay() + "/" + nowall.getMonth() + "/" + nowall.getFullYear() + "/" + nowall.getHours() + "/" + nowall.getMinutes() + "/" + nowall.getSeconds() + "/" + nowall.getMilliseconds());


// 4.Function concept start


//  function addition (a=3,b=5){

//         let c=a+b
//         console.log(c)
//     }
//     // calling
//     addition(5,6);//11
//     addition(4,6);// 10
//     addition(7);//5
    

// function calling(){
//     console.log("Hi! Anil Kumar");
// }

// calling();



// function addition(a=30, b=30){
//     // let a = 65;
//     // let b = 35;
//     let c = a+b;
//     console.log(c);
// }

// addition(4,);
// addition(9,5);
// addition(7,5);

    // function hello(fname, lname){
    //     console.log("Hello " + fname + " " + lname );
    // }

    // hello("Anil", "Kumar");

// function perameters(a=4, b=3, c=8, d=9){
//     // let a =4;
//     // let b =3;
//     // let c =8;
//     // let d =9;
//     let e = [(a+b)*(c+d)];

//     console.log(e);
// }

// perameters(30,3);
// perameters(40,5);
// perameters(20,5);
// perameters(9);



// function fullname(math,eng,scie){
//     let a = math + eng + scie;

//     return a;
// }

// function per(tt){
//     var per = tt/300 * 100;
//     console.log(per);
// }

// let fn = fullname(60, 75, 80);
// // console.log(fn);

// per(fn)


// function generatotp(){
//     let degite = "1234567895";
//     let otp2 = "";

//     for(let i=0; i<6; i++){
//         otp2+= degite[Math.floor(Math.random() * 10)];
//     }
//     return otp2;
// }
// console.log("OTP generate 6 degite: ", generatotp());


// function generateotp3(){
//     let degite2 = "128393748875379";
//     let otp3 = "";
//     for(let i=1; i<9; i++){
//         otp3+= degite2[Math.floor(Math.random() * 10)];
//     }
//     return otp3;
// }
// console.log("OTP generate 8 degite: ", generateotp3());








        //     JavaScript Tutorial practice


// let now = new Date("Febuary 5 2025");
// // now.setDate(5)
// document.write(now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear())
        