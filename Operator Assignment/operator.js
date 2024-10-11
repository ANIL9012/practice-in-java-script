// 1. Assign `a = 10` and `b = 5`. Log the result of `a + b` to the console.  

//    let a = 10;
//    let b = 5;
//    console.log(a + b); //answer 15


// 2. Assign `a = 20` and `b = 8`. Log the result of `a - b` to the console.  
 
    // let a = 20;
    // let b = 8;
    // console.log(a - b); //Answer 12
  

// 3. Assign `a = 4` and `b = 7`. Log the result of `a * b` to the console.  

//    let a = 4;
//    let b = 7;
//    console.log(a * b); //Answer 28


// 4. Assign `a = 16` and `b = 4`. Log the result of `a / b` to the console.  

//    let a = 16;
//    let b = 4;
//    console.log(a / b); //Answer 4


// 5. Assign `a = 13` and `b = 4`. Log the result of `a % b` to the console.  

//    let a = 13;
//    let b = 4;
//    console.log(a % b); // Answer 1

// 6. Assign `num = 10`. Use `num += 7`, `num -= 3`, `num *= 2`, and `num /= 5`, logging the value of `num` after each operation.  

//    let num = 10;
//    num += 7;
//    console.log(num);
//    num -= 3;
//    console.log(num);
//    num *= 2;
//    console.log(num);
//    num /= 5;
//    console.log(num);


// 7. Assign `a = 10` and `b = 10`. Log `a == b` to the console.  

//    let a = 10;
//    let b = 10;
//    console.log(a == b); //Answer True


// 8. Assign `a = 10` and `b = '10'`. Log `a === b` to the console.  
 
//    let a = 10;
//    let b = '10';
//    console.log(a === b); // Answer False
   

// 9. Assign `a = 15` and `b = 20`. Log whether `a` is greater than, less than, or equal to `b`.     let a = 15;
//    let a = 15;
//    let b = 20;
//    if (a > b) {
//        console.log('greater than');
//    } else if (a < b) {
//        console.log('less than');
//    } else {
//        console.log('equal to');
//    }

//    10. Assign `x = true` and `y = false`. Log the result of `x && y` and `x || y` to the console.  

//    let x = true;
//    let y = false;
//    console.log(x && y); //Answer False
//    console.log(x || y); //Answer True
 

// 11. Assign `x = false`. Log the result of `!x` to the console.  

//    let x = false;
//    console.log(!x); //Answer True


// 12. Assign `age = 22`. Use a ternary operator to log `'Adult'` if `age` is 18 or older, and `'Minor'` otherwise.  

//    let age = 22;
//    console.log(age >= 18 ? 'Adult' : 'Minor'); //Answer Adult


// 13. Assign `value = 100`. Log the result of `typeof value` to the console.  

//    let value = 100;
//    console.log(typeof value); //Answer Number


// 14. Assign `value = '5'`. Log the result of `+value` to the console.  
 
//    let value = '5';
//    console.log(+value); //Answer 5

// 15. Assign `value = 7`. Log the results of `++value`, `value++`, `--value`, and `value--` to the console.  

   let value = 7;
   console.log(++value); // Pre-increment
   console.log(value++); // Post-increment
   console.log(--value); // Pre-decrement
   console.log(value--); // Post-decrement

// 1. Arithmetic Operators
// Addition:
// Create two variables, a and b, and assign them numeric values. Use the + operator to find their sum and log the result.
    // let a = 10;
    // let b = 20;
    // let sum = a + b;
    // console.log(sum);
// Subtraction:
// Create two variables, a and b, and assign them numeric values. Use the - operator to find the difference between a and b and log the result.
//    let a = 30;
//    let b = 10;
//    let sub = a - b;
//    console.log(sub);
// Multiplication:
// Create two variables, a and b, and assign them numeric values. Use the * operator to find their product and log the result.
//    let a = 10;
//    let b = 10;
//    let mul = a * b;
//    console.log(mul);
// Division:
// Create two variables, a and b, and assign them numeric values. Use the / operator to divide a by b and log the result. Handle division by zero by checking if b is zero before dividing.
//    let a = 10;
//    let b = 5;
//    if(a>=15){
//     console.log("A is Greater than 15");
//    }else if(b>=0){
//     console.log("B is not zero devide by a");
//    }else{
//     console.log("B devide a the Answer 2");
//    }
// Modulus:
// Create two variables, a and b, and assign them numeric values. Use the % operator to find the remainder of a divided by b and log the result.
//    let a = 10;
//    let b = 2;
//    console.log(a % b);
//    console.log(a / b);
// 2. Assignment Operators
// Basic Assignment:
// Create a variable num and assign it the value 10. Use the += operator to add 5 to num, -= to subtract 3, *= to multiply by 2, and /= to divide by 4. Log the final value of num after each operation.
//    let num = 10;
//    num +=5;
//    console.log(num);
//    num -=3;
//    console.log(num);
//    num *=2;
//    console.log(num);
//    num /=4;
//    console.log(num);

// 3. Comparison Operators
// Equal to:
// // Create two variables, a and b, and assign them values. Use the == operator to check if a is equal to b and log the result.
    // let a = 10;
    // let b = 10;
    // console.log(a == b);
// Strict Equality:
// Create two variables, a and b, and assign them values of different types. Use the === operator to check if a is strictly equal to b (both value and type) and log the result.
//    let a = 20;
//    let b = "20";
//    console.log(a === b);
// Greater than and Less than:
// Create two variables, a and b, and assign them values. Use the > and < operators to compare a and b. Log whether a is greater than, less than, or equal to b.
//    let a = 10;
//    let b = 20;
//    if(a>=b){
//     console.log("A is Greater then by B");
//    }else if(a<=b){
//     console.log("B is Greater then by A");
//    }else{
//     console.log("Enter the valid calculatio");
//    }

// 4. Logical Operators
// Logical AND/OR:
// Create two boolean variables, x and y. Use the && operator to combine x and y, and the || operator to combine x and y. Log the results of both operations.
//    let a = true;
//    let b = false;
//    if(a&&b){
//     console.log("A and B is a Boolean value && opereater give a False value");
//    }else if(a||b){
//     console.log("A and B is a Boolean value || opereater give a True value");
//    }

// Logical NOT:
// Create a boolean variable x. Use the ! operator to negate x and log the result.
//    let x = true;
//    console.log(!x);
// 5. Type Operators
// 12.Typeof:
// Create a variable value and assign it a value of different types. Use the typeof operator to log the type of value.
//    let num = 20;
//    console.log(typeof(num));
//    let string = "Anil";
//    console.log(typeof(string));
//    let bool = true;
//    console.log(typeof (bool));
//    let arry = ["Anil", "Kumar", "Student"];
//    console.log(typeof (arry));
// 13.Increment and Decrement:
// Create a variable value and assign it a numeric value. Use the pre-increment (++value), post-increment (value++), pre-decrement (--value), and post-decrement (value--) operators. Log the value of value before and after each operation.
//    let sum_vlue = 20;
//    console.log(++sum_vlue); //pre-increment
//    console.log(sum_vlue++); //post-increment
//    console.log(--sum_vlue); //pre-Decrement
//    console.log(sum_vlue--); //post-Decrement
