

// document.querySelector("#inner").addEventListener("click",function(){
//     alert("inner div")
// },true);

// document.querySelector("#outer").addEventListener("click",function(){
//     alert("outer div")
// },true);

        //    parentElement & parentNode Method


                // 1.parentElement
document.getElementById("inner").parentElement.style.background = "red"

var b = document.getElementById("inner").parentElement;
console.log(b);

                //   2.parentNode

document.getElementById("inner").parentNode.style.background = "red"

var b = document.getElementById("main").parentNode;
console.log(b);