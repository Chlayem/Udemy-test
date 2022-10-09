var a = new Audio("sounds/tom-1.mp3");
var b = new Audio("sounds/tom-2.mp3");
var c = new Audio("sounds/tom-3.mp3");
var d = new Audio("sounds/tom-4.mp3");
var e = new Audio("sounds/kick-bass.mp3");
var f = new Audio("sounds/crash.mp3");
var g = new Audio("sounds/snare.mp3");

var T = document.querySelectorAll("button");
T.forEach(e => {e.addEventListener("click",function(){
    var ck = this.getAttribute("class");
    makeSound(ck);
});
});
function makeSound(ck)
{
    switch(ck){
        case "w drum":
            a.play();
            break;
        case "a drum":
            b.play(); 
            break;   
        case "s drum":
            c.play();
            break;
        case "d drum":
            d.play();
            break;           
        case "j drum":
            e.play();
            break;
        case "k drum":
            f.play();
            break;
        case "l drum":
            g.play();
    }

    
}

document.addEventListener("keypress", function (e) {
   // var s = e.key + "dr"
    makeSound(e.key+" drum");
});