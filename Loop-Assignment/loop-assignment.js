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


    // row      space      star      
    // i=3        j= 0 n-i    k=5
    // 2       j= 1  n-i   k=3
    // 1       j= 2   n-i  k=1
  
//    let n=3;
  




// for(let i=n; i>=1; i--){
//     let str = "";
//     for(let j=1; j<=n-i+1; j++){
//         str = str+" ";
//     }
//     for(let k=1; k<=2*i-1; k++){
//         str = str+"*";
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

// row-i = 4;
// col-j = 4;

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

// let n = 4;
// let m = 4;

// // row-i = 4;
// // col-j = 4;

// let m = 4

// for (let i = 1; i <= m; i++) {
//     let str = "";

//     for (let j = 1; j <= m - i; j++){
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
//   str+=" "
// }
//   }
// console.log(str)
// }