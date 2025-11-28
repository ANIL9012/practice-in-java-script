
function sum(name, ...args){
    // console.log(arguments)

    let sum = 0;

    document.write(`Hello ${name} : `)

    for(let i in args){
        sum += args[i];
    }
    document.write(sum + "<br/>")
    console.log(sum)
}

sum("Anil Kumar", 20,30,40);
sum("Rishabh Srivastav", 20,30);
