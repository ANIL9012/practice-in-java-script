

class employee{
    constructor(name){
        this.empname = name
        console.log("Cunstructor : employee" + name);
    }
    info(){
        console.log("Employee Name : " + this.empname);
    }
}

class manager extends employee{
    // constructor(name){
    //     //  super();
    //     console.log("Cunstructor : manager" + name);
    // }
    info(){
        super.info()
        console.log("Manager Name : " + this.empname);
    }
}
let a = new manager(" Anil Kumar");
a.info();

// console.log("Hii Anil");
// console.log("Hellow Anil");
console.log("Hellow Anil Kumar sir");