            //    createElement & createTextNode & createComment
                 
            // 1.createElement

// var createElement = document.createElement("h2");
// console.log(createElement);


            //    2.creatTextNode 

// var createTextNode = document.createTextNode("This is a Heading Two");
// console.log(createTextNode);

                //  3.createComment

// var createComment = document.createComment("just in live comment");
// console.log(createComment);


                //   appendChild & insertBefore 

                    //   1.appendChild 

// var text_in_Tag = createElement.appendChild(createTextNode)

// document.getElementById("test").appendChild(createElement)

// console.log(text_in_Tag);

                //  2.insertBefore

// var traget = document.getElementById("test");

// traget.insertBefore(createElement,traget.childNodes[0]) 


                //    insertAdjacentElement & insertAdjacentHTML & insertAdjacentText

                // 1.insertAdjacentElement

// var element1 = document.createElement("h2");
// var text1 = document.createTextNode("This is a heading two");

// element1.appendChild(text1);

// var target1 = document.getElementById("test");

// target1.insertAdjacentElement("beforeend", element1)

                // 2.insertAdjacentHTML

// var target2 = document.getElementById("test");

// var element2 = "<h3>This is a Heading three</h3>";

// target2.insertAdjacentHTML("afterbegin", element2)

                //  3.insertAdjacentText

// var target3 = document.getElementById("test");

// var text3 = "This is a Text Heading";

// target3.insertAdjacentText("beforeend",text3)


                // replaceChild & removeChild

                    // 1.replaceChild

// var element4 = document.createElement("li");

// var text4 = document.createTextNode("WOW new Text");

// element4.appendChild(text4)

// var target4 = document.getElementById("list");
// var oldelement = target4.children[0];

// target4.replaceChild(element4,oldelement)


                    //  2.removeChild

// var target4 = document.getElementById("list");
// var oldelement = target4.children[2];

// target4.removeChild(oldelement)


                    //   cloneNode

// var target5 = document.getElementById("list1").children[0]

// var copyElement = target5.cloneNode(true)

// console.log(copyElement);

// document.getElementById("list2").appendChild(copyElement)

                    //   Contains Method

// var parentElement = document.getElementById("test")
// var target6 = document.getElementById("abc");

// var find = parentElement.contains(target6)

// console.log(find);


                    //  hasAttribute & hasChildNodes

                //    1. hasAttribute

// var target7 = document.getElementById("test");
// var find1 = target7.hasAttribute("class")

// console.log(find1); 

                //   2.hasChildNodes


// var target7 = document.getElementById("test");
// var find1 = target7.hasChildNodes()

// console.log(find1);

                        //   isEqualNode Method
            
// var target8 = document.getElementById("list").firstElementChild;

// var target9 = document.getElementById("list1").children[0]

// var equal = target8.isEqualNode(target9)
// console.log(equal); 



                //   Form Events

// document.getElementById("fname").onfocus = focusfunction;

// function focusfunction(){
//     document.getElementById("fname").style.background = "red"
// }

                    //   onfocus formevent 

// function focusfunction(element){
//     element.style.background = "lime"
// }


//                 //  onblur formevent 


// function blurfunction(element){
//     element.style.background = ""
// }


//                 //  oninput formevent 

// function inputfunction(element){
//     var x = element.value;
//     document.getElementById("inputtest").innerHTML = x;
// }


//                 //  onchange formevent 

// function changeFunction(element){
//     var x = element.value;
//     document.getElementById("inputtest").innerHTML = x;
// }

// function selectfunction(){
//     console.log("You select some text");
// }

// function submitfunction(){
//     var x = document.getElementById("fname").value;
//     alert(x)
// }