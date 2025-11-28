
let name = "Anil Kumar";
let cource = "BCA";

let obj = {
    name,
    cource,
}

console.log(obj);

let n = "name";

let obj1 = {
    [n] : "Kesabh Srivastav",
    cource: "BCA",
    detail(){
        return`${this.name} is student of ${this.cource}`
    }
}

console.log(obj1);
console.log(obj1.detail());