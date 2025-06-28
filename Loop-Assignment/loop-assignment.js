// assignment
// 1.
// *****
// ****
// ***
// **
// *


// let n = 5;
// let m = 5;

// // row-i = 5;
// // col-j = 5;

// for(let i=5; i>=1; i--){
//     let str = ""
//     for(let j=1; j<=i; j++){
//         str = str+"*"
//     }
//     console.log(str);
// }

// 2.
// *****
//  ***
//   *

// hii Anil Kumar

// let n = 3;
// let m = 5;

// row             space                  star

// 3. i = 3         j = 0  n-i              k = 5
                   
// 2. i = 3         j = 2  n-i              k = 3

// 1. i = 3         j = 1  n-i              k = 1


// for(let i=3; i>=1; i--){
//     let str = "";
//     for(let j=1; j<=n-i+1; j++){
//         str = str+" ";
//     }
//     for(let k=1; k<=2*i-1; k++){
//         str =str+"*"
//     }
//     console.log(str);
// }


// 3.
//  1
//  2 3
//  4 5 6
//  7 8 9 10 

// let n = 1;
// let m = 4;


// // row-i = 4;
// // col-j = 4;

// for(let i=1; i<=4; i++){
//     let str ="";
//     for(let j=1; j<=i; j++){
//         str = str + n + " ";
//         n++;
//     }
//     console.log(str);
// }

//  4.
//     *
//    **
//   ***
//  ****

// row             space               star 
// 1.  i = 4       j = 0  n-i           k = 1
// 2.  i = 4       j = 1  n-i           k = 2
// 3.  i = 4       j = 2  n-i           k = 3
// 4.  i = 4       j = 3  n-i           k = 4

// let n = 4; 
// let m = 6; 

// // row-i = 4;
// // col-j = 4;


// for (let i = 1; i <= n; i++) {
//     let str = "";

//     for (let j = 1; j <= n - i; j++){
//         str =str+ " ";
//     }
//     for (let k = 1; k <= i; k++){
//         str = str + "*";
//     }
//     console.log(str);
// }

//  5.
//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1


// let n = 5;
// let m = 5;

// row-i = 5;
// col-j = 5;


// for(let i=5; i>=1; i--){

//     let str = "";

//     for(let j=1; j<=i; j++){

//         str = str +j + " ";
        
//     }
//     console.log(str);
// }

//  6.
//  *****
//  *   *
//  *   *
//  *****


// row i = 4;
// let n=4;
// col j = 5;
//  let m=5;

// star    i=1,  i=n ,j=1 ,j=m
// space 

// let n=4;
// let m=5;

// for (let i=1; i<=n; i++){
//   let str =" ";
//   for (j=1; j<=m; j++){
// if (i===1||i===n||j===1||j===m){
//   str +="*"
// }else{
//   str +=" "
// }
//   }
// console.log(str)
// }


             // practice

            //  1.While Loop

            //  debugger
            // let step = 1;
            //  while (step <= 100) {
            //     // Runs 5 times, with values of step 0 through 4.
            //     console.log(step + 1);
            //     step++
            //   }

        //  //  debugger 
            // [debugger ka use code ko line by line execuite karne me karte ]
           
            // 2.Do While Loop 


            // let i = 0;

            // do{
            //     console.log("Hii Anil Kumar");

            //     i++
            // }while(i < 10)





         //    for loop ka use karke Array Ki value prapt karte he 


            // let friends = ["Anil","Lalit","Yunish","Labi","Harshit","Ramesh"]


            // let num = 0
            // while(num < friends.length){
    
            //     console.log(`${num + 1}. ${friends[num]}`);

            //     // friends[num] = friends[num] + "developer"
            //     num++
            // }

           // // debugger
            
            // let friends = ["Anil","Lalit","Yunish","Labi","Harshit","Ramesh"]


            // for(let i = 0; i < friends.length; i++){
            //     // console.log("Anil Kumar");
            //     console.log(`${i + 1}. ${friends[i]}`);
            // }

           // Example-2

        //    3.For Loop 

           // Use For Loop  get Even number 
           
        //    for(let i = 0; i <= 100; i++){

        //     if(i % 2 === 0){
        //         console.log(i);
        //     }

        //    }


              // Example-2
           // Use For Loop  get Odd number 
           
        //    for(let i = 0; i <= 100; i++){

        //     if(i % 2 === 1){
        //         console.log(i);
        //     }

        //    }


        // Example For in Loop 

        // for in loop ka use object ki value prapt karne me hota he 


                    //   Example--1

                    // let friends = {
                    //     Anil: "anil",
                    //     Lalit: "lalit",
                    //     Rajeev: "rajeev",
                    //     Labi: "labi",
                    //     Harshit: "harshit",
                    //     Ramesh: "Ramesh"
                    // };
                    
                    // let count = 1; // Counter for numbering
                    // for (let key in friends) {
                    //     console.log(`${count}. ${key}: ${friends[key]}`);
                    //     count++;
                    // }

                    // Example--2

                    // let NestedObject = {
                    //     firstName: "Anil",
                    //     lastName: "Kumar",
                    //     course: {
                    //         class: "BCA",
                    //         marks: "80%",
                    //         University: "IFTM",
                    //         population: {
                    //             UniversityMember: 13963,
                    //             area: "1380 burg sqr",
                    //             student: 294283,
                    //         },
                    //     },
                    // };
                    
                    // let count1 = 1;
                    
                    // for (let key in NestedObject) {
                    //     if (typeof NestedObject[key] === "object") {
                    //         console.log(`${count1}. ${key}:`);
                    //         let nestedCount = 1;
                    //         for (let subKey in NestedObject[key]) {
                    //             if (typeof NestedObject[key][subKey] === "object") {
                    //                 console.log(`   ${nestedCount}. ${subKey}:`);
                    //                 let subNestedCount = 1;
                    //                 for (let innerKey in NestedObject[key][subKey]) {
                    //                     console.log(`      ${subNestedCount}. ${innerKey}: ${NestedObject[key][subKey][innerKey]}`);
                    //                     subNestedCount++;
                    //                 }
                    //             } else {
                    //                 console.log(`   ${nestedCount}. ${subKey}: ${NestedObject[key][subKey]}`);
                    //             }
                    //             nestedCount++;
                    //         }
                    //     } else {
                    //         console.log(`${count1}. ${key}: ${NestedObject[key]}`);
                    //     }
                    //     count1++;
                    // }
                    

