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

// console.log(array);
// console.log(array[0]);


// 1. multidimensional Array start 

// var array1 = [
//     ["Name", "age", "Gendar", "Class"],
//     ["Himanshu", 8, "Male", 4],
//     ["Monika", 15, "Female", 10],
//     ["Harry", 28, "Male", "B.com"],
//     ["Sunny", 29, "Male", "B.ed"],
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
// delete r[0];
// console.log(r);
// console.log(r[1]);

// ARRAY METHOD START 

//1. SORT & REVERSE
 
// let method = ["Ritu", "Mohan", "Raman", "PHD"]

// console.log(method);

// // //SORT:- sort method ka use sequense ya number  by kisi bhi  data ko represent karne ka hota he 1,2,3 ya a,b,c // sort elements aphabetically in string and number in asecending order.
// method.sort();
// console.log(method);

// // REVERSE:-reverse method ka use sequense by kisi bhi data ko reverse state me represent karne me hota he
// let method = ["Ritu", "Mohan", "Raman", "PHD"]
// console.log(method);
// method.reverse();
// console.log(method);

// 2. POP & PUSH 

// let method2 = ["Kartik", "Sunjeev", "Rajeev", "Bikki"];
// console.log(method2);
// // POP:- pop method ka use array ki last bali value ko delete karne me hota he 
// method2.pop();
// console.log(method2);

// // PUSH:- push method ka use array ke last me value ko push ya anay value ko addd  karne me hota he 
// let method2 = ["Kartik", "Sunjeev", "Rajeev", "Bikki"];
// console.log(method2);
// method2.push("Harshit");
// console.log(method2);

// 3. SHIFT & UNSHIFT 

// let metod3 = ["Tilak", "Anil", "Ajay", "Dinesh"];
// console.log(metod3);

// // SHIFT:- shift method ka use array ki start bali value ko delete karne me hota he
// metod3.shift();
// console.log(metod3);

// //UNSHIFT:- unshift method ka use array ke start me value ko unshift ya kisi bhi value ko add  karne me hota he 
// let metod3 = ["Tilak", "Anil", "Ajay", "Dinesh"];
// console.log(metod3);
// metod3.unshift("Prembabu");
// console.log(metod3);


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

// SLICE:- slice method ka use kisi bhi array ki index value ko us array me se nikalne ke liye hota he 

// slice (start,end)

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
// a.splice(2,3,"Rajeev","Shorabh")
// console.log(a)


// 6. ISARRAY

// IsArray:- isarray method ka use karke hum ye pta lga sakte he ki kisi bhi variable me de gaye value array he ya nahi

// let a = ["Somveer","Vebhab","Tilak","Lucky"];
// let a = 20;
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

// INDEXOF:- indexOf method ka use array me di gaye kisi bhi value ka index number nikalne ke liye hota he chahe usme value ka name ya value same de rkhi ho 

// let a = ["Anil","keshav","Rohit","Hitesh","lovlesh","keshav","Mohit","Nakul"];
// console.log(a);
// let b = a.indexOf("keshav",0)
// console.log(b);
 
// // LASTINDEXOF:- lastIndexOf method ka use array me di gaye value ke last bali value se suru karta he

// let a = ["Anil","keshav","Rohit","Hitesh","lovlesh","keshav","Mohit","Nakul"];
// console.log(a);
// let c = a.lastIndexOf("keshav" , 7)
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
//     return age < 13;
// }

// EVERY:- every method ka use array me di gaye sabhi value chekAdult ke age se ya to == ho ya Grater ho tabhi ervey method work karega ya di gaye conditon ko pass karle

// let ages = [12,14,15,19,34,45,18,20];
// console.log(ages);

// let b = ages.some(checkAdult)
// console.log(b);

// function checkAdult(age){
//     return age >= 18;
// }


// 10. FIND & FINDINDEX

// FIND:- find method ka use array me di gaye value ko funtion me di gaye condition value ko pass karne ke bad value ko print karana 

// let ages = [10,13,15,18,20];
// console.log(ages);

// let b = ages.find(checkAdult)
// console.log(b);

// function checkAdult(age){
//     return age >18;
// }

// FINDINDEX:- finindex method array me di gaye kisi bhi value ko funtion me di gaye conditon ko pass karke us value ka index number provide karna hota he 

// let ages = [10,13,4,130,15,18,20];
// console.log(ages);

// let b = ages.findIndex(checkAdult)
// console.log(b);

// function checkAdult(age){
//     return age >= 18;
// }

// function checkadult(age){
//     return age >= 18;
// }



// 11. FILTER

// FILTER:- filter method ka use array me di gaye value ko function me di gaye condition ke anushar value ko filter karna 

// let ages = [50,12,19,15,20];
// console.log(ages);

// let b = ages.filter(checkadult);
// console.log(b);


// 12. forEach

// forEach:- forEach method ka use array ki all value ko print karane me hota he.

// let forEacharray = ["Raghav","Shonu","Mithlesh","Umakant","Alfaz"];

// let print = forEacharray.forEach(forlooparray);
// function forlooparray(val,index,arry){
//     // console.log(`value=${val} and index= ${index} and array= ${arry} `);
//     console.log(val,index,arry);
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

// sum = 0;
// let newnumbermap = numbermap.map((val)=>{
//     sum = sum + val;
// })
// console.log(sum);


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
// 1. iterating over studentdata 

// studentdata1.forEach((val)=>{
//         val.forEach((data,ind)=>{
//             console.log("name is ",data,"  index is ",ind)
//         })

// })

// 2. iterating over studentdeta

let studentdata2 = [
    ["Anil",20],
    ["Afzal",23]
]
studentdata2.forEach((val)=>{
    val.forEach((data2,ind,ary)=>{
        console.log(data2,ind,ary);
    })
})

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

// s.toString();

// console.log(s);


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
