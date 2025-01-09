// 1. Create an object representing a person with properties: `firstName`, `lastName`, and `age`.

// let person = {
//     firstName:"Anil",
//     lastName:"Kumar",
//      age:20
//     };
// console.log(person.firstName,person.lastName,person.age);


// 2. Access and log the `firstName` property of the person object.

// let person2 = {
//     percentage:{
//         Biology:55,
//         Physics:60,
//         Chemistry:65,
//         firstName2:{
//             firstName:"Anil",
//             lastName:"Kumar",
//             age:20,
//             Class:"BCA",
//             Section:"Computer science",
//             Section2:{
//                 Section1:"A",
//                 Section2:"B",
//                 Section3:"C"
//             }
//         }
//     }
// }

// console.log(person2.percentage.firstName2.firstName);


// 3. Update the `age` property of the person object to 25.

// const person3 = {
//     name: "Anil",
//     age: 20
//   };
  
//   console.log(person3);

//   // Updating the age property
//   person3.age = 25;
  
//   console.log(person3);
  

// 4. Add a `city` property to the person object and log it.

// const person4 = {
//     name: "Anil",
//     age: 20
//   };
  
//   // Adding the city property
//   person4.city = "New York";
  
//   console.log(person4); 
  

// 5. change the `lastName` property from the person object.

// const person5 = {
//     firstName: "Anil",
//     lastName: "Kumar",
//     age: 20
//   };
  
//   console.log(person5.firstName,person5.lastName,person5.age);

//   // changing the lastName property
//   person5.lastName = "Shrivastva";
  
//   console.log(person5.firstName,person5.lastName,person5.age); 
  

// 6. Check if the `age` property exists in the person object (without using `in` or `hasOwnProperty`).

// let person6 = {
//     name: "Anil",
//     age: 30
//   };
  
//   // Check if 'age' exists without using 'in' or 'hasOwnProperty'
//   if (person6.age !== name) {
//     console.log('The age property exists.');
//   } else {
//     console.log('The age property does not exist.');
//   }
  

// 7. Create an object representing a `book` with properties `title`, `author`, and `year`. Log the `author` property.

// let book = {
//     title: "The Prime Minister Narendara Modi of INDIA",
//     author: "Anil Kumar",
//     year: 2015
//   };
  
//   // Log the 'author' property
//   console.log(book.author);
  

// 8. Create an object `student` with properties: `name`, `grade`, and `subject`. Update the `grade` property to "A+".

// let student = {
//     name: "Anil",
//     grade: "B",
//     subject: "Mathematics"
//   };

//   console.log(student);
  
//   // Update the 'grade' property to "A+"
//   student.grade = 'A+';
  
//   console.log(student);

  
// 9. Create an object `car` with properties: `make`, `model`, and `year`. Change the `model` property to "Tesla Model S".

// let car = {
//     make:"Ashoka Lealand",
//     model:"Elcher",
//     year:2015
// }

// console.log(car);

// // changing the model property "Tesla Model S"

// car.model = "Tesla Model S";

// console.log(car);

// 10. Create an object `movie` with properties: `title`, `director`, and `releaseYear`. Add a new property `rating` to the movie object.**

// let movie = {
//     title:"Gader2 The prem katha",
//     director:"Anil Sharma",
//     releasingYear:"11 Augost 2023",
//     rating:"U/A"
// }

// console.log(movie);

// // adding a new property rating **

// movie.rating = "**"

// console.log(movie);


// 11. Create an object `person` with properties `firstName`, `lastName`, and `age`. Write a function `greet()` that logs "Hello, [firstName] [lastName]!"

// let person7 = {
//     firstName:"Anil",
//     lastName:"Kumar",
//     age:20,
//     great:function(){
//         console.log("Hello"+" "+person7.firstName+" "+person7.lastName);
//     }
// };
// person7.great();

// Using this keyword method 

// let person8 = {
//     firstName8:"Anil",
//     lastName8:"Kumar",
//     age8:20,
//     great8:function(){
//         console.log("Hello"+" "+this.firstName8+" "+this.lastName8);
//     }
// };
// person8.great8();

// 12. Create an object `counter` with a property `count` set to 0. Write a function to increase the `count` property by 1 each time it’s called.

// let counter = {
//     count: 0,
//      increase(){
//         this.count +=1;
//     }
//   };
  
//   counter.increase();
//   console.log(counter.count);
//         //   Increasing the count value 
//   counter.increase();
//   console.log("Increasing the count value =", counter.count);


// 13. Create an object `dog` with properties: `name`, `breed`, and `age`. Add a method `bark()` that logs "Woof!" when called.

// let dog = {
//     name: "Tommy",
//     breed: "German Shaifert",
//     age: 3,
//     bark() {
//       console.log("Woof!");
//     }
//   };
//   console.log(dog);

//   dog.bark();
  

// 14. Create an object `product` with properties `name`, `price`, and `quantity`. Write a function `getTotalPrice()` that returns the total price (`price * quantity`).

// let product = {
//     name:"Watch",
//     price:800,
//     quantity:3,
//     getTotalPrice(){
//         return this.price * this.quantity;
//     }
// }

// console.log("The Watch Total Price =", product.getTotalPrice());

// 15. Create an object `user` with properties `username`, `email`, and `password`. Log the values of the `username` and `email` properties.

// let user = {
//     username:"Anil Kumar",
//     email:"9012kumaranil@gmail.com",
//     password:120987234
// }

// console.log(user.username,user.email);

// 16. Create an object `address` with properties `street`, `city`, and `zipcode`. Modify the `city` property to "Los Angeles".

// let address = {
//     street:"2 Brahaman street",
//     city:"Rampur",
//     zipcode:244922
// }

// console.log(address);

//     // Modify the city property 
// address.city = "Los Angeles"

// console.log(address);


// 17. Create an object `person` with properties `name` and `age`. Write a function `isAdult()` that returns `true` if `age` is 18 or above.

// let person9 = {
//     name:"Anil",
//     age:20,
//     isAdult(){
//         return this.age >= 18;
//     }
// }
// // console.log(person9.name,person9.age);
// console.log(person9.isAdult());

// 18. Create an object `order` with properties `item`, `quantity`, and `price`. Calculate the total cost (quantity * price) and log it.

// let order = {
//     item:"Jug",
//     quantity:6,
//     price:50,
 
// }
// console.log("the Order item multiplication quantity and price =", order.quantity*order.price);

// 19. Create an object `teamMember` with properties `name`, `role`, and `experience`. Add a new property `team` and assign it a value "Development".

// let teamMember = {
//     name: "Anil",
//     role: "Software Engineer",
//     experience: 2
//   };
  
//   // Add a new property 'team' and assign it the value "Development"
//   teamMember.team = "Development";
  
//   console.log(teamMember);
  

// 20. Create a constructor function `Person` that accepts `name`, `age`, and `gender` as arguments, and creates a new object with these properties.

// function person10(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person_1 = new person10("Anil",20,"Male");
// let person_2 = new person10("Anjali",18,"Female");
// let person_3 = new person10("Sontu",22,"Male");

// console.log(person_1);
// console.log(person_2);
// console.log(person_3);


// // object me value ko nested karna ka tarika 

// let user2 = {
//     firstName: "Anil",
//     lastName: "Kumar",
//     pata:{
//         city: "Banglore",
//         pinCode: 296434,
//         state: "karnatka",
//         moreDetails:{
//             population:3873329686,
//             area: "787 sq km",
//         }
//     }
// }

// // object me value assign arne ka tarika

// user2.pata.moreDetails.weather = "80deg"

// // object me value ko delete karne ka tarika

// delete user2.firstName


// // object ki sabhi value ko freez karne ka tarika jisse koie bhi person delete ya value assign na kar sake 

// Object.seal(user2) //object seal method ka use karke value ko delete or new value ko add nahi  kar sakte he
// //  per value ko refrece kar sakte he

// user2.lastName = "Shrivastava"
// //  do not add new value 
// user2.age = 23

// // object ke freeze method ka use object ki sabhi value ko freez karne me hota he jisse object ki kisi bhi value ko
// //  koie bhi person delete ya value assign na kar sake 

// Object.freeze(user2)