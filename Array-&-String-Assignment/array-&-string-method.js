// 1. Write a JavaScript program to get the character at index 2 from the string `"JavaScript"` using the `charAt()` method.

// let charAt = "JavaScript";
// console.log(charAt);

//     //    Use charAt 

// let charAt2 = charAt.charAt(2);
// console.log(charAt2);



// 2. Write a program to concatenate the strings `"Hello"` and `"World"` using the `concat()` method.

// let concat1 = "Hello";
// let concat2 = "World";
//         // Without using concat 
// console.log(concat1,concat2);

//         //   using with concat 

// let concat3 = concat1.concat(" " + concat2)
// console.log(concat3);





// 3. Using the string `"I love cats"`, write a program to replace `"cats"` with `"dogs"` using the `replace()` method.

// let replace1 = "I love cats";
//         //   without using replace
// console.log(replace1);

//         //   After using with replace
// let replace2 = replace1.replace("cats","dogs");
// console.log(replace2);


// 4. Write a JavaScript function to split the string `"apple,banana,orange"` into an array of fruits using the `split()` method.

// let split1 = "apple,banana,orange";
//         //  without using split 
// console.log(split1);

//             // After using with split 
// let split2 = split1.split();
// console.log(split2);

// 5. Using the string `"JavaScript"`, write a program to extract the substring `"Script"` starting from index 4 using the `substr()` method.

// let substr1 = "JavaScript";
//             // without using substr 
// console.log(substr1);

//             // After using with substr
// let substr2 = substr1.substr(4,7);
// console.log(substr2);

// 6. Write a program to extract the word `"Java"` from the string `"I am learning JavaScript"` using the `substring()` method.

// let substring1 = "I am learning JavaScript";
//         //  without using substring 
// console.log(substring1);

//         //    After using with substring 
// let substring2 = substring1.substring(14,18);
// console.log(substring2);

// 7. Write a JavaScript program to extract the word `"Frontend"` from the string `"Frontend Developer"` using the `slice()` method.

// let slice1 = "Frontend Developer";
//             // without using slice 
// console.log(slice1);

//         //    After using with slice 
// let slice2 = slice1.slice(0,8);
// console.log(slice2);


// 8. Write a program to convert the string `"HELLO WORLD"` to lowercase using the `toLowerCase()` method.

// let toLowerCase1 = "HELLO WORLD";
//         //    without using toLowerCase1 
// console.log(toLowerCase1);

//             // After using with toLowerCase 
// let toLowerCase2 = toLowerCase1.toLocaleLowerCase();
// console.log(toLowerCase2);

// 9. Write a JavaScript program to convert the string `"good morning"` to uppercase using the `toUpperCase()` method.

// let uppercase1 = "good morning";
//         //   without using touppercase
// console.log(uppercase1);

//             //  After using with touppercase
// let uppercase2 = uppercase1.toUpperCase();
// console.log(uppercase2);

// 10. Write a JavaScript function that trims the whitespace from both ends of the string `"   Hello World!   "` using the `trim()` method.

// let trim1 = "   Hello World!   ";
//         //    without using trim 
// console.log(trim1);

//         //    After using with trim 
// let trim2 = trim1.trim();
// console.log(trim2);

// 11. Write a JavaScript function to check if the string `"JavaScript"` includes the substring `"Script"` using the `includes()` method.

// let includes1 = "JavaScript";
//         //   without using includes
// console.log(includes1);

//         //    After using with includes 
// let includes2 = includes1.includes("Script");
// console.log(includes2);


// 12. Write a JavaScript function that searches for the first occurrence of the word `"world"` in the string `"Hello world, welcome to JavaScript"` using the `search()` method.
// let search = "Hello world";
// console.log(search);

//             // After using search method 
// let search2 = search.search("world");
// console.log(search2);

// 13. Write a program to concatenate two arrays `['apple', 'banana']` and `['cherry', 'mango']` using the `concat()` method.

// let array1 = ['apple', 'banana'];
// let array2 = ['cherry', 'mango'];
//         //   without using concat method array 
// console.log(array1,array2);

//         //    After using with concat method array
// let arrayConcat = array1.concat(array2);
// console.log(arrayConcat);

// 14. Write a program to find the index of `"blue"` in the array `['red', 'blue', 'green', 'yellow']` using the `indexOf()` method.

// let indexOf1 = ['red', 'blue', 'green', 'yellow'];
//         //   without using indexOf method array 
// console.log(indexOf1);

//             // After using indexOf method array
// let indexOf2 = indexOf1.indexOf("blue");
// console.log(indexOf2);

// 15. Write a program to find the first number greater than 10 in the array `[5, 8, 12, 19]` using the `find()` method.

// let find1 = [5, 8, 12, 19];
//         //   without using find method array 
// console.log(find1);

//         //    After using with find method array 
// let find2 = find1.find(first);
// console.log(find2);

// function first(first2){
//     return first2 > 10;
// }

// console.log(first());


// 16. Write a program to find the index of the first number greater than 20 in the array `[7, 14, 28, 36]` using the `findIndex()` method.

// let findIndex1 = [7, 14, 28, 36];
//         //   without using findIndex method array 
// console.log(findIndex1);

//             // After using with findIndex method array 
// let findIndex2 = findIndex1.findIndex(greater);
// console.log(findIndex2);

// function greater(x){
//     return x > 20;
// }


// 17. Write a JavaScript function that uses `forEach()` to log each element of the array `[1, 2, 3, 4]` to the console.

// let forEach1 = [1, 2, 3, 4];
//             // without using forEach method array 
// console.log(forEach1);

//             // After using with forEach method array 
// let sum = 0;
// let forEach2 = forEach1.forEach(forechfunction);
// function forechfunction(value,index,array){
// sum = value+value;

//     console.log(`value= ${value} Sum= ${sum} index= ${index} array= ${array}`);
// }


// 18. Write a program that multiplies each element of the array `[2, 4, 6, 8]` by 2 using the `map()` method.

// let map1 = [2,4,6,8];
//         //   Without using map method array 
// console.log(map1);

//             //   After using map method array 
// let map2 = map1.map(mapMethod);
// console.log(map2);

// function mapMethod(multiply){
//     return multiply * 2
// }
//         //    Ya multiplies * 5

// let arrayMap = [2,4,6,8];
// console.log(arrayMap);

// let multipliesInarray = arrayMap.map(val=> val*5);
// console.log(multipliesInarray);

// 19. Write a program to filter out all numbers less than 10 from the array `[5, 12, 8, 19, 3]` using the `filter()` method.

// let filterArray1 = [5,12,8,19,3];
//         //   Without using filter method array 
// console.log(filterArray1);


//         //   After using filter method array 

// let filterArray2 = filterArray1.filter(Filtervalue);
// console.log(filterArray2);

// function Filtervalue(value){
//     return value < 10;
// }


// 20. Write a program to check if the array `['dog', 'cat', 'fish']` includes `"cat"` using the `includes()` method.

// let includesArray1 = ['dog','cat','fish'];
//         //   Without using includes method array 
// console.log(includesArray1);

//         //   After using includes method array 
// let includesArray2 = includesArray1.includes('cat');
// console.log(includesArray2);


// 21. Write a program to add `"orange"` and `"grape"` to the end of the array `['apple', 'banana']` using the `push()` method.

// let pushArray1 = ['apple','banana'];
//         //   Without using push method array 
// console.log(pushArray1);

//         //   After using push method array 
// let pushArray2 = pushArray1.push('orange','grape');
// console.log(pushArray2);


// 22. Write a program to add `"pear"` to the beginning of the array `['apple', 'banana']` using the `unshift()` method.

// let unshiftArray1 = ['apple','banana'];
//         //   Without using unshift method array 
// console.log(unshiftArray1);

//         //   After using unshift method array 
// let unshiftArray2 = unshiftArray1.unshift('pear');
// console.log(unshiftArray2);


// 23. Write a program to remove the last element from the array `['car', 'bike', 'bus']` using the `pop()` method.

// let popArray1 = ['car','bike','bus'];
//         //   Without using pop method array 
// console.log(popArray1);

//         //   After using pop method array 
// let popArray2 = popArray1.pop();
// console.log(popArray2);


// 24. Write a program to sort the array `[12, 45, 3, 25, 9]` in ascending order using the `sort()` method.

// let sortArray1 = [12,45,3,25,9];
//         //   Without using sort method array 
// console.log(sortArray1);

//         //   After using sort method array 
// let sortArray2 = sortArray1.sort();
// console.log(sortArray2);


// 25. Write a program to remove 2 elements starting from index 1 in the array `['red', 'blue', 'green', 'yellow']` using the `splice()` method.

// let spliceArray1 = ['red','blue','green','yellow'];
//         //   Without using splice method array 
// console.log(spliceArray1);

//         //   After using splice method array 
// let spliceArray2 = spliceArray1.splice(0,2);
// console.log(spliceArray2);


// 30. Using the `replaceAll()` method, write a program that replaces all occurrences of `"cat"` with `"dog"` in the string `"The cat sat on the cat"`.

// let replaceAll1 = "The cat sat on the cat";
//             //   Without using replaceAll method string 
// console.log(replaceAll1);

//             //    Aftre using replaceAll method string 
// let replaceAll2 = replaceAll1.replaceAll("cat","dog");
// console.log(replaceAll2);






//  TRY THIS BELOW QUETIONS ALSO SOME METHODS ARE NEW FOR YOU!!!!




// 1. Write a JavaScript program to add the numbers `[5, 8, 12]` to an existing array `[1, 2, 3]` using `concat()`. Display the result.
   
// let concatArray1 = [1,2,3];
//         // Without using concat method array 
// console.log(concatArray1);
// let concatArray2 = [5,8,12];
//         // Without using concat method array 
// console.log(concatArray2);

//             // After using concat mathod array 
// let concatArray3 = concatArray1.concat(concatArray2);
// console.log(concatArray3);


// 2. How do you find the length of an array? Write a program to find the length of the array `['apple', 'banana', 'orange']`.

// let lengthArray1 = ['apple','banana','orange'];
//         //    Without using legnth array 
// console.log(lengthArray1);

//        //  After using length array 
// let length2 = lengthArray1.length;
// console.log(length2);


// 3. Use `push()` to add elements `"mango"` and `"grape"` to the array `['apple', 'banana']`, and then remove the last element using `pop()`. Show the final array.

// let push1 = ['apple','banana'];
//         //   Without using any where method array 
// console.log(push1);

//             //   After using push method array 
// push1.push('mango','grape');
// console.log(push1);

//                 // After using pop method array 
// push1.pop();
// console.log(push1);

// 4. Explain the difference between `shift()` and `unshift()`. Write a program that adds `"strawberry"` to the beginning of an array and removes the first element.

// let fruits = ['mango','papaya','banana','guava','pineapple'];
// console.log(fruits);

//             // After using shift method array 
// fruits.shift();
// console.log(fruits);

//             //   After using unshift method array 
// fruits.unshift('strawberry');
// console.log(fruits);


// 5. Given an array `['car', 'bike', 'bus', 'train']`, write a function to find the index of `"bike"`.

// let vehicles = ['car', 'bike', 'bus', 'train'];
// console.log(vehicles);

//             //  normaly use  indexof array 
// let indexofbike = vehicles.indexOf('bike')
// console.log(indexofbike);

//             //   with function indexing bike 
// function findbikeindex(){
//     return vehicles.indexOf('blike');
// }
// console.log(findbikeindex());


// 6. Write a JavaScript function that checks whether `"cat"` is present in the array `['dog', 'bird', 'cat', 'fish']` using the `includes()` method.

// let presentArray = ['dog', 'bird', 'cat', 'fish'];
// console.log(presentArray);

// function catincludes(){
//     return presentArray.includes('cat');
// }
// console.log(catincludes());

// 7. Using the array `['pen', 'book', 'notebook', 'laptop', 'tablet']`, write a program to extract elements from index 1 to 3 using the `slice()` method.

// let arrayvalue = ['pen', 'book', 'notebook', 'laptop', 'tablet'];
// console.log(arrayvalue);

//                 //  After using slice method array 
// let sliceMethod = arrayvalue.slice(1,3)
// console.log(sliceMethod);

// 8. What does `splice()` do? Write a program to remove 2 elements starting from index 2 in the array `['red', 'blue', 'green', 'yellow', 'pink']`.

// let spliceMethod = ['red', 'blue', 'green', 'yellow', 'pink'];
//                 //   without using splice method array 
// console.log(spliceMethod);

//                 //   After using splice method array 
//                 // delete two value splice metthod array ['red', 'blue', 'green', 'yellow', 'pink'] 
// let spliceMethod2  = spliceMethod.splice(2,2);
// console.log(spliceMethod2);

// 9. Given an array `['hello', 'world', 'how', 'are', 'you']`, use the `join()` method to create a string with words separated by spaces.

// let joinMethod = ['hello', 'world', 'how', 'are', 'you'];
//                     // without using join method array 
// console.log(joinMethod);

//                 // After using join Method array 
// let joinString = joinMethod.join(" ");
// console.log(joinString);

// 10. Write a program to reverse the array `['one', 'two', 'three', 'four']` using the `reverse()` method.

// let reverseMethod = ['one', 'two', 'three', 'four'];
//                 // without using reverse method array 
// console.log(reverseMethod);

//                 //    After using reverse method array 
// let usingReverse = reverseMethod.reverse();
// console.log(usingReverse);

// 11. Write a JavaScript program that multiplies each element of an array `[2, 4, 6, 8]` by 2 using the `map()` method.

// let mapMethodMul = [2, 4, 6, 8];
//             // without using map method array
// console.log(mapMethodMul);

//             //   After using map method array 
// let multipliesMapMethod = mapMethodMul.map(multiplies);
// console.log(multipliesMapMethod);

// function multiplies(value){
//     return value * 2;
// }
// // console.log(multiplies());


// 12. Write a function that filters out all numbers less than 10 from the array `[5, 8, 12, 19, 3, 14]` using the `filter()` method.

// let filters = [5, 8, 12, 19, 3, 14];
//             //    without using filter method array 
// console.log(filters);

//                 //    After using filter method array 
// let filters2 = filters.filter(filterfunction);
// console.log(filters2);

// function filterfunction(FilterValue){
//     return FilterValue < 10;
// }


// 13. Explain the `reduce()` method. Write a function to sum all elements of an array `[3, 6, 9, 12]` using `reduce()`.

// let numbers = [3, 6, 9, 12];

// // Use reduce() to calculate the sum

// let sum = numbers.reduce((val1,val2) => {
//     return val1 + val2;
// });

// console.log("Sum of array elements:", sum);


// 14. Write a program that finds the first even number in the array `[1, 7, 9, 12, 15, 18]` using the `find()` method.

// let findArrayEven = [1, 7, 9, 12, 15, 18];
//                 // without using find method array
// console.log(findArrayEven); 

//             //  After using find array method and find the Even number 
// let findArrayEven2 = findArrayEven.find(evennumberfunc);
// console.log(findArrayEven2);

// function evennumberfunc(evenNumber){
//     return evenNumber % 2 === 0;
// }
// console.log(evennumberfunc());


                //   Ya Filter Method in array 

// let arrayValue = [2,3,5,6,79,25,18]; 
// console.log(arrayValue);

// let filtersValue = arrayValue.filter(evenFilter);
// console.log(filtersValue);

// function evenFilter(acceptvlue){
//     return acceptvlue% 2===0;
// }

// 15. Use the `sort()` method to sort the array `[34, 12, 25, 9, 57]` in ascending order.
// String Manipulation

// let sortMethod = [34, 12, 25, 9, 57];
//             // Without using sort method array 
// console.log(sortMethod);

//             //   After using sort Method array 
// let sortMethod2 = sortMethod.sort();
// console.log(sortMethod2);

// 16. How do you find the length of a string? Write a program to find the length of the string `"JavaScript is awesome!"`.

// let lengthString = "JavaScript is awesome!";
//                 // Without using length String method 
// console.log(lengthString);

//                     //  After using length string method 
// let lengthString2 = lengthString.length;
// console.log(lengthString2);

// 17. Write a program that extracts the word `"JavaScript"` from the string `"I love JavaScript"` using the `substring()` method.

// let substringString = "I love JavaScript";
//                 //  Without using substring method string 
// console.log(substringString);

//                 //    After using substring method String
// let substringString2 = substringString.substring(7,17);
// console.log(substringString2);


// 18. Find the first occurrence of the letter `'a'` in the string `"banana"` using `indexOf()`.

// let bananaString = 'banana';
//         //   without using indexof string method 
// console.log(bananaString);

//             //   After using indexof method string 
// let AString = bananaString.indexOf('a');
// console.log(AString);

// 19. Given the string `"red,blue,green,yellow"`, use the `split()` method to create an array of colors.

// let splitString = "red,blue,green,yellow";
//             //   without using split method string 
// console.log(splitString);

//                 //  After using split method string 
// let splitArray = splitString.split(",");
// console.log(splitArray);

// 20. Write a JavaScript function to replace the word `"night"` with `"day"` in the string `"Good night everyone!"` using the `replace()` method.

// let replaceString = "Good night everyone!";
//                 //  Without using replace method string 
// console.log(replaceString);

//                 //    After using replace method string with function 
// let replaceString2 = replaceString.replace(replasingfunc);

// function replasingfunc(){
//     return replaceString.replace('night','day')
// }
// console.log(replasingfunc());


// 21. Write a program that converts the string `"javascript"` to uppercase using the `toUpperCase()` method.

// let uppercaseString = "javascript";
//             //  Without using toUpperCace method string  
// console.log(uppercaseString);

//                 // After using toUppercase method string 
// let uppercaseString2 = uppercaseString.toUpperCase();
// console.log(uppercaseString2);

// 22. How do you convert the string `"HELLO WORLD"` to lowercase? Write a program using the `toLowerCase()` method.

// let lowercaseString = "HELLO WORLD";
//              //  Without using toLowerCace method string  
// console.log(lowercaseString);


//             // After using toLowerCace method string 
// let lowercaseString2 = lowercaseString.toLowerCase();
// console.log(lowercaseString2);


// 23. Write a JavaScript function that trims the whitespace from both ends of the string `"   Hello World!   "` using the `trim()` method.

//  let trimString = "  Hellow World!  ";
//               //  Without using trim method string  
// console.log(trimString);


//             // After using trim method string 
// let trimString2 = trimString.trim();
// console.log(trimString2);


// 24. How can you check if a string starts with `"Hello"`? Write a program using the `startsWith()` method for the string `"Hello everyone!"`.

// let startWString = "Hello everyone!";
//                //  Without using startWith method string  
// console.log(startWString);

//              // After using stratWith method string 
// let startWString2 = startWString.startsWith("Hello");
// console.log(startWString2);

// 25. Write a JavaScript program that checks if the string `"Welcome to JavaScript"` ends with `"JavaScript"` using the `endsWith()` method.

// let endWString = "Welcome to JavaScript";
//                 //  Without using endWith method string  
// console.log(endWString);

//               // After using endWith method string 
// let endWString2 = endWString.endsWith("JavaScript");
// console.log(endWString2);   


// 26. Using the `charAt()` method, write a program that returns the character at index 5 from the string `"JavaScript"`.

// let charAtString = "JavaScript";
//                  //  Without using charAt method string  
// console.log(charAtString);

//                // After using charAt method string 
// let charAtString2 = charAtString.charAt(5);
// console.log(charAtString2);

// 27. Write a function that counts the number of occurrences of the letter `'a'` in the string `"banana"` using the `split()` method.

// let splitCount = "banana";
//                   //  Without using split method count string  
// console.log(splitCount);

//                 // After using charAt method string 
// let splitCount2 = splitCount.split(countfunc);
// console.log(splitCount2);

// function countfunc(){
//     return splitCount.indexOf('a')
// }
// console.log(countfunc());

// 28. How do you repeat a string multiple times? Write a program to repeat the string `"hello"` 3 times using the `repeat()` method.

// let repeatString = "hello";
//                 // Without using repeat method string 
// console.log(repeatString);

//                 // After using repeat method string 
// let repeatString2 = repeatString.repeat(3);
// console.log(repeatString2);                  

// 29. Write a JavaScript function to check whether the string `"Coding"` contains the substring `"ing"` using the `includes()` method.

// function Substringfunc(str, substring) {
//     return str.includes(substring);
//   }
  
//   let result = Substringfunc("Coding", "ing");
//   console.log(result); 


                //  practice


// let fruits = ["Mango","Apple","orange"]

// // Shallow copy 
// // use sprit operator
// const myFruits = [...fruits]



// const user1 = {
//     firstName: "Anil",
//     lastName: "Kumar"
// }

// // Shallow copy 
// // use sprit operator
// const user2 = {...user1}

// Object.assign(user2, user1)
// user2.lastName = "Shrivastava"
// user2.firstName = "Pintu"