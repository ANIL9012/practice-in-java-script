            //  Window Height & Width Method

// function resizefunction(){
//     console.clear();

    // var innerHeight = window.innerHeight;
    // console.log("innerHeight" + innerHeight);

    // var outerHeight = window.outerHeight;
    // console.log("outerHeight" + outerHeight);

    // var innerWidth = window.innerWidth;
    // console.log("innerWidth" + innerWidth);

    // var outerWidth = window.outerWidth;
    // console.log("outerWidth" + outerWidth);

// }


            //    Window Open & Close Method

// var myWindow;
// function openWindow(){
//    myWindow =  window.open("https://www.yahoobaba.net","","width=500px,height=200px,left=500px,top=200px");
// }

// function closeWindow(){
//     myWindow.close();
// }


            //  Window moveBy & moveTo 


// var myWindow;
// function openWindow(){
//     myWindow =  window.open("","","width=500px,height=200px,left=200px,top=200px");
//     myWindow.document.write("mobving the window")
// }
            
// function closeWindow(){
//     myWindow.close();
// }

// function moveWindow(){
//     // myWindow.moveTo(100,100)
//     myWindow.moveBy(100,100)
//     myWindow.focus();
// }

                // resizeBy & resizeTo

var myWindow;
function openWindow(){
    myWindow =  window.open("","","width=500px,height=200px,left=30px,top=30px");
    myWindow.document.write("mobving the window")
}
                            
function closeWindow(){
    myWindow.close();
}
                
function resizeWindow(){
    // myWindow.resizeTo(100,100)
    myWindow.resizeBy(100,100)
}
                

                //    scrollBy & scrollTo