// 1. What are the two main categories of data types in JavaScript?

// two typse catagorias in javaScript
// (i) Primitive 
// (ii) Non-Primitive


// 2. What is a primitive data type? List all the primitive data types in JavaScript.
// (i) Primitive data type
// 1.number
// 2.string
// 3.undefined
// 4.Boolean
// 5.null
// 6.Bigint
// 7.Symbol

// (ii) Non-Primitive data type
// 1. Object
// 2. Array

// 3. What is the difference between `null` and `undefined` in JavaScript?

// let nullVal = null;
// let undefineVal = undefined;
// console.log("Null Value", typeof nullVal);
// console.log("undefine  value", typeof undefineVal);

//  (i) Undefined means a bariable has been declared but has not yet been assigned a value.
// (ii) Null is an assignment value , meaning that a bariable has been declared and given the value of null.

// 5. What will the following code output?

// var num = 42;
// console.log(typeof(num));

// let string = "Hello";
// console.log(typeof 'Hello');
// console.log(typeof(string));

// const boolean = true;
// console.log(typeof true);
// console.log(typeof(boolean));

// const object ={
//     name:"john"
// }
// console.log(typeof { name: 'John' });
// console.log(typeof (object));

// let array =["Anil", "Kumar", "Student"];
// console.log(typeof [1, 2, 3]);
// console.log(typeof(array));


// 6. What data type is returned by the expression `3 + '3'`?

// let exprension = 3 + '3';
// console.log(typeof(exprension)); //answer string

// // 7. What will be the result of the following code?

// let num = 10; //number 
// let str = '10'; //number but into a typeof in string
// console.log(num == str); true
// console.log(num === str);  false


// 8. Explain the difference between `==` and `===` in JavaScript.

// (i) '==' equal represent same value 
// (ii) '===' equal reprsent same value but a represent typeof

// 9. What data type is used to represent a sequence of characters in JavaScript?

// the data type is used to represnt two sequence of charactor in javaScript
// (i) Primitive data type
// 1.number
// 2.string
// 3.undefined
// 4.Boolean
// 5.null
// 6.Bigint
// 7.Symbol

// (ii) Non-Primitive data type
// 1. Object
// 2.Array


// 10. What will be the output of the following code?

// let obj = { a: 1, b: 2 };
// console.log(typeof obj);
// console.log(typeof obj.a); 

// let obj = { 
//     a: 1,
//     b: 2,
// };
// console.log(typeof (obj));
// console.log(typeof (obj.a)); 

// 11.What are the datatypes of `a`, `b`, `c`, `d`, `e`, `f`, and `g`?Identify the datatype:

// let a = 42;
// console.log(typeof(a));

// let b = "JavaScript";
// console.log(typeof(b));

// let c = false;
// console.log(typeof(c));

// let d = undefined;
// console.log(typeof(d));

// let e = null;
// console.log(typeof(e));

// let f = { key: "value" };
// console.log(typeof(f));

// let g = [1, 2, 3];
// console.log(typeof(g));

// 12.What is the datatype of the following values?
// console.log(typeof "Hello World"); string
// console.log(typeof 12345); Number
// console.log(typeof true); Boolean
// console.log(typeof { foo: "bar" }); Object
// console.log(typeof [1, 2, 3]);
// console.log(typeof function() {}); Function
// console.log(typeof undefined); Undefine

// 13.What will be the result of the following code?
// let x = 10; Number
// let y = "10"; String
// console.log(typeof x); Number
// console.log(typeof y); String

// 14.Determine the datatype of the result of these expressions:
// console.log(typeof (10 + 20)); Number
// console.log(typeof (10 - "2")); Number
// console.log(typeof ("5" * 3)); Number
// console.log(typeof ("hello" / 2)); NaN

// Sir ke duara diya hua assignment Work

// javascript type conversion

// 1. implicit conevrsion=> type automatically
// 1.implicit conversion to string

//  const res="3"+2; //=>type string =>"32"
// console.log(res);

// const res1="3"+true;  //3true
// console.log(res1)


// const res2="3"+undefined;  
// console.log(res2)


// const res3="3"*null;
// console.log(res3)




// ex2: impilicit conversion to number


// const val= "4"-"2";  //2
// console.log("impilicit conversion to number",val);


// const val2= "4"*"2";  //8
// console.log("impilicit conversion to number",val2);


// const val3 ="8"/"2"; //4
// console.log(val3);




// example3: non-numeric string

// let result6="hello"-"world"; //  =>NAN
// console.log(result6);



// implicit boolean conversion to number


// let result="4"-true;
// console.log("implicit boolean conversion to number",result); //3


// let result2=4+true;
// console.log("implicit boolean conversion to number",result2); //5




// let result3=4+false;
// console.log("implicit boolean conversion to number",result3); //4

// let result4=4*false;
// console.log("implicit boolean conversion to number",result4); //4


// implicit null conversion to number
// implicit null conversion to number

// let result7 =4+null; //4
// console.log("implicit null  conversion to number",result7); //4

// let result8 =4-null;
// console.log("implicit null  conversion to number",result8); //4

// let result9 =4*null;
// console.log("implicit null  conversion to number",result9); 

// implicit undefined used with number,boolean, null
// let result= 4+undefined; //NaN
// console.log(typeof(result));

// let result= 4-undefined; //NaN
// console.log(result);


// let result= true+undefined; //NaN
// console.log(result);
// console.log(typeof(result));




// let result= null+undefined; //NaN
// console.log(result);
// console.log(typeof(result));




// 2. explicit conevrsion=> type manually


// 1.convert to number


// let res=("342"-true);
// console.log(typeof(res));


// let result=Number(true);
// console.log(typeof(result));

// let res=parseInt(29.94649);
// console.log(res);

// let res=parseFloat(29.8700);
// console.log(res);


// 1.convert to string


// let res=String(25423);
// console.log(typeof(res));


// let res1=(25423).toString();
// console.log(typeof(res1));




// let res=Boolean(25423);
// console.log(typeof(res));


// let obj={
//     name:"hitech"
// }
// console.log(typeof(obj));


// let res=obj.toString();
// console.log(typeof(res));


// You tube Practice in JavaScript

// for(var a = 5; a >= 1; a--){
//     for(var b = a; b >= 1; b--){
//         document.write(b + " ");
//     }
//     document.write("<br>");
// }

// var ary = [
//     ["Anil",20,"male","Bca","IFTM"],
//     ["Herry",18,"male","B.com","SM"],
//     ["Sarah",19,"Female","Mba","GIC"],
//     ["Tom",21,"male","B.A","SPS"]
// ];
// // document.write(ary);
// // document.write(ary.length);

// document.write("<table border='1px' cellspacing='0'>");
// for(let a = 0; a < 4; a++){
//     document.write("<tr>");
//     for(let b = 0; b < 5; b++){
//         document.write("<td>" + ary[a][b] + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table");


// Even and Odd Number 



// Array ke 24 Method

// var a = ["Anil","Dinesh","Rahul","MCA","Chodhary"];
// document.write(a + "<br>");
// a.sort();
// document.write(a + "<br>");

// a.reverse();
// document.write(a + "<br>");

// a.pop();
// document.write(a + "<br>");

// a.push("Karan");
// document.write(a + "<br>");

// a.push("Rishabh");
// document.write(a + "<br>");

// a.shift();
// document.write(a + "<br>");

// a.unshift("Himanshu");
// document.write(a + "<br>");

// Concat Method Start

// var c = ["Monika","Rishabh","Himanshu"];
// var b = ["Sanjay","Aman","Karan"];
//  var d = c.concat(b);
//  document.write(d + "<br><br>");
//  var e = d.join(" <br> ");
//  document.write(e);

// Slice Methode Start 

// var x = ["Raghab","Raheem","Rahul","Rani"];
// document.write(x + "<br><br>");

// var y = x.slice(-2);
// document.write(y + "<br><br>");

// var x1 = ["Raghab","Raheem","Rahul","Rani","Aniket"];
// document.write(x1 + "<br><br>");
// x1.splice(0,0,"Monika","Rishabh");
// document.write(x1 + "<br><br>");

// var x2 = ["Arry","Mohit","Larger"];
// var x2 = "Rahul";
// document.write(x2 + "<br><br>");
// if(Array.isArray(x2)){
    // document.write("This is an Array");
// }
// else{
    // document.write("This is not an Array");
// }

// var x3 = ["Anil","Pramod","Himanshu","Lalit","Anil"];
// document.write(x3 + "<br><br>");

// var y3 = x3.indexOf("Lalit");
// document.write(y3 + "<br><br>");

// var z = x3.lastIndexOf("Anil");
// document.write(z + "<br><br>");

// var z1 = ["Sanjay","Aman","Rehman","Rahul"];
// document.write(z1 + "<br><br>");

// var z2 = z1.includes("Rahul");
// document.write(z2 + "<br><br>");


// Find Index Function Start 

// var age = [10,23,19,20];
// document.write(age + "<br><br>");

// var b = age.findIndex(checkAdult);
// document.write(b + "<br><br>");

// function checkAdult(age){
//     return age >= 18;
// }
