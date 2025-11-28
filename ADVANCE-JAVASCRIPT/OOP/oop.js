// class hello{
//     message(){
//         console.log("Hello Everyone")
//     }
// }

// let a = new hello;

// a.message();


class student{
    constructor(name, age){
        this.studentname = name;
        this.studentage = age;
        console.log("Constructor function")
    }
    hello(){
        console.log(`Hello ${this.studentname} your age ${this.studentage} old`)
    }
    static staticMethod(){
        console.log("Static Function")
    }
}

let b = new student("Anil Kuamr", 24);
b.hello();
// b.staticMethod(); // staticMethod is not running
student.staticMethod();