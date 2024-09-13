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



// 1. ARRAY ALL CONCEPT START 

                // 0        1    2     3 ye array ke index number he 
// let array = ["Himanshu", 8, "Male", 4];

// document.write(array+ "<br><br>");
// document.write(array[0]);


// 1. multidimensional Array start 

// var array1 = [
//     ["Name", "age", "Gendar", "Class"],
//     ["Himanshu", 8, "Male", 4],
//     ["Monika", 15, "Female", 10],
//     ["Harry", 28, "Male", "B.com"],
//     ["Sunny", 29, "Male", "B.ed"],
// ];
// // document.write(array1 [0]+ "<br>");
// // document.write(array1 [1]+ "<br>");
// // document.write(array1 [2]+ "<br>");
// // document.write(array1 [3]+ "<br>");
// // document.write(array1 [4]+ "<br>");

// document.write("<table border='1px' cellspacing='4px'>");
// for(let a=0; a<4; a++){
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

// document.write(e + "<br>")

// //MODIFY
// e[0] = "Mohan";
// document.write(e + "<br>");

//DELETE
// delete e[1];
// document.write(e + "<br>")
// document.write(e[1] + "<br>")

// //MODIFY
// var r = [
//     ["Eritik", "Manoj", "Rishabh", "Daibik"],
//     ["Tilak Verma", "Anil", "Ajay", "Dinesh"],
//     ["Rinkesh", "Nikil", "Harshit", "Dolly"],
//     ["Kartik", "Sunjeev", "Rajeev", "Bikki"]
// ];

// document.write(r +"<br><br>");

// r[0][0,1,2,3] = ["Rinkesh", "Nikil", "Harshit", "Dolly"];
// document.write(r + "<br><br>")

// //DELETE
// delete r[0];
// document.write(r + "<br><br>");
// document.write(r[1] + "<br>");

// ARRAY METHOD START 

//1. SORT & REVERSE
 
// let method = ["Rahul", "Mohan", "Raman", "PHD"]

// document.write(method + "<br><br>");

// //SORT:- sort method ka use sequense ya number  by kisi bhi  data ko represent karne ka hota he 1,2,3 ya a,b,c etc.
// method.sort();
// document.write(method + "<br><br>");

// // RESERVE:- reserve method ka use sequense by kisi bhi data ko represent karne ka hota he
// // yadi data me R name jitna bhi data hoga usko sequense by lake represent kar dega 

// method.reverse();
// document.write(method + "<br><br>");

// 2. POP & PUSH 

// let method2 = ["Kartik", "Sunjeev", "Rajeev", "Bikki"];
// document.write(method2 + "<br><br>");

// // POP:- pop method ka use array ki last bali value ko delete karne me hota he 
// method2.pop();
// document.write(method2 + "<br><br>");

// // PUSH:- push method ka use array ke last me value ko push karne me hota he 
// method2.push("Harshit");
// document.write(method2 + "<br>");

// 3. SHIFT & UNSHIFT 

// let metod3 = ["Tilak", "Anil", "Ajay", "Dinesh"];
// document.write(metod3 + "<br><br>");

// // SHIFT:- shift method ka use array ki start bali value ko delete karne me hota he
// metod3.shift();
// document.write(metod3 + "<br><br>");

// //UNSHIFT:- unshift method ka use array ke start me value ko unshift karne me hota he 
// metod3.unshift("Prembabu");
// document.write(metod3 + "<br><br>");


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



// function generetOtp(){
//     let deget = "1238596701";
//     let OTP = "";
//     for(let i=0; i<4; i++){
//         OTP+= deget[Math.floor(Math.random() * 10)];
//     }
//     return OTP;
// }
// console.log("OTP 4 deget: ", generetOtp());



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

