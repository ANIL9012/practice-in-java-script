

// document.querySelector("#inner").addEventListener("click",function(){
//     alert("inner div")
// },true);

// document.querySelector("#outer").addEventListener("click",function(){
//     alert("outer div")
// },true);


        //    parentElement & parentNode Method


                // 1.parentElement

// document.getElementById("inner").parentElement.style.background = "red"

// var b = document.getElementById("inner").parentElement;
// console.log(b);

//                 //   2.parentNode

// document.getElementById("inner").parentNode.style.background = "red"

// var b = document.getElementById("main").parentNode;
// console.log(b);


                //  Children & childNodes Methods 

                // 1.Children

// document.getElementById("inner").parentNode.style.background = "red"

// var b = document.getElementById("inner").children[1].children[2].style.background = "blue";
// var b = document.getElementById("inner").children[1].children[2].style.color = "red";
// console.log(b);

                //  2.childNodes

// document.getElementById("inner").childNodes[1].style.background = "blue";
// document.getElementById("inner").childNodes[1].style.color = "red";


                    // firstElementChild & lastElementChild Method


                    // 1. firstElementChild
    
// var b = document.getElementById("inner").firstElementChild.innerHTML
// console.log(b);

// document.getElementById("inner").firstElementChild.style.background = "yellowgreen"
// document.getElementById("inner").firstElementChild.style.color = "#d4f"


                        //  2.lastElementChild


// document.getElementById("parent-div").lastElementChild.style.background = "yellowgreen"
// document.getElementById("parent-div").lastElementChild.style.color = "#d0f"


                    // firstChild & lastChild Method

                    // 1. firstChild

// var b = document.getElementById("inner").firstChild
// console.log(b);

// var c = document.getElementById("inner").childNodes
// console.log(c);


                    //   nextElementSibling & previousElementSibling Method 


                        // 1.nextElementSibling

// var d = document.getElementById("child-c").nextElementSibling;
// console.log(d);

// document.getElementById("child-c").nextElementSibling.style.background = "yellowgreen";

                    //    2.previousElementSibling

// var e = document.getElementById("child-c").previousElementSibling;
// console.log(e);

// document.getElementById("child-c").previousElementSibling.style.background = "red"



                            //   nextSibling & previousSibling Method

                            //   1.nextSibling

// var f = document.getElementById("child-c").previousSibling;
// console.log(f);

                            //    2.previousSibling

// var g = document.getElementById("child-c").nextSibling;
// console.log(g);


            //    createElement & createTextNode & createComment
                 
            // 1.createElement

// var createElement = document.createElement("p");
// console.log(createElement);


            //    2.creatTextNode 

// var createTextNode = document.createTextNode("This is a peragraph");
// console.log(createTextNode);

                //  3.createComment

// var createComment = document.createComment("just in live comment");
// console.log(createComment);
