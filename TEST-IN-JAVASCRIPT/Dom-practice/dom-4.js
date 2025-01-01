                    // setInterval & clearInterval 

// var a = 0;

// var x = setInterval(Anim,1000)

// function Anim(){
//     a = a + 10;
//     if(a == 200){
//         clearInterval(x)
//     }else{
//         var target = document.getElementById("dom-animation");
//         target.style.marginLeft = a + "px"
    
//     }
// }


                        // setTimeout & clearTimeout


var set = setTimeout(Anim, 5000);

function Anim(){
    var target2 = document.getElementById("dom-animation");
    target2.style.width = "500px"
}

function stopAnimation(){
    clearTimeout(set)
}