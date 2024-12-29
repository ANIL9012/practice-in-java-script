// ELEMENT get karna or value set karna s

// var element;
// element = document.getElementById("header").innerHTML;

// console.log(element);

// element = document.getElementById("header").innerHTML = "<h1>How are you </h1>";

// console.log(element);

// document.getElementById("header").setAttribute("class","xyz")
// // console.log(element);
// element = document.getElementById("header").getAttribute("class");
// console.log(element);

// document.getElementById("header").setAttribute("style","border:10px dotted yellow")
// document.getElementById("header").setAttribute("style","background:blue")

                    //   querySelector   &  querySelectorAll

// document.querySelector("#header").innerHTML = "<h1>Wow</h1>";

// element = document.querySelector("#header").getAttribute("class");
// console.log(element);

// element = document.querySelectorAll(".list")[0].innerHTML;
// console.log(element);

// element = document.querySelectorAll("ul")[0].innerHTML;
// console.log(element);

// element = document.querySelectorAll("#sidbar ul li")[0].innerText;
// console.log(element);


                // JavaScript Duara Css Styling karna 

// there are three method use css styling 

// 1.style
// 2.className
// 3.classList


            // 1.style

// element = document.querySelector("#header").style.color;
// console.log(element);


// element = document.querySelector("#header").style.backgroundColor = "tan";
// console.log(element);

// element = document.querySelector("#header").style.color = "blue";
// console.log(element);


// element = document.querySelector("#header").style.fontSize = "12px";
// console.log(element);

                    // 2.className

// var element;

// element =  document.querySelector("#header").className = "abc xyz";
// console.log(element);

// element.document.querySelector("#header").className;

// console.log(element);


                    // 3.clasList 
        
// var element;

// element =  document.querySelector("#header").classList.add("xyz","efg");
// console.log(element);
                    
// element.document.querySelector("#header").classList;
                    
// console.log(element);

        //   classList removing ke liye 

// element =  document.querySelector("#header").classList.remove("abc","efg");
// console.log(element);
                            
// element.document.querySelector("#header").classList;
                            
// console.log(element);



                //  addEventListener start 

// var element;

// element = document.getElementById("header").onclick = abc;

// function abc(){
//     document.getElementById("header").style.backgroundColor = "red"
// }

// document.getElementById("header").addEventListener("click",function(){
//     document.getElementById("header").style.border = "10px solid pink"
//     document.getElementById("header").style.borderRadius = "10px"
//     this.style.fontSize = "10px"
// })

// element = document.getElementById("header").onmouseover = hover;

// function hover(){
//     document.getElementById("header").style.backgroundColor = "yellow"
//     document.getElementById("header").style.color = "orange"
// }


// document.getElementById("header").addEventListener("mouseleave", leave);

// document.getElementById("header").addEventListener("click",noclick)

// function leave(){
//         document.getElementById("header").style.backgroundColor = "blue"
// }

// function noclick(){
//         document.getElementById("header").removeEventListener("mouseleave",leave)
// }


                //  addEventListener me classList method start 

// var element; 



// element = document.getElementById("header").addEventListener("click",abc);
// function abc(){
// document.getElementById("header").classList.add("mens","hens")
// }

// document.getElementById("header").addEventListener("click",removeclick);

// function removeclick(){
//         document.getElementById("header").classList.remove("xyz","efg")
// }
// element = document.getElementById("header").addEventListener("click",abc);

// function abc(){
//         var a = document.getElementById("header").classList.toggle("ems");

//         var a = document.getElementById("header").classList.length;
        
//         var a = document.getElementById("header").classList;
        
//         var a = document.getElementById("header").classList.item(1);

//         var a = document.getElementById("header").classList.contains("ems");
//         console.log(a);
// }
// abc();
