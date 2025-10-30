

function sum(name, ...args){
    console.log(arguments)

    let sum = 0;

    document.write(`Hello ${name} Operator : `)

    for(let i in args){
        sum += args[i];
    }
    document.write(sum + "<br/>")
    console.log(sum)
}

let arr = [20,30,40];

// sum("Spread", arr); //Without spread operator ke

sum("Sread", ...arr) //with spread operator

let arr1 = [10,20,30];
let arr2 = [50,60];
let arr3 = [10, ...arr1,arr2,30];
console.log(arr3);


let obj1 = {
    name: "Anil Kumar",
    course: "BCA"
};

let obj2 = {
    age: 24,
};

let obj3 = {...obj1, ...obj2};

console.log(obj3);